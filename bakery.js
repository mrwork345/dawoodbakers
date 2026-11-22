/* ============ 1. DATA ============ */



const CATEGORIES = [

  { key:"staples",          name:"Staples & Grains",        aisle:1,  icon:"sack" },

  { key:"sugar",             name:"Sugar & Sweeteners",      aisle:2,  icon:"cube" },

  { key:"spices",            name:"Spices & Seasonings",     aisle:3,  icon:"chili" },

  { key:"oils",              name:"Oils & Ghee",             aisle:4,  icon:"drop" },

  { key:"canned",            name:"Canned & Packaged Foods", aisle:5,  icon:"can" },

  { key:"snacks",            name:"Biscuits & Snacks",       aisle:6,  icon:"cookie" },

  { key:"chocolates",        name:"Chocolates & Candy",      aisle:7,  icon:"choco" },

  { key:"beverages",         name:"Beverages",               aisle:8,  icon:"cup" },

  { key:"dairy",             name:"Dairy",                   aisle:9,  icon:"carton" },

  { key:"cleaning",          name:"Cleaning Supplies",       aisle:10, icon:"spray" },

  { key:"personal-care",     name:"Personal Care",           aisle:11, icon:"soap" },

  { key:"health",            name:"Health & Hygiene",        aisle:12, icon:"cross" },

  { key:"baby-care",         name:"Baby Care",               aisle:13, icon:"bottle" },

  { key:"feminine-hygiene",  name:"Feminine Hygiene",        aisle:14, icon:"flower" },

  { key:"kitchen",           name:"Kitchen Essentials",      aisle:15, icon:"pan" },

  { key:"household",         name:"Household Miscellaneous", aisle:16, icon:"bulb" },

];



const ICONS = {

  sack:'<path d="M17 10c0-4-2.2-6.5-5-6.5S7 6 7 10c-2.6.5-4 2-4 4.5C3 20 7 24 12 24s9-4 9-9.5c0-2.5-1.4-4-4-4.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.5 15.5h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',

  cube:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M4 7.5L12 12l8-4.5M12 12v9" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',

  chili:'<path d="M8 6c4-2.5 10-2.5 11 2.5-1 6-8 11.5-13 12.5-2.7.5-4.4-1.2-3.7-3.7C3.3 13 6 8 8 6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 6c-1-1.6-1-3 .3-3.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',

  drop:'<path d="M12 3s6.5 7.4 6.5 12A6.5 6.5 0 0 1 5.5 15C5.5 10.4 12 3 12 3Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',

  can:'<rect x="6" y="7" width="12" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><ellipse cx="12" cy="7" rx="6" ry="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/>',

  cookie:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="9" cy="10" r="1.1" fill="currentColor"/><circle cx="14" cy="9" r="1.1" fill="currentColor"/><circle cx="15" cy="14" r="1.1" fill="currentColor"/><circle cx="10" cy="15" r="1.1" fill="currentColor"/>',

  choco:'<rect x="3.5" y="6" width="17" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9 6v12M15 6v12M3.5 12h17" stroke="currentColor" stroke-width="1.5"/>',

  cup:'<path d="M6 8h11l-1.2 10.2A2 2 0 0 1 13.8 20h-3.6a2 2 0 0 1-2-1.8L7 8Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.5 8V5.5M11 4l1-1M13 5l1-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',

  carton:'<path d="M7 4h10v4l1.8 2v11.5a1 1 0 0 1-1 1H6.2a1 1 0 0 1-1-1V10L7 8V4Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7 8h10" stroke="currentColor" stroke-width="1.7"/>',

  spray:'<rect x="7" y="9" width="8" height="12.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M10 9V6h2.4M16 6.5l3-1.3M16 9l3.6.4M15.4 4.2l2-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',

  soap:'<rect x="5" y="9" width="14" height="10" rx="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9 6.5c0-1.4 1.1-2.5 3-2.5s3 1.1 3 2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',

  cross:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',

  bottle:'<path d="M10 3h4v3.2c1.4.6 2 1.7 2 3.3v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-10c0-1.6.6-2.7 2-3.3V3Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M10 6.5h4" stroke="currentColor" stroke-width="1.6"/>',

  flower:'<circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="6.5" r="2.6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="17.5" r="2.6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="6.5" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.5"/>',

  pan:'<circle cx="11" cy="13" r="7" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M17.5 11.5l4.5-1.3M9 13a2.2 2.2 0 0 1 4.4 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',

  leaf:'<path d="M5 19c-1-7 3-13.5 14-14 .8 9.5-4.5 14.5-14 14Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M6 18c3-4 6-7 11.5-11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',

  egg:'<path d="M12 3c4 4.5 6.5 9.4 6.5 12.5a6.5 6.5 0 0 1-13 0C5.5 12.4 8 7.5 12 3Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',

  bulb:'<path d="M9 17.5h6M10 21h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M12 3a6.5 6.5 0 0 0-3.7 11.8c.7.5 1.2 1.3 1.2 2.2h5c0-.9.5-1.7 1.2-2.2A6.5 6.5 0 0 0 12 3Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',

};



function iconSvg(key){

  return `<svg viewBox="0 0 24 24" width="26" height="26">${ICONS[key]||ICONS.can}</svg>`;

}



// [ name, categoryKey, basePrice(PKR), discountPct ]

const RAW_PRODUCTS = [

  // Staples & Grains

  ["Wheat Flour (Atta) 10kg","staples",1450,10],["Maida (All Purpose Flour) 1kg","staples",180,0],

["Besan (Gram Flour) 1kg","staples",260,0],["Basmati Rice 5kg","staples",1850,0],

  ["Red Lentils (Masoor Dal) 1kg","staples",320,0],["Chickpeas (Chana) 1kg","staples",290,0],

  ["Red Kidney Beans 1kg","staples",380,0],["White Beans (Lobia) 1kg","staples",340,0],

  ["Barley (Jau) 1kg","staples",240,0],["Rolled Oats 1kg","staples",420,20],

  ["Corn Flour 500g","staples",190,0],["Semolina (Sooji) 1kg","staples",220,0],

  ["Vermicelli (Seviyan) 400g","staples",150,0],

  // Sugar & Sweeteners

  ["White Sugar 5kg","sugar",950,0],["Brown Sugar 1kg","sugar",280,0],

  ["Pure Honey 500g","sugar",890,10],["Jaggery (Gur) 1kg","sugar",260,0],

  // Spices & Seasonings

  ["Iodized Salt 800g","spices",70,0],["Black Salt 400g","spices",120,0],

  ["Red Chili Powder 200g","spices",240,0],["Turmeric Powder 200g","spices",180,0],

  ["Coriander Powder 200g","spices",160,0],["Cumin Seeds (Zeera) 200g","spices",280,0],

  ["Garam Masala 100g","spices",210,0],["Black Pepper Powder 100g","spices",320,15],

  ["White Pepper Powder 100g","spices",350,0],["Chaat Masala 100g","spices",150,0],

  ["Curry Powder 200g","spices",190,0],["Whole Cloves 50g","spices",180,0],

  ["Green Cardamom 50g","spices",480,0],["Cinnamon Sticks 50g","spices",160,0],

  ["Bay Leaves 30g","spices",90,0],

  // Oils & Ghee

  ["Cooking Oil 5L","oils",2650,10],["Extra Virgin Olive Oil 1L","oils",2200,0],

  ["Sunflower Oil 3L","oils",1650,0],["Canola Oil 3L","oils",1700,0],

  ["Mustard Oil 1L","oils",650,0],["Banaspati Ghee 2.5kg","oils",1950,15],

  ["Pure Desi Ghee 1kg","oils",2450,0],

  // Canned & Packaged Foods

  ["Tomato Paste 400g","canned",180,0],["Tomato Ketchup 800g","canned",320,10],

  ["Mayonnaise 400g","canned",380,0],["Chili Garlic Sauce 300g","canned",290,0],

  ["Soy Sauce 250ml","canned",260,0],["White Vinegar 500ml","canned",120,0],

  ["Mixed Pickle 1kg","canned",340,0],["Mixed Fruit Jam 400g","canned",380,0],

  ["Peanut Butter 340g","canned",520,0],["Sweet Corn Tin 400g","canned",210,0],

  ["Tuna Chunks in Oil 185g","canned",480,20],["Instant Noodles (Pack of 6)","canned",540,0],

  // Biscuits & Snacks

  ["Assorted Cream Biscuits 500g","snacks",220,0],["Chocolate Chip Cookies 300g","snacks",380,0],

  ["Cheese Wafers 200g","snacks",190,0],["Chocolate Cake Slice 250g","snacks",280,0],

  ["Potato Chips (Family Pack)","snacks",250,15],["Nimko Mix 400g","snacks",320,0],

  ["Salted Popcorn 150g","snacks",160,0],["Cream Crackers 300g","snacks",210,0],

  ["Pretzel Sticks 200g","snacks",290,0],["Nacho Chips 180g","snacks",260,0],

  // Chocolates & Candy

  ["Dairy Milk Chocolate Bar","chocolates",180,0],["KitKat 4-Finger","chocolates",150,0],

  ["Mars Chocolate Bar","chocolates",160,0],["Snickers Chocolate Bar","chocolates",160,0],

  ["Bounty Coconut Bar","chocolates",170,0],["Fruit Lollipops (Pack of 10)","chocolates",220,0],

  ["Bubble Gum Pack","chocolates",90,0],["Mint Candies Tin","chocolates",140,0],

  ["Milk Toffees 300g","chocolates",260,10],

  // Beverages

  ["Black Tea 900g","beverages",980,0],["Instant Coffee 200g","beverages",890,0],

  ["Green Tea (25 Bags)","beverages",380,0],["Soft Drink 1.5L","beverages",180,0],

  ["Mixed Fruit Juice 1L","beverages",260,0],["Energy Drink Can","beverages",220,0],

  ["Mineral Water 1.5L","beverages",90,0],["Rooh Afza 800ml","beverages",480,10],

  ["Jam-e-Shirin 800ml","beverages",460,0],["Tang Orange 750g","beverages",420,0],

  ["Powdered Milk Drink 400g","beverages",380,0],

  // Dairy

  ["Fresh Milk 1L","dairy",220,0],["Powdered Milk 900g","dairy",980,0],

  ["Plain Yogurt 1kg","dairy",280,0],["Salted Butter 250g","dairy",420,0],

  ["Cheddar Cheese Slices 200g","dairy",480,15],["Fresh Cream 200ml","dairy",240,0],

  ["Fresh Lassi 500ml","dairy",150,0],

  // Cleaning Supplies

  ["Laundry Detergent Powder 3kg","cleaning",850,0],["Washing Powder 1kg","cleaning",320,0],

  ["Dishwashing Liquid 750ml","cleaning",280,0],["Toilet Cleaner 1L","cleaning",260,0],

  ["Floor Cleaner 1L","cleaning",290,10],["Glass Cleaner 500ml","cleaning",220,0],

  ["Bleach 1L","cleaning",180,0],["Air Freshener Spray","cleaning",340,0],

  ["Garbage Bags (Roll of 30)","cleaning",250,0],

  // Personal Care

  ["Toothpaste 150g","personal-care",210,0],["Toothbrush (Pack of 2)","personal-care",180,0],

  ["Mouthwash 500ml","personal-care",420,0],["Bathing Soap (Pack of 3)","personal-care",270,0],

  ["Face Wash 100ml","personal-care",480,15],["Shampoo 400ml","personal-care",620,0],

  ["Hair Conditioner 400ml","personal-care",640,0],["Hair Oil 200ml","personal-care",380,0],

  ["Hair Styling Gel 150ml","personal-care",350,0],["Hair Color Kit","personal-care",480,0],

  ["Disposable Razors (Pack of 5)","personal-care",320,0],["Deodorant Spray 150ml","personal-care",420,20],

  ["Perfume 100ml","personal-care",1450,0],["Moisturizing Lotion 200ml","personal-care",460,0],

  // Health & Hygiene

  ["Hand Sanitizer 500ml","health",280,0],["Surgical Face Masks (Box of 50)","health",450,0],

  ["Cotton Wool 100g","health",120,0],["Adhesive Bandages (Box)","health",180,0],

  ["Digital Thermometer","health",650,0],

  // Baby Care

  ["Baby Diapers (Pack of 34)","baby-care",1650,10],["Baby Wet Wipes (Pack of 80)","baby-care",280,0],

  ["Baby Powder 200g","baby-care",320,0],["Baby Shampoo 200ml","baby-care",420,0],

  ["Baby Lotion 200ml","baby-care",440,0],["Baby Soap (Pack of 3)","baby-care",320,0],

  ["Baby Cereal Food 350g","baby-care",680,0],["Feeding Bottle 250ml","baby-care",580,0],

  // Feminine Hygiene

  ["Sanitary Pads (Pack of 16)","feminine-hygiene",280,0],["Panty Liners (Pack of 20)","feminine-hygiene",190,0],

  ["Intimate Wash 200ml","feminine-hygiene",420,0],["Cotton Tampons (Pack of 16)","feminine-hygiene",340,0],

  // Kitchen Essentials

  ["Aluminum Foil Roll","kitchen",320,0],["Cling Film Roll","kitchen",280,0],

  ["Baking Paper Roll","kitchen",250,0],["Tissue Paper Box","kitchen",180,0],

  ["Paper Towel Roll (Pack of 2)","kitchen",320,0],["Disposable Plastic Cups (Pack of 50)","kitchen",220,0],

  ["Disposable Plastic Plates (Pack of 25)","kitchen",250,0],["Disposable Spoons (Pack of 50)","kitchen",150,0],

  ["Zip Lock Bags (Pack of 30)","kitchen",280,0],

  // Household Miscellaneous

  ["AA Batteries (Pack of 4)","household",280,0],["Matchboxes (Pack of 10)","household",90,0],

  ["Gas Lighters (Pack of 3)","household",150,0],["Scented Candles (Set of 3)","household",420,0],

  ["Mosquito Coils (Pack of 10)","household",180,0],["LED Light Bulb 12W","household",280,0],

  ["Ballpoint Pens (Pack of 10)","household",150,0],["Pencils (Pack of 12)","household",120,0],

  ["Notebooks (Pack of 5)","household",380,0],

];



