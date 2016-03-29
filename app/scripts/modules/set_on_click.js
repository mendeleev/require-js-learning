/**
 * Created by student on 27.03.16.
 */

define("modules/set_on_click",[
        "modules/data",
        "modules/create_ul"],
    function () {
        console.log("set_on_click");
    return function ($) {
        $('body').on('click', 'li', function () {
            var element = this.querySelector('span');
            element.innerText = Number(element.innerText) + 1;
        });
    }
});