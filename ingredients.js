var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:var chorus = "Let's dance!";
var i = 0;
while (i < ingredients.length) {

  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = 0; i < ingredients.length; i++) {
  ingredients = ingredients.reverse();
  console.log(ingredients[i]);
}