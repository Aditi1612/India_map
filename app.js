const regionPalette = {
  north: { name: "North", color: "#2f7aa1" },
  west: { name: "West", color: "#f49a32" },
  central: { name: "Central", color: "#c85f54" },
  east: { name: "East", color: "#caa539" },
  south: { name: "South", color: "#17956d" },
  northeast: { name: "North-East", color: "#7257a2" },
  islands: { name: "Islands", color: "#1491a5" },
  union: { name: "Union Territories", color: "#5d6b79" },
};

const locations = [
  {
    id: "jammu-kashmir",
    name: "Jammu and Kashmir",
    code: "JK",
    type: "Union Territory",
    region: "north",
    capital: "Srinagar (summer), Jammu (winter)",
    majorCity: "Srinagar",
    languages: "Kashmiri, Dogri, Urdu, English",
    formed: "2019",
    neighbors: "Ladakh, Himachal Pradesh, Punjab and international borders",
    famousFor: "Kashmir Valley landscapes, handicrafts, orchards and mountain tourism",
    highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Kashmiri crafts"],
    overview:
      "Jammu and Kashmir blends alpine valleys, pilgrimage routes, traditional crafts and a layered cultural history across the Himalayan north.",
    x: 280,
    y: 105,
    size: 40,
  },
  {
    id: "ladakh",
    name: "Ladakh",
    code: "LA",
    type: "Union Territory",
    region: "north",
    capital: "Leh",
    majorCity: "Leh",
    languages: "Ladakhi, Hindi, English",
    formed: "2019",
    neighbors: "Jammu and Kashmir, Himachal Pradesh and international borders",
    famousFor: "High-altitude deserts, monasteries, trekking circuits and dramatic cold desert scenery",
    highlights: ["Pangong Lake", "Nubra Valley", "Leh Palace", "Buddhist monasteries"],
    overview:
      "Ladakh is India's high-altitude desert region, known for stark Himalayan landscapes, Buddhist monastic culture and adventure travel.",
    x: 390,
    y: 80,
    size: 42,
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    code: "HP",
    type: "State",
    region: "north",
    capital: "Shimla",
    majorCity: "Shimla",
    languages: "Hindi, Pahari varieties",
    formed: "1971",
    neighbors: "Jammu and Kashmir, Ladakh, Punjab, Haryana and Uttarakhand",
    famousFor: "Hill stations, apple orchards, hydropower and mountain tourism",
    highlights: ["Shimla", "Manali", "Spiti Valley", "Kullu"],
    overview:
      "Himachal Pradesh is a mountain state with strong tourism, orchard farming and some of the most popular hill destinations in India.",
    x: 265,
    y: 180,
    size: 36,
  },
  {
    id: "punjab",
    name: "Punjab",
    code: "PB",
    type: "State",
    region: "north",
    capital: "Chandigarh",
    majorCity: "Ludhiana",
    languages: "Punjabi",
    formed: "1966 (current form)",
    neighbors: "Jammu and Kashmir, Himachal Pradesh, Haryana, Rajasthan and Pakistan",
    famousFor: "Agriculture, Sikh heritage, manufacturing and energetic food culture",
    highlights: ["Amritsar", "Golden Temple", "Ludhiana", "Wagah border"],
    overview:
      "Punjab is one of India's most productive farming regions and a major cultural center of Sikh history, music and cuisine.",
    x: 215,
    y: 190,
    size: 34,
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    code: "CH",
    type: "Union Territory",
    region: "union",
    capital: "Chandigarh",
    majorCity: "Chandigarh",
    languages: "Hindi, Punjabi, English",
    formed: "1966",
    neighbors: "Punjab and Haryana",
    famousFor: "Modernist planning, government institutions and clean urban design",
    highlights: ["Capitol Complex", "Rock Garden", "Sukhna Lake", "Sector planning"],
    overview:
      "Chandigarh is a planned city that serves as the shared capital of Punjab and Haryana and is known for modern architecture.",
    x: 250,
    y: 220,
    size: 22,
  },
  {
    id: "haryana",
    name: "Haryana",
    code: "HR",
    type: "State",
    region: "north",
    capital: "Chandigarh",
    majorCity: "Faridabad",
    languages: "Hindi, Haryanvi",
    formed: "1966",
    neighbors: "Punjab, Himachal Pradesh, Uttarakhand, Uttar Pradesh, Rajasthan and Delhi",
    famousFor: "Automobile manufacturing, dairy, sports talent and fast-growing urban corridors",
    highlights: ["Gurugram", "Kurukshetra", "Faridabad", "Panipat"],
    overview:
      "Haryana mixes agriculture with industry and services, especially around the National Capital Region and major manufacturing belts.",
    x: 225,
    y: 245,
    size: 30,
  },
  {
    id: "delhi",
    name: "Delhi",
    code: "DL",
    type: "Union Territory",
    region: "union",
    capital: "New Delhi",
    majorCity: "Delhi",
    languages: "Hindi, English, Punjabi, Urdu",
    formed: "1991 (NCT status)",
    neighbors: "Haryana and Uttar Pradesh",
    famousFor: "National government, heritage monuments, business districts and food culture",
    highlights: ["Red Fort", "India Gate", "Old Delhi", "Parliament district"],
    overview:
      "Delhi is India's national capital territory and one of the country's biggest political, cultural and economic hubs.",
    x: 270,
    y: 255,
    size: 22,
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    code: "UK",
    type: "State",
    region: "north",
    capital: "Dehradun",
    majorCity: "Dehradun",
    languages: "Hindi, Garhwali, Kumaoni",
    formed: "2000",
    neighbors: "Himachal Pradesh, Uttar Pradesh and international borders",
    famousFor: "Char Dham routes, Himalayan peaks, yoga tourism and river origins",
    highlights: ["Rishikesh", "Haridwar", "Nainital", "Kedarnath"],
    overview:
      "Uttarakhand is a Himalayan state known for pilgrimage destinations, adventure travel and the upper reaches of major North Indian rivers.",
    x: 330,
    y: 180,
    size: 32,
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    code: "UP",
    type: "State",
    region: "north",
    capital: "Lucknow",
    majorCity: "Kanpur",
    languages: "Hindi, Urdu",
    formed: "1950",
    neighbors: "Uttarakhand, Himachal Pradesh, Haryana, Delhi, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, Bihar and Nepal",
    famousFor: "Historic cities, politics, manufacturing, craft clusters and major pilgrimage centres",
    highlights: ["Lucknow", "Varanasi", "Agra", "Prayagraj"],
    overview:
      "Uttar Pradesh is India's most populous state and a major center for history, religion, governance and traditional industries.",
    x: 355,
    y: 255,
    size: 46,
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    code: "RJ",
    type: "State",
    region: "west",
    capital: "Jaipur",
    majorCity: "Jaipur",
    languages: "Hindi, Rajasthani varieties",
    formed: "1949-1956",
    neighbors: "Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Gujarat and Pakistan",
    famousFor: "Desert landscapes, forts, palaces, handicrafts and tourism",
    highlights: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
    overview:
      "Rajasthan is India's largest state by area, famous for royal heritage, desert cities and a strong tourism economy.",
    x: 170,
    y: 315,
    size: 52,
  },
  {
    id: "gujarat",
    name: "Gujarat",
    code: "GJ",
    type: "State",
    region: "west",
    capital: "Gandhinagar",
    majorCity: "Ahmedabad",
    languages: "Gujarati",
    formed: "1960",
    neighbors: "Rajasthan, Madhya Pradesh, Maharashtra, Dadra and Nagar Haveli and Daman and Diu, and the Arabian Sea",
    famousFor: "Ports, entrepreneurship, petrochemicals, white desert landscapes and wildlife",
    highlights: ["Ahmedabad", "Gir National Park", "Statue of Unity", "Kutch"],
    overview:
      "Gujarat is a leading industrial and trading state with a long coastline, major ports and a strong business culture.",
    x: 125,
    y: 445,
    size: 46,
  },
  {
    id: "dnh-dd",
    name: "Dadra and Nagar Haveli and Daman and Diu",
    code: "DNDD",
    type: "Union Territory",
    region: "union",
    capital: "Daman",
    majorCity: "Silvassa",
    languages: "Gujarati, Hindi",
    formed: "2020",
    neighbors: "Gujarat, Maharashtra and the Arabian Sea",
    famousFor: "Coastal enclaves, Portuguese-era traces and light industry",
    highlights: ["Daman coast", "Diu Fort", "Silvassa", "Nagoa Beach"],
    overview:
      "This union territory combines inland enclaves and coastal settlements, bringing together tourism, heritage and small-scale industry.",
    x: 165,
    y: 525,
    size: 26,
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    code: "MP",
    type: "State",
    region: "central",
    capital: "Bhopal",
    majorCity: "Indore",
    languages: "Hindi",
    formed: "1956",
    neighbors: "Rajasthan, Uttar Pradesh, Chhattisgarh, Maharashtra and Gujarat",
    famousFor: "Tiger reserves, central location, heritage temples and manufacturing corridors",
    highlights: ["Khajuraho", "Bhopal", "Indore", "Kanha"],
    overview:
      "Madhya Pradesh sits at the heart of India and is known for wildlife parks, historic architecture and large inland transport links.",
    x: 270,
    y: 360,
    size: 52,
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    code: "CG",
    type: "State",
    region: "central",
    capital: "Raipur",
    majorCity: "Raipur",
    languages: "Hindi, Chhattisgarhi",
    formed: "2000",
    neighbors: "Uttar Pradesh, Jharkhand, Odisha, Telangana, Andhra Pradesh, Maharashtra and Madhya Pradesh",
    famousFor: "Forests, minerals, steel and strong tribal cultural traditions",
    highlights: ["Raipur", "Bastar", "Chitrakote Falls", "Bhilai"],
    overview:
      "Chhattisgarh is rich in natural resources and forest landscapes, with important steel, mining and tribal cultural zones.",
    x: 380,
    y: 380,
    size: 40,
  },
  {
    id: "bihar",
    name: "Bihar",
    code: "BR",
    type: "State",
    region: "east",
    capital: "Patna",
    majorCity: "Patna",
    languages: "Hindi, Urdu",
    formed: "1950",
    neighbors: "Uttar Pradesh, Jharkhand, West Bengal and Nepal",
    famousFor: "Ancient learning centres, river plains, agriculture and political history",
    highlights: ["Patna", "Nalanda", "Bodh Gaya", "Vaishali"],
    overview:
      "Bihar is one of the historic cradles of Indian civilization, with fertile plains and globally known Buddhist and academic heritage sites.",
    x: 470,
    y: 260,
    size: 38,
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    code: "JH",
    type: "State",
    region: "east",
    capital: "Ranchi",
    majorCity: "Jamshedpur",
    languages: "Hindi, Santali and regional languages",
    formed: "2000",
    neighbors: "Bihar, West Bengal, Odisha, Chhattisgarh and Uttar Pradesh",
    famousFor: "Minerals, steel, forests and tribal heritage",
    highlights: ["Ranchi", "Jamshedpur", "Netarhat", "Parasnath"],
    overview:
      "Jharkhand is an industrial and mineral-rich state with strong tribal communities and significant forest cover.",
    x: 460,
    y: 345,
    size: 34,
  },
  {
    id: "sikkim",
    name: "Sikkim",
    code: "SK",
    type: "State",
    region: "northeast",
    capital: "Gangtok",
    majorCity: "Gangtok",
    languages: "Nepali, Sikkimese, Lepcha, English",
    formed: "1975",
    neighbors: "West Bengal and international borders",
    famousFor: "Kanchenjunga views, monasteries, organic farming and alpine travel",
    highlights: ["Gangtok", "Nathu La", "Gurudongmar Lake", "Rumtek"],
    overview:
      "Sikkim is a compact Himalayan state with high mountain scenery, Buddhist heritage and a strong eco-tourism identity.",
    x: 530,
    y: 235,
    size: 22,
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    code: "WB",
    type: "State",
    region: "east",
    capital: "Kolkata",
    majorCity: "Kolkata",
    languages: "Bengali",
    formed: "1947-1950",
    neighbors: "Sikkim, Assam, Jharkhand, Bihar, Odisha and international borders",
    famousFor: "Literature, ports, tea, cinema and a long cultural legacy",
    highlights: ["Kolkata", "Darjeeling", "Sundarbans", "Shantiniketan"],
    overview:
      "West Bengal combines a major metropolitan core, tea-growing hills, delta ecosystems and one of India's strongest literary traditions.",
    x: 535,
    y: 340,
    size: 40,
  },
  {
    id: "odisha",
    name: "Odisha",
    code: "OD",
    type: "State",
    region: "east",
    capital: "Bhubaneswar",
    majorCity: "Bhubaneswar",
    languages: "Odia",
    formed: "1936 province, 1950 state",
    neighbors: "West Bengal, Jharkhand, Chhattisgarh, Andhra Pradesh and the Bay of Bengal",
    famousFor: "Temple architecture, handloom, minerals, classical arts and coastline",
    highlights: ["Puri", "Konark", "Bhubaneswar", "Chilika Lake"],
    overview:
      "Odisha is known for temple towns, coastal culture, mining belts and a deep tradition of classical dance and craft.",
    x: 470,
    y: 430,
    size: 38,
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    code: "MH",
    type: "State",
    region: "west",
    capital: "Mumbai",
    majorCity: "Mumbai",
    languages: "Marathi",
    formed: "1960",
    neighbors: "Gujarat, Madhya Pradesh, Chhattisgarh, Telangana, Karnataka, Goa and the Arabian Sea",
    famousFor: "Finance, film, manufacturing, forts and major urban economies",
    highlights: ["Mumbai", "Pune", "Ajanta and Ellora", "Konkan coast"],
    overview:
      "Maharashtra is one of India's largest economic engines, driven by finance, media, manufacturing, technology and agriculture.",
    x: 255,
    y: 495,
    size: 54,
  },
  {
    id: "goa",
    name: "Goa",
    code: "GA",
    type: "State",
    region: "west",
    capital: "Panaji",
    majorCity: "Vasco da Gama",
    languages: "Konkani",
    formed: "1987",
    neighbors: "Maharashtra, Karnataka and the Arabian Sea",
    famousFor: "Beaches, tourism, music, cuisine and Indo-Portuguese heritage",
    highlights: ["Panaji", "Old Goa", "Baga", "Dudhsagar"],
    overview:
      "Goa is India's smallest state by area and is famous for its beaches, heritage churches and tourism-driven economy.",
    x: 210,
    y: 570,
    size: 22,
  },
  {
    id: "telangana",
    name: "Telangana",
    code: "TS",
    type: "State",
    region: "south",
    capital: "Hyderabad",
    majorCity: "Hyderabad",
    languages: "Telugu, Urdu",
    formed: "2014",
    neighbors: "Maharashtra, Chhattisgarh, Andhra Pradesh and Karnataka",
    famousFor: "IT parks, pharmaceuticals, Deccan heritage and irrigation projects",
    highlights: ["Hyderabad", "Warangal", "Ramappa Temple", "Nagarjuna Sagar"],
    overview:
      "Telangana is a young state centered around Hyderabad, combining technology growth with strong Deccan cultural roots.",
    x: 360,
    y: 500,
    size: 34,
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    code: "AP",
    type: "State",
    region: "south",
    capital: "Amaravati",
    majorCity: "Visakhapatnam",
    languages: "Telugu",
    formed: "1956",
    neighbors: "Telangana, Chhattisgarh, Odisha, Karnataka, Tamil Nadu and the Bay of Bengal",
    famousFor: "Temple towns, a long coastline, aquaculture, pharma and industry",
    highlights: ["Visakhapatnam", "Tirupati", "Araku Valley", "Lepakshi"],
    overview:
      "Andhra Pradesh has a long eastern coastline and a strong mix of pilgrimage, ports, agriculture and industrial growth.",
    x: 390,
    y: 600,
    size: 46,
  },
  {
    id: "karnataka",
    name: "Karnataka",
    code: "KA",
    type: "State",
    region: "south",
    capital: "Bengaluru",
    majorCity: "Bengaluru",
    languages: "Kannada",
    formed: "1956",
    neighbors: "Goa, Maharashtra, Telangana, Andhra Pradesh, Tamil Nadu, Kerala and the Arabian Sea",
    famousFor: "Technology, coffee, classical music, aerospace and heritage sites",
    highlights: ["Bengaluru", "Mysuru", "Hampi", "Coorg"],
    overview:
      "Karnataka pairs Bengaluru's global technology profile with rich heritage landscapes, coffee hills and major manufacturing hubs.",
    x: 270,
    y: 615,
    size: 44,
  },
  {
    id: "kerala",
    name: "Kerala",
    code: "KL",
    type: "State",
    region: "south",
    capital: "Thiruvananthapuram",
    majorCity: "Kochi",
    languages: "Malayalam",
    formed: "1956",
    neighbors: "Karnataka, Tamil Nadu and the Arabian Sea",
    famousFor: "Backwaters, spices, literacy, healthcare and monsoon greenery",
    highlights: ["Kochi", "Alappuzha", "Munnar", "Kovalam"],
    overview:
      "Kerala is known for human development, lush coastal and hill landscapes, spice routes and iconic backwater tourism.",
    x: 260,
    y: 740,
    size: 34,
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    code: "TN",
    type: "State",
    region: "south",
    capital: "Chennai",
    majorCity: "Chennai",
    languages: "Tamil",
    formed: "1956",
    neighbors: "Kerala, Karnataka, Andhra Pradesh, Puducherry and the Bay of Bengal",
    famousFor: "Classical arts, automotive industry, temples, textiles and ports",
    highlights: ["Chennai", "Madurai", "Coimbatore", "Mahabalipuram"],
    overview:
      "Tamil Nadu is one of India's strongest industrial and cultural states, with deep classical traditions and major manufacturing centers.",
    x: 350,
    y: 760,
    size: 42,
  },
  {
    id: "puducherry",
    name: "Puducherry",
    code: "PY",
    type: "Union Territory",
    region: "union",
    capital: "Puducherry",
    majorCity: "Puducherry",
    languages: "Tamil, English, Telugu, Malayalam, French legacy",
    formed: "1963",
    neighbors: "Tamil Nadu, Andhra Pradesh and the Bay of Bengal",
    famousFor: "French colonial quarters, beaches, spirituality and cafe culture",
    highlights: ["White Town", "Auroville", "Promenade", "Heritage streets"],
    overview:
      "Puducherry is a coastal union territory with a distinct French colonial character and a relaxed cultural tourism profile.",
    x: 398,
    y: 735,
    size: 18,
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    code: "LD",
    type: "Union Territory",
    region: "islands",
    capital: "Kavaratti",
    majorCity: "Kavaratti",
    languages: "Malayalam, Jeseri",
    formed: "1956",
    neighbors: "Arabian Sea island territory west of Kerala",
    famousFor: "Coral reefs, lagoons, marine life and low-island ecology",
    highlights: ["Kavaratti", "Agatti", "Bangaram", "Coral lagoons"],
    overview:
      "Lakshadweep is India's smallest union territory by area and is built around fragile coral islands in the Arabian Sea.",
    x: 95,
    y: 705,
    size: 28,
  },
  {
    id: "andaman-nicobar",
    name: "Andaman and Nicobar Islands",
    code: "AN",
    type: "Union Territory",
    region: "islands",
    capital: "Port Blair",
    majorCity: "Port Blair",
    languages: "Hindi, Bengali, Tamil and other island languages",
    formed: "1956",
    neighbors: "Bay of Bengal island territory southeast of mainland India",
    famousFor: "Island biodiversity, coral reefs, naval importance and colonial history",
    highlights: ["Port Blair", "Cellular Jail", "Havelock Island", "Radhanagar Beach"],
    overview:
      "The Andaman and Nicobar Islands form a long island chain in the Bay of Bengal with strong ecological and strategic importance.",
    x: 650,
    y: 720,
    size: 30,
  },
  {
    id: "assam",
    name: "Assam",
    code: "AS",
    type: "State",
    region: "northeast",
    capital: "Dispur",
    majorCity: "Guwahati",
    languages: "Assamese",
    formed: "1950",
    neighbors: "Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, Meghalaya, West Bengal and international borders",
    famousFor: "Tea gardens, the Brahmaputra valley, silk and wildlife reserves",
    highlights: ["Guwahati", "Kaziranga", "Majuli", "Sivasagar"],
    overview:
      "Assam is the gateway to the North-East, with fertile river valleys, famous tea estates and major transport links in the region.",
    x: 585,
    y: 285,
    size: 36,
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    code: "AR",
    type: "State",
    region: "northeast",
    capital: "Itanagar",
    majorCity: "Itanagar",
    languages: "English and many indigenous languages",
    formed: "1987",
    neighbors: "Assam, Nagaland and international borders",
    famousFor: "Mountain passes, monasteries, biodiversity and remote Himalayan valleys",
    highlights: ["Tawang", "Ziro", "Bomdila", "Itanagar"],
    overview:
      "Arunachal Pradesh is India's easternmost state, marked by rugged Himalayan terrain and diverse indigenous cultures.",
    x: 645,
    y: 215,
    size: 42,
  },
  {
    id: "nagaland",
    name: "Nagaland",
    code: "NL",
    type: "State",
    region: "northeast",
    capital: "Kohima",
    majorCity: "Dimapur",
    languages: "English and Naga languages",
    formed: "1963",
    neighbors: "Assam, Arunachal Pradesh, Manipur and international borders",
    famousFor: "Tribal heritage, music culture, festivals and highland scenery",
    highlights: ["Kohima", "Dimapur", "Hornbill Festival", "Dzukou Valley"],
    overview:
      "Nagaland is known for its vibrant tribal cultures, festivals and hill landscapes across the North-East.",
    x: 650,
    y: 290,
    size: 24,
  },
  {
    id: "manipur",
    name: "Manipur",
    code: "MN",
    type: "State",
    region: "northeast",
    capital: "Imphal",
    majorCity: "Imphal",
    languages: "Meitei (Manipuri), English",
    formed: "1972",
    neighbors: "Nagaland, Assam, Mizoram and international borders",
    famousFor: "Dance traditions, handloom, polo history and Loktak Lake",
    highlights: ["Imphal", "Loktak Lake", "Keibul Lamjao", "Polo heritage"],
    overview:
      "Manipur is a culturally rich hill-and-valley state with strong performing arts traditions and unique wetland ecosystems.",
    x: 655,
    y: 355,
    size: 24,
  },
  {
    id: "mizoram",
    name: "Mizoram",
    code: "MZ",
    type: "State",
    region: "northeast",
    capital: "Aizawl",
    majorCity: "Aizawl",
    languages: "Mizo, English",
    formed: "1987",
    neighbors: "Tripura, Assam, Manipur and international borders",
    famousFor: "Lush hills, bamboo landscapes, community life and music",
    highlights: ["Aizawl", "Reiek", "Phawngpui", "Bamboo country"],
    overview:
      "Mizoram is a hill state with strong community networks, green mountain scenery and a vibrant local cultural identity.",
    x: 620,
    y: 410,
    size: 28,
  },
  {
    id: "tripura",
    name: "Tripura",
    code: "TR",
    type: "State",
    region: "northeast",
    capital: "Agartala",
    majorCity: "Agartala",
    languages: "Bengali, Kokborok, English",
    formed: "1972",
    neighbors: "Assam, Mizoram and Bangladesh",
    famousFor: "Palaces, bamboo crafts, rubber and a strong Bengali-tribal cultural mix",
    highlights: ["Agartala", "Ujjayanta Palace", "Neermahal", "Sepahijala"],
    overview:
      "Tripura is a compact North-Eastern state known for royal landmarks, craft traditions and cross-border cultural influences.",
    x: 570,
    y: 385,
    size: 22,
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    code: "ML",
    type: "State",
    region: "northeast",
    capital: "Shillong",
    majorCity: "Shillong",
    languages: "English, Khasi, Garo",
    formed: "1972",
    neighbors: "Assam and Bangladesh",
    famousFor: "Living root bridges, caves, rain-rich landscapes and music culture",
    highlights: ["Shillong", "Cherrapunji", "Mawlynnong", "Root bridges"],
    overview:
      "Meghalaya is famous for cloud forests, dramatic waterfalls and some of the wettest inhabited places on Earth.",
    x: 545,
    y: 315,
    size: 24,
  },
];

