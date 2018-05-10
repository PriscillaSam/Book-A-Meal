const delBtn = document.querySelectorAll('.delete');
            const modal = document.getElementById('confirm');
            const closeModal = document.getElementById('closeModal');
            const confirmBtn = document.getElementById('confirmBtn');
            const cancel = document.getElementById('cancelBtn');
            const confirmModal = document.getElementById('confirm');
            const close  = document.getElementById('close');
            const notif = document.getElementById('help');

            delBtn.forEach(btn => {
                
            btn.addEventListener('click', (e) =>  {
                e.preventDefault();
                    modal.style.display = 'block';

                    });
            });
            close.addEventListener('click', () => {
                notif.style.display = 'none';
            });
            
            confirmBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                notif.style.display = 'block';

            });
            cancel.addEventListener('click', () => {
                modal.style.display = 'none';

            });
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';

            });
      

        