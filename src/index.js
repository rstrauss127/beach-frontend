import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      <div class="quote">
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
      <div class="quoteText">{quotes[this.props.value].quote}</div>
    );
  }
}

class Author extends React.Component {
  render() {
    return(
      <div class="authorOrTitle">{quotes[this.props.value].author}</div>
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
  <>
    <Quote value={0}/>
    <Quote value={1}/>
    <Quote value={2}/>
    <Quote value={3}/>
    <Quote value={4}/>
    <Quote value={5}/>
    <Quote value={6}/>
    <Quote value={7}/>
    <Quote value={8}/>
    <Quote value={9}/>
    <Quote value={10}/>
    <Quote value={11}/>
    <Quote value={12}/>
    <Quote value={13}/>
    <Quote value={14}/>
    <Quote value={15}/>
    <Quote value={16}/>
    <Quote value={17}/>
    <Quote value={18}/>
  </>,
  document.getElementById('root')
);