const mapObject = document.getElementById("india-map-object");
const directory = document.getElementById("state-directory");
const searchInput = document.getElementById("state-search");
const detailName = document.getElementById("detail-name");
const detailType = document.getElementById("detail-type");
const detailOverview = document.getElementById("detail-overview");
const detailHighlights = document.getElementById("detail-highlights");
const detailNeighbors = document.getElementById("detail-neighbors");
const factsGrid = document.getElementById("facts-grid");
const legend = document.getElementById("legend");
const detailFunFact = document.getElementById("detail-fun-fact");
const languageLinks = document.getElementById("language-links");
const detailLinks = document.getElementById("detail-links");
const detailImage = document.getElementById("detail-image");
const detailImageStatus = document.getElementById("detail-image-status");
const detailImageCredit = document.getElementById("detail-image-credit");
const heroAccent = document.getElementById("hero-accent");
const dressCard = document.getElementById("dress-corner-card");
const dressImage = document.getElementById("dress-image");
const dressName = document.getElementById("dress-name");
const dressState = document.getElementById("dress-state");
const dressLink = document.getElementById("dress-link");

let activeId = "maharashtra";
let svgDocumentRef = null;
const svgElementMap = new Map();
const stateImageCache = new Map();
let activeImageRequest = 0;
let overviewTypeToken = 0;
let heroTypeToken = 0;

