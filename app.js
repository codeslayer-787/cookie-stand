
'use strict';

const hourOps = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function Sales(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookieSales = [];

}
Sales.prototype.renderHeader = function (){
  var tableHeader = document.getElementById('fixed-header');
  var headerRow = document.createElement('tr');
  var headerDataCell = document.createElement('td');
  headerDataCell.textContent = 'Location';
  headerRow.appendChild(headerDataCell);

  for (let i = 0; i <hourOps.length; i++){
    var tdElement = document.createElement('td');
    tdElement.textContent = hourOps[i];
    headerRow.appendChild(tdElement);

  }
  tableHeader.appendChild(headerRow);
};
Sales.prototype.renderHeader();

Sales.prototype.display = function ( ){

  var tableBody = document.getElementById('tbody');

  var hoursRow = document.createElement('thead');
  hoursRow.textContent = hourOps;

  var locationRow = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  locationRow.appendChild(nameCell);

  for (let i=0; i<this.cookieSales.length; i++){
    var cookieCell = document.createElement('td');
    cookieCell.textContent = this.cookieSales[i];
    locationRow.appendChild(cookieCell);

  }
  //For the footer, make a "text" comment.
  //Use a for loop for the footer "totals"  **Try a Nested For Loop.**
  // var maxCell = document.createElement('td');
  // var totalCell = document.createElement('td');

  //Keep working at this

  function createFooter(){
    var totalOfTotals = 0;
    var hourlyTotal = 0;
    for (var i = 0; i <hourOps.length; i++){
      hourlyTotal=0;
      for (var j = 0; j < hourOps[i].length; j++){
        hourlyTotal += Sales[j].cookieSales[i];
      }
    }
    return hourlyTotal;
  }
  createFooter();
  console.log(createFooter);

  tableBody.appendChild(locationRow);

};
Sales.prototype.generateCookiesPerHr = function (){
  var simulateSale = Math.floor((Math.random() *(this.maxCust - this.minCust + this.minCust) + 1));
  var cookiesThisHr = simulateSale * this.avgCookie;
  return cookiesThisHr;

};
Sales.prototype.createHourlySales = function(){
  for (let i=0; i <hourOps.length; i++){
    var cookiesThisHr = Math.floor(this.generateCookiesPerHr());
    this.cookieSales.push(cookiesThisHr);
  }
};


var Seattle = new Sales ('Seattle',23, 65, 6.3);
var Tokyo = new Sales('Tokyo',3, 24, 1.2);
var Dubai = new Sales('Dubai', 11, 38, 3.7);
var Paris = new Sales('Paris', 20, 30, 2.3);
var Lima = new Sales('Lima', 2, 16, 4.6);
Seattle.createHourlySales();
Tokyo.createHourlySales();
Dubai.createHourlySales();
Paris.createHourlySales();
Lima.createHourlySales();


//hoursRow.display();
Seattle.display();
Tokyo.display();
Dubai.display();
Paris.display();
Lima.display();



// function simulateSales() {
//   for (let i = 0; i<hourOps.length; i++){
//     var simulateSale = Math.floor((Math.random() *(this.MaxCust - this.MinCust) + this.MinCust));
//     this.cookieSales.push(simulateSale);
//   }
// }
// var randomCookies = simulateSale * this.AvgCookie;
// console.log(randomCookies);
// return randomCookies;

//function getRandomArbitrary(min, max) {  return Math.random() * (max - min) + min;
// function cookiesSold(){
//   var rowData = document.createElement('tr');
//   for (let i = 0; i<hourOps.length; i++){
//     var cellData = document.createElement('td');
//     cellData.textContent = hourOps[i] + this.cookieSales[i];
//     rowData.appendChild(cellData);
//}
//   var sectionElement = document.getElementById('Sales');
//   //var h2Element = document.createElement('h2');
//   h2Element.textContent = this.name;
//   sectionElement.appendChild(h2Element);
//   sectionElement.appendChild(ulElement);
// }

// Seattle.simulateSales();
// Seattle.cookiesSold();


// var divElement = document.createElement('div');

// var tokyo = {
//   name: 'Tokyo',
//   MinCust: 3,
//   MaxCust: 24,
//   AvgCookie: 1.2,
//   cookieSales: [],

//   simulate: function () {
//     for (let i = 0; i<hourOps.length; i++){
//       var simulateSale = Math.floor((Math.random() *(this.MaxCust - this.MinCust) + this.MinCust));
//       this.cookieSales.push(simulateSale);
//       //console.log(simulateSale);

