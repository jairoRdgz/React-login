import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div>
        <p className="">Welcome {user.displayName || user.email}</p>
        <div className="container p-4">
          <div className="row">
            <button
              className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
              onClick={handleLogout}
            >
              Cerrar Sesion
            </button>
          </div>
          <div className="row">
            <button
              className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
              onClick={() => navigate(`/Layout`)}
            > Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
