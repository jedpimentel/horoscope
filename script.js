function Month(monthName, monthDays) {
  this.month = monthName;
  this.days = monthDays;
}
// This array was made at the last moment, the if/else soup had already been written
// I feel icky, hard coding a string more than once
var monthDays = [
  "january"  ,
  "february" ,
  "march"    ,
  "april"    ,
  "may"      ,
  "june"     ,
  "july"     ,
  "august"   ,
  "september",
  "october"  ,
  "november" ,
  "december" ,
];
var monthSelect = document.getElementById("monthList");
var daySelect   = document.getElementById("dayList"  );
for (var i = 0; i < monthDays.length; i++) {
  // populate the list of selectable months
  var monthStr = monthDays[i];
  var monthStrCapitalized = monthStr[0].toUpperCase() + monthStr.substring(1);
  // "value" will be the monthDays index where the month exists (NOTE: should the value attribute be semantic???)
  var newOption = new Option(monthStrCapitalized, monthStr);
  monthSelect.add(newOption);
}
for (var i = 1; i <= 31; i++) {
  var newOption = new Option(i, i);
  daySelect.add(newOption);
}
console.log(monthSelect)
function divine() {
  var month = monthSelect.value;
  var day   = daySelect.value;
  console.log(month, day)
  var sign      = " ";
  var horoscope = " ";

  console.log(month, day);
  //Aries March 21 - April 19
  if (month === "march" && day >= 21 || month === "april" && day <= 19) {
    sign = "Aries";
    horoscope = "You will need to pee today";
  }
  //Taurus April 20 - May 20
  else if (month === "april" && day >= 20 || month === "may" && day <= 20) {
      sign = "Taurus";
      horoscope = "Today you will remain still unless you put one foot in front of the other";
  }
  //Gemini - May 21 - June 20
  else if (month === "may" && day >= 21 || month === "june" && day <= 20) {
      sign = "Gemini";
      horoscope = "When the time comes, give them a sucker punch. You'll know.";
  }
  //Cancer - June 21 - July 22
  else if (month === "june" && day >= 21 || month === "july" && day <= 22) {
      sign = "Cancer";
      horoscope = "Decaf coffee hides in plain sight, but most sleepyness is psychosomatic. Avoid caffeine.";
  }
  //Leo - July 23 - August 22
  else if (month === "july" && day >= 23 || month === "august" && day <= 22) {
      sign = "Leo";
      horoscope = "The glass is actually half full. Fifty percent of empty is still empty."
  }
  //Virgo - August 23 - Septemeber 22
  else if (month === "august" && day >= 23 || month === "september" && day <= 22) {
      sign = "Virgo";
      horoscope = "Fish eyes are a good source of essential nutrients.";
  }
  //Libra - September 23 - October 22
  else if (month === "september" && day >= 23 || month === "october" && day <= 22) {
      sign = "Libra";
      horoscope = "Always trust your friend Jose, especially when you think you're the one with the point";
  }
  //Scorpio - October 23 - November 21
  else if (month === "october" && day >= 23 || month === "november" && day <= 21) {
      sign = "Scorpio";
      horoscope = "Outcome hazy, please be reborn and try again";
  }
  //Sagittarius - November 22 - December 21
  else if (month === "november" && day >= 22 || month === "december" && day <= 21) {
      sign = "Sagittarius";
      horoscope = "Water is wet, a pair means two, Loren Ipsum Dolor Sit, this homework was due"
  }
  //Capricorn - December 22 - January 19
  else if (month === "december" && day >= 22 || month === "january" && day <= 19) {
      sign = "Capricorn";
      horoscope = "Today you will slouch for a little while, remember to keep your posture";
  }
  //Aquarius - January 20 - February 18
  else if (month === "january" && day >= 20 || month === "february" && day <= 18) {
      sign = "Aquarius";
      horoscope = "Today you will google \"handerpants\" and have a slight chuckle/cringe";
  }
  //Pisces - February 19 - March 20
  else if (month === "february" && day >= 19 || month === "march" && day <= 20) {
      sign = "Pisces";
      horoscope = "Today you will receive an underwhelming horoscope";
  } else {
      sign = "Missigno";
      horoscope = "Here be dragons. You are destined to break the rules of space and time. Tread carefully";
  }
  document.getElementById("sign"     ).innerHTML = sign;
  document.getElementById("horoscope").innerHTML = horoscope;
}

document.getElementById("submit").onclick =  divine;
