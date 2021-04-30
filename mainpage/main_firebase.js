var userid = sessionStorage.getItem('userid');
console.log(userid);

const friend = firebase.firestore().collection('friend');
const db = firebase.firestore().collection('shop');


let friendID = [];
friend.onSnapshot(function (querySnapshot) {
    const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
    querySnapshot.docs.forEach(function (doc) {
        const data = {
            id: doc.id,
            data: doc.data(),
        }
        dataArray.push(data);
    });
    const username = [];
    dataArray.forEach(function (data) {
        if (userid == data.data.usersID) {
            friendID.push(`${data.data.friendID}`);
        }
        console.log(data.data.friendID);
    });
    console.log(friendID);
});

db.onSnapshot(function (querySnapshot) {
    console.log(friendID.length)
    const dataArray = [];
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
    const info = [];
    const evaluation = [];
    dataArray.forEach(function (data) {
        //var uid = data.data.usersID;
        //console.log(uid + " " + userid);     
        if (friendID[0] === data.data.usersID) {
            console.log("1")
            img.push(`${data.data.photo}`);
            name.push(`${data.data.name}`);
            middle_area.push(`${data.data.middle_area}`);
            info.push(`${data.data.username}さんのお店`);
            usersID.push(`${data.data.usersID}`)
            evaluation.push(`${data.data.evaluation}`)
        } else if ((friendID.length === 0) && (data.data.genre == "ラーメン")) {
            console.log("2")
            img.push(`${data.data.photo}`);
            name.push(`${data.data.name}`);
            middle_area.push(`${data.data.middle_area}`);
            info.push(`おすすめの${data.data.genre}のお店`);
            usersID.push(`${data.data.usersID}`)
            evaluation.push(`${data.data.evaluation}`)
        }
    });

    document.getElementById("img").src = img[0];
    document.getElementById("img2").src = img[1];
    document.getElementById("img3").src = img[2];
    document.getElementById("img4").src = img[3];
    document.getElementById("img5").src = img[4];
    document.getElementById("img6").src = img[5];
    $("#name").html(name[0]);
    $("#name2").html(name[1]);
    $("#name3").html(name[2]);
    $("#name4").html(name[3]);
    $("#name5").html(name[4]);
    $("#name6").html(name[5]);
    $("#middle_area").html(middle_area[0]);
    $("#middle_area2").html(middle_area[1]);
    $("#middle_area3").html(middle_area[2]);
    $("#middle_area4").html(middle_area[3]);
    $("#middle_area5").html(middle_area[4]);
    $("#middle_area6").html(middle_area[5]);
    $("#evaluation").html(evaluation[0]);
    $("#evaluation2").html(evaluation[1]);
    $("#evaluation3").html(evaluation[2]);
    $("#evaluation4").html(evaluation[3]);
    $("#evaluation5").html(evaluation[4]);
    $("#evaluation6").html(evaluation[5]);
    $("#usersID").html(info[0]);

    $("#name").on("click", function () {
        sessionStorage.setItem('name', name[0]);
        sessionStorage.setItem('usersID', usersID[0]);
        console.log(name[0])
        console.log(usersID[0])
        location.href = "./check_shop.html"
    });
    $("#name2").on("click", function () {
        sessionStorage.setItem('name', name[1]);
        sessionStorage.setItem('usersID', usersID[1]);
        console.log(name[1])
        console.log(usersID[1])
        location.href = "./check_shop.html"
    });
    $("#name3").on("click", function () {
        sessionStorage.setItem('name', name[2]);
        sessionStorage.setItem('usersID', usersID[2]);
        console.log(name[2])
        console.log(usersID[2])
        location.href = "./check_shop.html"
    });
    $("#name4").on("click", function () {
        sessionStorage.setItem('name', name[3]);
        sessionStorage.setItem('usersID', usersID[3]);
        console.log(name[3])
        console.log(usersID[3])
        location.href = "./check_shop.html"
    });
    $("#name5").on("click", function () {
        sessionStorage.setItem('name', name[4]);
        sessionStorage.setItem('usersID', usersID[4]);
        console.log(name[4])
        console.log(usersID[4])
        location.href = "./check_shop.html"
    });
    $("#name6").on("click", function () {
        sessionStorage.setItem('name', name[5]);
        sessionStorage.setItem('usersID', usersID[5]);
        console.log(name[5])
        console.log(usersID[5])
        location.href = "./check_shop.html"
    });
});


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
    const info = [];
    const evaluation = [];
    dataArray.forEach(function (data) {
        if (friendID[1] === data.data.usersID) {
            console.log("1")
            img.push(`${data.data.photo}`);
            name.push(`${data.data.name}`);
            middle_area.push(`${data.data.middle_area}`);
            info.push(`${data.data.username}さんのお店`);
            usersID.push(`${data.data.usersID}`)
            evaluation.push(`${data.data.evaluation}`)
        } else if ((friendID.length <= 1) && (data.data.genre == "居酒屋")) {
            console.log("2")
            img.push(`${data.data.photo}`);
            name.push(`${data.data.name}`);
            middle_area.push(`${data.data.middle_area}`);
            info.push(`おすすめの${data.data.genre}のお店`);
            usersID.push(`${data.data.usersID}`)
            evaluation.push(`${data.data.evaluation}`)
        }
    })
    document.getElementById("img7").src = img[0];
    document.getElementById("img8").src = img[1];
    document.getElementById("img9").src = img[2];
    document.getElementById("img10").src = img[3];
    document.getElementById("img11").src = img[4];
    document.getElementById("img12").src = img[5];
    $("#name7").html(name[0]);
    $("#name8").html(name[1]);
    $("#name9").html(name[2]);
    $("#name10").html(name[3]);
    $("#name11").html(name[4]);
    $("#name12").html(name[5]);
    $("#middle_area7").html(middle_area[0]);
    $("#middle_area8").html(middle_area[1]);
    $("#middle_area9").html(middle_area[2]);
    $("#middle_area10").html(middle_area[3]);
    $("#middle_area11").html(middle_area[4]);
    $("#middle_area12").html(middle_area[5]);
    $("#evaluation7").html(evaluation[0]);
    $("#evaluation8").html(evaluation[1]);
    $("#evaluation9").html(evaluation[2]);
    $("#evaluation10").html(evaluation[3]);
    $("#evaluation11").html(evaluation[4]);
    $("#evaluation12").html(evaluation[5]);
    $("#usersID2").html(info[0]);

    $("#name7").on("click", function () {
        sessionStorage.setItem('name', name[0]);
        sessionStorage.setItem('usersID', usersID[0]);
        console.log(name[0])
        console.log(usersID[0])
        location.href = "./check_shop.html"
    });
    $("#name8").on("click", function () {
        sessionStorage.setItem('name', name[1]);
        sessionStorage.setItem('usersID', usersID[1]);
        console.log(name[1])
        console.log(usersID[1])
        location.href = "./check_shop.html"
    });
    $("#name9").on("click", function () {
        sessionStorage.setItem('name', name[2]);
        sessionStorage.setItem('usersID', usersID[2]);
        console.log(name[2])
        console.log(usersID[2])
        location.href = "./check_shop.html"
    });
    $("#name10").on("click", function () {
        sessionStorage.setItem('name', name[3]);
        sessionStorage.setItem('usersID', usersID[3]);
        console.log(name[3])
        console.log(usersID[3])
        location.href = "./check_shop.html"
    });
    $("#name11").on("click", function () {
        sessionStorage.setItem('name', name[4]);
        sessionStorage.setItem('usersID', usersID[4]);
        console.log(name[4])
        console.log(usersID[4])
        location.href = "./check_shop.html"
    });
    $("#name12").on("click", function () {
        sessionStorage.setItem('name', name[5]);
        sessionStorage.setItem('usersID', usersID[5]);
        console.log(name[5])
        console.log(usersID[5])
        location.href = "./check_shop.html"
    });
});

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
    const info = [];
    const evaluation = [];
    dataArray.forEach(function (data) {
        if (friendID[2] === data.data.usersID) {
            console.log("1")
            img.push(`${data.data.photo}`);
            name.push(`${data.data.name}`);
            middle_area.push(`${data.data.middle_area}`);
            info.push(`${data.data.username}さんのお店`);
            usersID.push(`${data.data.usersID}`)
            evaluation.push(`${data.data.evaluation}`)
        } else if ((friendID.length <= 2) && (data.data.genre == "和食")) {
            console.log("2")
            img.push(`${data.data.photo}`);
            name.push(`${data.data.name}`);
            middle_area.push(`${data.data.middle_area}`);
            info.push(`おすすめの${data.data.genre}のお店`);
            usersID.push(`${data.data.usersID}`)
            evaluation.push(`${data.data.evaluation}`)
        }
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
    $("#evaluation13").html(evaluation[0]);
    $("#evaluation14").html(evaluation[1]);
    $("#evaluation15").html(evaluation[2]);
    $("#evaluation16").html(evaluation[3]);
    $("#evaluation17").html(evaluation[4]);
    $("#evaluation18").html(evaluation[5]);
    $("#usersID3").html(info[0]);

    $("#name13").on("click", function () {
        sessionStorage.setItem('name', name[0]);
        sessionStorage.setItem('usersID', usersID[0]);
        console.log(name[0])
        console.log(usersID[0])
        location.href = "./check_shop.html"
    });
    $("#name14").on("click", function () {
        sessionStorage.setItem('name', name[1]);
        sessionStorage.setItem('usersID', usersID[1]);
        console.log(name[1])
        console.log(usersID[1])
        location.href = "./check_shop.html"
    });
    $("#name15").on("click", function () {
        sessionStorage.setItem('name', name[2]);
        sessionStorage.setItem('usersID', usersID[2]);
        console.log(name[2])
        console.log(usersID[2])
        location.href = "./check_shop.html"
    });
    $("#name16").on("click", function () {
        sessionStorage.setItem('name', name[3]);
        sessionStorage.setItem('usersID', usersID[3]);
        console.log(name[3])
        console.log(usersID[3])
        location.href = "./check_shop.html"
    });
    $("#name17").on("click", function () {
        sessionStorage.setItem('name', name[4]);
        sessionStorage.setItem('usersID', usersID[4]);
        console.log(name[4])
        console.log(usersID[4])
        location.href = "./check_shop.html"
    });
    $("#name18").on("click", function () {
        sessionStorage.setItem('name', name[5]);
        sessionStorage.setItem('usersID', usersID[5]);
        console.log(name[5])
        console.log(usersID[5])
        location.href = "./check_shop.html"
    });
});

const users = firebase.firestore().collection('users');

users.where("usersID", "==", userid).onSnapshot(function (querySnapshot) {
    const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
    querySnapshot.docs.forEach(function (doc) {
        const data = {
            id: doc.id,
            data: doc.data(),
        }
        dataArray.push(data);
    });
    const username = [];
    dataArray.forEach(function (data) {
        username.push(`${data.data.name}`);
    });
    $("#username").html(username[0]);
});

