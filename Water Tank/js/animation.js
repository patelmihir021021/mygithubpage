$(document).ready(function(){
    $("#advancedtitle").click(function(){
        $("#advancedtable").toggle(200);
    });
});$(document).ready(function(){
    $("#DrawingDiv").click(function(){
        $("#DrawingData").toggle(200);
    });
});

$(document).ready(function (){
    $("#Consoletitle").on("click", function (){
    	if ($("#consolediv").height() == 200) {
			$("#consolediv").animate(
               {height: "20px"});
				
			   document.getElementById("page").style.height  = (window.innerHeight - 70) + "px";
			   $("#consolediv").animate({ scrollTop: $(document).height() }, "slow");
           }
        else if ($("#consolediv").height() == 20) {
           $("#consolediv").animate({height: "200px"});
		   var hEight = window.innerHeight - 250;
		   $("#page").animate({height : hEight + 'px'});
		   hEight = document.getElementById("page").scrollHeight;
			 $("#page").animate({ scrollTop: $(document).height() }, "slow");
			
           }
        });
    });

