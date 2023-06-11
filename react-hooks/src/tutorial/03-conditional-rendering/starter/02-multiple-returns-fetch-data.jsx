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
    const {avatar_url, login, company, bio} = user
    return <div className='user-container'>
      <h2>Fetch data</h2>
      <img src={avatar_url} style={{width: "250px", borderRadius: "15px"}}></img>
      <h2>{login}</h2>
      <h3>Works at: {company}</h3>
      <p>{bio}</p>
    </div>
  }
  return <h2>Loading</h2>;
};
export default MultipleReturnsFetchData;
