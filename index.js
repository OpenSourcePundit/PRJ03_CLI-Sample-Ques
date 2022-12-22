//https://replit.com/@ShashankKumar45/CLI-Sample-Ques-NEOGCamp?v=1
var readlineSync = require('readline-sync');
var sampleQues = [
  { 
    num : 5,
    ques : "Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?" },
  {
    num : 14,
    ques : "Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age."},
  {
    num : 15,
    ques : "Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power."},
  {
    num: 16,
    ques: "Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.Write a function which takes two objects and return the person with more power based on their name and power both."},
  {
    num: 17,
    ques : "Create a CLI app which would detect fake news. This app will take news as input and then source.If source is Facebook or whatsapp then it will output user saying. Don't believe things on FB and Whatsapp.Can you extend this to include telegram as well?"}]

function ques16()
{
  var object = [
    {
      name: "Ram",
      power: 2500,
      yuga: "treta"
    },
    {
      name :"Krishna",
      power: 2325,
      yuga: "dwapar"
    }]
   console.log(object[0].name+"| length: "+object[0].name.length+" || "+object[1].name+"| length: "+object[1].name.length) 
   console.log(object[0].name+"| length+POWER: "+((object[0].name.length*35)+object[0].power)+" || "+object[1].name+"| length+POWER: "+((object[1].name.length*35)+object[1].power))
  
  function findNamePower(objectx,objecty){
     
    if ((objectx.power+(objectx.name.length*35)) > (objecty.power+(objecty.name.length*35))) {
      return objectx;      
    }
    else {
      return objecty;
    }
  }
  console.log("The person with greater power is: "+ findNamePower(object[0],object[1]).name);  
  console.log("Rest details : ")
  console.log(findNamePower(object[0],object[1]))
  
}

function ques15()
{
  var object = [
    {
      name: "Ram",
      power: 2500,
      yuga: "treta"
    },
    {
      name: "Krishna",
      power: 2325,
      yuga: "Dwapar"
    }];
  function findMaxPower(objectx,objecty){
    if (objectx.power > objecty.power) {
      return objectx;      
    }
    else {
      return objecty;
    }
  }
  console.log("The person with greater power is: "+ findMaxPower(object[0],object[1]).name);  
  console.log("Rest details : ")
  console.log(findMaxPower(object[0],object[1]))
}

function ques14()
{
  var object = [
    {
      name: "Ram",
      age: 25,
      yuga: "treta"
    },
    {
      name: "Krishna",
      age: 31,
      yuga: "Dwapar"
    }];
  function findMaxAge(objectx,objecty){
    if (objectx.age > objecty.age) {
      return objectx;      
    }
    else {
      return objecty;
    }
  }
  console.log("The person with greater age is: "+ findMaxAge(object[0],object[1]).name);  
  console.log("Rest details : ")
  console.log(findMaxAge(object[0],object[1]))
}

function ques5()
{
  var x = readlineSync.question(" Tell no of students whose data is to be entered :  ");
  const students = [];
  var bestStudent = {name : '',total:0,avg:0}
  for(let i = 0; i < x; i++)
    {
    let name = readlineSync.question(" Tell the name of student no. "+(i+1)+" : ");
    let unitTest = readlineSync.question(" Tell the unit test marks of "+name+" : ");
    let prefinal = readlineSync.question(" Tell the prefinal marks of "+name+" : ");
    let final = readlineSync.question(" Tell the final marks of "+name+" : ");
    let obj = {};
    obj["name"]=name;
    obj["utmarks"]=Number(unitTest);
    obj["pfmarks"]=Number(prefinal);
    obj["fmarks"]=Number(final);
    obj["total"]= obj["utmarks"]+obj["pfmarks"]+obj["fmarks"];
    obj["avg"]= obj["total"]/3;
    students.push(obj);
      if (bestStudent.total<obj["total"]) {
        bestStudent.name = obj.name;
        bestStudent.total = obj.total;
        bestStudent.avg = obj.avg;
      }
    }
  console.log("")
  console.log("The Student with highest score is "+bestStudent.name);
  console.log("Complete details are as follows: ")
  console.log(students);
  console.log("Complete details of highest scorer is: ")  
  console.log(bestStudent);
}

var userName = prompt('Please enter your name :');
console.log(" QUESTIONS :");

for (let index = 0; index < sampleQues.length; index++) {
  console.log( sampleQues[index].num +" : " + sampleQues[index].ques)
  console.log("")
}
var SQ = readlineSync.question(userName+", Please select your Ques no. ");
switch(SQ){
  case "5" :
   console.log("");
   console.log(userName+", You have selected Sample Quesno."+sampleQues[0].num+": "+sampleQues[0].ques);
   console.log("");
   ques5();
    break;
    
  case "14":
    console.log("");
    console.log(userName+", You have selected Sample Quesno."+sampleQues[1].num+": "+sampleQues[1].ques);
    console.log("")
    ques14();
    break;
  case "15":
    console.log("");
    console.log(userName+", You have selected Sample Quesno."+sampleQues[2].num+": "+sampleQues[2].ques)
    ques15();
    break;
  case "16":
    console.log("");
  console.log(userName+", You have selected Sample Quesno."+sampleQues[3].num+": "+sampleQues[3].ques)
    ques16();
    break;
  case "17":
    console.log("");
  console.log(userName+", You have selected Sample Quesno."+sampleQues[4].num+": "+sampleQues[4].ques)
    break;
    default : 
    console.log("");
  console.log(userName+", You have selected Wrong Input. Exit Platform NOW..") 
}