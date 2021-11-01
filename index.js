function scuberGreetingForFeet(feet){
  let cost;

  if (feet > 2500) {
    cost = 'No can do.'
  } else if ( feet > 2000) {
    cost = 'I will gladly take your thirty bucks.'
  } else if (feet <= 400) {
    cost = 'This one is on me!';
  }

  return cost;
}

function ternaryCheckCity(city){
  let response;

  { city === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.'}

  return response;
}

function switchOnCharmFromTip(tip){
  let response;

  switch(tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.'
      break;
  }

  return response;
}