window.onload = function(){
        $.get("../Nav/nav.html", function(data){
            $("#load").html(data);
        })
        $.get("../Footer/footer.html", function(data){
            $("#foot").html(data);
        })
    }