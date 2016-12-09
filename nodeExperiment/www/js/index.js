/* script for index.html */

$(document).ready(function() 
{
	$("#template").hide();
	$("#notCheckedStorage").hide();
    // var username = sessionStorage.getItem("username");
    // if (username != 0 && username != null) {
    //     $("#loginLabelUser").html(username);
    //     $("#logOutLabel").hide();
    //     $("#logInLabel").show();
    //     $("#loginLabelUserMobile").html(username);
    //     $("#logOutLabelMobile").hide();
    //     $("#logInLabel.Mobile").show();
    // } else {
    //     $("#logInLabel").hide();
    //     $("#logOutLabel").show();
    //     $("#logInLabelMobile").hide();
    //     $("#logOutLabelMobile").show();
    // }

    $.get("http://188.166.144.42:8080/getAll")
        .done(function(dataRecieved) {
            $(".results-search").html("");
            for (var i = 0; i < dataRecieved.length; i++) {
                var banner = $("#template>.banner").clone(true, true);                  
                banner.find(".commentServer").html(dataRecieved[i].adText);
                $(".results-search").append(banner);
            }
        })

})

function bindEvents(optionsLogin, optionsRegister) {

    $("#formButton").click(function()
    {
       var x = document.getElementById("local").checked;
       var y = document.getElementById("server").checked;
       if( x == false)
       {
        if(y == false)
        {
            $("#notCheckedStorage").show();
            event.preventDefault();
        }
        else
        {
           $("#searchForm").attr("action","http://188.166.144.42:8080/insert");

        }
       }
       else
       {
             $("#searchForm").attr("action","http://138.68.152.49:3000/airlines.html");
             event.preventDefault();
       }
    })
}



