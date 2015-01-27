function initializeJS() {
    //jQuery Preloader
    $('body').jpreLoader();    
	//Responsive Headings
	jQuery("h1").fitText(1.8, { minFontSize: '30px', maxFontSize: '45px' });
	jQuery("h2").fitText(1.5, { minFontSize: '20px', maxFontSize: '35px' });

	//Nice Scroll
    if(jQuery(window).width() > 480) {
	   jQuery("html").niceScroll({cursorcolor:"rgba(225,225,225,0.8)",cursorborder:"1px solid #FFF"});
    }
    
    //Local <a href="#example"> Smooth  Scrolling 
    jQuery(document).localScroll();
    //Closoe Nav on click
    jQuery(document).on('click','.navbar-collapse.in',function(e) {        
        if( jQuery(e.target).is('a') ) {
            jQuery(this).removeClass('in').addClass('collapse');
        }
    });

    //Hero 
    (function() {
        function heroInit(){
           var hero = jQuery('.hero'),
                ww = jQuery(window).width(),
                wh = jQuery(window).height(),
                heroHeight = wh;

            hero.css({'min-height':heroHeight+'px'});

            var heroVcenter = jQuery('.hero .vcenter'),
                contentHeight = heroVcenter.height(),
                parentHeight = hero.height(),
                topMargin = (parentHeight - contentHeight) / 2;

            heroVcenter.css({
                "margin-top" : topMargin+"px"
            });

            var heroContent = jQuery('.hero .content'),
                contentHeight = heroContent.height(),
                parentHeight = hero.height(),
                topMargin = (parentHeight - contentHeight) / 2;

            heroContent.css({
                "margin-top" : topMargin+"px"
            });
        }

        jQuery(window).on("resize", heroInit);
        jQuery(document).on("ready", heroInit);
    })();

    //Super Slides
    jQuery('#slides').superslides({
        play: 6000,
        animation_speed: 800,
        animation_easing: 'swing',
        animation: 'fade',
        inherit_width_from: window,
        inherit_height_from: window,
        pagination: true,
        hashchange: false,
        scrollable: true,
        elements: {
          preserve: '.preserve',
          nav: '.slides-navigation',
          container: '.slides-container',
          pagination: '.slides-pagination'
      }
    });
    
    //Parallax Effects
    if(jQuery(window).width() > 480) {
        jQuery('.parallax-bg1').parallax("50%", 0.5);
        jQuery('.parallax-bg2').parallax("50%", 0.5);
        jQuery('.parallax-bg3').parallax("50%", 0.5);
        jQuery('.parallax-bg4').parallax("50%", 0.5);
        jQuery('.parallax-bg5').parallax("50%", 0.5);
        jQuery('.parallax-bg6').parallax("50%", 0.5);
        jQuery('.parallax-bgc').parallax("50%", 0.5);
    }

    //Animations
    jQuery('.animated').appear();
    jQuery(document.body).on('appear', '.animated', function() {
        var animation = jQuery(this).attr("data-animation");
        if(animation=="shake" || animation=="tada" || animation=="bounceIn"){            
            jQuery(this).css('opacity','1');
        }
        if(jQuery(window).width() > 480) {
            jQuery(this).each(function(){ jQuery(this).addClass(animation) });
        }
    });

	// Text Animation
	jQuery('.tlt').textillate({
	  selector: '.texts',
	  loop: true,	  
	  minDisplayTime: 100,
	  initialDelay: 10,
	  autoStart: true,	  
	  in: {		    
		    effect: jQuery(this).attr("data-in-effect"),
		    delayScale: 1.5,
		    delay: 10,
		    sync: false,
		    shuffle: false
		  },		  
	  out: {
		    effect: jQuery(this).attr("data-out-effect"),
		    delayScale: 1.5,
		    delay: 10,
		    sync: false,
		    shuffle: false,
		  }
	});

    //Skill Knoob
    jQuery('.knob').each(function () {
       var jQuerythis = jQuery(this);
       var myVal = jQuerythis.attr("rel");           
       
       jQuerythis.knob({
           'draw' : function () { 
            jQuery(this.i).val(this.cv + '%')
          }
       });
       
       jQuery({
          value: 0
       }).animate({
           value: myVal
       }, {
           duration: 2000,           
           easing: 'swing',
           step: function () {
               jQuerythis.val(Math.ceil(this.value)).trigger('change');

           }
       })

    });

    // Isotope  
    var jQuerycontainer = jQuery('#portfolio_container');   
    jQuery(window).load(function () {
        jQuerycontainer.isotope({           
            animationOptions: {
                duration: 1000,
                easing: 'linear',
                queue: false
            }
        });

        // filter items when filter link is clicked
        jQuery('#filters a').on("click", function () {
            var selector = jQuery(this).attr('data-filter');
            jQuery('#portfolio_container').isotope({
                filter: selector
            });
            return false;
        });
    });

    // Magnific popup for images
    jQuery('.popup').magnificPopup({ 
    type: 'image',
    fixedContentPos: false,
    mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out', 
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    // Magnific popup for videos
    jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //Sudoslider testimonial slider
    jQuery("#testimonial-slider").sudoSlider({
        customLink:'a.testimonialLink',
        speed: 400,
        responsive: true,
        prevNext: true, // Set this to false if you only want to show one testimonial
        prevHtml: '<a href="#" class="testimonials-arrow-prev"><i class="glyphicon glyphicon-chevron-left commom-trans"></i></a>', 
        nextHtml: '<a href="#" class="testimonials-arrow-next"><i class="glyphicon glyphicon-chevron-right commom-trans"></i></a>', 
        useCSS: true,
        continuous: true,
        updateBefore: true
    });

    //Contact Form Validation & Submition
    jQuery('.alert-success').hide();
    //form validation rules
    jQuery("#contact-form").validate({
        rules: {
            name: "required",                    
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 15
            },                    
        },
        messages: {
            name: "Please enter your name",                    
            message: {
                required: "Please provide a message",
                minlength: "Your message at least 15 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address",

            }            
        },
        submitHandler: function(form) {
            var name=jQuery('#name').val();
            jQuery('.alert-success').html('<strong>Well done '+ name +' !</strong> Your message was sent successfully.<br>Don\'t worry, we reply quick. Please expect a reply within 24 hours. Thank you!');
            jQuery('.alert-success').delay(0).slideDown(300, function () {
                jQuery('.alert-success').delay(5000).slideUp(500);
            });
            jQuery('#name').val('');
            jQuery('#email').val('');
            jQuery('#message').val('');
            //enable form submit with your php file
            //form.submit();
        }
    });

}

/* =Window Load Trigger
-------------------------------------------------------------- */
jQuery(window).load(function(){
    jQuery(window).trigger( 'hashchange' );
    jQuery(window).trigger( 'resize' );
    jQuery('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh');
    });
});

