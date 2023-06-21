showTime();

// Gas Button

let gasLevel = 0;

function getGas() {
  if (gasLevel == 0) {
    gasLevel = 1;
    document.getElementById("gas").src = "./assets/images/gas1.png";
    document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_1.PNG";
  } else {
    gasLevel = 0;
    document.getElementById("gas").src = "./assets/images/gas0.png";
    document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_0.PNG";
  }
}

// Traction Control

let tracControl = 1;

function tracButton() {
  if (tracControl == 1) {
    tracControl = 0;
    document.getElementById("trac").src = "./assets/images/trac1.PNG";
    document.getElementById("bttn_trac").src =
      "./assets/images/bttn_trac_0.PNG";
  } else {
    tracControl = 1;
    document.getElementById("trac").src = "./assets/images/trac0.PNG";
    document.getElementById("bttn_trac").src =
      "./assets/images/bttn_trac_1.PNG";
  }
}

// Charge Battery

let battery = 0;

function battButton() {
  if (battery == 0) {
    battery = 1;
    document.getElementById("batt").src = "./assets/images/batt1.PNG";
    document.getElementById("bttn_batt").src =
      "./assets/images/bttn_batt_1.PNG";
  } else {
    battery = 0;
    document.getElementById("batt").src = "./assets/images/batt0.PNG";
    document.getElementById("bttn_batt").src =
      "./assets/images/bttn_batt_0.PNG";
  }
}

// Parking brake

let brake = 1;

function parkBrake() {
  if (brake == 1) {
    brake = 0;
    document.getElementById("brake").src = "./assets/images/p0.PNG";
    document.getElementById("bbtn_brake").src =
      "./assets/images/bttn_park_0.PNG";
  } else {
    brake = 1;
    document.getElementById("brake").src = "./assets/images/p1.PNG";
    document.getElementById("bbtn_brake").src =
      "./assets/images/bttn_park_1.PNG";
  }
}
