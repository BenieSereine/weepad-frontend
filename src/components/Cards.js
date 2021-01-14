import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore wonderful books</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/img-1.jpg'
              text='It all started with a pie'
              label='Read'
              path='/sign-up'
            />
            <CardItem
              src='img/img-2.jpg'
              text='Snowed In'
              label='Read'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items' id="items2">
            <CardItem
              src='img/img-3.jpg'
              text='Heart shaped love'
              label='Read'
              path='/sign-up'
            />
            <CardItem
              src='img/img-4.jpg'
              text="The alpha's unknown daughter"
              label='Read'
              path='/sign-up'
            />
            <CardItem
              src='img/img-5.jpg'
              text='Chain of hearts'
              label='Read'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
