/*
Brandon Nguyen
Brandon_Nguyen4@student.uml.edu
*/

$('#table').hide();

$('#coltable').tabs({collapsible: false});

var minCClicked = false;
var maxCClicked = false;
var minRClicked = false;
var maxRClicked = false;
var tabIterator = 1;
var tNum = 1;
var checkIterator = 1;

// Function to check if all inputs are clicked before submitting the form
function submitForm(input){
  if(minCClicked && maxCClicked && minRClicked && maxRClicked){
    $("#form").submit();
  }
}

// Function to get input values and return an object with key-value pairs
function getInputValues(){
  var minColElement = document.getElementById("minc");
  var minColVal = parseInt(document.getElementById("minc").value);
  var maxColElement = document.getElementById("maxc");
  var maxColVal = parseInt(document.getElementById("maxc").value);
  var minRowElement = document.getElementById("minr");
  var minRowVal = parseInt(document.getElementById("minr").value);
  var maxRowElement = document.getElementById("maxr");
  var maxRowVal = parseInt(document.getElementById("maxr").value);
  
  var input = {
    minCol: [minColVal, minColElement], 
    maxCol: [maxColVal, maxColElement],
    minRow: [minRowVal, minRowElement],
    maxRow: [maxRowVal, maxRowElement]
  };           
  return input;
}

// Function to generate the table 
function generateTable(input){
  // Get the existing table element and remove it
  var table = document.getElementById("table");
  table.remove();
  // Get the parent div for the table
  var tableParentDiv = document.getElementById("coltable");
  // Create a new table element and set its ID
  var newTable = document.createElement("table");
  newTable.id = "table";
  tableParentDiv.appendChild(newTable);
  var newThead = document.createElement("thead");
  var newTbody = document.createElement("tbody");
  newTable.appendChild(newThead);
  newTable.appendChild(newTbody);
  var newTr = document.createElement("tr");
  newThead.appendChild(newTr);
  var newTh = document.createElement("th");
  newTr.appendChild(newTh);
  var newTh = document.createElement("th");
  newTr.appendChild(newTh);
  var tHeadtBodyPair = document.getElementById("table").children;
  var tHead = tHeadtBodyPair[0];
  var trCollection = tHead.children;
  var tableColHeaders = trCollection[0].children;
  tableColHeaders[1].innerHTML = input.minCol[0];
  
// Loop to generate additional <th> elements for the table column headers
  for(var i = input.minCol[0] + 1; i <= input.maxCol[0]; i++) {
    var newTh = document.createElement("th");
    var textNode = document.createTextNode(i);
    newTh.appendChild(textNode);
    trCollection[0].appendChild(newTh);
  }
  
// Loop to generate table rows and cells
  for(var j = input.minRow[0]; j <= input.maxRow[0]; j++) {
    // Create a new <tr> element and append it to the <tbody>
    var newTr = document.createElement("tr");
    tHeadtBodyPair[1].appendChild(newTr);
    // Get the last appended <tr> element (current row)
    var lastTr = tHeadtBodyPair[1].lastElementChild;
    var newTh = document.createElement("th");
    var textNode = document.createTextNode(j);
    newTh.appendChild(textNode);
    lastTr.appendChild(newTh);

    // Loop to generate cells for each row
    for(var x = input.minCol[0]; x <= input.maxCol[0]; x++) {
      var newTd = document.createElement("td");
      var textNode = document.createTextNode(x * j);
      newTd.appendChild(textNode);
      lastTr.appendChild(newTd);
    }
  }  

  $("div#maintab").html(newTable);
  $("a#maina").html("C[" + input.minCol[0] + ", " + input.maxCol[0] + "] R[" + input.minRow[0] + ", " + input.maxRow[0] + "]");
  return newTable;
}

 //jQuery
