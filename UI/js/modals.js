const modal = document.getElementById('order-modal');
const delBtn = document.querySelectorAll('.delete');
const orderBtns = document.querySelectorAll('.js-order-btn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];



orderBtns.forEach((btn) => {

    btn.addEventListener('click', (e) =>  {

        modal.style.display = 'block';
        
    });
});

closeBtn.onclick = () => {
    modal.style.display = 'none';
}

window.addEventListener('click', (e) => {

    if(e.target !== modal) {
        modal.style.display = 'none';
    }
});

delBtn.forEach((item) => {

    item.addEventListener('click', () => {

      if(confirm('Are you sure you want to remove this meal option')) {

        deleteTableRow();
      }
      
  });  
});