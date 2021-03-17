import React, { Component, Fragment } from 'react';
import './leader-item.css';

class LeaderItem extends Component{
  state = {
    number: this.props.count,
    name: this.props.name,
    scoin: this.props.scoin
  }
    render(){
      const {name, number, scoin} = this.state;
      return (
        <Fragment>
          
          <div class="card col-sm-12">
              <div class="card-body">
                <div class="row">
                  <h6 class="card-title col-sm-1">{number}</h6>
                  <h6 class="card-title col-sm-7">{name}</h6>
                  <h6 class="card-title col-sm-4">{scoin}<i class="fas fa-star star"></i></h6>

                </div>
              </div>
            </div>
        </Fragment>
      )
    }
  }
  
  export default LeaderItem;

