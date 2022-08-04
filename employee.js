var emp = {};
const listOfRegisterEmployee = [];

let listOfIdOfField = [
  "form1Name",
  "form1Gender",
  "form1Email",
  "password",
  "form1confPassword",
  "form1ContactNumber",
  "form1SubmitButton",
];

// Hide the all field of form1 except first
// function take Id and hide the from UI
// hide the Section of field in form it takes Id of field
hideSection = (id) => {
  if (id != "" || id != NULL) {
    document.getElementById(id).classList.toggle("hideField");
  }
};

listOfIdOfField.forEach((id, index) => {
  if (index !== 0) {
    hideSection(id);
  }
});

// Check for Length of input type name (Full Name -> Length min 2 and should not be numeric)
var regexForName = new RegExp(/[0-9]/);
// return if our string contains  numeric value else return false
checkNumbericINString = (str) => {
  return regexForName.test(str);
};

// check for input name and  and length should be >=2 and should not contains numeric value
checkConstraintForName = (name) => {
  if (name.length >= 2 && !checkNumbericINString(name)) {
    return true;
  }
  return false;
};

/*
Minimum length of password should be >=8
Password -> should contains Uppercase, Lowercase, Numeric, Alphanumeric, and length minimum 8

More characters – If the length is under 8 characters.
Weak – If the length is less than 10 characters and doesn’t contain a combination of symbols, caps, text. [red]
Medium – If the length is 10 characters or more and has a combination of symbols, caps, text.  [orange]
Strong – If the length is 14 characters or more and has a combination of symbols, caps, text.  [green]
*/

function passwordValidation(id) {
  var strength = document.getElementById("strength");
  var strongRegex = new RegExp(
    "^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );
  var mediumRegex = new RegExp(
    "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
    "g"
  );
  var enoughRegex = new RegExp("(?=.{8,}).*", "g");
  var pwd = document.getElementById(id);
  if (pwd.value.length == 0) {
    strength.innerHTML = "Type Password";
  } else if (false == enoughRegex.test(pwd.value)) {
    strength.innerHTML = "More Characters";
  } else if (strongRegex.test(pwd.value)) {
    strength.innerHTML = '<span style="color:green">Strong!</span>';
    passId.style.border = "1px solid  green";

    return true;
  } else if (mediumRegex.test(pwd.value)) {
    strength.innerHTML = '<span style="color:orange">Medium!</span>';
    passId.style.border = "1px solid  orange";
  } else {
    strength.innerHTML = '<span style="color:red">Weak!</span>';
    passId.style.border = "1px solid  red";
  }
  return false;
}

// Phone number validation
var phoneNumberRegex = new RegExp("^[0-9]{8,}$");

phoneValidation = (phonenumber) => {
  return phoneNumberRegex.test(phonenumber);
};

// Email validation
let regexForEmail = new RegExp("[a-z0-9]+@metacube.com");
emailValidation = (email) => {
  return regexForEmail.test(email);
};

// Id of all field of Employee form
var nameId = document.getElementById("name");
var maleId = document.getElementById("male");
var femaleId = document.getElementById("female");
var emailId = document.getElementById("email");
var passId = document.getElementById("pass");
var confPassId = document.getElementById("confPass");
var phoneId = document.getElementById("phNo");
let paramnentLabelName = "";

document.getElementById("form1").addEventListener("submit", (e) => {
  e.preventDefault();
  return false;
});

// Event Listner in input field  name
nameId.addEventListener("change", (e) => {
  e.preventDefault();
  // It  tells about the information of label;
  let labelInfo = e.label;
  let value = e.target.value;
  let currentId = e.target.id;

  let currentClass = nameId.parentElement.id;
  let nextClass = listOfIdOfField[1];
  document.getElementById("name");

  // check validation for input name
  if (checkConstraintForName(value)) {
    console.log("input contains right regex pattern");
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
    paramnentLabelName = "Hi " + value + " Enter ";
    document.getElementById("labelInfo").innerHTML =
      paramnentLabelName + ` </i> , Please Enter your Gender`;

    document.getElementById("alertName").innerHTML = "";

    emp["Name"] = value;
  } else {
    nameId.style.border = "2px solid red";
    messageForName = "Full Name contains Numeric Value";
    document.getElementById("alertName").innerHTML =
      ` <i>` + messageForName + `</i>`;
  }
});

// Event Listner in input field  Gender
maleId.addEventListener("keypress", (e) => {
  e.preventDefault();
  let value = e.target.value;
  let currentId = e.target.id;
  let currentClass = listOfIdOfField[1];
  let nextClass = listOfIdOfField[2];
  if (e.key === 'Enter') {
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
    document.getElementById("labelInfo").innerHTML =
      paramnentLabelName + ` <i> Your Email  </i>`;
    emp["gender"] = value;
  }

});

femaleId.addEventListener("keypress", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    let value = e.target.value;
    let currentId = e.target.id;
    let currentClass = listOfIdOfField[1];
    let nextClass = listOfIdOfField[2];
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
    document.getElementById("labelInfo").innerHTML =
      paramnentLabelName + ` <i> Your Gender </i>`;
    emp["gender"] = value;
  }
});

