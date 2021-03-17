import React, { Component, Fragment } from 'react';
import './active-item.css';

class ActiveItem extends Component{
  state = {
    icon: this.props.icon,
    count: this.props.count,
    name: this.props.name,
    data: this.props.data
  }
    render(){
      const {name, icon, count, data} = this.state;
      return (
        <Fragment>
          
          <div class="card col-sm-12">
              <div class="card-body">
                <h6 className="datta">{data}</h6>
                <div class="row">
                  <h6 class="card-title col-sm-9">{name}</h6>
                  <h6 class="card-title col-sm-3">+{count}<i class={icon}></i></h6>

                </div>
              </div>
            </div>
        </Fragment>
      )
    }
  }
  
  export default ActiveItem;

