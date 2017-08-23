function contact() {
    var x = document.getElementById('call');
	var y = document.getElementById('email');
    if (x.style.display === 'none') {
        x.style.display = 'block';
		y.style.display = 'block';
    } else {
        x.style.display = 'none';
		y.style.display = 'none';
    }
}

function project() {
    var x = document.getElementById('sm');
	var y = document.getElementById('cc');
	var z = document.getElementById('wtc');
    if (x.style.display === 'none') {
        x.style.display = 'block';
		y.style.display = 'block';
		z.style.display = 'block';
    } else {
        x.style.display = 'none';
		y.style.display = 'none';
		z.style.display = 'none';
    }
}
function contact() {
    var x = document.getElementById('call');
	var y = document.getElementById('email');
    if (x.style.display === 'none') {
        x.style.display = 'block';
		y.style.display = 'block';
    } else {
        x.style.display = 'none';
		y.style.display = 'none';
    }
}

    var accessToken = "18b73cf8fa924fe7aaf8d9700005c9ee",
      baseUrl = "https://api.api.ai/v1/",
      $speechInput,
      $recBtn,
      recognition,
      messageRecording = "Recording...",
      messageCouldntHear = "I couldn't hear you!",
      messageInternalError = "Internal server error",
      messageSorry = "I don't have the answer to that yet.";
    $(document).ready(function() {
      $speechInput = $("#speech");
      $recBtn = $("#rec");
      $speechInput.keypress(function(event) {
        if (event.which == 13) {
          event.preventDefault();
          send();
        }
      });
      $recBtn.on("click", function(event) {
        switchRecognition();
      });
      $(".debug__btn").on("click", function() {
        $(this).next().toggleClass("is-active");
        return false;
      });
    });
    function startRecognition() {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
          recognition.interimResults = false;
      recognition.onstart = function(event) {
        respond(messageRecording);
        updateRec();
      };
      recognition.onresult = function(event) {
        recognition.onend = null;        
        var text = "";
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
         }
          setInput(text);
        stopRecognition();
      };
      recognition.onend = function() {
        respond(messageCouldntHear);
        stopRecognition();
      };
      recognition.lang = "en-US";
      recognition.start();
    }
    function stopRecognition() {
      if (recognition) {
        recognition.stop();
        recognition = null;
      }
      updateRec();
    }
    function switchRecognition() {
      if (recognition) {
        stopRecognition();
      } else {
        startRecognition();
      }
    }
    function setInput(text) {
      $speechInput.val(text);
      send();
    }
    function updateRec() {
      $recBtn.text(recognition ? "Stop" : "Speak");
    }
    function send() {
      var text = $speechInput.val();
      $.ajax({
        type: "POST",
        url: baseUrl + "query",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
          "Authorization": "Bearer " + accessToken
        },
        data: JSON.stringify({query: text, lang: "en", sessionId: "yaydevdiner"}),
        success: function(data) {
          prepareResponse(data);
        },
        error: function() {
          respond(messageInternalError);
        }
      });
    }
    function prepareResponse(val) {
      var debugJSON = JSON.stringify(val, undefined, 2),
        spokenResponse = val.result.speech;

      respond(spokenResponse);
      debugRespond(debugJSON);
    }
    function debugRespond(val) {
      $("#response").text(val);
    }
    function respond(val) {
      if (val == "") {
        val = messageSorry;
      }
      if (val !== messageRecording) {
        var msg = new SpeechSynthesisUtterance();
        msg.voiceURI = "native";
        msg.text = val;
        msg.lang = "en-US";
        window.speechSynthesis.speak(msg);
      }
      $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(val);
    }