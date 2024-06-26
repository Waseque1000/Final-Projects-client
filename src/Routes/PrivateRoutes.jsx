import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

//
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  //
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center  mt-10">
        <div>
          <span className=" loading bg-red-400   loading-dots loading-lg text-center"></span>
        </div>
        <progress className="progress bg-red-500 w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
