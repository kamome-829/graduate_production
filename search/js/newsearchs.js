var userid = sessionStorage.getItem('userid');
let element = document.getElementById('selectbox');
let element_age = document.getElementById('selectbox_age');
console.log("userid");
console.log(element.value);


document.getElementById("submit").onclick = function () {
    sessionStorage.setItem('select', element.value);
    sessionStorage.setItem('select_age', element_age.value);
    window.location.href = 'result.html';
};