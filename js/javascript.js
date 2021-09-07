




//--------------------------------------------------------------
var hilightables = document.getElementsByClassName("hilightable");

for (var i = 0; i < hilightables.length; i++) {

    hilightables[i].addEventListener("focus", function() {
		console.log("hey1");
        this.classList.toggle('highlight');
    });
    hilightables[i].addEventListener("blur", function() {
				console.log("hey2");

        this.classList.toggle('highlight');
    });
}
//--------------------------------------------------------------


//--------------------------------------------------------------
var requireds = document.getElementsByClassName("required");

for (var i = 0; i < requireds.length; i++) {
requireds[i].addEventListener("focus", function() {
		console.log("hey1");
    });    requireds[i].addEventListener("keyup", function() {
        this.classList.remove("error");
    });

}
//--------------------------------------------------------------


//--------------------------------------------------------------
document.getElementById("sub").onclick = function(e) {
var requireds = document.getElementsByClassName("required");
	console.log("heyyyyyyy");
    for (i = 0; i < requireds.length; i++) {

        var str = requireds[i].value;
		console.log(">>>" + str);
        if (!str || 0 === str.length) {
            e.preventDefault();
            requireds[i].classList.add("error");
					console.log("hey3");

        } else {
            requireds[i].classList.remove("error");
					console.log("hey4");

        }
    }
}
//--------------------------------------------------------------
