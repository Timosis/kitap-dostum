import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../data/clubs.dart';
import '../theme.dart';
import '../widgets/paper_card.dart';

class ClubsScreen extends StatefulWidget {
  const ClubsScreen({super.key});

  @override
  State<ClubsScreen> createState() => _ClubsScreenState();
}

class _ClubsScreenState extends State<ClubsScreen> {
  String _genre = 'Tümü';

  @override
  Widget build(BuildContext context) {
    final genres = <String>['Tümü', ...{for (final c in clubs) c.genre}];
    final list =
        _genre == 'Tümü' ? clubs : clubs.where((c) => c.genre == _genre).toList();

    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 20, 16, 28),
      children: [
        const Text('KEŞFET', style: eyebrowStyle),
        const SizedBox(height: 4),
        Text('Kulüpler', style: displayStyle(size: 24)),
        const SizedBox(height: 8),
        Text('${clubs.length} aktif kulüp, her biri kendi ritmiyle okuyor.',
            style: const TextStyle(fontSize: 13.5, color: AppColors.muted)),
        const SizedBox(height: 18),
        SizedBox(
          height: 36,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            itemCount: genres.length,
            separatorBuilder: (_, __) => const SizedBox(width: 8),
            itemBuilder: (_, i) {
              final g = genres[i];
              final selected = g == _genre;
              return GestureDetector(
                onTap: () => setState(() => _genre = g),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 14),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: selected ? AppColors.primary : AppColors.card,
                    borderRadius: BorderRadius.circular(999),
                    border: Border.all(
                      color: selected ? AppColors.primary : AppColors.border,
                    ),
                  ),
                  child: Text(
                    g,
                    style: TextStyle(
                      fontSize: 13,
                      color: selected ? Colors.white : AppColors.muted,
                    ),
                  ),
                ),
              );
            },
          ),
        ),
        const SizedBox(height: 18),
        for (final club in list)
          Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: PaperCard(
              clip: true,
              onTap: () => context.push('/kulupler/${club.slug}'),
              child: IntrinsicHeight(
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Container(width: 6, color: club.spine),
                    Expanded(
                      child: Padding(
                        padding: const EdgeInsets.all(16),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(club.genre.toUpperCase(),
                                          style: eyebrowStyle),
                                      const SizedBox(height: 4),
                                      Text(club.name,
                                          style: displayStyle(size: 18)),
                                    ],
                                  ),
                                ),
                                const Icon(Icons.chevron_right,
                                    color: AppColors.muted),
                              ],
                            ),
                            const SizedBox(height: 6),
                            Text(club.tagline,
                                style: const TextStyle(
                                    fontSize: 13, color: AppColors.muted)),
                            const SizedBox(height: 12),
                            Wrap(
                              spacing: 16,
                              runSpacing: 6,
                              children: [
                                InfoChip(
                                    icon: Icons.place_outlined,
                                    label: club.city),
                                InfoChip(
                                    icon: Icons.group_outlined,
                                    label: '${club.members}'),
                                InfoChip(
                                    icon: Icons.calendar_month_outlined,
                                    label: club.cadence),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
      ],
    );
  }
}
