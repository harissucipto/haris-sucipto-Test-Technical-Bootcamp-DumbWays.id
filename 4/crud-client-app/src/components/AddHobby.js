import React, { useState } from "react";
import Modal from "react-responsive-modal";
import shortid from "shortid";

const AddHobby = ({ handleAddHoby, open, onClose }) => {
  const [hoby, setHoby] = useState("");

  const handleSubmit = () => {
    const newData = {
      id: shortid(),
      name: hoby
    };
    handleAddHoby(newData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ textAlign: "center" }}>
        <h2>Tambahkan Data Hoby Baru</h2>
        <input value={hoby} onChange={evt => setHoby(evt.target.value)} />
        <button onClick={handleSubmit}>Tambahkan Hoby</button>
      </div>
    </Modal>
  );
};

export default AddHobby;