function imageKeyword(name){
  return name.replace(/\([^)]*\)/g, "").replace(/\b\d+(?:\.\d+)?\s?(kg|g|ml|l|L)\b/gi, "").trim().split(" ").slice(0,3).join(",");
}



let PRODUCTS = RAW_PRODUCTS.map((row, i) => {

  const id = i + 1;

  const [name, category, basePrice, discount] = row;

  const now = discount > 0 ? Math.round((basePrice * (1 - discount / 100)) / 5) * 5 : basePrice;

  const old = discount > 0 ? basePrice : null;

  const ratingRaw = 3.6 + ((id * 17) % 14) / 10;

  const rating = Math.min(5, Math.round(ratingRaw * 10) / 10);

  const reviews = (id * 37) % 480 + 12;

  let availability = "in";

  if (id % 23 === 0) availability = "out";

  else if (id % 7 === 0) availability = "low";

  let badge = null;

  if (discount >= 15) badge = "discount";

  else if (id % 9 === 0) badge = "bestseller";

  else if (id % 13 === 0) badge = "new";

  else if (["fresh-produce","dairy","oils"].includes(category) && id % 5 === 0) badge = "organic";

  const kw = imageKeyword(name) || category;

  return {

    id, name, category, price: now, oldPrice: old, discount,

    rating, reviews, availability, badge,

    image: `https\://loremflickr.com/480/380/${encodeURIComponent(kw)}?lock=${id}`,

  };

});

// Load admin-edited products saved in this browser.
try {
  const savedProducts = JSON.parse(localStorage.getItem("db_products_v1") || "null");
  if (Array.isArray(savedProducts)) {
    PRODUCTS = savedProducts.filter(product =>
      !["fresh-produce", "meat-eggs"].includes(product.category) &&
      !/\b(chicken|beef|mutton|fish|mango|potatoes|tomatoes|onion|garlic|ginger|apples|bananas|lemons|chilies)\b/i.test(product.name)
    ).map(product => product.name === "Basmati Rice 5kg"
      ? { ...product, price: Number(product.oldPrice) || 1850, oldPrice: null, discount: 0, badge: product.badge === "discount" ? null : product.badge }
      : product);
  }
} catch (error) { console.warn("Could not load saved products", error); }


const TESTIMONIALS = [

{ name:"Ayesha Raza", role:"Regular Customer, Khanewal", quote:"Dawood Bakers is the only place I trust for fresh atta — delivery is always on time and the bread still tastes like it did when I was a kid.", stars:5 },

{ name:"Bilal Ahmed", role:"Regular Customer, Khanewal", quote:"I order my monthly ration from here now. Prices are fair and nothing has ever arrived expired or damaged.", stars:5 },

{ name:"Sana Tariq", role:"Regular Customer, Khanewal", quote:"My kids love the bakery items, and the everyday essentials make shopping easy.", stars:4.5 },

{ name:"Usman Farooq", role:"Regular Customer, Khanewal", quote:"Great for bulk orders — I get my household essentials here every week without a single hiccup.", stars:5 },

{ name:"Hina Malik", role:"Regular Customer, Khanewal", quote:"Customer support actually picks up the phone. Had a delivery mix-up once and it was sorted out.", stars:4.5 },

];



const FAQS = [

{ q:"What areas do you deliver to?", a:"We offer doorstep delivery within Khanewal only." },

{ q:"When will my order arrive?", a:"Delivery timing depends on your order and location. Contact us to confirm an estimated delivery time." },

  { q:"Can I pay cash on delivery?", a:"Yes — we accept cash on delivery, as well as major cards and mobile wallets like EasyPaisa and JazzCash." },

  { q:"Do you offer bulk or wholesale pricing?", a:"Yes, shops and households ordering in bulk can contact us directly for wholesale rates on staples, oils and cleaning supplies." },

  { q:"What if an item arrives damaged or wrong?", a:"Let us know within 24 hours of delivery and we'll replace or refund the item, no questions asked." },

];



const TICKER_ITEMS = [

"Freshly baked goods from Dawood Bakers","Pantry staples and everyday essentials",

"Local doorstep delivery within Khanewal","Fair prices on everyday essentials",

];



/* ============ 2. STATE ============ */

const state = {

  cart: [],          // { id, qty }

  wishlist: [],       // ids

  currentPage: "home",

  filters: { category: null, search: "", maxPrice: 6000, inStockOnly: false, minRating: 0 },

  sort: "popularity",

  view: "grid",

  visibleCount: 12,

  promo: 0,

  tIndex: 0,

  tTimer: null,

};



/* ============ 3. UTILITIES ============ */

const $ = (sel, ctx = document) => ctx.querySelector(sel);

const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const byId = (id) => PRODUCTS.find(p => p.id === id);

const fmt = (n) => "Rs. " + Math.round(n).toLocaleString("en-PK");

const catName = (key) => (CATEGORIES.find(c => c.key === key) || {}).name || key;

const catAisle = (key) => (CATEGORIES.find(c => c.key === key) || {}).aisle || "";



function debounce(fn, wait = 220){

  let t;

  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };

}



function starString(rating){

  const full = Math.round(rating * 2) / 2;

  let out = "";

  for (let i = 1; i <= 5; i++){

    if (full >= i) out += "★";

    else if (full >= i - 0.5) out += "★"; // simplified half as full for font compat

    else out += "☆";

  }

  return out;

}



function availLabel(a){

  return a === "in" ? { cls:"in", text:"In Stock" } : a === "low" ? { cls:"low", text:"Only Few Left" } : { cls:"out", text:"Out of Stock" };

}



