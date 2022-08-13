	
var list = [
    {
        "machine_name": "Auto Winding Machine",
        "machine_id": "machine001",
        "current": 0,
        "voltage": 0,
        "power_factor": 0,
        "active_power": 0.0,
        "apparent_power": 0.0,
        "reactive_power": 0.0,
        "daily_energy": 140,
        "monthly_energy": 0,
        "yearly_energy": 0,
        "idle_daily": 0,
        "idle_monthly": 0,
        "idle_yearly": 150
    },
    {
        "machine_name": "Boiler Machine",
        "machine_id": "machine004",
        "current": 0,
        "voltage": 0,
        "power_factor": 0,
        "active_power": 0.0,
        "apparent_power": 0.0,
        "reactive_power": 0.0,
        "daily_energy": 0,
        "monthly_energy": 0,
        "yearly_energy": 0,
        "idle_daily": 0,
        "idle_monthly": 0,
        "idle_yearly": 100
    }
];


window.addEventListener('load', (event) => {
console.log('page is fully loaded');
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
var header = $('<tr/>');

for (var i = 0; i < list.length; i++) {
var row = list[i];

for (var k in row) {
    if ($.inArray(k, columns) == -1) {
        columns.push(k);
        
        // Creating the header
        header.append($('<th/>').html(k));
    }
}
}

// Appending the header to the table
$(selector).append(header);
return columns;
}	
