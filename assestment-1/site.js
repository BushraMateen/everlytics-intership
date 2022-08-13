// Tutorial - https://youtu.be/VufN46OyFng

// Targetting all classes & id from HTML

//let id = (id) => document.getElementById(id);

// function getElement(id) {
//   return document.getElementById(id);
// }
let classes = (classes) => document.getElementsByClassName(classes);

let pipline = document.getElementById("pipline"),
  project = document.getElementById("project"),
  bucket = document.getElementById("bucket"),
  password = document.getElementById("password"),
  form = document.getElementById("form"),
  runevery = document.getElementById("runtime")
  errorMsg = classes("error");

  let piplineRegExp = /[^a-zA-Z0-9\-\/]/;
// successIcon = classes("success-icon"),
// failureIcon = classes("failure-icon");

// Adding the submit event Listener

form.addEventListener("submit", (e) => {

  e.preventDefault();

  if(e.submitter.id !== 'Cancle'){
    engine(pipline, 1, "pipline name");
    engine(project, 2, "project name");
    engine(bucket, 3, "bucket name");
    engine(password, 5, "password");
  }
});

// engine function which will do all the works

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message + ' cannot be blank';
    id.style.border = "2px solid red";
  }
  else if (id.value.trim().length < 5) {
    errorMsg[serial].innerHTML = message + ' minimum length is 5';
    id.style.border = "2px solid red";
  }
  else if(piplineRegExp.test(id.value.trim())){
    errorMsg[serial].innerHTML = 'no special character allowed';
    id.style.border = "2px solid red";
  }
  else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    // failureIcon[serial].style.opacity = "0";
    // successIcon[serial].style.opacity = "1";
  }
};
function clearFunc(e)
{
   
    document.getElementById("pipline").value="";
    document.getElementById("project").value="";
    document.getElementById("bucket").value="";
    document.getElementById("password").value="";
    document.getElementById("runtime").value="";
}

