import React from "react";
import haris from "../images/haris.jpg";

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
              marginBottom: "10px",
              height: "350px"
            }}
          >
            <img alt="gambar-profil" src={haris} width="100%" height="200px" />
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
