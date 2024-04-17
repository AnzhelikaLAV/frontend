document.addEventListener("DOMContentLoaded", function () {
  const spaceship = {
    name: "Starship Voyager",
    manufacturer: "Federation Starfleet",
    crew: 20,
    maxSpeed: "Warp 9.975",
  };

  document.querySelector(".name").innerText = `Name: ${spaceship.name}`;
  document.querySelector(
    ".manufacturer"
  ).innerText = `Manufacturer: ${spaceship.manufacturer}`;
  document.querySelector(".crew").innerText = `Crew: ${spaceship.crew}`;
  document.querySelector(
    ".maxSpeed"
  ).innerText = `Max Speed: ${spaceship.maxSpeed}`;

  document
    .getElementById("hideManufacturer")
    .addEventListener("click", function () {
      document.querySelector(".manufacturer").style.display = "none";
    });
});
