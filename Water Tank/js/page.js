function onReady(callback) {
			var intervalID = window.setInterval(checkReady, 1000);

			function checkReady() 
				{
					if (document.getElementsByTagName('body')[0] !== undefined) 
					{
						window.clearInterval(intervalID);
						callback.call(this);
					}
				}
	}

	function show(id, value) {
		document.getElementById(id).style.display = value ? 'block' : 'none';
	}

	onReady(function () {
		show('page', true);
		show('ConSoleBox', true);
		 document.getElementById("page").style.height  = (window.innerHeight - 250) + "px";
		show('loading', false);
		show('loadingbox', false);
		if(document.getElementById("rbtn1").checked===true){volshow();}else{dimshow();}
		
		//Html console input and output variables

		
		function key(){
		document.getElementById("ConsoleInput").addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode == 13) {if(document.getElementById("ConsoleInput").value != ""){ConsoleIN();}}
		if (event.keyCode == 38) {ShowConSoleLog("Up");}
		if (event.keyCode == 40) {ShowConSoleLog("Down");}
		});
		}
		key();
	});	
	
	