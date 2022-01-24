import React from 'react';

const SearchItem = ({title, a}) => {
  return <div className='search-div'>
      
      <a className='search-title' href={a}><h1>{title}</h1></a>
    
  </div>;
};

export default SearchItem;
