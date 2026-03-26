// EASY MODE
const EASY_LOCATIONS = [
    { country: "usa", name: "USA", flag: "🇺🇸", url: "https://www.google.com/maps/embed?pb=!4v1741588914108!6m8!1m7!1sCAoSLEFGMVFpcFBjOWZ6V2trSmN3cjVId3pjb1B1V05SYkRWWVFvczlSQkZ2eVRU!2m2!1d40.68892551841514!2d-74.044597866788!3f321.0146464135345!4f10.605047391156447!5f0.7820865974627469&output=embed" },
    { country: "france", name: "France", flag: "🇫🇷", url: "https://www.google.com/maps/embed?pb=!4v1741621235051!6m8!1m7!1si81tcbzXfvi0BA-P-oOkxw!2m2!1d48.85894927283069!2d2.293408033354338!3f81.0603361625299!4f-13.65869531329409!5f0.45869288373407957&output=embed" },
    { country: "india", name: "India", flag: "🇮🇳", url: "https://www.google.com/maps/embed?pb=!4v1741621360808!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0V0ZVRBNWdF!2m2!1d27.17395398035674!2d78.04186246250939!3f29.513024327743757!4f7.295353658753115!5f0.7820865974627469&output=embed" },
    { country: "china", name: "China", flag: "🇨🇳", url: "https://www.google.com/maps/embed?pb=!4v1741621570873!6m8!1m7!1sCAoSLEFGMVFpcE03UlZBeHJVSWpLbFlKMTBmY293Nzczk1ocmtuTXgyUG9RQlRp!2m2!1d40.44279717590992!2d116.5638617730259!3f258.4899626486108!4f-5.044432245495187!5f0.7820865974627469&output=embed" },
    { country: "egypt", name: "Egypt", flag: "🇪🇬", url: "https://www.google.com/maps/embed?pb=!4v1741621706252!6m8!1m7!1sCAoSLEFGMVFpcE9FU1dkNTVKNjZBUXpSSmJmUzk5akZsOERhYkFmNnU4dFAxeUV2!2m2!1d29.97720944573853!2d31.13473007216287!3f240.16192043646478!4f-21.343971017328514!5f0.7820865974627469&output=embed" },
    { country: "italy", name: "Italy", flag: "🇮🇹", url: "https://www.google.com/maps/embed?pb=!4v1742400890278!6m8!1m7!1sriOA94KRZ7H3mESWpynZrw!2m2!1d43.72302279631328!2d10.39756748539553!3f276.5695816395664!4f6.607448251335683!5f0.7820865974627469&output=embed" },
    { country: "australia", name: "Australia", flag: "🇦🇺", url: "https://www.google.com/maps/embed?pb=!4v1742401076032!6m8!1m7!1sCAoSLEFGMVFpcE1rc0MtZ0ctc1A5UzZsYWdRQUYyOTREOGRrOFBrc1NMY1ZQbDFa!2m2!1d-33.85517872151119!2d151.2156623865488!3f87.07062579379388!4f-9.472164207166756!5f0.4000000000000002&output=embed" },
    { country: "spain", name: "Spain", flag: "🇪🇸", url: "https://www.google.com/maps/embed?pb=!4v1742401267929!6m8!1m7!1sPZHtUAXyoiOGZfcqxNxc0w!2m2!1d41.404087117312!2d2.174993059416575!3f292.75696959475044!4f-0.8848347258998501!5f0.7820865974627469&output=embed" },
    { country: "greece", name: "Greece", flag: "🇬🇷", url: "https://www.google.com/maps/embed?pb=!4v1742401535452!6m8!1m7!1sCAoSLEFGMVFpcE9BSlNwWDZGSkFxMVZxTnRsbm5qMEU4VjVWN24xUTdsYTJ4dVNm!2m2!1d37.97176500506048!2d23.72710384436539!3f103.1823200370201!4f-5.195967656492186!5f0.517937765334858&output=embed" },
    { country: "england", name: "England", flag: "🇬🇧", url: "https://www.google.com/maps/embed?pb=!4v1742405287990!6m8!1m7!1sVBnrlmeoNKPv-TFzV2uGkg!2m2!1d51.17891902587559!2d-1.82625789743674!3f85.6846033067922!4f0.29636903873674214!5f0.7820865974627469&output=embed" },
    { country: "japan", name: "Japan", flag: "🇯🇵", url: "https://www.google.com/maps/embed?pb=!4v1700000000001!6m8!1m7!1sCAoSLEFGMVFpcE1XcWZrT2hJNHFZbHNuY1ZwZWlNMjFqekRfNVVaNU1sOUl2eHJZ!2m2!1d35.6764225!2d139.6500004!3f90!4f0!5f0.7820865974627469&output=embed" },
    { country: "brazil", name: "Brazil", flag: "🇧🇷", url: "https://www.google.com/maps/embed?pb=!4v1700000000002!6m8!1m7!1sCAoSLEFGMVFpcFBPN1ZMeW1uaUZiWS1ReGNGY1VKOWF4ck9QZEVKMzl6MkJXT2Rv!2m2!1d-22.9068467!2d-43.1728965!3f270!4f0!5f0.7820865974627469&output=embed" },
    { country: "canada", name: "Canada", flag: "🇨🇦", url: "https://www.google.com/maps/embed?pb=!4v1700000000003!6m8!1m7!1sCAoSLEFGMVFpcE1rMlM0cVdTa1IxR3NKQTI0ZEV6Wjh4WU9VZHhwOVVScGZuNXlt!2m2!1d45.4215296!2d-75.6971931!3f180!4f0!5f0.7820865974627469&output=embed" },
    { country: "germany", name: "Germany", flag: "🇩🇪", url: "https://www.google.com/maps/embed?pb=!4v1700000000004!6m8!1m7!1sCAoSLEFGMVFpcE1PaFFQUGd6UHdwT0gyaHBMbjJhTW5lZElyenBaWS1hOHBHc1lZ!2m2!1d52.5200066!2d13.404954!3f0!4f0!5f0.7820865974627469&output=embed" },
    { country: "russia", name: "Russia", flag: "🇷🇺", url: "https://www.google.com/maps/embed?pb=!4v1700000000005!6m8!1m7!1sCAoSLEFGMVFpcE9YSnozQ0Z4RWhaTGpzUmlRNGlhTTF4bEJmUlpULUlodHVBUnlU!2m2!1d55.7504461!2d37.6174943!3f315!4f0!5f0.7820865974627469&output=embed" },
    { country: "mexico", name: "Mexico", flag: "🇲🇽", url: "https://www.google.com/maps/embed?pb=!4v1700000000006!6m8!1m7!1sCAoSLEFGMVFpcE01RUdadTRMNWNJeUtzU2tkU0NWRnFqQVlhSUQ1RmtRUHJuT1Zr!2m2!1d19.4326077!2d-99.133208!3f90!4f0!5f0.7820865974627469&output=embed" },
    { country: "southafrica", name: "South Africa", flag: "🇿🇦", url: "https://www.google.com/maps/embed?pb=!4v1700000000007!6m8!1m7!1sCAoSLEFGMVFpcFBLWnlqdlRDLXFOeVFnU01MMlNDVkQ4bGxOWUlTaGMxSHRVb2Ji!2m2!1d-33.9248685!2d18.4240553!3f180!4f0!5f0.7820865974627469&output=embed" },
    { country: "turkey", name: "Turkey", flag: "🇹🇷", url: "https://www.google.com/maps/embed?pb=!4v1700000000008!6m8!1m7!1sCAoSLEFGMVFpcE1MRTJqUkR0VWVrRUpuY1VTWTNhTHNDT2xGdVBCX01STFBSbjZy!2m2!1d41.0082376!2d28.9783589!3f225!4f0!5f0.7820865974627469&output=embed" },
    { country: "argentina", name: "Argentina", flag: "🇦🇷", url: "https://www.google.com/maps/embed?pb=!4v1700000000009!6m8!1m7!1sCAoSLEFGMVFpcE1KWW1SVDQ4VXNodUlJbWdBaVFkSE43OEZ4OVFWSDNXZDN6YTg2!2m2!1d-34.6036844!2d-58.3815591!3f45!4f0!5f0.7820865974627469&output=embed" },
    { country: "portugal", name: "Portugal", flag: "🇵🇹", url: "https://www.google.com/maps/embed?pb=!4v1700000000010!6m8!1m7!1sCAoSLEFGMVFpcE9mbW9MVnN0b3ZDSXhVQVBXb0ZPMnZPeHlULXlUcjZfNGhJZzlS!2m2!1d38.7222524!2d-9.1393366!3f135!4f0!5f0.7820865974627469&output=embed" },
    { country: "netherlands", name: "Netherlands", flag: "🇳🇱", url: "https://www.google.com/maps/embed?pb=!4v1700000000011!6m8!1m7!1sCAoSLEFGMVFpcE5mMVlxeHpYa2FOTnhVOGVqNVFkY0ZkSkFjaVZTaTZGcU5YWWF4!2m2!1d52.3791836!2d4.9002703!3f270!4f0!5f0.7820865974627469&output=embed" },
    { country: "thailand", name: "Thailand", flag: "🇹🇭", url: "https://www.google.com/maps/embed?pb=!4v1700000000012!6m8!1m7!1sCAoSLEFGMVFpcE5IeHFKaGRqd25tV2N3WHgxeHlIb3pkaGtpS2xmQ0hkZE1uaUxr!2m2!1d13.7563309!2d100.5017651!3f0!4f0!5f0.7820865974627469&output=embed" },
    { country: "newzealand", name: "New Zealand", flag: "🇳🇿", url: "https://www.google.com/maps/embed?pb=!4v1700000000013!6m8!1m7!1sCAoSLEFGMVFpcE42c2piVkhsS0xjZHN3SG5GNk9GWUVnX0ZSS0tZMVlRU2Z0RVpZ!2m2!1d-36.8484597!2d174.7633315!3f90!4f0!5f0.7820865974627469&output=embed" },
    { country: "morocco", name: "Morocco", flag: "🇲🇦", url: "https://www.google.com/maps/embed?pb=!4v1700000000014!6m8!1m7!1sCAoSLEFGMVFpcE1WRDJDdHpUQTlUMG9NZkFqMklWQ1dCcmNNUlQ5cmhXa0psNXNT!2m2!1d31.6294723!2d-7.9810845!3f180!4f0!5f0.7820865974627469&output=embed" },
    { country: "sweden", name: "Sweden", flag: "🇸🇪", url: "https://www.google.com/maps/embed?pb=!4v1700000000015!6m8!1m7!1sCAoSLEFGMVFpcE1oZWNhRkMxbU9pQjV4c1c0MGZMblhQeEhJQ2tqMFdUbkdvdVZh!2m2!1d59.3293235!2d18.0685808!3f270!4f0!5f0.7820865974627469&output=embed" },
];

