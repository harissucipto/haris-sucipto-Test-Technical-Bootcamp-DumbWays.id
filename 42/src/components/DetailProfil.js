import React from "react";
import Modal from "react-responsive-modal";

import { getDate, renderHobbies } from "../utils";

const DetailProfil = ({
  id,
  listStudent,
  listHobbies,
  open,
  onClose,
  handleDelete,
  handleOpenEdit
}) => {
  const profil = listStudent.find(item => String(item.id) === String(id));
  if (!profil) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <h2>Detail Data</h2>
        <img alt="gambar-profil" src={profil.photo} />
        <p>Name: {profil.name}</p>
        <p>Born Date: {getDate(profil.born_date)}</p>
        <p>Address: {profil.address}</p>
        <p>
          Hobbies:{" "}
          {profil.hobbiesId
            .map(item => renderHobbies(item, listHobbies))
            .join(", ")}
        </p>

        <div>
          <button onClick={() => handleOpenEdit(profil.id)}>Edit</button>
          <button onClick={() => handleDelete(profil.id)}>Hapus</button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailProfil;
