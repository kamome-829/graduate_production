var userid = sessionStorage.getItem('userid');
console.log(userid);
const db = firebase.firestore().collection('shop')
db.where("usersID", "==", userid).onSnapshot(function (querySnapshot) {
    const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
    querySnapshot.docs.forEach(function (doc) {
        const data = {
            id: doc.id,
            data: doc.data(),
        }
        dataArray.push(data);
    });
    let count = 0
    dataArray.forEach(function (data) {
        count++
        let element = document.getElementById('photo-list');
        element.insertAdjacentHTML('beforeend', '<li><img src ="' + data.data.photo + '" class="photo-list-img"></li>')
        console.log(count)
    })

});
const users = firebase.firestore().collection('users')
users.where("usersID", "==", userid).onSnapshot(function (querySnapshot) {
    const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
    querySnapshot.docs.forEach(function (doc) {
        const data = {
            id: doc.id,
            data: doc.data(),
        }
        dataArray.push(data);
    });
    const usersID = [];
    dataArray.forEach(function (data) {
        usersID.push(`${data.data.name}さんの基本データ`);
    })
    $("#usersID").html(usersID[0]);
});