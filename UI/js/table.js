const tblTitle = document.getElementById('tbl-title');

const changeTablelTitle = (event) => {
    if(event.target.value) {   
        
        tblTitle.textContent = 'Order for ' + event.target.value;
    }

};

document.querySelector('select[name = "MealType"]').onchange = changeTablelTitle;
