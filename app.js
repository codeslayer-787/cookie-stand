var sectionElement = document.getElementById('container');
var table =document.createElement('table');
var tableHead = document.createElement('thead');
var tableBody =document.createElement('tbody');
sectionElement.appendChild(table);
table.appendChild(tableHead);


var hours = ['','6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:','8pm:', 'Daily Location Total:'];
var factor = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];

for (var i=0;i <= hours.length; i++){

  var headElement = document.createElement('th');
  headElement.textContent = hours[i];
  tableHead.appendChild(headElement);
}
table.appendChild(headElement);


function Location(city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.day = [];
  this.hours = hours;


}
// function generateAvgCust(min, max){
//   return Math.floor(Math.random() * (newFactor - this.min) + 1) + this.min;
// }


Location.prototype.averageCookies = function() {
  var sum = 0;
  // van newMax = [];
  for (var i=0;i<this.hours.length -2; i++) {
    var newFactor = factor[i] * this.max;
    console.log(newFactor);
    var avgCookiesHour = Math.floor(Math.random() * ((newFactor - this.min) + 1) + this.min);
    var totalCookies = Math.floor(avgCookiesHour * this.avg);
    sum += totalCookies;

    this.day.push(totalCookies);
    // console.log(totalCookies);
  }
  this.day.push(sum);
  console.log('whatever', this.day);
  return this.day;
};


Location.prototype.newRow = function() {
  var rowElement = document.createElement('tr');
  var cityName = document.createElement('td');
  table.appendChild(tableBody);
  tableBody.appendChild(rowElement);
  rowElement.appendChild(cityName);
  cityName.textContent = this.city; 
  for (var i=0;i <= this.day.length - 1; i++){
  // var total = 'Total';
    var cell = document.createElement('td');
    rowElement.appendChild(cell);
    cell.textContent = this.day[i];

  }
};

function hourlyTotals(){
  var rowElement = document.createElement('tr');
  var totalCell = document.createElement('td');
  table.appendChild(tableBody);
  tableBody.appendChild(rowElement);
  rowElement.appendChild(totalCell);
  totalCell.textContent = 'Hourly Total';
  var hourlyTotal = seattle.day[0] + tokyo.day[0] + dubai.day[0] + paris.day[0] + paris.day[0] +lima.day[0];
  // var total = 0;
  console.log(`${hourlyTotal} Hourly Total`);

  for (var i=0; i <hours.length -1; i++){
    var sumTotal = seattle.day[i] + tokyo.day[i] + dubai.day[i] + paris.day[i] +lima.day[i];

    var cityName = document.createElement('td');
    rowElement.appendChild(cityName);
    cityName.textContent = sumTotal;
    console.log(sumTotal);
  }

}

var seattle = new Location('Seattle', 23, 65, 6.3);
seattle.averageCookies();
seattle.newRow();
var tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.averageCookies();
tokyo.newRow();
var dubai = new Location('Dubai', 11 ,38, 3.7);
dubai.averageCookies();
dubai.newRow();
var paris = new Location('Paris', 20, 38, 2.3);
paris.averageCookies();
paris.newRow();
var lima = new Location('Lima', 2, 16, 4.6);
lima.averageCookies();
lima.newRow();


hourlyTotals();

// console.log(location);

// var boxElement = document.getElementById('submit');

// var inputElement = document.getElementById('input-one');

// var submitOrder = [];

// var formElement = document.getElementById('location-form');


//var orderTotal = document.getElementById('total');
// inputElement.addEventListener('submit', function (event) {
//   console.log('VALUE', event.target.value); // the thing we really want => the value of the input field
// });

var formElement = document.getElementById('form');
formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  var cityName = formElement.elements[0];
  var minValue = formElement.elements[1];
  var maxValue = formElement.elements[2];
  var avgValue = formElement.elements[3];

  console.log(cityName.value, minValue.value, maxValue.value, avgValue.value);
  // console.log(event.target.min.value);
  // console.log(event.target.max.value);
});

var formSubmit = document.getElementById('newStand');
formSubmit.addEventListener('submit', function (event) {
  event.preventDefault();
  var name = event.target.loc.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCk = parseInt(event.target.avgCk.value);
  new Location(name, minCust, maxCust, avgCk);
  footerMaker();
});
// function location(name, breed, personality) {

//   this.name = name;
//   this.min = min;
//   this.max = max;
//   this.avg=avg;

// }

