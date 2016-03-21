/**
 * Created by andrii on 02.03.16.
 */

(function() {

  require.config({
   baseUrl: "./scripts",
   paths: {
     jquery: "../lib/jquery/dist/jquery.min",
     underscore: "../lib/underscore/underscore-min"
   },

   "shim": {
     "../lib/jquery/dist/jquery.min": {
      "exports": "$"
     },
     "../lib/underscore/underscore-min": {
      "exports": "_"
     }
   }
  });

  define("main", [
    "modules/gallery", 
    "modules/minion",
    "jquery"], 
    function(gallery, minion, $) {
      console.log("main.js");
      console.log($);
    }
  );


})();