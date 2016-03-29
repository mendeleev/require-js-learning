/**
 * Created by student on 27.03.16.
 */
({
    baseUrl: "./",
    // generateSourceMaps: true,
    // preserveLicenseComments:false,
    appDir: "./scripts",
    dir: "./build",
    paths: {
        jquery: "../lib/jquery/dist/jquery.min",
        underscore: "../lib/underscore/underscore-min"
    },
    wrapShim: true,
    mainConfigFile: 'scripts/app.js',
    modules: [
        {
            name: "modules/main",
            exclude: ["jquery"]
        }
    ]
})
