/**
 * пример описания фуркции
 * называние функции
 * @param {number} first - первое число
 * @result {number}
 */
 @@include('jquery-1.12.1.js');
 @@include('swiper-bundle.js'); 
 @@include('simplebar.js');
 @@include('flatpickr.js');
 @@include('choices.min.js');
 
 
 "use scrict";
 
 $(function () {
     //подключаю полосу прокрутки
     let simplembarHeader = document.querySelector('#header .simplebar-box');
     if(simplembarHeader){
        new SimpleBar(simplembarHeader);
 
        let arSimplembar = document.querySelectorAll('.simplebar-box');
        arSimplembar.forEach(simplebarItem => {
            new SimpleBar(simplebarItem, {
                autoHide: false
            });
        });
     }

 
     //открытие и закрытие подменю
     let $btnOpenSubmenu = $('.btn-open-submenu');
     $btnOpenSubmenu.on('click', function () {
         $(this).toggleClass('btn-open-submenu--active');
         $(this).parent().next().slideToggle(300);
     });
 
 
 
     let $eventBtn = $('.events');
     let $notificationTab = $('.notification-tab');
     
     function showNotificationWindow(elem) {
         elem.addClass('events--active');
         $notificationTab.slideDown(100);
     }
 
     function hideNotificationWindow(elem) {
         elem.removeClass('events--active');
         $notificationTab.slideUp(100);
     }
 
     if($eventBtn){
        $eventBtn.on('click', function () {
            if ($(this).hasClass('events--active')) {
                hideNotificationWindow($(this));
            } else {
                showNotificationWindow($(this));
            }
        });
     }
 
     // notification-tab код работы таба в окне уведомлений
     let $notificationControlBtn = $('.notification-tab__control .btn');
     let $notificationTabField = $('.notification-tab__field');
     if($notificationControlBtn){
        $notificationControlBtn.on('click', function () {
            if (!$(this).hasClass('active')) {
                $notificationControlBtn.removeClass('active');
                $(this).addClass('active');
                $notificationTabField.hide();
                $notificationTabField.eq($(this).index()).show();
            }
        });
     }
     
 
     // мобильное меню
     let $body = $('body');
     let $burgerBtn = $('.burger'); //кнопка бургер 
     let $menuPanel = $('.site-nav'); //основное меню
     let $greatShadow = $('.great-shadow'); //великая тень!
     let $openSearchFromBtn = $('.open-search-form-btn'); //кнопка открытия формы поиска
     let $formSearch = $('.search-form'); //форма поиска
 
     function controlScroll() {
         $body.toggleClass('fixed');
     }
 
     // функция открытия/закрытия мобильного меню
     function toggleMenu() {
         $burgerBtn.toggleClass('burger--active');
         $menuPanel.toggleClass('site-nav--show-menu');
         $greatShadow.toggleClass('great-shadow--show');
         controlScroll();
     }
     //функция открытия/скрытия формы (поля) поиска
     function toggleSearcForm() {
         $formSearch.toggleClass('search-form--show');
         $greatShadow.toggleClass('great-shadow--show');
         controlScroll();
     } 
     if($burgerBtn){
        $burgerBtn.on('click', toggleMenu);
     }
     
 
     // нажатие по элементу great-shadow;
     if($greatShadow){
        $greatShadow.on('click', function () {
            if ($burgerBtn.hasClass('burger--active') && $menuPanel.hasClass('site-nav--show-menu')) {
                toggleMenu();
            }
            if ($formSearch.hasClass('search-form--show') && $greatShadow.hasClass('great-shadow--show')) {
                toggleSearcForm();
            }
        });
     }
     
     if($openSearchFromBtn){
        $openSearchFromBtn.on('click', toggleSearcForm);
     }
     
 
     // обрабатываю все клики в документе.
     $(document).on('click', function (e) {
 
         //если клик вне окна уведомлений, то скрываю коно уведомлений.
         if ($eventBtn.hasClass('events--active')) {
             if (!$eventBtn.is(e.target) && $eventBtn.has(e.target).length === 0 && !$notificationTab.is(e.target) && $notificationTab.has(e.target).length === 0) {
                 hideNotificationWindow($eventBtn);
             }
         }
         // если клик вне поля поиска, то скрываю поле поиска
         if ($formSearch.hasClass('search-form--show')) {
             if (!$formSearch.is(e.target) && !$formSearch.has(e.target).length && !$openSearchFromBtn.is(e.target) && !$openSearchFromBtn.has(e.target).length) {
                 toggleSearcForm();
             }
         }
     });

    //  показ и скрытие пароля
    let inputPass = $('.form-elem__input--password');
    let inputPassShow = $('.passowrd-eye input');
    if(inputPassShow){
        inputPassShow.on('click', function(){
            if($(this).is(':checked')){
                inputPass.attr('type', 'text');
                $(this).parent().toggleClass('passowrd-eye--show');
            }else{
                inputPass.attr('type', 'password');
                $(this).parent().toggleClass('passowrd-eye--show');
            }
        })
    }
     
    //больльшой таб (если один на странице)
    let tabControlItems = $('.great-tab-control').children();
    let tabDisplayItems = $('.great-tab-display').children();
    if(tabControlItems){
        tabControlItems.on('click', function(){
            tabControlItems.removeClass('active');
            $(this).addClass('active');
            tabDisplayItems.hide();
            tabDisplayItems.eq($(this).index()).show();
        })
    }
    


 });
  
