import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <img className="Card" src={this.props.image} alt={this.props.name}></img>
    );
  }
}
export default Card;