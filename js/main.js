// $(window).on('load', function () {

// });

$(document).ready(function () {
    $("#menu-toggle-btn").on("click", function () {
      // $("body").toggleClass("active");
      $(".menu-wrapper").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

  $(document).scroll(function () {
    $(".menu-wrapper").removeClass("active");
    $("#menu-toggle-btn").removeClass("active");
    $("body").removeClass("active");
  });

AOS.init();



function headingAnimation(scrambleText){
    const originalLine1 = scrambleText.getAttribute('data-scramble-line1');
    const originalLine2 = scrambleText.getAttribute('data-scramble-line2');
    const textLengthLine1 = originalLine1.length;
    const textLengthLine2 = originalLine2.length;
    const scrambleDuration = 300; // 3 seconds scramble duration

    let animationStarted = false;

    function scrambleTextAnimation() {
        let startTime = null;
        let scrolled = false;

        function updateScrambledText(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }
            const elapsedTime = timestamp - startTime;

            if (elapsedTime < scrambleDuration && !scrolled) {
                let scrambledTextLine1 = '';
                let scrambledTextLine2 = '';
                for (let i = 0; i < textLengthLine1; i++) {
                    const randomChar = String.fromCharCode(32 + Math.floor(Math.random() * 94));
                    scrambledTextLine1 += randomChar;
                }
                for (let i = 0; i < textLengthLine2; i++) {
                    const randomChar = String.fromCharCode(32 + Math.floor(Math.random() * 94));
                    scrambledTextLine2 += randomChar;
                }
                scrambleText.innerHTML = `${scrambledTextLine1}<br>${scrambledTextLine2}`;
                requestAnimationFrame(updateScrambledText);
            } else {
                scrolled = true;
                scrambleText.innerHTML = `${originalLine1}<br>${originalLine2}`;
                scrambleText.style.opacity = 1;
            }
        }

        requestAnimationFrame(updateScrambledText);
    }

    window.addEventListener('scroll', () => {
        if (!animationStarted && window.scrollY > window.innerHeight / 2) {
            animationStarted = true;
            scrambleTextAnimation();
        }
    });
}

$(document).ready(function() {
    var sectionFlags = {};

    $(window).scroll(function() {
        var position = $(window).scrollTop();
        var offset = 600; // Adjust this offset according to when you want the function to trigger

        $('section').each(function() {
            var sectionId = $(this).attr('class');
            var target = $(this).offset().top - offset;

            if (position >= target && position < target + $(this).outerHeight() && !sectionFlags[sectionId]) {
                console.log('Approaching section: ' + sectionId);
                // Call your function here
                // For example: myFunction(sectionId);

                // Set the flag to true for the section
                sectionFlags[sectionId] = true;

                if (sectionId === 'why'){
                    console.log("ok")
                    headingAnimation(document.querySelector('.scramble-text-1'));
                }
                if (sectionId === 'learning-modal'){
                    console.log("ok")
                    headingAnimation(document.querySelector('.scramble-text-2'));
                }
                if (sectionId === 'make-us-unique'){
                    console.log("ok")
                    headingAnimation(document.querySelector('.scramble-text-3'));
                }
                if (sectionId === 'how-it-works'){
                    console.log("ok")
                    headingAnimation(document.querySelector('.scramble-text-4'));
                }
                if (sectionId === 'token'){
                    console.log("ok")
                    headingAnimation(document.querySelector('.scramble-text-5'));
                }
                if (sectionId === 'road-map'){
                    console.log("ok")
                    headingAnimation(document.querySelector('.scramble-text-6'));
                }
                if (sectionId === 'services'){
                    console.log("ok")
                    headingAnimation(document.querySelector('.scramble-text-7'));
                }
                if (sectionId === 'faq'){
                    console.log("ok")
                    headingAnimation(document.querySelector('.scramble-text-8'));
                }
                if (sectionId === 'profit'){
                    console.log("ok")
                    headingAnimation(document.querySelector('.scramble-text-9'));
                }
            }
        });
    });
});