function badgeLabel(p){

  if (!p.badge) return "";

  const map = { discount:`-${p.discount}%`, bestseller:"Bestseller", new:"New", organic:"Organic" };

  return `<span class="pc-badge ${p.badge}">${map[p.badge]}</span>`;

}



function toast(title, msg, icon = "check"){

  const container = $("#toastContainer");

  const el = document.createElement("div");

  el.className = "toast";

  const icons = {

    check:'<path d="M20 6L9 17l-5-5" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',

    heart:'<path d="M12 20s-6.5-4-8.5-7.8A4.7 4.7 0 0 1 12 5.3a4.7 4.7 0 0 1 8.5 6.9C18.5 16 12 20 12 20Z" fill="white"/>',

    cart:'<circle cx="9" cy="20" r="1.2" fill="white"/><circle cx="17" cy="20" r="1.2" fill="white"/><path d="M2.5 3h2l1.8 11a1.8 1.8 0 0 0 1.8 1.5h7.6a1.8 1.8 0 0 0 1.8-1.4L19 7H6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',

  };

  el.innerHTML = `<span class="toast-icon"><svg viewBox="0 0 24 24" width="16" height="16">${icons[icon]||icons.check}</svg></span><p><strong>${title}</strong>${msg}</p>`;

  container.appendChild(el);

  setTimeout(() => {

    el.classList.add("leaving");

    setTimeout(() => el.remove(), 380);

  }, 2600);

}



function attachRipple(){

  document.body.addEventListener("click", (e) => {

    const btn = e.target.closest(".ripple");

    if (!btn) return;

    const rect = btn.getBoundingClientRect();

    const circle = document.createElement("span");

    const size = Math.max(rect.width, rect.height);

    circle.className = "ripple-circle";

    circle.style.width = circle.style.height = size + "px";

    circle.style.left = (e.clientX - rect.left - size / 2) + "px";

    circle.style.top = (e.clientY - rect.top - size / 2) + "px";

    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 650);

  });

}



/* ============ 4. RENDERING ============ */



function categoryCardHTML(cat){
  const count = PRODUCTS.filter(p => p.category === cat.key).length;
  return `<button type="button" class="category-card" data-page="products" data-cat="${cat.key}" aria-label="View ${cat.name} products">

    <span class="aisle-tag">Aisle ${String(cat.aisle).padStart(2,"0")}</span>

<span class="cat-icon">${iconSvg(cat.icon)}</span>

    <span class="cat-name">${cat.name}</span>

    <span class="cat-count">${count} items</span>

  </button>`;
}



function renderCategories(){

  $("#homeCategoryGrid").innerHTML = CATEGORIES.slice(0, 12).map(c => categoryCardHTML(c)).join("");

  $("#fullCategoryGrid").innerHTML = CATEGORIES.map(c => categoryCardHTML(c)).join("");

  $("#categoryFilterList").innerHTML =

    `<div class="filter-item ${!state.filters.category ? "active" : ""}" data-cat="">

       <span>All Categories</span><span class="fi-count">${PRODUCTS.length}</span>

     </div>` +

    CATEGORIES.map(c => {

      const count = PRODUCTS.filter(p => p.category === c.key).length;

      return `<div class="filter-item ${state.filters.category === c.key ? "active" : ""}" data-cat="${c.key}">

        <span>${c.name}</span><span class="fi-count">${count}</span>

      </div>`;

    }).join("");

}



function productCardHTML(p){

  const av = availLabel(p.availability);

  const inWishlist = state.wishlist.includes(p.id);

  const disabled = p.availability === "out";

  return `<article class="product-card" data-id="${p.id}">

    <div class="pc-media">

      <div class="pc-badges">${badgeLabel(p)}</div>

      <button class="pc-wishlist ${inWishlist ? "active" : ""}" data-action="wishlist" data-id="${p.id}" aria-label="Toggle wishlist">

        <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 20.5s-7.4-4.6-10-9A5.6 5.6 0 0 1 12 6a5.6 5.6 0 0 1 10 5.5c-2.6 4.4-10 9-10 9Z" fill="${inWishlist ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>

      </button>

      <img src="${p.image}" alt="${p.name}" loading="lazy">

      <button class="pc-quick" data-action="quickview" data-id="${p.id}">Quick View</button>

    </div>

    <div class="pc-body">

      <span class="pc-cat">${catName(p.category)}</span>

      <h3 class="pc-name">${p.name}</h3>

      <div class="pc-rating"><span class="stars">${starString(p.rating)}</span><span>${p.rating.toFixed(1)} (${p.reviews})</span></div>

      <span class="pc-avail ${av.cls}">${av.text}</span>

      <div class="pc-footer">

        <div class="pc-price">

          <span class="now">${fmt(p.price)}</span>

          ${p.oldPrice ? `<span class="old">${fmt(p.oldPrice)}</span>` : ""}

        </div>

        <button class="pc-add" data-action="add" data-id="${p.id}" ${disabled ? "disabled" : ""} aria-label="Add to cart">

          <svg viewBox="0 0 24 24" width="17" height="17"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>

        </button>

      </div>

    </div>

  </article>`;

}



function renderGrid(target, list){

  const el = typeof target === "string" ? $(target) : target;

  el.innerHTML = list.map(productCardHTML).join("") || "";

}



function renderHomeSections(){

  const bestSellers = PRODUCTS.filter(p => p.badge === "bestseller").slice(0, 8);

  renderGrid("#bestSellerGrid", bestSellers.length ? bestSellers : PRODUCTS.slice(0, 8));

const fresh = PRODUCTS.filter(p => p.category === "dairy").slice(0, 8);

  renderGrid("#freshPicksGrid", fresh);

}



function renderTicker(){

  const items = [...TICKER_ITEMS, ...TICKER_ITEMS].map(t => `<span>${t}</span>`).join("");

  $("#tickerTrack").innerHTML = items;

}



function renderTestimonials(){

  $("#testimonialTrack").innerHTML = TESTIMONIALS.map(t => `

    <div class="testimonial-card">

      <div class="t-inner">

        <div class="t-stars">${"★".repeat(Math.round(t.stars))}${"☆".repeat(5 - Math.round(t.stars))}</div>

        <p class="t-quote">"${t.quote}"</p>

        <div class="t-person">

          <span class="t-avatar">${t.name.split(" ").map(w => w[0]).join("")}</span>

          <div><p class="t-name">${t.name}</p><p class="t-role">${t.role}</p></div>

        </div>

      </div>

    </div>`).join("");

  $("#testimonialDots").innerHTML = TESTIMONIALS.map((_, i) => `<button data-i="${i}" class="${i === 0 ? "active" : ""}"></button>`).join("");

  updateTestimonialSlide();

}



function updateTestimonialSlide(){

  $("#testimonialTrack").style.transform = `translateX(-${state.tIndex * 100}%)`;

  $$("#testimonialDots button").forEach((b, i) => b.classList.toggle("active", i === state.tIndex));

}



function renderFAQ(){

  $("#faqList").innerHTML = FAQS.map((f, i) => `

    <div class="faq-item ${i === 0 ? "open" : ""}">

      <button class="faq-q">${f.q}

        <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>

      </button>

      <div class="faq-a" style="${i === 0 ? "max-height:200px;" : ""}"><p>${f.a}</p></div>

    </div>`).join("");

}



/* ============ 5. NAVIGATION ============ */

function navigateTo(pageId, opts = {}){

  state.currentPage = pageId;

  $$(".page").forEach(p => p.classList.remove("active"));

  const target = $("#page-" + pageId);

  if (target) target.classList.add("active");



  $$(".nav-link").forEach(l => l.classList.toggle("active", l.dataset.page === pageId));



  if (pageId === "products"){

    if (opts.category !== undefined) state.filters.category = opts.category;

    if (opts.search !== undefined) state.filters.search = opts.search;

    $("#sidebarSearch").value = state.filters.search || "";

    renderCategories();

    applyFilters(true);

    const title = state.filters.category ? catName(state.filters.category) : "All Products";

    $("#productsPageTitle").textContent = title;

    $("#productsPageSub").textContent = state.filters.category

      ? `Everything from Aisle ${String(catAisle(state.filters.category)).padStart(2,"0")} — ${title}.`

      : "Everything on the shelf, filtered your way.";

  }

  if (pageId === "cart") renderCart();

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  closeMobileMenu();

}



function initNavLinks(){

  document.body.addEventListener("click", (e) => {

    const link = e.target.closest("[data-page]");

    if (!link) return;

    e.preventDefault();

    const page = link.dataset.page;

    const cat = link.dataset.cat;

    navigateTo(page, cat ? { category: cat, search: "" } : {});

  });

}



/* ============ 6. SEARCH ============ */

function searchProducts(term){

  const q = term.trim().toLowerCase();

  if (!q) return [];

  return PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || catName(p.category).toLowerCase().includes(q)).slice(0, 6);

}



function renderSuggestions(term){

  const box = $("#searchSuggestions");

  const results = searchProducts(term);

  if (!term.trim()){ box.classList.remove("open"); box.innerHTML = ""; return; }

  box.innerHTML = results.length

    ? results.map(p => `<div class="suggest-item" data-action="goto" data-id="${p.id}">

        <img src="${p.image}" alt="">

        <div><p class="si-name">${p.name}</p><p class="si-cat">${catName(p.category)}</p></div>

        <span class="si-price">${fmt(p.price)}</span>

      </div>`).join("")

    : `<div class="suggest-empty">No products found</div>`;

  box.classList.add("open");

}



function initSearch(){

  const input = $("#searchInput");

  const mobileInput = $("#searchInputMobile");

  const run = debounce((val) => renderSuggestions(val));

  input.addEventListener("input", (e) => run(e.target.value));

  input.addEventListener("focus", (e) => renderSuggestions(e.target.value));

  document.addEventListener("click", (e) => {

    if (!e.target.closest(".nav-search")) $("#searchSuggestions").classList.remove("open");

  });

  $("#searchSuggestions").addEventListener("click", (e) => {

    const item = e.target.closest("[data-action='goto']");

    if (!item) return;

    const p = byId(Number(item.dataset.id));

    navigateTo("products", { search: p.name, category: null });

    $("#searchSuggestions").classList.remove("open");

    input.value = "";

  });

  input.addEventListener("keydown", (e) => {

    if (e.key === "Enter"){ navigateTo("products", { search: input.value, category: null }); $("#searchSuggestions").classList.remove("open"); }

  });

  mobileInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") navigateTo("products", { search: mobileInput.value, category: null });

  });

  $("#sidebarSearch").addEventListener("input", debounce((e) => {

    state.filters.search = e.target.value; applyFilters(true);

  }));

}



