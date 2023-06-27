// 1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს: 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function myFunction(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

let myresult = myFunction([2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]);

console.log(myresult);

// 2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: 10, 50, 6, 7, 8, 11, 6, 3, 9

function myFunction1(mysum) {
  let sum = 0;
  for (i = 0; i < mysum.length; i++) {
    sum += mysum[i];
  }
  return sum;
}

console.log(myFunction1([10, 50, 6, 7, 8, 11, 6, 3, 9]));

// 3. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

function myFunction3() {
  if (user.isloggedin == true) {
    console.log(
      user.firstname +
        " " +
        user.lastname +
        " " +
        "შესვლის სტატუსი: " +
        "'" +
        user.isloggedin +
        "'"
    );
  } else if (user.isloggedin == false) {
    console.log(
      user.firstname +
        " " +
        user.lastname +
        " " +
        "შესვლის სტატუსი: " +
        "'" +
        user.isloggedin +
        "'"
    );
  }
}

console.log(myFunction3());

// 4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function myFunction4(numarray) {
  let bro = Math.max.apply(Math, numarray);
  return bro;
}

console.log(myFunction4([10, 15, 200, 18, 201]));

// 5. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;

function myfunction5(mynumber) {
  let numberresult = "";
  if (mynumber % 2 == 0) {
    numberresult = "this number is even";
  } else {
    numberresult = "this number is odd";
  }
  return numberresult;
}

console.log(myfunction5(11));

// 6. მოცემულია მასივი: let array = [1,2,3,4,5]; for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1, 2, 3, 4, 5];

let reverseArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  const valueAtIndex = array[i];

  reverseArray.push(valueAtIndex);
}

console.log(reverseArray);

// 7. ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი.
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let userage = (userbirthdate, currentyear) => {
  let userage = currentyear - userbirthdate;

  let usercurrentage = userage > 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
  return usercurrentage;
};

let myuserage = userage(1987, 2023);

console.log(myuserage);
