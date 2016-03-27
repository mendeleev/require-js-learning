(function () {

  require.config({
    /**
     * цього вказувати в принципі не обов’язково, а в даному випадку навіть і шкідливо
     * бо модулі завантажуються не звідти, звідки потрібно
     */
    //baseUrl: 'js',
    paths: {
      /**
       * ось тут зазвичай потрібно вказувати лише бібліотеки, які підключаються
       * просто вони використовуються часто і набагато зручніше підключати їх через аліас
       * ніж прописувати повний шлях
       */
      //main: "modules/main",
      //sorting: "modules/sorting",
      //dataloading: "modules/dataloadng",
      //searching: "modules/searching",
      //counterclear: "modules/counterclear",

      /**
       * виніс за межі. Тепер збірка буде відбуватись набагато швидше
       */
      jquery: "../lib/jquery/dist/jquery.min"
    },

    /**
     * ось ця штука потрібна в тому випадку, якщо бібліотеки будуть
     * підключатись використовуючи відносний шлях до них
     */
    "shim": {
      "../lib/jquery/dist/jquery.min": {
        "exports": "$"
      }
    }
  });

  define("app", ["modules/main"]);

})();