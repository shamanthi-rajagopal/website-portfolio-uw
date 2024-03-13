import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
       <li className='cards__item'>
      <div className='cards__item__link'>
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img src={props.src} className='cards__item__img' alt='pic' />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
          
          <br></br>
          
          <a href={props.href} target="_blank" rel="noopener noreferrer">
            <button className='cards__item__button'>{props.button}</button>
          </a>

          <a href={props.href1} target="_blank" rel="noopener noreferrer">
            <button className='cards__item__button1'>{props.button1}</button>
          </a>

          </div>
          </div>
      </li>
    </>
  );
}

export default CardItem;