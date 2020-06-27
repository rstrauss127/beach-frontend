import React from "react";
//import { render } from "react-dom";
export const Quote = ({ quote, author, book }) => {
  return (
    <section>
      <h3>{quote}</h3>
      <p>by: {author}</p>
      <p>{book}</p>
    </section>
  );
};