const svgAliasMap = {
  "jammu-kashmir": ["Jammu_and_Kashmir"],
  ladakh: ["Ladakh"],
  "himachal-pradesh": ["Himachal_Pradesh"],
  punjab: ["Punjab"],
  chandigarh: ["Chandigarh"],
  haryana: ["Haryana"],
  delhi: ["Delhi"],
  uttarakhand: ["Uttarakhand", "Uttaranchal"],
  "uttar-pradesh": ["Uttar_Pradesh"],
  rajasthan: ["Rajasthan"],
  gujarat: ["Gujarat"],
  "dnh-dd": ["Dadra_and_Nagar_Haveli", "Daman", "Diu"],
  "madhya-pradesh": ["Madhya_Pradesh"],
  chhattisgarh: ["Chhattisgarh"],
  bihar: ["Bihar"],
  jharkhand: ["Jharkhand"],
  sikkim: ["Sikkim"],
  "west-bengal": ["West_Bengal"],
  odisha: ["Odisha", "Orissa"],
  maharashtra: ["Maharashtra"],
  goa: ["Goa"],
  telangana: ["Telangana"],
  "andhra-pradesh": ["Andhra_Pradesh"],
  karnataka: ["Karnataka"],
  kerala: ["Kerala"],
  "tamil-nadu": ["Tamil_Nadu"],
  puducherry: ["Puducherry"],
  lakshadweep: ["Lakshadweep"],
  "andaman-nicobar": ["Andaman_and_Nicobar"],
  assam: ["Assam"],
  "arunachal-pradesh": ["Arunachal_Pradesh"],
  nagaland: ["Nagaland"],
  manipur: ["Manipur"],
  mizoram: ["Mizoram"],
  tripura: ["Tripura"],
  meghalaya: ["Meghalaya"],
};

