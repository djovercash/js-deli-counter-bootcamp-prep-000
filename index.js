var katzDeli = [];

function takeANumber (katzDeliline, name) {
  katzDeliline.push(name);
  return `Welcome, ${name}. You are number ${katzDeliline.length} in line.`;
};

function nowServing (katzDeliline) {
  if (!katzDeliline.length) {
    return `There is nobody waiting to be served!`;
  } return `Currently serving ${katzDeliline.shift()}.`
};

function currentLine (katzDeliline) {
  if (!katzDeliline.length) {
    return `The line is currently empty.`
  }

  var numbersAndNames = [];
  for (var i = 0; i < katzDeliline.length; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliline[i]}`);
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`;
};
