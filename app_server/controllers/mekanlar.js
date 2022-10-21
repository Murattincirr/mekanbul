
var express = require("express");

const anaSayfa = function(req,res){
    res.render("anasayfa",{
    "baslik":"Anasayfa",
    "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"Civardaki Mekanları Keşfet!"
    },
    "mekanlar":[
        {
            "ad":"Starbucks",
            "puan": "3",
            "adres":"Centrum Garden AVM",
            "imkanlar":["Kahve","Çay","Kek"],
            "mesafe":"10km"
        },
        {
            "ad":"Arabica",
            "puan": "4",
            "adres":"Doğu Kampüsü",
            "imkanlar":["Kahve"],
            "mesafe":"4km"
        },
        {
            "ad":"Köfteci Yusuf",
            "puan": "5",
            "adres":"Çünür",
            "imkanlar":["Köfte"],
            "mesafe":"7km"
        },
        ]   
    })
};
        

const mekanBilgisi = function(req,res){
    res.render("mekanbilgisi",
    {"baslik":"Mekan Bilgisi",
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Startbucks",
        "puan":"3",
        "adres":"Centrum Garden",
        "saatler":[
            {
            "gunler":"Pazartesi - Cuma",
            "acilis":"9:00 - 23:00",
            "kapali":"false"
            },
            {
            "gunler":"Cumartesi - Pazar",
            "acilis":"10:00 - 23:00",
            "kapali":"false"
            }
        ],
        "imkanlar":["Kahce","Çay","Kek"],
        "koordinatlar":{
            "enlem":"37.7",
            "boylam":"30.5"
        },
        "yorumlar":[
        {
            "yorumYapan":"Ferdi KIZGIR",
            "yorumMetni":"Nasıll yapıyor",
            "tarih":"12 EKİM 2022",
            "puan":"2"
        }
    ]
}



});
};

const yorumEkle = function(req,res,next){
    res.render("yorumekle",{title:"Yorum Ekle"});
};

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
};
