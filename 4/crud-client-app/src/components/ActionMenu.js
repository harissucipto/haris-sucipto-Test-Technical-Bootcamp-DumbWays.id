import React from "react";

const ActionMenu = ({ openAddProfil, openAddHobby }) => {
  return (
    <div>
      <button onClick={openAddProfil}>Add Profile</button>
      <button onClick={openAddHobby}>Add Hobby</button>
    </div>
  );
};

export default ActionMenu;
