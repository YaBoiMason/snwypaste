const urlParams = new URLSearchParams(window.location.search);

var highlight = "text/plain";

if(urlParams.get('hil'))
{
    if(urlParams.get('hil') != "text/plain")
    {
        highlight = "text/x-c++src"
    }
}

function generateLink()
{
    var link = window.location.hostname + "/snwypaste/?hil=" + highlight + "&data=" + LZUTF8.compress(codeMirror.getValue(), {"outputEncoding": "Base64"});
    alert(link);
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
      generateLink();
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
