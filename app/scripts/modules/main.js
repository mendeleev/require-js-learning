/**
 * Created by student on 27.03.16.
 */
define(
    "modules/main",
    [
        "modules/data",
        "modules/create_ul",
        "modules/set_on_click",
        "jquery"
    ],
    function (data, create_ul, set_on_click, $){
        console.log("main");
        create_ul(data, $);
        set_on_click($);


});