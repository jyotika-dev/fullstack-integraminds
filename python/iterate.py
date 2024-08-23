#take the json data from here
# https://github.com/dr5hn/countries-states-cities-database/blob/master/countries%2Bstates.json

#for now take few countires and iterate the countries and print the states along with state properties
items = [
    {
        "name": "Peru",
        "iso3": "PER",
        "iso2": "PE",
        "numeric_code": "604",
        "phone_code": "51",
        "capital": "Lima",
        "currency": "PEN",
        "currency_name": "Peruvian sol",
        "currency_symbol": "S\/.",
        "tld": ".pe",
        "native": "Perú",
        "region": "Americas",
        "region_id": "2",
        "subregion": "South America",
        "subregion_id": "8",
        "nationality": "Peruvian",
        "timezones": [
            {
                "zoneName": "America\/Lima",
                "gmtOffset": -18000,
                "gmtOffsetName": "UTC-05:00",
                "abbreviation": "PET",
                "tzName": "Peru Time"
            }
        ],
        "translations": {
            "kr": "페루",
            "pt-BR": "Peru",
            "pt": "Peru",
            "nl": "Peru",
            "hr": "Peru",
            "fa": "پرو",
            "de": "Peru",
            "es": "Perú",
            "fr": "Pérou",
            "ja": "ペルー",
            "it": "Perù",
            "cn": "秘鲁",
            "tr": "Peru"
        },
        "latitude": "-10.00000000",
        "longitude": "-76.00000000",
        "emoji": "🇵🇪",
        "emojiU": "U+1F1F5 U+1F1EA",
        "states": [
            {
                "id": 3685,
                "name": "Amazonas",
                "state_code": "AMA"
            },
            {
                "id": 3680,
                "name": "Áncash",
                "state_code": "ANC",
                "latitude": "-9.32504970",
                "longitude": "-77.56194190"
            },
            {
                "id": 3699,
                "name": "Apurímac",
                "state_code": "APU",
                "latitude": "-14.05045330",
                "longitude": "-73.08774900"
            },
            {
                "id": 3681,
                "name": "Arequipa",
                "state_code": "ARE",
                "latitude": "-16.40904740",
                "longitude": "-71.53745100",
            },
            {
                "id": 3692,
                "name": "Ayacucho",
                "state_code": "AYA",
                "latitude": "-13.16387370",
                "longitude": "-74.22356410",
            },
            {
                "id": 3688,
                "name": "Cajamarca",
                "state_code": "CAJ",
                "latitude": "-7.16174650",
                "longitude": "-78.51278550",
            },
            {
                "id": 3701,
                "name": "Callao",
                "state_code": "CAL",
                "latitude": "-12.05084910",
                "longitude": "-77.12598430",
            },
            {
                "id": 3691,
                "name": "Cusco",
                "state_code": "CUS",
                "latitude": "-13.53195000",
                "longitude": "-71.96746260",
            },
            {
                "id": 3679,
                "name": "Huancavelica",
                "state_code": "HUV",
                "latitude": "-12.78619780",
                "longitude": "-74.97640240",
            },
            {
                "id": 3687,
                "name": "Huanuco",
                "state_code": "HUC",
                "latitude": "-9.92076480",
                "longitude": "-76.24108430",
            },
            {
                "id": 3700,
                "name": "Ica",
                "state_code": "ICA",
                "latitude": "42.35288320",
                "longitude": "-71.04300970",
            },
            {
                "id": 3693,
                "name": "Junín",
                "state_code": "JUN",
                "latitude": "-11.15819250",
                "longitude": "-75.99263060",
            },
            {
                "id": 3683,
                "name": "La Libertad",
                "state_code": "LAL",
                "latitude": "13.49069700",
                "longitude": "-89.30846070",
            },
            {
                "id": 3702,
                "name": "Lambayeque",
                "state_code": "LAM",
                "latitude": "-6.71976660",
                "longitude": "-79.90807570",
            },
            {
                "id": 3695,
                "name": "Lima",
                "state_code": "LIM",
                "latitude": "-12.04637310",
                "longitude": "-77.04275400",
                # "type": null
            },
            {
                "id": 4922,
                "name": "Loreto",
                "state_code": "LOR",
                "latitude": "-4.37416430",
                "longitude": "-76.13042640",
                # "type": null
            },
            {
                "id": 3678,
                "name": "Madre de Dios",
                "state_code": "MDD",
                "latitude": "-11.76687050",
                "longitude": "-70.81199530",
                # "type": null
            },
            {
                "id": 3698,
                "name": "Moquegua",
                "state_code": "MOQ",
                "latitude": "-17.19273610",
                "longitude": "-70.93281380",
                # "type": null
            },
            {
                "id": 3686,
                "name": "Pasco",
                "state_code": "PAS",
                "latitude": "46.23050490",
                "longitude": "-119.09223160",
                # "type": null
            },
            {
                "id": 3697,
                "name": "Piura",
                "state_code": "PIU",
                "latitude": "-5.17828840",
                "longitude": "-80.65488820",
                # "type": null
            },
            {
                "id": 3682,
                "name": "Puno",
                "state_code": "PUN",
                "latitude": "-15.84022180",
                "longitude": "-70.02188050",
                # "type": null
            },
            {
                "id": 3694,
                "name": "San Martín",
                "state_code": "SAM",
                "latitude": "37.08494640",
                "longitude": "-121.61022160",
                # "type": null
            },
            {
                "id": 3696,
                "name": "Tacna",
                "state_code": "TAC",
                "latitude": "-18.00656790",
                "longitude": "-70.24627410",
                # "type": null
            },
            {
                "id": 3689,
                "name": "Tumbes",
                "state_code": "TUM",
                "latitude": "-3.55649210",
                "longitude": "-80.42708850",
                # "type": null
            },
            {
                "id": 3684,
                "name": "Ucayali",
                "state_code": "UCA",
                "latitude": "-9.82511830",
                "longitude": "-73.08774900",
                # "type": null
            }
        ]
    },
    {
        "name": "Philippines",
        "iso3": "PHL",
        "iso2": "PH",
        "numeric_code": "608",
        "phone_code": "63",
        "capital": "Manila",
        "currency": "PHP",
        "currency_name": "Philippine peso",
        "currency_symbol": "₱",
        "tld": ".ph",
        "native": "Pilipinas",
        "region": "Asia",
        "region_id": "3",
        "subregion": "South-Eastern Asia",
        "subregion_id": "13",
        "nationality": "Philippine, Filipino",
        "timezones": [
            {
                "zoneName": "Asia\/Manila",
                "gmtOffset": 28800,
                "gmtOffsetName": "UTC+08:00",
                "abbreviation": "PHT",
                "tzName": "Philippine Time"
            }
        ],
        "translations": {
            "kr": "필리핀",
            "pt-BR": "Filipinas",
            "pt": "Filipinas",
            "nl": "Filipijnen",
            "hr": "Filipini",
            "fa": "جزایر الندفیلیپین",
            "de": "Philippinen",
            "es": "Filipinas",
            "fr": "Philippines",
            "ja": "フィリピン",
            "it": "Filippine",
            "cn": "菲律宾",
            "tr": "Filipinler"
        },
        "latitude": "13.00000000",
        "longitude": "122.00000000",
        "emoji": "🇵🇭",
        "emojiU": "U+1F1F5 U+1F1ED",
        "states": [
            {
                "id": 1324,
                "name": "Abra",
                "state_code": "ABR",
                "latitude": "42.49708300",
                "longitude": "-96.38441000",
                "type": "province"
            },
            {
                "id": 1323,
                "name": "Agusan del Norte",
                "state_code": "AGN",
                "latitude": "8.94562590",
                "longitude": "125.53192340",
                "type": "province"
            },
            {
                "id": 1326,
                "name": "Agusan del Sur",
                "state_code": "AGS",
                "latitude": "8.04638880",
                "longitude": "126.06153840",
                "type": "province"
            },
            {
                "id": 1331,
                "name": "Aklan",
                "state_code": "AKL",
                "latitude": "11.81661090",
                "longitude": "122.09415410",
                "type": "province"
            },
            {
                "id": 1337,
                "name": "Albay",
                "state_code": "ALB",
                "latitude": "13.17748270",
                "longitude": "123.52800720",
                "type": "province"
            },
            {
                "id": 1336,
                "name": "Antique",
                "state_code": "ANT",
                "latitude": "37.03586950",
                "longitude": "-95.63616940",
                "type": "province"
            },
            {
                "id": 1334,
                "name": "Apayao",
                "state_code": "APA",
                "latitude": "18.01203040",
                "longitude": "121.17103890",
                "type": "province"
            },
            {
                "id": 1341,
                "name": "Aurora",
                "state_code": "AUR",
                "latitude": "36.97089100",
                "longitude": "-93.71797900",
                "type": "province"
            },
            {
                "id": 1316,
                "name": "Autonomous Region in Muslim Mindanao",
                "state_code": "14",
                "latitude": "6.95683130",
                "longitude": "124.24215970",
                "type": "region"
            },
            {
                "id": 1346,
                "name": "Basilan",
                "state_code": "BAS",
                "latitude": "6.42963490",
                "longitude": "121.98701650",
                "type": "province"
            },
            {
                "id": 1344,
                "name": "Bataan",
                "state_code": "BAN",
                "latitude": "14.64168420",
                "longitude": "120.48184460",
                "type": "province"
            },
            {
                "id": 1352,
                "name": "Batanes",
                "state_code": "BTN",
                "latitude": "20.44850740",
                "longitude": "121.97081290",
                "type": "province"
            },
            {
                "id": 1359,
                "name": "Batangas",
                "state_code": "BTG",
                "latitude": "13.75646510",
                "longitude": "121.05830760",
                "type": "province"
            },
            {
                "id": 1363,
                "name": "Benguet",
                "state_code": "BEN",
                "latitude": "16.55772570",
                "longitude": "120.80394740",
                "type": "province"
            },
            {
                "id": 1304,
                "name": "Bicol",
                "state_code": "05",
                "latitude": "13.42098850",
                "longitude": "123.41367360",
                "type": "region"
            },
            {
                "id": 1274,
                "name": "Biliran",
                "state_code": "BIL",
                "latitude": "11.58331520",
                "longitude": "124.46418480",
                "type": "province"
            },
            {
                "id": 1272,
                "name": "Bohol",
                "state_code": "BOH",
                "latitude": "9.84999110",
                "longitude": "124.14354270",
                "type": "province"
            },
            {
                "id": 1270,
                "name": "Bukidnon",
                "state_code": "BUK",
                "latitude": "8.05150540",
                "longitude": "124.92299460",
                "type": "province"
            },
            {
                "id": 1278,
                "name": "Bulacan",
                "state_code": "BUL",
                "latitude": "14.79427350",
                "longitude": "120.87990080",
                "type": "province"
            },
            {
                "id": 1279,
                "name": "Cagayan",
                "state_code": "CAG",
                "latitude": "18.24896290",
                "longitude": "121.87878330",
                "type": "province"
            },
            {
                "id": 1342,
                "name": "Cagayan Valley",
                "state_code": "02",
                "latitude": "16.97537580",
                "longitude": "121.81070790",
                "type": "region"
            },
            {
                "id": 1294,
                "name": "Calabarzon",
                "state_code": "40",
                "latitude": "14.10078030",
                "longitude": "121.07937050",
                "type": "region"
            },
            {
                "id": 1283,
                "name": "Camarines Norte",
                "state_code": "CAN",
                "latitude": "14.13902650",
                "longitude": "122.76330360",
                "type": "province"
            },
            {
                "id": 1287,
                "name": "Camarines Sur",
                "state_code": "CAS",
                "latitude": "13.52501970",
                "longitude": "123.34861470",
                "type": "province"
            },
            {
                "id": 1285,
                "name": "Camiguin",
                "state_code": "CAM",
                "latitude": "9.17321640",
                "longitude": "124.72987650",
                "type": "province"
            },
            {
                "id": 1292,
                "name": "Capiz",
                "state_code": "CAP",
                "latitude": "11.55288160",
                "longitude": "122.74072300",
                "type": "province"
            },
            {
                "id": 1314,
                "name": "Caraga",
                "state_code": "13",
                "latitude": "8.80145620",
                "longitude": "125.74068820",
                "type": "region"
            },
            {
                "id": 1301,
                "name": "Catanduanes",
                "state_code": "CAT",
                "latitude": "13.70886840",
                "longitude": "124.24215970",
                "type": "province"
            },
            {
                "id": 1307,
                "name": "Cavite",
                "state_code": "CAV",
                "latitude": "14.47912970",
                "longitude": "120.89696340",
                "type": "province"
            },
            {
                "id": 1306,
                "name": "Cebu",
                "state_code": "CEB",
                "latitude": "10.31569920",
                "longitude": "123.88543660",
                "type": "province"
            },
            {
                "id": 1345,
                "name": "Central Luzon",
                "state_code": "03",
                "latitude": "15.48277220",
                "longitude": "120.71200230",
                "type": "region"
            },
            {
                "id": 1308,
                "name": "Central Visayas",
                "state_code": "07",
                "latitude": "9.81687500",
                "longitude": "124.06414190",
                "type": "region"
            },
            {
                "id": 1311,
                "name": "Compostela Valley",
                "state_code": "COM",
                "latitude": "7.51251500",
                "longitude": "126.17626150",
                "type": "province"
            },
            {
                "id": 1335,
                "name": "Cordillera Administrative",
                "state_code": "15",
                "latitude": "17.35125420",
                "longitude": "121.17188510",
                "type": "region"
            },
            {
                "id": 1320,
                "name": "Cotabato",
                "state_code": "NCO",
                "latitude": "7.20466680",
                "longitude": "124.23104390",
                "type": "province"
            },
            {
                "id": 1340,
                "name": "Davao",
                "state_code": "11",
                "latitude": "7.30416220",
                "longitude": "126.08934060",
                "type": "region"
            },
            {
                "id": 1319,
                "name": "Davao del Norte",
                "state_code": "DAV",
                "latitude": "7.56176990",
                "longitude": "125.65328480",
                "type": "province"
            },
            {
                "id": 1318,
                "name": "Davao del Sur",
                "state_code": "DAS",
                "latitude": "6.76626870",
                "longitude": "125.32842690",
                "type": "province"
            },
            {
                "id": 1309,
                "name": "Davao Occidental",
                "state_code": "DVO",
                "latitude": "6.09413960",
                "longitude": "125.60954740",
                "type": "province"
            },
            {
                "id": 1289,
                "name": "Davao Oriental",
                "state_code": "DAO",
                "latitude": "7.31715850",
                "longitude": "126.54198870",
                "type": "province"
            },
            {
                "id": 1291,
                "name": "Dinagat Islands",
                "state_code": "DIN",
                "latitude": "10.12818160",
                "longitude": "125.60954740",
                "type": "province"
            },
            {
                "id": 1290,
                "name": "Eastern Samar",
                "state_code": "EAS",
                "latitude": "11.50007310",
                "longitude": "125.49999080",
                "type": "province"
            },
            {
                "id": 1322,
                "name": "Eastern Visayas",
                "state_code": "08",
                "latitude": "12.24455330",
                "longitude": "125.03881640",
                "type": "region"
            },
            {
                "id": 1303,
                "name": "Guimaras",
                "state_code": "GUI",
                "latitude": "10.59286610",
                "longitude": "122.63250810",
                "type": "province"
            },
            {
                "id": 1300,
                "name": "Ifugao",
                "state_code": "IFU",
                "latitude": "16.83307920",
                "longitude": "121.17103890",
                "type": "province"
            },
            {
                "id": 1355,
                "name": "Ilocos",
                "state_code": "01",
                "latitude": "16.08321440",
                "longitude": "120.61998950",
                "type": "region"
            },
            {
                "id": 1298,
                "name": "Ilocos Norte",
                "state_code": "ILN",
                "latitude": "18.16472810",
                "longitude": "120.71155920",
                "type": "province"
            },
            {
                "id": 1321,
                "name": "Ilocos Sur",
                "state_code": "ILS",
                "latitude": "17.22786640",
                "longitude": "120.57395790",
                "type": "province"
            },
            {
                "id": 1315,
                "name": "Iloilo",
                "state_code": "ILI",
                "latitude": "10.72015010",
                "longitude": "122.56210630",
                "type": "province"
            },
            {
                "id": 1313,
                "name": "Isabela",
                "state_code": "ISA",
                "latitude": "18.50077590",
                "longitude": "-67.02434620",
                "type": "province"
            },
            {
                "id": 1312,
                "name": "Kalinga",
                "state_code": "KAL",
                "latitude": "17.47404220",
                "longitude": "121.35416310",
                "type": "province"
            },
            {
                "id": 1317,
                "name": "La Union",
                "state_code": "LUN",
                "latitude": "38.87668780",
                "longitude": "-77.12809120",
                "type": "province"
            },
            {
                "id": 1328,
                "name": "Laguna",
                "state_code": "LAG",
                "latitude": "33.54271890",
                "longitude": "-117.78535680",
                "type": "province"
            },
            {
                "id": 1327,
                "name": "Lanao del Norte",
                "state_code": "LAN",
                "latitude": "7.87218110",
                "longitude": "123.88577470",
                "type": "province"
            },
            {
                "id": 1333,
                "name": "Lanao del Sur",
                "state_code": "LAS",
                "latitude": "7.82317600",
                "longitude": "124.41982430",
                "type": "province"
            },
            {
                "id": 1332,
                "name": "Leyte",
                "state_code": "LEY",
                "latitude": "10.86245360",
                "longitude": "124.88111950",
                "type": "province"
            },
            {
                "id": 1330,
                "name": "Maguindanao",
                "state_code": "MAG",
                "latitude": "6.94225810",
                "longitude": "124.41982430",
                "type": "province"
            },
            {
                "id": 1329,
                "name": "Marinduque",
                "state_code": "MAD",
                "latitude": "13.47671710",
                "longitude": "121.90321920",
                "type": "province"
            },
            {
                "id": 1338,
                "name": "Masbate",
                "state_code": "MAS",
                "latitude": "12.35743460",
                "longitude": "123.55040760",
                "type": "province"
            },
            {
                "id": 1347,
                "name": "Metro Manila",
                "state_code": "NCR",
                "latitude": "14.60905370",
                "longitude": "121.02225650",
                "type": "province"
            },
            {
                "id": 1299,
                "name": "Mimaropa",
                "state_code": "41",
                "latitude": "9.84320650",
                "longitude": "118.73647830",
                "type": "region"
            },
            {
                "id": 1343,
                "name": "Misamis Occidental",
                "state_code": "MSC",
                "latitude": "8.33749030",
                "longitude": "123.70706190",
                "type": "province"
            },
            {
                "id": 1348,
                "name": "Misamis Oriental",
                "state_code": "MSR",
                "latitude": "8.50455580",
                "longitude": "124.62195920",
                "type": "province"
            },
            {
                "id": 1353,
                "name": "Mountain Province",
                "state_code": "MOU",
                "latitude": "40.70754370",
                "longitude": "-73.95010330",
                "type": "province"
            },
            {
                "id": 1351,
                "name": "Negros Occidental",
                "state_code": "NEC",
                "latitude": "10.29256090",
                "longitude": "123.02465180",
                "type": "province"
            },
            {
                "id": 1350,
                "name": "Negros Oriental",
                "state_code": "NER",
                "latitude": "9.62820830",
                "longitude": "122.98883190",
                "type": "province"
            },
            {
                "id": 1339,
                "name": "Northern Mindanao",
                "state_code": "10",
                "latitude": "8.02016350",
                "longitude": "124.68565090",
                "type": "region"
            },
            {
                "id": 1349,
                "name": "Northern Samar",
                "state_code": "NSA",
                "latitude": "12.36131990",
                "longitude": "124.77407930",
                "type": "province"
            },
            {
                "id": 1360,
                "name": "Nueva Ecija",
                "state_code": "NUE",
                "latitude": "15.57837500",
                "longitude": "121.11126150",
                "type": "province"
            },
            {
                "id": 1358,
                "name": "Nueva Vizcaya",
                "state_code": "NUV",
                "latitude": "16.33011070",
                "longitude": "121.17103890",
                "type": "province"
            },
            {
                "id": 1356,
                "name": "Occidental Mindoro",
                "state_code": "MDC",
                "latitude": "13.10241110",
                "longitude": "120.76512840",
                "type": "province"
            },
            {
                "id": 1354,
                "name": "Oriental Mindoro",
                "state_code": "MDR",
                "latitude": "13.05645980",
                "longitude": "121.40694170",
                "type": "province"
            },
            {
                "id": 1361,
                "name": "Palawan",
                "state_code": "PLW",
                "latitude": "9.83494930",
                "longitude": "118.73836150",
                "type": "province"
            },
            {
                "id": 1365,
                "name": "Pampanga",
                "state_code": "PAM",
                "latitude": "15.07940900",
                "longitude": "120.61998950",
                "type": "province"
            },
            {
                "id": 1364,
                "name": "Pangasinan",
                "state_code": "PAN",
                "latitude": "15.89490550",
                "longitude": "120.28631830",
                "type": "province"
            },
            {
                "id": 1275,
                "name": "Quezon",
                "state_code": "QUE",
                "latitude": "14.03139060",
                "longitude": "122.11309090",
                "type": "province"
            },
            {
                "id": 1273,
                "name": "Quirino",
                "state_code": "QUI",
                "latitude": "16.27004240",
                "longitude": "121.53700030",
                "type": "province"
            },
            {
                "id": 1271,
                "name": "Rizal",
                "state_code": "RIZ",
                "latitude": "14.60374460",
                "longitude": "121.30840880",
                "type": "province"
            },
            {
                "id": 1269,
                "name": "Romblon",
                "state_code": "ROM",
                "latitude": "12.57780160",
                "longitude": "122.26914600",
                "type": "province"
            },
            {
                "id": 1277,
                "name": "Sarangani",
                "state_code": "SAR",
                "latitude": "5.92671750",
                "longitude": "124.99475100",
                "type": "province"
            },
            {
                "id": 1276,
                "name": "Siquijor",
                "state_code": "SIG",
                "latitude": "9.19987790",
                "longitude": "123.59519250",
                "type": "province"
            },
            {
                "id": 1310,
                "name": "Soccsksargen",
                "state_code": "12",
                "latitude": "6.27069180",
                "longitude": "124.68565090",
                "type": "region"
            },
            {
                "id": 1281,
                "name": "Sorsogon",
                "state_code": "SOR",
                "latitude": "12.99270950",
                "longitude": "124.01474640",
                "type": "province"
            },
            {
                "id": 1280,
                "name": "South Cotabato",
                "state_code": "SCO",
                "latitude": "6.33575650",
                "longitude": "124.77407930",
                "type": "province"
            },
            {
                "id": 1284,
                "name": "Southern Leyte",
                "state_code": "SLE",
                "latitude": "10.33462060",
                "longitude": "125.17087410",
                "type": "province"
            },
            {
                "id": 1282,
                "name": "Sultan Kudarat",
                "state_code": "SUK",
                "latitude": "6.50694010",
                "longitude": "124.41982430",
                "type": "province"
            },
            {
                "id": 1288,
                "name": "Sulu",
                "state_code": "SLU",
                "latitude": "5.97490110",
                "longitude": "121.03351000",
                "type": "province"
            },
            {
                "id": 1286,
                "name": "Surigao del Norte",
                "state_code": "SUN",
                "latitude": "9.51482800",
                "longitude": "125.69699840",
                "type": "province"
            },
            {
                "id": 1296,
                "name": "Surigao del Sur",
                "state_code": "SUR",
                "latitude": "8.54049060",
                "longitude": "126.11447580",
                "type": "province"
            },
            {
                "id": 1295,
                "name": "Tarlac",
                "state_code": "TAR",
                "latitude": "15.47547860",
                "longitude": "120.59634920",
                "type": "province"
            },
            {
                "id": 1293,
                "name": "Tawi-Tawi",
                "state_code": "TAW",
                "latitude": "5.13381100",
                "longitude": "119.95092600",
                "type": "province"
            },
            {
                "id": 5115,
                "name": "Western Samar",
                "state_code": "WSA",
                "latitude": "12.00002060",
                "longitude": "124.99124520",
                "type": "province"
            },
            {
                "id": 1305,
                "name": "Western Visayas",
                "state_code": "06",
                "latitude": "11.00498360",
                "longitude": "122.53727410",
                "type": "region"
            },
            {
                "id": 1297,
                "name": "Zambales",
                "state_code": "ZMB",
                "latitude": "15.50817660",
                "longitude": "119.96978080",
                "type": "province"
            },
            {
                "id": 1302,
                "name": "Zamboanga del Norte",
                "state_code": "ZAN",
                "latitude": "8.38862820",
                "longitude": "123.16888830",
                "type": "province"
            },
            {
                "id": 1357,
                "name": "Zamboanga del Sur",
                "state_code": "ZAS",
                "latitude": "7.83830540",
                "longitude": "123.29666570",
                "type": "province"
            },
            {
                "id": 1325,
                "name": "Zamboanga Peninsula",
                "state_code": "09",
                "latitude": "8.15407700",
                "longitude": "123.25879300",
                "type": "region"
            },
            {
                "id": 1362,
                "name": "Zamboanga Sibugay",
                "state_code": "ZSI",
                "latitude": "7.52252470",
                "longitude": "122.31075170",
                "type": "province"
            }
        ]
    },
    
]

