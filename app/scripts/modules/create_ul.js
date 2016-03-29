/**
 * Created by student on 27.03.16.
 */

define("modules/create_ul",["modules/data"],
    function () {
        console.log("create_ul");
    return function (data, $) {
        $('body').add('ul').attr("class", "gallery");
        data.forEach(function (item, i, arr) {
            $('ul').append(
                $('<li>').attr('class', 'item').append(
                    $('<img>').attr('src', "images/" + item.image).attr('alt', item.title)
                ).append(
                    $('<span>').attr('class', 'counter').append(item.count))
            )
        });
    }
});