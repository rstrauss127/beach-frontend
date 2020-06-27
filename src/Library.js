import React from "react";
import { render } from "react-dom";
import { Quote } from "./Quotes";
import { quotes } from "./data.js";

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const quotes = this.props;
    console.log(quotes);
    return (
      <div>
        <h1>Quote Library</h1>

        {quotes.quotes.map((quote, i) => (
          <Quote
            key={i}
            quote={quote.quote}
            author={quote.author}
            book={quote.book}
          />
        ))}
      </div>
    );
  }
}

render(<Library quotes={quotes} />, document.getElementById("root"));
