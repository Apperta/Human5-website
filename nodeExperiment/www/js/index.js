/* script for index.html */
var countlocalcomm;
$(document).ready(function() 
{
	console.log("Document ready");
  var count = localStorage.getItem("count");
  console.log(count);
  if(count == null)
  {
   localStorage.setItem("count","0"); 
   count = localStorage.getItem("count");
  }
  console.log(count);

	$("#template").hide();
	$("#notCheckedStorage").hide();
	$("#notCheckedRange").hide();
	

    $("#loadData").click(function()
    {
      getDataLocal();
    })
    $("#loadData2").click(function()
    {
      getDataServer();
    })

   
        $("#formButton").click(function()
    {
    	// console.log("inside form button");
       
       var x = document.getElementById("local").checked;
       var y = document.getElementById("server").checked;
       var groupValue1 = document.getElementById("me").checked;
       var groupValue2 = document.getElementById("group").checked;
       var groups;
       if(groupValue1 == false)
       {
          groups = "yes";
       }
       else if (groupValue2 == false)
       { 
         groups = "no";
       }
       else
       {
          console.log("group not picked");
          $("#notCheckedRange").show();
       }


       if( x == false)
       {
        if(y == false)
        {
            $("#notCheckedStorage").show();
        }
        else
        {
            $.get("http://188.166.144.42:8080/insert?info="+$("#countrySearch").val()+"&name=" + $("#nameSearch").val() + "&value=" + groups).done(function() 
            {
				       console.log("inside post done!");
           })

        }
       }
       else
       {
        count = localStorage.getItem("count");

       	localStorage.setItem("info" + count,$("#countrySearch").val());
        localStorage.setItem("name" + count,$("#nameSearch").val());
        localStorage.setItem("groups" + count,groups);
        localStorage.setItem("count", parseInt(count)+1);
       }
    })


        

})

function getDataLocal() 
{

      $(".results-search").html("");
      var count = localStorage.getItem("count");
      for (var i = 0; i < count; i++) 
      {
          var banner = $("#template>.banner").clone(true, true);  
          console.log(localStorage.getItem("info" + i));
          console.log(localStorage.getItem("name" + i));
          console.log(localStorage.getItem("groups" + i));      
          banner.find(".infoForFill").html(localStorage.getItem("info" + i));
          banner.find("#usernameForFill").html(localStorage.getItem("name" + i));
          banner.find("#goalForFill").html(localStorage.getItem("groups" + i));
          banner.find("#sourceForFill").html("local");
          $(".results-search").append(banner);
      }

}



function getDataServer() 
{
$.get("http://188.166.144.42:8080/getAll").done(function(dataRecieved) 
  {

      $(".results-search").html("");
      for (var i = 0; i < dataRecieved.length; i++) 
      {
          var banner = $("#template>.banner").clone(true, true);                  
          banner.find(".infoForFill").html(dataRecieved[i].info);
          banner.find("#usernameForFill").html(dataRecieved[i].name);
          banner.find("#goalForFill").html(dataRecieved[i].groups);
          banner.find("#sourceForFill").html("server");
          $(".results-search").append(banner);
      }
  })
}



