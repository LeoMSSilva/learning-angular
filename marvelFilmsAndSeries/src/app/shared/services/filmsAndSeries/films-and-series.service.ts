import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  filmsAndSeriesComplete,
} from '../../types/filmsAndSeries-types';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmsAndSeriesService {
  constructor(private http: HttpClient) {}

  readonly apiPath = `${environment.apiPath}/marvels`;

  getMarvels(): Observable<filmsAndSeriesComplete[]> {
    return this.http.get<filmsAndSeriesComplete[]>(this.apiPath);
  }

  getMarvelById(id: number): Observable<filmsAndSeriesComplete> {
    return this.http.get<filmsAndSeriesComplete>(`${this.apiPath}/${id}`);
  }
}
