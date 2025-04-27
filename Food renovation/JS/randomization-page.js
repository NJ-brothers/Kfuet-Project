const randomizeButton = document.getElementById("random-recipe-button");
const rand_img = document.getElementById("random-image");
const recipeName = document.getElementById("recipe-name");


const database = [
    { name: "MIXED SABZI", img: "/Food renovation/Images/Mixed-Sabzi-Mix-Vegetable-Curry.jpg" },
    { name: "BHINDI SABZI", img: "/Food renovation/Images/Bhindi-ki-sabzi_1-500x500.jpg" },
    { name: "PALAK SABZI", img: "/Food renovation/Images/palak-aloo-sabzi.jpg" },
    { name: "ALO GOBI", img: "/Food renovation/Images/4469167-aloo-gobi-masala-cauliflower-and-potato-curry-Allrecipes-Magazine-4x3-1-d8ab6614b61f4787a9c262ec6a867df3.jpg" },
    { name: "SHALGAM BHARTA", img: "/Food renovation/Images/shalgam-bharta3.jpg" },
    { name: "KADAI PAKORA", img: "/Food renovation/Images/IMG_0349_jpg.jpg" },
    { name: "NIHARI", img: "/Food renovation/Images/NihariPic-320x321.jpg" },
    { name: "LAMB KARAHI", img: "/Food renovation/Images/Lamb-or-Mutton-Karahi-500x500.jpg" },
    { name: "CHAPLI KABAB", img: "/Food renovation/Images/easy-pakistani-beef-chapli-kabab.jpg" },
    { name: "KADAI CHICKEN", img: "/Food renovation/Images/kadai-chicken-1.jpg" },
    { name: "HYDERABADI CHICKEN", img: "/Food renovation/Images/Hyderabadi-chicken-main-2.jpg" },
    { name: "CHICKEN BIRYANI", img: "/Food renovation/Images/Mutton-Biryani.jpg" },
    { name: "JALEBI", img: "/Food renovation/Images/ef801c08c2e139016d293e28a50a8b29.jpg" },
    { name: "KAJU KATLI", img: "/Food renovation/Images/Kaju-Katli-Diwali-Recipe.jpg" },
    { name: "GULAB JAMUN", img: "/Food renovation/Images/gulab-jamun.webp" },
    { name: "KHEER RICE", img: "/Food renovation/Images/Rice-Kheer-1.jpg" },
    { name: "FRUIT CUSTARD", img: "/Food renovation/Images/fruit-custard-recipe.jpg" },
    { name: "SHAHI TUKDA", img: "/Food renovation/Images/shahi-tukda-recipe-11.jpg" },

];

randomizeButton.addEventListener("click", () => {
    startShuffleAnimation();

});

function startShuffleAnimation() {

    rand_img.classList.add("shuffle-animation");
    const shuffleInterval = setInterval(() => {
        const tempRandomIndex = Math.floor(Math.random() * database.length);
        rand_img.src = database[tempRandomIndex].img;
    }, 100); 
    setTimeout(() => {
        clearInterval(shuffleInterval);
        rand_img.classList.remove("shuffle-animation");
        showRandomImage();
    }, 2000);
}

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * database.length);
    const selected = database[randomIndex];
    rand_img.src = selected.img;
    rand_img.alt = selected.name;
    recipeName.innerHTML = selected.name;
}