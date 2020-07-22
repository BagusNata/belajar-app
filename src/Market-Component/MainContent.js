import React, { Component } from "react";
import { generate } from "shortid";
import Header from "./Header";
import Navbar from "../Navbar"
import { environtment } from "../environtment";

const initialState = {
  name: "",
  price: "",
  picture: "",
  nameError: "",
  priceError: "",
  pictureError: "",
};
export class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      cart: [],
      total: 0,
      initialState,
    };
    this.addToCard = this.addToCard.bind(this);
  }

  async componentDidMount() {
    const url = `${environtment.API_URL}/shoes`;
    const response = await fetch(url);
    const shoeData = await response.json();
    this.setState({ shoes: shoeData });
  }

  addToCard(shoe) {
    console.log("item add to card is ", shoe);

    const isiKeranjang = this.state.cart;
    isiKeranjang.push(shoe);
    this.setState({ cart: isiKeranjang });

    console.log("isi keranjang sekarang", this.state.cart);
  }

  getCartList() {
    const cardData = this.state.cart;
    const cartCard = cardData.map((shoe, index) => {
      return (
        <li key={index}>
          {index + 1}. {shoe.name} ${shoe.price}
        </li>
      );
    });
    return cartCard;
  }

  getTotalPrice() {
    const cardData = this.state.cart;
    let total = 0;
    cardData.forEach((shoe) => {
      total += shoe.price;
    });
    return total;
  }

  validate = () => {
    let nameError = "";
    let priceError = "";
    let pictureError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank!";
    }
    if (!this.state.price) {
      priceError = "price cannot be blank!";
    }
    if (!this.state.picture.includes("https://")) {
      pictureError = "invalid picture link!";
    }

    if (nameError || priceError || pictureError) {
      this.setState({ nameError, priceError, pictureError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);

      const newShoe = {
        id: generate(),
        name: this.state.name,
        price: this.state.price,
        picture: this.state.picture,
      };
      console.log("new state", this.state.shoes);
      console.log("new shoe", newShoe);

      // get all the shoes from state
      const shoes = [...this.state.shoes];

      // add new shoe to the shoes array in state
      shoes.push(newShoe);

      // clear form for next item
      this.setState({
        shoes: shoes,
        name: "",
        price: "",
        picture: "",
      });
    }
    console.log("clicked");
    return;
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.type === "number"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  };


  render() {
    const ShoeCards = this.state.shoes.map((shoe) => (
      <ShoeCard
        key={shoe.id}
        shoe={shoe}
        price={shoe.price}
        addToCard={this.addToCard}
      />
    ));

    return (
      <div style={{ background: "#fafafa" }}>
          <Navbar />
          <Header />
        <div className="container addshoes">
          <div className="styleflexx">
            <h3>Add New Shoe</h3>
            <form onSubmit={this.handleSubmit}>
              <label>Enter the shoe data that you want to add here :</label>
              <br />
              <div>
                <input
                  name="name"
                  placeholder="Shoe name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.nameError}
                </div>
              </div>
              <div>
                <input
                  type="number"
                  name="price"
                  placeholder="Shoe price"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.priceError}
                </div>
              </div>
              <div>
                <input
                  name="picture"
                  placeholder="Shoe picture"
                  value={this.state.picture}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.pictureError}
                </div>
              </div>
              <br />
              <button style={{ marginTop: "1rem" }}>add</button>
            </form>
          </div>
        </div>

        <div className="container">
          <div>{ShoeCards}</div>
          <div
            className="totalStylee"
            style={{
              display: "block",
              background: "whitesmoke",
              color: "black",
            }}
          >
            <h3 style={{ marginTop: "3rem",paddingLeft:"10px" }}>Cart :</h3>
            <ul>{this.getCartList()} </ul>
            <hr />
            <strong style={{paddingLeft:"10px"}}>Total : ${this.getTotalPrice()}</strong>
            <hr />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

function ShoeCard(props) {
  const clickBuyBtn = () => {
    props.addToCard(props.shoe);
  };
  return (
    <div className="card shoes-card">
      <img className="img" src={props.shoe.picture} alt="" />
      <div className="card-body" alt="">
        <p className="card-text">{props.shoe.name}</p>
        <p className="card-text">${props.price}</p>
        <button onClick={clickBuyBtn} className="btn btn-success btncolor full-width">
          Buy
        </button>
      </div>
    </div>
  );
}

export default MainContent;
