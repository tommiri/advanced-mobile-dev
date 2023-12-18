class Person {
  String _name;
  String get name => _name;
  set name(String value) {
    if (value.isNotEmpty) {
      _name = value;
    }
  }

  int _age;
  int get age => _age;
  set age(int value) {
    if (!value.isNegative) {
      _age = value;
    }
  }

  int _weight;
  int get weight => _weight;
  set weight(int value) {
    if (!value.isNegative) {
      _weight = value;
    }
  }

  int _height;
  int get height => _height;
  set height(int value) {
    if (!value.isNegative) {
      _height = value;
    }
  }

  Person(this._name, this._age, [this._weight = 0, this._height = 0]);

  Person.verySmallPerson(this._name, this._age,
      [this._weight = 0, this._height = 50]);

  @override
  String toString() {
    return 'Name: $_name\nAge: $_age\nWeight: $_weight kg\nHeight: $_height cm';
  }
}
