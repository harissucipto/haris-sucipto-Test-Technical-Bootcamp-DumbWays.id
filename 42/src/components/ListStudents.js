import React from "react";

import { renderHobbies } from "../utils";

const ListStudents = ({ students, handleOpenDetail, listHobbies }) => {
  if (!students.length) return null;

  return (
    <div style={{ display: "flex" }}>
      {students.map(item => (
        <div
          key={item.id}
          style={{
            width: "200px",
            marginRight: "20px"
          }}
        >
          <div
            style={{
              border: "2px solid black",
              marginBottom: "10px"
            }}
          >
            <img
              alt="gambar-profil"
              src={item.photo}
              width="100%"
              height="180px"
            />
            <h2>{item.name}</h2>
            <p>
              {item.hobbiesId
                .map(item => renderHobbies(item, listHobbies))
                .join(", ")}
            </p>
          </div>
          <button onClick={() => handleOpenDetail(item.id)}>Detail</button>
        </div>
      ))}
    </div>
  );
};

export default ListStudents;
