import { SingleColor } from './SingleColor';
import React from "react";
import { nanoid } from "nanoid";
export function Colors({ values }) {
  return (
    <div className="colors">
      {values.map((value, index) => (
        <SingleColor value={value} index={index} key={nanoid()} />
      ))}
    </div>
  );
}
