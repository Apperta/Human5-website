/* script for index.html */

$(document).ready(function() 
{
	console.log("Document ready");
	$("#template").hide();
	$("#notCheckedStorage").hide();
	$("#notCheckedRange").hide();
	
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
            console.log(dataRecieved);
            for (var i = 0; i < dataRecieved.length; i++) {
                var banner = $("#template>.banner").clone(true, true);                  
                banner.find(".commentServer").html(dataRecieved[i].adText);
                $(".results-search").append(banner);
            }
        })


        $("#formButton").click(function()
    {
    	// console.log("inside form button");
          
	       var obj = 
	       {
	       	info: $("#countrySearch").val(),
	       	name: $("#nameSearch").val(),
	       	groups:""
	       }
         console.log($("#nameSearch").val());
         console.log(obj);
       
       var x = document.getElementById("local").checked;
       var y = document.getElementById("server").checked;
       if( x == false)
       {
        if(y == false)
        {
            $("#notCheckedStorage").show();
        }
        else
        {
            $.get("http://138.68.152.49:3000/airlines/insertRating", obj).done(function() 
            {
				        console.log("inside post done!");
              //  $.get("http://188.166.144.42:8080/getAll").done(function(dataRecieved) 
              //   {
			           //  $(".results-search").html("");
			           //  console.log(dataRecieved);
			           //  for (var i = 0; i < dataRecieved.length; i++) 
			           //  {
			           //      var banner = $("#template>.banner").clone(true, true);                  
			           //      banner.find(".commentServer").html(dataRecieved[i].adText);
			           //      $(".results-search").append(banner);
			           //  }
	             // })
           })

        }
       }
       else
       {
       	alert("you choosed locally");
       }
    })


        

})

function bindEvents() {


}



