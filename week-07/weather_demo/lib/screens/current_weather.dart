import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class CurrentWeather extends StatefulWidget {
  const CurrentWeather({super.key});

  @override
  State<CurrentWeather> createState() => _CurrentWeatherState();
}

class _CurrentWeatherState extends State<CurrentWeather> {
  var cityName = 'Tampere';
  var currentWeather = '-';
  var temperature = 0.0;
  var windSpeed = 0.0;
  var icon = '';

  void fetchWeatherData() async {
    var uri = Uri.parse(
      'https://api.openweathermap.org/data/2.5/weather?q=Tampere&appid=8b08501d9a89bb0cd70d61a62642c0cf&units=metric',
    );

    var response = await http.get(uri);
    if (response.statusCode == 200) {
      var weatherData = json.decode(response.body);
      setState(() {
        currentWeather = weatherData['weather'][0]['main'];
        temperature = weatherData['main']['temp'];
        windSpeed = weatherData['wind']['speed'];
        icon = weatherData['weather'][0]['icon'];
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
          child: Text(
            cityName,
            style: const TextStyle(fontSize: 40),
          ),
        ),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            if (icon.isNotEmpty)
              Image.network(
                'https://openweathermap.org/img/wn/$icon@4x.png',
                width: 150,
              ),
            Text(
              currentWeather,
              style: const TextStyle(fontSize: 40),
            ),
            Text(
              '${temperature.toInt()}°C',
              style: const TextStyle(fontSize: 40),
            ),
            Text(
              '${windSpeed.toInt()} m/s',
              style: const TextStyle(fontSize: 40),
            ),
            ElevatedButton(
              child: const Text('Get weather'),
              onPressed: () => {
                fetchWeatherData(),
              },
            ),
            ElevatedButton(
              child: const Text('Weather forecast'),
              onPressed: () => {
                Navigator.pushNamed(context, '/forecast'),
              },
            ),
          ],
        ),
      ),
    );
  }
}
