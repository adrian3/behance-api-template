function loadProject(projectID) {
    behanceAPI.getProjectDetails(projectID, function(loadModules) {

        // console.dir(loadModules);
        var moduleHTML = "";

        var moduleTitle = "";
        moduleTitle += "<h1>" + loadModules.name + "</h1>";
        $("#myModalLabel").html(moduleTitle);

        var moduleDescription = "";
        moduleDescription += "<p>" + loadModules.description + "</p>";
        $(".modal-description").html(moduleDescription);

        for(var i=0; i<loadModules.modules.length; i++) {
            if(loadModules.modules[i].src!=undefined) {
                moduleHTML += "<p><img class='img-responsive' src='" + loadModules.modules[i].src + "'>";
                moduleHTML += "</p>";
            }
        }        
        $(".modal-work").html(moduleHTML);
        $('#myModal').modal('show');
    });
}

$(document).ready(function() {

    // Set behance api key
    behanceAPI.setKey(behancekey);
    
    // Get projects
    behanceAPI.getProjects("adrian3", function(projectlist) {

        //console.dir(projectlist);
        
        var projectHTML = "";
        
        for(var i=0; i<projectlist.length; i++) {
            var project = projectlist[i];
            
            if (project.covers[404] == undefined) {
                imgSrc = project.covers[202];
            } 
            else {                
                imgSrc = project.covers[404];
            }
            
            projectHTML += "<a href='#' class='col-lg-3 col-md-3 col-sm-4 col-xs-6' title='"+ project.name +"' onclick='loadProject(" + project.id + ")'><img class='coverimage' src='" + imgSrc + "' class='col-lg-3'></a>";
        }

        projectHTML += "<div class='clearfix'></div>";
        
        $("#projects").html(projectHTML);
    });
}); //document.ready