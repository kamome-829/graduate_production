var userid = sessionStorage.getItem('userid');

const friend = firebase.firestore().collection('friend');
const users = firebase.firestore().collection('users');
let friendID = [];
friend.where("usersID", "==", userid).onSnapshot(function (querySnapshot) {
    const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
    querySnapshot.docs.forEach(function (doc) {
        const data = {
            id: doc.id,
            data: doc.data(),
        }
        dataArray.push(data);
    });
    dataArray.forEach(function (data) {
        friendID.push(`${data.data.friendID}`);
    });;
});
users.onSnapshot(function (querySnapshot) {
    const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
    querySnapshot.docs.forEach(function (doc) {
        const data = {
            id: doc.id,
            data: doc.data(),
        }
        dataArray.push(data);
    });
    const tagArray = [];
    friendID.forEach(function (x) {
        dataArray.forEach(function (data) {
            //console.log(friendID);
            if (x == data.data.usersID) {
                tagArray.push(`
                  <tr width="95%">
                  <td width="33%">${data.data.name}</td> 
                  <td width="33%">${data.data.gender}</td> 
                  <td width="33%">${data.data.age}</td>
                  </tr> `)
            }
        })
        console.log(tagArray)
        $('#list').html(tagArray);
    })


});