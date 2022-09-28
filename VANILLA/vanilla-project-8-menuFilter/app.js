// ------------------ DATASET  ------------------ //
const menu = [{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
}, {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
}, {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
}, {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
}, {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
}, {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
}, {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
}, {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
}, {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
},{
    id: 10,
    title: "Bison Steak",
    category: "dinner",
    price: 46.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
}];


// ------------------ SELECT ITEMS ------------------ //
// Select Parent Container
const sectionCenter = document.querySelector(".section-center");
// Select Filter Buttons
const filterBtns = document.querySelectorAll(".filter-btn")


// ------------------ DOM MANIPULATION FUNCTION ------------------//

const displayMenuItems = (menuItems) => {
    // Iterate over the array of objects
    let displayMenu = menuItems.map((item) => {
        // Return the template of a single Item template
        return `<article class="menu-item">
                <img src=${item.img} alt=${item.title} class="photo">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
    })

    // Join into a single string to avoid commas and reassign hence the "let"
    displayMenu = displayMenu.join("")
    // Inject the HTMl into the Parent Container
    sectionCenter.innerHTML = displayMenu
}


// ------------------ EVENT LISTENERS  ------------------//

// Run the Event Listener Upon Loading the Page

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu)
})


// Buttons Filter Iterative Event Listener

filterBtns.forEach((item) => {

    item.addEventListener("click", (event) => {

        // Get Data Id from Button
        const targetEvent = event.currentTarget.dataset.id;

        // Filter Items Array
        const filteredMenu = menu.filter((item) => {
            // Return All Items if "All" else return the filtered categories
            return targetEvent === "all" ? item : item.category === targetEvent
        })

        // Render new List
        displayMenuItems(filteredMenu)
    })
})


