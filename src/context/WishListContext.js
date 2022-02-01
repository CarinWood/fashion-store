import {createContext, useState } from 'react'


export const WishListContext = createContext()

function WishListProvider(props)  {
    const [heartList, setHeartList] = useState([])
    return (
       
      <WishListContext.Provider value={[heartList, setHeartList]}>
          {props.children}
      </WishListContext.Provider>
        
    )
}

export default WishListProvider