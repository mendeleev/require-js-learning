/**
 * Created by anton on 27.03.16.
 */
define("modules/counterclear", ['jquery'], function($) {

    console.log('counterclear');

    var $content = $('.gallery');

    $(".clearCounters").click(function () {
        localStorage.removeItem('minionsCounter');
        $content.find('.counter').html("0");
    });

});