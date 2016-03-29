/**
 * Created by student on 27.03.16.
 */
(function() {

    require.config({
        urlArgs: "v=0.01",
        paths: {
            jquery: "../lib/jquery/dist/jquery.min"
//            underscore: "../lib/underscore/underscore-min"
        }
    });

    define(['modules/main']);


})();

