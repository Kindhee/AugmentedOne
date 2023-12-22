//------------------------
const rimButton = document.getElementById("v-pills-profile-tab");
const paintButton = document.getElementById("v-pills-home-tab");
const customButton = document.getElementById("v-pills-disabled-tab");
const interiorButton = document.getElementById("interiorButton");
//------------------------
rimButton.addEventListener("click",()=>{cameraTravel(0)});
paintButton.addEventListener("click",()=>{cameraTravel(1)});
customButton.addEventListener("click",()=>{cameraTravel(2)});
interiorButton.addEventListener("click",()=>{cameraTravel(3)});
//------------------------
export const cameraCoords = {
  0 : 
  {
      position : [2, 0.5, 0.5],
      cameraOrientation : [0, 1, 0, 1],
  },
  1 : 
  {
      position : [3, 1, 0],
      cameraOrientation : [0, 1, 0, 1],
  },
  2 : 
  {
      position : [4, 2, 0],
      cameraOrientation : [0, 1, 0, 1],
  },
  3 : 
  {
      position : [0, 1.75, 0],
      cameraOrientation : [0, -1, 0, -1],
  }
};



export function cameraTravel(destinationNumber) {

  const camera = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports();
  console.log(camera[0]);

  window.SDK3DVerse.engineAPI.cameraAPI.travel(
    camera[0],
    cameraCoords[destinationNumber]["position"],
    cameraCoords[destinationNumber]["cameraOrientation"],
    5
  );
  render();

}
  