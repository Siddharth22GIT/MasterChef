const recipes = {
    // Famous foreign recipes in India
    "pizza": "Ingredients: Pizza Dough, Tomato Sauce, Cheese, Toppings. Instructions: Spread sauce on dough, add toppings, bake until golden.",
    "red sauce pasta": "Ingredients: Pasta, Tomato Sauce, Garlic, Olive Oil, Herbs. Instructions: Cook pasta, prepare tomato sauce, mix and serve.",
    "white sauce pasta": "Ingredients: Pasta, Milk, Butter, Flour, Cheese, Herbs. Instructions: Cook pasta, make white sauce, mix and serve.",
    "noodles": "Ingredients: Noodles, Vegetables, Soy Sauce, Spices. Instructions: Boil noodles, stir-fry with vegetables and sauce.",
    "chowmein": "Ingredients: Noodles, Vegetables, Soy Sauce, Spices. Instructions: Stir-fry noodles with mixed vegetables and sauce.",
    "momos": "Ingredients: All-purpose Flour, Vegetables or Chicken, Spices. Instructions: Fill dough wrappers with filling, steam until cooked.",
    "sandwich": "Ingredients: Bread, Vegetables, Cheese, Chutney. Instructions: Layer ingredients between bread slices, grill or serve fresh.",
    "burger": "Ingredients: Bun, Patty (Veg/Chicken), Lettuce, Tomato, Cheese. Instructions: Grill patty, assemble with bun and toppings.",
    "french fries": "Ingredients: Potatoes, Oil, Salt. Instructions: Cut potatoes, fry in oil until golden and crispy, season with salt.",
    "milkshake": "Ingredients: Milk, Ice Cream, Flavoring. Instructions: Blend milk and ice cream with flavoring until smooth.",

    // South Indian (only idli and dosa)
    "idli": "Ingredients: Rice, Urad Dal, Fermentation. Instructions: Soak rice and dal, grind into batter, ferment, steam in molds.",
    "dosa": "Ingredients: Rice, Urad Dal, Fermentation. Instructions: Soak rice and dal, grind into batter, ferment, cook thin pancakes on skillet.",

    // North Indian recipes
    "butter chicken": "Ingredients: Chicken, Butter, Cream, Tomato Sauce. Instructions: Cook chicken in butter, add cream and sauce, simmer.",
    "dal makhani": "Ingredients: Black Lentils, Cream, Butter, Spices. Instructions: Cook lentils overnight, simmer with cream and spices.",
    "chole bhature": "Ingredients: Chickpeas, Flour, Spices, Yogurt. Instructions: Cook chickpeas with spices, serve with deep-fried bhature.",
    "samosa": "Ingredients: Potatoes, Peas, Spices, Flour. Instructions: Make a spiced potato filling, encase in dough, deep fry until golden.",
    "palak paneer": "Ingredients: Spinach, Paneer, Cream, Spices. Instructions: Cook spinach, blend, and simmer with paneer and cream.",
    "pav bhaji": "Ingredients: Mixed Vegetables, Pav, Spices, Butter. Instructions: Mash cooked vegetables with spices, serve with buttered pav.",
    "aloo paratha": "Ingredients: Whole Wheat Flour, Potatoes, Spices. Instructions: Stuff dough with spiced potatoes, roll out, and cook on a skillet.",
    "dal baati churma": "Ingredients: Wheat Flour, Lentils, Ghee, Jaggery. Instructions: Prepare baati by baking dough balls, serve with lentils and churma.",
    "gatte ki sabzi": "Ingredients: Gram Flour, Yogurt, Spices. Instructions: Make dumplings from gram flour, cook in yogurt gravy.",
    "ker sangri": "Ingredients: Ker, Sangri, Spices. Instructions: Soak and cook ker and sangri with spices until tender.",
    "bikaneri bhujia": "Ingredients: Gram Flour, Spices, Oil. Instructions: Prepare dough, shape into thin strands, deep fry until crispy.",
    "laal maas": "Ingredients: Mutton, Red Chillies, Spices. Instructions: Cook mutton with a rich red chili gravy until tender.",
    "paneer gatte": "Ingredients: Paneer, Gram Flour, Spices. Instructions: Make dumplings from paneer, cook in spicy gravy.",
    "pyaaz kachori": "Ingredients: Flour, Spiced Onion Filling. Instructions: Make dough, fill with onion mixture, deep fry until golden.",
    "rajma": "Ingredients: Kidney Beans, Tomatoes, Spices. Instructions: Cook kidney beans in tomato gravy until tender.",
    "rabri": "Ingredients: Milk, Sugar, Cardamom. Instructions: Boil milk until thick, add sugar and cardamom, serve chilled.",
    "paneer butter masala": "Ingredients: Paneer, Butter, Cream, Tomato Puree, Spices. Instructions: Cook paneer in rich tomato gravy with butter and cream.",
    "shahi paneer": "Ingredients: Paneer, Cashews, Cream, Spices. Instructions: Make a creamy sauce with cashews, add paneer, and simmer.",
    "kadai paneer": "Ingredients: Paneer, Bell Peppers, Onions, Spices. Instructions: Stir-fry paneer and vegetables in a spicy tomato gravy.",
    "paneer tikka masala": "Ingredients: Paneer, Yogurt, Spices, Tomato Gravy. Instructions: Marinate paneer, grill, and serve in spicy gravy.",
    "paneer bhurji": "Ingredients: Crumbled Paneer, Onions, Tomatoes, Spices. Instructions: Sauté onions and tomatoes, add crumbled paneer, and cook.",
    "chili paneer": "Ingredients: Paneer, Bell Peppers, Soy Sauce, Spices. Instructions: Stir-fry paneer and vegetables in a spicy sauce.",
    "paneer masala": "Ingredients: Paneer, Onions, Tomatoes, Spices. Instructions: Cook paneer in spiced onion-tomato gravy.",
    "dal fry": "Ingredients: Toor dal, onions, tomatoes, spices. Instructions: Cook dal with onions, tomatoes, and spices.",
    "dal tadka": "Ingredients: Yellow lentils, garlic, spices. Instructions: Cook lentils, temper with garlic and spices.",
    "masoor dal": "Ingredients: Red lentils, onions, tomatoes, spices. Instructions: Cook lentils with onions, tomatoes, and spices.",
    "moong dal": "Ingredients: Yellow moong dal, spices. Instructions: Cook dal with spices, temper with cumin and garlic.",
    "rajma masala": "Ingredients: Kidney beans, onions, tomatoes, spices. Instructions: Cook beans in spiced onion-tomato gravy.",
    "kadhi pakora": "Ingredients: Yogurt, gram flour, spices, pakoras. Instructions: Make yogurt gravy, add fried pakoras.",
    "aloo matar": "Ingredients: Potatoes, peas, spices. Instructions: Cook potatoes and peas with spices.",
    "matar paneer": "Ingredients: Paneer, peas, tomato gravy, spices. Instructions: Cook paneer and peas in tomato gravy.",
    "baingan bharta": "Ingredients: Eggplant, onions, tomatoes, spices. Instructions: Roast eggplant, mash, cook with onions and tomatoes.",
    "tawa paneer": "Ingredients: Paneer, onions, peppers, spices. Instructions: Sauté paneer with onions, peppers, and spices.",
    "veg kolhapuri": "Ingredients: Mixed vegetables, kolhapuri masala, spices. Instructions: Cook vegetables in spicy kolhapuri gravy.",
    "veg jalfrezi": "Ingredients: Mixed vegetables, onions, peppers, spices. Instructions: Sauté vegetables with spices.",
    "veg handi": "Ingredients: Mixed vegetables, cream, spices. Instructions: Cook vegetables in creamy, spiced gravy.",
    "veg do pyaza": "Ingredients: Mixed vegetables, onions, spices. Instructions: Cook vegetables with double onions and spices.",
    "veg kadai": "Ingredients: Mixed vegetables, kadai masala, spices. Instructions: Cook vegetables in kadai masala gravy.",
    "veg makhanwala": "Ingredients: Mixed vegetables, butter, cream, tomato gravy. Instructions: Cook vegetables in buttery tomato gravy.",
    "paneer lababdar": "Ingredients: Paneer, tomato gravy, cream, spices. Instructions: Cook paneer in rich tomato-cream gravy.",
    "paneer pasanda": "Ingredients: Paneer, nuts, tomato gravy, cream. Instructions: Stuff paneer with nuts, cook in creamy gravy.",
    "shahi tukda": "Ingredients: Bread, milk, sugar, cardamom, ghee. Instructions: Fry bread, soak in sweetened milk, garnish with nuts.",
    "gulab jamun": "Ingredients: Khoya, Flour, Sugar, Cardamom. Instructions: Make dough, shape into balls, fry, and soak in sugar syrup.",
    "jalebi": "Ingredients: Flour, Sugar, Yogurt, Saffron. Instructions: Make batter, fry in circular shapes, and dip in sugar syrup.",
    "barfi": "Ingredients: Milk, Sugar, Cardamom, Nuts. Instructions: Cook milk until thick, add sugar and nuts, set and cut into squares.",
    "kheer": "Ingredients: Rice, Milk, Sugar, Cardamom. Instructions: Cook rice in milk, add sugar, and simmer until thick.",
    "rasgulla": "Ingredients: Chhena, Sugar, Cardamom. Instructions: Make small balls of chhena, boil in sugar syrup until spongy.",
    "peda": "Ingredients: Khoya, Sugar, Cardamom, Nuts. Instructions: Cook khoya with sugar, shape into small discs, garnish with nuts.",
    "motichoor laddoo": "Ingredients: Besan, Sugar, Cardamom. Instructions: Make tiny fried balls, mix with sugar syrup, and form laddoos.",
    "soan papdi": "Ingredients: Flour, Sugar, Ghee, Cardamom. Instructions: Cook flour in ghee, add sugar syrup, and pull to create layers.",
    "burfi": "Ingredients: Milk, Sugar, Nuts, Cardamom. Instructions: Cook milk until thick, add sugar and nuts, set and cut into pieces.",
    "chikki": "Ingredients: Peanuts, Jaggery. Instructions: Roast peanuts, melt jaggery, mix, and set until firm.",
    "besan ladoo": "Ingredients: Besan, Ghee, Sugar, Cardamom. Instructions: Roast besan in ghee, mix with sugar, and form laddoos.",
    "kaju katli": "Ingredients: Cashews, Sugar, Ghee. Instructions: Grind cashews to a powder, cook with sugar, roll into thin sheets.",
    "gajar halwa": "Ingredients: Grated Carrots, Milk, Sugar, Nuts. Instructions: Cook grated carrots in milk until thick, add sugar and nuts.",
    "sooji halwa": "Ingredients: Semolina, Ghee, Sugar, Nuts. Instructions: Roast semolina in ghee, add sugar and water, cook until fluffy.",
    "rasmalai": "Ingredients: Chhena, Milk, Sugar, Cardamom. Instructions: Prepare rasgullas, soak in sweetened milk flavored with cardamom.",
    "doodh peda": "Ingredients: Milk Powder, Sugar, Ghee, Cardamom. Instructions: Mix ingredients, shape into discs, and garnish.",
    "thandai": "Ingredients: Milk, Nuts, Spices, Sugar. Instructions: Blend ingredients, chill, and serve cold.",
    "malpua": "Ingredients: Flour, Sugar, Coconut, Milk. Instructions: Make batter, fry pancakes, and soak in sugar syrup.",
    "puran poli": "Ingredients: Flour, Chana Dal, Jaggery, Cardamom. Instructions: Cook dal, mix with jaggery, stuff in flatbreads, and cook.",
    "ladoo": "Ingredients: Various (e.g., coconut, besan, etc.). Instructions: Prepare base, mix with sugar, and form into balls."
};

