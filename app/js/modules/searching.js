/**
 * Created by anton on 27.03.16.
 */

define("modules/searching", ['jquery'], function($) {

    console.log('searching');

    var $content = $('.gallery');

    $('#search').on("keyup", function (e) {
        var reg = new RegExp(e.target.value, "i");
        $content.find("li").hide().filter(function(index, item) {
            return reg.test($(item).text());
        }).show();
    });

});