const wikiPageMap = {
  "jammu-kashmir": "Jammu and Kashmir (union territory)",
  "dnh-dd": "Dadra and Nagar Haveli and Daman and Diu",
  "andaman-nicobar": "Andaman and Nicobar Islands",
  delhi: "Delhi",
  odisha: "Odisha",
  uttarakhand: "Uttarakhand",
  puducherry: "Puducherry",
};

const languageWikiMap = {
  Hindi: "Hindi",
  English: "English language",
  Punjabi: "Punjabi language",
  Urdu: "Urdu",
  Kashmiri: "Kashmiri language",
  Dogri: "Dogri language",
  Ladakhi: "Ladakhi language",
  "Pahari varieties": "Pahari languages",
  Haryanvi: "Haryanvi language",
  Garhwali: "Garhwali language",
  Kumaoni: "Kumaoni language",
  Gujarati: "Gujarati language",
  Marathi: "Marathi language",
  Konkani: "Konkani language",
  Telugu: "Telugu language",
  Kannada: "Kannada",
  Malayalam: "Malayalam",
  Tamil: "Tamil language",
  Bengali: "Bengali language",
  Odia: "Odia language",
  Assamese: "Assamese language",
  Nepali: "Nepali language",
  "Sikkimese": "Sikkimese language",
  Lepcha: "Lepcha language",
  Santali: "Santali language",
  Chhattisgarhi: "Chhattisgarhi language",
  Rajasthani: "Rajasthani languages",
  "Rajasthani varieties": "Rajasthani languages",
  Meitei: "Meitei language",
  "Meitei (Manipuri)": "Meitei language",
  Mizo: "Mizo language",
  Kokborok: "Kokborok",
  Khasi: "Khasi language",
  Garo: "Garo language",
  Jeseri: "Jeseri language",
  French: "French language",
  "French legacy": "French language",
  "Naga languages": "Naga languages",
  "indigenous languages": "Languages of India",
};