/* ============ 7. FILTERS & SORT ============ */

function getFilteredList(){

  let list = PRODUCTS.slice();

  const f = state.filters;

  if (f.category) list = list.filter(p => p.category === f.category);

  if (f.search) {

    const q = f.search.toLowerCase();

    list = list.filter(p => p.name.toLowerCase().includes(q) || catName(p.category).toLowerCase().includes(q));

  }

  list = list.filter(p => p.price <= f.maxPrice);

  if (f.inStockOnly) list = list.filter(p => p.availability !== "out");

  if (f.minRating) list = list.filter(p => p.rating >= f.minRating);



  switch (state.sort){

    case "price-asc": list.sort((a, b) => a.price - b.price); break;

    case "price-desc": list.sort((a, b) => b.price - a.price); break;

    case "discount": list.sort((a, b) => b.discount - a.discount); break;

    case "rating": list.sort((a, b) => b.rating - a.rating); break;

    case "newest": list.sort((a, b) => b.id - a.id); break;

    default: list.sort((a, b) => b.reviews - a.reviews);

  }

  return list;

}



function renderActiveChips(){

  const chips = [];

  const f = state.filters;

  if (f.category) chips.push({ label: catName(f.category), clear: () => f.category = null });

  if (f.search) chips.push({ label: `"${f.search}"`, clear: () => { f.search = ""; $("#sidebarSearch").value = ""; } });

  if (f.maxPrice < 6000) chips.push({ label: `Under ${fmt(f.maxPrice)}`, clear: () => { f.maxPrice = 6000; $("#priceRange").value = 6000; $("#priceRangeValue").textContent = "Rs. 6000"; } });

  if (f.inStockOnly) chips.push({ label: "In Stock Only", clear: () => { f.inStockOnly = false; $("#inStockOnly").checked = false; } });

  if (f.minRating) chips.push({ label: `${f.minRating}★ and up`, clear: () => { f.minRating = 0; setActiveRatingBtn(0); } });



  $("#activeChips").innerHTML = chips.map((c, i) => `<span class="chip" data-i="${i}">${c.label}

    <button aria-label="Remove filter"><svg viewBox="0 0 24 24" width="12" height="12"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button></span>`).join("");



  $$("#activeChips .chip button").forEach((btn, i) => {

    btn.addEventListener("click", () => { chips[i].clear(); applyFilters(true); });

  });

}



function setActiveRatingBtn(val){

  $$("#ratingFilter button").forEach(b => b.classList.toggle("active", Number(b.dataset.rating) === val));

}



function applyFilters(reset){

  if (reset) state.visibleCount = 12;

  const list = getFilteredList();

  $("#resultCount").textContent = `${list.length} product${list.length !== 1 ? "s" : ""}`;

  const visible = list.slice(0, state.visibleCount);

  renderGrid("#productsGrid", visible);

  $("#noResults").hidden = list.length !== 0;

  $("#loadMoreBtn").style.display = state.visibleCount >= list.length ? "none" : "inline-flex";

  renderActiveChips();

  $$("#categoryFilterList .filter-item").forEach(el => el.classList.toggle("active", (el.dataset.cat || null) === (state.filters.category || null)));

}



function initFilters(){

  $("#categoryFilterList").addEventListener("click", (e) => {

    const item = e.target.closest(".filter-item");

    if (!item) return;

    state.filters.category = item.dataset.cat || null;

    applyFilters(true);

  });

  $("#priceRange").addEventListener("input", (e) => {

    state.filters.maxPrice = Number(e.target.value);

    $("#priceRangeValue").textContent = fmt(e.target.value);

    applyFilters(true);

  });

  $("#inStockOnly").addEventListener("change", (e) => { state.filters.inStockOnly = e.target.checked; applyFilters(true); });

  $("#ratingFilter").addEventListener("click", (e) => {

    const btn = e.target.closest("button");

    if (!btn) return;

    state.filters.minRating = Number(btn.dataset.rating);

    setActiveRatingBtn(state.filters.minRating);

    applyFilters(true);

  });

  $("#clearFilters").addEventListener("click", () => {

    state.filters = { category: null, search: "", maxPrice: 6000, inStockOnly: false, minRating: 0 };

    $("#priceRange").value = 6000; $("#priceRangeValue").textContent = "Rs. 6000";

    $("#inStockOnly").checked = false; $("#sidebarSearch").value = "";

    setActiveRatingBtn(0);

    applyFilters(true);

  });

  $("#sortSelect").addEventListener("change", (e) => { state.sort = e.target.value; applyFilters(true); });

  $("#loadMoreBtn").addEventListener("click", () => { state.visibleCount += 12; applyFilters(false); });



  $("#gridViewBtn").addEventListener("click", () => setView("grid"));

  $("#listViewBtn").addEventListener("click", () => setView("list"));



  $("#filtersToggle").addEventListener("click", () => $("#filtersSidebar").classList.add("open"));

  document.addEventListener("click", (e) => {

    if ($("#filtersSidebar").classList.contains("open") && !e.target.closest("#filtersSidebar") && !e.target.closest("#filtersToggle")){

      $("#filtersSidebar").classList.remove("open");

    }

  });

}



function setView(mode){

  state.view = mode;

  $("#productsGrid").classList.toggle("list-view", mode === "list");

  $("#gridViewBtn").classList.toggle("active", mode === "grid");

  $("#listViewBtn").classList.toggle("active", mode === "list");

}



/* ============ 8. CART ============ */

function addToCart(id, qty = 1){

  const item = state.cart.find(c => c.id === id);

  if (item) item.qty += qty;

  else state.cart.push({ id, qty });

  updateCartCount(true);

  const p = byId(id);

  toast("Added to cart", ` — ${p.name}`, "cart");

  renderCart();

}



function removeFromCart(id){

  state.cart = state.cart.filter(c => c.id !== id);

  updateCartCount(true);

  renderCart();

}



function changeQty(id, delta){

  const item = state.cart.find(c => c.id === id);

  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0){ removeFromCart(id); return; }

  updateCartCount(true);

  renderCart();

}



function cartTotals(){

  const subtotal = state.cart.reduce((sum, c) => sum + byId(c.id).price * c.qty, 0);

const delivery = subtotal === 0 ? 0 : 150;

  const discountAmt = subtotal * (state.promo / 100);

  const total = subtotal + delivery - discountAmt;

  return { subtotal, delivery, discountAmt, total };

}



function updateCartCount(bump){

  const count = state.cart.reduce((s, c) => s + c.qty, 0);

  const el = $("#cartCount");

  el.textContent = count;

  if (bump){ el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }

}



function renderCart(){

  const hasItems = state.cart.length > 0;

  $("#cartLayout").style.display = hasItems ? "grid" : "none";

  $("#emptyCart").hidden = hasItems;

  $("#cartPageSub").textContent = hasItems ? `${state.cart.reduce((s,c)=>s+c.qty,0)} item(s) in your trolley.` : "Your trolley is empty.";

  if (!hasItems) return;



  $("#cartItems").innerHTML = state.cart.map(c => {

    const p = byId(c.id);

    return `<div class="cart-item" data-id="${p.id}">

      <img src="${p.image}" alt="${p.name}">

      <div class="ci-info">

        <p class="ci-name">${p.name}</p>

        <p class="ci-cat">${catName(p.category)}</p>

        <p class="ci-price">${fmt(p.price)}</p>

      </div>

      <div class="qty-control">

        <button data-action="dec" data-id="${p.id}" aria-label="Decrease">−</button>

        <span>${c.qty}</span>

        <button data-action="inc" data-id="${p.id}" aria-label="Increase">+</button>

      </div>

      <span class="ci-subtotal">${fmt(p.price * c.qty)}</span>

      <button class="ci-remove" data-action="remove" data-id="${p.id}" aria-label="Remove">

        <svg viewBox="0 0 24 24" width="18" height="18"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>

      </button>

    </div>`;

  }).join("");



  const t = cartTotals();

  $("#sumSubtotal").textContent = fmt(t.subtotal);

$("#sumDelivery").textContent = fmt(t.delivery);

  $("#sumDiscountRow").hidden = t.discountAmt <= 0;

  $("#sumDiscount").textContent = "- " + fmt(t.discountAmt);

  $("#sumTotal").textContent = fmt(t.total);

}



