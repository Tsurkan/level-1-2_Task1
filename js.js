"use strict";

function showOrHide2(buttonInfo) {
    const box = document.getElementById('item2');

    if (box.getAttribute('class') != 'hidden') {
        box.setAttribute('class', 'hidden');
        buttonInfo.innerHTML = 'Показать';
    }
    else {
        box.removeAttribute('class');
        buttonInfo.innerHTML = 'Удалить';
    }

    //Этот способ, мне кажется более правильный потому, что не затираю классы, если они есть у элементв
    // if (box.style.display == 'none') {
    //     box.style.display = 'block';
    //     buttonInfo.innerHTML = 'Удалить';
    // }
    // else {
    //     box.style.display = 'none';
    //     buttonInfo.innerHTML = 'Показать';
    // }
}

////////////////////////////////////////////////////////////////////
function showOrHide3(buttonInfo) {
    const boxes = document.querySelectorAll('.item3');
    if (boxes[0].style.display == 'none') {
        boxes.forEach(div => div.style.display = 'inline-block');
        buttonInfo.innerHTML = 'Удалить';
    }
    else {
        boxes.forEach(div => div.style.display = 'none');
        buttonInfo.innerHTML = 'Показать';
    }
}

/////////////////////////////////////////////////////////////////////
function showOrHide4(buttonInfo) {
    const inputText = document.getElementById('item4').value;
    const allElements = document.querySelectorAll(inputText);
    if (allElements.length !== 0) {
        allElements.forEach(item => item.classList.toggle('hidden'));

        if (allElements[0].classList.contains("hidden")) {
            buttonInfo.textContent = "Показать";
        } else {
            buttonInfo.textContent = "Удалить";
        }
    } else {
        alert("Нет єлемента с таким селектором на странице!");
    }
}

////////////////////////////////////////////////////////////////////
item5.addEventListener("click", hiAlert);
function hiAlert() {
    alert("Привет");
    item5.removeEventListener("click", hiAlert);
    item5.addEventListener("click", hide5);
}
function hide5() {
    document.querySelector('.item5').classList.toggle('hidden');
}

////////////////////////////////////////////////////////////////////
item6.addEventListener('mouseover', showOrHide6)
item6.addEventListener('mouseout', showOrHide6)
function showOrHide6() {
    document.querySelector('.item6').classList.toggle('hidden');
}

///////////////////////////////////////////////////////////////////
//  Правильно?
item7.addEventListener('focus', () => {
    document.querySelector('.item7').classList.toggle('hidden');
})
item7.addEventListener('keydown', () => {
    document.querySelector('.item7').classList.add('hidden');
})

//////////////////////////////////////////////////////////////////
item8.addEventListener('click', () => {
    let text = document.querySelector('.item8').value;
    if (text.length != 0) {
        let img = document.createElement('img');
        img.src = text;
        img.alt = 'картинка';
        img.width = '200'
        item8.after(img);
        document.querySelector('.item8').value = ''; 
    }
})

///////////////////////////////////////////////////////////////////
item9.addEventListener('click', () => {
    let text = document.querySelector('.item9').value.split("\n");
    if(text[0].length != 0) {
        text.forEach(src => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = 'картинка';
            img.width = '200'
            item9.after(img);
        })
        
    }
    document.querySelector('.item9').value = ''; 
})

//////////////////////////////////////////////////////////////////
document.addEventListener('mousemove', event => {
    event = event || window.event; // кроссбраузерность
    document.querySelector('.x').innerHTML = event.clientX //offsetX;
    document.querySelector('.y').innerHTML = event.clientY;
})

//////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    let userLang = navigator.language || navigator.userLanguage; 
    document.querySelector('.lang').innerHTML = userLang;

    // navigator.geolocation.getCurrentPosition( position => {
    //     let text = "Ш: " + position.coords.latitude + ", Д: " + position.coords.longitude + ";";
    //     document.querySelector('.coordinattes').innerHTML = text;
    // });
});

//////////////////////////////////////////////////////////////////
let fields = document.querySelectorAll(".item13");
fields[0].addEventListener("keyup", (event) => {
    localStorage.setItem('item1', event.target.innerHTML);
});

fields[1].addEventListener("keyup", (event) => {
    document.cookie = "item3="+encodeURIComponent(event.target.innerHTML)+"; path=/; expires=Tue, 20 Jan 2038 00:00:00 GMT";
    // document.cookie = "f=s" // можна и просто так сохранять
});

fields[2].addEventListener("keyup", (event) => {
    console.log(event.target.innerHTML)
    sessionStorage.setItem('item3', event.target.innerHTML);
});

window.addEventListener("load", () => {
    let item1 = localStorage.getItem('item1');
    if (item1) {
        fields[0].innerHTML = item1;
        // localStorage.removeItem('item1');
    }

    let item3 = sessionStorage.getItem('item3');
    if (item3) {
        fields[2].innerHTML = item3;
        // sessionStorage.removeItem('item1');
    }

    let item2 = document.cookie.match(new RegExp(item3));
    if (item2) {
        fields[2].innerHTML = decodeURIComponent(item2);
    }

})

///////////////////////////////////////////////////////////////
let goTopBtn = document.getElementById('item14');
//отслеживать прокрутку страницы и как только высота экрана стане больше высоты страницы - показываем кнопку
window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    // console.log(scrolled, coords)

    if (scrolled < coords) {
        goTopBtn.classList.add('hidden');
    }
    if (scrolled > coords) {
        goTopBtn.classList.remove('hidden');
    }
});

goTopBtn.addEventListener('click', backToTop);

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -10);
        setTimeout(backToTop, 0);
    }
}

//////////////////////////////////////////////////////////////////
item15.addEventListener('click', () => {
    alert("Черный");
});
item15_2.addEventListener('click', (event) => {
    event.stopPropagation();
    alert("Желтый");
});

//////////////////////////////////////////////////////////////////
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
item16.addEventListener('click', () => {
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    let x=window.scrollX;
    let y=window.scrollY;
    // window.onscroll=function(){window.scrollTo(x, y);};
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
        // window.onscroll=function(){};//Разрешаем скрол
    }
});

//////////////////////////////////////////////////////////////////
item17.addEventListener('click', (event) => {
    event.preventDefault();
})

//////////////////////////////////////////////////////////////////
// * (1 час) Сделать красивый инпут type="file". Сделать чтоб при перетаскивании файла на этот инпут, он красиво менялся 
// (drag-n-drop).  Ну и когда файл уже выбран тоже.

// Доделать отмену скрола в 16