//     //function getRandomArbitrary(min, max) {  return Math.random() * (max - min) + min;
//     }
//   },
//   render: function(){
//     var rowData = document.createElement('tr');
//     for (let i = 0; i<hourOps.length; i++){
//       var cellData = document.createElement('td');
//       cellData.textContent = hourOps[i] + " " + this.cookieSales[i] + ' cookies';
//       rowData.appendChild(cellData);
//     }
//     var sectionElement = document.getElementById('sales');
//     var h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     sectionElement.appendChild(h2Element);
//     sectionElement.appendChild(ulElement);
//   }

// };

// tokyo.simulate();
// tokyo.render();

// var dubai = {
//   name: 'Dubai',
//   MinCust: 11,
//   MaxCust: 38,
//   AvgCookie: 3.7,
//   cookieSales: [],


//   simulate: function () {
//     for (let i = 0; i<hourOps.length; i++){
//       var simulateSale = Math.floor((Math.random() *(this.MaxCust - this.MinCust) + this.MinCust));
//       this.cookieSales.push(simulateSale);
//       //console.log(simulateSale);

//     //function getRandomArbitrary(min, max) {  return Math.random() * (max - min) + min;
//     }
//   },
//   render: function(){
//     var ulElement = document.createElement('ul');
//     for (let i = 0; i<hourOps.length; i++){
//       var liElement = document.createElement('li');
//       liElement.textContent = hourOps[i] + " " + this.cookieSales[i] + ' cookies';
//       ulElement.appendChild(liElement);
//     }
//     var sectionElement = document.getElementById('sales');
//     var h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     sectionElement.appendChild(h2Element);
//     sectionElement.appendChild(ulElement);
//   }

// };

// dubai.simulate();
// dubai.render();

// var paris = {
//   name: 'Paris',
//   MinCust: 20,
//   MaxCust: 38,
//   AvgCookie: 2.3,
//   cookieSales: [],

//   simulate: function () {
//     for (let i = 0; i<hourOps.length; i++){
//       var simulateSale = Math.floor((Math.random() *(this.MaxCust - this.MinCust) + this.MinCust));
//       this.cookieSales.push(simulateSale);
//       //console.log(simulateSale);

//     //function getRandomArbitrary(min, max) {  return Math.random() * (max - min) + min;
//     }
//   },
//   render: function(){
//     var ulElement = document.createElement('ul');
//     for (let i = 0; i<hourOps.length; i++){
//       var liElement = document.createElement('li');
//       liElement.textContent = hourOps[i] + " " + this.cookieSales[i] + ' cookies';
//       ulElement.appendChild(liElement);
//     }
//     var sectionElement = document.getElementById('sales');
//     var h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     sectionElement.appendChild(h2Element);
//     sectionElement.appendChild(ulElement);
//   }

// };

// paris.simulate();
// paris.render();

// var lima = {
//   name: 'Lima',
//   MinCust: 2,
//   MaxCust: 16,
//   AvgCookie: 4.6,
//   cookieSales: [],

//   simulate: function () {
//     for (let i = 0; i<hourOps.length; i++){
//       var simulateSale = Math.floor((Math.random() *(this.MaxCust - this.MinCust) + this.MinCust));
//       this.cookieSales.push(simulateSale);
//       //console.log(simulateSale);

//     //function getRandomArbitrary(min, max) {  return Math.random() * (max - min) + min;
//     }
//   },
//   render: function(){
//     var ulElement = document.createElement('ul');
//     for (let i = 0; i<hourOps.length; i++){
//       var liElement = document.createElement('li');
//       liElement.textContent = hourOps[i] + " " + this.cookieSales[i] + ' cookies';
//       ulElement.appendChild(liElement);
//     }
//     var sectionElement = document.getElementById('sales');
//     var h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     sectionElement.appendChild(h2Element);
//     sectionElement.appendChild(ulElement);
//   }

// };

// lima.simulate();
// lima.render();

// var sectionElement = document.getElementById('sales');
// sectionElement.appendChild(divElement);

//How to make html table
// function createTable(tableData) {
//   var table = document.createElement('table');
//   var tableBody = document.createElement('tbody');
//   table.innerHTML = '';

//   tableData.forEach(function(rowData) {
//     var row = document.createElement('tr');

//     rowData.forEach(function(cellData) {
//       var cell = document.createElement('td');
//       cell.appendChild(document.createTextNode(cellData));
//       row.appendChild(cell);
//     });

//     tableBody.appendChild(row);
//   });

//   table.appendChild(tableBody);
//   document.body.appendChild(table);
// }
