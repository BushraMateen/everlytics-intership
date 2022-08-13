function registration()
	{

		var pipline_name= document.getElementById("t3").value;
		var project_name= document.getElementById("t4").value;
		var bucket_name= document.getElementById("t5").value;
		var cloud_storage_files= document.getElementById("t6").value;			
		var GCS_credentials= document.getElementById("t7").value;
        var run_every= document.getElementById("t8").value;

   
        
		
        //email id expression code
		var pwd_expression =  /[^a-zA-Z0-9\-\/{5,}]/;
		// var letters = /^[A-Za-z]+$/;
		// var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // if( project_name=='')
		// {
		// 	alert('Please enter project_name');
        // }

		if(pwd_expression.test(pipline_name))
		{
			alert('Name field required only alphabet characters');
		}
		// else if( project_name=='')
		// {
		// 	alert('Please enter project_name');
		// }
		// else if (!pwd_expression.test( project_name))
		// {
		// 	alert('Invalid project_name');
		// }
		// else if(bucket_name=='')
		// {
		// 	alert('Please enter bucket_name.');
		// }
		if(pwd_expression.test(bucket_name))
		 {
			alert('bucket_name field required only alphabet characters');
		}
		// else if(cloud_storage_files=='')
		// {
		// 	alert('cloud_storage_files');
		// }
        // else if(!pwd_expression.test(cloud_storage_files))
		// {
		// 	alert('cloud_storage_files field required only alphabet characters');
		// }
		// else if(GCS_credentials=='')
		// {
		// 	alert('Enter GCS_credentials');
		// }
        // else if(!pwd_expression.test(GCS_credentials))
		// {
		// 	alert('GCS_credentials field required only alphabet characters');
		// }
		// else if(document.getElementById("t5").value.length < 6)
		// {
		// 	alert ('Password minimum length is 6');
		// }
		// else if(document.getElementById("t5").value.length > 12)
		// {
		// 	alert ('Password max length is 12');
		// }
		// else
		// {				                            
        //        alert('Thank You for Login & You are Redirecting to Campuslife Website');
		// 	   // Redirecting to other page or webste code. 
		// 	   window.location = "http://www.campuslife.co.in"; 
		// }
	}
	function clearFunc()
	{
		document.getElementById("t1").value="";
		document.getElementById("t2").value="";
		document.getElementById("t3").value="";
		document.getElementById("t4").value="";
		document.getElementById("t5").value="";
	}
