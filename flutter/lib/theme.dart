import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppColors {
  static const background = Color(0xFFF6F1E7);
  static const card = Color(0xFFFFFBF4);
  static const border = Color(0xFFE3D9C6);
  static const primary = Color(0xFF2F5D46);
  static const accent = Color(0xFFEFE3CC);
  static const foreground = Color(0xFF23201B);
  static const muted = Color(0xFF7A7269);
}

ThemeData buildTheme() {
  final base = ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: AppColors.primary,
      primary: AppColors.primary,
      surface: AppColors.card,
      brightness: Brightness.light,
    ),
    scaffoldBackgroundColor: AppColors.background,
  );

  return base.copyWith(
    textTheme: GoogleFonts.dmSansTextTheme(base.textTheme).apply(
      bodyColor: AppColors.foreground,
      displayColor: AppColors.foreground,
    ),
    dividerColor: AppColors.border,
  );
}

TextStyle displayStyle({double size = 20, FontWeight weight = FontWeight.w600}) =>
    GoogleFonts.fraunces(fontSize: size, fontWeight: weight, height: 1.15);

const eyebrowStyle = TextStyle(
  fontSize: 11,
  letterSpacing: 1.1,
  fontWeight: FontWeight.w600,
  color: AppColors.muted,
);
