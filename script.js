//Hello world
alert("hello world");

//Variabel

// Let keyword
let firstName = "John";
firstName = "Doe";
console.log(firstName);

const PI = '3.14';
//PI = '3.14';
console.log(PI);
 
const a = 9;
const b = 3;
const c = a/b;
console.log(c);

let namaDepan = "John";
let namaBelakang = "Doe";
let fullName = namaDepan + ' ' + namaBelakang;
console.log(fullName)

//Operator perbandingan
let x = 10;
let y =20;
console.log(x < y);

let age = 15;
if (age >= 18 && age <=20) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

//looping


for(let kue = 3; kue >=0; kue--)
{
    console.log("kue ke-" +kue);
}

//function
function tambah(angka1, angka2){
    return angka1 + angka2;
}
console.log(tambah(10,5));

let angka = [];
angka[0] = 10;
angka[1] = 20;
angka[2] = 30;
angka[3] = 40;
console.log(angka.sort());

let buah = {
    nama = "Apel", 
    warna: "merah",
    rasa: "manis"
};
