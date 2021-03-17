import React, { Component, Fragment } from 'react';
import './navbar2.css';

class Navbar2 extends Component{
    render(){
      return (
            <div class="n2 col-sm-1">
                <ul>
                  <li><i class="fas fa-home"></i></li>
                  <li><i class="fas fa-chart-line"></i></li>
                  <li><i class="fas fa-folder-open"></i></li>
                  <li><i class="fas fa-bell"></i></li>
                  <li><i class="far fa-calendar-alt"></i></li>
                  <li><i class="fas fa-comments"></i></li>
                  <li><i class="fas fa-address-book"></i></li>
                  <li><i class="fas fa-cog"></i></li>
                  <li><i class="far fa-question-circle"></i></li>
                </ul>
            </div>
      )
    }
  }
  
  export default Navbar2;

