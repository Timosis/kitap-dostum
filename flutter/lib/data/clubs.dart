import 'package:flutter/material.dart';

import '../models/club.dart';

const clubs = <Club>[
  Club(
    slug: 'gece-kutuphanesi',
    name: 'Gece Kütüphanesi',
    tagline: 'Ay ışığında modern klasikler okuyan sakin bir topluluk.',
    city: 'İstanbul · Kadıköy',
    members: 24,
    cadence: 'İki haftada bir, Çarşamba',
    genre: 'Modern Klasik',
    currentBook: CurrentBook(
      title: 'Tutunamayanlar',
      author: 'Oğuz Atay',
      progress: 62,
    ),
    nextMeeting: Meeting(
      date: '27 Ağustos',
      time: '19:30',
      place: 'Moda Sahil Kahvesi',
    ),
    spine: Color(0xFF2F5D46),
  ),
  Club(
    slug: 'kirmizi-defter',
    name: 'Kırmızı Defter',
    tagline: 'Her ay bir polisiye, her buluşmada yeni bir şüpheli.',
    city: 'Ankara · Kızılay',
    members: 18,
    cadence: 'Ayda bir, Cumartesi',
    genre: 'Polisiye',
    currentBook: CurrentBook(
      title: 'Şibumi',
      author: 'Trevanian',
      progress: 35,
    ),
    nextMeeting: Meeting(
      date: '5 Eylül',
      time: '15:00',
      place: 'Kitapevi Pasajı',
    ),
    spine: Color(0xFFB5502A),
  ),
  Club(
    slug: 'deniz-feneri',
    name: 'Deniz Feneri',
    tagline: 'Şiir ve deneme okuyan, sesli okumayı seven küçük bir çevre.',
    city: 'İzmir · Alsancak',
    members: 12,
    cadence: 'Her Pazar',
    genre: 'Şiir & Deneme',
    currentBook: CurrentBook(
      title: 'Karanlıkta Kalanlar',
      author: 'Edip Cansever',
      progress: 80,
    ),
    nextMeeting: Meeting(
      date: '23 Ağustos',
      time: '11:00',
      place: 'Kordon Kütüphanesi',
    ),
    spine: Color(0xFFD9A441),
  ),
  Club(
    slug: 'yildiz-tozu',
    name: 'Yıldız Tozu',
    tagline: 'Bilimkurgu ve fantastik evrenlerde kaybolanlar için.',
    city: 'Çevrimiçi',
    members: 41,
    cadence: 'İki haftada bir, Perşembe',
    genre: 'Bilimkurgu',
    currentBook: CurrentBook(
      title: 'Dune',
      author: 'Frank Herbert',
      progress: 48,
    ),
    nextMeeting: Meeting(
      date: '28 Ağustos',
      time: '21:00',
      place: 'Video görüşme',
    ),
    spine: Color(0xFF4A5B8C),
  ),
  Club(
    slug: 'sabah-sayfalari',
    name: 'Sabah Sayfaları',
    tagline: 'Güne kahve ve kısa öykülerle başlayan erkenciler kulübü.',
    city: 'Bursa · Nilüfer',
    members: 15,
    cadence: 'Her Cumartesi, 09:00',
    genre: 'Öykü',
    currentBook: CurrentBook(
      title: 'Yaşasın Edebiyat',
      author: 'Sait Faik',
      progress: 22,
    ),
    nextMeeting: Meeting(
      date: '22 Ağustos',
      time: '09:00',
      place: 'Nilüfer Kahvecisi',
    ),
    spine: Color(0xFFC97B4A),
  ),
  Club(
    slug: 'arsiv-odasi',
    name: 'Arşiv Odası',
    tagline: 'Tarih ve biyografi meraklılarının uzun sohbetli buluşmaları.',
    city: 'İstanbul · Beyoğlu',
    members: 29,
    cadence: 'Ayda bir, Pazar',
    genre: 'Tarih',
    currentBook: CurrentBook(
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      progress: 55,
    ),
    nextMeeting: Meeting(
      date: '31 Ağustos',
      time: '16:00',
      place: 'Beyoğlu Kültür Evi',
    ),
    spine: Color(0xFF3B5F66),
  ),
];

Club? clubBySlug(String slug) {
  for (final club in clubs) {
    if (club.slug == slug) return club;
  }
  return null;
}

List<MeetingEntry> get meetings {
  final list = clubs
      .map(
        (c) => MeetingEntry(
          club: c.name,
          slug: c.slug,
          book: c.currentBook.title,
          date: c.nextMeeting.date,
          time: c.nextMeeting.time,
          place: c.nextMeeting.place,
        ),
      )
      .toList()
    ..sort((a, b) => a.date.compareTo(b.date));
  return list;
}
