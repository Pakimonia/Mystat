import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Navbar2 from './components/navbar2/navbar2';
import RewardList from './components/reward-list/reward-list';
import ActiveList from './components/active-list/active-list';
import LeaderList from './components/leader-list/leader-list';

class App extends Component{

  state = {
    rewards: [
      {
        image: "https://thumbs.dreamstime.com/b/3d-%D0%BD%D0%BE%D0%BC%D0%B5%D1%80-5-%D1%81%D0%B8%D0%BD%D0%B8%D1%85-%D1%81%D1%82%D0%B5%D0%BA%D0%BE%D0%BB-6205630.jpg",
        name: "5 посещений подряд без пропусков"
      },
      {
        image: "https://previews.123rf.com/images/kostiuchenko/kostiuchenko1701/kostiuchenko170100182/68492453-10-ten-numeral-from-glass-with-an-abstract-pattern-of-a-flaming-fire-isolated-on-white-background.jpg",
        name: "10 посещений подряд без пропусков"
      },
      {
        image: "https://lh3.googleusercontent.com/proxy/Y6Ca38xUG1VGdt4mEJyqwaK8mDF79WFyD8sAr3nnjAm-LEU2yBwfnpWCuazngO3EGGiJUKCefMlWEUWzWEG-Aof8fdz6CYJ2f_qCRItstw",
        name: "20 посещений подряд без пропусков"
      },
      {
        image: "https://i.pinimg.com/originals/89/4a/17/894a178cedd11a3c392f7e512defb54a.jpg",
        name: "5 посещений подряд без опозданий"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/1350/5331/products/bd562-1-600.jpeg?v=1483811602",
        name: "10 посещений подряд без опозданий"
      },
      {
        image: "https://sribnyk.com.ua/image/cache/data/chasi_pesochnie_zmeyki1-231x300.jpg",
        name: "20 посещений подряд без опозданий"
      }
    ],
    actives: [
      {
        name: "Оценка занятия ",
        count: "1",
        icon:"fas fa-gem diamond",
        data: "18.03.2021"
      },
      {
        name: "Оценка",
        count: "5",
        icon:"fab fa-bitcoin coin",
        data: "18.03.2021"
      },
      {
        name: "Оценка",
        count: "5",
        icon:"fab fa-bitcoin coin",
        data: "18.03.2021"
      },
      {
        name: "Посещение пары",
        count: "1",
        icon:"fas fa-gem diamond",
        data: "18.03.2021"
      },
      {
        name: "Посещение пары",
        count: "1",
        icon:"fas fa-gem diamond",
        data: "18.03.2021"
      },
      {
        name: "Поощрение от преподавателя ",
        count: "3",
        icon:"fas fa-gem diamond",
        data: "18.03.2021"
      },
      {
        name: "5 посещений подряд без опозданий",
        count: "1",
        icon:"fas fa-award award",
        data: "18.03.2021"
      }

    ],
    leaders: [
      {
        number: "1.",
        name: "Заєць Микола Леонтійович",
        scoin: "5061"
      },
      {
        number: "2.",
        name: "Закотюк Вікторія Русланівна",
        scoin: "3936"
      },
      {
        number: "3.",
        name: "Олексійчук Віталій Володимирович",
        scoin: "3478"
      },
      {
        number: "4.",
        name: "Скрипнюк Денис Олексійович",
        scoin: "3465"
      },
      {
        number: "5.",
        name: "Ісламов Богдан Дмитрович",
        scoin: "3398"
      },
      {
        number: "6.",
        name: "Гнатюк Дмитро Олександрович",
        scoin: "3191"
      },
      {
        number: "7.",
        name: "Стецюк Владислав Тарасович",
        scoin: "2691"
      },
      {
        number: "8.",
        name: "Матвіїв Дмитро Володимирович",
        scoin: "2057"
      },
      {
        number: "9.",
        name: "Костюк Максим Олександрович",
        scoin: "2042"
      },
      {
        number: "10.",
        name: "Федорчук Софія Юріївна",
        scoin: "1538"
      },
      {
        number: "11.",
        name: "Сівіцький Василь Миколайович",
        scoin: "1243"
      }
    ]
  }
  
    render(){
      return (
        <Fragment>
          <Navbar></Navbar>
          <div class="row">
          <Navbar2></Navbar2>
          <div class="container col-sm-9">
            <div class="row">
              <div class="col-sm-4 pad">
                <div className=" whit row">
                <h5>Ваши награди</h5>
                <RewardList rewards={this.state.rewards}></RewardList>
                </div>
              </div>
              <div class="col-sm-4 pad">
                <div className=" whit row">
                <h5>Таблица лидеров</h5>
                <LeaderList leaders={this.state.leaders}></LeaderList>
              </div>
              </div>
              <div class="col-sm-4 pad">
                <div className=" whit row">
                <h5>Активность</h5>
                <ActiveList actives={this.state.actives}></ActiveList>
              </div>
              
              </div>
            </div> 
          </div>
          </div>
          </Fragment>
      )
    }
  }

export default App;
