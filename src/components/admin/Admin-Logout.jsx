import { useEffect } from "react";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminLogout = () => {

  const navigate = useNavigate();
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
    toast.warn("You Logged Out!");
    
  }, [LogoutUser]);
  
  return (
    navigate('/admin-login')
  );
};