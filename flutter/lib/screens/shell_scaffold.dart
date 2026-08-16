import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../theme.dart';

const _tabs = [
  ('/', 'Ana Sayfa', Icons.home_outlined),
  ('/kulupler', 'Kulüpler', Icons.menu_book_outlined),
  ('/takvim', 'Takvim', Icons.calendar_month_outlined),
];

class ShellScaffold extends StatelessWidget {
  const ShellScaffold({super.key, required this.child, required this.location});

  final Widget child;
  final String location;

  int get _index {
    final i = _tabs.indexWhere((t) => t.$1 == location);
    return i < 0 ? 0 : i;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: AppColors.background.withValues(alpha: 0.95),
        surfaceTintColor: Colors.transparent,
        elevation: 0,
        titleSpacing: 16,
        title: Row(
          children: [
            Container(
              width: 32,
              height: 32,
              decoration: BoxDecoration(
                color: AppColors.primary,
                borderRadius: BorderRadius.circular(9),
              ),
              child: const Icon(Icons.auto_stories,
                  size: 17, color: Colors.white),
            ),
            const SizedBox(width: 10),
            Text('Sayfa Arası', style: displayStyle(size: 17)),
          ],
        ),
        actions: [
          Container(
            margin: const EdgeInsets.only(right: 16),
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              color: AppColors.accent,
              borderRadius: BorderRadius.circular(999),
            ),
            child: const Text('Beta', style: TextStyle(fontSize: 11)),
          ),
        ],
        bottom: const PreferredSize(
          preferredSize: Size.fromHeight(1),
          child: Divider(height: 1, color: AppColors.border),
        ),
      ),
      body: SafeArea(top: false, child: child),
      bottomNavigationBar: Container(
        decoration: const BoxDecoration(
          color: AppColors.card,
          border: Border(top: BorderSide(color: AppColors.border)),
        ),
        child: NavigationBarTheme(
          data: NavigationBarThemeData(
            backgroundColor: Colors.transparent,
            indicatorColor: AppColors.accent,
            labelTextStyle: WidgetStateProperty.all(
              const TextStyle(fontSize: 11, fontWeight: FontWeight.w500),
            ),
          ),
          child: NavigationBar(
            height: 64,
            selectedIndex: _index,
            onDestinationSelected: (i) => context.go(_tabs[i].$1),
            destinations: [
              for (final tab in _tabs)
                NavigationDestination(icon: Icon(tab.$3), label: tab.$2),
            ],
          ),
        ),
      ),
    );
  }
}
