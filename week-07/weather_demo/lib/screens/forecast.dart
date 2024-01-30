import 'package:flutter/material.dart';

class WeatherData {
  final String description;
  final double temperature;
  final String icon;
  final String timestamp;

  const WeatherData(
    this.description,
    this.temperature,
    this.icon,
    this.timestamp,
  );
}

final List<WeatherData> weatherForecast = [
  const WeatherData("Sunny", -10, "01d", '12:00'),
  const WeatherData("Sunny", -12, "01d", '13:00'),
  const WeatherData("Snow", -14, "13d", '14:00'),
  const WeatherData("Snow", -16, "13d", '15:00'),
  const WeatherData("Snow", -18, "13d", '16:00'),
];

class Forecast extends StatelessWidget {
  const Forecast({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Tampere forecast',
          style: TextStyle(fontSize: 30),
        ),
      ),
      body: ListView.builder(
        itemCount: weatherForecast.length,
        itemBuilder: (context, index) => Card(
          child: ListTile(
            leading: Image.network(
              'https://openweathermap.org/img/wn/${weatherForecast[index].icon}@4x.png',
            ),
            title: Text(weatherForecast[index].description),
            subtitle: Text('${weatherForecast[index].temperature.toInt()}°C'),
            trailing: Text(weatherForecast[index].timestamp),
          ),
        ),
      ),
    );
  }
}
