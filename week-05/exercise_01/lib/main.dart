import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Hello World',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.amber),
        useMaterial3: true,
      ),
      home: const MyHomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Card(
            color: Theme.of(context).colorScheme.onPrimary,
            elevation: 8,
            child: const Padding(
              padding: EdgeInsets.all(10),
              child: Text(
                'Hello, world!',
                style: TextStyle(fontSize: 30),
              ),
            )),
      ),
      backgroundColor: Theme.of(context).colorScheme.primary,
    );
  }
}
