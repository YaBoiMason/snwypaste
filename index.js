const urlParams = new URLSearchParams(window.location.search);

var highlight = "text/plain";

$('#popupBoxClose').click( function() {           
    unloadPopupBox();
});

$('#container').click( function() {
    unloadPopupBox();
});

function unloadPopupBox() {    // TO Unload the Popupbox
    $('#popup_box').fadeOut("fast");
    $("#container").css({ // this is just for style       
        "opacity": "1" 
    });
}   

function loadPopupBox() {    // To Load the Popupbox
    $('#popup_box').fadeIn("fast");
    $("#container").css({ // this is just for style
        "opacity": "0.3" 
    });        
}    

if(urlParams.get('hil'))
{
    if(urlParams.get('hil') != "text/plain")
    {
        highlight = "text/x-c++src"
    }
}

var codeMirror = CodeMirror(document.body,
    {
        lineNumbers: true,
        theme: "dracula",
        value: "ctrl+s - get link to clipboard; ctrl+l - switch between code highlight and plain text",
        lineWrapping: true,
        mode: highlight,
        smartIndent: false
    });
    
document.addEventListener("keydown", function(e) {
    if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
      e.preventDefault();
      var link = "https://" + window.location.hostname + "/snwypaste/?hil=" + highlight + "&data=" + LZUTF8.compress(codeMirror.getValue(), {"outputEncoding": "Base64"});
      var poptext =document.getElementById("popup_box_text");
      poptext.innerHTML = "<h1>"+link+"</h1>";
      loadPopupBox();
    }
  }, false);

  document.addEventListener("keydown", function(e) {
    if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 76) {
      e.preventDefault();
      if(highlight == "text/plain")
      {
        highlight = "text/x-c++src";
      } else {
        highlight = "text/plain";
      }
      codeMirror.setOption("mode", highlight);
    }
  }, false);

if(urlParams.get('data'))
{
    codeMirror.setValue(LZUTF8.decompress(urlParams.get("data"), {"inputEncoding": "Base64"}));
}