jQuery(document).ready(function(){
	initializeJS();    
    jQuery('.corner').click(function(){
        jQuery('#theme-options').slideToggle()
    });

	jQuery('#parallax-no').click(function(){
		jQuery('.parallax').each(function(){
			jQuery(this).addClass('no-parallax')
		});

		return false;
	});

	jQuery('#parallax-yes').click(function(){
		jQuery('.parallax').each(function(){
			jQuery(this).removeClass('parallax')
		});

		return false;
	});

    jQuery('#icon-no').click(function(){        
            jQuery('.navbar-nav i.glyphicon').hide();
    });

    jQuery('#icon-yes').click(function(){        
            jQuery('.navbar-nav i.glyphicon').show();
    });
	
});

//Google Flay Map UI Intigration
jQuery(document).ready(function () {
    var map;
    var lat = jQuery('#map').attr('data-lat');
    var lng = jQuery('#map').attr('data-lng');
    var centerPosition = new google.maps.LatLng(lat,lng);
    var style = [{
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.arterial",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fee379"
        }]
    }, {
        "featureType": "road.highway",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fee379"
        }]
    }, {
        "featureType": "landscape",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#f3f4f4"
        }]
    }, {
        "featureType": "water",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#7fc8ed"
        }]
    }, {}, {
        "featureType": "road",
            "elementType": "labels",
            "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#83cead"
        }]
    }, {
        "elementType": "labels",
            "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
            "weight": 0.9
        }, {
            "visibility": "off"
        }]
    }]

    var options = {
        zoom: 16,
        center: centerPosition,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({
        styles: style
    });
    
    var image = {
        url: 'http://demo.geekslabs.com/namaste/images/icons/marker.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 59)
    };
    var shadow = {
        url: 'http://maps.google.com/mapfiles/shadow50.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(-2, 36)
    };
    var marker = new google.maps.Marker({
        position: centerPosition,
        map: map,
        icon: image,
        shadow: shadow
    });
});