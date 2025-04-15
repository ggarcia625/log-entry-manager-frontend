import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <input name="name" type="text" placeholder="name"></input>
        <input name="date" type="text" placeholder="date"></input>
        <input name="description" type="text" placeholder="description"></input>
        <input name="location" type="text" placeholder="location"></input>
      </form>
    </div>
  );
};

export default Form;
