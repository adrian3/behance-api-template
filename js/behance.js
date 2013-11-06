var behancekey = "PutYourKeyHere";

var behanceAPI = function() {
	var key;
	var baseURL = "http://www.behance.net/v2/";

	function setKey(k) {
		key = k;	
	}
	
	function getProjects(user, cb) {
		var url = baseURL + "users/" + user + "/projects?api_key=" + key + "&callback=";
		$.get(url, {}, function(res, code) {
			cb(res.projects);
		}, "JSONP");
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