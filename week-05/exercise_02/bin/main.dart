import "package:main/person.dart";
import "package:main/student.dart";

void main() {
  var person = Person('Guy', 30, 75, 180);
  var small = Person.verySmallPerson('Small', 0);
  var student = Student('Tommi', 24, 123456, 140);

  var people = <Person>[];
  people.addAll([person, small, student]);

  for (var p in people) {
    print('$p\n');
  }
}
