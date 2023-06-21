// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for ( i = 5; i < 100; i++) {
    console.log(i);
}




// 2. ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (i = 0; i < array1.length; i++ ) {
  if(array1[i] > 0 && array1[i] < 10 ) {
    console.log(array1[i])
  }
}






// 3. ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let item of array2) {
  if(item == 5) {
    console.log("aris 5");
    break;
  }
}




// 4. ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3 = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < array3.length; i++ ) {
  sum += array3[i];
}
console.log(sum) 


// 5. გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემენტების რაოდენობაზე)

let array4 = [1, 2, 3, 7, 6, 9];

let sum1 = 0;

for (let i = 0; i < array4.length; i++ ) {
    sum1 += array4[i];
  }

console.log(sum1 / array4.length)




// 6. მოცემულია მასივი გამოიტანეთ ყველა რიცხვი 7 ის გარდა

let array5 = [1, 2, 3, 7, 6, 9];

for (let item of array5) {
    if(item == 7) {
      continue;    
    }
  console.log(item);
}