const input = document.getElementById('dishInput');
const button = document.getElementById('findRecipeBtn');
const output = document.getElementById('recipeOutput');

function showLoading() {
  output.innerHTML = `<div class="spinner" aria-live="polite" aria-busy="true" style="display:flex;justify-content:center;align-items:center;height:2.5rem;">
    <svg width="32" height="32" viewBox="0 0 50 50" aria-hidden="true">
      <circle cx="25" cy="25" r="20" fill="none" stroke="#ff7043" stroke-width="5" stroke-linecap="round" stroke-dasharray="31.4 31.4" transform="rotate(-90 25 25)">
        <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.8s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>`;
}

function showRecipe(dish, recipe) {
  output.setAttribute('aria-live', 'polite');
  output.innerHTML = `<h2>Recipe for ${dish.charAt(0).toUpperCase() + dish.slice(1)}:</h2><p>${recipe}</p>`;
  output.animate([
    { opacity: 0, transform: 'translateY(20px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], {
    duration: 350,
    easing: 'ease-out'
  });
}

function showNotFound(dish) {
  output.setAttribute('aria-live', 'polite');
  output.innerHTML = `<p>Sorry, recipe for "${dish}" not found.</p>`;
  output.animate([
    { opacity: 0, transform: 'translateY(20px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], {
    duration: 350,
    easing: 'ease-out'
  });
}

function searchRecipe() {
  const dish = input.value.trim().toLowerCase();
  if (!dish) {
    output.innerHTML = '';
    return;
  }
  showLoading();
  setTimeout(() => {
    if (recipes[dish]) {
      showRecipe(dish, recipes[dish]);
    } else {
      showNotFound(dish);
    }
  }, 600); // Simulate loading
}

button.addEventListener('click', searchRecipe);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchRecipe();
  }
});

// Accessibility: focus the input on page load
window.addEventListener('DOMContentLoaded', () => {
  input.focus();
});