//  подключаю слайдеры
let announcementsSliderBox = document.querySelector('.announcements-slider');
if(announcementsSliderBox){
    let announcementsSlider = new Swiper(announcementsSliderBox, {  
        slidesPerView: 3, 
        loop: true,
        speed: 1000, 
        loopAdditionalSlides: 3,
        slidesPerGroup: 3,
         spaceBetween: 20,
         navigation: {
           nextEl: '.announcements__swiper-button-next',
           prevEl: '.announcements__swiper-button-prev', 
         },
         pagination: {
           el: ".swiper-pagination",
           clickable: true,
         }, 
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: { 
           200: {
               slidesPerView: 1, 
               slidesPerGroup: 1,
             },
           600: {
               slidesPerView: 2, 
               slidesPerGroup: 2,
             },
           880: {
               slidesPerView: 3, 
               slidesPerGroup: 3,
           },
           950: {
             slidesPerView: 2, 
             slidesPerGroup: 2,
           },
           1500: {
               slidesPerView: 3, 
               slidesPerGroup: 3
           }
         }
    }); 
}

// подключаю селекты
let arTableCategory  = [];
let tableCategorySelects = document.querySelectorAll('.table__category-select');
if(tableCategorySelects.length > 0){
    tableCategorySelects.forEach(select=>{
        arTableCategory.push(new Choices(select,{ 
            noResultsText: 'Значение не найдено',
            loadingText: 'Загрузка...',  
        }));
    });
}

let arFormCategory = [];
let formCategorySelects = document.querySelectorAll('.form__category-select');
if(formCategorySelects.length > 0){
    formCategorySelects.forEach(select=>{
        arTableCategory.push(new Choices(select,{ 
            noResultsText: 'Значение не найдено',
            loadingText: 'Загрузка...',  
            placeholder: false, 
            searchPlaceholderValue: 'Введите искомое значение', 
        })); 
        let thisSelect = select.parentElement.parentElement;
        
        select.addEventListener('change', function(){
            if(this.value != ''){
                this.closest('.form-elem').classList.add('form-elem--active'); 
            } 
        });
        
    });
} 

// инициализирую поле  с датой 
let inputDateElem = document.querySelector('.flatpickr');
if(inputDateElem){
    flatpickr(inputDateElem, {
        enableTime: true,
        dateFormat: 'd.m.Y  H:i:S',
        time_24hr: true
    });
}




