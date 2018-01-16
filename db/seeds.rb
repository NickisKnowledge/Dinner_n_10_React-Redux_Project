ex1 = {
  'directions_attributes': {
    '0': {'step': "Put cooking pan on low/medium heat on stove."},
    '1': {'step': "Add butter and bread."},
    '2': {'step': "Toast bread until one side is light brown, then flip."},
    '3': {'step': "Add cheese to newly flipped side and but bread together."},
    '4': {'step': "Continously flip bread until each side is a brown or cheese has melted sufficiently."},
  },
  'image_attributes': {
    'name': "grilled_cheese", 'url': "https://res.cloudinary.com/nickisknowledge/image/upload/v1515896525/qrqhfjfwcltvghudwsey.jpg"
  },
  'ingredients_attributes': {
    '0': {'name': "cheese"},
    '1': {'name': "bread"},
    '2': {'name': "butter"}
  },
  'title': "Grilled Cheese"
}

ex2 = {
  'directions_attributes': {
    '0': {'step': "Place two or three eggos on a plate and heat for 1 minute on each side."},
    '1': {'step': "Put 3 to 4 turkey sausages on a plate and cook for 20 seconds."},
    '2': {'step': "Flip sausages over and cook for another 20 seconds."},
    '3': {'step': "Add syrup or jelly to eggos."},
    '4': {'step': "Grab your turkey sausages and put them on your plate."},
  },
  'image_attributes': {
    'name': "waffles_n_sausage", 'url': "https://res.cloudinary.com/nickisknowledge/image/upload/v1515898725/aplylk8s1vp4l8jgy6tk.jpg"
  },
  'ingredients_attributes': {
    '0': {'name': "eggo waffles"},
    '1': {'name': "banquet turkey sausages"},
    '2': {'name': "syrup or apple jelly"}
  },
  'title': "Eggos w/Turkey sausages"
}

ex3 = {
  'directions_attributes': {
    '0': {'step': "Get a LARGE cooking pan with a lid & place it on the stove."},
    '1': {'step': "If you're preparing garlic bread heat oven to 350 degrees and allow to heat for 10-15 minutes."},
    '2': {'step': "Add 2 cups of water and 1 tablespoon of butter."},
    '3': {'step': "Bring water to a boil & add Knorr pasta side. The water, butter and sauce will bubble up VERY high, hence the need for a large pan to avoid a mess."},
    '4': {'step': "Turn flame down to low, cover pasta and periodically stir pasta."},
    '5': {'step': "If you cooking garlic bread, place it in the over now and bake it for about 10 minutes, until bread is lightly toasted."},
    '6': {'step': "Now you fill a cup with broccoli and add water. If frozen cook for 2 minutes in the microwave."},
    '7': {'step': "If cooking fresh broccoli slice off the bottom inch of the stem. Chop the remaining broccoli into small pieces. Put pieces into a cup, add 2-3 tablespoons of water and cover with a plate. Cook for 3-4 minutes in the microwave."},
    '8': {'step': "If you don't have a toaster, toast bread in oven on broil. Watch your bread it will cook fast! If you have a toaster, use it!."},
    '9': {'step': "After about 7-10 minutes turn the stove off & add broccoli to your pasta."},
    '10': {'step': "Then put your pasta on a plate or bowl and grab your bread."},
  },
  'image_attributes': {
    'name': "broccoli_alfredo-2-2-590x826", 'url': "https://res.cloudinary.com/nickisknowledge/image/upload/v1515899099/ak4uegrufz0kgblh264p.jpg"
  },
  'ingredients_attributes': {
    '0': {'name': "fresh or frozen broccoli"},
    '1': {'name': "bread (garlic or regular)"},
    '2': {'name': "knorr pasta sides alfredo"},
    '3': {'name': "butter"}
  },
  'title': "Broccoli Alfredo w/Bread (optional)"
}

ex4 = {
  'directions_attributes': {
    '0': {'step': "Cook water on stove until it's boiling."},
    '1': {'step': "Add noodles."},
    '2': {'step': "Melt cheese in  microwave on low heat for 15 seconds."},
    '3': {'step': "After pull out the bowl and stir the cheese."},
    '4': {'step': "Place it back in microwave, and continue to cook with 15 to 30 second intervals until the cheese is melted."},
    '5': {'step': "When noodles are soft, drain them and add the cheese."},
  },
  'image_attributes': {
    'name': "mac_n_cheese", 'url': "http://res.cloudinary.com/nickisknowledge/image/upload/v1515900680/mac_n_cheese_g0cieu.jpg"
  },
  'ingredients_attributes': {
    '0': {'name': "shredded cheese"},
    '1': {'name': "water"},
    '2': {'name': "noodles"},
  },
  'title': "Mac n Cheese"
}

dinners = [ex1, ex2, ex3, ex4]
dinners.each do |dinner|
  Dinner.create!(dinner);
end
