// Available locations
let locations = {
    usa: "https://www.google.com/maps/embed?pb=!4v1741588914108!6m8!1m7!1sCAoSLEFGMVFpcFBjOWZ6V2trSmN3cjVId3pjb1B1V05SYkRWWVFvczlSQkZ2eVRU!2m2!1d40.68892551841514!2d-74.044597866788!3f321.0146464135345!4f10.605047391156447!5f0.7820865974627469&output=embed",
    france: "https://www.google.com/maps/embed?pb=!4v1741621235051!6m8!1m7!1si81tcbzXfvi0BA-P-oOkxw!2m2!1d48.85894927283069!2d2.293408033354338!3f81.0603361625299!4f-13.65869531329409!5f0.45869288373407957&output=embed",
    india: "https://www.google.com/maps/embed?pb=!4v1741621360808!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0V0ZVRBNWdF!2m2!1d27.17395398035674!2d78.04186246250939!3f29.513024327743757!4f7.295353658753115!5f0.7820865974627469&output=embed",
    china: "https://www.google.com/maps/embed?pb=!4v1741621570873!6m8!1m7!1sCAoSLEFGMVFpcE03UlZBeHJVSWpLbFlKMTBmY293NWszck1ocmtuTXgyUG9RQlRp!2m2!1d40.44279717590992!2d116.5638617730259!3f258.4899626486108!4f-5.044432245495187!5f0.7820865974627469&output=embed",
    egypt: "https://www.google.com/maps/embed?pb=!4v1741621706252!6m8!1m7!1sCAoSLEFGMVFpcE9FU1dkNTVKNjZBUXpSSmJmUzk5akZsOERhYkFmNnU4dFAxeUV2!2m2!1d29.97720944573853!2d31.13473007216287!3f240.16192043646478!4f-21.343971017328514!5f0.7820865974627469&output=embed",
    italy: "https://www.google.com/maps/embed?pb=!4v1742400890278!6m8!1m7!1sriOA94KRZ7H3mESWpynZrw!2m2!1d43.72302279631328!2d10.39756748539553!3f276.5695816395664!4f6.607448251335683!5f0.7820865974627469&output=embed",
    australia: "https://www.google.com/maps/embed?pb=!4v1742401076032!6m8!1m7!1sCAoSLEFGMVFpcE1rc0MtZ0ctc1A5UzZsYWdRQUYyOTREOGRrOFBrc1NMY1ZQbDFa!2m2!1d-33.85517872151119!2d151.2156623865488!3f87.07062579379388!4f-9.472164207166756!5f0.4000000000000002&output=embed",
    spain: "https://www.google.com/maps/embed?pb=!4v1742401267929!6m8!1m7!1sPZHtUAXyoiOGZfcqxNxc0w!2m2!1d41.404087117312!2d2.174993059416575!3f292.75696959475044!4f-0.8848347258998501!5f0.7820865974627469&output=embed",
    greece: "https://www.google.com/maps/embed?pb=!4v1742401535452!6m8!1m7!1sCAoSLEFGMVFpcE9BSlNwWDZGSkFxMVZxTnRsbm5qMEU4VjVWN24xUTdsYTJ4dVNm!2m2!1d37.97176500506048!2d23.72710384436539!3f103.1823200370201!4f-5.195967656492186!5f0.517937765334858&output=embed",
    england: "https://www.google.com/maps/embed?pb=!4v1742405287990!6m8!1m7!1sVBnrlmeoNKPv-TFzV2uGkg!2m2!1d51.17891902587559!2d-1.82625789743674!3f85.6846033067922!4f0.29636903873674214!5f0.7820865974627469&output=embed"
};

let currentLocation = null;

// Select Random Location
function getRandomLocation() {
    const keys = Object.keys(locations);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randomKey, url: locations[randomKey] };
}

// Display Location
function displayLocation() {
    currentLocation = getRandomLocation();
    document.getElementById("mapFrame").src = currentLocation.url;
    document.getElementById("userChoice").value = "";
}

// Verify User's Answer
function checkUser() {
    const userInput = document.getElementById("userChoice").value.trim().toLowerCase();
    alert(userInput === currentLocation.key ? " Great job! You got it right! " : ` Oops! The correct answer was ${currentLocation.key.toUpperCase()}.`);
    document.getElementById("userChoice").value = "";
}

// Load a location on boot of page
document.addEventListener("DOMContentLoaded", () => {
    displayLocation();
});
