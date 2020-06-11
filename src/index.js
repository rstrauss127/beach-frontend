import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

const bla = require('./data.js');
const quotes = bla.quotes;

class Quote extends React.Component {
  renderStatement(i) {
    return <Statement value={i} />
  }

  renderAuthor(i) {
    return <Author value={i} />
  }

  renderSource(i) {
    return <Source value={i} />
  }

  render() {
    return(
      <div className="Quote">
        {this.renderStatement(0)}  {this.renderAuthor(0)} {this.renderSource(0)}
      </div>
    );
  }
}

class Statement extends React.Component {
  render() {
    return(
      <div>{quotes[0].quote}</div>
    );
  }
}

class Author extends React.Component {
  render() {
    return(
      <div>{quotes[0].author}</div>
    );
  }
}

class Source extends React.Component{
  render() {
    return(
      <div>{quotes[0].book}</div>
    );
  }
}



ReactDOM.render(
  <Quote />,
  document.getElementById('root')
);

console.log(quotes[0].quote);