#Task 1: Iterate the lists and list the states along with state properties

for country in items:
    # Add your code here
    print( "Country: ", country["name"])
    for state in country["state"]:
        print("id")
        

for country in items:
    print( "Country: ", country["name"])
    for key, value in country["translations"].items:
        print(key, value)
        print("\n")
        
import json
with open("country-state.json") as file:
    items =json.load(file)
    
    
#Task 3: Instead  of hardcoding the json data inside the python, read the jsonand list the states along with the state properties
for idx, country in enumerate(items):
    print("country: ", idx, country["name"])
    for state in country["states"]:
        print("id: ", state["id"])                    
        print("name: ", state["name"])                    
        print("state_code: ", state["state_code"])                    
        print("latitude: ", state["latitude"])                    
        print("longitude: ", state["longitude"])                    
        print("type: ", state["type"])                    
        print("\n")
        
        
# Task 4: Do all the above task using while loop

while idx < len(items):
    country = items[idx]
    print ("Country: ", idx, country["name"])
    for state in country["states"]:
        print("id: ", state["id"])                    
        print("name: ", state["name"])                    
        print("state_code: ", state["state_code"])                    
        print("latitude: ", state["latitude"])                    
        print("longitude: ", state["longitude"])                    
        print("type: ", state["type"])                    
        print("\n")
    idx += 1    

        


    
    
    