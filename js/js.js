document.getElementById("toogle").addEvenListener("click", function(event){
	event.preventDefault();
	document.getElementById("nav-header").classList.toogle("open");
	document.getElementById("body").classList.toogle("overflow-hidden");
});