// HARD MODE
const HARD_LOCATIONS = [
    { name: "USA", flag: "🇺🇸", url: "https://www.google.com/maps/embed?pb=!4v1700001000001!6m8!1m7!1sCAoSLEFGMVFpcFA4amlXZE5NZzZkLTlSc2ttZHFtbHZMUUd6Q3lkYi1SeW9GN1lP!2m2!1d36.1716intf!2d-86.7844!3f200!4f0!5f0.7820865974627469&output=embed" },
    { name: "France", flag: "🇫🇷", url: "https://www.google.com/maps/embed?pb=!4v1741621235051!6m8!1m7!1si81tcbzXfvi0BA-P-oOkxw!2m2!1d48.85894927283069!2d2.293408033354338!3f200!4f-5!5f0.7820865974627469&output=embed" },
    { name: "Japan", flag: "🇯🇵", url: "https://www.google.com/maps/embed?pb=!4v1700001000003!6m8!1m7!1sCAoSLEFGMVFpcFBkN1U4bkxTMGlLVHp3MUprUkc1MXMwbU5ERTNMeUt6LW53Q0hH!2m2!1d34.9771!2d135.7556!3f100!4f0!5f0.7820865974627469&output=embed" },
    { name: "Brazil", flag: "🇧🇷", url: "https://www.google.com/maps/embed?pb=!4v1700001000004!6m8!1m7!1sCAoSLEFGMVFpcE1rSnFwbFJQTGVETm1ZR3A4STJxa1J1Skt3T29ONlNlMFpHTzFT!2m2!1d-15.7942!2d-47.8823!3f270!4f0!5f0.7820865974627469&output=embed" },
    { name: "Australia", flag: "🇦🇺", url: "https://www.google.com/maps/embed?pb=!4v1700001000005!6m8!1m7!1sCAoSLEFGMVFpcE01UTNiOEVjRU5OQ0tsYjI4Rkh6ZFNrMGlBZnVOQmp6LW5BZFJZ!2m2!1d-27.4698!2d153.0251!3f140!4f0!5f0.7820865974627469&output=embed" },
    { name: "Russia", flag: "🇷🇺", url: "https://www.google.com/maps/embed?pb=!4v1700000000005!6m8!1m7!1sCAoSLEFGMVFpcE9YSnozQ0Z4RWhaTGpzUmlRNGlhTTF4bEJmUlpULUlodHVBUnlU!2m2!1d55.7504461!2d37.6174943!3f180!4f0!5f0.7820865974627469&output=embed" },
    { name: "India", flag: "🇮🇳", url: "https://www.google.com/maps/embed?pb=!4v1741621360808!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0V0ZVRBNWdF!2m2!1d27.17395398035674!2d78.04186246250939!3f160!4f5!5f0.7820865974627469&output=embed" },
    { name: "Canada", flag: "🇨🇦", url: "https://www.google.com/maps/embed?pb=!4v1700001000008!6m8!1m7!1sCAoSLEFGMVFpcFAyR25iY0I2R25mRXJRZHBleVhpQ2RqY0hZcE9iVjJqWkxmUU4y!2m2!1d49.2827!2d-123.1207!3f60!4f0!5f0.7820865974627469&output=embed" },
    { name: "Germany", flag: "🇩🇪", url: "https://www.google.com/maps/embed?pb=!4v1700001000009!6m8!1m7!1sCAoSLEFGMVFpcFBwMlgwaEVPa2l6RlFTSjJNbzhtTW5VbVhWYUlUM0xCbnNhNjNy!2m2!1d48.1351!2d11.5820!3f300!4f0!5f0.7820865974627469&output=embed" },
    { name: "South Africa", flag: "🇿🇦", url: "https://www.google.com/maps/embed?pb=!4v1700000000007!6m8!1m7!1sCAoSLEFGMVFpcFBLWnlqdlRDLXFOeVFnU01MMlNDVkQ4bGxOWUlTaGMxSHRVb2Ji!2m2!1d-33.9248685!2d18.4240553!3f90!4f0!5f0.7820865974627469&output=embed" },
    { name: "Mexico", flag: "🇲🇽", url: "https://www.google.com/maps/embed?pb=!4v1700001000011!6m8!1m7!1sCAoSLEFGMVFpcFBuY3BhQkdkaGxoMzh4bk5sMkZUMEhRR0h2MzJTU3l3cnRWNXly!2m2!1d20.9674!2d-89.6237!3f230!4f0!5f0.7820865974627469&output=embed" },
    { name: "Argentina", flag: "🇦🇷", url: "https://www.google.com/maps/embed?pb=!4v1700001000012!6m8!1m7!1sCAoSLEFGMVFpcFBSQ3paQ0VIOG5LNHF5Q3ZJcnpJNGlaMnVFNEdRSHNvckl3OHZR!2m2!1d-31.4201!2d-64.1888!3f45!4f0!5f0.7820865974627469&output=embed" },
    { name: "Portugal", flag: "🇵🇹", url: "https://www.google.com/maps/embed?pb=!4v1700001000013!6m8!1m7!1sCAoSLEFGMVFpcFByWHdvcWdEQ25vUUFCYVFOUFVzT2ZZdDhsUUdxSEpHeTkzYVpH!2m2!1d41.1579!2d-8.6291!3f150!4f0!5f0.7820865974627469&output=embed" },
    { name: "Turkey", flag: "🇹🇷", url: "https://www.google.com/maps/embed?pb=!4v1700001000014!6m8!1m7!1sCAoSLEFGMVFpcFBTUHl5VHBKSjVFT0hLT2Q3cWlxazRjUzFJdWs2ZGNSUG1nRGxO!2m2!1d39.9334!2d32.8597!3f75!4f0!5f0.7820865974627469&output=embed" },
    { name: "Morocco", flag: "🇲🇦", url: "https://www.google.com/maps/embed?pb=!4v1700001000015!6m8!1m7!1sCAoSLEFGMVFpcFBLWEhrRFJVTWtmR1dtbHFUeUZ0NW9rZlVlREpPRzdKNTVDX25T!2m2!1d34.0209!2d-6.8416!3f310!4f0!5f0.7820865974627469&output=embed" },
    { name: "Sweden", flag: "🇸🇪", url: "https://www.google.com/maps/embed?pb=!4v1700001000016!6m8!1m7!1sCAoSLEFGMVFpcFBrLVVBaVRxTzZnd0ppM3hwWE9ZZjgzWVlYVHBsZVd4ZGhGZ1Va!2m2!1d57.7089!2d11.9746!3f210!4f0!5f0.7820865974627469&output=embed" },
    { name: "Netherlands", flag: "🇳🇱", url: "https://www.google.com/maps/embed?pb=!4v1700001000017!6m8!1m7!1sCAoSLEFGMVFpcFA3SHdocjJIZXhrb21LdkhxRjJFb3hSMjFvMkhYNWtrbW9BRWNQ!2m2!1d52.0907!2d5.1214!3f340!4f0!5f0.7820865974627469&output=embed" },
    { name: "Thailand", flag: "🇹🇭", url: "https://www.google.com/maps/embed?pb=!4v1700001000018!6m8!1m7!1sCAoSLEFGMVFpcFBuazJMR1Y3OTFPdTFhNnFmWUI4aVJxTzV6UHRWQXFfSm5LVTVN!2m2!1d18.7883!2d98.9853!3f120!4f0!5f0.7820865974627469&output=embed" },
    { name: "New Zealand", flag: "🇳🇿", url: "https://www.google.com/maps/embed?pb=!4v1700001000019!6m8!1m7!1sCAoSLEFGMVFpcFBiWEFZZTFRT3p2WlNVbEl1VXZJenBzZ0ZDWmhWdFF5aEF1d19O!2m2!1d-45.0312!2d168.6626!3f250!4f0!5f0.7820865974627469&output=embed" },
    { name: "Spain", flag: "🇪🇸", url: "https://www.google.com/maps/embed?pb=!4v1700001000020!6m8!1m7!1sCAoSLEFGMVFpcFBxbTlXcnJBcWhaMTdXWnJxUkVzam5zekZhNHFzM3pSeTdZMlQ1!2m2!1d40.4168!2d-3.7038!3f180!4f0!5f0.7820865974627469&output=embed" },
    { name: "Italy", flag: "🇮🇹", url: "https://www.google.com/maps/embed?pb=!4v1700001000021!6m8!1m7!1sCAoSLEFGMVFpcFBycXhwY0p4dkpsckdja0xxZ3J6UVpUaXZqdFVJWlFYa1drdzVR!2m2!1d41.9028!2d12.4964!3f270!4f0!5f0.7820865974627469&output=embed" },
    { name: "Egypt", flag: "🇪🇬", url: "https://www.google.com/maps/embed?pb=!4v1700001000022!6m8!1m7!1sCAoSLEFGMVFpcFBNQ1R3Y1VpUGhGd0hKa1R4Vm9rS29ZTUtuSVFrd0NpS0Z4YVZZ!2m2!1d30.0444!2d31.2357!3f90!4f0!5f0.7820865974627469&output=embed" },
    { name: "Greece", flag: "🇬🇷", url: "https://www.google.com/maps/embed?pb=!4v1700001000023!6m8!1m7!1sCAoSLEFGMVFpcFBrdEtNN05EcHI5UTJIY2ZsN1cyWnZib09pN1I1elFhSm9Yb285!2m2!1d37.9755!2d23.7348!3f315!4f0!5f0.7820865974627469&output=embed" },
    { name: "England", flag: "🇬🇧", url: "https://www.google.com/maps/embed?pb=!4v1700001000024!6m8!1m7!1sCAoSLEFGMVFpcFBRTDVhMER4OXJwd0JYSkFodlhwbzFoNlA1M0hxSkZldjc1MTRM!2m2!1d51.5074!2d-0.1278!3f135!4f0!5f0.7820865974627469&output=embed" },
    { name: "China", flag: "🇨🇳", url: "https://www.google.com/maps/embed?pb=!4v1700001000025!6m8!1m7!1sCAoSLEFGMVFpcFA0STgwS0hOUnc0VWY1X29YZnFVMFZpYTViZXQ3OUZvbVBGZ01S!2m2!1d31.2304!2d121.4737!3f45!4f0!5f0.7820865974627469&output=embed" },
    { name: "Canada", flag: "🇨🇦", url: "https://www.google.com/maps/embed?pb=!4v1700001000026!6m8!1m7!1sCAoSLEFGMVFpcFB5Y1ZRaHg0d3MyNEtzM2tOZ0lIV1hrYXZxZG9uSWxDcUxpWEFt!2m2!1d43.6532!2d-79.3832!3f200!4f0!5f0.7820865974627469&output=embed" },
    { name: "Brazil", flag: "🇧🇷", url: "https://www.google.com/maps/embed?pb=!4v1700001000027!6m8!1m7!1sCAoSLEFGMVFpcFBtZzd2MXRhNTJkaTBaRVNDQ0ZINEtyNExsQVpRUzNtbFpfZkNj!2m2!1d-3.7172!2d-38.5434!3f280!4f0!5f0.7820865974627469&output=embed" },
    { name: "USA", flag: "🇺🇸", url: "https://www.google.com/maps/embed?pb=!4v1700001000028!6m8!1m7!1sCAoSLEFGMVFpcFBKWmRxbGtVMVVpdVVCQW5TSmJ5YW1FVUhxb0FhVVl3VHd6THpH!2m2!1d34.0522!2d-118.2437!3f90!4f0!5f0.7820865974627469&output=embed" },
    { name: "Russia", flag: "🇷🇺", url: "https://www.google.com/maps/embed?pb=!4v1700001000029!6m8!1m7!1sCAoSLEFGMVFpcFBxYmgwbXg5d2Rsa3RvRFlRMGI5X3dkQ01lU3pjRHZzSmF3S0Rq!2m2!1d59.9343!2d30.3351!3f220!4f0!5f0.7820865974627469&output=embed" },
    { name: "Japan", flag: "🇯🇵", url: "https://www.google.com/maps/embed?pb=!4v1700001000030!6m8!1m7!1sCAoSLEFGMVFpcFBveC1RZWtOR0ZkU1lxbzJtTjlQME5XU1RUZm9WR2h6S0pxTl9O!2m2!1d35.0116!2d135.7681!3f170!4f0!5f0.7820865974627469&output=embed" },
];

