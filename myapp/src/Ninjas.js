import React from "react";

const Ninjas = ({ ninjas }) => {
  // in function comp, props is passed a parameter, accessed without 'this'
  // const { ninjas } = props;
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>My name: {ninja.name}</div>
        <div>My age: {ninja.age}</div>
        <div>Belt: {ninja.belt} </div>
        <hr />
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
