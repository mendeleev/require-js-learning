
define("modules/dataloading", ['jquery'], function ($) {
    console.log('dataloading');

    var $content = $('.gallery');

    function getData() {
        return $.ajax({
            url: "data/data.json",
            dataType: "json"
        });
    }

    getData().done(function (data){

        var localData = {};

        if (localStorage['minionsCounter']) {
            localData = JSON.parse(localStorage.getItem('minionsCounter'));
        }

        data.forEach( function (el) {

            if (!localData[el.nick]) {
                localData[el.nick] = {};
            }
            if (!localData[el.nick]['counter']) {
                localData[el.nick]['counter'] = el.counter;
            }

            var $spanNick = $('<span></span>').addClass('nick').html(el.nick);
            var $image = $('<img />').attr('src', 'images/'+ el.img);
            var $spanCounter = $('<span></span>').addClass('counter').attr("id", el.id).html(localData[el.nick]['counter']);
            var $li = $('<li></li>').attr('id', el.id).addClass('item').append($spanNick).append($image).append($spanCounter).appendTo($content);


            $li.click({el : $spanCounter, nick: el.nick}, function (event) {
                var localData = {};

                if (localStorage['minionsCounter']) {
                    localData = JSON.parse(localStorage['minionsCounter']);
                }

                if (localData[event.data.nick]) {
                    localData[event.data.nick]['counter']++;
                } else {
                    localData[event.data.nick] = {};
                    localData[event.data.nick]['counter'] = 0;
                }

                event.data.el.html(localData[event.data.nick]['counter']);
                localStorage['minionsCounter'] = JSON.stringify(localData);
            });


        });

        if (!localStorage['minionsCounter']) {
            var s = JSON.stringify(localData);
            localStorage['minionsCounter'] = JSON.stringify(localData);
        }

    }).fail(function (error) {
        $("<span></span>").addClass('error').html('Shit happens :-(').appendTo($content);
        $("<img />").addClass('error-img').attr('src', 'images/Minion-Error-icon.png').appendTo($content);
        console.log(error.statusText);
    });
});