// Event Listner in input field  email
emailId.addEventListener("change", (e) => {
  let value = e.target.value;
  let currentId = e.target.id;
  let currentClass = listOfIdOfField[2];
  let nextClass = listOfIdOfField[3];
  if (emailValidation(value)) {
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
    document.getElementById("labelInfo").innerHTML =
      paramnentLabelName + ` <i> Your Email </i>`;
    emp["emailId"] = value;
    document.getElementById("alertName").innerHTML = "";
  } else {
    document.getElementById("alertName").innerHTML =
      ` <i> <b> Email should be like abc@metacube.com</b></i>`;
  }
});

// Event Listner in input field  Gender
passId.addEventListener("change", (e) => {
  let value = e.target.value;
  let currentId = e.target.id;
  let currentClass = listOfIdOfField[3];
  let nextClass = listOfIdOfField[4];
  document.getElementById("labelInfo").innerHTML =
    paramnentLabelName + ` <i> password</i>`;
  if (passwordValidation(currentId)) {
    console.log("Sucessfull Password Validation");
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);
    emp["password"] = value;
  }
});

// Event Listner in input field  Gender
confPassId.addEventListener("change", (e) => {
  let value = e.target.value;
  let currentId = e.target.id;
  let currentClass = listOfIdOfField[4];
  let nextClass = listOfIdOfField[5];
  document.getElementById("alertName").innerHTML =
    paramnentLabelName + ` <i>Re-Enter  your Password</i>`;
  // password and reenter password should match
  if (emp.password === value) {
    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI
    hideSection(nextClass);

    emp["confirmPassword"] = value;
    document.getElementById("alertName").innerHTML = "";
  } else {
    document.getElementById("alertName").innerHTML =
      ` <i> <b> Password not Matched</b></i> <code> Your Password is ` +
      emp.password +
      `</code>`;
  }
});

// Event Listner in input field  Gender
phoneId.addEventListener("change", (e) => {
  let value = e.target.value;
  let currentId = e.target.id;
  let currentClass = listOfIdOfField[5];
  let nextClass = listOfIdOfField[0];
  let messageForName = "";

  if (phoneValidation(value)) {
    listOfRegisterEmployee.push(emp);

    // hide the Current field from UI
    hideSection(currentClass);
    // display the Next Field IN UI

    document.getElementById("labelInfo").innerHTML =
      paramnentLabelName + ` <i> Phone </i>`;
    emp["phone"] = value;

    alert(JSON.stringify(emp));
    emp["name"] = "";
    emp["emailId"] = "";
    emp["password"] = "";
    emp["confirmPassword"] = "";
    emp["phone"] = "";
    document.getElementById("alertName").innerHTML = "";
    hideSection(nextClass);
  } else {
    messageForName = "Phone Number length Should be greater than 8...";
    document.getElementById("alertName").innerHTML =
      ` <i>` + messageForName + `</i>`;
  }
});
