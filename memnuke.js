jQuery(document).ready(function($){
    jQuery("#nukeButton").on("click", nuke);
    renderMonitoring();
}); 

function renderMonitoring() {
    var memoryInfo = window.performance.memory;
    if(memoryInfo == undefined) {
        jQuery("#memory_manager").hide();
    } else {
        var usedMb = Math.floor(memoryInfo.usedJSHeapSize/(1024*1000));
        var totalMb = Math.floor(memoryInfo.jsHeapSizeLimit/(1024*1000));
        jQuery("#memory_manager").html("Used : " + usedMb  + "MB  / Total : " + totalMb + "MB");
    }
}

function nuke() {
    try {
        document.getElementById("nukeButton").innerHTML = "Nuking...";
        var megabytes = document.getElementById("mega").value;
        console.log("KABOOM");
        var killerVariable = 22000*megabytes;
        window.x = [...new Array(killerVariable).fill(Number(0)).map(_ => Math.random())];
        renderMonitoring();
        document.getElementById("nukeButton").innerHTML = "Nuke";
        alert("Memory allocated, and you are still alive. Congratulations!");
    } catch(err) {
        alert("You've killed it. You should feel bad.");
        document.getElementById("nukeButton").innerHTML = "Nuke";
        renderMonitoring();
    }
}