const heroPhrases = [
  "explore every state.",
  "zoom into every region.",
  "watch the facts come alive.",
];

const traditionalDressMap = {
  "jammu-kashmir": { name: "Pheran", style: "robe", colors: ["#6b8ea6", "#f1e5d1", "#c55b3d"] },
  ladakh: { name: "Goncha", style: "robe", colors: ["#8f3028", "#e8c16a", "#2d4d66"] },
  "himachal-pradesh": { name: "Chola Dora", style: "robe", colors: ["#57738a", "#d7c3aa", "#b23d2e"] },
  punjab: { name: "Punjabi Suit", style: "suit", colors: ["#d65a44", "#f4d37d", "#3b6d8a"] },
  chandigarh: { name: "Punjabi Suit", style: "suit", colors: ["#df6b52", "#f8ddb3", "#56799b"] },
  haryana: { name: "Ghagra and Kurti", style: "skirt", colors: ["#bf4e45", "#f4c96f", "#466e58"] },
  delhi: { name: "Kurta Set", style: "suit", colors: ["#587899", "#f3dcb2", "#c45f3f"] },
  uttarakhand: { name: "Ghagra Pichora", style: "skirt", colors: ["#d3a12d", "#c8453d", "#f6e6b6"] },
  "uttar-pradesh": { name: "Banarasi Saree", style: "sari", colors: ["#b2384c", "#d8a33c", "#f0dfc0"] },
  rajasthan: { name: "Ghagra Choli", style: "skirt", colors: ["#cc4a35", "#f4b73d", "#2d7987"] },
  gujarat: { name: "Chaniya Choli", style: "skirt", colors: ["#1e8a7d", "#e55d3d", "#f2cf5d"] },
  "dnh-dd": { name: "Tribal Folk Attire", style: "wrap", colors: ["#6b8a57", "#e6c98d", "#8c4c38"] },
  "madhya-pradesh": { name: "Lugda Style", style: "sari", colors: ["#5f7ea1", "#d15c49", "#efd8a6"] },
  chhattisgarh: { name: "Kosa Saree", style: "sari", colors: ["#9d4637", "#d6ac47", "#f0e0bc"] },
  bihar: { name: "Tussar Saree", style: "sari", colors: ["#8a4b62", "#e7c98a", "#4e697f"] },
  jharkhand: { name: "Panchi Parhan", style: "wrap", colors: ["#cf5e3a", "#ead7b5", "#325f76"] },
  sikkim: { name: "Bakhu", style: "robe", colors: ["#495f8b", "#d2b46f", "#f2e2c6"] },
  "west-bengal": { name: "Bengali Saree", style: "sari", colors: ["#d43f4d", "#f3efe4", "#caa54a"] },
  odisha: { name: "Sambalpuri Saree", style: "sari", colors: ["#9a3046", "#f2d0a0", "#355f7c"] },
  maharashtra: { name: "Nauvari Saree", style: "sari", colors: ["#267a53", "#e5b23a", "#b2443e"] },
  goa: { name: "Kunbi Saree", style: "sari", colors: ["#b64239", "#e79e41", "#2a6c7f"] },
  telangana: { name: "Pochampally Saree", style: "sari", colors: ["#8a2f58", "#e9c84a", "#44648c"] },
  "andhra-pradesh": { name: "Langa Voni", style: "skirt", colors: ["#c9444f", "#efbf54", "#306d91"] },
  karnataka: { name: "Ilkal Saree", style: "sari", colors: ["#bf3d2d", "#254b83", "#efcf68"] },
  kerala: { name: "Kasavu Saree", style: "sari", colors: ["#f1ead8", "#c9a43c", "#7e9e8f"] },
  "tamil-nadu": { name: "Kanchipuram Saree", style: "sari", colors: ["#a02f4a", "#d7a53e", "#f0dbc4"] },
  puducherry: { name: "Tamil-French Heritage Attire", style: "sari", colors: ["#456e98", "#f0d8b6", "#c85a42"] },
  lakshadweep: { name: "Island Ceremonial Dress", style: "wrap", colors: ["#2b7d86", "#f0e0bc", "#4ea96d"] },
  "andaman-nicobar": { name: "Island Tribal Attire", style: "wrap", colors: ["#2e6e7d", "#d8b984", "#c15d42"] },
  assam: { name: "Mekhela Sador", style: "sari", colors: ["#cf5346", "#f2e5c7", "#c89a43"] },
  "arunachal-pradesh": { name: "Gale Wrap", style: "wrap", colors: ["#4a6a91", "#d7a547", "#b1453b"] },
  nagaland: { name: "Naga Shawl Attire", style: "robe", colors: ["#c53d36", "#111111", "#f2efe8"] },
  manipur: { name: "Phanek and Innaphi", style: "skirt", colors: ["#a3487d", "#f0d6b7", "#446b91"] },
  mizoram: { name: "Puan", style: "wrap", colors: ["#bd4a38", "#f2e7d0", "#2d6172"] },
  tripura: { name: "Rignai", style: "skirt", colors: ["#cf613f", "#f1d39c", "#486a74"] },
  meghalaya: { name: "Jainsem", style: "robe", colors: ["#bf8d2d", "#f0e6cc", "#8c3f4b"] },
};

