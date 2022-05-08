import { React,useEffect, useState } from "react";
import { getWebsites } from "../config/apiUsers";
import { Navbar } from "./UserNavbar";
import UserCard from "./UserCard";
function Userlist() {
    const [users, setUSers] = useState([]);

    const getLinks = async () => {
      const querySnapshot = await getWebsites();
      // onGetLinks((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setUSers(docs);
      // });
    };
  
    useEffect(() => {
      getLinks();
    }, []);
  
  return (
    <>
    <Navbar/>
    {users.map((user) => (
      <div className="col-md-4" key={user.id}>
        <UserCard user={(user)}/>
      </div>
    ))}
  </>
  )
}

export default Userlist