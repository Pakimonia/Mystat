import React, { Component, Fragment } from 'react';
import LeaderItem from '../leader-item/leader-item';

const LeaderList = ({ leaders }) =>{
    var leadersTempleate;
    if(leaders !== null){
        leadersTempleate = leaders.map(item => {
            return(
                <LeaderItem
                name = {item.name}
                number = {item.number}
                scoin = {item.scoin}
                ></LeaderItem>
            )
        })
    }   
    return(
        <Fragment>
            {leadersTempleate}
        </Fragment>
    )
  }

  export default LeaderList;
