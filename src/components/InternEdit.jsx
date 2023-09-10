import React, { useState, useEffect } from 'react';
import './InternEdit.css';
import axios from 'axios';
import Admin from './Admin';

function InternEdit() {
  const [internData, setInternData] = useState([]);
  const [editingIntern, setEditingIntern] = useState(null); // Store the intern being edited
  const [deletingIntern, setDeletingIntern] = useState(null); // Store the intern being deleted
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the intern data from your API
    axios
      .get('http://localhost:8080/api/v1/user')
      .then((response) => {
        setInternData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleEditClick = (intern) => {
    setEditingIntern(intern); // Set the intern to be edited
  };

  const handleDeleteClick = (intern) => {
    setDeletingIntern(intern); // Set the intern to be deleted
  };

  const handleUpdate = (updatedIntern) => {
    // Update the intern data in the UI
    const updatedData = internData.map((intern) =>
      intern.userId === updatedIntern.userId ? updatedIntern : intern
    );
    setInternData(updatedData);
    setEditingIntern(null); // Clear the editing state

    // Update the intern data on the server
    axios
      .put(`http://localhost:8080/api/v1/user/update/${updatedIntern.userId}`, updatedIntern)
      .then((response) => {
        console.log('Intern updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating intern:', error);
      });
  };

  const handleDelete = () => {
    if (deletingIntern) {
      // Delete the intern data in the UI
      const updatedData = internData.filter(
        (intern) => intern.userId !== deletingIntern.userId
      );
      setInternData(updatedData);
      setDeletingIntern(null); // Clear the deleting state

      // Delete the intern on the server
      axios
        .delete(`http://localhost:8080/api/v1/user/delete/${deletingIntern.userId}`)
        .then((response) => {
          console.log('Intern deleted successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error deleting intern:', error);
        });
    }
  };

  return (
    <>
      <Admin />
      <div className="intern-edit-container">
        <h2>Intern List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : internData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {internData.map((intern) => (
                <tr key={intern.userId}>
                  <td>{intern.name}</td>
                  <td>{intern.email}</td>
                  <td>{intern.department}</td>
                  <td>
                    <button onClick={() => handleEditClick(intern)}>
                      <i className="fas fa-edit"></i> Edit
                    </button>
                    <button onClick={() => handleDeleteClick(intern)}>
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available.</p>
        )}

        {/* Edit Modal */}
        {editingIntern && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setEditingIntern(null)}>
                &times;
              </span>
              <h3>Edit Intern</h3>
              {/* Edit form can go here */}
              <button onClick={() => setEditingIntern(null)}>Cancel</button>
              <button onClick={() => handleUpdate(editingIntern)}>Save</button>
            </div>
          </div>
        )}

        {/* Delete Confirm Dialog */}
        {deletingIntern && (
          <div className="confirm-dialog">
            <div className="confirm-dialog-content">
              <p>Are you sure you want to delete {deletingIntern.name}?</p>
              <button onClick={handleDelete}>Yes</button>
              <button onClick={() => setDeletingIntern(null)}>No</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default InternEdit;
