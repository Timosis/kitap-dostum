import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../data/clubs.dart';
import '../theme.dart';
import '../widgets/paper_card.dart';

class CalendarScreen extends StatelessWidget {
  const CalendarScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 20, 16, 28),
      children: [
        const Text('PROGRAM', style: eyebrowStyle),
        const SizedBox(height: 4),
        Text('Buluşma takvimi', style: displayStyle(size: 24)),
        const SizedBox(height: 8),
        const Text('Yaklaşan tüm kulüp buluşmaları tek yerde.',
            style: TextStyle(fontSize: 13.5, color: AppColors.muted)),
        const SizedBox(height: 20),
        for (final m in meetings)
          Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: PaperCard(
              onTap: () => context.push('/kulupler/${m.slug}'),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Expanded(
                        child: Text(m.club, style: displayStyle(size: 17)),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: AppColors.accent,
                          borderRadius: BorderRadius.circular(999),
                        ),
                        child: Text(m.date,
                            style: const TextStyle(fontSize: 12)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Text.rich(
                    TextSpan(
                      style: const TextStyle(
                          fontSize: 13, color: AppColors.muted),
                      children: [
                        const TextSpan(text: 'Okunan kitap: '),
                        TextSpan(
                          text: m.book,
                          style: const TextStyle(color: AppColors.foreground),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 10),
                  Wrap(
                    spacing: 16,
                    runSpacing: 6,
                    children: [
                      InfoChip(icon: Icons.schedule, label: m.time),
                      InfoChip(icon: Icons.place_outlined, label: m.place),
                    ],
                  ),
                ],
              ),
            ),
          ),
      ],
    );
  }
}
