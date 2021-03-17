import React, { Component, Fragment } from 'react';
import RewardItem from '../reward-item/reward-item';

const RewardList = ({ rewards }) =>{
    var rewardsTempleate;
    if(rewards !== null){
        rewardsTempleate = rewards.map(item => {
            return(
                <RewardItem
                name = {item.name}
                image = {item.image}
                ></RewardItem>
            )
        })
    }   
    return(
        <Fragment>
            {rewardsTempleate}
        </Fragment>
    )
  }

  export default RewardList;
