import 'package:flutter/material.dart';

import '../data/clubs.dart';
import '../theme.dart';
import '../widgets/paper_card.dart';

class ClubDetailScreen extends StatefulWidget {
  const ClubDetailScreen({super.key, required this.slug});

  final String slug;

  @override
  State<ClubDetailScreen> createState() => _ClubDetailScreenState();
}

class _ClubDetailScreenState extends State<ClubDetailScreen> {
  bool _joined = false;

  @override
  Widget build(BuildContext context) {
    final club = clubBySlug(widget.slug);

    if (club == null) {
      return const Scaffold(
        body: Center(child: Text('Kulüp bulunamadı')),
      );
    }

    return Scaffold(
      appBar: AppBar(
        backgroundColor: AppColors.background,
        surfaceTintColor: Colors.transparent,
        elevation: 0,
        title: const Text('Kulüpler', style: TextStyle(fontSize: 15)),
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 28),
        children: [
          PaperCard(
            clip: true,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(height: 10, color: club.spine),
                Padding(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(club.genre.toUpperCase(), style: eyebrowStyle),
                      const SizedBox(height: 4),
                      Text(club.name, style: displayStyle(size: 24)),
                      const SizedBox(height: 8),
                      Text(club.tagline,
                          style: const TextStyle(
                              fontSize: 13.5, color: AppColors.muted)),
                      const SizedBox(height: 16),
                      Wrap(
                        spacing: 16,
                        runSpacing: 8,
                        children: [
                          InfoChip(
                              icon: Icons.place_outlined, label: club.city),
                          InfoChip(
                              icon: Icons.group_outlined,
                              label: '${club.members} üye'),
                          InfoChip(
                              icon: Icons.calendar_month_outlined,
                              label: club.cadence),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          PaperCard(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Şu an okunuyor',
                    style:
                        TextStyle(fontSize: 15, fontWeight: FontWeight.w600)),
                const SizedBox(height: 8),
                Text(club.currentBook.title, style: displayStyle(size: 20)),
                Text(club.currentBook.author,
                    style: const TextStyle(
                        fontSize: 13, color: AppColors.muted)),
                const SizedBox(height: 16),
                ClipRRect(
                  borderRadius: BorderRadius.circular(999),
                  child: LinearProgressIndicator(
                    value: club.currentBook.progress / 100,
                    minHeight: 8,
                    backgroundColor: AppColors.accent,
                    valueColor:
                        const AlwaysStoppedAnimation(AppColors.primary),
                  ),
                ),
                const SizedBox(height: 8),
                Text('Kulüp ortalaması %${club.currentBook.progress}',
                    style: const TextStyle(
                        fontSize: 13, color: AppColors.muted)),
              ],
            ),
          ),
          const SizedBox(height: 16),
          PaperCard(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Sonraki buluşma',
                    style:
                        TextStyle(fontSize: 15, fontWeight: FontWeight.w600)),
                const SizedBox(height: 8),
                Text(club.nextMeeting.date, style: displayStyle(size: 20)),
                const SizedBox(height: 12),
                InfoChip(icon: Icons.schedule, label: club.nextMeeting.time),
                const SizedBox(height: 8),
                InfoChip(
                    icon: Icons.place_outlined, label: club.nextMeeting.place),
                const SizedBox(height: 16),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: AppColors.accent,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: const Text(
                    'Bu buluşmada kitabın ilk yarısı konuşulacak. Not defterini getir.',
                    style: TextStyle(fontSize: 13),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
          SizedBox(
            width: double.infinity,
            child: FilledButton(
              style: FilledButton.styleFrom(
                backgroundColor:
                    _joined ? AppColors.accent : AppColors.primary,
                foregroundColor:
                    _joined ? AppColors.foreground : Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              onPressed: () => setState(() => _joined = !_joined),
              child: Text(_joined ? 'Katıldın ✓' : 'Kulübe katıl'),
            ),
          ),
        ],
      ),
    );
  }
}
