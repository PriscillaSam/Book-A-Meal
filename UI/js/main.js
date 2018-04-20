// var btn = document.getElementById('#js-btn');

// btn.addEventListener('mouseover', function () {

//      btn.classList.add('btn');
//  });

//Display date
var dateHolder = document.querySelector('#js-date'); 

//Function to format date
const formatDate = (date) => {

    var months = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    
    var days = [
        "Sunday","Monday", "Tuesday","Wednesday",
         "Thursday", "Friday","Saturday",          
    ];

    var dayIndex = date.getDay();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return days[dayIndex] + ' ' + months[monthIndex] + ', ' + year;
  };

var today = new Date();
dateHolder.innerHTML = formatDate(today);