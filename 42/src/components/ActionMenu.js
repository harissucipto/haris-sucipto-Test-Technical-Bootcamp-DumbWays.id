import React from "react";

const ActionMenu = ({ openAddProfil }) => {
  return (
    <div>
      <button onClick={openAddProfil}>Add Profile</button>
      <button>Add Hobby</button>
    </div>
  );
};

export default ActionMenu;
