var userid = sessionStorage.getItem('userid');
var select = sessionStorage.getItem('select');
var select_age = sessionStorage.getItem('select_age');
sessionStorage.setItem('select', "");
sessionStorage.setItem('select_age', "");
console.log(select_age);
let push_count = 0;

const db = firebase.firestore().collection('shop');
db.onSnapshot(function (querySnapshot) {
    const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
    querySnapshot.docs.forEach(function (doc) {
        const data = {
            id: doc.id,
            data: doc.data(),
        }
        dataArray.push(data);
    });
    const img = [];
    const name = [];
    const middle_area = [];
    const usersID = [];
    const tir_array = [];
    const much_array = [];
    let count = 0;
    dataArray.forEach(function (data) {
        var tir = Math.floor(Math.random() * 6);
        var much = Math.floor(Math.random() * 101);
        tir_array.push(tir);
        much_array.push(much);
        img.push(`${data.data.photo}`);
        name.push(`${data.data.name}`);
        middle_area.push(`${data.data.middle_area}`);
        usersID.push(`${data.data.usersID}`);
        //let table = document.getElementById('targetTable');
        //let newRow = table.insertRow();
    })
    for (let i = 0; i < much_array.length - 1; i++) {
        for (let j = much_array.length - 1; j >= i + 1; j--) {   //　右から左に操作
            if (much_array[j] > much_array[j - 1]) {
                let keep_much = much_array[j];
                much_array[j] = much_array[j - 1];
                much_array[j - 1] = keep_much;
                let keep_tir = tir_array[j];
                tir_array[j] = tir_array[j - 1];
                tir_array[j - 1] = keep_tir;
                let keep_img = img[j];
                img[j] = img[j - 1];
                img[j - 1] = keep_img;
                let keep_name = name[j];
                name[j] = name[j - 1];
                name[j - 1] = keep_name;
                let keep_middle_area = middle_area[j];
                middle_area[j] = middle_area[j - 1];
                middle_area[j - 1] = keep_middle_area;
                let keep_usersID = usersID[j];
                usersID[j] = usersID[j - 1];
                usersID[j - 1] = keep_usersID;
            }
        }
    }

    dataArray.forEach(function (data) {
        if (data.data.usersID != userid && (select == data.data.genre || select == "なし") && (select_age == data.data.budget || select_age == "なし")) {
            let element = document.getElementById('list' + count);
            element.insertAdjacentHTML('beforeend', '<td width="40%"><img id="img" src="' + data.data.photo + '" alt="Listing pic"></td>');
            element.insertAdjacentHTML('beforeend', '<td id="name" width="12%">' + data.data.name + '</td>');
            element.insertAdjacentHTML('beforeend', '<td width="12%">' + much_array[push_count] + '</td>');
            element.insertAdjacentHTML('beforeend', '<td width="12%">' + tir_array[push_count] + '</td>');
            element.insertAdjacentHTML('beforeend', '<td id="middle_area" width="12%">' + data.data.middle_area + '</td>');
            element.insertAdjacentHTML('beforeend', '<td width="12%">' + data.data.usersID + '</td>');
            count++;
        }
        push_count++;
    })
});

$(document).ready(function () {
    $('tr').click(function (event) {
        for (let i = 0; i < push_count; i++) {

        }
        let element = document.getElementById('list' + count);
    });
});
$("#list").on('click', function () {
    sessionStorage.setItem('name', "name[5]");
});