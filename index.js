var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

//function nowServing(katzDeliLine){
//var i = 0

//while (i<katzDeliLine.length) {
//i++;
//}
//if (katzDeliLine.length === 0){
//  return "There is nobody waiting to be served!"
//}
//else
//return `Currently serving ${katzDeliLine.shift()}.`
//}

//function nowServing(katzDeliLine){
//var line = (katzDeliLine.length != 0) ? `Currently serving ${katzDeliLine.shift()}.` : "There is nobody waiting to be served!";
//return line
//}

//
//function currentLine(katzDeliLine) {
//var line = [];
//  let i = 0;
//  while (i < katzDeliLine.length) {
//    line.push(` `+[i+1]+`. `  + katzDeliLine[i])
//    i++;
//  }
//  if (katzDeliLine.length === 0) {
//    return "The line is currently empty.";
//  } else
//  return(`The line is currently:` + line);
//}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  let solution = "The line is currently:"
  for (let i=0; i<katzDeliLine.length; i++){
    solution += ` ${i+1}. ${katzDeliLine[i]}`
    if (i != katzDeliLine.length-1){
      solution +=","
    }
  }
  return solution
}
//function currentLine(katzDeliLine){
//  var line = [];
//  for (var i = 0; i < katzDeliLine.length; i++){
//    line.push(` ${i+1}. ${katzDeliLine[i]}`)
//  }
//  if (katzDeliLine.length === 0){
//    return "The line is currently empty."
//  }
//  return "The line is currently:" + line;
//}
