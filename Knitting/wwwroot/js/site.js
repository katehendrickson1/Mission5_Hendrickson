// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/* function calculateCost() 
{
    let numHours = parseFloat(document.getElementById("numHours").value)

    if (numHours >= 0 && !isNaN(numHours)) {
        let totalCost = 0.25 * numHours

        document.getElementById("displayCost").innerHTML = "Total cost: $" + totalCost.toFixed(2);
    }
    else
    {
        alert("Please enter a valid, positive number.")
    }
} */

//jQuery conversion of the javaScript function. 
$(document).ready(function () {
    $("#calculateButton").click(function () {
        let numHours = parseFloat($("#numHours").val());

        //check if the numHours inputted by the user is a valid positive number & calculate
        if (numHours >= 0 && !isNaN(numHours)) {
            let totalCost = 0.25 * numHours;
            $("#displayCost").html("Total cost: $" + totalCost.toFixed(2));
        } else {
            alert("Please enter a valid, positive number.");
        }
    });
});