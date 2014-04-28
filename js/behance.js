var behancekey = "PutYourKeyHere";

var behanceAPI = function() {
	var key;
	var baseURL = "http://www.behance.net/v2/";
	var userProjects = new Array();
	var offsetPage = 1; // optionally you can set up which page to start
	var numPages = 2; // Set up the max of pages to retrieve from behance (Each page gets 10 itens max).

	function setKey(k) {
		key = k;	
	}
	
	function getProjects(user, cb) {		
		var url = "";
		$.each([offsetPage,numPages], function(i, numb) {

			url = baseURL + "users/" + user + "/projects?api_key=" + key + "&callback=&page="+ numb;
			
			$.get(url, {}, function(res, code) {						
				$.each(res.projects, function(i, obj) {
					userProjects.push(obj);
				});
			}, "JSONP").done(function() {
				cb(userProjects);
			});

		});
	}

	function getProjectDetails(project, cb) {
		var url = baseURL + "projects/" + project + "?api_key=" + key + "&callback=";
		$.get(url, {}, function(res, code) {
			cb(res.project);
		}, "JSONP");
	}

	return {
		setKey: setKey,
		getProjects: getProjects,
		getProjectDetails: getProjectDetails
	};
	
}();