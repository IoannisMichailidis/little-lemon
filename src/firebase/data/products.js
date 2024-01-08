const products = [
    // Dessert
    {
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
        image: "images/lemon dessert.jpg",
        name: "Lemon Dessert"            ,
        price: 5.20,
        ingredients: ["Lemon", "Butter", "Suggar", "Salt", "Milk", "Eggs",],
        category: 'dessert',
        isSpecial: true
    },
    {
        description: "When rich coffee flavor, homemade mascarpone cream, and rum combine, an absolute dream layered dessert is born. Filled with so many flavors, tiramisu still somehow tastes light, with soaked ladyfingers that practically melt in your mouth upon the first bite",
        image: "images/tiramisu.jpg",
        name: "Tiramisu"            ,
        price: 6.50,
        ingredients: ["Eggs","Heavy cream","Vanilla", "Coffee", "Dark rum", "Cocoa powder"],
        category: 'dessert',
        isSpecial: false
    },
    {
        description: "If you’ve never heard of millionaire’s shortbread, the inspiration behind this cheesecake, allow us to give you a brief history lesson. Also known as a caramel slice or caramel shortbread, the dessert consists of three layers: buttery shortbread, rich and chewy caramel, and a thick coating of chocolate. ",
        image: "images/cheesecake.jpg",
        name: "Cheesecake"            ,
        price: 6.50,
        ingredients: ["Butter","Eggs","Sour cream","Cream cheese","Sugar","Vanilla","Heavy cream","flour","Salt"],
        category: 'dessert',
        isSpecial: false
    },
    {
        description: "Ultra-creamy with a rich caramel sauce, a slice of flan just might be one of the most luxurious desserts there is. The classic baked custard often served in Latin America and Spain is a forever-favorite here at Delish—it’s a recipe we reach for again and again to wow at dinner parties and holiday dinners alike.",
        image: "images/flan.jpg",
        name: "Flan"            ,
        price: 6.50,
        ingredients: ["Heavy cream","Whole milk","Vanilla","Eggs","Sugar","Salt"],
        category: 'dessert',
        isSpecial: false
    },
    // Main
    {
        description: "Our Broschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
        image: "images/bruchetta.svg",
        name: "Bruchetta",
        price: 5.99,
        ingredients: ["Extra virgin olive oil", "Minced fresh garlic", "Roma tomatoes", "Balsamic vinegar", "Salt", "Black pepper", "Basil ribbons", "French bread", "Finely shredded parmesan cheese"],
        category: 'main',
        isSpecial: true
    },
    {
        description: "A classic Italian-American dish, Chicken Parmesan consists of breaded and fried chicken breasts, topped with marinara sauce and melted mozzarella and Parmesan cheese. It's often served over spaghetti or another type of pasta.",
        image: "images/chicken parmesan.jpg",
        name: "Chicken Parmesan",
        price: 10.99,
        ingredients: ["Chicken breasts", "breadcrumbs", "eggs", "Parmesan cheese", "mozzarella cheese", "marinara sauce","flour", "olive oil", "salt", "pepper", "pasta"],
        category: 'main',
        isSpecial: false
    },
    {
        description: "This rich Russian dish features sautéed pieces of beef served in a sauce with sour cream. It's traditionally served over egg noodles.",
        image: "images/beef stroganoff.jpg",
        name: "Beef Stroganoff",
        price: 12.99,
        ingredients: ["Beef sirloin", "mushrooms", "onions", "beef broth", "sour cream", "mustard", "flour", "butter", "egg noodles", "salt", "pepper"],
        category: 'main',
        isSpecial: false
    },
    {
        description: "A quick and healthy dish, Vegetable Stir-Fry is made with various vegetables stir-fried in a savory sauce. It's often served over rice or noodles.",
        image: "images/vegetable stir-fry.jpg",
        name: "Vegetable Stir-Fry",
        price: 10.99,
        ingredients: ["broccoli", "bell peppers", "carrots", "snap peas", "soy sauce", "garlic", "ginger", "sesame oil", "cornstarch", "rice"],
        category: 'main',
        isSpecial: false
    }, 
    {
        description: "A flavorful Indian curry made with tender pieces of lamb cooked in a rich, spicy tomato-based sauce.",
        image: "images/lamb rogan josh.jpg",
        name: "Lamb Rogan Josh",
        price: 13.99,
        ingredients: ["Lamb", "onions", "garlic", "ginger", "tomatoes", "yogurt", "garam masala", "cumin", "coriander", "turmeric", "chili powder", "cardamom", "cloves", "cinnamon", "bay leaves", "oil", "salt", "cilantro"],
        category: 'main',
        isSpecial: false
    }, 
    {
        description: "A Japanese dish featuring grilled or broiled salmon glazed with a sweet and savory teriyaki sauce.",
        image: "images/salmon teriyaki.jpg",
        name: "Salmon Teriyaki",
        price: 12.99,
        ingredients: ["Salmon fillets", "soy sauce", "white wine", "mirin", "sugar", "ginger","garlic"],
        category: 'main',
        isSpecial: false
    }, 
    {
        description: " A Greek casserole made with layers of eggplant, minced meat (often lamb), and a creamy béchamel sauce, baked to perfection.",
        image: "images/moussaka.jpg",
        name: "Moussaka",
        price: 11.99,
        ingredients: ["Eggplants", "ground beef", "onions", "garlic", "tomatoes", "flour", "milk", "butter", "nutmeg", "cinnamon", "allspice", "olive oil", "Parmesan cheese"],
        category: 'main',
        isSpecial: false
    },                       
    // Salad
    {
        description: "The famous greek salad of crispy lettce peppers, olived and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
        image: "images/greek salad.jpg",
        name: "Greek salad",
        price: 12.99,
        ingredients: ["Extra-virgin olive oil","Garlic", "Dried oregano", "Freshly ground black pepper", "Salt", "Cucumber", "Tomatoes", "Feta Cheese", "Pitted Kalamata olives"],
        category: 'salad',
        isSpecial: true
    },
    {
        description: "The Mediterranean Chickpea Salad is a vibrant and nutritious dish, perfect for a healthy meal. It features a colorful mix of cooked chickpeas, which are the star ingredient, providing a hearty and protein-rich base. Fresh vegetables like diced cucumbers, red onions, and juicy cherry tomatoes add a refreshing crunch. The salad is further enhanced with slices of black olives and crumbled feta cheese, introducing a savory and tangy flavor profile.",
        image: "images/mediterranean chickpea salad.jpg",
        name: "Mediterranean Chickpea Salad",
        price: 10.99,
        ingredients: ["Goat cheese","Medjool dates","Persian cucumbers","Cherry tomatoes","Roasted red peppers","Chopped fresh parsley","Roasted chickpeas","Basil"],
        category: 'salad',
        isSpecial: false
    },
    {
        description: "The Tomato Salad is a simple yet delightful dish, epitomizing the freshness and simplicity of garden-fresh ingredients. It primarily features ripe, juicy tomatoes, sliced or chopped, which are the heart of the salad. These tomatoes, bursting with natural sweetness and a slight acidity, are often a mix of varieties like beefsteak, cherry, and heirloom, providing a range of colors and flavors. ",
        image: "images/tomato salad.jpg",
        name: "Tomato Salad",
        price: 8.99,
        ingredients: ["Ripe Tomatoes","Red Onion","Fresh Basil Leaves","Extra Virgin Olive Oil","Balsamic Vinegar","Sea Salt"],
        category: 'salad',
        isSpecial: false
    },
    {
        description: "The Eggplant Salad is a flavorful and hearty dish, showcasing the unique taste and texture of eggplants. It starts with eggplants that are either roasted, grilled, or baked until tender and slightly smoky, bringing out their natural sweetness and creamy texture. ",
        image: "images/eggplant salad.jpg",
        name: "Eggplant Salad",
        price: 9.99,
        ingredients: ["Eggplants","Fresh Tomatoes","Cucumbers","Red Onions","Olive Oil","Lemon Juice","Garlic","Salt","Feta"],
        category: 'salad',
        isSpecial: false
    },
];

module.exports = { products };

