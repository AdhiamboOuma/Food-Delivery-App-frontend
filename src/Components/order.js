import React, { Component } from "react";
import axios from "axios";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      telephone: "",
      item: "",
      payment: "",
    };
  }
handleLocation = (event) => {
  this.setState ({
    location: event.target.value,
  });
};
  handleTelephone = (event) => {
    this.setState ({
      telephone: event.target.value,
    });
};
handleItem = (event) => {
  this.setState ({
    item: event.target.value,
  });
};
handlePayment = (event) => {
  this.setState ({
    payment: event.target.value,
  });
};

handleSubmit = event => {
  event.preventDefault()
    const userObject =  {
      location: this.state.location,
      telephone: this.state.telephone,
      item: this.state.item,
      payment: this.state.payment,
    };
    axios 
    .post("http://localhost:8080/order", userObject)
    .then((response) => {
      console.log(response.data);
      this.props.history.push ("/");
    })
    .catch ((error) => {
      console.log(error);
    });
}; 

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div>
            {!this.state.location && this.state.error && (
              <p>{this.state.error.response.data.errors.location.message}</p>
            ) }
            <label htmlFor="location">Location</label>
            <input type="text"
             placeholder="location" 
             value={this.state.location} 
             onChange={this.handleLocation}
             />
          </div>

          <div>
          {!this.state.telephone && this.state.error && (
              <p>{this.state.error.response.data.errors.telephone.message}</p>
            ) }
            <label htmlFor="telephone">Telephone</label>
            <input type="text" placeholder="telephone" value={this.state.telephone} onChange={this.handleTelephone}/>
          </div>

          <div>
          {!this.state.item && this.state.error && (
              <p>{this.state.error.response.data.errors.item.message}</p>
            ) }
            <label htmlFor="item">Item</label>
            <input
              type="text"
              placeholder="item"
              value={this.state.item}
              onChange={this.handleItem}
            />
          </div>

          <div>
          {!this.state.payment && this.state.error && (
              <p>{this.state.error.response.data.errors.telephone.message}</p>
            ) }
            <label htmlFor="payment">Payment</label>
            <input type="text" placeholder="payment" value={this.state.payment} onChange={this.handlePayment}/>
          </div>

          <button>Order now</button>
        </form>
      </div>
    );
  };
};
export default Order;

