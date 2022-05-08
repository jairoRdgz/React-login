import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { deleteWebsite } from "../config/apiUsers";

export function UserCard({ user }) {
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  const onDeleteLink = async (id) => {
    if (window.confirm("are you sure you want to delete this?")) {
      await deleteWebsite(id);
      
      toast("Office Removed Successfully", {
        type: "error",
        autoClose: 2000,
      });
      refreshPage()
    }
  };

  return (
    <div
      className="card mb-3 card-website"
      key={user.id}
      onClick={() =>  navigate(`/editUser/${user.id}`)}
    >
      <div className="card-body">
        <div className>
          <div>
          <p>{user.name}</p>
          <p>{user.mail}</p>
          <p>{user.lastname}</p>
          </div> 
          <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={(e) => {
              onDeleteLink(user.id);
            }}
          >
            <i className="material-icons">close</i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default UserCard