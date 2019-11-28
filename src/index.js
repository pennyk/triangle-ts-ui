import './index.css';
import Triangle from './Triangle';


let triangleForm;


function handleSubmit (event) {
	Triangle();
}


window.onload = function () {
	triangleForm = document.getElementById('TriangleForm');
	triangleForm.addEventListener("submit", handleSubmit);
}