## Generics

- Like function arguments, but for types in class/function defiitions
- Allows use to define the type of a property/argument/return value at a future point
- Used heavily when writing reusable code

<br/>

## enum - enumeration

- Follow near-identical syntax rules as normal objects
- Creates an object with the same keys and values when converted from TS to JS
- Primary goal is to signal to other engineers that these are all closely related values
- Use whenever we have small fixed set of values that are all closely related and known at complie time

## Inheritance vs Composition

창문은 너비 높이 넓이 창문열기를 갖는다.
너비 높이 넓이는 사각형의 속성이다.
[x] 창문은 사각형 이다. (항상 사각형 이다.)
[o] 창문은 사각형 속성을 갖는다.(가끔 사각형 이다.)
네모난 창문/동그란 창문을 만들 때,
inheritance 개념으로 만들면 두개의 클래스가 만들어지고 창문열기 코드가 중복된다.
Composition 개념으로 만들면 창문이라는 클래스를 만들 때 동그라미, 사각형 인스턴스를 전달하면 되어 하나의 클래스로 가능하며 중복이없다.
창문과 사각형의 관계는 Compsition이 더 적절하다.

MatchReader와 CsvFileReader의 관계도 마찬가지이다.
MatchReader는 ApiReader를 가질 수도 있다.
[x] MatchReader는 CsvFileReader 이다.
[o] MatchReader는 CsvFileReader 속성를 갖는다.

### Inheritance

"is a"

### Composition

"has a"
