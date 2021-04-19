var userid = sessionStorage.getItem('userid');
console.log(userid);

document.getElementById("name").onchange = function () {
    alert("a");
    for (let a = 0; a < 10; a++) {
        var block = document.getElementById("shop" + a);
        block.style.display = "none";
    }
    getPosition();
};

$('#submit').on('click', function () {
    getPosition();
});

function getPosition() {
    var textMsg = document.getElementById('name');
    $.ajax({
        url: 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=849fc7a3713b56fe&name_any=' + textMsg.value + '&format=jsonp',
        type: 'POST',
        dataType: 'jsonp',
        jsonpCallback: 'callback'
    }).done(function (data) {
        let datas = new Array();
        var doc0 = document.getElementById("list_area");
        //console.log(data.results.shop);
        var count = 0;
        data.results.shop.forEach(elm => {
            var block = document.getElementById("shop" + count);
            block.setAttribute("value", elm.name);
            block.style.display = "block";
            count++;
        })
        if (count == 0) {
            console.log("data");
        } else {
            console.log(datas);
        }
    }).fail(function (data) {
        console.log("わわわ");
    });
}

function getId(ele) {
    var buttonid = document.getElementById(ele);
    const db = firebase.firestore().collection('shop');
    $.ajax({
        url: 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=849fc7a3713b56fe&name_any=' + buttonid.value + '&format=jsonp',
        type: 'POST',
        dataType: 'jsonp',
        jsonpCallback: 'callback'
    }).done(function (data) {
        data.results.shop.forEach(elm => {
            var block = document.getElementById("pic");
            const photo = elm.photo.pc.l;
            const name = elm.name;
            const address = elm.address;
            const middle_area = elm.middle_area.name;
            const budget = elm.budget.name;
            const genre = elm.genre.name;
            const urls = elm.urls.pc
            const data = {
                photo: photo,
                name: name,
                address: address,
                middle_area: middle_area,
                budget: budget,
                genre: genre,
                urls: urls,
            }
            db.add(data);
            console.log(data);
            block.setAttribute("src", photo);

        })
        //block_url.setAttribute("value", data.results.shop.urls);
    }).fail(function (data) {
        console.log("わわわ");
    });
}