// GAME CONFIG
const TOTAL_ROUNDS = 5;
const MAX_LIVES = 3;

let mode = 'easy';
let timerMax = 45;

let G = newState();
function newState() {
    return {
        round: 1, score: 0, streak: 0, bestStreak: 0, lives: MAX_LIVES,
        correct: 0, current: null, usedIdx: [], timer: null,
        timeLeft: timerMax, answered: false, hintsUsed: 0, lastPts: 0
    };
}

// BOOT 
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(location.search);
    mode = params.get('mode') === 'hard' ? 'hard' : 'easy';
    timerMax = mode === 'hard' ? 20 : 45;
    G.timeLeft = timerMax;

    const badge = document.getElementById('modeBadge');
    badge.textContent = mode === 'hard' ? '☠ WRAITH' : '☽ PILGRIM';
    badge.className = 'mode-badge ' + (mode === 'hard' ? 'badge-hard' : 'badge-easy');

    if (mode === 'easy') {
        buildHints();
        document.getElementById('hintsToggleWrap').style.display = 'block';
        document.getElementById('panelDesc').textContent = 'Type a country or click a hint below.';
    } else {
        document.getElementById('hardNote').style.display = 'block';
        document.getElementById('panelTitle').textContent = 'Name the country.';
        document.getElementById('panelDesc').textContent = 'No hints. Study the landscape.';
    }

    document.getElementById('userChoice').addEventListener('keydown', e => {
        if (e.key === 'Enter') checkUser();
    });

    startRound();
});

