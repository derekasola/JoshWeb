window.onload = function(){
        $.get("/nav.html", function(data){
            $("#load").html(data);
        })
        $.get("/footer.html", function(data){
            $("#foot").html(data);
        })
    }