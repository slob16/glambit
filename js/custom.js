console.log('custom.js execution started');

// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Homescreen Slider Loading
//  2. Main Section Loading Animation
//  3. Swiper Slider Settings
//  4. Vegas Kenburns
//  5. KBW-Countdown
//  6. Magnific Popup
//  7. Mailchimp Notify Form
//  8. Contact Form
//  9. ParticlesJS Backgrounds
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader & Homescreen Slider Loading Start
  // --------------------------------------------- //
  $(".loader__logo").addClass('scaleOut');

  var mainSlider  = $('.main-slider')

  setTimeout(function(){
    $('body').removeClass('overflow-hidden');
    $(".loader").addClass('loaded');
    if (mainSlider.length) {
      var swiper = new Swiper('.swiper-main', {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        autoplay: {
          disableOnInteraction: true,
        },
        loop: true,
        parallax: true,
        speed: 1300,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    };
  }, 600);
  // --------------------------------------------- //
  // Loader & Homescreen Slider Loading End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    $('body').addClass('loaded');
    $('.headline__animate').textillate({
      in: {
        effect: 'fadeInUp',
        delayScale: 1.2,
        delay: 40,
      }
    });
  }, 600);
  // --------------------------------------------- //
  // Main Section Loading Animation End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // Swiper Slider Settings Start
  // --------------------------------------------- //
  var slider = $('.media-slider'),
      aboutSlider = $('.about-slider'),
      partnersSlider = $('.partners-slider');

  if (aboutSlider.length) {
    var swiper3 = new Swiper('.swiper-about', {
      spaceBetween: 0,
      grabCursor: true,
      slidesPerView: 'auto',
      speed: 1000,
      loop: true,
      autoplay: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

  if (partnersSlider.length) {
    var swiper4 = new Swiper('.swiper-partners', {
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: true,
      speed: 500,
      loop: true,
      breakpoints: {
        1600: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        }
      }
    });
  };
  // --------------------------------------------- //
  // Swiper Slider Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1200x1400/383838/8d8d8d" },
        { src: "https://dummyimage.com/1200x1400/383838/8d8d8d" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };

  var bgndKenburnsFull = $('#bgndKenburnsFull');
  if(bgndKenburnsFull.length){
    bgndKenburnsFull.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1920x1280/383838/8d8d8d" },
        { src: "https://dummyimage.com/1920x1280/383838/8d8d8d" },
        { src: "https://dummyimage.com/1920x1280/383838/8d8d8d" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2024, 5, 26), format: 'D'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Skillbar Settings Start
  // --------------------------------------------- //
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
    decimals: 0
  });
  // --------------------------------------------- //
  // Skillbar Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $('#inner-video-trigger').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function() { $('body').addClass('overflow-hidden'); },
      close: function() { $('body').removeClass('overflow-hidden'); }
    }
  });
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  // $('.notify-form').ajaxChimp({
  //   callback: mailchimpCallback,
  //   url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&id=54a7906900'
  // });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.contact').find('.reply-group').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Backgrounds Start
  // --------------------------------------------- //
  // Night Sky BG - particlesJS
  var bgndNightSky = $('#nightsky-js');
  if (bgndNightSky.length) {
    particlesJS('nightsky-js', {
      "particles": {
        "number": {
          "value": 300,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "opacity_min": 0.05,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  };

  // Particles BG - particlesJS
  var bgndParticles = $('#particles-js');
  if (bgndParticles.length) {
    particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ead9ff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 80,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 180,
            "color": "#ffffff",
            "opacity": 0.2,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 800,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 100,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
  };
  // --------------------------------------------- //
  // ParticlesJS Backgrounds End
  // --------------------------------------------- //
  console.log('jQuery ready: Subscription form logic setup started.');
    // --- Subscription Form Logic ---
    const subscribeForm = document.getElementById('subscribeForm');
    const successMessage = document.querySelector('.subscription-ok');
    const errorMessage = document.querySelector('.subscription-error');
    const investorLink = document.getElementById('investorLink'); // Declare investorLink here
    
    if (subscribeForm) {
      const emailInput = subscribeForm.querySelector('input[name="email"]');
      const submitButton = subscribeForm.querySelector('button[type="submit"]');
  
      console.log('subscribeForm found. Setting up submit listener.');
      // Initially hide messages if they exist
      if(successMessage) successMessage.style.display = 'none';
      if(errorMessage) errorMessage.style.display = 'none';
  
      subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        console.log('Submit event triggered for subscribeForm.'); 
  
        if(successMessage) successMessage.style.display = 'none';
        if(errorMessage) errorMessage.style.display = 'none';
        if(submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Sending...';
        }
  
        const email = emailInput.value;
        const googleScriptURL = 'https://script.google.com/a/macros/wetalentedfew.com/s/AKfycbyoo1AzrZms__Pzbb_ocuPuNKuaxvj3FRzttd03R5IVfIEhMdus8udFGNT9ku7Skmsp/exec';
  
        console.log('Attempting to fetch URL:', googleScriptURL, 'with email:', email);
        fetch(googleScriptURL, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ email: email })
        })
        .then(response => {
          console.log('Raw Google Script response object:', response);
          console.log('Google Script response Content-Type:', response.headers.get('Content-Type'));
          if (!response.ok) {
            console.error('Google Script response was not OK (status: ' + response.status + ')');
            // Attempt to get text even if not ok, for debugging
            return response.text().then(text => { 
              throw new Error('Network response was not ok. Status: ' + response.status + ', Body: ' + text);
            });
          }
          return response.json();
        })
        .then(data => {
          console.log('Parsed Google Script response data:', data);
          if (data.result === "success") {
            console.log('Google Script reported success. Attempting to show success message.');
            console.log('successMessage element:', successMessage);
            if(successMessage) {
              successMessage.style.display = 'block';
              successMessage.style.opacity = '1';
              successMessage.style.visibility = 'visible';
            }
            if(subscribeForm) subscribeForm.style.display = 'none'; 
          } else {
            console.log('Google Script reported error or data.result was not "success". Data:', data);
            console.log('errorMessage element:', errorMessage);
            if(errorMessage) {
              errorMessage.style.display = 'block';
              errorMessage.style.opacity = '1';
              errorMessage.style.visibility = 'visible';
              const errorTextElement = errorMessage.querySelector('.reply-group__text');
              if (errorTextElement && data.message) {
                errorTextElement.textContent = data.message;
              } else if (errorTextElement) {
                errorTextElement.textContent = 'An error occurred. Please try again.';
              }
            }
            if(submitButton) {
              submitButton.disabled = false;
              submitButton.textContent = 'Send';
            }
          }
        })
        .catch(error => {
          console.error('Error submitting to Google Script:', error);
          if(errorMessage) {
            errorMessage.style.display = 'block';
            const errorTextElement = errorMessage.querySelector('.reply-group__text');
            if (errorTextElement) {
              errorTextElement.textContent = 'An unexpected error occurred. Please try again.';
            }
          }
          if(submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Send';
          }
        }); // End of .catch()

        // investorLink logic, inside submit event listener, after fetch promise chain
        if (investorLink) { 
          const emailUser = 'investor';
          const emailDomain = 'myglambit.com';
          const emailSubject = 'Message%20from%20your%20site';
          investorLink.setAttribute('href', `mailto:${emailUser}@${emailDomain}?subject=${emailSubject}`);
        }
      }); // End of subscribeForm.addEventListener
    } else { // This is the 'else' for 'if (subscribeForm)'
      console.log('subscribeForm NOT found by getElementById.');
    }
    // The DOMContentLoaded listener is closed by the '});' on the next line (originally line 652).

});     // Closes $(function() { ... }) from line 85