// HINTS DRAWER
function buildHints() {
    const grid = document.getElementById('hintsGrid');
    grid.innerHTML = '';
    const seen = new Set();
    EASY_LOCATIONS.forEach(loc => {
        if (seen.has(loc.country)) return;
        seen.add(loc.country);
        const btn = document.createElement('button');
        btn.className = 'hint-btn';
        btn.dataset.country = loc.country;
        btn.dataset.name = loc.name;
        btn.innerHTML = `<span class="hf">${loc.flag}</span><span class="hn">${loc.name}</span>`;
        btn.addEventListener('click', () => {
            document.getElementById('userChoice').value = loc.name;
            document.querySelectorAll('.hint-btn').forEach(b => b.classList.remove('h-sel'));
            btn.classList.add('h-sel');
            G.hintsUsed++;
        });
        grid.appendChild(btn);
    });
}

function toggleHints() {
    const drawer = document.getElementById('hintsDrawer');
    const arrow = document.getElementById('hintsArrow');
    const open = drawer.classList.toggle('drawer-open');
    arrow.textContent = open ? '▲' : '▼';
}

// ROUND
function startRound() {
    G.answered = false; G.hintsUsed = 0; G.timeLeft = timerMax;
    document.getElementById('userChoice').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('confirmBtn').disabled = false;
    document.getElementById('skipBtn').disabled = false;
    document.querySelectorAll('.hint-btn').forEach(b => b.className = 'hint-btn');


    const drawer = document.getElementById('hintsDrawer');
    if (drawer) { drawer.classList.remove('drawer-open'); }
    const arrow = document.getElementById('hintsArrow');
    if (arrow) arrow.textContent = '▼';

    const pool = mode === 'easy' ? EASY_LOCATIONS : HARD_LOCATIONS;
    const available = pool.map((_, i) => i).filter(i => !G.usedIdx.includes(i));
    const idxPool = available.length ? available : pool.map((_, i) => i);
    const pick = idxPool[Math.floor(Math.random() * idxPool.length)];
    G.usedIdx.push(pick);
    const loc = pool[pick];

    if (mode === 'easy') {
        G.current = { country: loc.country, name: loc.name, flag: loc.flag };
    } else {
        G.current = { name: loc.name, flag: loc.flag };
    }

    document.getElementById('mapFrame').src = loc.url;
    updateHUD();
    startTimer();
}

