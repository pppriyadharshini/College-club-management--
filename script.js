const clubs = ["Coding Club", "Robotics Club", "Cultural Club"];
const members = JSON.parse(localStorage.members || "[]");
document.getElementById("clubList").innerHTML =
  clubs.map(c => `<article><h3>${c}</h3><button>Join</button></article>`).join("");
function register() {
  const name = document.getElementById("name").value.trim();
  const regNo = document.getElementById("regNo").value.trim();
  if (name.length < 3 || !/^\d{8,12}$/.test(regNo)) {
    alert("Enter a valid name and register number"); return;
  }
  members.push({name, regNo});
  localStorage.members = JSON.stringify(members);
  alert("Registration successful!");
}
document.getElementById("events"
