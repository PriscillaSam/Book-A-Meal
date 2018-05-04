const modal = document.getElementById('order-modal');
const orderBtn = document.querySelector('.order-btn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const confirmBtn = document.getElementById('confirmBtn');
const confirmModal = document.getElementById('confirm');
const close  = document.getElementById('close');

orderBtn.addEventListener('click', (e) =>  {

    e.preventDefault();
    modal.style.display = 'block';
    
});

closeBtn.onclick = (e) => {
    
     modal.style.display = 'none';
};

close.addEventListener('click', () => {
    confirmModal.style.display = 'none';
});

confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
    confirmModal.style.display = 'block';
});

function deleteBtn(item) {
    item.addEventListener('click', () => {

        if(confirm('Are you sure you want to remove this meal option')) {
            alert('This meal has been deleted');
        }   

    });
};

