let profiles = [
  {
    id: "1",
    name: "haris sucipto",
    born_date: new Date(1997, 10, 12),
    address: "buru",
    hooby_id: "1",
    photo: "haris.jpg"
  },
  {
    id: "2",
    name: "haris dua",
    born_date: new Date(1997, 10, 12),
    address: "karimun",
    hooby_id: "2",
    photo: "haris.jpg"
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

Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

const generateId = () =>
  "_" +
  Math.random()
    .toString(36)
    .substr(2, 9);

// state
let hobbieNewProfile = [];

const showListSudents = data => {
  const domList = document.querySelector("#list-students");

  const students = data.map(item => {
    return `
        <div class="card-student" id="student-${item.id}">
          <div class="box-student" id="student-${item.id}">
            <img src="${item.photo}" width="100%" height="180px" />
            <h2>${item.name}</h2>
            <p>ini</p>
          </div>
          <button onclick="detailData(${item.id})">Detail</button>
        </div>
    `;
  });
  domList.innerHTML = students.join("");
};

const tutupDetailData = () => {
  document.querySelector("#detail").remove();
};

const tutupEditData = () => {
  document.querySelector("#edit").remove();
};

const hapusData = id => {
  tutupDetailData();
  const profilesHapus = profiles.filter(item => String(item.id) !== String(id));
  profiles = profilesHapus;
  showListSudents(profilesHapus);
};

const editData = idUser => {
  const profil = profiles.find(item => String(item.id) === String(idUser));
  const data = `<div id="edit">
      <h2 style="text-align: center;">Edit Data</h2>
      <div class="detail-content">
        <img src="haris.jpg" width="150px" height="180px" />
        <h2>${profil.name}</h2>
        <p>Membaca, Menonton</p>
        <p>Tanggal lahir</p>
        <p>Alamat</p>
      </div>

      <div>
        <button>simpan</button>
        <button onclick="tutupEditData()">batal</button>
      </div>
    </div>`;

  document.querySelector("#action").innerHTML = data;
};

const detailData = idUser => {
  const profil = profiles.find(item => String(item.id) === String(idUser));

  const data = `
      <div id="detail">
        <h2 style="text-align: center;">Detail Data</h2>
        <div class="student-action-box">
          <button onclick="editData(${idUser})">edit</button>
          <button onclick="hapusData(${idUser})">hapus</button>
          <button onclick="tutupDetailData()">tutup</button>
        </div>
        <div class="detail-content">
          <img src="${profil.photo}" width="150px" height="180px" />
          <h2>${profil.name}</h2>
          <p>Membaca, Menonton</p>
          <p>Tanggal lahir</p>
          <p>${profil.address}</p>
        </div>
    </div>
  `;

  document.querySelector("#action").innerHTML = data;
};

const deleteHobbie = id => {
  const updateHobbies = hobbieNewProfile.filter(
    item => String(item) !== String(id)
  );
  hobbieNewProfile = updateHobbies;

  console.log(updateHobbies);
  renderListHobbies();
};

const renderListHobbies = () => {
  const domHobbies = hobbieNewProfile.map(item => {
    return `<li>${
      hobby_tb.find(({ id }) => String(id) === String(item)).name
    } <button onclick="deleteHobbie(${item})">x</button></li>`;
  });
  const listDomHobbies = `<ol>${domHobbies.join("")}</ol>`;

  document.querySelector("#list-hobbies-new").innerHTML = listDomHobbies;
};

const addHobbies = selectObject => {
  var value = selectObject.value;
  if (value === 0) return;

  if (hobbieNewProfile.some(item => String(item) === String(value))) return;

  hobbieNewProfile.push(String(value));
  renderListHobbies();
};

const submitNewProfile = () => {
  console.log(hobbieNewProfile);
};

const addProfile = () => {
  const data = `
   <div>
      <h2>Add Profile</h2>
      <label for="name">name:</label><br />
      <input type="text" id="name" name="name" /><br />

      <label for="born">Born Date:</label><br />
      <input type="date" id="born" name="born"  /><br />

      <label for="address">Address:</label><br />
      <input type="text" id="address" name="address"  /><br />

       <label for="address">Select hobbies:</label><br />
     <select onchange="addHobbies(this)">
      <option value="0" >select your hobbies</option>
      ${hobby_tb
        .map(item => `<option value="${item.id}">${item.name}</option>`)
        .join("")}
     </select>

     <div id="list-hobbies-new">
     </div>

      <br />
      <input type="submit" value="Submit" onclick="submitNewProfile()" />
    </div>
  `;

  document.querySelector("#action").innerHTML = data;
};

showListSudents(profiles);
