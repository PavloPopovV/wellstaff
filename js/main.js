let mask = document.querySelector(".mask");
window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600)
});

$('.menu_btn').on('click', function(){
    $('.menu').addClass('active');
});
$('.close_btn').on('click', function(){
    $('.menu').removeClass('active');
});

$(function () {
    $(document).ready(function () {
        showStartModal();
    });

    function showStartModal() {
        if (localStorage.getItem('modalYesBtn') != 1) {
            setTimeout(function () {
                $("#exampleModal").modal("show");
                $('#modal-yes-btn').on('click', function () {
                    localStorage.setItem('modalYesBtn', 1)
                    $("#exampleModal").modal("hide");
                });
            }, 2000);
        }
    }
});

$(function () {
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            } else {
                change.target.classList.remove('element-show');
            }
        });
    }

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
        observer.observe(elm);
    }
});

$(function () {
    $(".book_call").on("click", function (e) {
        $(".window_order_wrapper").show();
        e.preventDefault();
    });

    $('.form_conection').submit(function (e) {
        var empty = $(this).parent().find("input").filter(function () {
            return this.value === "";
        });
        if (!empty.length) {
            $('.window_order_wrapper').hide();
        }
        $('.window_order_checked').show();
        e.preventDefault();
    })
});


$(function () {
    $('.faq_one').click(function (e) {
        $('.question_one').slideToggle();
        e.preventDefault();
    });
    $('.faq_two').click(function (e) {
        $('.question_two').slideToggle();
        e.preventDefault();
    });
    $('.faq_three').click(function (e) {
        $('.question_three').slideToggle();
        e.preventDefault();
    });
    $('.faq_four').click(function (e) {
        $('.question_four').slideToggle();
        e.preventDefault();
    });
    $('.faq_five').click(function (e) {
        $('.question_five').slideToggle();
        e.preventDefault();
    });
});

$(function () {
    $(".blog_card_details").on("click", function (e) {
        $(".blog_news_wrapper").show();
        e.preventDefault();
    });
});

$(function () {
    $('.form_question').submit(function (e) {
        var empty = $(this).parent().find("input").filter(function () {
            return this.value === "";
        });
        if (!empty.length) {
            $('.window_order_done').show();
            e.preventDefault()
        }
    });
});

$(function () {
    $('.slider_wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:true,
                    
                }
                
            }
        ]
    });
});

$(function () {
    $('.jobs_slider_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:true,
                }
                
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:true,
                }
                
            }
        ]
    });
});

$(function() {
    $(document).ready(function () {
        showTimerModal();
    });

    function showTimerModal(){
        if (localStorage.getItem("modalTimerBtn") != 1){
            setTimeout(function (){
                $("#timer_form").modal("show");
                $('.window_order_close').on('click', function () {
                    localStorage.setItem('modalTimerBtn', 1)
                    $("#timer_form").modal("hide");
                });
            },5000);
        }
    }
    
    // $('#timer_form').each(function(index, el) {
    //   setTimeout(function() {
    //     if ($('#load:visible').length > 0) {
    //       $('#load:visible').hide();
    //     }
    //     $(el).css('display', 'block');
    //   }, 8000 + 500 * index);
    // });
});

$(function () {
    $(document).ready(function () {
        showStartModal();
    });

    function showStartModal() {
        if (localStorage.getItem('modalYesBtn') != 1) {
            setTimeout(function () {
                $("#exampleModal").modal("show");
                $('#modal-yes-btn').on('click', function () {
                    localStorage.setItem('modalYesBtn', 1)
                    $("#exampleModal").modal("hide");
                });
            }, 1000);
        }
    }
});

















$(".window_order_close").on("click", function () {
    $(".window_order_wrapper").hide();
    $(".window_order_checked").hide();
    $(".blog_news_wrapper").hide();
    $('.window_order_done').hide();
});
