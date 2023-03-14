// window.scrollTo(0, 9999);

hiepdeptrai("textarea");

function hiepdeptrai(e) {
	if (document.querySelectorAll(e).length > 0) {
		const element = document.createElement("button");
		element.setAttribute("class", "hiepdeptrai");
		element.setAttribute("onclick", "hiepdeptrai()");
		element.innerText = "OK ALL";
		document.body.append(element);
		function hiepdeptrai() {
			console.log("hiepdeptrai");
			for (let i = 0; i < document.querySelectorAll(e).length; i++) {
				document.querySelectorAll(e)[i].innerText = "OK";
			}
		}
	}
}