import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";

import { renderHobbies } from "../utils";

const EditProfil = ({
  id,
  listStudent,
  listHobbies,
  open,
  onClose,
  handleEdit
}) => {
  const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  const [bornDate, setBornDate] = useState(null);
  const [address, setAddress] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const handleDeleteHobby = id => {
    const updateHobbies = hobbies.filter(item => item !== id);
    setHobbies(updateHobbies);
  };

  const handleAddHobby = evt => {
    console.log(evt.target.value);
    const value = evt.target.value;

    if (value === "kosong") return;

    const updateHobbies = [...hobbies, value];
    setHobbies(updateHobbies);
  };

  const handleSubmit = evt => {
    const newData = {
      id,
      name,
      born_date: new Date(bornDate),
      address,
      hooby_id: hobbies.join(" "),
      hobbiesId: hobbies,
      photo: "haris.jpg"
    };

    handleEdit(newData);
    onClose();
  };

  useEffect(() => {
    const profil = listStudent.find(item => String(item.id) === String(id));
    if (profil) {
      setName(profil.name);
      setBornDate(new Date(profil.born_date));
      setAddress(profil.address);
      setHobbies(profil.hobbiesId);
    }
  }, [id, listStudent]);

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <h2>Edit Data</h2>
        <p>Name</p>
        <input
          value={name}
          type="text"
          onChange={evt => setName(evt.target.value)}
        />
        <p>Born Date</p>
        <input type="date" onChange={evt => setBornDate(evt.target.value)} />

        <p>Address</p>
        <input
          type="text"
          value={address}
          onChange={evt => setAddress(evt.target.value)}
        />

        <p>Add New Hobby:</p>
        <select onChange={handleAddHobby}>
          <option value="kosong">hobbies</option>
          {listHobbies
            .filter(item => !hobbies.some(id => String(item.id) === String(id)))
            .map(item => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>

        <p>Your Hobbies</p>
        <ol>
          {hobbies.map(item => (
            <li key={item}>
              {renderHobbies(item, listHobbies)}{" "}
              <button onClick={() => handleDeleteHobby(item)}>x</button>
            </li>
          ))}
        </ol>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </Modal>
  );
};

export default EditProfil;
