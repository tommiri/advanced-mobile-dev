import 'package:main/person.dart';

class Student extends Person {
  // Student ID shouldn't change after initializing
  final int _studentId;
  int get studentId => _studentId;

  int _creditPoints;
  int get creditPoints => _creditPoints;
  set creditPoints(int value) {
    // Shouldn't be able to lose credit points
    if (value > _creditPoints) {
      _creditPoints = value;
    }
  }

  Student(super._name, super._age, this._studentId, this._creditPoints);

  @override
  String toString() {
    return '${super.toString()}\nStudent ID: $studentId\nCredit points: $_creditPoints';
  }
}
