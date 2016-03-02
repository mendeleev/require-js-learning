/**
 * Created by andrii on 02.03.16.
 */

(function() {

  //requirejs.config({
  //  baseUrl: "./",
  //  paths: {
  //    jquery: "lib/jquery/dist/jquery.min",
  //    underscore: "lib/underscore/underscore-min"
  //  }
  //});

  define("main", [
    "lib/jquery/dist/jquery.min"], function($) {
    var data = (document.getElementById("require") || document.body).dataset,
        component = data.component || "";

    console.log($);

    requirejs([component]);

  });

})();