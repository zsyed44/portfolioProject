//FOLLOWING SOURCE CODE WAS TAKEN AND MODIFIED FROM NIKHILIS CODE https://www.youtube.com/watch?v=1c1bhJriwqg

function redirectToAbout(event) {
	event.preventDefault(); // Prevent default link behavior
	document.body.classList.add('fade-out'); // Add fade-out class to body
	setTimeout(() => {
		window.location.href = 'about.html'; // Redirect after animation ends
	}, 2000); // Match fade-out animation duration (2s)
}

function redirectToProjects(event) {
	event.preventDefault(); // Prevent default link behavior
	document.body.classList.add('fade-out'); // Add fade-out class to body
	setTimeout(() => {
		window.location.href = 'projects.html'; // Redirect after animation ends
	}, 2000); // Match fade-out animation duration (2s)
}

function redirectToContact(event) {
	event.preventDefault(); // Prevent default link behavior
	document.body.classList.add('fade-out'); // Add fade-out class to body
	setTimeout(() => {
		window.location.href = 'contact.html'; // Redirect after animation ends
	}, 2000); // Match fade-out animation duration (2s)
}

const cursor = document.querySelector('.cursor');

window.onmousemove = function(e) {
	cursor.style.left = e.clientX + 'px';
	cursor.style.top = e.clientY + 'px';
};

// END OF SOURCE CODE