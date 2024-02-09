import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import {toast} from "react-toastify";
import * as XLS from 'xlsx';
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/admin/contacts`;
const deleteURL = `${API_URL}/api/admin/contacts/delete/`;

export const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllContactsData = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data);
        console.log("user data: " + data);
      } else {
        console.error("Failed to fetch contacts:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContactsData();
  });

  const handleRefresh = () => {
    getAllContactsData();
  };

  //importing the data as excel file 
  const exportToExcel = () => {
    const xlsData = contacts.map((contact) => ({
      Username: contact.username,
      Subject: contact.subject,
      Email: contact.email,
      Message: contact.message,
    }));

    const ws = XLS.utils.json_to_sheet(xlsData);
    const wb = XLS.utils.book_new();
    XLS.utils.book_append_sheet(wb, ws, 'Contacts');
    XLS.writeFile(wb, 'sih_contacts.xlsx');
  };


  //deleting the contacts on the resolution of queries 
  const deleteContactById = async (id) =>{
    try {
      const response = await fetch(deleteURL+id, {
        method: "DELETE",
        headers:{
          Authorization: authorizationToken,
        },
      });
      if(response.ok){
        getAllContactsData();
        toast.success("Deleted Successfully!");
      }
      else{
        toast.error("Something went wrong!")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section>
        <div className="container mt-4">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-primary" onClick={handleRefresh}>
              <i className="bi bi-arrow-clockwise"></i> Refresh
            </button>
            <button className="btn btn-success ms-1" onClick={exportToExcel}>
          Export as Excel
        </button>
          </div>
          <h2>Contact Messages</h2>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Username</th>
                <th>Subject</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.username}</td>
                  <td>{contact.subject}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td><button className="btn" onClick={()=>deleteContactById(contact._id)}><i class="bi bi-trash"></i></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminContacts;
