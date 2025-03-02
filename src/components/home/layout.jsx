import React from 'react'
import SideBar from './sidebar'
import SearchBarInput from './searchBar/searchBarInput'
import SearchBar from './searchBar/SearchBar'

function Layout() {
  return (
    <div className="flex">
       <SideBar/> 
     <SearchBar/>
       
    </div>
  )
}

export default Layout
