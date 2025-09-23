document.documentElement.classList.toggle( "dark", localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),);

function lamp(params) {
	lamp = document.createElement("img")
	lamp.src="/static/images/lamp.png"

	lamp.className="top-[20%] left-[80%] z-10 w-7 cursor-grab fixed hidden dark:block"

	follower = document.createElement("div")
	follower.className="top-[20%] left-[80%] bg-none fixed dark:bg-yellow-100 w-30 h-30 blur-2xl -z-10 rounded-full animate-lamp-light"

	follower.style.transform = "translate(-50%, -50%)";
	lamp.style.transform = "translate(-50%, -50%)";

	document.body.appendChild(follower)
	document.body.appendChild(lamp)

	dragElement(lamp)

	function dragElement(elmnt) {
		let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		elmnt.onmousedown = dragMouseDown;

		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			elmnt.classList.add("cursor-grabbing")
			elmnt.classList.remove("cursor-grab")
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

			follower.style.top =  (elmnt.offsetTop - pos2) + "px";
			follower.style.left = (elmnt.offsetLeft - pos1) + "px";

		}

		function closeDragElement() {
			document.onmouseup = null;
			document.onmousemove = null;
			elmnt.classList.remove("cursor-grabbing")
			elmnt.classList.add("cursor-grab")
//
		}
	}

}

window.isDesktop = window.matchMedia("(min-width: 768px)").matches;

if(window.isDesktop) {
    lamp();
}
