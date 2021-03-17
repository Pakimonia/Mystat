import React, { Component, Fragment } from 'react';
import './reward-item.css';

class RewardItem extends Component{
  state = {
    image: this.props.image,
    name: this.props.name
  }
    render(){
      const {name, image} = this.state;
      return (
        <Fragment>
          
          <div class="card col-sm-4 cardd">
              <img src={image}  class="imag" />
              <div class="card-body textt">
                  <h5 class="card-title">{name}</h5>
              </div>
            </div>
        </Fragment>
      )
    }
  }
  
  export default RewardItem;

