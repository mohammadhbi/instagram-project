import SearchBarInput from "./searchBarInput"
import SearchBarRecent from "./searchBarRecent"
function SearchBar() {
 
    return (
    <div  className="fixed left-96 w-[480px] h-[750px] bg-amber-500 py-6">
      <SearchBarInput/>
      <SearchBarRecent/>
    </div>
  )
}

export default SearchBar
