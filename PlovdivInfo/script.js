document.getElementById("map").style.display = "none";
document.getElementById("location").style.display = "none";
document.getElementById("history").style.display = "none";
document.getElementById("images").style.display = "none";

function sh() {
	var d = document.getElementById('location');
	if (d.style.display === 'none') {
			d.style.display = 'block';
	} else {
		d.style.display = 'none';
	}
}
function map() {
	var m = document.getElementById('map');
	if (m.style.display === 'none') {
			m.style.display = 'block';
	} else {
		m.style.display = 'none';
	}
}
function history() {
	var h = document.getElementById('history');
	if (h.style.display === 'none') {
			h.style.display = 'block';
	} else {
		h.style.display = 'none';
	}
}
function imagesClick(){
		var s = document.getElementById('images');
	if (s.style.display === 'none') {
			s.style.display = 'block';
	} else {
		s.style.display = 'none';
	}
}