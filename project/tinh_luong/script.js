const ip = document.getElementsByClassName("iPut");
for (let i = 0; i < ip.length; i++) {
	function hiepdeep() {
		let D03 = Number(ip[00].value);
		let D04 = Number(ip[01].value);
		let D05 = Number(ip[02].value);
		let D06 = Number(ip[03].value);
		let D07 = Number(ip[04].value);
		let D08 = Number(ip[05].value);
		let D09 = Number(ip[06].value);
		let D10 = Number(ip[07].value);
		let D11 = Number(ip[08].value);
		let D12 = Number(ip[09].value);
		let D13 = Number(ip[10].value);
		let D14 = Number(ip[11].value);
		ip[10].value = D03 * 0.105;
		let tong = ((D03/208)*D04)+((D03/208)*D05)+(((D03/208)*D06)*1.5)+(((D03/208)*D07)*2)+D08+D09+D10+D11+D12-D13-D14;
		ip[12].value = tong.toLocaleString();
	};
	hiepdeep();
	document.getElementsByClassName("ctn")[0].addEventListener("click", () => {
		hiepdeep();
	});
	ip[i].addEventListener("input", () => {
		hiepdeep();
	});
}

dragElement(document.getElementById("ctn"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("title")) {
    document.getElementById("title").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}