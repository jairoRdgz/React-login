import { React,useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveWebsite, getWebsite, updateWebsite } from "../config/apiUsers";
import { useParams, useNavigate } from "react-router-dom";

function UserForm(props) {
  const initialState = {
    name: "",
    lastname: "",
    mail: "",
    validtill: "",
    active: true,
  };
  const [user, setUser] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();
  const handleInputChange = ({ target: { name, value } }) =>
  setUser({ ...user, [name]: value });

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!params.id) {
    await saveWebsite(user);
    toast("new office Added", {
      type: "success",
    });
  } else {
    await updateWebsite(params.id, user);
    toast("Updated", {
      type: "success",
    });
  }

  // Clean Form
  setUser(initialState);
  navigate("/userList");
};

const getLinkById = async (id) => {
  try {
    const doc = await getWebsite(id);
    setUser({ ...doc.data() });
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
    <input type="text" className='form-control' placeholder='Nombre' name='name' onChange={handleInputChange} value={user.name}/>
        <input type="text" className='form-control' placeholder='Apellido' name='lastname' onChange={handleInputChange}value={user.lastname}/>
        <input type="text" className='form-control' placeholder='Email' name='mail' onChange={handleInputChange} value={user.mail}/>
        <input type="date" className='form-control'  name= 'vaidtill' onChange={handleInputChange}value={user.validtill}/>
      <button
        className="btn btn-primary btn-block"
      >
        Save or Update
      </button>
    </form>
  </div>
  )
}

export default UserForm