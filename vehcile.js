
// Store to Cycle Price(USD)
const cycle = new Map();
cycle.set("perDay", 5);
cycle.set("monthly", 100);
cycle.set("year", 500);

// Store to motorCycle Price(USD)
const motorcycle = new Map();
motorcycle.set("perDay", 10);
motorcycle.set("monthly", 200);
motorcycle.set("year", 1000);

// Store to fourWheelers Price(USD)
const fourwheeler = new Map();
fourwheeler.set("perDay", 20);
fourwheeler.set("monthly", 500);
fourwheeler.set("year", 3500);

const vehicle = {};
const listOfRegisterVehicle = [];


// list of class of field of parent
const listOfIdOfFieldvehicle = [
    "vehicleComapany",
    "vehicleModel",
    "vehicleType",
    "vehicleNumber",
    "employeeId",
    "identification",
    "planOfVehicle",
];

// Hide the all field of form2 (Vehicle Form) except first field
// function take Id and hide that id
// hide the Section of field in form it takes Id of parent field
hideSection = (id) => {
  
    if (id != "" || id != NULL) {
        document.getElementById(id).classList.toggle("hideField");
    }
};

listOfIdOfFieldvehicle.forEach((id, index) => {
    if (index !== 0) {
        hideSection(id);
    }
});

// Id of all field of vehicle form
const vComapany = document.getElementById("vComapany");
const vModel = document.getElementById("vModel");
const vNumber = document.getElementById("vNumber");
const employeeId = document.getElementById("employeeId");
const identification = document.getElementById("ident");

// Event Listner in input field  name
vComapany.addEventListener("change", (e) => {
    e.preventDefault();
    // It  tells about the information of label;
    let value = e.target.value;
    let currentClass = listOfIdOfFieldvehicle[0];
    let nextClass = listOfIdOfFieldvehicle[1];
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
    vehicle["name"] = value;
});

vModel.addEventListener("change", (e) => {
    let value = e.target.value;
    let currentClass = listOfIdOfFieldvehicle[1];
    let nextClass = listOfIdOfFieldvehicle[2];
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
    vehicle["Model"] = value;
});

vNumber.addEventListener("change", (e) => {
    e.preventDefault();
    let currentId = e.target.id;
    let currentClass = listOfIdOfFieldvehicle[3];
    let nextClass = listOfIdOfFieldvehicle[4];
    document.getElementById("name");
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
});

employeeId.addEventListener("change", (e) => {
    e.preventDefault();
    let value = e.target.value;
    let currentClass = listOfIdOfFieldvehicle[4];
    let nextClass = listOfIdOfFieldvehicle[5];
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
    vehicle["empolyeeId"] = value;
});

// Event Listner for Identification textarea
identification.addEventListener("change", (e) => {
    e.preventDefault();
    let value = e.target.value;
    let currentClass = listOfIdOfFieldvehicle[5];
    let nextClass = listOfIdOfFieldvehicle[6];
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
    vehicle["identification"] = value;
});

// Event Listner on Select of SelectBox (Cycle, MotorCycle , FourWheeler)
document.getElementById("vehicleType").addEventListener("change", (e) => {
    e.preventDefault();
    let value = e.target.value;
    let currentId = e.target.id;
    let currentClass = listOfIdOfFieldvehicle[2];
    let nextClass = listOfIdOfFieldvehicle[3];
    vehicle["vehcileType"] = value;
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
    if (value == "cycle") {
        createPlanForVehcile(cycle);
    } else if (value == "motorcycle") {
        createPlanForVehcile(motorcycle);
    } else if (value == "fourwheeler") {
        createPlanForVehcile(fourwheeler);
    }
});

// function for convert  USD & YEN.  (save the price in USD only)
// price of 1 USD to YEN
const oneUSDToYEN = 123;
// convet USD to YEN takes money in USD retrun into YEN
function convertUSDToYEN(money) {
    return money * oneUSDToYEN;
}


// Create a Select Box for Daily Monthly ,yearly for particular Vehicle type
// vType  store the type of Vehicle (Cycle, MotorCycle , FourWheeler)
function createPlanForVehcile(vType) {
    document.getElementById("planOfVehicle").innerHTML = `  
    <label for="v_type"> ${vehicle["vehcileType"]} Plan</label>
    <select name="vehicleType" id="type">
    ${createPlan(vType)}
    </select>
    `;

    // Event Listner on Select box  Plan for option (PerDay , Monthly, Year)
    document.getElementById("type").addEventListener("change", (e) => {
        let plan = e.target.value;
        let vehicalType = vehicle["vehcileType"];
        if (vehicalType === "cycle") {
            vehicalType = cycle;
        } else if (vehicalType === "motorcycle") {
            vehicalType = motorcycle;
        } else if (vehicalType === "fourwheeler") {
            vehicalType = fourwheeler;
        }
        vehicle["planType"] = plan;
        createPriceBookUSDandYEN(vehicalType, plan);
       
    });

}

//  return All Plan  (perMonth, PerDay, Year)   in option  tag
function createPlan(vType) {
    let myString = "";
    for (let [key, value] of vType) {
        myString += `<option value=${key}> ${key}</option>`;
    }
    return myString;
}

// Create Pricebox select box acccording to use select plan (perMonth, PerDay, Year)
function createPriceBookUSDandYEN(vType  , vPlanType) {

    document.getElementById("planPriceOfVehicle").innerHTML = `  
    <label for="v_type">  Price ${vPlanType} Plan</label>
    <select name="vehicleType" id="price">
    ${createPrice(vType, vPlanType)}
    </select>`;
    document.getElementById("price").addEventListener("change", (e) => {
        let price = e.target.value;
        vehicle["price"] = price/oneUSDToYEN;
        listOfRegisterVehicle.push(vehicle);
        alert("SucessFull Pass Create" + JSON.stringify(vehicle));
        
    });
  
}


//  create   Option tag from Select box Price for vehicle Type(Cycle, MotorCycle , FourWheeler) and its plan  (perMonth, PerDay, Year)
function createPrice(vType  , vPlanType) { 
    let myString = "";
    for (let [key, value] of vType) {
        if (key == vPlanType) {
            myString +=
                `<option value=${value}> ${value} USD</option>` +
                `<option value=${convertUSDToYEN(value)}> ${convertUSDToYEN(value)} YEN</option>`;
        }
    }
    return myString;
}
