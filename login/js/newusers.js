var now_gender;
var input_genders = document.querySelectorAll("input[name=gender]");

for (var element of input_genders) {
    element.addEventListener('change', function () {
        if (this.checked) {
            now_gender = this.value;
        }
    });
}

var user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function (user) {
    var userid = user.uid;
    sessionStorage.setItem('userid', userid);
    if (user) {
        console.log("a");
        console.log(userid);
    } else {
        console.log("b");
    }
});

$('.btn-open').on('click', function () {
    const db = firebase.firestore().collection('users');
    var today = new Date();
    today = today.getTime();
    var setday = document.querySelector('input[type="date"]');
    var usesetday = setday.valueAsNumber;
    var day = today - usesetday;
    day = Math.floor(day / (365 * 24 * 60 * 60 * 1000));
    const data = {
        name: $('#name').val(), // inputの入力値
        gender: now_gender,
        jobs: $('#job').val(),
        age: day,
        area: $('#area').val(),
        usersID: sessionStorage.getItem('userid'),
    }
    db.add(data);
    console.log(data);
    setTimeout(function () {
        location.href = "finish.html";
    }, 1000);
});