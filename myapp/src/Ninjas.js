import React from "react";

const Ninjas = ({ ninjas }) => {
  // in function comp, props is passed a parameter, accessed without 'this'
  // const { ninjas } = props;
  /*
  const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 20) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>My name: {ninja.name}</div>
          <div>My age: {ninja.age}</div>
          <div>Belt: {ninja.belt} </div>
          <hr />
        </div>
      );
    } else {
      return null;
    }
  }); 
  */
  //  Conditional outiputing using turnali operator
  const ninjaList = ninjas.map(ninja => {
    return ninja.age < 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>My name: {ninja.name}</div>
        <div>My age: {ninja.age}</div>
        <div>Belt: {ninja.belt} </div>
        <hr />
      </div>
    ) : null;
  });

  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
