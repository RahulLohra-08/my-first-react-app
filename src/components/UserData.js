import axios from "axios";
import React, { useState, useEffect } from "react";
import UserDetails from './UserDetails';

export default function UserData() {
  const [userdata, setUerData] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const result = await axios.get("https://dummyjson.com/users");
      setUerData(result.data.users);
      console.log(result);
    }
    getUserData();
  }, []);


  return (
    <div className="row">
      {userdata.map((user)=> {
           return <UserDetails user={user}/>
          })
        }
      
    </div>
  );
}