function factCard(label, value) {
  return `
    <article class="fact-card">
      <span class="fact-label">${label}</span>
      <span class="fact-value">${value}</span>
    </article>
  `;
}

function wikiUrl(title) {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`;
}

function searchUrl(query) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function createDressSvg(dress) {
  const [primary, secondary, accent] = dress.colors;
  const silhouette = {
    sari: `
      <path d="M37 58c5-7 13-11 23-11s18 4 23 11v9c0 6-2 13-5 18l-6 9 8 33H40l8-33-6-9c-3-5-5-12-5-18z" fill="${primary}"/>
      <path d="M58 57c10 5 15 14 18 25l-16 3c-2-8-5-14-10-19z" fill="${accent}"/>
      <path d="M49 92h22l5 28H44z" fill="${secondary}"/>
    `,
    skirt: `
      <path d="M36 60c6-8 15-13 24-13 10 0 18 5 24 13l-5 24H41z" fill="${secondary}"/>
      <path d="M46 84h28l10 40H36z" fill="${primary}"/>
      <path d="M48 57h24v15H48z" fill="${accent}"/>
    `,
    robe: `
      <path d="M41 54c5-5 11-8 19-8s14 3 19 8l4 69H37z" fill="${primary}"/>
      <path d="M60 47c7 4 11 10 13 18l-13 8-13-8c2-8 6-14 13-18z" fill="${accent}"/>
      <path d="M51 73h18v50H51z" fill="${secondary}"/>
    `,
    suit: `
      <path d="M42 58c5-7 11-11 18-11 7 0 13 4 18 11l3 27H39z" fill="${primary}"/>
      <rect x="44" y="85" width="32" height="37" rx="8" fill="${secondary}"/>
      <path d="M50 57h20l-4 12H54z" fill="${accent}"/>
    `,
    wrap: `
      <path d="M40 60c5-8 12-13 20-13s15 5 20 13l1 21H39z" fill="${secondary}"/>
      <path d="M42 82h36l5 40H37z" fill="${primary}"/>
      <path d="M36 68 83 84 76 95 39 82z" fill="${accent}" opacity="0.9"/>
    `,
  }[dress.style] || "";

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 150">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${secondary}" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="${accent}" stop-opacity="0.18"/>
        </linearGradient>
      </defs>
      <rect width="120" height="150" rx="22" fill="url(#bg)"/>
      <circle cx="60" cy="34" r="12" fill="#f4c8a8"/>
      <path d="M47 29c2-9 10-14 13-14 7 0 13 6 13 14-6-3-19-3-26 0z" fill="#2d241f"/>
      ${silhouette}
      <circle cx="60" cy="133" r="6" fill="${accent}" opacity="0.55"/>
    </svg>
  `.trim();
}

