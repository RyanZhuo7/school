// Sample products data
const products = [
    {
        id: 1,
        name: "山海经 Standard Edition",
        price: 49.99,
        description: "Embark on your journey in the neon-lit cybernetic world of 山海经 with the Standard Edition. Includes basic game access and starting items."
    },
    {
        id: 2,
        name: "山海经 Deluxe Edition",
        price: 69.99,
        description: "Enhance your experience in the cybernetic expanse with the Deluxe Edition. Includes exclusive in-game items, bonus credits, and digital soundtrack."
    },
    {
        id: 3,
        name: "山海经 Ultimate Edition",
        price: 99.99,
        description: "Ascend to unparalleled power with the Ultimate Edition of 山海经. Unlocks all premium content, exclusive skins, and unlimited in-game currency."
    },
    {
        id: 4,
        name: "VR Neural Kit",
        price: 299.99,
        description: "Immerse yourself in the cybernetic landscape with the VR Neural Kit. Includes neural interface headset, gloves, and full-body suit for seamless integration into the game."
    },
    {
        id: 5,
        name: "山海经 Gift Card - $25",
        price: 25,
        description: "Give the gift of power and domination with the 山海经 Gift Card. Redeemable for in-game credits, exclusive items, and premium memberships."
    },
    {
        id: 6,
        name: "山海经 Gift Card - $50",
        price: 50,
        description: "Double the fun with the 山海经 Gift Card. Get more in-game credits, exclusive items, and premium memberships."
    },
    {
        id: 7,
        name: "山海经 Gift Card - $100",
        price: 100,
        description: "Unleash the ultimate gaming experience with the 山海经 Gift Card. Access premium content, exclusive items, and VIP benefits."
    },
    {
        id: 8,
        name: "山海经 Premium Membership - Monthly",
        price: 9.99,
        description: "Unlock exclusive perks and benefits with the 山海经 Premium Membership. Enjoy faster progression, access to VIP areas, and monthly rewards."
    },
    {
        id: 9,
        name: "山海经 Premium Membership - Annual",
        price: 99.99,
        description: "Commit to greatness with the 山海经 Premium Membership. Enjoy a full year of exclusive perks, VIP treatment, and unparalleled rewards."
    },
    // Expansion Packs
    {
        id: 10,
        name: "Expansion Pack - Cybernetic Chronicles",
        price: 29.99,
        description: "Embark on new quests, face powerful adversaries, and uncover hidden secrets with the Cybernetic Chronicles expansion pack."
    },
    {
        id: 11,
        name: "Expansion Pack - Neo Tokyo Nights",
        price: 24.99,
        description: "Explore the neon-lit streets of Neo Tokyo and dive into thrilling new storylines and missions with the Neo Tokyo Nights expansion pack."
    },
    {
        id: 12,
        name: "Expansion Pack - Virtual Reality Worlds",
        price: 34.99,
        description: "Immerse yourself in new virtual reality environments, challenges, and adventures with the Virtual Reality Worlds expansion pack."
    },
    // Character Skins
    {
        id: 13,
        name: "Character Skin - Cyber Samurai",
        price: 9.99,
        description: "Stand out from the crowd with the Cyber Samurai character skin. Customize your avatar with this sleek and futuristic look."
    },
    {
        id: 14,
        name: "Character Skin - Neon Ninja",
        price: 7.99,
        description: "Channel the spirit of the Neon Ninja with this electrifying character skin. Strike fear into your enemies with style."
    },
    {
        id: 15,
        name: "Character Skin - Galactic Guardian",
        price: 11.99,
        description: "Protect the galaxy in style with the Galactic Guardian character skin. Harness the power of the cosmos and become a true hero."
    },
    // Boosters or Power-ups
    {
        id: 16,
        name: "Energy Booster Pack",
        price: 14.99,
        description: "Get a boost in energy and performance with this pack of powerful energy boosters. Dominate the battlefield with enhanced strength and agility."
    },
    {
        id: 17,
        name: "Experience Enhancer",
        price: 12.99,
        description: "Accelerate your progress and level up faster with the Experience Enhancer. Gain valuable experience points at an increased rate."
    },
    {
        id: 18,
        name: "Combat Stimulants",
        price: 17.99,
        description: "Inject yourself with combat stimulants for a temporary boost in combat abilities. Become unstoppable on the battlefield."
    },
    // Exclusive Weapons or Gear
    {
        id: 19,
        name: "Legendary Sword - Shadow Blade",
        price: 39.99,
        description: "Unleash the power of the Shadow Blade, a legendary weapon forged in darkness. Strike fear into your enemies with its unmatched power."
    },
    {
        id: 20,
        name: "Prototype Exosuit",
        price: 59.99,
        description: "Equip yourself with the Prototype Exosuit, a cutting-edge piece of technology that enhances your strength, speed, and resilience in combat."
    },
    {
        id: 21,
        name: "Plasma Rifle - Ionizer",
        price: 49.99,
        description: "Wield the Ionizer plasma rifle, a devastating weapon capable of unleashing torrents of energy on your enemies. Dominate the battlefield with its unparalleled firepower."
    },
    // Virtual Real Estate
    {
        id: 22,
        name: "Luxury Penthouse - Neon Heights",
        price: 199.99,
        description: "Own a piece of luxury in the heart of Neon Heights with this exclusive penthouse. Enjoy stunning views of the city skyline and unparalleled amenities."
    },
    {
        id: 23,
        name: "Cybernetic Hideout - Shadow Haven",
        price: 149.99,
        description: "Find refuge in the depths of Shadow Haven, a hidden cybernetic hideout where secrets are whispered and alliances are forged."
    },
    {
        id: 24,
        name: "Neo Tokyo Condo - Skyline Tower",
        price: 179.99,
        description: "Experience the vibrant energy of Neo Tokyo from the comfort of Skyline Tower. Live in style in this sleek and modern condo."
    },
    // Limited Edition Collectibles
    {
        id: 25,
        name: "Limited Edition Figurine - Cybernetic Hero",
        price: 39.99,
        description: "Collect the Cybernetic Hero figurine, a limited edition masterpiece inspired by the legendary warriors of 山海经."
    },
    {
        id: 26,
        name: "Art Book - The Art of 山海经",
        price: 29.99,
        description: "Explore the stunning artwork and concept designs behind the game with The Art of 山海经 art book. A must-have for fans and collectors."
    },
    {
        id: 27,
        name: "Soundtrack CD - Cybernetic Symphony",
        price: 19.99,
        description: "Immerse yourself in the sounds of the cybernetic world with the Cybernetic Symphony soundtrack CD. Featuring epic music tracks from the game."
    },
    // VIP Events or Access Passes
    {
        id: 28,
        name: "VIP Access Pass - Cyber Summit",
        price: 99.99,
        description: "Gain VIP access to the Cyber Summit, an exclusive event featuring developer Q&A sessions, behind-the-scenes insights, and special announcements."
    },
    {
        id: 29,
        name: "VIP Lounge Pass",
        price: 49.99,
        description: "Relax and unwind in the VIP Lounge, where you'll enjoy complimentary refreshments, priority seating, and exclusive perks."
    },
    {
        id: 30,
        name: "Premium Membership",
        price: 199.99,
        description: "Upgrade to a Premium Membership for access to premium features, exclusive content, and priority support."
    },
    // Customization Options
    {
        id: 31,
        name: "Vehicle Customization Pack",
        price: 29.99,
        description: "Personalize your vehicles with the Vehicle Customization Pack. Choose from a variety of paint schemes, decals, and accessories to create your unique ride."
    },
    {
        id: 32,
        name: "Base Builder Kit",
        price: 39.99,
        description: "Construct your dream base with the Base Builder Kit. Design and customize every aspect of your base to suit your playstyle and strategy."
    },
    {
        id: 33,
        name: "Avatar Enhancement Kit",
        price: 24.99,
        description: "Upgrade your avatar with the Avatar Enhancement Kit. Unlock new hairstyles, facial features, and accessories to express your individuality."
    },
    // Add more products as needed...
  ];
  
