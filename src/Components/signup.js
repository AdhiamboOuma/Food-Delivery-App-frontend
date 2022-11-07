import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      telephone: "",
    };
  }
handleUsername = (event) => {
  this.setState ({
    username: event.target.value,
  });
};
  handleEmail = (event) => {
    this.setState ({
      email: event.target.value,
    });
};
handlePassword = (event) => {
  this.setState ({
    password: event.target.value,
  });
};
handleTelephone = (event) => {
  this.setState ({
    telephone: event.target.value,
  });
};

handleSubmit = event => {
  event.preventDefault()
    const userObject =  {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      telephone: this.state.telephone,
    };
    axios 
    .post("http://localhost:8080/signup", userObject)
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
            {!this.state.username && this.state.error && (
              <p>{this.state.error.response.data.errors.username.message}</p>
            ) }
            <label htmlFor="username">Username</label>
            <input type="text"
             placeholder="name" 
             value={this.state.username} 
             onChange={this.handleUsername}
             />
          </div>

          <div>
          {!this.state.email && this.state.error && (
              <p>{this.state.error.response.data.errors.email.message}</p>
            ) }
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmail}/>
          </div>

          <div>
          {!this.state.password && this.state.error && (
              <p>{this.state.error.response.data.errors.password.message}</p>
            ) }
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>

          <div>
          {!this.state.telephone && this.state.error && (
              <p>{this.state.error.response.data.errors.telephone.message}</p>
            ) }
            <label htmlFor="telephone">Telephone</label>
            <input type="text" placeholder="telephone" value={this.state.telephone} onChange={this.handleTelephone}/>
          </div>

          <button>Sign Up</button>
        </form>
      </div>
    );
  };
};
export default SignUp;

