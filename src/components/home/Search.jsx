import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleSearch = () => {
    setIsOpen(true);
    setQuery("");
    setUsers([]);
    setError(null);
  };

  const fetchUsers = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://instagram-backend-ugd3.onrender.com/api/user/searchUser?search=${searchTerm}&limit=6`
      );
      if (response.data && response.data.status === "success") {
        setUsers(response.data.users);
      } else {
        setError("error");
      }
    } catch (error) {
      setError("try again");
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    if (searchTerm) {
      fetchUsers(searchTerm);
    } else {
      setUsers([]);
    }
  };

  const clearRecentItems = () => {
    setUsers([]);
  };

  return (
    <div className="">
      <button
        onClick={toggleSearch}
        className="focus:outline-none flex items-center mb-3"
      >
        <img className="hover:border hover:rounded-full hover:border-[#ccc] hover:p-2 p-2"  src="public/Frame (1).png" alt="" />
        <span className="ml-2 text-gray-600 hover:text-black">Search</span>
      </button>
      {isOpen && (
        <div className="absolute w-[350px] bg-white shadow-lg rounded-lg p-4 z-10 top-0 ml-10 border border-[#DBDBDB]">
          <h2 className="mb-[37px] text-[#262626] font-semibold text-[23px]">Search</h2>
          <input
            type="text"
            placeholder="search"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            value={query}
            onChange={handleSearch}
          />
          {loading && <div className="text-gray-500">loading....</div>}
          {error && <div className="text-red-500">{error}</div>}
          {!loading && !error && users.length === 0 && query && (
            <div className="text-gray-500">user not found</div>
          )}
          <div className="justify-between items-center mb-2 border-t border-[#DBDBDB] mt-[25px]">
            <div className="mt-[18px] flex justify-between items-center">
            <span className="font-medium">Recent</span>
            <button
              onClick={clearRecentItems}
              className="text-blue-500 text-sm"
            >
              Clear all
            </button>
            </div>
          </div>
          <div className="space-y-2">
            {users.map((user) => (
              <div
                key={user._id}
                className="flex items-center justify-between p-2 last:border-b-0"
              >
                <div className="flex items-center">
                  <img
                    src={user.profilePicture}
                    alt={user.username}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <span className="font-semibold">{user.username}</span>
                </div>
                <button className="text-red-500">
                  <img src="public/Frame (4).png" alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;