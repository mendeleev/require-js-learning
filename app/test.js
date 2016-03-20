define("test", ["lib/jquery/dist/jquery.min"], function($) {
	return {
		hello: function(name) {
			return "Hello, "+name+"!";
		}
	}
});