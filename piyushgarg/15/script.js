// const button = document.getElementById("button");
// async function getData(long,lat) {
//   const promise = await fetch(
//     `http://api.weatherapi.com/v1/current.json?key=24556431ad994a6380585907252406&q=${long},${lat}&aqi=yes`
//   );
//   return await promise.json();
// }

// async function GotLocation(position){
//     const result= await getData(position.coords.latitude,position.coords.longitude)
//      console.log(result);
     
// }
// function FailedToGet(){
//     console.log("There was some issue!!!!!!!SORRY🙏🏻");
    
// }



// button.addEventListener("click", async () => {
//     navigator.geolocation.getCurrentPosition(GotLocation,FailedToGet)
// });


////to add location in window
const button = document.getElementById("button");
const locationElement = document.getElementById("location");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=24556431ad994a6380585907252406&q=${lat},${long}&aqi=yes`
  );
  return await promise.json();
}

async function GotLocation(position) {
  const result = await getData(position.coords.latitude, position.coords.longitude);
  const loc = `${result.location.name}, ${result.location.region}, ${result.location.country}`;

  locationElement.innerText = loc;
  localStorage.setItem("location", loc);
}

function FailedToGet() {
  console.log("There was some issue!!!!!!!SORRY🙏🏻");
}

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(GotLocation, FailedToGet);
});

window.addEventListener("load", () => {
  const loc = localStorage.getItem("location");
  if (loc) {
    locationElement.innerText = loc;
  }
});
