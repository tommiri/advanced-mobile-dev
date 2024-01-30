import 'package:flutter/material.dart';
import 'package:sensors_plus/sensors_plus.dart';
import 'package:location/location.dart';
import 'package:permission_handler/permission_handler.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  double? latitude = 0.0;
  double? longitude = 0.0;

  var xSensorValue = 0.0;
  var ySensorValue = 0.0;
  var zSensorValue = 0.0;

  void startGPS() async {
    if (await Permission.location.request().isGranted) {
      var location = Location();

      var locationData = await location.getLocation();
      setState(() {
        latitude = locationData.latitude;
        longitude = locationData.longitude;
      });

      location.onLocationChanged.listen((event) {
        setState(() {
          latitude = event.latitude;
          longitude = event.longitude;
        });
      });
    }
  }

  void startSensors() {
    accelerometerEventStream(
      samplingPeriod: const Duration(milliseconds: 10),
    ).listen((event) {
      setState(() {
        xSensorValue = event.x;
        ySensorValue = event.y;
        zSensorValue = event.z;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Device API tests'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Lat: ${latitude?.toStringAsFixed(2)}',
                style: const TextStyle(fontSize: 40),
              ),
              Text(
                'Lng: ${longitude?.toStringAsFixed(2)}',
                style: const TextStyle(fontSize: 40),
              ),
              ElevatedButton(
                onPressed: () {
                  startGPS();
                },
                child: const Text('Start GPS'),
              ),
              const SizedBox(
                height: 50,
              ),
              Text(
                'x: ${xSensorValue.toStringAsFixed(2)}',
                style: const TextStyle(fontSize: 40),
              ),
              Text(
                'y: ${ySensorValue.toStringAsFixed(2)}',
                style: const TextStyle(fontSize: 40),
              ),
              Text(
                'z: ${zSensorValue.toStringAsFixed(2)}',
                style: const TextStyle(fontSize: 40),
              ),
              ElevatedButton(
                onPressed: () {
                  startSensors();
                },
                child: const Text('Start sensors'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
