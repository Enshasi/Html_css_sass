let bulets = document.querySelectorAll('.bulets li');
let Images = document.querySelectorAll('.slider img');

bulets.forEach((e) => {
    e.addEventListener('click', (el) => {

        bulets.forEach((e) => {
            e.classList.remove('active')
        })
        el.target.classList.add('active');

    });
})