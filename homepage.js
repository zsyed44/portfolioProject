//FOLLOWING SOURCE CODE WAS TAKEN AND MODIFIED FROM NIKHILIS CODE https://www.youtube.com/watch?v=1c1bhJriwqg

let cursor = document.querySelector('.cursor');

	window.onmousemove = function(e) {
	    cursor.style.left = e.clientX + 'px';
		cursor.style.top = e.clientY + 'px';
	};

// END OF SOURCE CODE