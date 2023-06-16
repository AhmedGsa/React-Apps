import avatar from '../../../assets/default-avatar.svg'
import React from "react";
export function Person({person}) {
  const {images} = person;
  return <div>
    <h1>{person.name}</h1>
    <h2>{person.nickName}</h2>
    <img src={images?.[0]?.small?.url ?? avatar} ></img>
  </div>
  ;
}
  