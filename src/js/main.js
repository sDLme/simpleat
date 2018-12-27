//add youtube vide

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {
    var options = {
        videoId: 'egFm6MHLvYk',

        events: {
            onReady: function () {
                console.log(`==> Video is ready :)`)
            },
        }
    };

    var videoContainer = 'about__popup-video';

    player = new YT.Player(videoContainer, options);
};

//handling video popup

$(".play-btn").click( function (e) {
    // show modal window
    $('#about-modal-id').modal('show');

    // play YT video
    if (window.player && typeof window.player.playVideo === "function") {
        window.player.playVideo();
    }
});

$('#about-modal-id').on('hidden.bs.modal', function () {
    // stop YT video
    if (window.player && typeof window.player.stopVideo === "function") {
        window.player.stopVideo();
    }
});


$(document).ready(function($){

    //cookie handling

    function SetCookie(name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = name + "=" + escape(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    var cookie = getCookie("simpleat");

    console.log(cookie);

    if (!cookie) {
        setTimeout(function () {
            $("#cookieConsent").fadeIn(200);
        }, 1000);
    }

    $("#closeCookieConsent, .cookieConsentOK").click(function () {
        $("#cookieConsent").fadeOut(200);
        SetCookie('simpleat', 'cookie', 2)
    });

    //checkbox work

    $('.checkbox-box__wrap ').click(function () {
        $('.checkbox-box__wrap').toggleClass('active')
    })

})