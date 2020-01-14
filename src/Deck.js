import React, { Component } from "react";
import axios from "axios";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null };
  }
  componentDidMount() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle";
    axios.get(url).then(response => {
      console.log(response);
    });
  }
  render() {
    return <div>hello</div>;
  }
}
export default Deck;