// Drag & Drop и обработка формы - НАЧАЛО
let fileStorage = [];
let formAddWork = document.querySelector('.form-add-work'); 
if(formAddWork){
    let notifiedCheckbox = formAddWork.querySelector('.notified');
    let submitBtnAddWork = formAddWork.querySelector('button[type="submit"]'); 
    let dropBox = document.querySelector('.drop-box'); 
    let $fileInput = dropBox.querySelector('input'); 
    let dragboxContent = dropBox.querySelector('.drag-box__content');
     
    
      
    /** 
     * addUpFileElement - функция добавления html елемента добавленного файла
     * file - объект файла
     * */  
    function addUpFileElement(file){
        let fileType = file.name.match(/\.[a-z]+$/)[0].replace('.', '');
        let fileName = file.name.replace('.'+fileType, '');
        let fileSize = Math.round(file.size / 1024);
        let fileID = file.lastModified;  
        dragboxContent.insertAdjacentHTML('beforeend', `<div class="upfile" id="${fileID}"><div class="upfile__icon-box"><svg viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M23.2132 10.5315C22.536 10.5315 21.6389 10.5165 20.522 10.5165C17.7981 10.5165 15.5583 8.262 15.5583 5.5125V0.6885C15.5583 0.309 15.2553 0 14.8796 0H6.94544C3.24275 0 0.25 3.039 0.25 6.7635V22.926C0.25 26.8335 3.38533 30 7.25437 30H19.0694C22.7587 30 25.75 26.9805 25.75 23.253V11.2065C25.75 10.8255 25.4485 10.518 25.0712 10.5195C24.4371 10.524 23.6766 10.5315 23.2132 10.5315Z" fill="#9CB1F9"></path><path opacity="0.4" d="M19.126 0.850933C18.6775 0.384433 17.8945 0.705433 17.8945 1.35193V5.30743C17.8945 6.96643 19.261 8.33143 20.92 8.33143C21.9655 8.34343 23.4175 8.34643 24.6505 8.34343C25.282 8.34193 25.603 7.58743 25.165 7.13143C23.5825 5.48593 20.749 2.53693 19.126 0.850933Z" fill="#9CB1F9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.46085 14.0814H13.5383C14.1548 14.0814 14.6558 13.5819 14.6558 12.9654C14.6558 12.3489 14.1548 11.8479 13.5383 11.8479H8.46085C7.84435 11.8479 7.34485 12.3489 7.34485 12.9654C7.34485 13.5819 7.84435 14.0814 8.46085 14.0814ZM8.461 21.5727H16.627C17.2435 21.5727 17.7445 21.0732 17.7445 20.4567C17.7445 19.8402 17.2435 19.3392 16.627 19.3392H8.461C7.8445 19.3392 7.345 19.8402 7.345 20.4567C7.345 21.0732 7.8445 21.5727 8.461 21.5727Z" fill="#9CB1F9"></path></svg></div><div class="upfile__deskription"><span class="upfile__name">${fileName}</span><span class="upfile__info">(${fileType}, ${fileSize} КБ)</span></div><div class="upfile__btn-box"><button type="button" class="basket-btn js__remove-file"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M19.643 9.48844C19.643 9.55644 19.11 16.2972 18.8056 19.1341C18.615 20.875 17.4927 21.931 15.8092 21.961C14.5157 21.99 13.2494 22 12.0036 22C10.6809 22 9.38741 21.99 8.13185 21.961C6.50477 21.922 5.38147 20.845 5.20057 19.1341C4.88741 16.2872 4.36418 9.55644 4.35445 9.48844C4.34473 9.28345 4.41086 9.08846 4.54507 8.93046C4.67734 8.78447 4.86796 8.69647 5.06831 8.69647H18.9388C19.1382 8.69647 19.3191 8.78447 19.4621 8.93046C19.5953 9.08846 19.6624 9.28345 19.643 9.48844Z"/><path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z"/></svg></button></div></div>`);
    }
    
    /** 
     * fileValidation - функция проверки загружемых файлов на дубликаты, если их нет то вызывается функция addUpFileElement
     * file - объект c файлами
     * */  
    function fileValidation(files){
        files.forEach(file=>{ 
            // проверка на загрузку одинаковых файлов
            if(fileStorage.length > 0){
                let matchFlag = false; //флаг проверки на совпадение
                for(let i = 0; i < fileStorage.length; i++){
                    // console.log(fileStorage[i].lastModified);
                    // console.log(file.lastModified);
                    if(fileStorage[i].lastModified === file.lastModified){
                        console.log('Такой файл уже имеется');
                        matchFlag = true;
                        break;
                    } 
                } 
                // если совпадений нет, то добавляем объект файла в массив и элемент файла в DOM
                if(!matchFlag){
                    fileStorage.push(file);
                    addUpFileElement(file);
                }
            }else{
                fileStorage.push(file);
                addUpFileElement(file);
            }  
            //console.log(fileStorage);
        }); 
    }
    // активация кнопки submit
    notifiedCheckbox.addEventListener('change', function(){
        if(this.checked){
            submitBtnAddWork.removeAttribute('disabled');
        }else{
            submitBtnAddWork.setAttribute('disabled', 'disabled')
        }
    });
    
    // клик по полю для загрузки файлов
    dragboxContent.addEventListener('click', function(e){  
        //отрываю окно загрузки файлов
        if(e.target.classList.contains('drag-box__content')){
            if(e.target.classList.contains('drag-box__content')){
                $fileInput.click();
            } 
        }
        //удаляю подгруженный файл
        if(e.target.classList.contains('js__remove-file')){
            let currentElem = e.target.parentElement.parentElement;
            let destroyedID = currentElem.getAttribute('id');  
            for(let i = 0; i < fileStorage.length; i++){
                console.log(fileStorage[i].lastModified );
                if(fileStorage[i].lastModified == destroyedID){ 
                    fileStorage.splice(i, 1);
                }
            } 
            currentElem.remove();
        } 
     
    }, true);
    
     
    $fileInput.addEventListener('change', function(){ 
        fileValidation($fileInput.files);
    });
    
    dragboxContent.addEventListener('dragenter', function(e){ 
        e.preventDefault();
        dropBox.classList.add('drop-box--dragenter');
    }, true); 
    
    dragboxContent.addEventListener('dragleave', function(e){ 
        e.preventDefault();
        dropBox.classList.remove('drop-box--dragenter');
    }, true); 
    dragboxContent.addEventListener('dragover', function(e){ 
        e.preventDefault(); 
    }, true); 
    
    dragboxContent.addEventListener('drop', function(e){ 
        e.preventDefault(); 
        let files = e.dataTransfer.files;
        fileValidation(files);
        dropBox.classList.remove('drop-box--dragenter');
    }, true); 
     
    formAddWork.addEventListener('submit', function(e){
        e.preventDefault();
    
        let formData = new FormData(formAddWork);
        
        formData.delete('input-files');
    
        let testArr = [];
        for(let key in fileStorage){
            formData.append('form-files-'+key, fileStorage[key]);
        }
        formData.forEach((item, index)=>{
            testArr[index] = item;
        });
        console.log(testArr);
    });
}



