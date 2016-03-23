/**
 * Created by andrii on 02.03.16.
 */

(function() {

  require.config({
    urlArgs: "v=0.01",
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


  define(["modules/main"]);


})();