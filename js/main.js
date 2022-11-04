function randompickerbtn() {
	const hexString = "0123456789ABCDEF";
	let hexCode = "#";
	let index = 0;
	for (let i = 0; i < 6; i = i + 1) {
		index = Math.floor(Math.random() * 16);
		hexCode = hexCode + hexString[index];
	}
	document.querySelector("#randomValuePara").textContent = hexCode;
	let background = document.querySelector("#randomPicker");
	background.style.backgroundColor = hexCode;
}

function hexFindbtn() {
	let color = document.querySelector("#hexInput").value;
	if (color[0] === "#") {
		document.querySelector("#color-box").style.backgroundColor = color;
	} else {
		color = "#" + color;
		document.querySelector("#color-box").style.backgroundColor = color;
	}
}

function RGBFindbtn() {
	let r = document.getElementById("RInput").value;
	let g = document.getElementById("GInput").value;
	let b = document.getElementById("BInput").value;
	color = `rgb(${r},${g},${b})`;
	document.querySelector("#rgb-color-box").style.backgroundColor = color;
}

function RangeSelector() {
	let r = document.getElementById("RrInput").value;
	let g = document.getElementById("GrInput").value;
	let b = document.getElementById("BrInput").value;
	color = `rgb(${r},${g},${b})`;
	document.querySelector("#range-color-box").style.backgroundColor = color;
}

// hex to rgb converter

// String.prototype.convertToRGB = function (hexColor) {
// 	const hexString = "0123456789ABCDEF";
// 	let rValue = 0;
// 	let gValue = 0;
// 	let bValue = 0;
// 	let value = 0;
// 	if (hexColor[0] === "#") {
// 		for (let i = 1; i < 7; i = i + 2) {
// 			value =
// 				hexString.indexOf(hexColor[i]) * 16 +
// 				hexString.indexOf(hexColor[i + 1]);
// 			if (i == 1) {
// 				rValue = value;
// 			} else if (i == 3) {
// 				gValue = value;
// 			} else if (i == 5) {
// 				bValue = value;
// 			}
// 		}
// 	} else {
// 		for (let i = 0; i < 6; i = i + 2) {
// 			value = hexColor[i] * 16 + hexColor[i + 1];
// 			if (i == 0) {
// 				rValue = value;
// 			} else if (i == 2) {
// 				gValue = value;
// 			} else if (i == 4) {
// 				bValue = value;
// 			}
// 		}
// 	}
// 	return `rgb(${rValue},${gValue},${bValue})`;
// };

function hexConvbtn() {
	let hexColor = document.querySelector("#hexCInp").value;
	hexColor = hexColor.toUpperCase();
	if (hexColor.length == 6 || hexColor.length == 7) {
		const hexString = "0123456789ABCDEF";
		let rValue = 0;
		let gValue = 0;
		let bValue = 0;
		let value = 0;
		let rgbColor;
		if (hexColor[0] === "#") {
			for (let i = 1; i < 7; i = i + 2) {
				value =
					hexString.indexOf(hexColor[i]) * 16 +
					hexString.indexOf(hexColor[i + 1]);
				if (i == 1) {
					rValue = value;
				} else if (i == 3) {
					gValue = value;
				} else if (i == 5) {
					bValue = value;
				}
			}
		} else {
			for (let i = 0; i < 6; i = i + 2) {
				value =
					hexString.indexOf(hexColor[i]) * 16 +
					hexString.indexOf(hexColor[i + 1]);
				if (i == 0) {
					rValue = value;
				} else if (i == 2) {
					gValue = value;
				} else if (i == 4) {
					bValue = value;
				}
			}
		}
		rgbColor = `rgb(${rValue},${gValue},${bValue})`;
		document.querySelector("#hexCOut").textContent = rgbColor;
		document.querySelector(".hexConv-out-box").style.backgroundColor = rgbColor;
	} else {
		document.querySelector("#hexCOut").textContent = "Invalid Input";
		document.querySelector(".hexConv-out-box").style.backgroundColor = "#000";
	}
}

function rgbConvbtn() {
	const hexCode = "0123456789ABCDEF";
	let hexValue = "#";
	let value = [];
	let rValue = Number(document.querySelector("#RCInput").value);
	let gValue = Number(document.querySelector("#GCInput").value);
	let bValue = Number(document.querySelector("#BCInput").value);
	let loopVar = 2;
	while (loopVar) {
		value.push(hexCode[rValue % 16]);
		rValue = Math.floor(rValue / 16);
		loopVar = loopVar - 1;
	}
	hexValue = hexValue + value.pop();
	hexValue = hexValue + value.pop();
	loopVar = 2;
	while (loopVar) {
		value.push(hexCode[gValue % 16]);
		gValue = Math.floor(gValue / 16);
		loopVar = loopVar - 1;
	}
	hexValue = hexValue + value.pop();
	hexValue = hexValue + value.pop();
	loopVar = 2;
	while (loopVar) {
		value.push(hexCode[bValue % 16]);
		bValue = Math.floor(bValue / 16);
		loopVar = loopVar - 1;
	}
	hexValue = hexValue + value.pop();
	hexValue = hexValue + value.pop();
	console.log(hexValue);
	document.querySelector("#rgbCOut").textContent = hexValue;
	document.querySelector(".rgbConv-out-box").style.backgroundColor = hexValue;
}
