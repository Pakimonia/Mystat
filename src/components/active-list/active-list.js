import React, { Component, Fragment } from 'react';
import ActiveItem from '../active-item/active-item';

const ActiveList = ({ actives }) =>{
    var activesTempleate;
    if(actives !== null){
        activesTempleate = actives.map(item => {
            return(
                <ActiveItem
                name = {item.name}
                icon = {item.icon}
                count = {item.count}
                data = {item.data}
                ></ActiveItem>
            )
        })
    }   
    return(
        <Fragment>
            {activesTempleate}
        </Fragment>
    )
  }

  export default ActiveList;
