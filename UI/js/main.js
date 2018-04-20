// var btn = document.getElementById('#js-btn');

// btn.addEventListener('mouseover', function () {

//      btn.classList.add('btn');
//  });

//Display date
const delBtn = document.querySelectorAll('.delete');
const dateHolder = document.querySelector('#js-date'); 


const deleteTableRow = () => {

    
};

delBtn.forEach((item) => {

    item.addEventListener('click', () => {

      if(confirm('Are you sure you want to remove this meal option')) {

        deleteTableRow();
      }
      
  });

  
});


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

const today = new Date();
dateHolder.innerHTML = formatDate(today);