// TIMER
function startTimer() {
    clearInterval(G.timer);
    updateTimerUI(timerMax);
    G.timer = setInterval(() => {
        G.timeLeft--;
        updateTimerUI(G.timeLeft);
        if (G.timeLeft <= 0) { clearInterval(G.timer); if (!G.answered) onTimeout(); }
    }, 1000);
}
function stopTimer() { clearInterval(G.timer); }

function updateTimerUI(t) {
    const numEl = document.getElementById('timerNum');
    const arc = document.getElementById('timerArc');
    numEl.textContent = t;
    const C = 2 * Math.PI * 16;
    const pct = t / timerMax;
    arc.style.strokeDasharray = C;
    arc.style.strokeDashoffset = C * (1 - pct);
    if (pct > 0.5) { arc.style.stroke = 'var(--purple)'; numEl.style.color = ''; }
    else if (pct > 0.25) { arc.style.stroke = '#c8921e'; numEl.style.color = '#c8921e'; }
    else { arc.style.stroke = '#c03030'; numEl.style.color = '#c03030'; }
}

function onTimeout() {
    G.answered = true; G.streak = 0; G.lastPts = 0;
    loseLife();
    showFeedback(false, `Time's up! It was ${G.current.flag} ${G.current.name}`);
    revealHints(null);
    showResultModal(false, "Time's Up", `The location was <strong>${G.current.flag} ${G.current.name}</strong>.`);
}

