//init fancybox for contact form
$('a.js-contact-us').fancybox({
    // smallBtn: false,
    toolbar: false,
     btnTpl   : {
      smallBtn : '<button data-fancybox-close="" class="fancybox-button fancybox-button--close contact-form__close-btn"></button>'
    }    
});

//init Google map - https://codepen.io/Marnoto/pen/xboPmG
function initMap(){
     var center = {lat: -37.813611, lng: 144.963056};
     var map = new google.maps.Map(document.getElementById('js-contact-map'), {
        center: center, 
        scrollwheel: true,    
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: false,
        zoom: 13
    });

    var bounds = new google.maps.LatLngBounds();
    var mapOptions = { mapTypeId: 'roadmap' };

    //Array of map markers
    var markers = [
        ['Hi', -37.82266684, 144.95822668],
        ['Hello', -37.81893781, 144.96404171]     
    ];

    //Content for info windows
    var infoWindowContent = [
        ['<div class="contact-map__iw">' + 
            '<img class="contact-map__iw-img" src="img/contact/map-img-1.gif" alt="">' +                 
            '<h2 class="contact-map__iw-title">Lorem ipsum dolor sit amet.</h2>' +
            '<p class="contact-map__iw-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem?' +                                            
        '</div>'],      
        ['<div class="contact-map__iw">' +                  
            '<img class="contact-map__iw-img" src="img/contact/map-img-2.gif" alt="">' +
            '<h2 class="contact-map__iw-title">Lorem ipsum dolor sit.</h2>' +
            '<p class="contact-map__iw-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>'+                                  
        '</div>']
    ];        

    //Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    //Custom icons for markers
    var iconDefault = 'img/contact/map-icon.png';
    var iconActive = 'img/contact/map-icon-checked.png';

    //Loop through the array of markers & place each on the map 
    for( i = 0; i < markers.length; i++ ){
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: iconDefault,
            animation: google.maps.Animation.DROP,            
            title: markers[i][0]  
        });

        //Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i){
            return function(){
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
                marker.setIcon(iconActive);
            }
        })(marker, i));
    }

    //Customizing info window
    google.maps.event.addListener(infoWindow, 'domready', function(){

        //Reference to the div which receives the contents of the infowindow using jQuery
        var iwOuter = $('.gm-style-iw');
        var iwBackground = iwOuter.prev();
        var iwCloseBtn = iwOuter.next();

        //Removing the default background shadow
        iwBackground.children(':nth-child(2)').css({'display' : 'none'});

        //Removing the default white background 
        iwBackground.children(':nth-child(4)').css({'display' : 'none'});        

        //Changing box-shadow for the window tail
        iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': '0px 0px 2px 0px rgba(0,0,0,0.75)', 'z-index' : '1'});

        //Changing close button position
        iwCloseBtn.css({right: '40px', top: '29px'});        
    });

    // Adding custom map style
    var styles = [
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "2"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-28"
            },
            {
                "lightness": "-10"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-1"
            },
            {
                "lightness": "-12"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text",
        "stylers": [
            {
                "lightness": "-31"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-74"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "lightness": "65"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "-15"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "-9"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "-14"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": "-35"
            },
            {
                "gamma": "1"
            },
            {
                "weight": "1.39"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-19"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "lightness": "46"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "lightness": "-13"
            },
            {
                "weight": "1.23"
            },
            {
                "invert_lightness": true
            },
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ef4a82"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#adadad"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

map.setOptions({styles: styles}); 
}