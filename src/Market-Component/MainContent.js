import React, { Component } from "react";
import { generate } from "shortid";
import Header from "./Header";

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

  componentDidMount() {
    const shoeData = [
      {
        id: 1,
        name: "jordan 1 high",
        price: 322,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Court-Purple-White_01.jpg",
      },
      {
        id: 2,
        name: "Pressto off-white",
        price: 1500,
        picture: "https://stockx-assets.imgix.net/png/brand-tiles/001-nike.png",
      },
      {
        id: 3,
        name: "Jordan 6 Retro DMP",
        price: 224,
        picture:
          "https://stockx.imgix.net/Air-Jordan-6-Retro-DMP-2020-Product.jpg",
      },
      {
        id: 4,
        name: "Jordan 1 Mid Camo (2020)",
        price: 203,
        picture: "https://stockx.imgix.net/Air-Jordan-1-Mid-Camo-2020.png",
      },
      {
        id: 5,
        name: "Jordan 1 Retro Bred (2001)",
        price: 600,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-Bred-2001-Product.jpg",
      },
      {
        id: 6,
        name: "Adidas Yeezy Boost 350 V2",
        price: 305,
        picture:
          "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg",
      },
      {
        id: 7,
        name: "Jordan 1 Retro High Royal Toe",
        price: 210,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Black-Game-Royal.png",
      },
      {
        id: 8,
        name: "Jordan 1 Retro High Pine green",
        price: 197,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green-Black-Product.jpg",
      },
      {
        id: 9,
        name: "Jordan 1 Retro High NC to Chi",
        price: 199,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W-Product.jpg",
      },
      {
        id: 10,
        name: "Jordan 5 Retro Fire Red Silver",
        price: 232,
        picture:
          "https://stockx.imgix.net/Air-Jordan-5-Retro-Fire-Red-Silver-Tongue-2020.png",
      },
      {
        id: 11,
        name: "Nike Air Force 1 Low White '07 ",
        price: 89,
        picture:
          "https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg",
      },
      {
        id: 12,
        name: "Adidas Yeezy Boost 700 Wave",
        price: 390,
        picture:
          "https://stockx.imgix.net/Adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg",
      },
    ];
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
          <h3 style={{ marginTop: "3rem" }}>Cart :</h3>
          <ul>{this.getCartList()} </ul>
          <hr />
          <strong>Total : ${this.getTotalPrice()}</strong>
          <hr />
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
        <button onClick={clickBuyBtn} className="btn btn-success full-width">
          Buy
        </button>
      </div>
    </div>
  );
}

export default MainContent;
