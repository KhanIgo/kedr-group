
import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;


var btns = document.getElementsByClassName("show_more");
var btns_docs = document.getElementsByClassName("docs_modal");
var modals = document.getElementsByClassName("modal");
var spans = document.getElementsByClassName("close");
var document_modal = document.getElementById("modal-document");
var body = document.getElementsByTagName("body");

for (let btn of btns) {
    let name = btn.dataset.id;
    let modal = document.getElementById(name);
    btn.onclick = function() {
        modal.style.display = "block";
    }
}

for (let btn of btns_docs) {
    btn.onclick = function() {
        let filename = btn.dataset.filename;
        document_modal.style.display = "block";
        body[0].style.overflow = 'hidden';
        document_modal.getElementsByTagName('embed')[0].outerHTML = '<embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=http://'+location.host+'/docs/'+filename+'">';
    }
}

for (let span of spans) {
    span.onclick = function() {
        span.parentElement.parentElement.style.display = "none";
        body[0].style.overflow = 'auto';
    }
}

window.onclick = function(event) {
    if (event.target.classList[0] == 'modal') {
        event.target.style.display = "none";
    }
}

var lar = document.querySelector('.leave_a_request');
if (lar) {
    lar.addEventListener('click', function() {
        var lar_modal = document.querySelector('.modal-leave_a_request');
        if (lar_modal) {
            lar_modal.style.display = "flex";
        }
    });
}


jQuery(function($) {

    $('body').on('submit', '.feedback__form', function(e) {
        e.preventDefault();
        let form = this;
        let formData = new FormData(form);
        let stop = false;
        for(let [name, value] of formData) {
            // console.log(`${name} = ${value}`);
            if (!value) {
                $('[name="'+name+'"]').addClass('error');
                stop = (stop === false) ? true : stop;
            }
        };
        if (stop === true) {
            return;
        }
        $.ajax({
            type: 'post',
            dataType: 'json',
            enctype: 'multipart/form-data',
            url: '/mail.php',
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 800000,
            success: function(data) {
                if (data.status == 'success') {
                    $(form).find('.feedback__success').fadeIn('400');
                    setTimeout(() => {
                        $(form).find('.feedback__success').hide();
                        $(form).closest('.modal').hide();
                        $(form).find('input, textarea').val('');
                    }, 4000);
                } else {
                    alert('Ошибка отправки сообщения, попробуйте позже еще раз.');
                }
            },
            error: function(e) {
                console.log(e.responseText);
            }
        });
    })
    $('body').on('click', '.panel__close', function() {
        $(this).closest('.modal').hide();
    });
    $('body').on('keyup', '.feedback input, .feedback textarea', function() {
        if ($(this).val().length > 0) {
            $(this).removeClass('error');
        } else {
            $(this).addClass('error');
        }
    });
    $('body').on("click", ".email_button", function(e) {
        e.preventDefault();
        var e = $('.js-hamburger')
          , n = $("#menu")
          , o = $("#headerInfo")
          , t = $("#pageIntro")
          , s = $("#pageButton");
        e.toggleClass("menu--open"),
        n.toggleClass("menu--open"),
        n.hasClass("menu--feedback") && setTimeout(function() {
            n.removeClass("menu--feedback")
        }, 300),
        o.toggleClass("menu--open"),
        t.toggleClass("menu--open"),
        s.toggleClass("menu--open")
    })
    $(window).on('scroll resize', function() {
        let st = $(this).scrollTop();
        let header = $('.page__intro');
        let buttons = $('.page-intro__actions');
        if (header.length) {
            if (st > header.height()) {
                if(!$('.main_menu_bar.fixed').length){
                    buttons.addClass('fixed');
                }
            } else if (st < header.height()) {
                buttons.removeClass('fixed');
            }
        }
    });
    $('.menu-nav__link.with_dropdown').click(function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).next('.menu-nav__subnav').slideToggle();
    });
    $('.display_more').click(function(e){
        $(this).closest('.panel-item__text').toggleClass('display_all_text');
    })
    $('body').on('click', '.tile__image', function(e) {
        e.preventDefault();
        let src = 'http://' + location.host + $(this).attr('data-file');
        document_modal.style.display = "block";
        body[0].style.overflow = 'hidden';
        document_modal.getElementsByTagName('embed')[0].outerHTML = '<embed src="https://drive.google.com/viewerng/viewer?embedded=true&url='+src+'">';
    });
});