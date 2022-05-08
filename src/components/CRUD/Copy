import { useEffect, useState } from "react";
import { getWebsites } from "../config/api";


import { OfficeCard } from "./OfficeCard";

export const OfficeList = () => {
  const [offices, setOffices] = useState([]);

  const getLinks = async () => {
    const querySnapshot = await getWebsites();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setOffices(docs);
    // });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      {offices.map((link) => (
        <div className="col-md-4" key={link.id}>
          <OfficeCard office={(link)}/>
        </div>
      ))}
    </>
  );
};
export default OfficeList