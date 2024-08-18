import { useState } from "react";

const EditModal = ({
  setShowEditModal,
  setEditItem,
  editItem,
  handleEditBook,
}) => {
  const [newBookName, setNewBookName] = useState("");

  //kaydet butonuna basınca çalışır:

  const handleSave = () => {
    //modal ı kapatır:
    setShowEditModal(false);
  };

  return (
    <div className="confirm-modal">
      <div className="modal-inner">
        <h5>Edit book title...</h5>
        <input
          value={editItem.title}
          type="text"
          className="form-control shadow p-2 ;  "
          onChange={(e) =>
            setEditItem({
              ...editItem,
              title: e.target.value,
              date: new Date().toLocaleString(),
            })
          }
        />
        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-warning"
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </button>
          <button className="btn btn-success" onClick={handleEditBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
