const db = firebase.firestore().collection('shop')
db.where("usersID", "==", "9XtWDWjt9LPIGLC3wEG1iUPdjDW2").onSnapshot(function (querySnapshot) {
    const dataArray = []; // 必要なデータだけが入った新しい配列を作成 
    querySnapshot.docs.forEach(function (doc) {
        const data = {
            id: doc.id,
            data: doc.data(),
        }
        dataArray.push(data);
    });
    const img = [];
    const usersID = [];
    dataArray.forEach(function (data) {
        img.push(`${data.data.photo}`);
        usersID.push(`${data.data.usersID}さんのお店`);

    })
    document.getElementById("img").src = img[0];
    document.getElementById("img2").src = img[2];
    document.getElementById("img3").src = img[3];
    document.getElementById("img4").src = img[4];
    document.getElementById("img5").src = img[5];
    document.getElementById("img6").src = img[6];
    document.getElementById("img7").src = img[7];
    document.getElementById("img8").src = img[8];
    document.getElementById("img9").src = img[9];
    document.getElementById("img10").src = img[10];
    $("#usersID").html(usersID[0]);
});