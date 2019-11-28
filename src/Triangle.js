/**
 * Triangle functions
 */
const messages = {
	equilateral: "The triangle is Equilateral.",
	isosceles: "The triangle is Isosceles.",
	scalene: "The triangle is Scalene.",
	error: "Error: not a valid triangle."
};

function Triangle () {
	let type;
	let result;
	let elX = document.getElementById("sideX");
	let elY = document.getElementById("sideY");
	let elZ = document.getElementById("sideZ");
	let triangleResults = document.getElementById('TriangleResults');
	console.log('xyz: ', elX.value, elY.value, elZ.value);
	let x = elX.value;
	let y = elY.value;
	let z = elZ.value;

	result = processForm(elX, elY, elZ);

	console.log('result', result);
	if (!result.status) {
		// display 'not a triangle' error message
		triangleResults.innerHTML = messages.error;

		//todo: form error for fields
	}
	else {
		type = getType(x, y, z);
		// display triangle type in results area
		triangleResults.innerHTML = messages[type];
	}

}


function getType (x, y, z) {
	let type;

	if ((x === y)||(y === z)) {
		if (x === z) {
			// equilateral (3x)
			type = 'equilateral';
		}
		else {
			// isosceles (2x)
			type = 'isosceles';
		}
	}
	else if (x === z) {
		// isosceles (2x)
		type = 'isosceles';
	}
	else {
		// scalene (1x)
		type = 'scalene';
	}

	return type;
}


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
		return {
			status: false,
			message: messages.error
		};
	}

	return {
		status: true
	};
}


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


module.exports = {
	getType,
	processForm,
	validateSide
}
export default Triangle;
