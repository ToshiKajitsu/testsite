document.querySelector('.loadBtn').addEventListener('click', () => {
    let divHidden = document.querySelectorAll('.divHidden');
    for (i = 0; i < divHidden.length; i++) {
        divHidden[0].classList.remove('divHidden');
        divHidden[1].classList.remove('divHidden');
        if (divHidden.length == 2) {
            document.querySelector('.loadBtn').classList.add('btnHidden');
        }
        console.log(divHidden.length);
    }
})

document.querySelector('#search').addEventListener('click', () => {
    document.querySelector('#search').classList.add('searchOnClick');
    document.querySelector('.closeInput').classList.add('closeInputDone');
    document.querySelector('.main').classList.add('containerOpacity');
    document.querySelector('.news').classList.add('containerOpacity');
    document.querySelector('.aside').classList.add('containerOpacity');
    document.querySelector('.header').classList.add('opacityHeader');
    document.querySelector('.footer').classList.add('containerOpacity');
});

document.querySelector('.closeInput').onclick = () => {
    document.querySelector('#search').classList.remove('searchOnClick');
    document.querySelector('.closeInput').classList.remove('closeInputDone');
    document.querySelector('.main').classList.remove('containerOpacity');
    document.querySelector('.news').classList.remove('containerOpacity');
    document.querySelector('.aside').classList.remove('containerOpacity');
    document.querySelector('.header').classList.remove('opacityHeader');
    document.querySelector('.footer').classList.remove('containerOpacity');
}