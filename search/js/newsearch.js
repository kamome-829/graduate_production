var userid = sessionStorage.getItem('userid');
let element = document.getElementById('selectbox');
console.log(userid);
console.log(element.value);

document.getElementById("submit").onclick = function () {
    sessionStorage.setItem('select', element.value);
    window.location.href = 'result.html';
};