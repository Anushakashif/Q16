"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of more guests to
// invite to dinner. 
// • Start with your program from Exercise 15. Add a print statement to the end of your program stating the name 
// of the new person you are inviting. 
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list. 
let guestArr = ["Anusha", "Laiba", "Areesha", "Sadaf"];
let cannotAttend = "Sadaf";
let newGuest = "Hania";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
console.log(guestArr);
// guestArr.map((item) => (
//       console.log(`Dear ${item}, I found a bigger dinner table`)
// ))
let guestBegin = "Maryam";
guestArr.unshift(guestBegin);
// console.log(guestArr)
let middleGuest = "Hiba";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr)
guestArr.push("Ameera");
console.log(guestArr);
guestArr.map((item) => (console.log(`Dear ${item}, you are cordially invited to a dinner`)));