// Function to generate product cards
const generateProductCards = () => {
    // Get the container element for product cards by its id
    const productCardsContainer = document.getElementById('productCardsContainer');
    // Iterate over each product in the products array
    products.forEach(product => {
        // Create a new div element for the product card
        const card = document.createElement('div');
        // Add Bootstrap class for column size to the card
        card.classList.add('col-md-4');
        // Set the HTML content of the card using template literals with product details
        card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">$${product.price}</p>
                <p class="card-text">${product.description}</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary preorderButton" data-product-id="${product.id}">Preorder</button>
            </div>
        </div>
        `;
        // Append the card to the product cards container
        productCardsContainer.appendChild(card);
    });
};

// Function to handle preorder button click
const handlePreorderButtonClick = (event) => {
    // Get the product id from the data attribute of the clicked button
    const productId = event.target.dataset.productId;
    // Find the product name by its id
    const productName = products.find(product => product.id === parseInt(productId)).name;
    // Prompt the user to enter their email
    const email = prompt("Please enter your email:");
    // If email is provided, show a thank you message with the product name and email
    if (email) {
        alert(`Thank you for preordering ${productName}! We will contact you at ${email} once the product is available.`);
    }
};

// Add event listener to the document and delegate to preorder buttons
document.addEventListener('click', (event) => {
    // Check if the clicked element has the class 'preorderButton'
    if (event.target.classList.contains('preorderButton')) {
        // Call the function to handle preorder button click
        handlePreorderButtonClick(event);
    }
});

// Call the function to generate product cards when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateProductCards();
});