// Drag & Drop и обработка формы - КОНЕЦ

// работа инфовсплывашек (страница Обходной лист)
let divisionCellInfo = document.querySelectorAll('.division-cell__info'); 

divisionCellInfo.forEach(cell=>{ 
    cell.addEventListener('click', function(e){

        divisionCellInfo.forEach(item=>{
            item.classList.remove('division-cell__info--active');
        }); 

        this.classList.add('division-cell__info--active');  
        let closeBtn = this.querySelector('.info-popup__close-btn'); 
        console.log(closeBtn)
        closeBtn.addEventListener('click', function(e){ 
            e.stopPropagation(); 
            this.closest('.division-cell__info').classList.remove('division-cell__info--active');
  
        }); 
    });
});

// обрабатываю клики по документу
document.addEventListener('click', function(e){ 
    let targetElem = e.target; 

    // клик вне окна всплывающей подсказки
    if(!( targetElem.closest('.division-cell__info') || targetElem.classList.contains('division-cell__info'))){
     
        divisionCellInfo.forEach(item=>{
            if(item.classList.contains('division-cell__info--active')){ 
                item.classList.remove('division-cell__info--active');
            } 
        });
    }
});
 
let spolerSummary = $('.spoiler__summary');

spolerSummary.on('click', function(){
    $(this).toggleClass('spoiler__summary--active');
    $(this).next().slideToggle(300);
})