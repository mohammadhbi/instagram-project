import { useState } from "react";
import { client } from "../../../lib/axios";
import SearchBarRecent from "./searchBarRecent";

function SearchBarHistory() {
  const [searchProfile, setSearchProfile] = useState([]);
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const getSearchProfileByAPI = async (searchTerm) => {
    try {
      const { data } = await client.get(
        `/api/user/searchUser?search=${searchTerm}&limit=5`
      );
      setSearchProfile(data.users);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (inputValue) {
      getSearchProfileByAPI(inputValue); // Call the search function
    }
  };

  if (isError) {
    return <h1 className="text-red-500 text-4xl">User  not found...</h1>;
  }
  console.log(searchProfile);
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className=" "
          placeholder="Search"
        />

        {searchProfile.length > 0 ? (
          searchProfile.map((profiles) => {
            return <SearchBarRecent key={profiles.id} {...profiles} />;
          })
        ) : (
          <p>No results found.</p> // نمایش پیام در صورت عدم وجود نتایج
        )}
      </div>
    </form>
  );
}

export default SearchBarHistory;
