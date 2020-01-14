import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }
  componentDidMount() {
    axios.get(`${API_BASE_URL}/new/shuffle/`).then(result => {
      this.setState({ deck: result.data });
    });
  }
  getCard() {
    let id = this.state.deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${id}/draw/`;
      axios.get(cardUrl).then(result => {
        if (!result.data.success) {
          throw new Error("No Card Remaining");
        } else {
          let card = result.data.cards[0];
          this.setState(prev => ({
            drawn: [
              ...prev.drawn,
              {
                id: card.code,
                image: card.image,
                name: `${card.value} of ${card.suit}`
              }
            ]
          }));
        }
      });
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const cards = this.state.drawn.map(card => (
      <Card key={card.id} name={card.name} image={card.image} />
    ));
    return (
      <div>
        <h1>Card Dealer</h1>
        <button onClick={this.getCard}>Get Card </button>
        {cards}
      </div>
    );
  }
}
export default Deck;
