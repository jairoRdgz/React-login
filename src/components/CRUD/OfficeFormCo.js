import { React,useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveWebsite, getWebsite, updateWebsite } from "../config/api";
import { useParams, useNavigate } from "react-router-dom";
function OfficeFormCo(props) {
  const initialState = {
    name: "",
    phone: "",
    mail: "",
    city: "",
    address: "",
    zipcode: "",
    active: true,
  };
  const [office, setOffice] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();
  const handleInputChange = ({ target: { name, value } }) =>
  setOffice({ ...office, [name]: value });

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!params.id) {
    await saveWebsite(office);
    toast("new office Added", {
      type: "success",
    });
  } else {
    await updateWebsite(params.id, office);
    toast("Updated", {
      type: "success",
    });
  }

  // Clean Form
  setOffice(initialState);
  navigate("/layout");
};

const getLinkById = async (id) => {
  try {
    const doc = await getWebsite(id);
    setOffice({ ...doc.data() });
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  if (params.id) {
    getLinkById(params.id);
  }
}, [params.id]);

  return (
    <div className="col-md-4 offset-md-4">
    <form onSubmit={handleSubmit} className="card card-body bg-secondary">
    <input type="text" className='form-control' placeholder='Nombre' name='name' onChange={handleInputChange} value={office.name}/>
        <input type="text" className='form-control' placeholder='Telefono' name='phone' onChange={handleInputChange}value={office.phone}/>
        <input type="text" className='form-control' placeholder='Email' name='mail' onChange={handleInputChange} value={office.mail}/>
        <input type="text" className='form-control' placeholder='Ciudad' name= 'city' onChange={handleInputChange}value={office.city}/>
        <input type="text" className='form-control' placeholder='Direccion' name='address' onChange={handleInputChange} value={office.address}/>
        <input type="text" className='form-control' placeholder='Codigo Postal' name= 'zipcode' onChange={handleInputChange} value={office.zipcode}/>
      <button
        className="btn btn-primary btn-block"
      >
        Save or Update
      </button>
    </form>
  </div>
  )
}

export default OfficeFormCo