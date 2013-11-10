document.addEventListener('keydown', function(event) {
	switch (event.keyCode) {
		case 36: //Home
			if (window.partName) {
				var parentPart = partName.substr(0, partName.indexOf('.'));
				window.location.href = 'index.html#/part'+parentPart+'-subparts';
			} else {
				impress().goto(0);
			}
			break;
		case 33: //Page up
			if (window.partName) {
				impress().goto(0);
			}
			break;
		case 35: //End
			impress().goto(-1);
			event.preventDefault();
			break;
	}
});