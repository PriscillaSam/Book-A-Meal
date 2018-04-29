const dateHolder = document.querySelector('#js-date'); 
const today = new Date();

//Function to format date
const formatDate = (date) => {

    const months = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    
    var days = [
        "Sunday","Monday", "Tuesday","Wednesday",
         "Thursday", "Friday","Saturday",          
    ];

    const dayIndex = date.getDay();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    return days[dayIndex] + ' ' + months[monthIndex] + ', ' + year;
  };

dateHolder.innerHTML = formatDate(today);

