import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  console.log('List has these props:', props)
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            id = {card.id}
            title={card.title}
            content={card.content}
            onClickDelete={(id) => props.onClickDelete(id)}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}
