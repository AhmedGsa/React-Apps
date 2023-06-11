import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(url);
      const user = await response.json();
      console.log(user);
      setUser(user)
    }
    fetchUser()
  },[])
  if(user) {
    return <div className='user-container'>
      <h2>Fetch data</h2>
      <img src={user.avatar_url} style={{width: "250px", borderRadius: "15px"}}></img>
      <h2>{user.login}</h2>
      <h3>Works at: {user.company}</h3>
      <p>{user.bio}</p>
    </div>
  }
  return <h2>Loading</h2>;
};
export default MultipleReturnsFetchData;
