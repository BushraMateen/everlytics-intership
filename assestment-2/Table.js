 var list = [];

//     {
//         "machine_name":"Auto Winding Machine",
//         "machine_id":"machine001",
//         "current":0,
//         "voltage":0,
//         "power_factor":0,
//         "active_power": 0.0,
//         "apparent_power" :0.0,
//         "reactive_power": 0.0,
//         "daily_energy": 0,
//         "monthly_energy" :0,
//         "yearly_energy" : 0,
//         "idle_daily" : 0,
//         "idle_monthly" :0,
//         "idle_yearly" : 0    
//     },
//     {
//         "machine_name":"Boiler Machine",
//         "machine_id":"machine004",
//         "current":0,
//         "voltage":0,
//         "power_factor":0 ,
//         "active_power": 0.0,
//         "apparent_power" :0.0 ,
//         "reactive_power": 0.0,
//         "daily_energy": 0,
//         "monthly_energy" :0,
//         "yearly_energy" : 0,
//         "idle_daily" : 0,
//         "idle_monthly" :0,
//         "idle_yearly" : 0 
//     }
// ];
//readTextFile("file:///C:/your/path/to/file.txt");

async function dataOperations(){

   await fetchAsync("/assestment-2/Data.txt");

}
 async function fetchAsync(url) {
 
    const promise = await fetch(url,{ 
        method: 'GET'
    });

    const data = await promise.text();

    return data;

}

function fetchData()
{
    console.log("data fetch called")

    var txtFile = new XMLHttpRequest();  

    txtFile.open("GET", "/assestment-2/Data.txt", true);  

        txtFile.onreadystatechange = function()   
        {  
           if (txtFile.readyState === 4)   
           {  
               // Makes sure the document is ready to parse.  
               if (txtFile.status === 200)   
               {  
                    // Makes sure it's found the file.  
                    //document.getElementById("output").innerHTML = txtFile.responseText;  

                    ParseData(txtFile);
                }  
            }  
        }  
     
     //txtFile.send(null)  
     console.log("list",list);

}


function ParseData(data) {

    //var data = txtFile.responseText;
    

    data = data.replace(/\n/g, '');
    data = data.replace(/\r/g, '');
    data = data.replace(/ /g, '');
    data = data.replace(/'/g, '');
    data = data.replaceAll('[', '');
    data = data.replace(']]', '');

    var datalst = data.split('],');

    var columnList = [];

    for (let index = 0; index < datalst.length; index++) {

        var item = datalst[index].split(",");

        var dataDic = {};

        if (index == 0) {

            for (let i = 0; i < item.length; i++) {

                columnList.push(item[i]);
            }
        }

        else {
            for (let j = 0; j < item.length; j++) {

                dataDic[columnList[j]] = item[j];
            }

            list.push(dataDic);

            console.log(list);
        }
    }
}



window.addEventListener('load', async (event) => {
console.log('page is fully loaded');

var data = await fetchAsync("/assestment-2/Data.txt");
ParseData(data)


//fetchData()
constructTable('#table')
});




function constructTable(selector) {

// Getting the all column names
var cols = Headers(list, selector);

// Traversing the JSON data
for (var i = 0; i < list.length; i++) {
var row = $('<tr/>');
for (var colIndex = 0; colIndex < cols.length; colIndex++)
{
    var val = list[i][cols[colIndex]];
    
    // If there is any key, which is matching
    // with the column name
    if (val == null) val = "";
        row.append($('<td/>').html(val));
        
}

// Adding each row to the table
$(selector).append(row);
}
}

function Headers(list, selector) {
var columns = [];
var header = $("<tr class='header'/>");
var energyHeader = $("<tr class='header'/>");
//ar idleHeader = $('<tr/>');

for (var i = 0; i < list.length; i++) {
var row = list[i];

var eneryRow = false;
var idelRow = false;

for (var k in row) {
    if ($.inArray(k, columns) == -1) {
        columns.push(k);

        if(k.includes("_energy")){
            k = k.replace('_energy','').toUpperCase();
            k = (k == "DAILY" ? "Today" : (k == "MONTHLY" ? "MTH" : "YTD"))

            energyHeader.append($('<th/>').html(k));

            if(!eneryRow){
                header.append($('<th colspan="3"/>').html("ENERGY CONSUMED (kWh)"));
                eneryRow = true;
            }
        }
        else if(k.includes("idle_")){
            k = k.replace('idle_','').toUpperCase();
            k = (k == "DAILY" ? "Today" : (k == "MONTHLY" ? "MTH" : "YTD"))
            energyHeader.append($('<th/>').html(k));

            if(!idelRow){
                header.append($('<th colspan="3"/>').html("IDLE TIME"));
                idelRow = true;
            }
        }
        else{
        // Creating the header
            header.append($('<th rowspan="2"/>').html(k.replace('_',' ').toUpperCase()));
        }

    }
}
}

// Appending the header to the table
$(selector).append(header);
$(selector).append(energyHeader);


return columns;
}	