function dressSvgUrl(dress) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(createDressSvg(dress))}`;
}

function normalizeLanguageChunks(languageText) {
  return languageText
    .replace(/\band\b/gi, ",")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      if (item === "many indigenous languages") return "indigenous languages";
      return item;
    })
    .filter((item) => item !== "regional languages");
}

function renderKnowledgeLink({ label, meta, url }) {
  return `
    <a class="knowledge-link" href="${url}" target="_blank" rel="noreferrer">
      <span class="knowledge-link-label">${label}</span>
      <span class="knowledge-link-meta">${meta}</span>
    </a>
  `;
}

function typeText(element, text, speed = 18, tokenKey = "overview") {
  const token = Date.now() + Math.random();

  if (tokenKey === "overview") {
    overviewTypeToken = token;
  } else {
    heroTypeToken = token;
  }

  element.textContent = "";
  let index = 0;

  function step() {
    const currentToken = tokenKey === "overview" ? overviewTypeToken : heroTypeToken;
    if (currentToken !== token) return;

    element.textContent = text.slice(0, index);
    index += 1;

    if (index <= text.length) {
      window.setTimeout(step, speed);
    }
  }

  step();
}

function startHeroTyping() {
  if (!heroAccent) return;

  let phraseIndex = 0;

  function cycle() {
    typeText(heroAccent, heroPhrases[phraseIndex], 48, "hero");
    phraseIndex = (phraseIndex + 1) % heroPhrases.length;
    window.setTimeout(cycle, 3400);
  }

  cycle();
}

function getWikiPage(place) {
  return wikiPageMap[place.id] || place.name;
}

async function loadStateImage(place) {
  if (!detailImage || !detailImageStatus || !detailImageCredit) return;

  const requestId = ++activeImageRequest;
  const pageTitle = getWikiPage(place);
  detailImage.classList.remove("is-ready");
  detailImage.removeAttribute("src");
  detailImage.alt = `${place.name} representative image`;
  detailImageStatus.textContent = `Loading image for ${place.name}...`;
  detailImageCredit.textContent = "";

  if (stateImageCache.has(pageTitle)) {
    const cached = stateImageCache.get(pageTitle);
    if (requestId !== activeImageRequest) return;
    applyStateImage(place, cached);
    return;
  }

  try {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`);
    if (!response.ok) throw new Error(`Image request failed: ${response.status}`);
    const data = await response.json();

    const imageInfo = {
      src: data.originalimage?.source || data.thumbnail?.source || "",
      description: data.description || "",
      title: data.title || place.name,
    };

    stateImageCache.set(pageTitle, imageInfo);

    if (requestId !== activeImageRequest) return;
    applyStateImage(place, imageInfo);
  } catch (error) {
    if (requestId !== activeImageRequest) return;
    detailImageStatus.textContent = `${place.name} selected. Image preview is not available right now.`;
    detailImageCredit.textContent = "State details are still available below.";
  }
}

function applyStateImage(place, imageInfo) {
  if (!detailImage || !detailImageStatus || !detailImageCredit) return;

  if (!imageInfo.src) {
    detailImageStatus.textContent = `${place.name} selected. Image preview is not available right now.`;
    detailImageCredit.textContent = "State details are still available below.";
    return;
  }

  detailImage.onload = () => {
    detailImage.classList.add("is-ready");
  };
  detailImage.src = imageInfo.src;
  detailImage.alt = `${place.name} representative image`;
  detailImageStatus.textContent = imageInfo.description
    ? `${place.name} - ${imageInfo.description}`
    : `${place.name} image loaded`;
  detailImageCredit.textContent = `Image via Wikipedia summary for ${imageInfo.title}.`;
}

function renderLegend() {
  const entries = ["north", "west", "central", "east", "south", "northeast", "islands", "union"];

  legend.innerHTML = entries
    .map((key) => {
      const item = regionPalette[key];
      return `
        <span class="legend-chip">
          <span class="legend-swatch" style="background:${item.color}"></span>
          ${item.name}
        </span>
      `;
    })
    .join("");
}

