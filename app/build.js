({
    baseUrl: "./",
    // generateSourceMaps: true,
    // preserveLicenseComments:false,
    appDir: "./scripts",
    dir: "./build",
    modules: [
    	{
    		name: "main",
    		exclude: ["jquery"]
    	}
    ],
    paths: {
     	jquery: "../lib/jquery/dist/jquery.min",
     	underscore: "../lib/underscore/underscore-min"
   	},
    wrapShim: false
})