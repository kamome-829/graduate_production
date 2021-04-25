var userid = sessionStorage.getItem('userid');
console.log(userid);
console.log("sss");

const friend = firebase.firestore().collection('friend');
const db = firebase.firestore().collection('shop');

// ログインしているユーザーのフレンドのお店を表示
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
    })
    console.log(friendID[0]);
    db.where("usersID", "==", friendID[0]).limit(6).onSnapshot(function (querySnapshot) {
        // onSnapshotでcloud firestoreのデータ変更時に実行される!
        // querySnapshot.docsにcloud firestoreのデータが配列形式で入る 
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
        dataArray.forEach(function (data) {
            //var uid = data.data.usersID;
            //console.log(uid + " " + userid);
            img.push(`${data.data.photo}`);
            name.push(`${data.data.name}`);
            middle_area.push(`${data.data.middle_area}`);
            usersID.push(`${data.data.usersID}さんのお店`);

        })

        document.getElementById("img").src = img[0];
        document.getElementById("img2").src = img[1];
        document.getElementById("img3").src = img[2];
        document.getElementById("img4").src = img[3];
        document.getElementById("img5").src = img[4];
        document.getElementById("img6").src = img[5];
        $("#name").html(name[0]);
        $("#name2").html(name[1])
        $("#name3").html(name[2])
        $("#name4").html(name[3])
        $("#name5").html(name[4])
        $("#name6").html(name[5])
        $("#middle_area").html(middle_area[0]);
        $("#middle_area2").html(middle_area[1]);
        $("#middle_area3").html(middle_area[2]);
        $("#middle_area4").html(middle_area[3]);
        $("#middle_area5").html(middle_area[4]);
        $("#middle_area6").html(middle_area[5]);
        $("#usersID").html(usersID[0]);
    });


    db.where("usersID", "==", friendID[1]).limit(6).onSnapshot(function (querySnapshot) {
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
        dataArray.forEach(function (data) {
            img.push(`${data.data.photo}`);
            name.push(`${data.data.name}`);
            middle_area.push(`${data.data.middle_area}`);
            usersID.push(`${data.data.usersID}さんのお店`);

        })
        document.getElementById("img7").src = img[0];
        document.getElementById("img8").src = img[1];
        document.getElementById("img9").src = img[2];
        document.getElementById("img10").src = img[3];
        document.getElementById("img11").src = img[4];
        document.getElementById("img12").src = img[5];
        $("#name7").html(name[0]);
        $("#name8").html(name[1])
        $("#name9").html(name[2])
        $("#name10").html(name[3])
        $("#name11").html(name[4])
        $("#name12").html(name[5])
        $("#middle_area7").html(middle_area[0]);
        $("#middle_area8").html(middle_area[1]);
        $("#middle_area9").html(middle_area[2]);
        $("#middle_area10").html(middle_area[3]);
        $("#middle_area11").html(middle_area[4]);
        $("#middle_area12").html(middle_area[5]);
        $("#usersID2").html(usersID[0]);
    });

    db.where("usersID", "==", friendID[2]).limit(6).onSnapshot(function (querySnapshot) {
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
        dataArray.forEach(function (data) {
            img.push(`${data.data.photo}`);
            name.push(`${data.data.name}`);
            middle_area.push(`${data.data.middle_area}`);
            usersID.push(`${data.data.usersID}さんのお店`);

        })
        document.getElementById("img13").src = img[0];
        document.getElementById("img14").src = img[1];
        document.getElementById("img15").src = img[2];
        document.getElementById("img16").src = img[3];
        document.getElementById("img17").src = img[4];
        document.getElementById("img18").src = img[5];
        $("#name13").html(name[0]);
        $("#name14").html(name[1])
        $("#name15").html(name[2])
        $("#name16").html(name[3])
        $("#name17").html(name[4])
        $("#name18").html(name[5])
        $("#middle_area13").html(middle_area[0]);
        $("#middle_area14").html(middle_area[1]);
        $("#middle_area15").html(middle_area[2]);
        $("#middle_area16").html(middle_area[3]);
        $("#middle_area17").html(middle_area[4]);
        $("#middle_area18").html(middle_area[5]);
        $("#usersID3").html(usersID[0]);
    });



});


