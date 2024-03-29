/**
 * Triangle functions
 *
 * The triangle functions help determine the type a triangle is,
 * based on side lengths provided by the user.
 */

import formErrorTemplate from "./templates/form-error-template.js";

const messages = {
	equilateral: "The triangle is Equilateral.",
	isosceles: "The triangle is Isosceles.",
	scalene: "The triangle is Scalene.",
	error: "Error: not a valid triangle.",
	errorLength: "The side that is longest must not be larger than the two smaller sides."
};

let triangleResults;


/**
 * init function
 * Initial set up
 * 
 * Note: Run this function once the window has loaded.
 */
function init () {
	let inputs;
	let triangleForm = document.getElementById("TriangleForm");
	triangleForm.addEventListener("submit", Triangle);
	triangleResults = document.getElementById("TriangleResults");
	inputs = triangleForm.querySelectorAll("input");
	inputs.forEach(function (input, index, array) {
		inputs[index].onblur = triangleInputBlur;
	});
}


/**
 * triangleInputBlur
 * Actions to take once a blur event has been detected on a side input field
 * 
 * @param {*} event Event triggered by interaction with a side input field
 * @return {bool} Status of error display
 */
function triangleInputBlur (event) {
	let errorNotification;
	let id;
	if (!validateSide(event.target.value)) {
		// when invalid, ensure error notification is shown
		displayValidationMessage(event.target);
		return true;
	}

	// in case an error has been corrected,
	// ensure error notification is hidden
	if (!event.target.id) {
		return false;
	}
	id = "#" + event.target.id + "fieldset";
	errorNotification = document.querySelector(id + " dl");
	if (!errorNotification) {
		return false;
	}
	errorNotification.style.display = "none";

	return true;
}


/**
 * Triangle
 * Uses side input values to process and display results
 */
function Triangle () {
	let type;
	let result;
	let elX = document.getElementById("sideX");
	let elY = document.getElementById("sideY");
	let elZ = document.getElementById("sideZ");
	let x = elX.value;
	let y = elY.value;
	let z = elZ.value;

	result = processForm(elX, elY, elZ);

	if (!result.status) {
		// display 'not a triangle' error message
		displayResults(messages.error + ' ' + messages.errorLength);
		if (result.element) {
			displayValidationMessage(result.element);
		}
	}
	else {
		type = getType(x, y, z);
		// display triangle type in results area
		displayResults(messages[type]);
	}

}


/**
 * displayValidationMessage
 * Function for displaying validation message
 * @param {*} element Element needing form validation message
 */
function displayValidationMessage (element) {
	let target;
	let errorNotification;
	let range;
	if (!element) {
		// skip when element not provided
		return false;
	}
	// prepare form error to display with relevant field
	target = element.parentElement;
	errorNotification = target.querySelector("dl");
	if(target) {
		range = document.createRange();
		range.selectNode(target);
		if (!errorNotification) {
			// display error notification
			errorNotification = range.createContextualFragment(formErrorTemplate);
			target.appendChild(errorNotification);
		}
		else {
			// show hidden error notification
			errorNotification.style.display = "block";
		}
	}
	return true;
}


/**
 * displayResults
 * Function for displaying results
 * @param {*} message Message providing triangle type
 */
function displayResults (message) {
	triangleResults = (triangleResults) ? triangleResults : document.getElementById("TriangleResults");
	triangleResults.innerHTML = "<p>" + message + "</p>";
	// ensure the updated result message is visible
	triangleResults.scrollIntoView();
}


/**
 * getType
 * Calculates type based on provided side lengths (x, y, z)
 * @param {*} x Number representing length of side X
 * @param {*} y Number representing length of side Y
 * @param {*} z Number representing length of side Z
 * @returns {string} Type of triangle
 */
function getType (x, y, z) {
	let type;

	// Use maths to compare instead of comparison operators
	// otherwise numbers like 1 vs 1.0 vs 1.00 will get unexpected results
	let xy = !Math.abs(x - y);
	let yz = !Math.abs(y - z);
	let xz = !Math.abs(x - z);

	if (xy && yz && xz) {
		// equilateral (3 matching sides)
		type = "equilateral";
	}
	else if (xy || yz || xz) {
		// isosceles (2 matching sides)
		type = "isosceles";
	}
	else {
		// scalene (1 side)
		type = "scalene";
	}

	return type;
}


/**
 * processForm
 * Validates side input values
 * @param {*} elX Element containing Side 'X' value
 * @param {*} elY Element containing Side 'Y' value
 * @param {*} elZ Element containing Side 'Z' value
 * @return {Object} JSON containing element (opt), status and message (opt)
 */
function processForm (elX, elY, elZ) {
	let max;
	let smallSides;
	let x = validateSide(elX.value);
	let y = validateSide(elY.value);
	let z = validateSide(elZ.value);

	// check side values are valid
	if (!x) {
		return {
			element: elX,
			status: false,
			message: messages.error
		};
	}
	if (!y) {
		return {
			element: elY,
			status: false,
			message: messages.error
		};
	}
	if (!z) {
		return {
			element: elZ,
			status: false,
			message: messages.error
		};
	}

	// check two smallest sides equal greater than largest side
	max = Math.max(x, y, z);
	// whichever side is largest, it is removed from
	// the smallSides total so a comparison can be made
	smallSides = x + y + z - max;
	if (smallSides <= max) {
		// Note: this error doesn't belong to a specific field
		// so error message will be displayed in results area
		return {
			status: false,
			message: messages.error
		};
	}

	return {
		status: true
	};
}


/**
 * validateSide
 * Validates triangle side length
 * @param {string} length Length of side being validated
 * @returns {bool|Number} When invalid: false, when valid: length
 */
function validateSide (length) {
	let l = Number.parseFloat(length);

	// reject input that is not a valid number
	if (Number.isNaN(l)) {
		return false;
	}

	// reject numbers that are zero or lower
	if(l <= 0) {
		return false;
	}

	return l;
}

// Note: do not use module.exports
// Even though module.exports works for tests, it breaks functionality in ES6
export {
	getType,
	init,
	processForm,
	validateSide
};
export default Triangle;