function renderLanguageLinkSet(place) {
  const seen = new Set();
  const languages = normalizeLanguageChunks(place.languages)
    .map((name) => {
      const title = languageWikiMap[name] || languageWikiMap[name.replace(/\s*\(.+\)\s*/g, "").trim()] || `${name}`;
      return { name, title };
    })
    .filter((entry) => {
      const key = entry.title.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

  languageLinks.innerHTML = languages
    .map((entry) =>
      renderKnowledgeLink({
        label: entry.name,
        meta: "Language page",
        url: wikiUrl(entry.title),
      }),
    )
    .join("");
}

function renderDetailLinkSet(place) {
  const stateTitle = getWikiPage(place);
  const capitalTitle = place.capital.includes("(") ? place.majorCity : place.capital;
  const links = [
    {
      label: `${place.name}`,
      meta: "State or UT overview",
      url: wikiUrl(stateTitle),
    },
    {
      label: `${capitalTitle}`,
      meta: "Capital details",
      url: wikiUrl(capitalTitle),
    },
    {
      label: `${place.majorCity}`,
      meta: "Major city page",
      url: wikiUrl(place.majorCity),
    },
  ];

  detailLinks.innerHTML = links
    .map((entry) => renderKnowledgeLink(entry))
    .join("");
}

function renderDressSpotlight(place) {
  if (!dressImage || !dressName || !dressLink || !dressState || !dressCard) return;

  const dress = traditionalDressMap[place.id] || {
    name: "Traditional Dress",
    style: "sari",
    colors: ["#b44943", "#f1d8b5", "#406b92"],
  };

  dressCard.style.setProperty("--dress-primary", dress.colors[0]);
  dressCard.style.setProperty("--dress-secondary", dress.colors[1]);
  dressCard.style.setProperty("--dress-accent", dress.colors[2]);
  dressCard.classList.remove("is-refreshing");
  void dressCard.offsetWidth;
  dressCard.classList.add("is-refreshing");
  dressImage.src = dressSvgUrl(dress);
  dressImage.alt = `${dress.name} inspired illustration for ${place.name}`;
  dressName.textContent = dress.name;
  dressState.textContent = `${place.name} traditional style in a playful animated spotlight.`;
  dressLink.href = searchUrl(`traditional dress of ${place.name} ${dress.name}`);
  dressLink.textContent = `About ${dress.name}`;
}

function getMapElementsForPlace(place) {
  if (!svgDocumentRef) return [];

  const aliases = svgAliasMap[place.id] || [];
  const geometryTags = new Set(["path", "polygon", "rect", "ellipse", "circle"]);
  const matched = [];

  aliases.forEach((alias) => {
    svgDocumentRef.querySelectorAll(`[id*="${alias}"]`).forEach((node) => {
      if (!geometryTags.has(node.tagName.toLowerCase())) return;
      if (matched.includes(node)) return;
      matched.push(node);
    });
  });

  return matched;
}

function refreshSvgStyles(filterIds = null) {
  if (!svgDocumentRef) return;

  locations.forEach((place) => {
    const color = regionPalette[place.region].color;
    const isActive = place.id === activeId;
    const isMuted = filterIds && !filterIds.has(place.id);
    const nodes = svgElementMap.get(place.id) || [];

    nodes.forEach((node) => {
      node.style.fill = color;
      node.style.stroke = isActive ? "#112f3c" : "#ffffff";
      node.style.strokeWidth = isActive ? "3.8" : "1.7";
      node.style.opacity = isMuted ? "0.22" : "1";
      node.style.cursor = "pointer";
      node.style.transition = "fill 180ms ease, opacity 180ms ease, stroke 180ms ease, stroke-width 180ms ease, filter 180ms ease";
      node.style.filter = isActive ? "brightness(1.04) saturate(1.1)" : "";
    });
  });
}

function setupSvgMap() {
  svgDocumentRef = mapObject.contentDocument;
  if (!svgDocumentRef) return;

  svgElementMap.clear();

  locations.forEach((place) => {
    const nodes = getMapElementsForPlace(place);
    svgElementMap.set(place.id, nodes);

    nodes.forEach((node) => {
      node.addEventListener("click", () => selectLocation(place.id));
      node.addEventListener("mouseenter", () => {
        if (place.id !== activeId) {
          node.style.filter = "brightness(1.03) saturate(1.08)";
        }
      });
      node.addEventListener("mouseleave", () => {
        if (place.id !== activeId) {
          node.style.filter = "";
        }
      });
    });
  });

  refreshSvgStyles();
}

function renderDirectory() {
  directory.innerHTML = locations
    .map(
      (place) => `
        <button class="directory-btn" type="button" data-id="${place.id}">
          <span class="directory-name">${place.name}</span>
          <span class="directory-meta">${place.capital}</span>
        </button>
      `,
    )
    .join("");

  directory.querySelectorAll(".directory-btn").forEach((button) => {
    button.addEventListener("click", () => selectLocation(button.dataset.id));
  });
}

function updateStats() {
  document.getElementById("stats-total").textContent = String(locations.length);
  document.getElementById("stats-states").textContent = String(locations.filter((place) => place.type === "State").length);
  document.getElementById("stats-uts").textContent = String(locations.filter((place) => place.type !== "State").length);
}

function selectLocation(id) {
  const place = locations.find((entry) => entry.id === id);
  if (!place) return;

  activeId = id;
  const color = regionPalette[place.region].color;

  detailName.textContent = place.name;
  detailType.textContent = `${place.type} | ${regionPalette[place.region].name}`;
  detailType.style.background = `${color}18`;
  detailType.style.color = color;
  typeText(detailOverview, place.overview, 14, "overview");
  if (detailFunFact) {
    detailFunFact.textContent = `Did you know? ${place.name} is especially known for ${place.famousFor.toLowerCase()}.`;
  }
  detailNeighbors.textContent = place.neighbors;

  factsGrid.innerHTML = [
    factCard("Capital", place.capital),
    factCard("Major city", place.majorCity),
    factCard("Languages", place.languages),
    factCard("Current status since", place.formed),
    factCard("Known for", place.famousFor),
    factCard("Map code", place.code),
  ]
    .map((card, index) => card.replace('<article class="fact-card">', `<article class="fact-card" style="animation-delay:${index * 70}ms">`))
    .join("");

  detailHighlights.innerHTML = place.highlights
    .map((item) => `<span class="chip">${item}</span>`)
    .join("");

  if (languageLinks) {
    renderLanguageLinkSet(place);
  }

  if (detailLinks) {
    renderDetailLinkSet(place);
  }

  renderDressSpotlight(place);

  refreshSvgStyles(searchInput.value.trim() ? new Set(getMatches(searchInput.value).map((entry) => entry.id)) : null);

  directory.querySelectorAll(".directory-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.id === id);
  });

  loadStateImage(place);
}

function getMatches(query) {
  const needle = query.trim().toLowerCase();
  if (!needle) return locations;

  return locations.filter((place) => {
    return [place.name, place.code, place.capital, place.majorCity, place.type, regionPalette[place.region].name]
      .join(" ")
      .toLowerCase()
      .includes(needle);
  });
}

function applyFilter(query) {
  const matches = getMatches(query);
  const matchIds = new Set(matches.map((place) => place.id));
  const showAll = query.trim().length === 0;

  refreshSvgStyles(showAll ? null : matchIds);

  directory.querySelectorAll(".directory-btn").forEach((button) => {
    button.classList.toggle("is-muted", !showAll && !matchIds.has(button.dataset.id));
  });

  if (!showAll && !matchIds.has(activeId) && matches.length > 0) {
    selectLocation(matches[0].id);
  }
}

function init() {
  renderLegend();
  renderDirectory();
  updateStats();
  selectLocation(activeId);
  startHeroTyping();

  if (mapObject) {
    mapObject.addEventListener("load", () => {
      setupSvgMap();
      applyFilter(searchInput.value);
      selectLocation(activeId);
    });

    if (mapObject.contentDocument) {
      setupSvgMap();
      applyFilter(searchInput.value);
      selectLocation(activeId);
    }
  }

  searchInput.addEventListener("input", (event) => {
    applyFilter(event.target.value);
  });
}

init();
