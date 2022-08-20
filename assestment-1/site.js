
let classes = (classes) => document.getElementsByClassName(classes);

let pipline = document.getElementById("pipline"),
  project = document.getElementById("project"),
  bucket = document.getElementById("bucket"),
  password = document.getElementById("password"),
  form = document.getElementById("form"),
  runevery = document.getElementById("runtime")
  errorMsg = classes("error");

  let piplineRegExp = /[^a-zA-Z0-9\-\/]/;
  //let specialRegExp = /^+/;

form.addEventListener("submit", (e) => {

  e.preventDefault();

  //let submitted = true;
  let isError = false;

  if(e.submitter.id !== 'Cancle'){
    engine(pipline, 1, "pipline name");
    engine(project, 2, "project name");
    engine(bucket, 3, "bucket name");
    engine(password, 5, "password");
  
  for (let index = 0; index < errorMsg.length; index++) 
  {
    if(errorMsg[index].innerHTML != ""){
          isError = true;
          break;
    }
  }

  if(isError != true){

    engine(pipline, 1, "pipline name");
    engine(project, 2, "project name");
    engine(bucket, 3, "bucket name");
    engine(password, 5, "password");

      
    setTimeout(() => { if(confirm("Do you Want to Submit the form?")) {
      clearFunc();
      alert('created succesfully');
      } }, 100)

  }

  } 
});


let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message + ' cannot be blank';
    id.style.border = "2px solid red";
  }
  else if (id.value.trim().length < 5) {
    errorMsg[serial].innerHTML = message + ' minimum length is 5';
    id.style.border = "2px solid red";
  }
  else if(id.value.trim().startsWith("+") || id.value.trim().startsWith("-") || id.value.trim().startsWith("_")){
    errorMsg[serial].innerHTML = "cannot start with '-', '_', '+'";
    id.style.border = "2px solid red";
  }
  else if(piplineRegExp.test(id.value.trim())){
    errorMsg[serial].innerHTML = 'no special character allowed';
    id.style.border = "2px solid red";
  }
  else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
  }
};
function clearFunc(e)
{
    document.getElementById("pipline").value="";
    document.getElementById("pipline").style.border = "2px solid #c4c4c4";
    errorMsg[1].innerHTML = "";

    document.getElementById("project").value="";
    document.getElementById("project").style.border = "2px solid #c4c4c4";
    errorMsg[2].innerHTML = "";

    document.getElementById("bucket").value="";
    document.getElementById("bucket").style.border = "2px solid #c4c4c4";
    errorMsg[3].innerHTML = "";

    document.getElementById("password").value="";
    document.getElementById("password").style.border = "2px solid #c4c4c4";
    errorMsg[5].innerHTML = "";

    document.getElementById("runtime").value="";
    document.getElementById("runtime").style.border = "2px solid #c4c4c4";

}



