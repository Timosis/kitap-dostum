import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../data/clubs.dart';
import '../theme.dart';
import '../widgets/paper_card.dart';

const _features = [
  (Icons.group_outlined, 'Kulübünü kur', 'Dakikalar içinde bir kulüp aç.'),
  (Icons.bookmark_border, 'İlerlemeyi izle', 'Kim kaçıncı sayfada gör.'),
  (Icons.calendar_month_outlined, 'Buluşma planla', 'Tarih, saat ve mekân paylaş.'),
  (Icons.forum_outlined, 'Bölüm tartış', 'Notlar ve alıntılar düzenli.'),
];

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final featured = clubs.take(3).toList();
    final upcoming = meetings.take(3).toList();

    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 16, 16, 28),
      children: [
        PaperCard(
          clip: true,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                height: 150,
                width: double.infinity,
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    colors: [Color(0xFF2F5D46), Color(0xFFD9A441)],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                ),
                child: const Icon(Icons.local_library_outlined,
                    size: 56, color: Colors.white70),
              ),
              Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('OKUMA KULÜPLERİ İÇİN', style: eyebrowStyle),
                    const SizedBox(height: 8),
                    Text('Birlikte okumanın\nen güzel hâli',
                        style: displayStyle(size: 28)),
                    const SizedBox(height: 10),
                    const Text(
                      'Kulübünü kur, üyeleri bir arada tut, her buluşmayı zamanında planla.',
                      style: TextStyle(fontSize: 13.5, color: AppColors.muted),
                    ),
                    const SizedBox(height: 16),
                    SizedBox(
                      width: double.infinity,
                      child: FilledButton(
                        style: FilledButton.styleFrom(
                          backgroundColor: AppColors.primary,
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                          ),
                        ),
                        onPressed: () => context.go('/kulupler'),
                        child: const Text('Kulüpleri keşfet'),
                      ),
                    ),
                    const SizedBox(height: 8),
                    SizedBox(
                      width: double.infinity,
                      child: OutlinedButton(
                        style: OutlinedButton.styleFrom(
                          foregroundColor: AppColors.foreground,
                          side: const BorderSide(color: AppColors.border),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                          ),
                        ),
                        onPressed: () => context.go('/takvim'),
                        child: const Text('Buluşma takvimi'),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 16),
        Row(
          children: [
            for (final stat in [
              ('139', 'okur'),
              ('${clubs.length}', 'kulüp'),
              ('24', 'kitap'),
            ])
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: PaperCard(
                    padding: const EdgeInsets.symmetric(vertical: 12),
                    child: Column(
                      children: [
                        Text(stat.$1, style: displayStyle(size: 20)),
                        const SizedBox(height: 2),
                        Text(stat.$2,
                            style: const TextStyle(
                                fontSize: 12, color: AppColors.muted)),
                      ],
                    ),
                  ),
                ),
              ),
          ],
        ),
        const SizedBox(height: 28),
        Text('Kulübün için her şey', style: displayStyle(size: 18)),
        const SizedBox(height: 12),
        GridView.count(
          crossAxisCount: 2,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          mainAxisSpacing: 12,
          crossAxisSpacing: 12,
          childAspectRatio: 1.15,
          children: [
            for (final f in _features)
              PaperCard(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      width: 36,
                      height: 36,
                      decoration: BoxDecoration(
                        color: AppColors.accent,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Icon(f.$1, size: 18, color: AppColors.primary),
                    ),
                    const Spacer(),
                    Text(f.$2,
                        style: const TextStyle(
                            fontSize: 13.5, fontWeight: FontWeight.w600)),
                    const SizedBox(height: 4),
                    Text(f.$3,
                        style: const TextStyle(
                            fontSize: 11.5, color: AppColors.muted)),
                  ],
                ),
              ),
          ],
        ),
        const SizedBox(height: 28),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text('Öne çıkan kulüpler', style: displayStyle(size: 18)),
            TextButton(
              onPressed: () => context.go('/kulupler'),
              child: const Text('Tümü',
                  style: TextStyle(color: AppColors.primary)),
            ),
          ],
        ),
        for (final club in featured)
          Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: PaperCard(
              clip: true,
              onTap: () => context.push('/kulupler/${club.slug}'),
              child: IntrinsicHeight(
                child: Row(
                  children: [
                    Container(width: 6, color: club.spine),
                    Expanded(
                      child: Padding(
                        padding: const EdgeInsets.all(16),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(club.genre.toUpperCase(), style: eyebrowStyle),
                            const SizedBox(height: 4),
                            Text(club.name,
                                style: const TextStyle(
                                    fontSize: 15.5,
                                    fontWeight: FontWeight.w600)),
                            const SizedBox(height: 4),
                            Text('${club.city} · ${club.members} üye',
                                style: const TextStyle(
                                    fontSize: 12, color: AppColors.muted)),
                          ],
                        ),
                      ),
                    ),
                    const Icon(Icons.chevron_right, color: AppColors.muted),
                    const SizedBox(width: 8),
                  ],
                ),
              ),
            ),
          ),
        const SizedBox(height: 16),
        Text('Bu haftaki buluşmalar', style: displayStyle(size: 18)),
        const SizedBox(height: 12),
        PaperCard(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Column(
            children: [
              for (final m in upcoming)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(m.club,
                          style: const TextStyle(
                              fontSize: 13.5, fontWeight: FontWeight.w600)),
                      const SizedBox(height: 2),
                      Text('${m.date} · ${m.time} · ${m.place}',
                          style: const TextStyle(
                              fontSize: 12, color: AppColors.muted)),
                    ],
                  ),
                ),
            ],
          ),
        ),
      ],
    );
  }
}
