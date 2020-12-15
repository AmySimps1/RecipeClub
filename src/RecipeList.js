import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types'; //installed from npm i --save prop-types 
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "https://github.com/rithmschool/udemy_course_exercises/blob/master/react/recipe-props-solution/public/spaghetti.jpg?raw=true"//can use "spaghetti.jpg" found in the public folder
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "https://github.com/rithmschool/udemy_course_exercises/blob/master/react/recipe-props-solution/public/milkshake.jpg?raw=true"
      },
      {
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "https://github.com/rithmschool/udemy_course_exercises/blob/master/react/recipe-props-solution/public/avocado_toast.jpg?raw=true"
      },
      {
        title: "Soy Ramen",
		instructions: "Add all ingredient for tare and whisk until smooth. Set aside. In a medium pot, combine water, soy milk and chicken powder. Cover and bring it to light simmer. Watch carefully, it’s easy to boil over. Also, bring another pot of water to boil. Heat a large wok over high heat, add chili oil, garlic and ginger. Stir fry for 30 seconds or until you can smell aroma, then add toban djan and oyster sauce. Stir fry for 45 seconds to 1 minute then add ground pork. Break down pork and stir fry with sauce, about 1 minute. Splash rice wine and stir fry for 3 to 4 minutes or until there’s no moisture and pork is fully cooked. Remove from heat and keep it warm. Add generous amount of salt into boiling water then add bok choy and blanch for 1 minute. Remove from water, drain and set aside. Add handful of beansprouts and blanch for 2 minute. Remove from water, drain and set aside. Drop noodles into now-empty-boiling-water, cook by following the directions of package you’re using. Cook 1 portion at a time if you are using fresh/frozen noodles. Meanwhile noodles are cooking (about 1 to 2 minutes for fresh/frozen noodles), combine half of tare and half of hot broth in a serving bowl. Drain well cooked noodles (extra water will dilute the broth and flavors) and add into bowl. Stir noodles to coat evenly with broth and arrange them. Top ramen with beansprouts, bok choy, stir-fried pork, extra chili oil if you like, ramen egg, chopped green onions, sesame seeds and sansyo powder ",
        ingredients: ["For Tare (Seasoning Sauce)", "3 tbsp Tsuyu", "Japanese soup base sauce (or 2 1/2 tbsp soy sauce + 1/2 tsp hondashi)", "2 tbsp tahini", "1 tbsp chili oil ", "For Meat", "2 tbsp chili oil or regular cooking oil (adjust to your liking)", "3 cloves garlic", "chopped (approximately 1 tbsp)", "1 oz ginger", "chopped (approximately 1 tsp)", "1 tbsp toban djan", "Chinese chili bean paste", "1 tbsp oyster sauce", "1/2 lb ground pork", "beef", "chicken or impossible meat", "3 tbsp rice wine ", "For Soup", "1 cup water", "2 cups un-sweetened soy", "oat or cashew milk", "2 tsp chicken powder/bouillon ", "For Noodles & Toppings", "1 baby bok choy", "cut bottom & separate each leaf ", "handful beansprouts", "2 portions fresh", "frozen or dried ramen noodles", "1 to 2 green onions", "chopped", "1 ramen egg", "cut into half", "sesame seads & sansyo powder (optional)"
],
        img: "https://i1.wp.com/photos.smugmug.com/Tantanmen-ramen/i-HL9BQgn/0/9fc3a283/L/tantanmen%2005-L.jpg?w=1170&ssl=1"
      }
    ]
  }
  
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  
  render() {
    const recipes = this.props.recipes.map((r,index) => (
      <Recipe key={index} {...r} />
    ));
    
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  
  }
}

export default RecipeList;