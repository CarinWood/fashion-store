import React from 'react';
import SearchItem from './SearchItem';


const SearchItems = ({Favies}) => {

 

  return <div>
      {Favies.map((fav) => (
          <SearchItem 
          title={fav.title}
          a={fav.anchor}
    
          />
      ))}

  </div>;
};

export default SearchItems;
