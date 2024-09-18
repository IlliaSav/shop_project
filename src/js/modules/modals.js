const modals = () => {

    function openModal (modalSelector) {
        const modal = document.querySelector(modalSelector);
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closeModal (modalSelector, windows) {
        const modal = document.querySelector(modalSelector);
        windows.forEach(item => {item.style.display = 'none'});
        modal.style.display = "none";
        document.body.style.overflow = "";
    };

    function bindModal (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-model]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {item.style.display = 'none'});

                openModal(modalSelector)
            });
        });

        close.addEventListener('click', () => {
            closeModal(modalSelector, windows);
        });

        document.addEventListener('keydown', (e) =>{
            if (e.code === 'Escape' && modal.style.display == "block") {
                closeModal(modalSelector, windows);
            }
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOverlay) {
                closeModal(modalSelector, windows);
            }
        })
    }

    function showModelByTime(selector, time) {
        setTimeout(function() { 
            openModal(selector)
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '[data-model]', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModelByTime('.popup', 60000)

};

export default modals;