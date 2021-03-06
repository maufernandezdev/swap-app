import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(props) {
  return (
    <div className='itemListContainer'>
      <h1>{ props.greeting }</h1>
      <ItemList />
    </div>
  );
}
export default ItemListContainer;