import React from "react";
import RxViz from "../components/RxViz";
import useIndex from "../hooks/useIndex";

export default function Index() {
  const { TIME, inputRef, observables } = useIndex();

  return (
    <div className="container">
      <div className="inputContainer">
        <span>Input de texto:&nbsp;</span>
        <input id="input" ref={inputRef} />
      </div>
      {observables.map(([name, obs$]) => (
        <div className="graphContainer" key={name}>
          <strong>{name}</strong>
          <RxViz timeWindow={TIME} observable$={obs$} />
        </div>
      ))}
    </div>
  );
}
