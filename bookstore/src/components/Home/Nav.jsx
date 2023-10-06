import React from 'react'
import Search from './Nav/Search';
import Options from './Nav/Options';

function Nav({length}) {
 console.log(length)
  return (
   <header className='header-nav-container'>
        <Search length={length}/>
        <Options/>
   </header>
  )
}

export default Nav