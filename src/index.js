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
        {this.renderStatement(this.props.value)} 
        {this.renderAuthor(this.props.value)}
        {this.renderSource(this.props.value)}
      </div>
    );
  }
}

class Statement extends React.Component {
  render() {
    return(
      <div name="Statement">{quotes[this.props.value].quote}</div>
    );
  }
}

class Author extends React.Component {
  render() {
    return(
      <div>{quotes[this.props.value].author}</div>
    );
  }
}

class Source extends React.Component{
  render() {
    return(
      <div>{quotes[this.props.value].book}</div>
    );
  }
}


ReactDOM.render(
  <Quote value={1}/>,
  document.getElementById('root')
);
