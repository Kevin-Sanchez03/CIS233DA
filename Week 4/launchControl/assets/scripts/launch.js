let start = true;
let alert;

function tryLaunch() {
  if (brake == 1) {
    start = false;
    alert = "Parking brake is on";
  }
  if (tracControl == 1) {
    start = false;
    alert = "Traction control is on";
  }
  if (battery == 0) {
    start = false;
    alert = "battery is off";
  }
  if (shifter < 3) {
    start = false;
    alert = "Not in sports mode";
  }
  if (!start) {
    alert = "Launch Control Failed";
    document.getElementById("launch").src = "./assets/images/lca0.png";
    document.getElementById("sputterAudio").play();
  } else {
    document.getElementById("launch").src = "./assets/images/lca1.PNG";
    document.getElementById("launchAudio").play();
  }
}
