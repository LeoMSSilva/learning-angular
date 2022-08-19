import { useEffect, useRef } from "react";
import { Observable, Subject, interval, of, combineLatest } from "rxjs";
import {
  tap,
  delay,
  mapTo,
  map,
  scan,
  mergeMap,
  exhaustMap,
  switchMap,
  filter,
  debounceTime,
  distinctUntilChanged,
  withLatestFrom,
  takeUntil,
} from "rxjs/operators";

let countClicks = 0;

function simulateRequest(
  errorChance = 0.5,
  requestTime: number = 500,
  value = "R"
) {
  console.log("request start");
  return of(value).pipe(
    delay(requestTime),
    tap(() => {
      console.log("request end");
      if (Math.random() >= 1 - errorChance) {
        console.log("request error");
        throw new Error("Erro");
      }
    })
  );
}

export default function useIndex() {
  const inputRef = useRef<HTMLInputElement>(null);

  const producer$ = new Observable<string>((subscriber) => {
    subscriber.next("P1");
    setTimeout(() => {
      // subscriber.next("P2")
      subscriber.error();
    }, 2000);
  });
  const count$ = interval(1000);
  const click$ = new Subject<string>();
  const mouseMove$ = new Subject<[x: number, y: number]>();
  const mouseDown$ = new Subject<"MD">();
  const mouseUp$ = new Subject<"MU">();
  const key$ = new Subject<string>();
  const input$ = new Subject<string>();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      countClicks++;
      click$.next(`C${countClicks}`);
    });
    document.addEventListener("mousemove", (e) => {
      mouseMove$.next([e.clientX, e.clientY]);
    });
    document.addEventListener("mousedown", (e) => {
      mouseDown$.next("MD");
    });
    document.addEventListener("mouseup", (e) => {
      mouseUp$.next("MU");
    });
    inputRef.current?.addEventListener("keydown", (e) => {
      key$.next(e.key);
    });
    inputRef.current?.addEventListener("input", (e) => {
      const { value } = e.target as HTMLInputElement;
      input$.next(value);
    });
  });

  const subscription = count$.subscribe({
    next: (value) => console.log(`next count$: ${value}`),
    error: (error) => console.log(error),
    complete: () => console.log("complete"),
  });

  subscription.unsubscribe();

  const TIME = 30000;

  const exercicie1$ = count$.pipe(mapTo(2));
  const exercicie2$ = count$.pipe(map((x) => x * 2));
  const exercicie3$ = count$.pipe(scan((acc, i) => acc + i, 0));
  const exercicie4$ = click$.pipe(mergeMap((c) => simulateRequest(0)));
  const exercicie5$ = click$.pipe(switchMap((c) => simulateRequest(0)));
  const exercicie6$ = click$.pipe(exhaustMap((c) => simulateRequest(0)));
  const exercicie7$ = key$.pipe(filter((k) => k === "Enter"));
  const exercicie8$ = input$.pipe(debounceTime(200));
  const exercicie9$ = exercicie8$.pipe(switchMap((c) => simulateRequest(0)));
  const exercicie10$ = key$.pipe(distinctUntilChanged());
  const exercicie11$ = combineLatest([count$, click$, input$]);
  const exercicie12$ = count$.pipe(
    withLatestFrom(input$),
    map(([_, input]) => input)
  );
  const exercicie13$ = mouseDown$.pipe(
    switchMap(() => mouseMove$.pipe(takeUntil(mouseUp$)))
  );

  const observables: Array<[name: string, observable: Observable<any>]> = [
    ["count$", count$],
    ["exercicie1$", exercicie1$],
    ["exercicie2$", exercicie2$],
    ["exercicie3$", exercicie3$],
    ["click$", click$],
    ["exercicie4$", exercicie4$],
    ["exercicie5$", exercicie5$],
    ["exercicie6$", exercicie6$],
    ["key$", key$],
    ["exercicie7$", exercicie7$],
    ["input$", input$],
    ["exercicie8$", exercicie8$],
    ["exercicie9$", exercicie9$],
    ["exercicie10$", exercicie10$],
    ["exercicie11$", exercicie11$],
    ["exercicie12$", exercicie12$],
    ["mouseDown$", mouseDown$],
    ["mouseMove$", mouseMove$],
    ["mouseUp$", mouseUp$],
    ["exercicie13$", exercicie13$],
  ];

  return {
    TIME,
    inputRef,
    observables,
  };
}
