function SearchBarRecent(profiles) {
  const { username, profilePicture } = profiles;
  return (
    <div className="flex justify-between">
      <div>
        <img src= {profilePicture} alt={username} />
        <div>
          <p> {username} </p>
          <span> {username} </span>
        </div>
      </div>
      <button>X</button>
    </div>
  );
}

export default SearchBarRecent;