// ANSWER
function checkUser() {
    if (G.answered) return;
    const raw = document.getElementById('userChoice').value.trim().toLowerCase();
    if (!raw) return;
    stopTimer();
    G.answered = true;
    document.getElementById('confirmBtn').disabled = true;
    document.getElementById('skipBtn').disabled = true;

    const correctName = G.current.name.toLowerCase();
    const correctKey = (G.current.country || '').toLowerCase();
    const isCorrect = raw === correctName || (correctKey && raw === correctKey);

    if (isCorrect) {
        const timeBonus = Math.floor(G.timeLeft * (mode === 'hard' ? 20 : 10));
        const hintPenalty = mode === 'easy' ? G.hintsUsed * 20 : 0;
        G.lastPts = Math.max(100 + timeBonus - hintPenalty, 10);
        G.score += G.lastPts; G.streak++; G.correct++;
        if (G.streak > G.bestStreak) G.bestStreak = G.streak;
        updateHUD();
        revealHints(correctKey || correctName);
        showFeedback(true, `Correct! +${G.lastPts} pts`);
        showResultModal(true, 'Correct!', `${G.current.flag} <strong>${G.current.name}</strong> — <strong>+${G.lastPts} pts</strong>`);
    } else {
        G.lastPts = 0; G.streak = 0;
        loseLife(); updateHUD();
        revealHints(correctKey || correctName);
        showFeedback(false, `Wrong — it was ${G.current.flag} ${G.current.name}`);
        showResultModal(false, 'Wrong Location', `The answer was <strong>${G.current.flag} ${G.current.name}</strong>.`);
    }
}

