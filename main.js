//taske 1
function calculateArea(radius){
    const area = Math.PI*radius**2;
     return area;
};
console.log(calculateArea(5));
console.log(calculateArea(10));

//taske 2
let reverseString= function (str){
   let rever= str.split('').reverse().join('');
    return rever;
}
console.log(reverseString('hello'));
console.log(reverseString('world'));


//taske 3
let filterEvenNumbers=(array)=>{
   let even=[];
  for (let i=0 ;i<array.length; i++){
   if (array[i]%2==0){
     even.push(array[i]);
   }
  }
  return even; 
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([11, 22, 33, 44, 55]));
//الاعداد الزوجية
//???????????????????????????????????????????????????????????


//taske 4
let library={
  books:[],
  addbook: function (book){
  this.books.push(book);   
 }
};

library.addbook({ title: '1984', author: 'George Orwell' });
library.addbook({ title: 'To Kill a Mockingbird', author: 'Harper Lee' });

console.log(library.books);
//???????????????????????????????????????????????????????????????????????????????

//taske 5
let numbers=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
function sumarray(array){
  for(let p=0 ; p<array.length ;p++ ){
   sum+=array[p];
  }
  return sum;
}
console.log(sumarray(numbers))


//taske 6
function countvowels(string){
  return string.match(/[aeiou]/gi).length;
}
console.log(countvowels('hello'));
console.log(countvowels('javascript'));

//taske 7
function capitalizeWords(string){
  return string.split(" ").map(word=>{
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  }).join(" ");
}
console.log(capitalizeWords('hello world'));
console.log(capitalizeWords('javascript is fun'));

//taske 8
function reverseWords(string){
  return string.split(' ').reverse();
}
console.log(reverseWords('Hello World'));
console.log(reverseWords('JavaScript is fun'))