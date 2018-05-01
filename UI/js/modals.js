const modal = document.getElementById('order-modal');
const orderBtn = document.querySelector('.order-btn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];


orderBtn.addEventListener('click', () =>  {

    modal.classList.remove('hidden');
    //modal.style.display = 'block';
    
});

closeBtn.onclick = () => {
    modal.style.display = 'none';
}

window.addEventListener('click', (e) => {

    if(e.target !== modal) {
        modal.style.display = 'none';
    }
});

function deleteBtn(item) {
    item.addEventListener('click', () => {

        if(confirm('Are you sure you want to remove this meal option')) {
            alert('This meal has been deleted');
        }
    

    });
}

