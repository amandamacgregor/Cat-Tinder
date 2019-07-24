import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import '../App.css';

export default class Cats extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <ListGroup>
            {this.props.cats.map((cat, index) =>{
              return (
                <ListGroup.Item key={index}>
                  <h4>
                    <span className='cat-name'>{cat.name}</span> - <small className='cat-age'>{cat.age} years old</small>
                  </h4>
                    <span className='cat-enjoys'>{cat.enjoys}</span>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Col>
        </Row>

      </div>
      )
  }
}
