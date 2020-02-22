import React, { useState, useEffect } from "react";

import ActionMenu from "./ActionMenu";
import ListStudents from "./ListStudents";
import DetailProfil from "./DetailProfil";
import EditProfil from "./EditProfil";
import AddProfil from "./AddProfil";
import AddHobby from "./AddHobby";

const profiles = [
  {
    id: "1",
    name: "haris sucipto",
    born_date: new Date(1997, 10, 12),
    address: "buru",
    hooby_id: "1 2",
    photo: "../images/haris.jpg"
  },
  {
    id: "2",
    name: "haris dua",
    born_date: new Date(1997, 10, 12),
    address: "karimun",
    hooby_id: "2 1",
    photo: "../images/haris.jpg"
  }
];

const hobby_tb = [
  {
    id: "1",
    name: "membaca"
  },
  {
    id: "2",
    name: "menonton"
  }
];

const App = () => {
  const [listStudents, setStudents] = useState([]);
  const [listHobbies, setHobbies] = useState([]);
  const [idDetail, setidDetail] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [idEdit, setIdEdit] = useState(0);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openAddHoby, setOpenAddHoby] = useState(false);

  const handleOpenDetail = id => {
    setidDetail(String(id));
    setOpenDetail(true);
  };

  const handleEditStudents = newData => {
    const { id } = newData;
    const updateStudents = listStudents.map(item => {
      if (String(item.id) !== String(id)) return item;
      return {
        ...item,
        ...newData
      };
    });

    setStudents(updateStudents);
  };

  const handleOpenEdit = id => {
    setIdEdit(String(id));
    setOpenEdit(true);
    setOpenDetail(false);
  };

  const handleDeleteStudent = id => {
    const updateStudents = listStudents.filter(
      item => String(item.id) !== String(id)
    );
    setStudents(updateStudents);
  };

  const handleAddProfil = newData => {
    const updateProfil = [...listStudents, newData];
    setStudents(updateProfil);
  };

  const handleAddHoby = newData => {
    const updateHobbies = [...listHobbies, newData];
    setHobbies(updateHobbies);
  };

  useEffect(() => {
    const formatDataListStudents = profiles.map(item => ({
      ...item,
      hobbiesId: item.hooby_id.split(" ")
    }));
    setStudents(formatDataListStudents);
    setHobbies(hobby_tb);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>
          <h1>Helu School</h1>
        </div>
        <ActionMenu
          openAddProfil={() => setOpenAdd(true)}
          openAddHobby={() => setOpenAddHoby(true)}
        />
      </div>

      <DetailProfil
        open={openDetail}
        onClose={() => setOpenDetail(false)}
        id={idDetail}
        listStudent={listStudents}
        listHobbies={listHobbies}
        handleOpenEdit={handleOpenEdit}
        handleDelete={handleDeleteStudent}
      />

      <EditProfil
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        id={idEdit}
        listStudent={listStudents}
        listHobbies={listHobbies}
        handleEdit={handleEditStudents}
      />

      <AddProfil
        listHobbies={listHobbies}
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        handleAdd={handleAddProfil}
      />

      <AddHobby
        open={openAddHoby}
        handleAddHoby={handleAddHoby}
        onClose={() => setOpenAddHoby(false)}
      />

      <ListStudents
        students={listStudents}
        listHobbies={listHobbies}
        handleOpenDetail={handleOpenDetail}
      />
    </div>
  );
};

export default App;
