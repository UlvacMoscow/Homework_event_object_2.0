var links = document.getElementsByTagName('a'); // формируем список тегов <a> наши скейты
var image = document.getElementsByClassName('gallery-view')[0]; // наша главная картинка большой скейт

//потом вешаем событие на каждый клик по маленькой картинки

Array.from(links).forEach(item => {
    item.addEventListner('click', show)
});

function show() {
    // вот здесь необъяснимая магия, при нажатий на маленький скейт у меня он должен стать большим,
    //да еще должно подсвечиваться надпись как на gif анимации
}