// db.where("usersID", "==", friendID[0]).limit(6).onSnapshot(function (querySnapshot) {
//     // onSnapshotでcloud firestoreのデータ変更時に実行される!
//     // querySnapshot.docsにcloud firestoreのデータが配列形式で入る 
//     const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
//     querySnapshot.docs.forEach(function (doc) {
//         const data = {
//             id: doc.id,
//             data: doc.data(),
//         }
//         dataArray.push(data);
//     });
//     const img = [];
//     const name = [];
//     const middle_area = [];
//     const usersID = [];
//     dataArray.forEach(function (data) {
//         //var uid = data.data.usersID;
//         //console.log(uid + " " + userid);
//         img.push(`${data.data.photo}`);
//         name.push(`${data.data.name}`);
//         middle_area.push(`${data.data.middle_area}`);
//         usersID.push(`${data.data.usersID}さんのお店`);

//     })

//     document.getElementById("img").src = img[0];
//     document.getElementById("img2").src = img[1];
//     document.getElementById("img3").src = img[2];
//     document.getElementById("img4").src = img[3];
//     document.getElementById("img5").src = img[4];
//     document.getElementById("img6").src = img[5];
//     $("#name").html(name[0]);
//     $("#name2").html(name[1])
//     $("#name3").html(name[2])
//     $("#name4").html(name[3])
//     $("#name5").html(name[4])
//     $("#name6").html(name[5])
//     $("#middle_area").html(middle_area[0]);
//     $("#middle_area2").html(middle_area[1]);
//     $("#middle_area3").html(middle_area[2]);
//     $("#middle_area4").html(middle_area[3]);
//     $("#middle_area5").html(middle_area[4]);
//     $("#middle_area6").html(middle_area[5]);
//     $("#usersID").html(usersID[0]);
// });


// db.where("usersID", "==", friendID[1]).limit(6).onSnapshot(function (querySnapshot) {
//     const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
//     querySnapshot.docs.forEach(function (doc) {
//         const data = {
//             id: doc.id,
//             data: doc.data(),
//         }
//         dataArray.push(data);
//     });
//     const img = [];
//     const name = [];
//     const middle_area = [];
//     const usersID = [];
//     dataArray.forEach(function (data) {
//         img.push(`${data.data.photo}`);
//         name.push(`${data.data.name}`);
//         middle_area.push(`${data.data.middle_area}`);
//         usersID.push(`${data.data.usersID}さんのお店`);

//     })
//     document.getElementById("img7").src = img[0];
//     document.getElementById("img8").src = img[1];
//     document.getElementById("img9").src = img[2];
//     document.getElementById("img10").src = img[3];
//     document.getElementById("img11").src = img[4];
//     document.getElementById("img12").src = img[5];
//     $("#name7").html(name[0]);
//     $("#name8").html(name[1])
//     $("#name9").html(name[2])
//     $("#name10").html(name[3])
//     $("#name11").html(name[4])
//     $("#name12").html(name[5])
//     $("#middle_area7").html(middle_area[0]);
//     $("#middle_area8").html(middle_area[1]);
//     $("#middle_area9").html(middle_area[2]);
//     $("#middle_area10").html(middle_area[3]);
//     $("#middle_area11").html(middle_area[4]);
//     $("#middle_area12").html(middle_area[5]);
//     $("#usersID2").html(usersID[0]);
// });

// db.where("usersID", "==", friendID[2]).limit(6).onSnapshot(function (querySnapshot) {
//     const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
//     querySnapshot.docs.forEach(function (doc) {
//         const data = {
//             id: doc.id,
//             data: doc.data(),
//         }
//         dataArray.push(data);
//     });
//     const img = [];
//     const name = [];
//     const middle_area = [];
//     const usersID = [];
//     dataArray.forEach(function (data) {
//         img.push(`${data.data.photo}`);
//         name.push(`${data.data.name}`);
//         middle_area.push(`${data.data.middle_area}`);
//         usersID.push(`${data.data.usersID}さんのお店`);

//     })
//     document.getElementById("img13").src = img[0];
//     document.getElementById("img14").src = img[1];
//     document.getElementById("img15").src = img[2];
//     document.getElementById("img16").src = img[3];
//     document.getElementById("img17").src = img[4];
//     document.getElementById("img18").src = img[5];
//     $("#name13").html(name[0]);
//     $("#name14").html(name[1])
//     $("#name15").html(name[2])
//     $("#name16").html(name[3])
//     $("#name17").html(name[4])
//     $("#name18").html(name[5])
//     $("#middle_area13").html(middle_area[0]);
//     $("#middle_area14").html(middle_area[1]);
//     $("#middle_area15").html(middle_area[2]);
//     $("#middle_area16").html(middle_area[3]);
//     $("#middle_area17").html(middle_area[4]);
//     $("#middle_area18").html(middle_area[5]);
//     $("#usersID3").html(usersID[0]);
// });


