const str="Hello";
console.log(str);
let newResult=str.slice(0,2);
console.log(newResult);

const str1="JavaScript";
console.log(str1);
let updatedResult=str1.slice(-3,-1);
console.log(updatedResult);


const string="hellojavascript"
console.log(string.length);
let newres=string.substring(0,8);
console.log(newres);

const str2="ViratKohli";
let newdata=str2.substring(5,-1)
console.log(newdata);


const str3="RohitSharma";
let newdata1=str3.substr(0,5);
console.log(newdata1);

let str5="5";
let resulted=str5.padStart(5,"X");
console.log(resulted);

let str6="HelloCuteBoy";
console.log(str6.repeat(10));



var str7="Virat Loves Batting";
console.log(str7.replace("Batting","Bowling"));

//case :For case senstive
var str8="Rohit love Batting";
console.log(str8.replace(/batting/i,"bowling"));


var str9="Dhoni loves wicketkeeping for india in Australia versus india tour"

console.log(str9.replace(/india/g,"India"));