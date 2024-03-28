    // принципы:
    // переключение объектов через затухание fadeIn(100)
    // первый клик на каждый объект сопровождается звуком


$(document).ready(function(){

    //меняющийся текст в информационном блоке на ховере
    $(".book1").hover(function(){
        $('.infp').text("часть библиотеки типографии находится на этой полке. не подумайте, это не «изгнанники», а книжки на все случаи жизни!");
    });

    $(".book2").hover(function(){
        $('.infp').text("часть библиотеки типографии находится на этой полке. не подумайте, это не «изгнанники», а книжки на все случаи жизни!");
    });

    $(".book3").hover(function(){
        $('.infp').text("часть библиотеки типографии находится на этой полке. не подумайте, это не «изгнанники», а книжки на все случаи жизни!");
    });

    $(".book5").hover(function(){
        $('.infp').text("часть библиотеки типографии находится на этой полке. не подумайте, это не «изгнанники», а книжки на все случаи жизни!");
    });

    $(".knife").hover(function(){
        $('.infp').text("с помощью этого ножичка мы нарезаем открытки") ;
    });

    $(".brush").hover(function(){
        $('.infp').text("именно этой кистью наносилась тушь на объекты, которые потом мы отпечатали и использовали в айдентике");
    });

    $(".mug").hover(function(){
        $('.infp').text("мы любим кружки! в них и чай заваришь, и инструменты сложишь");
    });

    $('.paper1').hover(function(){
        $('.infp').text("помоги разложить бумажки по контейнерам");
    });

    $('.paper2').hover(function(){
        $('.infp').text("помоги разложить бумажки по контейнерам") ;
    });

    $('.paper3').hover(function(){
        $('.infp').text("помоги разложить бумажки по контейнерам") ;
    });

    $(".olimpus_old").hover(function(){
        $('.infp').text("это старый плёночный кэнон, на него получаются очень милые кадры. улыбочку!");
    });

    $(".canon").hover(function(){
        $('.infp').text("камер много не бывает");
    });

    $('.olimpus_new').hover(function(){
        $('.infp').text("это крошечная цифровая мыльница олимпус, а на кадре процесс создания этого сайта");
    });

    $('.magnet_base').hover(function(){
        $('.infp').text("можешь попередвигать магнитики, мы часто так делаем, когда скучно");
    });

    $('.shelf5').hover(function(){
        $('.infp').text("на нашей полочке есть коллекция букв для печатной машинки, можешь попробовать!");
    });

    $('.clock').hover(function(){
        $('.infp').text("в типографии так много дел, что у наших часов 100 секунд вместо 60, чтобы всё успеть!");
    });

    $('.lino').hover(function(){
        $('.infp').text("как-то раз мы делали постеры и использовали технику линогравюры");
    });

    $('.glass').hover(function(){
        $('.infp').text("мы очень любим чай! наливай себе тоже, не стесняйся");
    });

    $('.tea_pack').hover(function(){
        $('.infp').text("а вот один из наших любимых чаёв: с морошкой");
    });



//ЭКРАН С ПИСЬМОМ
 
    //по клику на "далее" скрывается письмо и кнопка, открываются полки
    $('.next_button').click(function() {
        $('.letters').css('display','none');
        $('.information_box').css('display', 'flex');
        $('.bookcase').css('display','block');
        $('.next_button').css('display','none');
      });
    
    //по клику на название проекта возвращение к первичному состоянию
      $('.name').click(function() {
        $('.letters').css('display','flex');
        $('.information_box').css('display', 'none');
        $('.bookcase').css('display','none');
        $('.next_button').css('display','flex');
      });
    


//ПОЛОЧКА ПЕРВАЯ: КНИГИ, СТАКАН, НОЖ, КИСТЬ

    //звук перелистывания книг по клику
    $(".book1, .book2, .book3, .book5").click(function(){
        var audio = $(".books_sound")[0];
        audio.play() ;
    });

    //по клику фото в диве меняется с корешка книги на лицевую сторону и обратно
    var isClicked = false;

    $(".book1").click(function(){
        if (!isClicked) {
            // увеличение размера дива под лицевую сторону
            $(".book1").animate({width: "22vw"});

            // скрыть старое изображение
            $(".book1 img").fadeOut(100, function() {
                // увеличиваем размер нового изображения
                $(this).animate({width: "22vw"}, function() {
                    $(this).attr("src", "./img/atlant_front.png").fadeIn(100);
                    isClicked = true;
                });
            });
        } else {
            // чтобы можно было кликать несколько раз
            $(".book1 img").fadeOut(100, function() {
                $(this).animate({width: "5vw"}, function() {
                    $(this).attr("src", "./img/atlant_side.png").fadeIn(100);
                    isClicked = false ;
                    $(".book1").animate({width: "5vw"});

                });
            });
        }
    });

    var isClicked = false;
    $(".book2").click(function(){
        if (!isClicked) {
            $(".book2").animate({width: "21vw"}) ;


            $(".book2 img").fadeOut(100, function() {
                $(this).animate({width: "21vw"}, function() {
                    $(this).attr("src", "./img/deutch_front.png").fadeIn(100);
                    isClicked = true;
                });
            });
        } else {
            $(".book2 img").fadeOut(100, function() {
                $(this).animate({width: "6vw"}, function() {
                    $(this).attr("src", "./img/deutch_side.png").fadeIn(100);
                    isClicked = false;
                    $(".book2").animate({width: "6vw"}) ;
                });
            });
        }
    });

    var isClicked = false;
    $(".book3").click(function(){
        if (!isClicked) {
            $(".book3").animate({width: "21vw"});


            $(".book3 img").fadeOut(100, function() {
                $(this).animate({width: "21vw"}, function() {
                    $(this).attr("src", "./img/geometry_front.png").fadeIn(100);
                    isClicked = true;
                });
            });
        } else {
            $(".book3 img").fadeOut(100, function() {
                $(this).animate({width: "6vw"}, function() {
                    $(this).attr("src", "./img/geometry_side.png").fadeIn(100);
                    isClicked = false;
                    $(".book3").animate({width: "6vw"});
                });
            });
        }
    });


    var isClicked=false;
    $(".book5").click(function(){
        if (!isClicked) {

            $(".book5").animate({width: "21vw"}) ;

            $(".book5 img").fadeOut(100, function() {
                $(this).animate({width: "21vw"}, function() {
                    $(this).attr("src", "./img/poetry_front.png").fadeIn(100);
                    isClicked = true;
                });
            });
        } else {
            $(".book5 img").fadeOut(100, function() {
                $(this).animate({width: "6vw"}, function() {
                    $(this).attr("src", "./img/poetry_side.png").fadeIn(100);
                    isClicked = false;
                    $(".book5").animate({width: "6vw"});
                });
            });
        }
    });

    //на ховере звук стука ножа и приподнимание
    $(".knife").hover (function(){
        var audio = $(".knife_sound")[0];
        audio.play();
    });

    $(".knife").hover(function() {
        //ножик поднимается и опускается
        var hoverSound = $("#hover-sound")[0];

        $(this).stop().animate({top: "-=5vw"}, 500);},

        function() {
            $(this).stop().animate({top:"0" }, 150); }
    );

    //на ховере звук стука кисти и приподнимание
    $(".brush").hover(function(){
        var audio = $(".brush_sound")[0];
        audio.play();
    });

    $(".brush").hover(function() {
        //кисть поднимается и опускается
        $(this).stop().animate({ top: "-=5vw" }, 500);} ,

        function() {
            $(this).stop().animate({ top: "0" }, 150); }
    );

    //звук стука чашки
    $(".mug").hover(function(){
        var audio = $(".mug_sound")[0];
        audio.play();
    });



//ПОЛОЧКА ВТОРАЯ: КАРТИНКИ В КОРОБОЧКАХ

    //передвижные картнки
    $('.paper1').draggable({
        containment: '.shelf2',
        stack:".paper1"});
    $('.paper2').draggable({
        containment: '.shelf2',
        stack:".paper2"});
    $('.paper3').draggable({
        containment: '.shelf2',
        stack:".paper3"});

    //ПОЛОЧКА ТРЕТЬЯ: ФОТОАППАРАТЫ

    //звук для первого фотоаппарата
    $(".olimpus_old").click(function(){
        var tape = $(".olimpus_tape")[0] ;
        tape.play() ; 
        $('.flash').animate({opacity: 1}, 0) ; 
        $('.flash').animate({opacity: 0}, 1000) ; 
    });        

    //смена фоток на третьем фотоаппарате 
    $('.olimpus_new').click(function(){
        var inside = $(this).find('img');
        var ol_audio = $('.olimpus_new_audio');
        
        if (inside.attr('src') === './img/olimpus_new.png') {
            inside.fadeOut(function(){
                inside.attr('src','./img/olimpus_new_inside.png').fadeIn(100);
                ol_audio[0].play(); //щелчок только при клике на див в изначальном виде
            });
        } else {
            inside.fadeOut(function(){
                inside.attr('src', './img/olimpus_new.png').fadeIn(100);
            });
        }
    });
    
    //смена фоток покругу на фотоаппарате
    $('.canon').click(function(){
        var photos = $(this).find('img');
        var canon_audio = $('.canon_audio');
        
        if (photos.attr('src') === './img/canon.png') {
            //переключение фото и включение аудиодорожки
            photos.fadeOut(100,function(){
                photos.attr('src', './img/canon_1.png').fadeIn(100);
                canon_audio[0].play() ;
            });
        } else if (photos.attr('src') === './img/canon_1.png') {
            photos.fadeOut(100,function(){
                photos.attr('src', './img/canon_2.png').fadeIn(100);
                canon_audio[0].play() ;
            });
        } else {
            photos.fadeOut(100,function(){
                photos.attr('src', './img/canon.png').fadeIn(100);
                canon_audio[0].play() ;
            });
        }
    });


//ПОЛОЧКА ЧЕТВЕРТАЯ: МАГНИТНАЯ ДОСКА

    //магниты двигаются
    $(".magnet_1, .magnet_2, .magnet_3, .magnet_4").draggable({
        containment: ".magnet_base",
        stop: function(event, ui) {
            var magnet_audio = new Audio("./audio/magnets.m4a");
            magnet_audio.play();
        }
      });



//ПОЛОЧКА ПЯТАЯ: БУКОВКИ

    var correspondence = {
        'а': './img/a.png',
        'б': './img/b.png',
        'в': './img/v.png',
        'г': './img/g.png',
        'д': './img/d.png',
        'е': './img/ye.png',
        'ё': './img/yo.png',
        'ж': './img/zh.png',
        'з': './img/z.png',
        'и': './img/i.png',
        'й': './img/iy.png',
        'к': './img/k.png',
        'л': './img/l.png',
        'м': './img/m.png',
        'н': './img/n.png',
        'о': './img/o.png',
        'п': './img/p.png',
        'р': './img/r.png',
        'с': './img/s.png',
        'т': './img/t.png',
        'у': './img/u.png',
        'ф': './img/f.png',
        'х': './img/h.png',
        'ц': './img/ts.png',
        'ч': './img/ch.png',
        'ш': './img/sch.png',
        'щ': './img/sch1.png',
        'ъ': './img/tvrd.png',
        'ы': './img/y.png',
        'ь': './img/mgk.png',
        'э': './img/e.png',
        'ю': './img/iu.png',
        'я': './img/ya.png',
        ' ': './img/space.png',
    };

    //в зависимости от нажатия буквы в src вставляется ссылка на изображение 
    $(document).on('keydown', function(event){
        var keyPressed = event.key.toLowerCase();
        
        if (keyPressed === 'backspace') {
            $('.container img:last-child').remove(); // удаление на backspace
        } else if (correspondence[keyPressed]) {
            $('.container').append('<img src="' + correspondence[keyPressed] + '">');
        }
    });



//ПОЛОЧКА ШЕСТАЯ: ЛИНОГРАВЮРА И ЧАСЫ

    //появляется картинка на курсоре при наведении на див с полем для рисования, за курсором остается след
    $('.lino').on('mousemove',function(e) {
        var trailelement = $('<img class="line" src="./img/line.png">');

        trailelement.css({
            top: e.pageY - $(this).offset().top + 'px',
            left: e.pageX - $(this).offset().left + 'px',
            width: "2vw",
            height: "2vh",
        });
        $(this).append(trailelement);
    });
    
    $('.lino').on('mouseleave', function() {
        $(this).find('.line').remove();
    });
    //нет ну это треш


    $('.lino').on('mouseenter',function(e) {
        $('.custom-cursor').css({ display: 'block' });
        $('.trail').css({ display: 'block' });
    
        $(document).on('mousemove', function(e) {
            var x = e.pageX+(2 * window.innerWidth / 100); ;
            var y = e.pageY- (20 * window.innerHeight / 100); 
            $('.custom-cursor').css({ left:x, top:y });
            $('.trail').css({ left:x, top:y });
        });
    });
    
    $('.lino').on('mouseleave', function() {
        $('.custom-cursor').css({display: 'none'}) ;
        $('.trail').css({display: 'none'});
    });
    
    
    //фотка часов меняется по клика в две стороны
    $(document).ready(function () {
        var clock_images = [
            './img/clock1.png',
            './img/clock2.png',
            './img/clock3.png',
            './img/clock4.png',
            './img/clock5.png',
            './img/clock6.png',
            './img/clock7.png',
            './img/clock8.png'
         ];

        var currentclockindex = 0;
        $('.clock').on('click', function () {
            if (currentclockindex === clock_images.length - 1) {
                currentclockindex = 0;
            } else {
                currentclockindex++; 
            }
            $(this).find('img').attr('src', clock_images[currentclockindex]) ;
        });
    });
    
//ПОЛОЧКА СЕДЬМАЯ: ЧАШКИ И ЧАЙ
    $('.glass').on ('click', function() {
        $(this).find('img').attr('src', function(_, src) {
            return src === './img/glass.png' ? './img/glass_full.png' : './img/glass.png';
        }) ;
        var tea_sound = $(".tea_audio")[0];
        tea_sound.play();
    });

    $('.tea_pack').on ('click', function() {
        var pack_sound = $(".pack_audio")[0];
        pack_sound.play();
    });

    $('.clock').on ('click', function() {
        var clock_sound = $(".clock_audio")[0];
        clock_sound.play();
    });

});
