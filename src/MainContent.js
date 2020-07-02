import React, { Component } from "react";

export class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      cart: [],
      total: 0,
      name: "",
      price: "",
      picture: "",
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
        <li>
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
      total = total + shoe.price;
    });
    return total;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name == 0) {
      return;
    }
    // create shoe object to push into shoe array in state
    const newShoe = {
      id: Date.now().toString(),
      name: this.state.name,
      price: this.state.price,
      picture: this.state.picture
    };
    console.log("new state",this.state.shoes);
    console.log("new shoe", newShoe);
    // get all the shoes from state
    const shoes = [...this.state.shoes];
    // add new shoe to the shoes array in state
    shoes.push(newShoe);
    // clear form for next item
    this.setState({
      shoes:shoes,
      name:"",
      price:"",
      picture:""
    });
    console.log("clicked")
    return;
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const ShoeCards = this.state.shoes.map((shoe) => (
      <ShoeCard shoe={shoe} addToCard={this.addToCard} />
    ));

    return (
      <div>
        <div className="container addshoes">
          <div div className="styleflexx">
            <h3>Add New Shoe</h3>
            <form onSubmit={this.handleSubmit}>
              <label>Enter the shoe data that you want to add here :</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="shoe name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <input
                type="number"
                name="price"
                placeholder="shoe price"
                value={this.state.price}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="picture"
                placeholder="shoe picture"
                value={this.state.picture}
                onChange={this.handleChange}
              />
              <br />
              <button>add</button>
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
    <div className="card shoes-cardd">
      <img className="img" src={props.shoe.picture} />
      <div className="card-body" alt="">
        <p className="card-text">{props.shoe.name}</p>
        <p className="card-text">${props.shoe.price}</p>
        <button onClick={clickBuyBtn} className="btn btn-success full-width">
          Buy
        </button>
      </div>
    </div>
  );
}

export default MainContent;
