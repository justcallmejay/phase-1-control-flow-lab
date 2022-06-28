function scuberGreetingForFeet(insertNumber){
  if (insertNumber <= 400){
    return 'This one is on me!'  
  } else if (insertNumber >= 400 && insertNumber < 2000){
    return 'That will be twenty bucks.'
  } else if (insertNumber >= 2000 && insertNumber < 2499) {
    return 'I will gladly take your thirty bucks.'
  } else (insertNumber > 2500)
    return 'No can do.'
}

console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(location){
  if (location === 'NYC'){
    return 'Ok, sounds good.'
  } else if (location === 'Pittsburgh'){
    return 'No go.'
  }
}
console.log(ternaryCheckCity(NYC))

function switchOnCharmFromTip(tipType){
  if (tipType === 'generous'){
    return 'Thank you so much.'
  } else if (tipType === 'not as generous'){
    return 'Thank you.'
  } else if (tipType === 'thanks for everything') {
    return 'Bye.'
  }
}
console.log(switchOnCharmFromTip('Bye'))