var userid = sessionStorage.getItem('userid');
console.log(userid);

document.getElementById("name").onchange = function () {
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
