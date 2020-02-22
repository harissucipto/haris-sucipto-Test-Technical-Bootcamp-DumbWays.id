export const getDate = date => {
  if (!date) return "";

  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};

export const renderHobbies = (id, listHobbies) => {
  const hobby = listHobbies.find(item => String(item.id) === String(id));
  if (!hobby) return "invalid id";
  return hobby.name;
};
