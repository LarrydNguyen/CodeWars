// String Templates - Bug Fixing #5
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!


function buildString(...template){
    //P: template
    //R: sting template
    //E: buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String')\
    //P:  mistaken # for $ and space after comma. 
    return `I like ${template.join(', ')}!`;
  }