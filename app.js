
'use strict';

const hourOps = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];



var seattle = {
  name: 'Seattle',
  MinCust: 23,
  MaxCust: 65,
  AvgCookie: 6.3,
  cookieSales: [], 
  

  simulate: function () {
    for (let i = 0; i<hourOps.length; i++){
      var simulateSale = Math.floor((Math.random() *(this.MaxCust - this.MinCust) + this.MinCust));
      this.cookieSales.push(simulateSale);
      //console.log(simulateSale);

    //function getRandomArbitrary(min, max) {  return Math.random() * (max - min) + min;
    }
  },
  render: function(){
    var ulElement = document.createElement('ul');
    for (let i = 0; i<hourOps.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hourOps[i] + " " + this.cookieSales[i] + ' cookies';
      ulElement.appendChild(liElement);
    }
    var sectionElement = document.getElementById('sales');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    sectionElement.appendChild(h2Element);
    sectionElement.appendChild(ulElement);
  }

};
seattle.simulate();
seattle.render();


//var divElement = document.createElement('div');

var tokyo = {
  name: 'Tokyo',
  MinCust: 3,
  MaxCust: 24,
  AvgCookie: 1.2,
  cookieSales: [], 
  

  simulate: function () {
    for (let i = 0; i<hourOps.length; i++){
      var simulateSale = Math.floor((Math.random() *(this.MaxCust - this.MinCust) + this.MinCust));
      this.cookieSales.push(simulateSale);
      //console.log(simulateSale);

    //function getRandomArbitrary(min, max) {  return Math.random() * (max - min) + min;
    }
  },
  render: function(){
    var ulElement = document.createElement('ul');
    for (let i = 0; i<hourOps.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hourOps[i] + " " + this.cookieSales[i] + ' cookies';
      ulElement.appendChild(liElement);
    }
    var sectionElement = document.getElementById('sales');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    sectionElement.appendChild(h2Element);
    sectionElement.appendChild(ulElement);
  }

};

tokyo.simulate();
tokyo.render();

var dubai = {
  name: 'Dubai',
  MinCust: 11,
  MaxCust: 38,
  AvgCookie: 3.7,
  cookieSales: [], 
  

  simulate: function () {
    for (let i = 0; i<hourOps.length; i++){
      var simulateSale = Math.floor((Math.random() *(this.MaxCust - this.MinCust) + this.MinCust));
      this.cookieSales.push(simulateSale);
      //console.log(simulateSale);

    //function getRandomArbitrary(min, max) {  return Math.random() * (max - min) + min;
    }
  },
  render: function(){
    var ulElement = document.createElement('ul');
    for (let i = 0; i<hourOps.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hourOps[i] + " " + this.cookieSales[i] + ' cookies';
      ulElement.appendChild(liElement);
    }
    var sectionElement = document.getElementById('sales');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    sectionElement.appendChild(h2Element);
    sectionElement.appendChild(ulElement);
  }

};

dubai.simulate();
dubai.render();

var paris = {
  name: 'Paris',
  MinCust: 20,
  MaxCust: 38,
  AvgCookie: 2.3,
  cookieSales: [], 
  

  simulate: function () {
    for (let i = 0; i<hourOps.length; i++){
      var simulateSale = Math.floor((Math.random() *(this.MaxCust - this.MinCust) + this.MinCust));
      this.cookieSales.push(simulateSale);
      //console.log(simulateSale);

    //function getRandomArbitrary(min, max) {  return Math.random() * (max - min) + min;
    }
  },
  render: function(){
    var ulElement = document.createElement('ul');
    for (let i = 0; i<hourOps.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hourOps[i] + " " + this.cookieSales[i] + ' cookies';
      ulElement.appendChild(liElement);
    }
    var sectionElement = document.getElementById('sales');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    sectionElement.appendChild(h2Element);
    sectionElement.appendChild(ulElement);
  }

};

paris.simulate();
paris.render();

var lima = {
  name: 'Lima',
  MinCust: 2,
  MaxCust: 16,
  AvgCookie: 4.6,
  cookieSales: [], 
  

  simulate: function () {
    for (let i = 0; i<hourOps.length; i++){
      var simulateSale = Math.floor((Math.random() *(this.MaxCust - this.MinCust) + this.MinCust));
      this.cookieSales.push(simulateSale);
      //console.log(simulateSale);

    //function getRandomArbitrary(min, max) {  return Math.random() * (max - min) + min;
    }
  },
  render: function(){
    var ulElement = document.createElement('ul');
    for (let i = 0; i<hourOps.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hourOps[i] + " " + this.cookieSales[i] + ' cookies';
      ulElement.appendChild(liElement);
    }
    var sectionElement = document.getElementById('sales');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    sectionElement.appendChild(h2Element);
    sectionElement.appendChild(ulElement);
  }

};

lima.simulate();
lima.render();

//var sectionElement = document.getElementById('sales');
//sectionElement.appendChild(divElement);

//  How to make html table
// function createTable(tableData) {
//   var table = document.createElement('table');
//   var tableBody = document.createElement('tbody');

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

// createTable([["Time, Cookies"],[hourOps[0], simulateSale[0]], [hourOps[1], simulateSale[1], "row 2, cell 2"]]);







