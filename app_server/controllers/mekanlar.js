var express = require('express');
var router = express.Router();
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste', 
    { 'baslik': 'Anasayfa',
      'footer':' Yücelen ÜSTÜN 2020',
      'sayfaBaslik':{
        'siteAd':'Mekan 32',
        'aciklama':'Isparta civarındaki mekanları keşfedin!'
        },
        'mekanlar':[
            {
                'ad':'Starbucks',
                'adres':'Centrum Garden',
                'puan':'3',
                'imkanlar':['Kahve','Çay','Pasta'],
                'mesafe':'10Km'
            },
            {
                'ad':'Gloria Jeans',
                'adres':'Iyaş Avm',
                'puan':'2',
                'imkanlar':['Kahve','Çay','Kek'],
                'mesafe':'5 km'
                
            },
              {
                'ad':'Burger King',
                'adres':'Centrum Garden',
                'puan':'3',
                'imkanlar':['Hamburger','Patates kızartması','Dondurma'],
                'mesafe':'10Km'
            },
              {
                'ad':'BayDöner',
                'adres':'Centrum Garden',
                'puan':'3',
                'imkanlar':['Döner','İskender','Kebap'],
                'mesafe':'10Km'
            },
              {
                'ad':'Çayhane',
                'adres':'Centrum Garden',
                'puan':'3',
                'imkanlar':['Kahve','Çay','Pasta'],
                'mesafe':'10Km'
            },
        ]
     }
    );
}


const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', { 
      'baslik': 'Mekan Bilgisi',
      'sayfaBaslik':'Starbucks',
      'footer':' Yücelen ÜSTÜN 2020',
      'mekanBilgisi':{
          'ad':'Starbucks',
          'adres':'Centrum Garden',
          'puan':3,
          'imkanlar':['Kahve','Çay','Pasta'],
          'koordinatlar':{
              'enlem':'37.781885',
              'boylam':'30.566034'
          },
          'saatler':[
              {
                  'gunler':'Pazartesi-Cuma',
                  'acilis':'7:00',
                  'kapanis':'22:30',
                  'kapali': false
              },
              {
                  'gunler':'Pazar',
                  'kapali':true
              }
          ],
          'yorumlar':[
              {
                  'yorumYapan':'Berk ÜSTÜN',
                  'puan':3,
                  'tarih': "18 Ekim 2017",
                  'yorumMetni':'Kahveleri çok güzel değildi.'
              }
          ]
      }
  });
}


const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { baslik: 'Yorum Ekle',
                           'footer':' Yücelen ÜSTÜN 2020',
                           });
}


module.exports=
{
    anaSayfa,mekanBilgisi,yorumEkle
    
}