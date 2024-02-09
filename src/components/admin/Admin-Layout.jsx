import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../../store/auth";
import { AdminNavbar } from "./Admin-Navbar";
import { AdminSidebar } from "./Admin-Sidebar";

export const AdminLayout = () =>{

    const {user, isLoading} = useAuth();

    if(isLoading){
      return <h1>Loading ...</h1>
    }

    if(!user.isAdmin){
      return <Navigate to='error' />;
    }

    return (
        <>
        <div className="d-flex">
          <div className="w-auto">
            <AdminSidebar/>
          </div>
          <div className="col overflow-auto">
            <AdminNavbar/>
            <Outlet />
          </div>
        </div>
    </>
    );
};

