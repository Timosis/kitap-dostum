import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import 'screens/calendar_screen.dart';
import 'screens/club_detail_screen.dart';
import 'screens/clubs_screen.dart';
import 'screens/home_screen.dart';
import 'screens/shell_scaffold.dart';
import 'theme.dart';

void main() => runApp(const SayfaArasiApp());

final _router = GoRouter(
  initialLocation: '/',
  routes: [
    ShellRoute(
      builder: (context, state, child) =>
          ShellScaffold(location: state.uri.path, child: child),
      routes: [
        GoRoute(path: '/', builder: (_, __) => const HomeScreen()),
        GoRoute(path: '/kulupler', builder: (_, __) => const ClubsScreen()),
        GoRoute(path: '/takvim', builder: (_, __) => const CalendarScreen()),
      ],
    ),
    GoRoute(
      path: '/kulupler/:slug',
      builder: (_, state) =>
          ClubDetailScreen(slug: state.pathParameters['slug']!),
    ),
  ],
);

class SayfaArasiApp extends StatelessWidget {
  const SayfaArasiApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Sayfa Arası',
      debugShowCheckedModeBanner: false,
      theme: buildTheme(),
      routerConfig: _router,
    );
  }
}
