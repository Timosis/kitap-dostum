# Sayfa Arası — Flutter mobil uygulaması

Kitap kulüpleri uygulamasının Flutter (Android + iOS) sürümü.

## Çalıştırma

```bash
cd flutter
flutter create .          # android/ ios/ platform klasörlerini üretir
flutter pub get
flutter run
```

## Yapı

- `lib/main.dart` — uygulama girişi ve go_router yönlendirmeleri
- `lib/theme.dart` — kağıt dokulu renk paleti ve tipografi (Fraunces + DM Sans)
- `lib/models/club.dart`, `lib/data/clubs.dart` — veri modeli ve örnek kulüpler
- `lib/screens/` — Ana Sayfa, Kulüpler, Kulüp Detayı, Takvim, alt sekme kabuğu
- `lib/widgets/paper_card.dart` — ortak kart ve bilgi rozeti bileşenleri

Not: Bu klasör web önizlemesinden bağımsızdır; Lovable içinde çalışmaz, yerel Flutter SDK ile çalıştırılır.