$(document).ready(function(){
  $("#form").validate({
    rules: {
      minc: {
        required: true,        
        nowhitespace: true,
        number: true,
        range: [-50,50],
        onlyIntegers: true
      },
      maxc: {
        required: true,        
        nowhitespace: true,
        number: true,
        range: [-50,50],
        maxcIsLargest: true,
        onlyIntegers: true
      },
      minr: {
        required: true,        
        nowhitespace: true,
        number: true,
        range: [-50,50],
        onlyIntegers: true
      },
      maxr: {
        required: true,        
        nowhitespace: true,
        number: true,
        range: [-50,50],
        maxrIsLargest: true,
        onlyIntegers: true
      }
    },
    submitHandler: function(){
      var input = getInputValues(); 
      generateTable(input);
    }
  });

  // Minimum column slider
  var minCSlider = {
    min: -51,
    max: 51,
    value: 0,
    animate: "slow",
    slide: function() {
      // When the slider is moved, switch to the first tab
      $("#coltable").tabs("option", "active", 0);
      var input = getInputValues();
      input.minCol[0] = $("#minCSlider").slider("value");
      $("#minc").val(input.minCol[0]);
      minCClicked = true;
      submitForm(input);
    }
  };

  // Maximum column slider
  var maxCSlider = {
    min: -51,
    max: 51,
    value: 0,
    slide: function() {
      $("#coltable").tabs("option", "active", 0);
      var input = getInputValues();
      input.maxCol[0] = $("#maxCSlider").slider("value");
      $("#maxc").val(input.maxCol[0]);
      maxCClicked = true;
      submitForm(input);   
    }
  }

  // Minimum row slider
  var minRSlider = {
    min: -51,
    max: 51,
    value: 0,
    slide: function() {
      $("#coltable").tabs("option", "active", 0);
      var input = getInputValues();
      input.minRow[0] = $("#minRSlider").slider("value");
      $("#minr").val(input.minRow[0]);
      minRClicked = true;
      submitForm(input);   
    }
  }

  // Maximum row slider
  var maxRSlider = {
    min: -51,
    max: 51,
    value: 0,
    slide: function() {
      $("#coltable").tabs("option", "active", 0);
      var input = getInputValues();
      input.maxRow[0] = $("#maxRSlider").slider("value");
      $("#maxr").val(input.maxRow[0]);
      maxRClicked = true;
      submitForm(input);   
    }
  }

// Minimum column slider
  $("#minc").keyup(function(){
    // When a key is released in the input box, switch to the first tab
    $("#coltable").tabs("option", "active", 0);
    var input = getInputValues();    
    $("#minCSlider").slider("option", "value", input.minCol[0]);    
    if(isNaN(input.minCol[0])){
      $("#minCSlider").slider("option", "value", 0);
    }    
    minCClicked = true;
    submitForm(input);
  });

// Maximum column slider
  $("#maxc").keyup(function(){
    $("#coltable").tabs("option", "active", 0);
    var input = getInputValues();
    $("#maxCSlider").slider("option", "value", input.maxCol[0]);
    if(isNaN(input.maxCol[0])){
      $("#maxCSlider").slider("option", "value", 0);
    }
    maxCClicked = true;
    submitForm(input);
  });

// Minimum row slider
  $("#minr").keyup(function(){
    $("#coltable").tabs("option", "active", 0);
    var input = getInputValues();
    $("#minRSlider").slider("option", "value", input.minRow[0]);
    if(isNaN(input.minRow[0])){
      $("#minRSlider").slider("option", "value", 0);
    }
    minRClicked = true;
    submitForm(input);
  });

// Maximum row slider
  $("#maxr").keyup(function(){
    $("#coltable").tabs("option", "active", 0);
    var input = getInputValues();
    $("#maxRSlider").slider("option", "value", input.maxRow[0]);
    if(isNaN(input.maxRow[0])){
      $("#maxRSlider").slider("option", "value", 0);
    }
    maxRClicked = true;
    submitForm(input);
  });

  // Initialize sliders with their respective configurations
  $("#minCSlider").slider(minCSlider); 
  $("#maxCSlider").slider(maxCSlider);
  $("#minRSlider").slider(minRSlider);
  $("#maxRSlider").slider(maxRSlider);

  $.validator.addMethod("maxcIsLargest", function(value){
    var input = getInputValues();
    return input.minCol[0] <= value;
  }, "ERROR: The maximum column value must be greater than or equal to minimum column. Please make sure the maximum is always greater than or equal to minumum.");

  // ensure that the maximum column is larger than or equal to the minimum column
  $.validator.addMethod("maxrIsLargest", function(value){
    var input = getInputValues();
    return input.minRow[0] <= value;
  }, "ERROR: The maximum row must be greater than or qual to  minimum row. Please make sure the maximum is always greater than or equal to minumum.");
  
  // ensure that only integers are entered as a value
  $.validator.addMethod("onlyIntegers", function(value){
    return !(value.includes('.'));
  }, "INVALID ENTRY: No number was entered. Please enter a number between -50 and 50.");

  // Delete button functionality
  $("#btn-delete").tabs().on("click", function(){
    var tabsChildren = $("#coltable").contents().filter("div");    
    var n = parseInt($(tabsChildren[tabsChildren.length -1]).attr("id").substring(4));
    for(let i = 1; i < n + 1; i++){
      if( ($("#check" + parseInt(i)).is(":checked")) ){        
        $("#tab-" + i).remove();       
        $("#li" + i).remove();         
        $("#coltable").tabs("refresh");
        $("#coltable").tabs("option", "active", 0);
      }
    }
    $("#coltable").tabs("refresh");
  });

  // Submit button functionality
  $("#submit").on("click", function(){
    if($("#form").valid()){
      var input = getInputValues();      
      let savedTable = generateTable(input);
      savedTable = savedTable.cloneNode(true);
      savedTable.id = "t" + tNum;
      tNum++;
      var tabNum = "#tab-" + tabIterator;
      var tabNum1 = "tab-" + tabIterator;
      var checkID = "check" + parseInt(checkIterator);
      var liID = "li" + parseInt(checkIterator);
      var newLi = $("<li id='" + liID + "'><a href=" + "'" + tabNum + "'" + ">C[" + input.minCol[0] + ", " + input.maxCol[0] + "] R[" + input.minRow[0] + ", " + input.maxRow[0] + "]</a><input type='checkbox' id='" + checkID + "'></input></li>");
      $(newLi).appendTo("ul");
      var newDiv = $("<div id=" + "'" + tabNum1 + "'" + "></div>");
      $(newDiv).appendTo("div#coltable");
      $(newDiv).html(savedTable);
      $("#coltable").tabs("refresh");
      $("#coltable").tabs("option", "active", parseInt(tabIterator) - 1);
      if(parseInt($("#coltable").contents().filter("div").length) === 1){
        $("#coltable").tabs("option", "active", 0);
      }
      tabIterator++;
      checkIterator++;
    }
  });
 
   // Function to clear the multiplication table and set "Current Tab" as active
   function clearTable() {
    $('#maina').click();
  }

  $('#clear-btn').click(function() {
    // Reset form validation
    $("#form").validate().resetForm();

    // Clear input fields
    $('#minc').val('');
    $('#maxc').val('');
    $('#minr').val('');
    $('#maxr').val('');

    // Reset slider values
    $("#minCSlider").slider("value", 0);
    $("#maxCSlider").slider("value", 0);
    $("#minRSlider").slider("value", 0);
    $("#maxRSlider").slider("value", 0);

    clearTable();
    return false;
  });
});
