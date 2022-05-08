import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { deleteWebsite } from "../config/api";

export function OfficeCard({ office }) {
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
      key={office.id}
      onClick={() => navigate(`/userList`)}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
          <p>{office.name}</p>
          </div> 
          <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={(e) => {
              onDeleteLink(office.id);
            }}
          >
            <i className="material-icons">close</i>
          </button>
          <button
            className="btn btn-primary btn-sm d-flex align-items-center"
            onClick={() => navigate(`/edit/${office.id}`)}
          >
            <i className="material-icons">Editar Oficina</i>
          </button>
        </div>
      </div>
    </div>
  );
}
