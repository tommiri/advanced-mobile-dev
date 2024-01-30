import 'package:flutter/material.dart';
import 'package:weather_demo/screens/current_weather.dart';
import 'package:weather_demo/screens/forecast.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'My App',
      initialRoute: '/',
      routes: {
        '/': (context) => const CurrentWeather(),
        '/forecast': (context) => const Forecast(),
      },
    );
  }
}
