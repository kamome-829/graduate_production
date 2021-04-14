$(() => {

    // // map表示用に使用する変数
    // let map;

    // // 現在地を取得するときのオプション
    // const option = {
    //     enableHighAccuracy: true,
    //     maximumAge: 20000,
    //     timeout: 1000000
    // };

    // // 現在地の取得に成功したときの関数
    // function showPosition(position) {
    //     const lat = position.coords.latitude;
    //     const lng = position.coords.longitude;
    //     console.log(lat, lng);
    // }

    // // 現在位置の取得に失敗したの実行する関数
    // function showError(error) {
    //     let e = "";
    //     if (error.code == 1) {
    //         e = "位置情報が許可されてません";
    //     }
    //     if (error.code == 2) {
    //         e = "現在位置を特定できません";
    //     }
    //     if (error.code == 3) {
    //         e = "位置情報を取得する前にタイムアウトになりました";
    //     }
    //     alert("error：" + e);
    // }

    // // 位置情報を取りにいく処理
    // function getPosition() {
    //     navigator.geolocation
    //         .getCurrentPosition(mapsInit, showError, option);
    // }

    // function mapsInit(position) {
    //     const lat = position.coords.latitude;
    //     const lng = position.coords.longitude;
    //     // マップ表示の処理（省略）
    //     map = new Microsoft.Maps.Map('#map', {
    //         center: {
    //             latitude: lat, longitude: lng
    //         },
    //         zoom: 8,
    //     });
    //     pushPin(lat, lng, map);
    //     const name = "現在地";
    //     const place = "I'm here!!!";
    //     generateInfobox(lat, lng, map, name, place);
    //     oll_open();
    // }

    // function mapsInit_2(lat, lng, map, name, place) {
    //     // マップ表示の処理（省略）
    //     map = new Microsoft.Maps.Map('#map', {
    //         center: {
    //             latitude: lat, longitude: lng
    //         },
    //         zoom: 8,
    //     });
    //     pushPin(lat, lng, map);
    //     generateInfobox(lat, lng, map, name, place);
    // }

    // function pushPin(lat, lng, map) {
    //     const location = new Microsoft.Maps.Location(lat, lng)
    //     const pin = new Microsoft.Maps.Pushpin(location, {
    //         color: 'navy', // 色の設定
    //         visible: true, // これ書かないとピンが見えない
    //     });
    //     map.entities.push(pin);
    // };

    // function generateInfobox(lat, lng, map, name, place) {
    //     const location = new Microsoft.Maps.Location(lat, lng)
    //     const infobox = new Microsoft.Maps.Infobox(location, {
    //         title: name,
    //         description: place
    //     });
    //     infobox.setMap(map);
    // }

    // const park = {
    //     name: ["USJ", "ハウステンボス", "ディズニーランド", "横浜シーパラダイス", "白い恋人パーク", "富士急ハイランド", "東映太秦映画村", "aa", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    //     place: ["大阪", "長崎", "東京", "神奈川", "北海道", "山梨", "京都", "aa", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    //     phone: ["0570-200-606", "0570-064-110", "045-330-5211", "045-788-8888", "011-666-1481", "0555-23-2111", "075-864-7716", "aa", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",],
    //     web: ["https://www.usj.co.jp/", "http://www.huistenbosch.co.jp/", "http://www.seaparadise.co.jp/", "http://www.shiroikoibitopark.jp/", "https://www.fujiq.jp/", "http://www.toei-eigamura.com/", "aa", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",],
    //     latitude: [34.665442, 33.088755, 35.6359322, 35.3368011, 43.0882755, 35.4851444, 35.016189, 55],
    //     longitude: [135.432338, 129.7863526, 139.8786311, 139.6456091, 141.2708274, 138.7773048, 135.7086368, 152],
    // };

    // function oll_open() {
    //     for (let i = 0; i < park.name.length; i++) {
    //         console.log(park.name[i]);
    //         let lat = park.latitude[i];
    //         let lng = park.longitude[i];
    //         let name = park.name[i];
    //         let place = park.place[i];
    //         pushPin(lat, lng, map);
    //         generateInfobox(lat, lng, map, name, place);
    //     }
    // }

    // $('#map_open').on('click', function () {
    //     getPosition();
    // });

    // $('#comand_buttun').on('click', function () {
    //     var input_message = document.getElementById("comand_text").value;
    //     let parent = document.getElementById('tuika');
    //     let chack = 0;
    //     parent.innerHTML = ''; //子要素を全て削除
    //     for (let i = 0; i < park.name.length; i++) {
    //         if (input_message == park.name[i]) {
    //             var newElement_1 = document.createElement("p"); // p要素作成
    //             var newElement_2 = document.createElement("p"); // p要素作成
    //             var newElement_3 = document.createElement("p"); // p要素作成
    //             var newElement_4 = document.createElement("a"); // p要素作成
    //             var newContent_1 = document.createTextNode(park.name[i]); // テキストノードを作成
    //             var newContent_2 = document.createTextNode(park.place[i]); // テキストノードを作成
    //             var newContent_3 = document.createTextNode(park.phone[i]); // テキストノードを作成
    //             var newContent_4 = document.createTextNode(park.web[i]); // テキストノードを作成
    //             newElement_1.appendChild(newContent_1); // p要素にテキストノードを追加
    //             newElement_2.appendChild(newContent_2); // p要素にテキストノードを追加
    //             newElement_3.appendChild(newContent_3); // p要素にテキストノードを追加
    //             newElement_4.appendChild(newContent_4); // p要素にテキストノードを追加
    //             newElement_4.setAttribute("id", "a"); // p要素にidを設定

    //             var parentDiv = document.getElementById("tuika");

    //             parentDiv.insertBefore(newElement_4, parentDiv.firstChild);
    //             parentDiv.insertBefore(newElement_3, parentDiv.firstChild);
    //             parentDiv.insertBefore(newElement_2, parentDiv.firstChild);
    //             parentDiv.insertBefore(newElement_1, parentDiv.firstChild);

    //             const target = document.getElementById("a")

    //             const changeHref = () => {
    //                 target.href = web[i]
    //                 target.textContent = "Yahoo"
    //             }

    //             chack = 1;

    //             let lat = park.latitude[i];
    //             let lng = park.longitude[i];
    //             let name = park.name[i];
    //             let place = park.place[i];

    //             mapsInit_2(lat, lng, map, name, place);
    //         }
    //     }
    //     if (chack == 0) {
    //         var newElement_1 = document.createElement("p"); // p要素作成
    //         var newContent_1 = document.createTextNode("その遊園地は登録されていないもしくは存在しません。");
    //         newElement_1.appendChild(newContent_1);
    //         var parentDiv = document.getElementById("tuika");
    //         parentDiv.insertBefore(newElement_1, parentDiv.firstChild);
    //     } else {
    //         chack = 0;
    //     }
    // });

    $('#open').on('click', function () {
        getPosition();
    });

    $('#close').on('click', function () {
        for (let a = 0; a < 10; a++) {
            var block = document.getElementById("shop" + a);
            block.style.display = "none";
        }
    });

    $('#sho1').click(() => {
        console.log("a");
        alert('Click');
    });

    // $("#shop" + count).on('click', function () {
    //     var text = document.getElementById(this);
    //     console.log("a");
    //     $.ajax({
    //         url: 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=849fc7a3713b56fe&name_any=' + text.value + '&format=jsonp',
    //         type: 'POST',
    //         dataType: 'jsonp',
    //         jsonpCallback: 'callback'
    //     }).done(function (data) {
    //         console.log(data);
    //     }).fail(function (data) {
    //         console.log("わわわ");
    //     });
    // });


    // function getPosition() {
    //     axios.get("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=849fc7a3713b56fe&large_area=Z011")
    //         .then(function (response) {
    //             // リクエスト成功時の処理(responseに結果が入っている)
    //             console.log(response);
    //         }).catch(function (error) {
    //             // リクエスト失敗時の処理(errorにエラー内容が入っている)
    //             console.log(error);
    //         }).finally(function () {
    //             // 成功失敗に関わらず必ず実行
    //             console.log('done!');
    //         });
    // }


    function getPosition() {
        var textMsg = document.getElementById('text');
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

    function buttonClick() {
        alert('Click');
    }

})


// $.ajax({
//     url: 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=849fc7a3713b56fe&name_any=' + textMsg.value + '&format=jsonp',
//     type: 'POST',
//     dataType: 'jsonp',
//     jsonpCallback: 'callback'
// }).done(function (data) {
//     let datas = new Array();
//     var doc0 = document.getElementById("list_area");
//     //console.log(data.results.shop);
//     data.results.shop.forEach(elm => {
//         datas.push(elm.name);
//         doc0.insertAdjacentHTML('beforeend', '<p><input type="button" class = "box" id = "shop' + count + '" oncick="getId(this.id);" value="' + elm.name + '" ></p>');
//         count++;
//     })
//     if (count == 0) {
//         console.log("data");

//     } else {
//         console.log(datas);
//     }
// }).fail(function (data) {
//     console.log("わわわ");
// });