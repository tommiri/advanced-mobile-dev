import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Demo app',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
            useMaterial3: true,
            colorScheme: ColorScheme.fromSeed(seedColor: Colors.red)),
        home: Scaffold(
            appBar: AppBar(
              backgroundColor: Colors.red,
              title: const Text('BMI Calculator'),
            ),
            body: const BmiUI()));
  }
}

class BmiUI extends StatefulWidget {
  const BmiUI({super.key});

  @override
  State<BmiUI> createState() => _BmiUIState();
}

class _BmiUIState extends State<BmiUI> {
  var weight = '';
  var height = '';
  var bmiResult = '';

  void calculateBMI() {
    if (weight.isNotEmpty && height.isNotEmpty) {
      try {
        var weightValue = double.parse(weight);
        var heightValue = double.parse(height) / 100;
        var bmi = weightValue / pow(heightValue, 2);
        setState(() {
          bmiResult = "BMI: ${bmi.toStringAsFixed(2)}";
        });
      } catch (e) {
        print(e);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          SizedBox(
            width: 250,
            child: TextField(
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                  border: OutlineInputBorder(), labelText: 'Weight (kg)'),
              onChanged: (value) => weight = value,
            ),
          ),
          const SizedBox(height: 20),
          SizedBox(
            width: 250,
            child: TextField(
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                  border: OutlineInputBorder(), labelText: 'Height (cm)'),
              onChanged: (value) => height = value,
            ),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
              onPressed: calculateBMI, child: const Text('Calculate BMI')),
          const SizedBox(height: 20),
          Text(bmiResult, style: const TextStyle(fontSize: 30))
        ],
      ),
    );
  }
}
