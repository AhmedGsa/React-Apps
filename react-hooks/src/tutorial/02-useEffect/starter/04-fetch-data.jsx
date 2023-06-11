const url = 'https://api.github.com/users';
import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json()
      console.log(data);
      setData(data)
    }
    fetchData()
  }, [])
  return <>
    <h2>fetch data example</h2>
    <div className="container">
      <ul className="users">
        {data.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url}></img>
            <div>
              <h5>{user.login}</h5>
              <a href={user.html_url}>Profile</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>;
};
export default FetchData;
