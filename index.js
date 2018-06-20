var katzDeli = ['Blake', "Shawna", "Steven", 'Justine'];

var counter = 1;

function takeANumber() {
  
 var msg = "You are number " + counter + " in line.";
 counter++;
 return msg;
  
}

function nowServing (counter) {
  
  var msg;
  
  if (counter === 0){
    
    msg = "There is nobody waiting to be served!";
    return msg;
    
  } else {
    
    msg = "Currently serving " + counter + '.';
    counter--;
    return msg;
    
  }
  
}

function currentLine(line) {
  
  
  if (line.length === 0) {
    
    return "The line is currently empty.";
    
  } else {
    var msg = "The line is currently: ";
    for (let i = 0; i < line.length - 1; i++) {
      
      msg += `${i + 1}. ${line[i]}, `;
      
    }
  
    msg += `${line.length}. ${line[line.length - 1]}`;
  
  }
  
  return msg;
  
}

console.log( takeANumber(katzDeli,'Josh')  );
console.log(nowServing(katzDeli) );
console.log( currentLine(katzDeli) );