function skipRound() {
    if (G.answered) return;
    stopTimer(); G.answered = true; G.streak = 0; G.lastPts = 0;
    loseLife(); updateHUD();
    revealHints(null);
    showFeedback(false, `Skipped — it was ${G.current.flag} ${G.current.name}`);
    showResultModal(false, 'Skipped', `The location was <strong>${G.current.flag} ${G.current.name}</strong>.`);
}

function revealHints(correctKey) {
    if (mode !== 'easy') return;
    document.querySelectorAll('.hint-btn').forEach(btn => {
        const k = btn.dataset.country;
        const n = btn.dataset.name.toLowerCase();
        if (k === correctKey || n === correctKey) btn.classList.add('h-correct');
    });
}

// LIVES
function loseLife() {
    if (G.lives > 0) G.lives--;
    document.querySelectorAll('.life').forEach((h, i) => h.classList.toggle('life-dead', i >= G.lives));
}

// FEEDBACK
function showFeedback(ok, msg) {
    const el = document.getElementById('feedback');
    el.textContent = msg;
    el.className = 'feedback ' + (ok ? 'fb-ok' : 'fb-bad');
}

// MODALS
function showResultModal(ok, title, body) {
    document.getElementById('resultBar').style.background = ok
        ? 'linear-gradient(90deg,var(--purple),#7b2fd4)'
        : 'linear-gradient(90deg,#6b0000,#a83030)';
    document.getElementById('resultIcon').textContent = ok ? '✦' : '✗';
    document.getElementById('resultIcon').style.color = ok ? 'var(--purple)' : '#c03030';
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultBody').innerHTML = body;
    document.getElementById('ms-score').textContent = G.score;
    document.getElementById('ms-streak').textContent = G.streak;
    document.getElementById('ms-pts').textContent = G.lastPts > 0 ? '+' + G.lastPts : '0';

    const isLast = G.round >= TOTAL_ROUNDS || G.lives <= 0;
    document.getElementById('nextBtn').textContent = isLast ? 'See Results →' : 'Next Location →';
    document.getElementById('resultModal').classList.add('modal-show');
}

