let start = true;
let msg;

function tryLaunch() {
  if (brake == 1) {
    start = false;
    msg = "Parking brake is on";
  }
  if (tracControl == 1) {
    start = false;
    msg = "Traction control is on";
  }
  if (battery == 0) {
    start = false;
    msg = "battery is off";
  }
  if (shifter < 3) {
    start = false;
    msg = "Not in sports mode";
  }
  if (!start) {
    document.getElementById("msg").innerText = msg;
    document.getElementById("launch").src = "./assets/images/lca0.png";
    document.getElementById("sputterAudio").play();
  } else {
    document.getElementById("msg").innerText = "";
    document.getElementById("launch").src = "./assets/images/lca1.PNG";
    document.getElementById("launchAudio").play();
  }
}
