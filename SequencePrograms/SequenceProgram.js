//UC1 Generate Random Number
console.log("------------------------------");
var randomValue=Math.floor(Math.random()*10);
console.log("Random number between 0 to 10 is : "+randomValue);

//UC2 Generate random for dice
console.log("-------------------------------------");
var dice=Math.floor(Math.random()*6)+1;
console.log("Random dice number between 1 to 6 :"+dice);

//UC3 Add two dice number
var dice2=Math.floor(Math.random()*6)+1;
console.log("Random second dice number for 1 to 6 :"+dice2);
var result=dice+dice2;
console.log("The addition of two dice are :"+result);

//UC4 Find 5 random 2 digit value and find sum and avg
console.log("---------------------------------------");
var sum=0;
for(var i=1;i<=5;i++)
{
    let number=Math.floor(Math.random()*(100-10 +1))+10
    console.log(i +" Number is : "+number);
    sum+=number;
}
console.log("The sum is : "+sum);
console.log("The Average is : "+sum/5);

//UC5: Unit Conversion
var inches = 42;
const OneFt_inc = 12;
const OneFt_meters = 0.3048;
const OneSqrMeter_Acres = 0.000247105;
console.log("42 inches in feets : "+inches/OneFt_inc);
console.log("***Rectangular Plot of 60 ft x 40 ft in area***");
var length = 60;
var breath = 40;
var area = length*breath;
console.log("The area of the rectangular plot in feet is : "+area);
var areaInMeters = area*OneFt_meters;
console.log("The area of the rectangular plot in area is : "+areaInMeters);
console.log("***Calculate area for 25 such plots***");
var totalArea = areaInMeters*25;
console.log("The area of 25 such plots in meters is : "+totalArea);
console.log("The area of 25 such plots in acres is : "+(totalArea*OneSqrMeter_Acres).toFixed(2));