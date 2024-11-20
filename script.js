AOS.init();
        $('.btn_menu').click(function(){
            $('nav').animate({right: "0%"});
        });

        $(".btn-close").click(function(){
            $("nav").animate({right: "-105%"});
        });

        // $('.navi>li').click(function(){
        //     $(this).find('.sub').stop().slideDown(500);
        // })

        $(document).ready(function(){
            $(".navi>li>a").click(function(){
                $(this).next('.sub').slideToggle();
                $('.sub').not($(this).next('.sub')).slideUp();
            });
        });

        $(document).ready(function(){
            const targetNumber = 37407;
            const duration = 1000;
            const frameRate = 20;
            const increment = Math.ceil(targetNumber / (duration / frameRate));

            let currentNumber = 0;

            function updateCounter() {
                currentNumber += increment;
                if (currentNumber > targetNumber) {
                    currentNumber = targetNumber;
                }

                $('#memberCount1').text(currentNumber.toLocaleString() + '명');

                if (currentNumber < targetNumber) {
                    setTimeout(updateCounter, frameRate);
                }
            }

            updateCounter();
        });

        $(document).ready(function(){
            const targetNumber = 49696;
            const duration = 1000;
            const frameRate = 60;
            const increment = Math.ceil(targetNumber / (duration / frameRate));

            let currentNumber = 0;

            function updateCounter() {
                currentNumber += increment;
                if (currentNumber > targetNumber) {
                    currentNumber = targetNumber;
                }

                $('#memberCount2').text(currentNumber.toLocaleString() + '명');

                if (currentNumber < targetNumber) {
                    setTimeout(updateCounter, frameRate);
                }
            }

            updateCounter();
        });

        $(document).ready(function(){
            const targetNumber = 5757;
            const duration = 1000;
            const frameRate = 20;
            const increment = Math.ceil(targetNumber / (duration / frameRate));

            let currentNumber = 0;

            function updateCounter() {
                currentNumber += increment;
                if (currentNumber > targetNumber) {
                    currentNumber = targetNumber;
                }

                $('#memberCount3').text(currentNumber.toLocaleString() + '명');

                if (currentNumber < targetNumber) {
                    setTimeout(updateCounter, frameRate);
                }
            }

            updateCounter();
        });

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1.2,
            spaceBetween: 12,
            breakpoints: {
                500: {
                    slidesPerView: 2.2,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 3.2,
                    spaceBetween: 20,
                },

                1200: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                }
            },
        });

        $(document).ready(function(){
            $('.jisa').hide();
            $(".jisa:first").show().css({'opacity': 1, 'transform' : 'translateY(0)'});
            $('.tab-link:first').addClass('active');

            $('.tab-link').click(function(){
                $('.tab-link').removeClass('active');
                $('.jisa').hide().css({'opacity': 0, 'transform': 'translateY(50px)'});

                var city = $(this).data('city');
                $('#' + city).show().animate({ opacity: 1, top: 0 }, 600).css('transform', 'translateY(0)');
                $(this).addClass('active');
            });
        });