import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='landing'>
      <NavLink to ="/" activeClassName= "is-active" exact={true}>Landing</NavLink>
  <NavLink to ="/signup" activeClassName= "is-active" >Sign Up </NavLink>
  <NavLink to ="/login" activeClassName= "is-active" >Log in </NavLink>
  <NavLink to ="/order" activeClassName= "is-active" >Order </NavLink>

      </div>
      
      <div>
        <h1> WELCOME TO BRESECOSE FOODS</h1>
      </div>

    </div>
  );
};

export default Header;
