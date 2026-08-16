import 'package:flutter/material.dart';

class CurrentBook {
  final String title;
  final String author;
  final int progress;

  const CurrentBook({
    required this.title,
    required this.author,
    required this.progress,
  });
}

class Meeting {
  final String date;
  final String time;
  final String place;

  const Meeting({required this.date, required this.time, required this.place});
}

class Club {
  final String slug;
  final String name;
  final String tagline;
  final String city;
  final int members;
  final String cadence;
  final String genre;
  final CurrentBook currentBook;
  final Meeting nextMeeting;
  final Color spine;

  const Club({
    required this.slug,
    required this.name,
    required this.tagline,
    required this.city,
    required this.members,
    required this.cadence,
    required this.genre,
    required this.currentBook,
    required this.nextMeeting,
    required this.spine,
  });
}

class MeetingEntry {
  final String club;
  final String slug;
  final String book;
  final String date;
  final String time;
  final String place;

  const MeetingEntry({
    required this.club,
    required this.slug,
    required this.book,
    required this.date,
    required this.time,
    required this.place,
  });
}
