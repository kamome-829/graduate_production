
const db = firebase.firestore().collection('shop');
db.onSnapshot(function (querySnapshot) {
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
    dataArray.forEach(function (data) {
        img.push(`${data.data.photo}`);
        name.push(`${data.data.name}`);
        middle_area.push(`${data.data.middle_area}`);

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
});