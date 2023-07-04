const form = document.querySelector('.order');
const orderButtonOne = document.querySelector('.request__btn');
const orderButtonTwo = document.querySelector('.orderButtonTwo');
const orderButtonClose = document.querySelector('.orderClose');
const servisButtonOne = document.getElementById('servisOne');
const servisButtonTwo = document.getElementById('servisTwo');
const servisButtonThree = document.getElementById('servisThree');
const servisButtonFour = document.getElementById('servisFour');
const servisButtonFive = document.getElementById('servisFive');
const servisButtonSix = document.getElementById('servisSix');
const modalTextOne = "Обратившись к нам за строительством дома, Вы получаете полный комплекс услуг, от разработки проекта до сдачи объекта в эксплуатацию. Репутация надежного исполнителя - наш самый ценный актив. Вы можете выбрать любой проект дома, бани или коттеджа, воспользовавшись помощью нашего квалифицированного персонала, который учтет финансовые возможности и пожелания клиента. Кроме того, Заказчик может осуществлять оплату поэтапно. На любые строительные работы нами предоставляется гарантия. Профессиональное мастерство, оригинальные проекты, индивидуальный подход - эти и многие другие достоинства предлагает наша строительная компания. Воспользовавшись нашими услугами, Вы сможете сэкономить как время, так и денежные средства. Доверившись знаниям и опыту профессионалов, Вы скоро станете владельцем современного дома, дарящего комфорт и радость Вам и всей вашей семье.";
const modalTextTwo = "Наша компания выполняет отделку, капитальный и косметический ремонт квартир, домов и офисных помещений в Ижевске и Удмуртской Республике. Ремонт в любом бюджете в хрущевках и новостройках. В зависимости от бюджета проекта и стилевых предпочтений заказчика, мы предлагаем клиентам несколько вариантов ремонтных работ. Каждый из видов предполагает различные объемы работ, классы отделочных материалов и определенного уровня специализации. Этапы выполнения ремонта помещения под ключ: 1. Выезд специалиста по адресу, оценка состояния квартиры, производство замеров; 2. Составление сметы; 3. Разработка дизайн-проекта и согласование его с заказчиком; 4. Заключение договора; 5. Демонтаж старых стен, перегородок, окон, дверей и т.д.; 6. Демонтаж сантехники и электропроводки; 7. Монтаж сантехники, электропроводки и т.д.; 8. Возведение новых или ремонт имеющихся стен, потолков, полов; 9. Установка новых окон и дверей; 10. Финишная отделка помещения.";
const modalTextThree = "Помощь в продаже объектов недвижимости на любой стадии (комнаты, квартиры, жилые дома, коттеджи, земельные участки ИЖС и СНТ, дачи, гаражи, коммерческая недвижимость) • Помощь при покупке любых объектов недвижимости на любой стадии • Помощь при покупки с использованием: ипотечного кредита, материнского капитала (в том числе, если ребенку не исполнилось 3-х лет), жилищного сертификата и субсидий.";
const modalTextFour = "Компания ООО «РК» предлагает Вам земельные участки промышленного назначения для развития вашего бизнеса, от 0,5 га до 15 га. Стоимость участка договорная, в зависимости от объема покупаемой площади. Земельный участок находится в 5 минутах езды от Ижевска, на границах дер. Пирогова и ул. Пойма. Участки расположены в северо-восточной части кадастрового квартала, границы проходят по а/д М-7 Волга уч. Елабуга – Ижевск фед. – Совхозный. Рядом с участками действующие предприятия на территории Технопарка. Кадастровый номер ЗУ 18:08:016002:638. Виды использования ЗУ (промышленное производство): автостоянки для грузовых автомобилей (спецтехника, фуры итд), автозаправочные станции, гостиницы, дома приема гостей, парковки перед объектами, инженерные сооружения, торговые комплексы, магазины, склады-магазины оптовой торговли, предприятия и магазины оптовой и мелкооптовой торговли, административные здания, предприятия и производства не выше V класса опасности.";
const modalTextFive = "Вы можете заказать у нас инженерные работы внутри дома. Инженерные работы – это комплекс мероприятий, направленный на обеспечение здания/ сооружения необходимыми инженерными коммуникациями. К таким видам работ относят подключение объекта к следующим инженерным сетям: - Электросети; - Водоснабжение; - Система отопления; - Система канализации; - Вентиляция; - Кондиционирование;  - СКС (Структурированная кабельная система)";
const modalTextSix = "Услуга по выравниванию земельного участка необходима перед строительством дома, чтобы обеспечить ровную поверхность участка. Важным фактором, влияющим на прочность и долговечность фундамента дома, является отсутствие перепадов высоты, поэтому пренебрегать услугами выравнивания участка не стоит.";
const modalHOne = "Строительство домов";
const modalHTwo = "Ремонт";
const modalHThree = "Помощь в продаже";
const modalHFour = "Промышленные земли";
const modalHFive = "Инженерные работы";
const modalHSix = "Спецтехника";
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__servis__close');
const mainHead= document.querySelector('.mainHead');
const mainText = document.querySelector('.mainText');
const mainImg = document.querySelector('.modal__servis__about');
const formTel = form.querySelector('.order__form__label__contacts__tel');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(formTel);

const fadeIn = (el, timeout, display) =>{
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() =>{
        el.style.opacity = 1;
    }, 10);
};
const fadeOut = (el, timeout) =>{
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    setTimeout(() =>{
        el.style.display = 'none';
    }, timeout);
};

orderButtonOne.addEventListener('click', function() {
    fadeIn(form, 700);
});
orderButtonTwo.addEventListener('click', function() {
    fadeIn(form, 700);
});
orderButtonClose.addEventListener('click', function() {
    fadeOut(form, 700);
});
servisButtonOne.addEventListener('click', function() {
    fadeIn(modal, 700);
    mainHead.textContent = modalHOne;
    mainText.textContent = modalTextOne;
    mainImg.setAttribute('src', '/img/ab1.png');
});
servisButtonTwo.addEventListener('click', function() {
    fadeIn(modal, 700);
    mainHead.textContent = modalHTwo;
    mainText.textContent = modalTextTwo;
    mainImg.setAttribute('src', '/img/ab2.png');
});
servisButtonThree.addEventListener('click', function() {
    fadeIn(modal, 700);
    mainHead.textContent = modalHThree;
    mainText.textContent = modalTextThree;
    mainImg.setAttribute('src', '/img/ab3.png');
});
servisButtonFour.addEventListener('click', function() {
    fadeIn(modal, 700);
    mainHead.textContent = modalHFour;
    mainText.textContent = modalTextFour;
    mainImg.setAttribute('src', '/img/ab4.png');
});
servisButtonFive.addEventListener('click', function() {
    fadeIn(modal, 700);
    mainHead.textContent = modalHFive;
    mainText.textContent = modalTextFive;
    mainImg.setAttribute('src', '/img/ab5.png');
});
servisButtonSix.addEventListener('click', function() {
    fadeIn(modal, 700);
    mainHead.textContent = modalHSix;
    mainText.textContent = modalTextSix;
    mainImg.setAttribute('src', '/img/ab6.png');
});
modalClose.addEventListener('click', function() {
    fadeOut(modal, 700);
});

form.addEventListener('submit', formSend);


async function formSend(e) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  };
