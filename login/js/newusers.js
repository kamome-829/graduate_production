var now_gender;
var input_genders = document.querySelectorAll("input[name=gender]");

for (var element of input_genders) {
    element.addEventListener('change', function () {
        if (this.checked) {
            now_gender = this.value;
        }
    });
}

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
    }
    db.add(data);
    console.log(data);
    // var dateControl = document.querySelector('input[type="date"]');
    // dateControl.value = '2017-06-02';
    // console.log(dateControl.value); // "2017-06-01" と表示
    // console.log(dateControl.valueAsNumber); // 1496275200000 と UNIX タイムスタンプを表示
});

