angular.module('services.taxes', [])
.factory('taxes', function () {
  var factory = {},
      taxList = [];

  taxList =
  [
    {
      id: 0,
      churchTax: 30.3,
      tax: 31.3,
      name: "Välj kommun"
    },
    {
      id: 242,
      churchTax: 33.2,
      tax: 34.2,
      name: "Ale"
    },
    {
      id: 243,
      churchTax: 32.8,
      tax: 34,
      name: "Alingsås"
    },
    {
      id: 72,
      churchTax: 32.8,
      tax: 34,
      name: "Alvesta"
    },
    {
      id: 46,
      churchTax: 33.2,
      tax: 34.6,
      name: "Aneby"
    },
    {
      id: 232,
      churchTax: 33.1,
      tax: 34.2,
      name: "Arboga"
    },
    {
      id: 80,
      churchTax: 34.1,
      tax: 35.2,
      name: "Arjeplog"
    },
    {
      id: 81,
      churchTax: 32.9,
      tax: 33.9,
      name: "Arvidsjaur"
    },
    {
      id: 195,
      churchTax: 32.6,
      tax: 33.8,
      name: "Arvika"
    },
    {
      id: 93,
      churchTax: 32.8,
      tax: 33.9,
      name: "Askersund"
    },
    {
      id: 7,
      churchTax: 33.9,
      tax: 35.1,
      name: "Avesta"
    },
    {
      id: 245,
      churchTax: 34,
      tax: 35.5,
      name: "Bengtsfors"
    },
    {
      id: 39,
      churchTax: 34.2,
      tax: 35.6,
      name: "Berg"
    },
    {
      id: 211,
      churchTax: 34,
      tax: 35.1,
      name: "Bjurholm"
    },
    {
      id: 121,
      churchTax: 31.5,
      tax: 32.5,
      name: "Bjuv"
    },
    {
      id: 82,
      churchTax: 32.8,
      tax: 33.8,
      name: "Boden"
    },
    {
      id: 246,
      churchTax: 32.9,
      tax: 34,
      name: "Bollebygd"
    },
    {
      id: 21,
      churchTax: 32.7,
      tax: 33.8,
      name: "Bollnäs"
    },
    {
      id: 59,
      churchTax: 32.9,
      tax: 34.4,
      name: "Borgholm"
    },
    {
      id: 8,
      churchTax: 34.3,
      tax: 35.2,
      name: "Borlänge"
    },
    {
      id: 247,
      churchTax: 32.4,
      tax: 33.6,
      name: "Borås"
    },
    {
      id: 160,
      churchTax: 32.4,
      tax: 33.3,
      name: "Botkyrka"
    },
    {
      id: 106,
      churchTax: 32.8,
      tax: 33.9,
      name: "Boxholm"
    },
    {
      id: 122,
      churchTax: 32.5,
      tax: 33.5,
      name: "Bromölla"
    },
    {
      id: 40,
      churchTax: 34.7,
      tax: 36.1,
      name: "Bräcke"
    },
    {
      id: 123,
      churchTax: 30.7,
      tax: 31.5,
      name: "Burlöv"
    },
    {
      id: 120,
      churchTax: 30.9,
      tax: 32.2,
      name: "Båstad"
    },
    {
      id: 248,
      churchTax: 34.8,
      tax: 36.1,
      name: "Dals-Ed"
    },
    {
      id: 161,
      churchTax: 29.5,
      tax: 30.3,
      name: "Danderyd"
    },
    {
      id: 94,
      churchTax: 33.7,
      tax: 34.5,
      name: "Degerfors"
    },
    {
      id: 212,
      churchTax: 34.7,
      tax: 35.8,
      name: "Dorotea"
    },
    {
      id: 196,
      churchTax: 34,
      tax: 35.3,
      name: "Eda"
    },
    {
      id: 162,
      churchTax: 31.5,
      tax: 32.4,
      name: "Ekerö"
    },
    {
      id: 47,
      churchTax: 33.4,
      tax: 35,
      name: "Eksjö"
    },
    {
      id: 60,
      churchTax: 32.4,
      tax: 33.5,
      name: "Emmaboda"
    },
    {
      id: 187,
      churchTax: 32.3,
      tax: 33.5,
      name: "Enköping"
    },
    {
      id: 151,
      churchTax: 33.2,
      tax: 34.3,
      name: "Eskilstuna"
    },
    {
      id: 124,
      churchTax: 31,
      tax: 32.1,
      name: "Eslöv"
    },
    {
      id: 249,
      churchTax: 33.1,
      tax: 34.5,
      name: "Essunga"
    },
    {
      id: 233,
      churchTax: 33.3,
      tax: 34.5,
      name: "Fagersta"
    },
    {
      id: 32,
      churchTax: 31.9,
      tax: 33.2,
      name: "Falkenberg"
    },
    {
      id: 250,
      churchTax: 33.1,
      tax: 34.5,
      name: "Falköping"
    },
    {
      id: 9,
      churchTax: 34,
      tax: 35.1,
      name: "Falun"
    },
    {
      id: 197,
      churchTax: 33.9,
      tax: 35,
      name: "Filipstad"
    },
    {
      id: 107,
      churchTax: 33.1,
      tax: 34.1,
      name: "Finspång"
    },
    {
      id: 152,
      churchTax: 33.5,
      tax: 34.7,
      name: "Flen"
    },
    {
      id: 198,
      churchTax: 33.9,
      tax: 35,
      name: "Forshaga"
    },
    {
      id: 251,
      churchTax: 34.3,
      tax: 35.6,
      name: "Färgelanda"
    },
    {
      id: 10,
      churchTax: 34.2,
      tax: 35.4,
      name: "Gagnef"
    },
    {
      id: 48,
      churchTax: 33,
      tax: 34.2,
      name: "Gislaved"
    },
    {
      id: 153,
      churchTax: 33.2,
      tax: 34.5,
      name: "Gnesta"
    },
    {
      id: 49,
      churchTax: 33.3,
      tax: 34.6,
      name: "Gnosjö"
    },
    {
      id: 31,
      churchTax: 33.5,
      tax: 35,
      name: "Gotland"
    },
    {
      id: 199,
      churchTax: 34.1,
      tax: 35.3,
      name: "Grums"
    },
    {
      id: 254,
      churchTax: 33.1,
      tax: 34.4,
      name: "Grästorp"
    },
    {
      id: 255,
      churchTax: 34.1,
      tax: 35.4,
      name: "Gullspång"
    },
    {
      id: 83,
      churchTax: 33,
      tax: 33.8,
      name: "Gällivare"
    },
    {
      id: 22,
      churchTax: 33.2,
      tax: 34.2,
      name: "Gävle"
    },
    {
      id: 252,
      churchTax: 32.4,
      tax: 33.2,
      name: "Göteborg"
    },
    {
      id: 253,
      churchTax: 33.3,
      tax: 34.6,
      name: "Götene"
    },
    {
      id: 50,
      churchTax: 33.3,
      tax: 34.4,
      name: "Habo"
    },
    {
      id: 200,
      churchTax: 34.2,
      tax: 35.3,
      name: "Hagfors"
    },
    {
      id: 96,
      churchTax: 32.5,
      tax: 33.6,
      name: "Hallsberg"
    },
    {
      id: 234,
      churchTax: 32.9,
      tax: 33.9,
      name: "Hallstahammar"
    },
    {
      id: 33,
      churchTax: 31.1,
      tax: 32.1,
      name: "Halmstad"
    },
    {
      id: 201,
      churchTax: 33.5,
      tax: 34.3,
      name: "Hammarö"
    },
    {
      id: 163,
      churchTax: 32.1,
      tax: 32.9,
      name: "Haninge"
    },
    {
      id: 84,
      churchTax: 33,
      tax: 33.9,
      name: "Haparanda"
    },
    {
      id: 189,
      churchTax: 34,
      tax: 35.2,
      name: "Heby"
    },
    {
      id: 11,
      churchTax: 34.2,
      tax: 35.5,
      name: "Hedemora"
    },
    {
      id: 126,
      churchTax: 30.9,
      tax: 31.9,
      name: "Helsingborg"
    },
    {
      id: 257,
      churchTax: 33.7,
      tax: 35.1,
      name: "Herrljunga"
    },
    {
      id: 258,
      churchTax: 33.1,
      tax: 34.1,
      name: "Hjo"
    },
    {
      id: 23,
      churchTax: 34.9,
      tax: 36.1,
      name: "Hofors"
    },
    {
      id: 164,
      churchTax: 32.2,
      tax: 32.9,
      name: "Huddinge"
    },
    {
      id: 24,
      churchTax: 33.5,
      tax: 34.5,
      name: "Hudiksvall"
    },
    {
      id: 62,
      churchTax: 33.2,
      tax: 34.4,
      name: "Hultsfred"
    },
    {
      id: 34,
      churchTax: 32.2,
      tax: 33.7,
      name: "Hylte"
    },
    {
      id: 188,
      churchTax: 32.6,
      tax: 33.7,
      name: "Håbo"
    },
    {
      id: 95,
      churchTax: 33.6,
      tax: 34.8,
      name: "Hällefors"
    },
    {
      id: 41,
      churchTax: 34.2,
      tax: 35.7,
      name: "Härjedalen"
    },
    {
      id: 226,
      churchTax: 34.3,
      tax: 35.7,
      name: "Härnösand"
    },
    {
      id: 256,
      churchTax: 31.9,
      tax: 32.9,
      name: "Härryda"
    },
    {
      id: 125,
      churchTax: 31.3,
      tax: 32.5,
      name: "Hässleholm"
    },
    {
      id: 127,
      churchTax: 30.4,
      tax: 31.4,
      name: "Höganäs"
    },
    {
      id: 61,
      churchTax: 33,
      tax: 34.2,
      name: "Högsby"
    },
    {
      id: 129,
      churchTax: 31.3,
      tax: 32.6,
      name: "Hörby"
    },
    {
      id: 128,
      churchTax: 31.7,
      tax: 32.8,
      name: "Höör"
    },
    {
      id: 85,
      churchTax: 33.6,
      tax: 34.8,
      name: "Jokkmokk"
    },
    {
      id: 165,
      churchTax: 31.2,
      tax: 31.9,
      name: "Järfälla"
    },
    {
      id: 51,
      churchTax: 32.4,
      tax: 33.7,
      name: "Jönköping"
    },
    {
      id: 86,
      churchTax: 33,
      tax: 33.9,
      name: "Kalix"
    },
    {
      id: 63,
      churchTax: 32.9,
      tax: 34.1,
      name: "Kalmar"
    },
    {
      id: 259,
      churchTax: 32.6,
      tax: 33.8,
      name: "Karlsborg"
    },
    {
      id: 1,
      churchTax: 33.7,
      tax: 34.7,
      name: "Karlshamn"
    },
    {
      id: 97,
      churchTax: 33.3,
      tax: 34.1,
      name: "Karlskoga"
    },
    {
      id: 2,
      churchTax: 33,
      tax: 34,
      name: "Karlskrona"
    },
    {
      id: 202,
      churchTax: 33.2,
      tax: 34.2,
      name: "Karlstad"
    },
    {
      id: 154,
      churchTax: 33.3,
      tax: 34.4,
      name: "Katrineholm"
    },
    {
      id: 203,
      churchTax: 33.9,
      tax: 35,
      name: "Kil"
    },
    {
      id: 108,
      churchTax: 32.1,
      tax: 33.4,
      name: "Kinda"
    },
    {
      id: 87,
      churchTax: 33.5,
      tax: 34.4,
      name: "Kiruna"
    },
    {
      id: 131,
      churchTax: 30.7,
      tax: 32,
      name: "Klippan"
    },
    {
      id: 190,
      churchTax: 32.3,
      tax: 33.4,
      name: "Knivsta"
    },
    {
      id: 227,
      churchTax: 34.2,
      tax: 35.6,
      name: "Kramfors"
    },
    {
      id: 132,
      churchTax: 31.5,
      tax: 32.7,
      name: "Kristianstad"
    },
    {
      id: 204,
      churchTax: 34,
      tax: 35.1,
      name: "Kristinehamn"
    },
    {
      id: 42,
      churchTax: 33.7,
      tax: 35.1,
      name: "Krokom"
    },
    {
      id: 98,
      churchTax: 32.1,
      tax: 33.1,
      name: "Kumla"
    },
    {
      id: 35,
      churchTax: 31.9,
      tax: 33.1,
      name: "Kungsbacka"
    },
    {
      id: 236,
      churchTax: 33.2,
      tax: 34.3,
      name: "Kungsör"
    },
    {
      id: 260,
      churchTax: 32.8,
      tax: 33.8,
      name: "Kungälv"
    },
    {
      id: 130,
      churchTax: 29.1,
      tax: 30,
      name: "Kävlinge"
    },
    {
      id: 235,
      churchTax: 33.3,
      tax: 34.3,
      name: "Köping"
    },
    {
      id: 36,
      churchTax: 31.4,
      tax: 32.5,
      name: "Laholm"
    },
    {
      id: 133,
      churchTax: 30.9,
      tax: 31.9,
      name: "Landskrona"
    },
    {
      id: 99,
      churchTax: 33.7,
      tax: 34.9,
      name: "Laxå"
    },
    {
      id: 100,
      churchTax: 32.7,
      tax: 33.8,
      name: "Lekeberg"
    },
    {
      id: 12,
      churchTax: 33.8,
      tax: 35.2,
      name: "Leksand"
    },
    {
      id: 261,
      churchTax: 31.9,
      tax: 33,
      name: "Lerum"
    },
    {
      id: 73,
      churchTax: 33.2,
      tax: 34.5,
      name: "Lessebo"
    },
    {
      id: 166,
      churchTax: 30.8,
      tax: 31.5,
      name: "Lidingö"
    },
    {
      id: 262,
      churchTax: 32.4,
      tax: 33.7,
      name: "Lidköping"
    },
    {
      id: 263,
      churchTax: 33.8,
      tax: 34.8,
      name: "Lilla Edet"
    },
    {
      id: 101,
      churchTax: 33.7,
      tax: 34.9,
      name: "Lindesberg"
    },
    {
      id: 109,
      churchTax: 31.1,
      tax: 32.3,
      name: "Linköping"
    },
    {
      id: 74,
      churchTax: 32.5,
      tax: 33.8,
      name: "Ljungby"
    },
    {
      id: 25,
      churchTax: 34.2,
      tax: 35.4,
      name: "Ljusdal"
    },
    {
      id: 102,
      churchTax: 32.5,
      tax: 33.7,
      name: "Ljusnarsberg"
    },
    {
      id: 134,
      churchTax: 29.8,
      tax: 30.7,
      name: "Lomma"
    },
    {
      id: 13,
      churchTax: 34.1,
      tax: 35.2,
      name: "Ludvika"
    },
    {
      id: 88,
      churchTax: 32.9,
      tax: 33.9,
      name: "Luleå"
    },
    {
      id: 135,
      churchTax: 31.5,
      tax: 32.5,
      name: "Lund"
    },
    {
      id: 213,
      churchTax: 33.7,
      tax: 34.8,
      name: "Lycksele"
    },
    {
      id: 264,
      churchTax: 33.6,
      tax: 34.7,
      name: "Lysekil"
    },
    {
      id: 136,
      churchTax: 31.5,
      tax: 32.3,
      name: "Malmö"
    },
    {
      id: 14,
      churchTax: 34.1,
      tax: 35.4,
      name: "Malung-Sälen"
    },
    {
      id: 214,
      churchTax: 34.1,
      tax: 35.1,
      name: "Malå"
    },
    {
      id: 265,
      churchTax: 32.8,
      tax: 34.1,
      name: "Mariestad"
    },
    {
      id: 266,
      churchTax: 32.7,
      tax: 34,
      name: "Mark"
    },
    {
      id: 75,
      churchTax: 32,
      tax: 33.2,
      name: "Markaryd"
    },
    {
      id: 267,
      churchTax: 34.2,
      tax: 35.6,
      name: "Mellerud"
    },
    {
      id: 110,
      churchTax: 31.9,
      tax: 33,
      name: "Mjölby"
    },
    {
      id: 15,
      churchTax: 34.3,
      tax: 35.4,
      name: "Mora"
    },
    {
      id: 111,
      churchTax: 32.2,
      tax: 33.4,
      name: "Motala"
    },
    {
      id: 52,
      churchTax: 33,
      tax: 34.2,
      name: "Mullsjö"
    },
    {
      id: 269,
      churchTax: 34.4,
      tax: 35.6,
      name: "Munkedal"
    },
    {
      id: 205,
      churchTax: 34.1,
      tax: 35.2,
      name: "Munkfors"
    },
    {
      id: 268,
      churchTax: 31.6,
      tax: 32.3,
      name: "Mölndal"
    },
    {
      id: 64,
      churchTax: 32.6,
      tax: 33.5,
      name: "Mönsterås"
    },
    {
      id: 65,
      churchTax: 32.6,
      tax: 34.1,
      name: "Mörbylånga"
    },
    {
      id: 167,
      churchTax: 30.9,
      tax: 31.6,
      name: "Nacka"
    },
    {
      id: 103,
      churchTax: 33.2,
      tax: 34.5,
      name: "Nora"
    },
    {
      id: 237,
      churchTax: 33.9,
      tax: 35.2,
      name: "Norberg"
    },
    {
      id: 26,
      churchTax: 34.5,
      tax: 35.7,
      name: "Nordanstig"
    },
    {
      id: 215,
      churchTax: 33.9,
      tax: 34.9,
      name: "Nordmaling"
    },
    {
      id: 112,
      churchTax: 32.2,
      tax: 33.4,
      name: "Norrköping"
    },
    {
      id: 168,
      churchTax: 32.3,
      tax: 33.4,
      name: "Norrtälje"
    },
    {
      id: 216,
      churchTax: 34.1,
      tax: 35.1,
      name: "Norsjö"
    },
    {
      id: 66,
      churchTax: 33,
      tax: 34.2,
      name: "Nybro"
    },
    {
      id: 169,
      churchTax: 32.2,
      tax: 33.3,
      name: "Nykvarn"
    },
    {
      id: 155,
      churchTax: 32.6,
      tax: 33.9,
      name: "Nyköping"
    },
    {
      id: 170,
      churchTax: 32.1,
      tax: 33,
      name: "Nynäshamn"
    },
    {
      id: 53,
      churchTax: 32.8,
      tax: 34,
      name: "Nässjö"
    },
    {
      id: 27,
      churchTax: 34.6,
      tax: 35.8,
      name: "Ockelbo"
    },
    {
      id: 3,
      churchTax: 33.7,
      tax: 34.8,
      name: "Olofström"
    },
    {
      id: 16,
      churchTax: 34.5,
      tax: 35.6,
      name: "Orsa"
    },
    {
      id: 271,
      churchTax: 33.9,
      tax: 35.2,
      name: "Orust"
    },
    {
      id: 138,
      churchTax: 32.5,
      tax: 33.4,
      name: "Osby"
    },
    {
      id: 67,
      churchTax: 32.6,
      tax: 33.8,
      name: "Oskarshamn"
    },
    {
      id: 28,
      churchTax: 33.7,
      tax: 34.8,
      name: "Ovanåker"
    },
    {
      id: 156,
      churchTax: 33.3,
      tax: 34.3,
      name: "Oxelösund"
    },
    {
      id: 91,
      churchTax: 33.4,
      tax: 34.7,
      name: "Pajala"
    },
    {
      id: 272,
      churchTax: 31.3,
      tax: 32.3,
      name: "Partille"
    },
    {
      id: 140,
      churchTax: 31.3,
      tax: 32.4,
      name: "Perstorp"
    },
    {
      id: 92,
      churchTax: 32.7,
      tax: 33.7,
      name: "Piteå"
    },
    {
      id: 44,
      churchTax: 35,
      tax: 36.2,
      name: "Ragunda"
    },
    {
      id: 217,
      churchTax: 33.8,
      tax: 34.9,
      name: "Robertsfors"
    },
    {
      id: 4,
      churchTax: 33.9,
      tax: 35,
      name: "Ronneby"
    },
    {
      id: 17,
      churchTax: 33.8,
      tax: 35.2,
      name: "Rättvik"
    },
    {
      id: 238,
      churchTax: 33.5,
      tax: 34.7,
      name: "Sala"
    },
    {
      id: 172,
      churchTax: 32.1,
      tax: 32.9,
      name: "Salem"
    },
    {
      id: 29,
      churchTax: 33.4,
      tax: 34.5,
      name: "Sandviken"
    },
    {
      id: 173,
      churchTax: 32.2,
      tax: 33.2,
      name: "Sigtuna"
    },
    {
      id: 141,
      churchTax: 31.4,
      tax: 32.6,
      name: "Simrishamn"
    },
    {
      id: 142,
      churchTax: 31.8,
      tax: 32.9,
      name: "Sjöbo"
    },
    {
      id: 273,
      churchTax: 32.3,
      tax: 33.5,
      name: "Skara"
    },
    {
      id: 218,
      churchTax: 33.2,
      tax: 34.4,
      name: "Skellefteå"
    },
    {
      id: 239,
      churchTax: 33.7,
      tax: 34.9,
      name: "Skinnskatteberg"
    },
    {
      id: 143,
      churchTax: 30.8,
      tax: 32,
      name: "Skurup"
    },
    {
      id: 274,
      churchTax: 32,
      tax: 33.2,
      name: "Skövde"
    },
    {
      id: 19,
      churchTax: 34.4,
      tax: 35.6,
      name: "Smedjebacken"
    },
    {
      id: 229,
      churchTax: 34.5,
      tax: 35.9,
      name: "Sollefteå"
    },
    {
      id: 175,
      churchTax: 30.3,
      tax: 31.1,
      name: "Sollentuna"
    },
    {
      id: 176,
      churchTax: 29.3,
      tax: 30,
      name: "Solna"
    },
    {
      id: 219,
      churchTax: 33.9,
      tax: 34.9,
      name: "Sorsele"
    },
    {
      id: 275,
      churchTax: 32.8,
      tax: 34.2,
      name: "Sotenäs"
    },
    {
      id: 144,
      churchTax: 29.3,
      tax: 30.4,
      name: "Staffanstorp"
    },
    {
      id: 276,
      churchTax: 33,
      tax: 34.1,
      name: "Stenungsund"
    },
    {
      id: 177,
      churchTax: 29.5,
      tax: 30.3,
      name: "Stockholm"
    },
    {
      id: 207,
      churchTax: 34,
      tax: 35.3,
      name: "Storfors"
    },
    {
      id: 220,
      churchTax: 33.8,
      tax: 35.1,
      name: "Storuman"
    },
    {
      id: 157,
      churchTax: 32.8,
      tax: 34,
      name: "Strängnäs"
    },
    {
      id: 277,
      churchTax: 33.4,
      tax: 34.6,
      name: "Strömstad"
    },
    {
      id: 45,
      churchTax: 34.4,
      tax: 35.8,
      name: "Strömsund"
    },
    {
      id: 178,
      churchTax: 31.1,
      tax: 31.8,
      name: "Sundbyberg"
    },
    {
      id: 230,
      churchTax: 33.7,
      tax: 34.9,
      name: "Sundsvall"
    },
    {
      id: 208,
      churchTax: 33.9,
      tax: 35.2,
      name: "Sunne"
    },
    {
      id: 240,
      churchTax: 33.4,
      tax: 34.6,
      name: "Surahammar"
    },
    {
      id: 145,
      churchTax: 31.3,
      tax: 32.6,
      name: "Svalöv"
    },
    {
      id: 146,
      churchTax: 30.8,
      tax: 31.7,
      name: "Svedala"
    },
    {
      id: 278,
      churchTax: 33.7,
      tax: 35.3,
      name: "Svenljunga"
    },
    {
      id: 206,
      churchTax: 33.6,
      tax: 34.8,
      name: "Säffle"
    },
    {
      id: 18,
      churchTax: 34.3,
      tax: 35.5,
      name: "Säter"
    },
    {
      id: 54,
      churchTax: 32.9,
      tax: 34.2,
      name: "Sävsjö"
    },
    {
      id: 30,
      churchTax: 33.6,
      tax: 34.5,
      name: "Söderhamn"
    },
    {
      id: 114,
      churchTax: 32.1,
      tax: 33.6,
      name: "Söderköping"
    },
    {
      id: 174,
      churchTax: 32.4,
      tax: 33.4,
      name: "Södertälje"
    },
    {
      id: 5,
      churchTax: 33.8,
      tax: 34.8,
      name: "Sölvesborg"
    },
    {
      id: 279,
      churchTax: 33.1,
      tax: 34.6,
      name: "Tanum"
    },
    {
      id: 280,
      churchTax: 32.1,
      tax: 33.1,
      name: "Tibro"
    },
    {
      id: 281,
      churchTax: 33.6,
      tax: 34.8,
      name: "Tidaholm"
    },
    {
      id: 192,
      churchTax: 32.5,
      tax: 33.9,
      name: "Tierp"
    },
    {
      id: 231,
      churchTax: 33.7,
      tax: 35,
      name: "Timrå"
    },
    {
      id: 76,
      churchTax: 32.5,
      tax: 33.8,
      name: "Tingsryd"
    },
    {
      id: 282,
      churchTax: 32.6,
      tax: 33.8,
      name: "Tjörn"
    },
    {
      id: 147,
      churchTax: 31.5,
      tax: 32.7,
      name: "Tomelilla"
    },
    {
      id: 209,
      churchTax: 34.2,
      tax: 35.4,
      name: "Torsby"
    },
    {
      id: 68,
      churchTax: 32.7,
      tax: 33.9,
      name: "Torsås"
    },
    {
      id: 284,
      churchTax: 32,
      tax: 33.3,
      name: "Tranemo"
    },
    {
      id: 55,
      churchTax: 32.5,
      tax: 33.5,
      name: "Tranås"
    },
    {
      id: 148,
      churchTax: 31.1,
      tax: 32.2,
      name: "Trelleborg"
    },
    {
      id: 285,
      churchTax: 32.4,
      tax: 33.5,
      name: "Trollhättan"
    },
    {
      id: 158,
      churchTax: 32.2,
      tax: 33.2,
      name: "Trosa"
    },
    {
      id: 180,
      churchTax: 31.7,
      tax: 32.5,
      name: "Tyresö"
    },
    {
      id: 179,
      churchTax: 29.9,
      tax: 30.7,
      name: "Täby"
    },
    {
      id: 283,
      churchTax: 32.6,
      tax: 33.9,
      name: "Töreboda"
    },
    {
      id: 286,
      churchTax: 33.1,
      tax: 34.2,
      name: "Uddevalla"
    },
    {
      id: 287,
      churchTax: 32.5,
      tax: 33.8,
      name: "Ulricehamn"
    },
    {
      id: 221,
      churchTax: 33.3,
      tax: 34.3,
      name: "Umeå"
    },
    {
      id: 182,
      churchTax: 31.4,
      tax: 32.3,
      name: "Upplands Väsby"
    },
    {
      id: 181,
      churchTax: 31.8,
      tax: 32.8,
      name: "Upplands-Bro"
    },
    {
      id: 193,
      churchTax: 32.2,
      tax: 33.3,
      name: "Uppsala"
    },
    {
      id: 77,
      churchTax: 33,
      tax: 34.1,
      name: "Uppvidinge"
    },
    {
      id: 115,
      churchTax: 32.7,
      tax: 33.9,
      name: "Vadstena"
    },
    {
      id: 56,
      churchTax: 32.3,
      tax: 33.4,
      name: "Vaggeryd"
    },
    {
      id: 116,
      churchTax: 33.1,
      tax: 34.4,
      name: "Valdemarsvik"
    },
    {
      id: 183,
      churchTax: 31.3,
      tax: 32.3,
      name: "Vallentuna"
    },
    {
      id: 20,
      churchTax: 34.3,
      tax: 35.6,
      name: "Vansbro"
    },
    {
      id: 289,
      churchTax: 32.8,
      tax: 34.3,
      name: "Vara"
    },
    {
      id: 37,
      churchTax: 31.1,
      tax: 32.2,
      name: "Varberg"
    },
    {
      id: 185,
      churchTax: 32,
      tax: 32.8,
      name: "Vaxholm"
    },
    {
      id: 149,
      churchTax: 29.1,
      tax: 30,
      name: "Vellinge"
    },
    {
      id: 58,
      churchTax: 32.6,
      tax: 33.8,
      name: "Vetlanda"
    },
    {
      id: 223,
      churchTax: 34.1,
      tax: 35.5,
      name: "Vilhelmina"
    },
    {
      id: 70,
      churchTax: 33.1,
      tax: 34.4,
      name: "Vimmerby"
    },
    {
      id: 224,
      churchTax: 34,
      tax: 35.1,
      name: "Vindeln"
    },
    {
      id: 159,
      churchTax: 33.8,
      tax: 34.8,
      name: "Vingåker"
    },
    {
      id: 290,
      churchTax: 32.6,
      tax: 33.8,
      name: "Vårgårda"
    },
    {
      id: 288,
      churchTax: 33.7,
      tax: 34.9,
      name: "Vänersborg"
    },
    {
      id: 222,
      churchTax: 33.6,
      tax: 34.6,
      name: "Vännäs"
    },
    {
      id: 184,
      churchTax: 32.3,
      tax: 33.3,
      name: "Värmdö"
    },
    {
      id: 57,
      churchTax: 32.1,
      tax: 33.4,
      name: "Värnamo"
    },
    {
      id: 69,
      churchTax: 32.5,
      tax: 33.8,
      name: "Västervik"
    },
    {
      id: 241,
      churchTax: 31.4,
      tax: 32.3,
      name: "Västerås"
    },
    {
      id: 78,
      churchTax: 31.6,
      tax: 32.7,
      name: "Växjö"
    },
    {
      id: 117,
      churchTax: 32.9,
      tax: 34.4,
      name: "Ydre"
    },
    {
      id: 150,
      churchTax: 31,
      tax: 32.1,
      name: "Ystad"
    },
    {
      id: 244,
      churchTax: 34,
      tax: 35.2,
      name: "Åmål"
    },
    {
      id: 225,
      churchTax: 34.5,
      tax: 35.9,
      name: "Ånge"
    },
    {
      id: 38,
      churchTax: 33.8,
      tax: 35.2,
      name: "Åre"
    },
    {
      id: 194,
      churchTax: 34.2,
      tax: 35.6,
      name: "Årjäng"
    },
    {
      id: 210,
      churchTax: 33.8,
      tax: 34.9,
      name: "Åsele"
    },
    {
      id: 119,
      churchTax: 30.9,
      tax: 32,
      name: "Åstorp"
    },
    {
      id: 105,
      churchTax: 33,
      tax: 34.1,
      name: "Åtvidaberg"
    },
    {
      id: 71,
      churchTax: 32.4,
      tax: 33.6,
      name: "Älmhult"
    },
    {
      id: 6,
      churchTax: 34.3,
      tax: 35.7,
      name: "Älvdalen"
    },
    {
      id: 186,
      churchTax: 33.6,
      tax: 34.6,
      name: "Älvkarleby"
    },
    {
      id: 79,
      churchTax: 32.8,
      tax: 33.9,
      name: "Älvsbyn"
    },
    {
      id: 118,
      churchTax: 29.7,
      tax: 30.9,
      name: "Ängelholm"
    },
    {
      id: 270,
      churchTax: 32.1,
      tax: 33.2,
      name: "Öckerö"
    },
    {
      id: 113,
      churchTax: 32.9,
      tax: 34.2,
      name: "Ödeshög"
    },
    {
      id: 104,
      churchTax: 32.1,
      tax: 33.2,
      name: "Örebro"
    },
    {
      id: 137,
      churchTax: 29.4,
      tax: 30.5,
      name: "Örkelljunga"
    },
    {
      id: 228,
      churchTax: 33.5,
      tax: 34.9,
      name: "Örnsköldsvik"
    },
    {
      id: 43,
      churchTax: 33.4,
      tax: 34.7,
      name: "Östersund"
    },
    {
      id: 171,
      churchTax: 30.9,
      tax: 31.8,
      name: "Österåker"
    },
    {
      id: 191,
      churchTax: 33.1,
      tax: 34.4,
      name: "Östhammar"
    },
    {
      id: 139,
      churchTax: 31.9,
      tax: 33,
      name: "Östra Göinge"
    },
    {
      id: 89,
      churchTax: 33.4,
      tax: 34.4,
      name: "Överkalix"
    },
    {
      id: 90,
      churchTax: 32.3,
      tax: 33.4,
      name: "Övertorneå"
    }
  ];

  factory.getTaxList = function () {
    return taxList;
  };

  return factory;
});