function initCart(){

  document.body.addEventListener("click", (e) => {

    const addBtn = e.target.closest("[data-action='add']");

    if (addBtn && !addBtn.disabled){ addToCart(Number(addBtn.dataset.id)); return; }



    const cartCtrl = e.target.closest("[data-action='inc'],[data-action='dec'],[data-action='remove']");

    if (cartCtrl){

      const id = Number(cartCtrl.dataset.id);

      const action = cartCtrl.dataset.action;

      if (action === "inc") changeQty(id, 1);

      if (action === "dec") changeQty(id, -1);

      if (action === "remove") removeFromCart(id);

    }

  });



  $("#applyPromoBtn").addEventListener("click", () => {

    const code = $("#promoInput").value.trim().toUpperCase();

    if (code === "DAWOOD10"){ state.promo = 10; toast("Promo applied", " — 10% off your order"); }

    else { state.promo = 0; toast("Invalid code", " — please check and try again"); }

    renderCart();

  });



  $("#customerOrderForm").addEventListener("submit", event => {
    event.preventDefault();
    if (state.cart.length === 0) return;

    const totals = cartTotals();
    const orderId = `online-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const order = {
      id: orderId,
      number: `DB-${Date.now()}`,
      createdAt: new Date().toISOString(),
      customer: {
        name: $("#orderCustomerName").value.trim(),
        phone: $("#orderCustomerPhone").value.trim(),
        address: $("#orderDeliveryAddress").value.trim(),
      },
      items: state.cart.map(item => {
        const product = byId(item.id);
        return {
          name: product.name,
          unitPrice: product.price,
          quantity: item.qty,
          total: product.price * item.qty,
        };
      }),
      subtotal: totals.subtotal,
      delivery: totals.delivery,
      discount: totals.discountAmt,
      total: totals.total,
      payment: "Cash on delivery",
      status: "new",
    };

    try {
      saveCustomerOrder(order);
    } catch (error) {
      console.error("Could not save customer order", error);
      alert(`Your order was not placed: ${error.message || "Could not save the order."}`);
      return;
    }

    state.cart = [];
    state.promo = 0;
    event.target.reset();
    updateCartCount(true);
    renderCart();
    toast("Order received", ` — order ${order.number}`);
  });
}



/* ============ 9. WISHLIST ============ */

function toggleWishlist(id){

  const idx = state.wishlist.indexOf(id);

  if (idx > -1){ state.wishlist.splice(idx, 1); toast("Removed from wishlist", "", "heart"); }

  else { state.wishlist.push(id); toast("Added to wishlist", "", "heart"); }

  $("#wishlistCount").textContent = state.wishlist.length;

  $("#wishlistCount").classList.remove("bump"); void $("#wishlistCount").offsetWidth; $("#wishlistCount").classList.add("bump");

  $$(`.pc-wishlist[data-id="${id}"]`).forEach(btn => {

    const active = state.wishlist.includes(id);

    btn.classList.toggle("active", active);

    btn.querySelector("path").setAttribute("fill", active ? "currentColor" : "none");

  });

}



function initWishlist(){

  document.body.addEventListener("click", (e) => {

    const btn = e.target.closest("[data-action='wishlist']");

    if (!btn) return;

    toggleWishlist(Number(btn.dataset.id));

  });

}



/* ============ 10. QUICK VIEW ============ */

function openQuickView(id){

  const p = byId(id);

  const av = availLabel(p.availability);

  $("#quickViewBody").innerHTML = `<div class="qv-grid">

    <div class="qv-media"><img src="${p.image.replace('480/380','700/700')}" alt="${p.name}"></div>

    <div class="qv-body">

      <span class="qv-cat">${catName(p.category)} · Aisle ${String(catAisle(p.category)).padStart(2,"0")}</span>

      <h2 class="qv-name">${p.name}</h2>

      <div class="qv-rating"><span class="stars">${starString(p.rating)}</span><span>${p.rating.toFixed(1)} · ${p.reviews} reviews</span></div>

      <div class="qv-price"><span class="now">${fmt(p.price)}</span>${p.oldPrice ? `<span class="old">${fmt(p.oldPrice)}</span>` : ""}</div>

      <span class="qv-avail ${av.cls}">${av.text}</span>

<p class="qv-desc">Sourced for Dawood Bakers shelves and quality-checked before dispatch. Doorstep delivery is available within Khanewal.</p>

      <div class="qv-actions">

        <button class="btn btn-primary ripple" data-action="add" data-id="${p.id}" ${p.availability === "out" ? "disabled" : ""}>Add to Cart</button>

        <button class="btn btn-outline ripple" data-action="wishlist" data-id="${p.id}">${state.wishlist.includes(p.id) ? "Wishlisted" : "Wishlist"}</button>

      </div>

    </div>

  </div>`;

  $("#quickViewBackdrop").classList.add("open");

  document.body.style.overflow = "hidden";

}



function closeQuickView(){

  $("#quickViewBackdrop").classList.remove("open");

  document.body.style.overflow = "";

}



function initQuickView(){

  document.body.addEventListener("click", (e) => {

    const btn = e.target.closest("[data-action='quickview']");

    if (btn) openQuickView(Number(btn.dataset.id));

  });

  $("#quickViewClose").addEventListener("click", closeQuickView);

  $("#quickViewBackdrop").addEventListener("click", (e) => { if (e.target === $("#quickViewBackdrop")) closeQuickView(); });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeQuickView(); });

}



/* ============ 11. TESTIMONIALS SLIDER ============ */

function initTestimonials(){

  $("#tPrev").addEventListener("click", () => { state.tIndex = (state.tIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length; updateTestimonialSlide(); restartAutoplay(); });

  $("#tNext").addEventListener("click", () => { state.tIndex = (state.tIndex + 1) % TESTIMONIALS.length; updateTestimonialSlide(); restartAutoplay(); });

  $("#testimonialDots").addEventListener("click", (e) => {

    const btn = e.target.closest("button");

    if (!btn) return;

    state.tIndex = Number(btn.dataset.i);

    updateTestimonialSlide();

    restartAutoplay();

  });

  restartAutoplay();

}

function restartAutoplay(){

  clearInterval(state.tTimer);

  state.tTimer = setInterval(() => { state.tIndex = (state.tIndex + 1) % TESTIMONIALS.length; updateTestimonialSlide(); }, 5500);

}



/* ============ 12. FAQ ============ */

function initFAQ(){

  $("#faqList").addEventListener("click", (e) => {

    const q = e.target.closest(".faq-q");

    if (!q) return;

    const item = q.closest(".faq-item");

    const a = item.querySelector(".faq-a");

    const wasOpen = item.classList.contains("open");

    $$(".faq-item", $("#faqList")).forEach(f => { f.classList.remove("open"); f.querySelector(".faq-a").style.maxHeight = null; });

    if (!wasOpen){ item.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; }

  });

}



/* ============ 13. FORMS ============ */

function initForms(){
  $("#contactForm").addEventListener("submit", (e) => {

    e.preventDefault();

    toast("Message sent", " — we'll reply within 24 hours");

    e.target.reset();

  });
}

const CUSTOMER_COMMENTS_KEY = "db_customer_comments_v1";

function getCustomerComments(){
  const comments = JSON.parse(localStorage.getItem(CUSTOMER_COMMENTS_KEY) || "[]");
  if (!Array.isArray(comments)) throw new Error("Saved comments are invalid.");
  return comments.filter(comment =>
    comment && typeof comment.name === "string" && typeof comment.text === "string"
  );
}

function renderCustomerComments(){
  const list = $("#commentList");
  try {
    const comments = getCustomerComments();
    list.innerHTML = comments.length
      ? comments.map(comment => {
        const date = new Date(comment.createdAt);
        const dateText = Number.isFinite(date.getTime()) ? date.toLocaleString() : "Date unavailable";
        return `<article class="comment-card">
          <h3>${escapeHtml(comment.name)}</h3>
          <time>${escapeHtml(dateText)}</time>
          <p>${escapeHtml(comment.text)}</p>
        </article>`;
      }).join("")
      : `<p class="comments-empty">No comments yet. Be the first to share your thoughts.</p>`;
  } catch (error) {
    console.error("Could not load customer comments", error);
    list.innerHTML = `<p class="comments-empty">Comments could not be loaded. Please refresh the page.</p>`;
  }
}

function initComments(){
  const form = $("#commentForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const name = $("#commentName").value.trim();
    const text = $("#commentText").value.trim();
    if (!name || !text) return;

    try {
      const comments = getCustomerComments();
      comments.unshift({ name, text, createdAt: new Date().toISOString() });
      localStorage.setItem(CUSTOMER_COMMENTS_KEY, JSON.stringify(comments));
      form.reset();
      $("#commentStatus").textContent = "Thanks! Your comment was saved in this browser.";
      renderCustomerComments();
    } catch (error) {
      console.error("Could not save customer comment", error);
      $("#commentStatus").textContent = "Your comment could not be saved. Please try again.";
    }
  });
  renderCustomerComments();
}


/* ============ 14. THEME & MOBILE MENU ============ */

function initTheme(){

  $("#darkModeToggle").addEventListener("click", () => {

    const html = document.documentElement;

    const isDark = html.getAttribute("data-theme") === "dark";

    html.setAttribute("data-theme", isDark ? "light" : "dark");

    document.body.setAttribute("data-theme", isDark ? "light" : "dark");

  });

}



function closeMobileMenu(){

  $("#mobileMenu").classList.remove("open");

  $("#mobileMenuBackdrop").classList.remove("open");

}

function initMobileMenu(){

  $("#mobileMenuBtn").addEventListener("click", () => {

    $("#mobileMenu").classList.add("open");

    $("#mobileMenuBackdrop").classList.add("open");

  });

  $("#mobileMenuBackdrop").addEventListener("click", closeMobileMenu);

}



/* ============ 15. SCROLL FX ============ */

function initScrollFX(){

  const nav = $("#navbar");

  const backTop = $("#backToTop");

  window.addEventListener("scroll", () => {

    const y = window.scrollY;

    nav.classList.toggle("scrolled", y > 10);

    backTop.classList.toggle("visible", y > 500);

  });

  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

}



/* ============ 16. COUNTERS ============ */

function initCounters(){

  const counters = $$(".stat-num");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting && !entry.target.dataset.done){

        entry.target.dataset.done = "1";

        const target = Number(entry.target.dataset.count);

        const duration = 1400;

        const start = performance.now();

        function tick(now){

          const progress = Math.min(1, (now - start) / duration);

          const eased = 1 - Math.pow(1 - progress, 3);

          entry.target.textContent = Math.round(target * eased).toLocaleString("en-PK");

          if (progress < 1) requestAnimationFrame(tick);

        }

        requestAnimationFrame(tick);

      }

    });

  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));

}



/* ============ 17. INIT ============ */

function init(){

  $("#year").textContent = new Date().getFullYear();



  renderCategories();

  renderHomeSections();

  renderTicker();

  renderTestimonials();

  renderFAQ();

  applyFilters(true);



  initNavLinks();

  initSearch();

  initFilters();

  initCart();

  initWishlist();

  initQuickView();

  initTestimonials();

  initFAQ();

  initForms();

initComments();

  initTheme();

  initMobileMenu();

  initScrollFX();

  initCounters();

  attachRipple();



  window.addEventListener("load", () => {

    setTimeout(() => $("#preloader").classList.add("hidden"), 400);

  });

  // Fallback in case load already fired

  if (document.readyState === "complete") setTimeout(() => $("#preloader").classList.add("hidden"), 400);

}





/* ============ ADMIN + POS ============ */
// IMPORTANT: This client-side PIN is a demo gate, not production authentication.
// For a public deployment, protect admin operations with server-side auth + database rules.
const ADMIN_PIN = "dawood300300";
const CUSTOMER_ORDERS_KEY = "db_customer_orders_v1";
let posCart = [];
let posSales = loadPosSales();
let posCheckoutId = null;
let checkoutInProgress = false;
let printerConnected = false;
let printerBusy = false;
const money = (n) => fmt(Number(n) || 0);

function loadCustomerOrders(){
  try {
    const savedOrders = JSON.parse(localStorage.getItem(CUSTOMER_ORDERS_KEY) || "[]");
    if (!Array.isArray(savedOrders)) throw new Error("Saved customer orders are invalid.");
    return savedOrders.filter(order => order && typeof order === "object");
  } catch (error) {
    console.warn("Could not load customer orders", error);
    return [];
  }
}

function saveCustomerOrder(order){
  const savedOrders = JSON.parse(localStorage.getItem(CUSTOMER_ORDERS_KEY) || "[]");
  if (!Array.isArray(savedOrders)) throw new Error("Saved customer orders are invalid.");
  localStorage.setItem(CUSTOMER_ORDERS_KEY, JSON.stringify([order, ...savedOrders]));
}

function renderCustomerOrders(){
  const orders = loadCustomerOrders();
  $("#adminOrdersTab").textContent = `Orders${orders.length ? ` (${orders.length})` : ""}`;
  $("#adminCustomerOrders").innerHTML = orders.map(order => {
    const createdAt = new Date(order.createdAt);
    const dateText = Number.isFinite(createdAt.getTime()) ? createdAt.toLocaleString() : "Date unavailable";
    const customer = order.customer || {};
    const items = Array.isArray(order.items) ? order.items.filter(item => item && typeof item === "object") : [];
    const isComplete = order.status === "completed";
    return `<article class="db-customer-order">
      <header><div><strong>${escapeHtml(order.number || "Order")}</strong><small>${escapeHtml(dateText)}</small></div><span class="db-order-status${isComplete ? " complete" : ""}">${isComplete ? "Completed" : "New"}</span></header>
      <p><strong>Customer:</strong> ${escapeHtml(customer.name)}<br><strong>Phone:</strong> ${escapeHtml(customer.phone)}<br><strong>Address:</strong> ${escapeHtml(customer.address)}</p>
      <ul>${items.map(item => `<li><span>${Number(item.quantity) || 0} × ${escapeHtml(item.name)}</span><strong>${money(item.total)}</strong></li>`).join("")}</ul>
      <div class="db-order-totals"><span>Subtotal ${money(order.subtotal)}</span><span>Delivery ${money(order.delivery)}</span><span>Discount - ${money(order.discount)}</span><strong>Total ${money(order.total)}</strong></div>
      ${isComplete ? "" : `<button type="button" class="btn btn-outline btn-sm" data-order-complete="${escapeHtml(order.id)}">Mark complete</button>`}
    </article>`;
  }).join("") || `<p class="db-empty">No customer orders yet.</p>`;
}

function completeCustomerOrder(orderId){
  try {
    const savedOrders = JSON.parse(localStorage.getItem(CUSTOMER_ORDERS_KEY) || "[]");
    if (!Array.isArray(savedOrders)) throw new Error("Saved customer orders are invalid.");
    const orderExists = savedOrders.some(order => order && String(order.id) === orderId);
    if (!orderExists) return;
    const updatedOrders = savedOrders.map(order => order && String(order.id) === orderId
      ? { ...order, status: "completed", completedAt: new Date().toISOString() }
      : order);
    localStorage.setItem(CUSTOMER_ORDERS_KEY, JSON.stringify(updatedOrders));
    renderCustomerOrders();
  } catch (error) {
    console.error("Could not update customer order", error);
    alert(`Could not update order status: ${error.message || "Could not save the change."}`);
  }
}

function loadPosSales(){
  try {
    const savedSales = JSON.parse(localStorage.getItem("db_pos_sales_v1") || "[]");
    return Array.isArray(savedSales) ? savedSales.filter(sale => sale && typeof sale === "object") : [];
  } catch (error) {
    console.warn("Could not load saved sales", error);
    return [];
  }
}

function saveProducts(products){
  try {
    localStorage.setItem("db_products_v1", JSON.stringify(products));
    return true;
  } catch (error) {
    console.error("Could not save products", error);
    alert("Could not save products in this browser. Check available storage.");
    return false;
  }
}

function refreshStoreAfterProductChange(){
  renderCategories(); renderHomeSections(); applyFilters(true);
  if (state.currentPage === "admin") renderAdminProducts();
  renderPosProducts();
}

function escapeHtml(value){
  return String(value == null ? "" : value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;",
  })[char]);
}

function resetAdminForm(){
  $("#adminProductForm").reset(); $("#adminProductId").value = "";
  $("#adminProductDiscount").value = 0; $("#productEditorTitle").textContent = "Add a product";
  $("#adminSaveProduct").textContent = "Save product";
}

function renderAdminProducts(){
  const q = (($('#adminProductSearch') || {}).value || "").trim().toLowerCase();
  const list = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || catName(p.category).toLowerCase().includes(q));
  $("#adminStats").innerHTML = `<div><strong>${PRODUCTS.length}</strong><span>Total products</span></div><div><strong>${PRODUCTS.filter(p=>p.availability==='in').length}</strong><span>In stock</span></div><div><strong>${PRODUCTS.filter(p=>p.availability==='out').length}</strong><span>Out of stock</span></div>`;
  $("#adminProductRows").innerHTML = list.map(p => `<tr><td><div class="db-product-cell"><img src="${p.image || ''}" alt=""><strong>${p.name}</strong></div></td><td>${catName(p.category)}</td><td>${money(p.price)}</td><td><span class="db-status ${p.availability}">${p.availability==='in'?'In Stock':p.availability==='low'?'Low Stock':'Out of Stock'}</span></td><td><div class="db-actions"><button type="button" class="btn btn-outline btn-sm" data-admin-edit="${p.id}">Edit</button><button type="button" class="btn btn-danger btn-sm" data-admin-delete="${p.id}">Delete</button></div></td></tr>`).join("") || `<tr><td colspan="5" class="db-empty">No products found.</td></tr>`;
}

function fillAdminEditor(id){
  const p = PRODUCTS.find(x => x.id === Number(id)); if (!p) return;
  $("#adminProductId").value = p.id; $("#adminProductName").value = p.name;
  $("#adminProductCategory").value = p.category; $("#adminProductPrice").value = p.oldPrice || p.price;
  $("#adminProductDiscount").value = p.discount || 0; $("#adminProductAvailability").value = p.availability;
  $("#adminProductImage").value = p.image || ""; $("#productEditorTitle").textContent = "Edit product: " + p.name;
  $("#adminSaveProduct").textContent = "Update product"; $("#adminProductName").focus();
}

function saveAdminProduct(event){
  event.preventDefault();
  const id = Number($("#adminProductId").value);
  const name = $("#adminProductName").value.trim();
  const category = $("#adminProductCategory").value;
  const base = Number($("#adminProductPrice").value);
  const discount = Math.min(90, Math.max(0, Number($("#adminProductDiscount").value) || 0));
  const price = Math.round((base * (1 - discount / 100)) / 5) * 5;
  const image = $("#adminProductImage").value.trim();
  const availability = $("#adminProductAvailability").value;
  if (!name || !Number.isFinite(base) || base < 0) return;

  let updatedProducts;
  if (id) {
    const existing = PRODUCTS.find(product => product.id === id);
    if (!existing) { alert("That product no longer exists. Refresh the product list and try again."); return; }
    updatedProducts = PRODUCTS.map(product => product.id === id
      ? {...product, name, category, price, oldPrice:discount ? base : null, discount, availability, image:image || product.image}
      : product);
  } else {
    const newId = Math.max(0, ...PRODUCTS.map(product => Number(product.id) || 0)) + 1;
    updatedProducts = [...PRODUCTS, {
      id:newId, name, category, price, oldPrice:discount ? base : null, discount,
      rating:5, reviews:0, availability, badge:discount ? "discount" : null,
      image:image || "https://placehold.co/480x380?text=Product",
    }];
  }

  if (!saveProducts(updatedProducts)) return;
  PRODUCTS = updatedProducts;
  resetAdminForm();
  refreshStoreAfterProductChange();
}

function renderPosProducts(){
  const q = (($('#posSearch') || {}).value || "").trim().toLowerCase();
  const list = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || catName(p.category).toLowerCase().includes(q));
  $("#posProductGrid").innerHTML = list.map(p => `<button type="button" class="db-pos-product" data-pos-add="${p.id}" ${p.availability==='out'?'disabled':''}><img src="${p.image || ''}" alt=""><span>${p.name}</span><strong>${money(p.price)}</strong><small>${p.availability==='out'?'Out of stock':p.availability==='low'?'Low stock':'Tap to add'}</small></button>`).join("") || `<p class="db-empty">No matching products.</p>`;
}

function renderPosCart(){
  const qty = posCart.reduce((s,x)=>s+x.qty,0); const total = posCart.reduce((s,x)=>s+x.price*x.qty,0);
  $("#posItemCount").textContent = `${qty} item${qty===1?'':'s'}`; $("#posTotal").textContent = money(total);
  $("#posCartRows").innerHTML = posCart.length ? posCart.map(x=>`<div class="db-pos-cart-row"><div><strong>${x.name}</strong><small>${money(x.price)} each</small></div><div class="db-qty"><button type="button" data-pos-minus="${x.id}" aria-label="Decrease">−</button><span>${x.qty}</span><button type="button" data-pos-plus="${x.id}" aria-label="Increase">+</button></div><strong>${money(x.price*x.qty)}</strong><button type="button" class="db-remove" data-pos-remove="${x.id}" aria-label="Remove">×</button></div>`).join("") : `<p class="db-empty">No items yet. Tap a product to start a bill.</p>`;
  const cash = Number($("#posCashReceived").value || 0); $("#posChange").textContent = $("#posPayment").value === "Cash" && cash >= total && total > 0 ? `Change: ${money(cash-total)}` : "";
}

function getSaleAmounts(sale){
  const items = Array.isArray(sale.items) ? sale.items : [];
  const subtotal = sale.subtotal != null && Number.isFinite(Number(sale.subtotal))
    ? Number(sale.subtotal)
    : items.reduce((sum, item) => sum + Number(item.listPrice || item.price || 0) * Number(item.qty || 0), 0);
  const total = sale.grandTotal != null && Number.isFinite(Number(sale.grandTotal))
    ? Number(sale.grandTotal)
    : Number(sale.total) || items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0), 0);
  const discount = sale.discount != null && Number.isFinite(Number(sale.discount))
    ? Number(sale.discount)
    : Math.max(0, subtotal - total);
  return {subtotal, discount, total};
}

function localDateKey(value){
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "";
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
}

function renderSales(){
  const today = localDateKey(new Date());
  const allTimeTotal = posSales.reduce((sum, sale) => sum + getSaleAmounts(sale).total, 0);
  const dailyTotal = posSales.reduce((sum, sale) => sum + (localDateKey(sale.date) === today ? getSaleAmounts(sale).total : 0), 0);
  $("#posSalesTotal").textContent = money(allTimeTotal);
  $("#posDailyTotal").textContent = money(dailyTotal);
  $("#posSalesHistory").innerHTML = posSales.slice(0,12).map(sale => {
    const receiptKey = String(sale.id || sale.number || "");
    const amounts = getSaleAmounts(sale);
    const date = new Date(sale.date);
    const dateText = Number.isFinite(date.getTime()) ? date.toLocaleString() : "Date unavailable";
    return `<div class="db-sale-row"><div><strong>${escapeHtml(sale.number || "Sale")}</strong><small>${escapeHtml(dateText)}</small></div><span>${escapeHtml(sale.payment || "Payment not recorded")}</span><strong>${money(amounts.total)}</strong><button type="button" class="btn btn-outline btn-sm" data-pos-reprint="${escapeHtml(receiptKey)}">Reprint receipt</button></div>`;
  }).join("") || `<p class="db-empty">No sales recorded yet.</p>`;
}

function renderReceipt(sale){
  const amounts = getSaleAmounts(sale);
  const items = Array.isArray(sale.items) ? sale.items : [];
  const receipt = $("#posReceipt");
  receipt.innerHTML = `
    <header class="db-receipt-head"><h2>DAWOOD BAKERS</h2><p>SALES RECEIPT</p></header>
    <div class="db-receipt-meta"><div><span>Receipt</span><strong>${escapeHtml(sale.number || "Sale")}</strong></div><div><span>Date</span><strong>${escapeHtml(new Date(sale.date).toLocaleString())}</strong></div></div>
    <div class="db-receipt-items">${items.map(item => {
      const qty = Number(item.qty) || 0;
      const unitPrice = Number(item.price) || 0;
      return `<div class="db-receipt-item"><strong>${escapeHtml(item.name)}</strong><div><span>${qty} × ${money(unitPrice)}</span><strong>${money(qty * unitPrice)}</strong></div></div>`;
    }).join("")}</div>
    <div class="db-receipt-totals"><div><span>Subtotal</span><strong>${money(amounts.subtotal)}</strong></div><div><span>Discount</span><strong>- ${money(amounts.discount)}</strong></div><div class="db-receipt-grand"><span>Grand total</span><strong>${money(amounts.total)}</strong></div></div>
    <div class="db-receipt-payment"><span>Payment method</span><strong>${escapeHtml(sale.payment || "Not recorded")}</strong></div>
    <p class="db-receipt-thanks">Thank you for shopping with us!</p>`;
  receipt.hidden = false;
}

function receiptText(sale){
  const width = 32;
  const amounts = getSaleAmounts(sale);
  const safeText = value => String(value == null ? "" : value)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "?");
  const wrap = value => {
    const words = safeText(value).split(/\s+/);
    const lines = [];
    let line = "";
    words.forEach(word => {
      while (word.length > width) {
        if (line) { lines.push(line); line = ""; }
        lines.push(word.slice(0, width));
        word = word.slice(width);
      }
      if (!word) return;
      if (line && `${line} ${word}`.length > width) { lines.push(line); line = word; }
      else line = line ? `${line} ${word}` : word;
    });
    if (line) lines.push(line);
    return lines;
  };
  const pair = (left, right) => {
    const r = safeText(right).slice(-width);
    return `${safeText(left).slice(0, Math.max(0, width-r.length-1))} ${r}`.trimEnd();
  };
  const lines = [
    "\x1B@", "\x1Ba\x01", "\x1BE\x01", "DAWOOD BAKERS", "\x1BE\x00",
    "SALES RECEIPT", "",
    ...wrap(`Receipt: ${sale.number || "Sale"}`),
    ...wrap(new Date(sale.date).toLocaleString()),
    "-".repeat(width), "\x1Ba\x00",
  ];
  (Array.isArray(sale.items) ? sale.items : []).forEach(item => {
    lines.push(...wrap(item.name));
    const qty = Number(item.qty) || 0;
    const price = Number(item.price) || 0;
    lines.push(pair(`${qty} x ${money(price)}`, money(qty * price)));
  });
  lines.push(
    "-".repeat(width),
    pair("Subtotal", money(amounts.subtotal)),
    pair("Discount", `- ${money(amounts.discount)}`),
    "\x1BE\x01",
    pair("GRAND TOTAL", money(amounts.total)),
    "\x1BE\x00",
    ...wrap(`Payment: ${sale.payment || "Not recorded"}`),
    "", "Thank you!", "", "", "",
  );
  return new TextEncoder().encode(lines.join("\n"));
}

function bytesToBase64(bytes){
  let binary = "";
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function setPrinterStatus(message, connected = false, error = false){
  printerConnected = connected;
  const status = $("#posPrinterStatus");
  status.textContent = message;
  status.dataset.state = error ? "error" : connected ? "connected" : "disconnected";
  $("#posPrinterConnect").disabled = printerBusy;
  $("#posPrinterTest").disabled = printerBusy || !connected;
}

function getPrinterBridge(){
  return window.DawoodPrinter || null;
}

async function connectPrinter(){
  if (printerBusy) return;
  const bridge = getPrinterBridge();
  if (!bridge || typeof bridge.connect !== "function" || typeof bridge.printEscPos !== "function") {
    setPrinterStatus("Android print bridge unavailable. Open POS in the Dawood Bakers companion app to connect a Bluetooth ESC/POS printer.", false, true);
    return;
  }
  printerBusy = true;
  setPrinterStatus("Connecting to printer…");
  try {
    const result = await bridge.connect();
    if (!result || result.connected !== true) throw new Error("The companion app did not confirm a printer connection.");
    const printerName = result.deviceName ? ` — ${result.deviceName}` : "";
    setPrinterStatus(`Connected${printerName}`, true);
    toast("Printer connected", printerName || " — ready to print");
  } catch (error) {
    setPrinterStatus(`Connection failed: ${error.message || "Unknown printer error"}`, false, true);
    toast("Printer connection failed", error.message || "Check the printer and try again.");
  } finally {
    printerBusy = false;
    $("#posPrinterConnect").disabled = false;
    $("#posPrinterTest").disabled = !printerConnected;
  }
}

async function sendToPrinter(sale){
  const bridge = getPrinterBridge();
  if (!printerConnected || !bridge || typeof bridge.printEscPos !== "function") {
    throw new Error("No connected Android printer bridge is available.");
  }
  const result = await bridge.printEscPos(bytesToBase64(receiptText(sale)));
  if (result !== true && (!result || result.success !== true)) {
    throw new Error((result && result.error) || "The companion app did not confirm that the receipt was printed.");
  }
}

async function testPrint(){
  if (printerBusy || !printerConnected) return;
  const testSale = {
    number:"TEST", date:new Date().toISOString(), payment:"Test",
    subtotal:100, discount:0, total:100,
    items:[{name:"Printer test", qty:1, price:100, listPrice:100}],
  };
  printerBusy = true;
  try {
    await sendToPrinter(testSale);
    setPrinterStatus("Test receipt sent to printer.", true);
    toast("Test print sent", " — check the printer output");
  } catch (error) {
    setPrinterStatus(`Test print failed: ${error.message || "Unknown printer error"}`, false, true);
    toast("Test print failed", error.message || "Check the printer and try again.");
  } finally {
    printerBusy = false;
    $("#posPrinterConnect").disabled = false;
    $("#posPrinterTest").disabled = !printerConnected;
  }
}

async function printSale(sale){
  renderReceipt(sale);
  if (printerConnected) {
    if (printerBusy) return;
    printerBusy = true;
    try {
      await sendToPrinter(sale);
      setPrinterStatus("Receipt sent to printer.", true);
      toast("Receipt printed", " — sale receipt sent");
    } catch (error) {
      setPrinterStatus(`Printing failed: ${error.message || "Unknown printer error"}`, false, true);
      toast("Printing failed", error.message || "Use Android print service or reconnect the printer.");
    } finally {
      printerBusy = false;
      $("#posPrinterConnect").disabled = false;
      $("#posPrinterTest").disabled = !printerConnected;
    }
    return;
  }
  try { window.print(); }
  catch (error) { toast("Browser print failed", error.message || "Use Android's print service."); }
}

function makeCheckoutId(){
  if (window.crypto && typeof window.crypto.randomUUID === "function") return window.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function makeReceiptNumber(){
  const date = new Date();
  const datePart = `${date.getFullYear()}${String(date.getMonth()+1).padStart(2,"0")}${String(date.getDate()).padStart(2,"0")}`;
  let number;
  do {
    number = `DB-${datePart}-${Math.random().toString(36).slice(2,7).toUpperCase()}`;
  } while (posSales.some(sale => sale.number === number));
  return number;
}

async function saveSaleOnce(sale){
  const writeSale = () => {
    const savedSales = JSON.parse(localStorage.getItem("db_pos_sales_v1") || "[]");
    if (!Array.isArray(savedSales)) throw new Error("Saved sales data is invalid. Export or clear it before continuing.");
    if (savedSales.some(existing => existing.id === sale.id || existing.checkoutId === sale.checkoutId)) return false;
    localStorage.setItem("db_pos_sales_v1", JSON.stringify([sale, ...savedSales]));
    posSales = [sale, ...savedSales];
    return true;
  };
  const locks = navigator && navigator.locks;
  if (locks && typeof locks.request === "function") return locks.request("dawood-pos-sales", writeSale);
  return writeSale();
}

async function completePosSale(){
  if (checkoutInProgress) return;
  if (!posCart.length) { alert("Add at least one product first."); return; }
  const total = posCart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const payment = $("#posPayment").value;
  const received = Number($("#posCashReceived").value || 0);
  if (payment === "Cash" && received < total && $("#posCashReceived").value !== "") {
    alert("Cash received is less than the bill total.");
    return;
  }

  checkoutInProgress = true;
  $("#posCompleteSale").disabled = true;
  try {
    const checkoutId = posCheckoutId || makeCheckoutId();
    const sale = {
      id:checkoutId,
      checkoutId,
      number:makeReceiptNumber(),
      date:new Date().toISOString(),
      subtotal:posCart.reduce((sum, item) => sum + item.listPrice * item.qty, 0),
      discount:posCart.reduce((sum, item) => sum + Math.max(0, item.listPrice-item.price) * item.qty, 0),
      total,
      grandTotal:total,
      payment,
      items:posCart.map(item => ({...item})),
    };
    const saved = await saveSaleOnce(sale);
    if (!saved) throw new Error("This checkout was already saved. It was not recorded again.");

    renderSales();
    posCart = [];
    posCheckoutId = null;
    $("#posCashReceived").value = "";
    renderPosCart();
    renderReceipt(sale);
    toast("Sale saved", ` — receipt ${sale.number}`);
    if (confirm("Sale saved. Print receipt now?")) await printSale(sale);
  } catch (error) {
    console.error("Could not complete POS sale", error);
    alert(`Sale was not completed: ${error.message || "Could not save the sale."}`);
  } finally {
    checkoutInProgress = false;
    $("#posCompleteSale").disabled = false;
  }
}

function deleteAdminProduct(id){
  if (!confirm("Delete this product from the store?")) return;
  const updatedProducts = PRODUCTS.filter(product => product.id !== Number(id));
  if (!saveProducts(updatedProducts)) return;
  PRODUCTS = updatedProducts;
  resetAdminForm();
  refreshStoreAfterProductChange();
}

function initSharedStorageSync(){
  window.addEventListener("storage", event => {
    if (event.key === "db_products_v1") {
      try {
        const updatedProducts = event.newValue === null ? [] : JSON.parse(event.newValue);
        if (!Array.isArray(updatedProducts)) throw new Error("Saved product data is invalid.");
        PRODUCTS = updatedProducts;
        refreshStoreAfterProductChange();
        if (state.currentPage === "admin") renderAdminProducts();
      } catch (error) {
        console.error("Could not sync products from another tab", error);
        toast("Product sync failed", error.message || "Reload the page to try again.");
      }
    }
    if (event.key === "db_pos_sales_v1") {
      try {
        const updatedSales = event.newValue === null ? [] : JSON.parse(event.newValue);
        if (!Array.isArray(updatedSales)) throw new Error("Saved sales data is invalid.");
        posSales = updatedSales.filter(sale => sale && typeof sale === "object");
        renderSales();
      } catch (error) {
        console.error("Could not sync sales from another tab", error);
        toast("Sales sync failed", error.message || "Reload the page to try again.");
      }
    }
    if (event.key === CUSTOMER_ORDERS_KEY) {
      try {
        if (event.newValue !== null && !Array.isArray(JSON.parse(event.newValue))) {
          throw new Error("Saved customer orders are invalid.");
        }
        renderCustomerOrders();
      } catch (error) {
        console.error("Could not sync customer orders from another tab", error);
        toast("Order sync failed", error.message || "Reload the page to try again.");
      }
    }
  });
}

async function refreshPrinterStatus(){
  const bridge = getPrinterBridge();
  if (!bridge || typeof bridge.getStatus !== "function") {
    setPrinterStatus("Not connected. Android Bluetooth printing requires the Dawood Bakers companion app.");
    return;
  }
  try {
    const status = await bridge.getStatus();
    if (status && status.connected === true) {
      const printerName = status.deviceName ? ` — ${status.deviceName}` : "";
      setPrinterStatus(`Connected${printerName}`, true);
    } else {
      setPrinterStatus("Not connected. Use Connect printer to choose a paired printer.");
    }
  } catch (error) {
    setPrinterStatus(`Printer status unavailable: ${error.message || "Unknown printer error"}`, false, true);
  }
}

function activateAdminTab(tabName){
  const isProducts = tabName === "products";
  const isPos = tabName === "pos";
  const isOrders = tabName === "orders";
  $("#adminProductsTabPanel").hidden = !isProducts;
  $("#adminPosTabPanel").hidden = !isPos;
  $("#adminOrdersTabPanel").hidden = !isOrders;
  $$(".db-admin-tab").forEach(tab => {
    const active = tab.dataset.adminTab === tabName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  if (isPos) {
    renderPosProducts();
    renderSales();
  }
  if (isOrders) renderCustomerOrders();
}

function initAdminPos(){
  const catSelect = $("#adminProductCategory"); catSelect.innerHTML = CATEGORIES.map(c=>`<option value="${c.key}">${c.name}</option>`).join("");
  $("#adminLoginForm").addEventListener("submit",e=>{e.preventDefault(); if($("#adminPin").value===ADMIN_PIN){$("#adminLoginCard").hidden=true;$("#adminDashboard").hidden=false;$("#adminPin").value="";activateAdminTab("products");renderAdminProducts();}else alert("Incorrect admin PIN.");});
  $("#adminLockBtn").addEventListener("click",()=>{$("#adminDashboard").hidden=true;$("#adminLoginCard").hidden=false;activateAdminTab("products");resetAdminForm();});
  $$(".db-admin-tab").forEach(tab=>tab.addEventListener("click",()=>activateAdminTab(tab.dataset.adminTab)));
  $("#adminProductForm").addEventListener("submit", saveAdminProduct);
  $("#adminCancelEdit").addEventListener("click",resetAdminForm); $("#adminProductSearch").addEventListener("input",renderAdminProducts);
  $("#adminProductRows").addEventListener("click",e=>{const edit=e.target.closest("[data-admin-edit]");const del=e.target.closest("[data-admin-delete]");if(edit)fillAdminEditor(edit.dataset.adminEdit);if(del)deleteAdminProduct(del.dataset.adminDelete);});
  $("#posSearch").addEventListener("input",renderPosProducts);
  $("#posProductGrid").addEventListener("click",e=>{
    const button=e.target.closest("[data-pos-add]");
    if(!button)return;
    const product=PRODUCTS.find(item=>item.id===Number(button.dataset.posAdd));
    if(!product||product.availability==="out")return;
    const row=posCart.find(item=>item.id===product.id);
    if(row)row.qty++;
    else posCart.push({id:product.id,name:product.name,price:Number(product.price)||0,listPrice:Number(product.oldPrice)||Number(product.price)||0,qty:1});
    if(!posCheckoutId)posCheckoutId=makeCheckoutId();
    renderPosCart();
  });
  $("#posCartRows").addEventListener("click",e=>{
    const plus=e.target.closest("[data-pos-plus]");
    const minus=e.target.closest("[data-pos-minus]");
    const remove=e.target.closest("[data-pos-remove]");
    if(!plus&&!minus&&!remove)return;
    const id=Number((plus||minus||remove).dataset[(plus?"posPlus":minus?"posMinus":"posRemove")]);
    const row=posCart.find(item=>item.id===id);
    if(!row)return;
    if(plus)row.qty++;
    if(minus)row.qty--;
    if(remove||row.qty<=0)posCart=posCart.filter(item=>item.id!==id);
    if(!posCart.length)posCheckoutId=null;
    renderPosCart();
  });
  $("#posClearCart").addEventListener("click",()=>{posCart=[];posCheckoutId=null;renderPosCart();});
  $("#posCashReceived").addEventListener("input",renderPosCart);
  $("#posPayment").addEventListener("change",renderPosCart);
  $("#posCompleteSale").addEventListener("click",completePosSale);
  $("#posSalesHistory").addEventListener("click",event=>{
    const button=event.target.closest("[data-pos-reprint]");
    if(!button)return;
    const sale=posSales.find(item=>String(item.id||item.number||"")===button.dataset.posReprint);
    if(sale)printSale(sale);
  });
  $("#posPrinterConnect").addEventListener("click",connectPrinter);
  $("#posPrinterTest").addEventListener("click",testPrint);
  $("#refreshCustomerOrders").addEventListener("click",renderCustomerOrders);
  $("#adminCustomerOrders").addEventListener("click",event=>{
    const button=event.target.closest("[data-order-complete]");
    if(button)completeCustomerOrder(button.dataset.orderComplete);
  });
  initSharedStorageSync();
  refreshPrinterStatus();
  renderPosProducts();renderPosCart();renderSales();
}


document.addEventListener("DOMContentLoaded", () => { init(); initAdminPos(); });