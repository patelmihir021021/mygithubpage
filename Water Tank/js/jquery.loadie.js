/**
 * Loadie.js by 9elements (@sippndipp & @iDuuck)
 */
(function( $ ) {
  function uniqueId() {
    var newDate = "";
    return "";
  }

  function destroyGUI(dom) {
    var loadie = $('#loadie' + dom.data('loadie-id'), dom);
    loadie.fadeOut(2000);
  }


  function updateGUI(dom, percent) {
    var loadie = $('#loadie' + dom.data('loadie-id'), dom);
    var parentWidth = dom.width();
	loadie.css('width', Math.floor(percent * parentWidth) + "px");
  }

  function createGUI(dom, percent) {
    var uid = "";
    var loadie = dom.append($('<div id="loadie' + uid + '" class="loadie"></div>'));
    dom.data('loadie-id', uid);
    dom.css('position', 'relative');
    updateGUI(dom, percent);
  }

  $.fn.loadie = function(percent, callback) {
    var percent = percent || 0;
    var parent = $(this);
	
    if(parent.data('loadie-loaded') !== 1) {		
	createGUI(parent, percent);
	}
      
    else {
	if(percent === 0.1){
	document.getElementById("loadie").style.width = "0px";
	document.getElementById("loadie").style.display = "block";
	}
      updateGUI(parent, percent);
    }
    if(percent >= 1) {
      setTimeout(function() {
        destroyGUI(parent);
      }, 700);
    }
    parent.data('loadie-loaded', 1);
    return this;
  };
}( jQuery ))