import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Landing extends Component {
  constructor (props) {
    super(props);

    this.state ={
      type: "",
      description: "",
      cost: ""
    }
  };

  render () {
    return(
      <div className='food'>
        <div className='pastries'>
          <NavLink to = "/pastries" activeClassName='is-active'>
            Pastries
          </NavLink>
<h5>Forest Cakes</h5>
<h5>Bread</h5>
<h5>Croissant</h5>
<h5>Doughnuts</h5>
<h5>Rock Buns</h5>
        </div>

        <div className='drinks'>
          <NavLink to = "/beverages" activeClassName='is-active'>
            Beverages
          </NavLink>
<h5>Tea</h5>
<h5>Chocolate</h5>
<h5>Coffee</h5>
<h5>Milkshakes</h5>
<h5>Fresh juice</h5>
        </div>

        <div className=' meals'>
          <NavLink to = "/pastries" activeClassName='is-active'>
            Pastries
          </NavLink>
<h5>Forest Cakes</h5>
<h5>Bread</h5>
<h5>Croissant</h5>
<h5>Doughnuts</h5>
<h5>Rock Buns</h5>
        </div>
     
        <div className='fruits'>
          <NavLink to = "/pastries" activeClassName='is-active'>
            Pastries
          </NavLink>
<h5>Forest Cakes</h5>
<h5>Bread</h5>
<h5>Croissant</h5>
<h5>Doughnuts</h5>
<h5>Rock Buns</h5>
        </div>

<div className='order'>
  <button>
    <NavLink to= "order" activeClassName='is-active'>
      Make your orders

    </NavLink>
  </button>
</div>


      </div>
    )
  };
};

export default Landing;
