
let classes = (classes) => document.getElementsByClassName(classes);

let pipline = document.getElementById("pipline"),
  project = document.getElementById("project"),
  bucket = document.getElementById("bucket"),
  password = document.getElementById("password"),
  form = document.getElementById("form"),
  runevery = document.getElementById("runtime")
  errorMsg = classes("error");

  let piplineRegExp = /[^a-zA-Z0-9\-\/]/;


form.addEventListener("submit", (e) => {

  e.preventDefault();

  let submitted = false;

  if(e.submitter.id !== 'Cancle'){
    engine(pipline, 1, "pipline name");
    engine(project, 2, "project name");
    engine(bucket, 3, "bucket name");
    engine(password, 5, "password");
    if(e.submitter.id == 'submit' && submitted == true ){
      alert('created succesfully')
    }
    
  }

  // for (let index = 0; index < errorMsg.length; index++) {
  //   let element = errorMsg[index];
  //   if (element.innerHTML != '') {
  //     submitted = false;
  //     break;
  //   }
  // }


  
  
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



