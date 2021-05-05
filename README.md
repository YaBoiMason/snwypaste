# snwypaste
Almost a ripoff of NoPaste but less featured.
LZMA compresses your text, and then Base64s it and gives you a nice link. You can use a URL shortener on it to make it an actual link to distribute, *might add this built in*

Please don't scream at me for the awful JavaScript, I haven't done much web development. (I've only made APIs lol)
You can host it with literally any web server, and you can even host it on GitHub Pages because it doesn't use any database, the contents of your paste are in that URL.
This means that the entire paste is 100% client side, not even the server has access to the pastes (as they are not stored.)
You can change the theme and the default syntax highlighting mode in the index.js file, and the index.html by modifying 
`<link rel="stylesheet" href="theme/dracula.css">` and `theme: "dracula"` (for the theme), and `<script src="mode/clike/clike.js"></script>` and 
`highlight = "text/x-c++src"` (for the syntax mode). I may add to this more sometime, but I just wrote this in like a couple of hours.
This uses lzutf8, and CodeMirror.