function nextRound() {
    document.getElementById('resultModal').classList.remove('modal-show');
    if (G.lives <= 0) { showGameOver('Out of Lives'); return; }
    if (G.round >= TOTAL_ROUNDS) { showGameOver('Expedition Complete'); return; }
    G.round++;
    document.getElementById('timerNum').style.color = '';
    startRound();
}

function showGameOver(title) {
    const msgs = ['Every explorer starts somewhere.', 'The world is vast — study on.', 'A solid expedition.', 'Remarkable geography knowledge!', 'Flawless — a true wraith of the world. ✦'];
    const idx = Math.min(Math.floor((G.correct / TOTAL_ROUNDS) * 4), 4);
    document.getElementById('goTitle').textContent = title;
    document.getElementById('goBody').textContent = msgs[idx];
    document.getElementById('go-score').textContent = G.score;
    document.getElementById('go-correct').textContent = `${G.correct}/${TOTAL_ROUNDS}`;
    document.getElementById('go-streak').textContent = G.bestStreak;
    document.getElementById('gameOverModal').classList.add('modal-show');
}

function restartGame() {
    G = newState();
    document.querySelectorAll('.life').forEach(h => h.classList.remove('life-dead'));
    document.getElementById('timerNum').style.color = '';
    document.getElementById('gameOverModal').classList.remove('modal-show');
    if (mode === 'easy') buildHints();
    startRound();
}

function updateHUD() {
    document.getElementById('roundDisplay').textContent = `${G.round}/${TOTAL_ROUNDS}`;
    document.getElementById('scoreDisplay').textContent = G.score;
    document.getElementById('streakDisplay').textContent = `${G.streak}`;
}

function checkOrientation() {
    const overlay = document.getElementById('rotateOverlay');
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || window.innerWidth <= 768;
    const isPortrait = window.innerHeight > window.innerWidth;
    overlay.classList.toggle('rotate-visible', isMobile && isPortrait);
}
checkOrientation();
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', () => setTimeout(checkOrientation, 120));