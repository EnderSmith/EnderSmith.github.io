// To make the page act like a native app on mobile,
// I'm trying this code to remove the addressbar
// courtesy of https://davidwalsh.name/-address-bar

window.addEventListener("load",function() {
	setTimeout(function () {
		window.scrollTo(0, 1);
	}, 0);
});
