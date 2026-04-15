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

const mapColorPalette = [
  "#f4a261", "#8ecae6", "#90be6d", "#ffafcc", "#cdb4db", "#ffd166",
  "#06d6a0", "#f4978e", "#a0c4ff", "#bde0fe", "#fec89a", "#84a59d",
  "#f6bd60", "#b8c0ff", "#95d5b2", "#e9c46a", "#f28482", "#52b69a",
  "#f7b267", "#6ec6ff", "#d4a373", "#b5e48c", "#ffcad4", "#a9def9",
  "#c3aed6", "#ffd6a5", "#80ed99", "#f1c0e8", "#72ddf7", "#f2cc8f",
  "#98c1d9", "#bee1e6", "#b8f2e6", "#ffcb77", "#e5989b", "#7bdff2",
];

const locationColorMap = locations.reduce((accumulator, place, index) => {
  accumulator[place.id] = mapColorPalette[index % mapColorPalette.length];
  return accumulator;
}, {});

const MAP_HOVER_BOOST = 18;
const MAP_ACTIVE_BOOST = -24;
const MAP_BORDER_COLOR = "#1b2430";
const MAP_SELECTED_BORDER_COLOR = "#ffffff";

const mapShell = document.getElementById("india-map-shell");
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
const discoveryTabs = document.getElementById("discovery-tabs");
const discoveryBoard = document.getElementById("discovery-board");
const discoveryKicker = document.getElementById("discovery-kicker");
const discoveryTitle = document.getElementById("discovery-title");
const discoverySubtitle = document.getElementById("discovery-subtitle");
const discoveryCopy = document.getElementById("discovery-copy");
const discoveryPoints = document.getElementById("discovery-points");
const discoveryLinks = document.getElementById("discovery-links");
const languageLinks = document.getElementById("language-links");
const detailLinks = document.getElementById("detail-links");
const knowledgeStudioSection = document.getElementById("knowledge-studio-section");
const knowledgeStudio = document.getElementById("knowledge-studio");
const knowledgeImage = document.getElementById("knowledge-image");
const knowledgeKicker = document.getElementById("knowledge-kicker");
const knowledgeImageStatus = document.getElementById("knowledge-image-status");
const knowledgeMeta = document.getElementById("knowledge-meta");
const knowledgeTitle = document.getElementById("knowledge-title");
const knowledgeSummary = document.getElementById("knowledge-summary");
const knowledgePoints = document.getElementById("knowledge-points");
const knowledgeSource = document.getElementById("knowledge-source");
const detailImage = document.getElementById("detail-image");
const detailImageStatus = document.getElementById("detail-image-status");
const detailImageCredit = document.getElementById("detail-image-credit");
const heroAccent = document.getElementById("hero-accent");
const dressCard = document.getElementById("dress-corner-card");
const dressImage = document.getElementById("dress-image");
const dressName = document.getElementById("dress-name");
const dressState = document.getElementById("dress-state");
const dressLink = document.getElementById("dress-link");
const styleGallery = document.getElementById("style-gallery");
const soundCard = document.getElementById("sound-card");
const soundStateTitle = document.getElementById("sound-state-title");
const soundDescription = document.getElementById("sound-description");
const soundToggle = document.getElementById("sound-toggle");
const soundNote = document.getElementById("sound-note");

let activeId = "maharashtra";
let svgDocumentRef = null;
let svgRootRef = null;
const svgElementMap = new Map();
const stateImageCache = new Map();
const dressImageCache = new Map();
const styleGalleryCache = new Map();
const knowledgeTopicCache = new Map();
const knowledgeEntryRegistry = new Map();
let activeImageRequest = 0;
let activeDressRequest = 0;
let activeKnowledgeRequest = 0;
let activeStyleGalleryRequest = 0;
let overviewTypeToken = 0;
let heroTypeToken = 0;
let activeDiscoveryCategory = "geography";
let currentDiscoveryPlace = null;
let knowledgeEntrySequence = 0;
let audioContextRef = null;
let audioMasterGain = null;
let stateMusicTimer = null;
let musicIsPlaying = false;
let currentMusicPlaceId = null;
let currentMusicStep = 0;

function shiftHexColor(color, amount) {
  const normalized = color.replace("#", "");
  const value = Number.parseInt(normalized, 16);
  const clamp = (channel) => Math.max(0, Math.min(255, channel));
  const red = clamp((value >> 16) + amount);
  const green = clamp(((value >> 8) & 0xff) + amount);
  const blue = clamp((value & 0xff) + amount);
  return `#${[red, green, blue].map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
}

function getLocationMapColor(placeId) {
  return locationColorMap[placeId] || "#b9dff0";
}

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

const discoveryCategories = [
  { id: "geography", label: "Geography & States", kicker: "Discover India", icon: "🗺️" },
  { id: "culture", label: "Languages, Art & Culture", kicker: "Living Culture", icon: "🎭" },
  { id: "food", label: "Food & Cuisine", kicker: "Flavours", icon: "🍛" },
  { id: "heritage", label: "Heritage & Tourism", kicker: "Travel Lens", icon: "🏛️" },
  { id: "climate", label: "Climate & Lifestyle", kicker: "Everyday Rhythms", icon: "🌦️" },
  { id: "attire", label: "Jewelry & Attire", kicker: "Style Archive", icon: "👘" },
  { id: "festivals", label: "Festivals", kicker: "Celebration Calendar", icon: "🪔" },
  { id: "crafts", label: "Handicrafts & Textiles", kicker: "Craft Atlas", icon: "🧵" },
  { id: "education", label: "Education Institutes", kicker: "Campus Trail", icon: "🎓" },
  { id: "innovation", label: "Innovation & Technology", kicker: "Future India", icon: "🚀" },
  { id: "industries", label: "Major Industries", kicker: "Economic Pulse", icon: "🏭" },
  { id: "agri", label: "Agri Products", kicker: "Fields & Orchards", icon: "🌾" },
  { id: "gi", label: "GI & Famous Products", kicker: "Tagged Treasures", icon: "🏷️" },
  { id: "film", label: "Film Industry", kicker: "Screen Stories", icon: "🎬" },
  { id: "virtual", label: "Virtual Experience", kicker: "Interactive Journey", icon: "🔮" },
];

const regionalDiscoveryDefaults = {
  north: {
    culture: "Mountain pilgrimages, folk music, layered courtly histories and craft traditions shape everyday identity across the northern belt.",
    climate: "Snow-fed rivers, cold winters in the hills and warm plains create a dramatic seasonal rhythm.",
    lifestyle: "Pilgrimage routes, orchards, military towns, tourism circuits and bustling mandis all shape local life.",
    jewelry: "Silver ornaments, embroidered shawls and ceremonial headwear are strong visual signatures here.",
    crafts: "Wool, woodwork, embroidery, metal craft and heritage weaving remain strong craft anchors.",
    education: "Capitals and major cities host state universities, professional colleges, research campuses and public-service exam ecosystems.",
    innovation: "Mobility services, tourism tech, agri-tech and public digital services are expanding through urban corridors.",
    industries: "Tourism, food processing, handicrafts, light manufacturing, services and logistics all play visible roles.",
    agri: "Wheat, rice, dairy, apples, saffron, pulses and horticulture products appear across northern supply chains.",
    festivals: "Harvest fairs, devotional yatras and seasonal melas fill the cultural calendar.",
    cinema: "Northern landscapes frequently appear in travel storytelling, music videos and mainstream Indian cinema.",
  },
  west: {
    culture: "Merchant routes, royal heritage, desert performance traditions and coastal trade stories define western India.",
    climate: "Arid interiors meet long coastlines, giving the west both desert heat and maritime livelihoods.",
    lifestyle: "Bazaars, ports, tourism hubs, textile towns and entrepreneurial urban centers keep the region energetic.",
    jewelry: "Mirror-work styling, tribal silver jewelry, lacquer accents and bold festive attire are widely associated with the west.",
    crafts: "Bandhani, embroidery, block printing, pottery and leather craft create a strong handmade identity.",
    education: "Western capitals and industrial cities are packed with management schools, design institutes and engineering campuses.",
    innovation: "Start-up culture, fintech, manufacturing tech, clean energy and logistics platforms are especially visible here.",
    industries: "Ports, petrochemicals, textiles, gems, tourism, automobiles and finance give the west an industrial edge.",
    agri: "Cotton, groundnut, bajra, cumin, dairy and fruit belts support both domestic and export markets.",
    festivals: "Navratri, desert fairs and community festivals often turn public spaces into giant performance stages.",
    cinema: "The west supports commercial film, music-video production, ad shoots and heritage-location storytelling.",
  },
  central: {
    culture: "Temple architecture, forest communities, classical heritage and wildlife stories shape the central heartland.",
    climate: "Hot summers, monsoon-fed forests and broad inland plateaus define the region's environmental rhythm.",
    lifestyle: "Market towns, reserves, pilgrimage circuits, mining belts and heritage cities create a mixed pace of life.",
    jewelry: "Traditional tribal ornaments, bead work, silver pieces and practical festive attire are widely seen.",
    crafts: "Tribal craft, weaving, metalwork, terracotta and natural-dye traditions remain important cultural carriers.",
    education: "Regional capitals act as education magnets for professional colleges, state universities and coaching ecosystems.",
    innovation: "Public-sector research, digital governance, clean-energy pilots and emerging start-up clusters are growing steadily.",
    industries: "Mining, energy, forest products, cement, engineering, tourism and public-sector activity are major pillars.",
    agri: "Soybean, wheat, rice, pulses, forest produce and oilseeds shape much of the agri economy.",
    festivals: "Temple festivals, folk fairs and seasonal harvest celebrations connect cities with rural traditions.",
    cinema: "Wildlife, forts and inland landscapes make central India a strong location for documentaries and feature shoots.",
  },
  east: {
    culture: "River civilizations, classical music, literary traditions, temple culture and artisan networks give the east enormous depth.",
    climate: "Humid plains, river basins and monsoon dependence create lush landscapes and dense settlement patterns.",
    lifestyle: "Rail towns, heritage cities, sacred rivers, craft hubs and market agriculture all influence daily life.",
    jewelry: "Filigree work, woven drapes, ceremonial sarees and gold-toned festive styling are common references.",
    crafts: "Textiles, applique, handloom, terracotta, stone carving and fine metal craft stand out strongly.",
    education: "Historic universities, technical institutes and civil-service coaching centers are spread across eastern cities.",
    innovation: "The east is strengthening digital services, manufacturing corridors, heavy industry and research-led urban growth.",
    industries: "Steel, rail-linked manufacturing, mining, handloom, tourism and services shape the wider eastern economy.",
    agri: "Rice, jute, pulses, fisheries, tea pockets and orchard products remain central to livelihoods.",
    festivals: "Durga Puja, chariot festivals and river-linked celebrations give the east a strong public cultural pulse.",
    cinema: "The east contributes literary cinema, regional storytelling, music traditions and heritage-based productions.",
  },
  south: {
    culture: "Temple towns, classical arts, layered linguistic identities and deeply rooted food traditions define the south.",
    climate: "Coasts, plateaus and hill belts create a mix of humid maritime weather and milder upland climates.",
    lifestyle: "Education hubs, IT cities, temple tourism, port economies and strong local community networks all coexist here.",
    jewelry: "Temple jewelry, silk drapes, gold accents and ceremonial flower styling are iconic in the south.",
    crafts: "Silk weaving, wood carving, bronze work, handloom and natural-fiber crafts all remain culturally important.",
    education: "Major southern cities are packed with universities, medical colleges, engineering campuses and research centers.",
    innovation: "India's strongest IT, biotech, deep-tech and startup ecosystems are concentrated in southern corridors.",
    industries: "IT services, electronics, automobiles, textiles, ports, pharmaceuticals and tourism drive growth here.",
    agri: "Rice, spices, coconut, coffee, banana, sugarcane and plantation crops define many southern food landscapes.",
    festivals: "Pongal, Onam, Ugadi and temple festivals make the calendar highly seasonal and community-driven.",
    cinema: "The south powers several major film industries with big studio ecosystems and star-driven storytelling.",
  },
  northeast: {
    culture: "Indigenous languages, bamboo craft, community festivals and music-rich traditions give the northeast a distinct cultural voice.",
    climate: "Cloud forests, heavy rainfall, river valleys and highland climates make the northeast ecologically diverse.",
    lifestyle: "Hillside towns, border trade, handloom traditions, music scenes and close-knit communities shape everyday life.",
    jewelry: "Beadwork, woven wraps, silver accents and community-specific ceremonial attire are major visual signatures.",
    crafts: "Handloom weaving, bamboo craft, cane work and organic textile traditions are cultural mainstays.",
    education: "Regional capitals host central universities, technical campuses and professional institutes serving wide catchments.",
    innovation: "Digital inclusion, tourism platforms, music entrepreneurship and agri-processing are fast-emerging themes.",
    industries: "Tea, handloom, handicrafts, tourism, bamboo, food processing and energy projects are key sectors.",
    agri: "Tea, rice, oranges, pineapple, spices, bamboo and horticulture products are especially visible.",
    festivals: "Community harvest festivals and culture-led tourism events are major public highlights.",
    cinema: "The region is increasingly visible in independent cinema, music videos and landscape-focused storytelling.",
  },
  islands: {
    culture: "Island communities blend maritime life, layered histories and small-scale ceremonial traditions.",
    climate: "Tropical humidity, sea breezes and monsoon cycles define both livelihood patterns and travel seasons.",
    lifestyle: "Fishing, tourism, coastal services and tightly knit settlements shape day-to-day life.",
    jewelry: "Shell accents, lightweight festive dressing and coastal craft motifs feel especially rooted here.",
    crafts: "Natural fibers, shell work, boat-linked craft and island souvenirs play a visible role.",
    education: "Island centers rely on public colleges, vocational institutes and mainland academic linkages.",
    innovation: "Sustainability, marine services, digital outreach and tourism infrastructure are the strongest emerging themes.",
    industries: "Tourism, fisheries, coir, marine services and public-sector provisioning dominate the economy.",
    agri: "Coconut, spices, fisheries and tropical produce sustain many island households.",
    festivals: "Community events, tourism seasons and maritime celebrations animate the public calendar.",
    cinema: "The islands often appear in travel cinema, scenic montages and destination-based visual storytelling.",
  },
  union: {
    culture: "Union territories often combine administrative significance with distinct local heritage and hybrid identities.",
    climate: "Urban density, coastal settings or mountain geography shape each union territory in very different ways.",
    lifestyle: "Government institutions, tourism pockets, compact city life and hybrid cultures make these regions stand out.",
    jewelry: "Regional attire often blends neighboring state influences with local ceremonial details.",
    crafts: "UT craft stories are usually shaped by local heritage markets and nearby state traditions.",
    education: "Compact geographies often focus on flagship colleges, public universities and specialized institutes.",
    innovation: "Administrative modernization, public services and tourism-led digital experiences are especially visible here.",
    industries: "Services, tourism, public administration, heritage commerce and light manufacturing are common drivers.",
    agri: "Agriculture is often selective here, with niche produce, peri-urban farming or island-based livelihoods.",
    festivals: "Public celebrations often mix state-level influence with local civic and heritage festivals.",
    cinema: "UTs regularly appear as scenic backdrops, urban frames or heritage locations in Indian media.",
  },
};

const stateSignatureMap = {
  "jammu-kashmir": { food: ["Wazwan feasts", "Kahwa", "Rogan josh"], festival: "Tulip season and shrine-linked cultural gatherings", gi: ["Kashmir saffron", "Pashmina", "Kani shawl"], cinema: "The valley remains one of the most iconic visual backdrops in Hindi cinema." },
  ladakh: { food: ["Thukpa", "Skyu", "Butter tea"], festival: "Losar and monastic festival circuits", gi: ["Ladakhi pashmina", "Apricot craft markets"], cinema: "Ladakh powers high-altitude adventure visuals and travel-driven film storytelling." },
  "himachal-pradesh": { food: ["Siddu", "Madra", "Himachali dham"], festival: "Kullu Dussehra and mountain fairs", gi: ["Kullu shawl", "Kangra tea"], cinema: "Hill roads, cedar forests and valley towns make Himachal a favorite shoot region." },
  punjab: { food: ["Makki di roti", "Sarson da saag", "Lassi"], festival: "Baisakhi and gurdwara-centered celebrations", gi: ["Basmati belts", "Phulkari craft"], cinema: "Punjabi cinema and music-video culture give the state a huge visual footprint." },
  chandigarh: { food: ["Punjabi platters", "Street chaat", "Cafe culture"], festival: "Rose Festival and civic cultural events", gi: ["Design-led craft markets", "Phulkari retail circuits"], cinema: "Chandigarh often appears in polished urban montages and youth-driven films." },
  haryana: { food: ["Bajra khichri", "Kadhi", "Lassi"], festival: "Surajkund craft season and harvest gatherings", gi: ["Basmati rice", "Rural handloom circuits"], cinema: "Haryana's sports and small-town stories increasingly feed streaming-era narratives." },
  delhi: { food: ["Chaat", "Paranthe", "Mughlai street food"], festival: "Republic-season spectacle and citywide festive diversity", gi: ["Heritage food lanes", "Craft corridors"], cinema: "Delhi anchors political drama, urban coming-of-age stories and heritage shoots." },
  uttarakhand: { food: ["Kafuli", "Aloo ke gutke", "Bal mithai"], festival: "Char Dham season and local jatras", gi: ["Pahadi rajma", "Ringal craft"], cinema: "Riverfronts, yoga hubs and mountain towns shape Uttarakhand's screen identity." },
  "uttar-pradesh": { food: ["Tunday kebabs", "Petha", "Banarasi sweets"], festival: "Deep spiritual calendars from Kashi to Ayodhya", gi: ["Banarasi saree", "Lucknow chikankari", "Agra petha"], cinema: "UP powers period drama, sacred-city stories and heartland screen narratives." },
  rajasthan: { food: ["Dal baati churma", "Ghevar", "Laal maas"], festival: "Desert fairs and grand palace festivals", gi: ["Blue pottery", "Kota doria", "Mojari craft"], cinema: "Forts and desert expanses make Rajasthan a classic cinematic spectacle state." },
  gujarat: { food: ["Dhokla", "Undhiyu", "Thepla"], festival: "Navratri garba season", gi: ["Patola", "Bandhani", "Gir Kesar mango"], cinema: "Gujarat often appears in entrepreneurial stories and heritage-coast visuals." },
  "dnh-dd": { food: ["Coastal seafood", "Gujarati thalis", "Millet dishes"], festival: "Beach-town celebrations and folk fairs", gi: ["Diu heritage crafts", "Tribal souvenir markets"], cinema: "Seaside forts and quiet promenades give the UT a niche location appeal." },
  "madhya-pradesh": { food: ["Poha-jalebi", "Bhutte ka kees", "Mawa bati"], festival: "Temple fairs and forest-edge celebrations", gi: ["Maheshwari saree", "Chanderi"], cinema: "Wildlife parks and temple complexes make MP a strong destination for shoots." },
  chhattisgarh: { food: ["Chila", "Fara", "Red-ant chutney traditions"], festival: "Bastar Dussehra and tribal ceremonial calendars", gi: ["Kosa silk", "Bell metal craft"], cinema: "Chhattisgarh is increasingly visible through tribal arts and landscape documentaries." },
  bihar: { food: ["Litti chokha", "Thekua", "Khaja"], festival: "Chhath and deeply rooted ritual observances", gi: ["Madhubani art", "Bhagalpuri silk"], cinema: "Bihar's literary, political and migration stories shape many screen narratives." },
  jharkhand: { food: ["Dhuska", "Rugra dishes", "Pitha"], festival: "Sarhul and tribal community festivals", gi: ["Sohrai-Khovar art", "Tasar silk"], cinema: "Jharkhand adds forest, plateau and mining-belt settings to realism-driven cinema." },
  sikkim: { food: ["Momos", "Thukpa", "Gundruk"], festival: "Losoong and monastery-linked celebrations", gi: ["Large cardamom", "Sikkim handloom"], cinema: "Sikkim's alpine roads and monastery towns create postcard-like film frames." },
  "west-bengal": { food: ["Macher jhol", "Rosogolla", "Kathi rolls"], festival: "Durga Puja as a full-scale public arts spectacle", gi: ["Darjeeling tea", "Baluchari saree", "Shantiniketan leather"], cinema: "Bengal sustains a powerful literary and auteur cinema tradition." },
  odisha: { food: ["Dalma", "Chhena poda", "Pakhala"], festival: "Rath Yatra and temple calendars", gi: ["Odissi ikat", "Silver filigree", "Pipili applique"], cinema: "Temple routes and coastal heritage shape Odisha's visual storytelling." },
  maharashtra: { food: ["Vada pav", "Puran poli", "Misal pav"], festival: "Ganesh Utsav and city-scale cultural programming", gi: ["Paithani", "Kolhapuri chappal", "Alphonso mango"], cinema: "Maharashtra is the heartland of India's mainstream film economy." },
  goa: { food: ["Goan fish curry", "Bebinca", "Poi"], festival: "Carnival and church-feast calendars", gi: ["Feni", "Kunbi weaving"], cinema: "Goa is a favorite for festival culture, destination shoots and music-led visuals." },
  telangana: { food: ["Hyderabadi biryani", "Sakinalu", "Haleem"], festival: "Bathukamma and old-city festive traditions", gi: ["Pochampally ikat", "Silver filigree"], cinema: "Hyderabad supports studio-scale production and pan-Indian screen work." },
  "andhra-pradesh": { food: ["Gongura", "Pulihora", "Pesarattu"], festival: "Sankranti and temple-town celebrations", gi: ["Kalamkari", "Kondapalli toys", "Tirupati laddu"], cinema: "The state is deeply linked with Telugu cinema and devotional visual culture." },
  karnataka: { food: ["Bisi bele bath", "Mysore pak", "Neer dosa"], festival: "Mysuru Dasara and regional temple festivals", gi: ["Mysore silk", "Ilkal saree", "Bidriware"], cinema: "Karnataka blends Kannada cinema, indie music culture and heritage-city visuals." },
  kerala: { food: ["Sadya", "Appam and stew", "Malabar biryani"], festival: "Onam and temple-arts calendars", gi: ["Aranmula mirror", "Kasavu", "Malabar pepper"], cinema: "Kerala's film culture is known for visual realism and strong storytelling craft." },
  "tamil-nadu": { food: ["Idli-dosa", "Chettinad cuisine", "Filter coffee"], festival: "Pongal and giant temple-festival circuits", gi: ["Kanchipuram silk", "Tanjore art", "Madurai sungudi"], cinema: "Tamil Nadu powers one of India's most influential film industries." },
  puducherry: { food: ["Tamil-French fusion plates", "Seafood curries", "Cafe desserts"], festival: "Promenade celebrations and heritage-cultural events", gi: ["Auroville craft stores", "Pondy design markets"], cinema: "Puducherry often appears in nostalgic coastal and art-house screen settings." },
  lakshadweep: { food: ["Tuna dishes", "Coconut-rich curries", "Island breads"], festival: "Island community celebrations tied to mosque and sea life", gi: ["Coir products", "Marine craft souvenirs"], cinema: "Its lagoons fit destination visuals and marine travel storytelling." },
  "andaman-nicobar": { food: ["Seafood platters", "Coconut dishes", "Island produce"], festival: "Island tourism seasons and local cultural gatherings", gi: ["Shell craft", "Nicobari handicraft traditions"], cinema: "The islands deliver tropical cinematic imagery and historical-tourism visuals." },
  assam: { food: ["Mekhela-inspired festive spreads", "Khar", "Pitha"], festival: "Bihu across the agricultural calendar", gi: ["Assam tea", "Muga silk", "Joha rice"], cinema: "Tea estates and river landscapes strongly shape Assam's visual identity." },
  "arunachal-pradesh": { food: ["Thukpa", "Bamboo shoot dishes", "Smoked meats"], festival: "Losar, Solung and community harvest festivals", gi: ["Yak wool craft", "Monpa weaving"], cinema: "Highland monasteries and dramatic ridgelines make Arunachal visually striking." },
  nagaland: { food: ["Smoked pork", "Axone dishes", "Sticky rice"], festival: "Hornbill Festival and tribe-led cultural showcases", gi: ["Naga shawls", "Bead craft"], cinema: "Nagaland's music culture and festival visuals are central to its screen appeal." },
  manipur: { food: ["Eromba", "Chamthong", "Black rice desserts"], festival: "Yaoshang and Ras Lila traditions", gi: ["Phanek weaving", "Black pottery"], cinema: "Manipur links dance, martial arts and sport-driven narratives on screen." },
  mizoram: { food: ["Bai", "Smoked pork", "Sticky rice"], festival: "Chapchar Kut and community music culture", gi: ["Puan textiles", "Bamboo craft"], cinema: "Mizoram's hills and choir-rich culture suit intimate documentary storytelling." },
  tripura: { food: ["Mui borok", "Wahan mosdeng", "Rice cakes"], festival: "Kharchi Puja and palace-linked festivities", gi: ["Rignai weaving", "Bamboo craft"], cinema: "Tripura contributes palace, lake and borderland settings to visual stories." },
  meghalaya: { food: ["Jadoh", "Dohneiiong", "Tungrymbai"], festival: "Wangala and music-season celebrations", gi: ["Eri silk", "Cane craft"], cinema: "Cloud forests and root bridges make Meghalaya instantly cinematic." },
};

/* ─────────────────────────────────────────────────────────────
   GI Products Map  — type: craft | food | textile | art | agri
   ───────────────────────────────────────────────────────────── */
const giProductsMap = {
  "jammu-kashmir": [
    { name: "Kashmir Saffron", type: "agri" },
    { name: "Pashmina (Cashmere)", type: "textile" },
    { name: "Kani Shawl", type: "textile" },
    { name: "Kashmiri Sozni Embroidery", type: "craft" },
    { name: "Kashmir Paper Mâché", type: "craft" },
    { name: "Kashmiri Walnut Wood Carving", type: "craft" },
    { name: "Kashmir Carpet", type: "craft" },
  ],
  ladakh: [
    { name: "Changthangi Pashmina (Ladakhi Pashm)", type: "textile" },
    { name: "Ladakhi Apricot Products", type: "agri" },
    { name: "Seabuckthorn (Leh Berry)", type: "agri" },
    { name: "Ladakhi Handloom", type: "textile" },
  ],
  "himachal-pradesh": [
    { name: "Kullu Shawl", type: "textile" },
    { name: "Kangra Tea", type: "agri" },
    { name: "Chamba Rumal (Embroidery)", type: "craft" },
    { name: "Kangra Paintings", type: "art" },
    { name: "Kinnauri Shawl", type: "textile" },
    { name: "Himachal Apple", type: "agri" },
  ],
  punjab: [
    { name: "Phulkari", type: "craft" },
    { name: "Basmati Rice", type: "agri" },
    { name: "Punjabi Jutti (Mojari)", type: "craft" },
    { name: "Amritsar Wari Dal", type: "food" },
    { name: "Ludhiana Hosiery", type: "textile" },
  ],
  chandigarh: [
    { name: "Chandigarh Phulkari Retail Circuit", type: "craft" },
    { name: "Rock Garden Mosaic Craft", type: "art" },
  ],
  haryana: [
    { name: "Basmati Rice (Haryana belt)", type: "agri" },
    { name: "Phulkari (shared heritage)", type: "craft" },
    { name: "Panipat Blanket & Shoddy", type: "textile" },
    { name: "Faridabad Handloom", type: "textile" },
  ],
  delhi: [
    { name: "Delhi Zardozi Embroidery", type: "craft" },
    { name: "Delhi Sarkanda Grass Craft", type: "craft" },
    { name: "Delhi Silver Filigree", type: "craft" },
    { name: "Old Delhi Heritage Foods", type: "food" },
  ],
  uttarakhand: [
    { name: "Pahadi Rajma (Kidney Bean)", type: "agri" },
    { name: "Ringal Bamboo Craft", type: "craft" },
    { name: "Uttarakhand Timber & Woodcraft", type: "craft" },
    { name: "Chyura Butter Oil", type: "agri" },
    { name: "Aipan Folk Art", type: "art" },
    { name: "Tehri Madua (Finger Millet)", type: "agri" },
  ],
  "uttar-pradesh": [
    { name: "Banarasi Silk Saree", type: "textile" },
    { name: "Lucknow Chikankari", type: "craft" },
    { name: "Agra Petha", type: "food" },
    { name: "Bhadohi Carpet", type: "craft" },
    { name: "Varanasi Glass Beadwork", type: "craft" },
    { name: "Mathura Peda", type: "food" },
    { name: "Moradabad Brassware", type: "craft" },
    { name: "Saharanpur Wood Carving", type: "craft" },
    { name: "Lucknow Zardozi", type: "craft" },
    { name: "Allahabad Surkha Guava", type: "agri" },
    { name: "Meerut Sports Goods", type: "craft" },
  ],
  rajasthan: [
    { name: "Blue Pottery of Jaipur", type: "craft" },
    { name: "Kota Doria Fabric", type: "textile" },
    { name: "Jodhpur Mojari", type: "craft" },
    { name: "Sanganer Hand Block Print", type: "craft" },
    { name: "Bikaner Bhuujia", type: "food" },
    { name: "Rajasthani Lacquerware", type: "craft" },
    { name: "Jaisalmer Stone Carving", type: "craft" },
    { name: "Mathania Red Chilli", type: "agri" },
    { name: "Jodhpuri Bandhani", type: "textile" },
    { name: "Barmer Applique", type: "craft" },
  ],
  gujarat: [
    { name: "Patola (Double Ikat) Fabric", type: "textile" },
    { name: "Bandhani Fabric", type: "textile" },
    { name: "Gir Kesar Mango", type: "agri" },
    { name: "Kutch Embroidery", type: "craft" },
    { name: "Surat Zari Craft", type: "craft" },
    { name: "Wagad Paintings", type: "art" },
    { name: "Ahmedabad Printed Cotton", type: "textile" },
    { name: "Gujarat Saffron (Jamnagar)", type: "agri" },
    { name: "Rogan Art", type: "art" },
  ],
  "dnh-dd": [
    { name: "Diu Heritage Crafts", type: "craft" },
    { name: "Tribal Warli-influenced Souvenirs", type: "art" },
    { name: "Coconut Shell Craft (coastal)", type: "craft" },
  ],
  "madhya-pradesh": [
    { name: "Maheshwari Saree", type: "textile" },
    { name: "Chanderi Fabric", type: "textile" },
    { name: "Bagh Hand Block Print", type: "craft" },
    { name: "Gond Paintings", type: "art" },
    { name: "Tikamgarh Stone Carving", type: "craft" },
    { name: "Betul Sesame", type: "agri" },
    { name: "Rewa White Tiger Heritage Craft", type: "art" },
  ],
  chhattisgarh: [
    { name: "Kosa Silk (Tussar)", type: "textile" },
    { name: "Dhokra Bell Metal Craft", type: "craft" },
    { name: "Bastar Iron Craft", type: "craft" },
    { name: "Kondagaon Terracotta", type: "craft" },
    { name: "Bastar Tribal Painting", type: "art" },
    { name: "Chhattisgarhi Aromatic Rice", type: "agri" },
  ],
  bihar: [
    { name: "Madhubani / Mithila Painting", type: "art" },
    { name: "Bhagalpuri Silk (Tussar)", type: "textile" },
    { name: "Sujni Embroidery", type: "craft" },
    { name: "Shahi Lychee (Muzaffarpur)", type: "agri" },
    { name: "Katarni Rice", type: "agri" },
    { name: "Bihar Sikki Grass Craft", type: "craft" },
  ],
  jharkhand: [
    { name: "Tasar Silk", type: "textile" },
    { name: "Sohrai–Khovar Painting", type: "art" },
    { name: "Dhokra Craft", type: "craft" },
    { name: "Paitkar Scroll Painting", type: "art" },
    { name: "Jharkhand Lac Bangle", type: "craft" },
  ],
  sikkim: [
    { name: "Large Cardamom (Elaichi)", type: "agri" },
    { name: "Sikkim Organic Tea", type: "agri" },
    { name: "Sikkim Handloom Weaving", type: "textile" },
    { name: "Singtam Orange", type: "agri" },
  ],
  "west-bengal": [
    { name: "Darjeeling Tea", type: "agri" },
    { name: "Baluchari Saree", type: "textile" },
    { name: "Shantiniketan Leather Goods", type: "craft" },
    { name: "Kantha Stitch Embroidery", type: "craft" },
    { name: "Bishnupur Terracotta", type: "craft" },
    { name: "Dhaniakhali Saree", type: "textile" },
    { name: "Kolkata Rosogolla", type: "food" },
    { name: "Fazli Mango (Murshidabad)", type: "agri" },
  ],
  odisha: [
    { name: "Sambalpuri Ikat Saree", type: "textile" },
    { name: "Pattachitra Scroll Painting", type: "art" },
    { name: "Cuttack Silver Filigree", type: "craft" },
    { name: "Pipili Applique", type: "craft" },
    { name: "Koraput Kalajeera Rice", type: "agri" },
    { name: "Odisha Rasagola", type: "food" },
    { name: "Dhokra Craft of Odisha", type: "craft" },
  ],
  maharashtra: [
    { name: "Paithani Silk Saree", type: "textile" },
    { name: "Kolhapuri Chappal", type: "craft" },
    { name: "Alphonso Mango (Hapus)", type: "agri" },
    { name: "Nagpur Orange", type: "agri" },
    { name: "Aurangabad Himroo Textile", type: "textile" },
    { name: "Solapur Terry Towel", type: "craft" },
    { name: "Warli Tribal Painting", type: "art" },
    { name: "Mahabaleshwar Strawberry", type: "agri" },
    { name: "Nashik Table Grapes", type: "agri" },
    { name: "Kolhapuri Jaggery (Gul)", type: "food" },
  ],
  goa: [
    { name: "Goa Feni (Cashew & Coconut)", type: "food" },
    { name: "Kunbi Saree", type: "textile" },
    { name: "Goan Bebinca (Sweet)", type: "food" },
    { name: "Goa Cashew Products", type: "agri" },
    { name: "Aldona Jackfruit Harvest", type: "agri" },
  ],
  telangana: [
    { name: "Pochampally Ikat Fabric", type: "textile" },
    { name: "Nirmal Toys & Lacquerware", type: "craft" },
    { name: "Hyderabadi Haleem", type: "food" },
    { name: "Gadwal Saree", type: "textile" },
    { name: "Karimnagar Silver Filigree", type: "craft" },
    { name: "Warangal Durrie", type: "craft" },
    { name: "Bidriware (Bidar)", type: "craft" },
  ],
  "andhra-pradesh": [
    { name: "Kalamkari (Srikalahasti)", type: "art" },
    { name: "Kondapalli Toys", type: "craft" },
    { name: "Tirupati Laddu (GI certified)", type: "food" },
    { name: "Bandar Laddu", type: "food" },
    { name: "Uppada Jamdani Saree", type: "textile" },
    { name: "Dharmavaram Silk Saree", type: "textile" },
    { name: "Etikoppaka Lacquer Toys", type: "craft" },
    { name: "Guntur Sannam Chilli", type: "agri" },
    { name: "Nellore Brown Shrimp", type: "agri" },
  ],
  karnataka: [
    { name: "Mysore Silk Saree", type: "textile" },
    { name: "Bidriware", type: "craft" },
    { name: "Ilkal Saree", type: "textile" },
    { name: "Coorg Cardamom", type: "agri" },
    { name: "Dharwad Pedha", type: "food" },
    { name: "Coorg Coffee", type: "agri" },
    { name: "Udupi Mallige Jasmine", type: "agri" },
    { name: "Bangalore Rose Onion", type: "agri" },
    { name: "Kasuti Embroidery (Karnataka)", type: "craft" },
    { name: "Channapatna Toys (Lacquerware)", type: "craft" },
  ],
  kerala: [
    { name: "Aranmula Kannadi (Metal Mirror)", type: "craft" },
    { name: "Kasavu Saree", type: "textile" },
    { name: "Malabar Pepper", type: "agri" },
    { name: "Alleppey Coir Products", type: "craft" },
    { name: "Vazhakulam Pineapple", type: "agri" },
    { name: "Wayanad Jeerakasala Rice", type: "agri" },
    { name: "Palakkad Matta Rice", type: "agri" },
    { name: "Kannur Handloom", type: "textile" },
    { name: "Screw Pine (Kora Grass) Craft", type: "craft" },
    { name: "Thrissur Gold Ornament Craft", type: "craft" },
  ],
  "tamil-nadu": [
    { name: "Kanchipuram Silk Saree", type: "textile" },
    { name: "Madurai Sungudi Saree", type: "textile" },
    { name: "Thanjavur Painting (Gold Foil)", type: "art" },
    { name: "Palani Panchamirtham", type: "food" },
    { name: "Coimbatore Wet Grinder", type: "craft" },
    { name: "Erode Turmeric", type: "agri" },
    { name: "Nilgiris Tea", type: "agri" },
    { name: "Dindigul Lock", type: "craft" },
    { name: "Thanjavur Doll", type: "craft" },
    { name: "Chettinad Masala", type: "food" },
    { name: "Salem Sago (Sabudana)", type: "agri" },
  ],
  puducherry: [
    { name: "Auroville Craft Products", type: "craft" },
    { name: "Puducherry Pottery", type: "craft" },
    { name: "Pondy Heritage Handloom", type: "textile" },
  ],
  lakshadweep: [
    { name: "Alleppey-style Coir Products", type: "craft" },
    { name: "Coconut Shell Craft", type: "craft" },
    { name: "Marine Shell Craft", type: "craft" },
  ],
  "andaman-nicobar": [
    { name: "Shell Craft", type: "craft" },
    { name: "Nicobari Handicrafts", type: "craft" },
    { name: "Padauk Wood Craft", type: "craft" },
    { name: "Cane & Bamboo Basket Weaving", type: "craft" },
  ],
  assam: [
    { name: "Assam CTC & Orthodox Tea", type: "agri" },
    { name: "Muga Silk (Golden Silk)", type: "textile" },
    { name: "Joha Rice (Scented)", type: "agri" },
    { name: "Pat Silk of Assam", type: "textile" },
    { name: "Tezpur Litchi", type: "agri" },
    { name: "Assam Bamboo & Cane Craft", type: "craft" },
    { name: "Eri Silk", type: "textile" },
  ],
  "arunachal-pradesh": [
    { name: "Yak Wool Products", type: "textile" },
    { name: "Monpa Weaving", type: "textile" },
    { name: "Apatani Tribal Textile", type: "textile" },
    { name: "Bamboo & Cane Craft (Arunachal)", type: "craft" },
    { name: "Adi Gallong Weaving", type: "textile" },
  ],
  nagaland: [
    { name: "Naga Shawl", type: "textile" },
    { name: "Naga Bead Craft", type: "craft" },
    { name: "Hornbill Festival Tribal Craft", type: "craft" },
    { name: "Naga Smoked Pork (Traditional)", type: "food" },
    { name: "Naga King Chilli (Bhut Jolokia)", type: "agri" },
  ],
  manipur: [
    { name: "Manipuri Phanek Weaving", type: "textile" },
    { name: "Black Pottery (Longpi)", type: "craft" },
    { name: "Chakhao (Black Rice)", type: "agri" },
    { name: "Shaphee Lanphee Weaving", type: "textile" },
    { name: "Kang Chak (Reed Mat)", type: "craft" },
  ],
  mizoram: [
    { name: "Puan Textile", type: "textile" },
    { name: "Bamboo Craft Products", type: "craft" },
    { name: "Mizo Puanchei Weaving", type: "textile" },
    { name: "Thangchhuah (Cane Furniture)", type: "craft" },
  ],
  tripura: [
    { name: "Rignai Weaving", type: "textile" },
    { name: "Bamboo Craft", type: "craft" },
    { name: "Tripuri Cane Furniture", type: "craft" },
    { name: "Tripura Queen Pineapple", type: "agri" },
    { name: "Munga Silk (Tripura)", type: "textile" },
  ],
  meghalaya: [
    { name: "Eri Silk (Meghalaya)", type: "textile" },
    { name: "Cane & Bamboo Craft", type: "craft" },
    { name: "Shillong Plaid Textile", type: "textile" },
    { name: "Lakadong Turmeric", type: "agri" },
    { name: "Meghalaya Ginger", type: "agri" },
    { name: "Khasi & Jaintia Pineapple", type: "agri" },
  ],
};

/* ─────────────────────────────────────────────────────────────
   Education Map  — top institutes per state / UT
   ───────────────────────────────────────────────────────────── */
const educationMap = {
  "jammu-kashmir": [
    { name: "University of Kashmir", type: "Central University" },
    { name: "NIT Srinagar", type: "National Institute of Technology" },
    { name: "IIM Jammu", type: "IIM — Management" },
    { name: "IUST Awantipora", type: "Islamic University of Science & Technology" },
  ],
  ladakh: [
    { name: "Central University of Ladakh", type: "Central University" },
    { name: "Eliezer Joldan Memorial College", type: "Degree College" },
  ],
  "himachal-pradesh": [
    { name: "IIT Mandi", type: "IIT — Technology" },
    { name: "NIT Hamirpur", type: "National Institute of Technology" },
    { name: "HP University Shimla", type: "State University (est. 1970)" },
    { name: "Jaypee University of IT", type: "Deemed University" },
  ],
  punjab: [
    { name: "IIT Ropar", type: "IIT — Technology" },
    { name: "Punjab University (Chandigarh)", type: "State Central University" },
    { name: "Thapar Institute of Engineering", type: "Deemed University" },
    { name: "PEC University of Technology", type: "Deemed University" },
  ],
  chandigarh: [
    { name: "Punjab University", type: "Central University" },
    { name: "PGIMER", type: "Premier Medical Research Institute" },
    { name: "Chandigarh University", type: "Private University" },
  ],
  haryana: [
    { name: "NIT Kurukshetra", type: "National Institute of Technology" },
    { name: "Kurukshetra University", type: "State University" },
    { name: "MDU Rohtak", type: "State University" },
    { name: "Ashoka University, Sonipat", type: "Liberal Arts University" },
  ],
  delhi: [
    { name: "IIT Delhi", type: "IIT — Technology (QS top 200 globally)" },
    { name: "AIIMS New Delhi", type: "Premier Medical Institute" },
    { name: "JNU (Jawaharlal Nehru University)", type: "Central University" },
    { name: "Delhi University", type: "Central University (90+ colleges)" },
    { name: "IIIT Delhi", type: "Institute of Information Technology" },
  ],
  uttarakhand: [
    { name: "IIT Roorkee", type: "IIT — Technology (India's oldest, est. 1847)" },
    { name: "HNB Garhwal University", type: "Central University" },
    { name: "UPES Dehradun", type: "Energy & Technology University" },
    { name: "Graphic Era University", type: "Deemed University" },
  ],
  "uttar-pradesh": [
    { name: "IIT Kanpur", type: "IIT — Technology (research excellence)" },
    { name: "IIT BHU Varanasi", type: "IIT — Technology" },
    { name: "IIM Lucknow", type: "IIM — Management" },
    { name: "BHU (Banaras Hindu University)", type: "Central University" },
    { name: "AMU Aligarh", type: "Aligarh Muslim University (Central)" },
  ],
  rajasthan: [
    { name: "BITS Pilani", type: "Deemed University (India's top private)" },
    { name: "IIT Jodhpur", type: "IIT — Technology" },
    { name: "MNIT Jaipur", type: "National Institute of Technology" },
    { name: "University of Rajasthan", type: "State University (est. 1947)" },
  ],
  gujarat: [
    { name: "IIT Gandhinagar", type: "IIT — Technology" },
    { name: "IIM Ahmedabad", type: "IIM — Globally ranked business school" },
    { name: "CEPT University Ahmedabad", type: "Planning & Technology" },
    { name: "Gujarat University", type: "State University" },
  ],
  "dnh-dd": [
    { name: "Government Colleges in Daman & Silvassa", type: "Regional Colleges" },
  ],
  "madhya-pradesh": [
    { name: "IIT Indore", type: "IIT — Technology" },
    { name: "IIM Indore", type: "IIM — Management" },
    { name: "MANIT Bhopal", type: "National Institute of Technology" },
    { name: "Barkatullah University Bhopal", type: "State University" },
  ],
  chhattisgarh: [
    { name: "IIT Bhilai", type: "IIT — Technology" },
    { name: "NIT Raipur", type: "National Institute of Technology" },
    { name: "Pt. Ravishankar Shukla University", type: "State University" },
    { name: "Hidayatullah National Law University", type: "National Law University" },
  ],
  bihar: [
    { name: "IIT Patna", type: "IIT — Technology" },
    { name: "NIT Patna", type: "National Institute of Technology" },
    { name: "Nalanda University (revived ancient)", type: "International University" },
    { name: "Patna University", type: "State University (est. 1917)" },
  ],
  jharkhand: [
    { name: "IIT (ISM) Dhanbad", type: "IIT — Mining & Technology (est. 1926)" },
    { name: "NIT Jamshedpur", type: "National Institute of Technology" },
    { name: "Ranchi University", type: "State University" },
    { name: "XLRI Jamshedpur", type: "Premier Management Institute" },
  ],
  sikkim: [
    { name: "Sikkim University", type: "Central University" },
    { name: "SMIT Majitar", type: "Sikkim Manipal Institute of Technology" },
  ],
  "west-bengal": [
    { name: "IIT Kharagpur", type: "IIT — Technology (India's first IIT, est. 1951)" },
    { name: "IIM Calcutta", type: "IIM — India's first management school" },
    { name: "Jadavpur University", type: "State University (top engineering)" },
    { name: "Calcutta University", type: "State University (est. 1857)" },
    { name: "Presidency University", type: "Liberal Arts & Sciences" },
  ],
  odisha: [
    { name: "IIT Bhubaneswar", type: "IIT — Technology" },
    { name: "NIT Rourkela", type: "National Institute of Technology" },
    { name: "KIIT University", type: "Deemed University" },
    { name: "Utkal University", type: "State University (est. 1943)" },
  ],
  maharashtra: [
    { name: "IIT Bombay", type: "IIT — Technology (QS top 150 globally)" },
    { name: "TIFR Mumbai", type: "Tata Institute of Fundamental Research" },
    { name: "Mumbai University", type: "State University (800+ colleges)" },
    { name: "Savitribai Phule Pune University", type: "State University" },
    { name: "IIM Nagpur", type: "IIM — Management" },
  ],
  goa: [
    { name: "Goa University", type: "State University" },
    { name: "NIT Goa", type: "National Institute of Technology" },
    { name: "BITS Pilani, Goa Campus", type: "Deemed University" },
  ],
  telangana: [
    { name: "IIT Hyderabad", type: "IIT — Technology" },
    { name: "University of Hyderabad", type: "Central University" },
    { name: "ISB Hyderabad", type: "Indian School of Business (global MBA)" },
    { name: "BITS Pilani, Hyderabad Campus", type: "Deemed University" },
  ],
  "andhra-pradesh": [
    { name: "IIT Tirupati", type: "IIT — Technology" },
    { name: "IISER Tirupati", type: "Science & Research" },
    { name: "VIT University Vellore", type: "Top Private Deemed University" },
    { name: "Andhra University", type: "State University (est. 1926)" },
  ],
  karnataka: [
    { name: "IISc Bangalore", type: "Indian Institute of Science (top research globally)" },
    { name: "IIM Bangalore", type: "IIM — Management (top 3)" },
    { name: "NLSIU Bangalore", type: "National Law School (India's #1 law school)" },
    { name: "IIIT Bangalore", type: "Information Technology" },
    { name: "Manipal Academy of Higher Education", type: "Deemed University" },
  ],
  kerala: [
    { name: "IIT Palakkad", type: "IIT — Technology" },
    { name: "NIT Calicut", type: "National Institute of Technology" },
    { name: "Cochin University (CUSAT)", type: "State University" },
    { name: "Amrita Vishwa Vidyapeetham", type: "Top Private Deemed University" },
    { name: "Kerala University", type: "State University" },
  ],
  "tamil-nadu": [
    { name: "IIT Madras", type: "IIT — Technology (India's #1 by NIRF)" },
    { name: "Anna University", type: "State Technical University (500+ colleges)" },
    { name: "NIT Trichy", type: "National Institute of Technology" },
    { name: "IIM Trichy", type: "IIM — Management" },
    { name: "Vellore Institute of Technology (VIT)", type: "Top Private University" },
  ],
  puducherry: [
    { name: "Pondicherry University", type: "Central University" },
    { name: "Auroville Learning Community", type: "Alternative Education Centre" },
  ],
  lakshadweep: [
    { name: "Lakshadweep College of Education", type: "Regional College" },
    { name: "Community Vocational Resource Centres", type: "Skill Training Institutes" },
  ],
  "andaman-nicobar": [
    { name: "Dr. Bhimrao Ambedkar University (BAUAG)", type: "Regional University" },
    { name: "NIOT Port Blair Field Station", type: "Ocean Research Institute" },
  ],
  assam: [
    { name: "IIT Guwahati", type: "IIT — Technology (premier NE India institute)" },
    { name: "Gauhati University", type: "Central University" },
    { name: "Cotton University Guwahati", type: "State University (est. 1901)" },
    { name: "Assam Engineering College", type: "State Engineering (est. 1947)" },
  ],
  "arunachal-pradesh": [
    { name: "NIT Arunachal Pradesh", type: "National Institute of Technology" },
    { name: "Rajiv Gandhi University", type: "Central University" },
    { name: "Don Bosco College Itanagar", type: "Degree College" },
  ],
  nagaland: [
    { name: "Nagaland University", type: "Central University" },
    { name: "NIT Nagaland", type: "National Institute of Technology" },
    { name: "St. Joseph's College Jakhama", type: "Autonomous Degree College" },
  ],
  manipur: [
    { name: "NIT Manipur", type: "National Institute of Technology" },
    { name: "Manipur University", type: "Central University" },
    { name: "RIMS Imphal", type: "Regional Institute of Medical Sciences" },
  ],
  mizoram: [
    { name: "NIT Mizoram", type: "National Institute of Technology" },
    { name: "Mizoram University", type: "Central University" },
    { name: "Pachhunga University College", type: "Autonomous College" },
  ],
  tripura: [
    { name: "NIT Agartala", type: "National Institute of Technology" },
    { name: "Tripura University", type: "Central University" },
    { name: "ICFAI University Tripura", type: "Private University" },
  ],
  meghalaya: [
    { name: "IIM Shillong", type: "IIM — Management" },
    { name: "NIT Meghalaya", type: "National Institute of Technology" },
    { name: "NEHU Shillong", type: "North-Eastern Hill University (Central)" },
    { name: "Martin Luther Christian University", type: "Private University" },
  ],
};

/* ─────────────────────────────────────────────────────────────
   Film Industry Map
   ───────────────────────────────────────────────────────────── */
const filmIndustryMap = {
  maharashtra: {
    industry: "Bollywood",
    language: "Hindi",
    notes: "World's most prolific film industry by output. Home of Filmcity, Yash Raj Films, Dharma Productions and India's biggest star system.",
    studios: "Film City Mumbai, Mehboob Studios, Natraj Studios",
    notable: "150+ Hindi films annually; Mumbai hosts Netflix, Amazon Prime India HQs. Pioneered the Indian studio system.",
    icon: "🎥",
  },
  "tamil-nadu": {
    industry: "Kollywood",
    language: "Tamil",
    notes: "South India's largest film industry. Known for mass entertainers, technical grandeur and devoted fan culture. Home of the legendary Kodambakkam studio belt.",
    studios: "Kodambakkam Studio Belt, AVM Studios, Chennai International Film Festival",
    notable: "Home of Rajinikanth, Kamal Haasan; Kollywood films increasingly cross pan-India and global borders.",
    icon: "🌟",
  },
  telangana: {
    industry: "Tollywood (Telugu)",
    language: "Telugu",
    notes: "Fastest-growing film industry in India with pan-national audience reach. Ramoji Film City is the world's largest certified film studio complex.",
    studios: "Ramoji Film City (world's largest), Annapurna Studios, Hyderabad Film Industry",
    notable: "Baahubali & RRR became global phenomena; strong VFX, production and post-production infrastructure.",
    icon: "🎞️",
  },
  "andhra-pradesh": {
    industry: "Tollywood (Telugu shared)",
    language: "Telugu",
    notes: "Shares the Telugu film universe with Telangana. Devotional cinema around Tirupati and regional rural stories are strong niches.",
    studios: "Shared with Hyderabad ecosystem; location shoots across coastal Andhra and Rayalaseema",
    notable: "Strong star fan culture and a long tradition of regional storytelling and folklore cinema.",
    icon: "🎬",
  },
  karnataka: {
    industry: "Sandalwood",
    language: "Kannada",
    notes: "Named after Mysore's sandalwood heritage. A growing industry producing quality content with a new generation of visionary filmmakers.",
    studios: "Bangalore Film Industry hub; Mysore and Coorg as shoot locations",
    notable: "Kantara (2022) became a global cultural sensation and announced Kannada cinema to the world.",
    icon: "🌿",
  },
  kerala: {
    industry: "Mollywood",
    language: "Malayalam",
    notes: "Celebrated for realistic, nuanced and deeply human storytelling. Malayalam films regularly win National Awards and screen at international festivals.",
    studios: "Thiruvananthapuram production hub; locations across backwaters, hills and heritage towns",
    notable: "Strong auteur tradition (Adoor, Shaji, Lijo Jose Pellissery); powerful global OTT footprint.",
    icon: "🌴",
  },
  "west-bengal": {
    industry: "Tollywood (Bengali)",
    language: "Bengali",
    notes: "Pioneer of Indian parallel and art cinema. Satyajit Ray's Apu Trilogy is among the greatest films ever made. Kolkata hosts a major international film festival.",
    studios: "Tollygunge Film Studios (Tollywood — the original), NFDC productions",
    notable: "Home of Satyajit Ray, Mrinal Sen, Rituparno Ghosh — defining names of world cinema.",
    icon: "🎭",
  },
  punjab: {
    industry: "Punjabi Cinema",
    language: "Punjabi",
    notes: "A rapidly growing industry powered by music-video culture, diaspora markets and a strong connection between cinema and Punjabi pop music.",
    studios: "Chandigarh and Mohali production hub; village and rural Punjab locations",
    notable: "Punjabi films and music dominate YouTube globally; massive following in UK, Canada, and Australia.",
    icon: "🎵",
  },
  assam: {
    industry: "Jollywood (Assamese)",
    language: "Assamese",
    notes: "Assamese cinema has a long artistic tradition dating to the 1930s. Tea estates, Brahmaputra riverscapes and wildlife parks are iconic visual settings.",
    studios: "Guwahati production hub; Kaziranga and Majuli Island for documentary shoots",
    notable: "Jahnu Barua's films brought Assamese cinema to the national awards circuit in the 1980s–90s.",
    icon: "🍃",
  },
  rajasthan: {
    industry: "Major Shoot Destination",
    language: "Hindi (primary) / Rajasthani",
    notes: "Rajasthan is among India's most-filmed states. Forts, palaces, deserts and vibrant havelis make it a go-to location for big-budget Bollywood and international productions.",
    studios: "No major studio hub but extensive government film promotion; Jaisalmer Film Festival",
    notable: "Thousands of Bollywood, OTT and international productions have used Jaisalmer, Udaipur, and Jodhpur as backdrops.",
    icon: "🏰",
  },
};

const regionalMusicProfiles = {
  north: { label: "a mountain folk pulse with a soft drone and bright plucked notes", tempo: 76, scale: [0, 2, 5, 7, 9], tonic: 60, wave: "triangle", drum: 138 },
  west: { label: "a festive desert-and-garba groove with hand-clap energy", tempo: 102, scale: [0, 3, 5, 7, 10], tonic: 62, wave: "sawtooth", drum: 156 },
  central: { label: "an earthy plateau rhythm with warm drones and steady beats", tempo: 88, scale: [0, 2, 3, 7, 9], tonic: 58, wave: "triangle", drum: 128 },
  east: { label: "a river-belt melody with gentle movement and bright accents", tempo: 90, scale: [0, 2, 4, 7, 9], tonic: 64, wave: "sine", drum: 144 },
  south: { label: "a temple-town groove with flowing phrases and layered rhythm", tempo: 96, scale: [0, 1, 5, 7, 8], tonic: 61, wave: "triangle", drum: 148 },
  northeast: { label: "a hill-folk pattern with airy tones and a dancing pulse", tempo: 94, scale: [0, 2, 5, 7, 10], tonic: 65, wave: "square", drum: 162 },
  islands: { label: "a breezy island sway with light percussion and marine calm", tempo: 84, scale: [0, 4, 5, 7, 9], tonic: 67, wave: "sine", drum: 118 },
  union: { label: "a hybrid urban folk ambience tuned for a compact state story", tempo: 92, scale: [0, 2, 4, 7, 11], tonic: 63, wave: "triangle", drum: 140 },
};

const traditionalDressMap = {
  "jammu-kashmir": { name: "Pheran", style: "robe", colors: ["#6b8ea6", "#f1e5d1", "#c55b3d"], pages: ["Pheran"] },
  ladakh: { name: "Goncha", style: "robe", colors: ["#8f3028", "#e8c16a", "#2d4d66"], pages: ["Goncha", "Pheran"] },
  "himachal-pradesh": { name: "Chola Dora", style: "robe", colors: ["#57738a", "#d7c3aa", "#b23d2e"], pages: ["Pattu", "Pheran"] },
  punjab: { name: "Punjabi Suit", style: "suit", colors: ["#d65a44", "#f4d37d", "#3b6d8a"], pages: ["Shalwar kameez"] },
  chandigarh: { name: "Punjabi Suit", style: "suit", colors: ["#df6b52", "#f8ddb3", "#56799b"], pages: ["Shalwar kameez"] },
  haryana: { name: "Ghagra and Kurti", style: "skirt", colors: ["#bf4e45", "#f4c96f", "#466e58"], pages: ["Ghagra choli"] },
  delhi: { name: "Kurta Set", style: "suit", colors: ["#587899", "#f3dcb2", "#c45f3f"], pages: ["Kurta"] },
  uttarakhand: { name: "Ghagra Pichora", style: "skirt", colors: ["#d3a12d", "#c8453d", "#f6e6b6"], pages: ["Pichora", "Ghagra choli"] },
  "uttar-pradesh": { name: "Banarasi Saree", style: "sari", colors: ["#b2384c", "#d8a33c", "#f0dfc0"], pages: ["Banarasi saree", "Sari"] },
  rajasthan: { name: "Ghagra Choli", style: "skirt", colors: ["#cc4a35", "#f4b73d", "#2d7987"], pages: ["Ghagra choli"] },
  gujarat: { name: "Chaniya Choli", style: "skirt", colors: ["#1e8a7d", "#e55d3d", "#f2cf5d"], pages: ["Chaniya choli", "Ghagra choli"] },
  "dnh-dd": { name: "Tribal Folk Attire", style: "wrap", colors: ["#6b8a57", "#e6c98d", "#8c4c38"], pages: ["Sari"] },
  "madhya-pradesh": { name: "Lugda Style", style: "sari", colors: ["#5f7ea1", "#d15c49", "#efd8a6"], pages: ["Sari"] },
  chhattisgarh: { name: "Kosa Saree", style: "sari", colors: ["#9d4637", "#d6ac47", "#f0e0bc"], pages: ["Kosa silk", "Sari"] },
  bihar: { name: "Tussar Saree", style: "sari", colors: ["#8a4b62", "#e7c98a", "#4e697f"], pages: ["Tussar silk", "Sari"] },
  jharkhand: { name: "Panchi Parhan", style: "wrap", colors: ["#cf5e3a", "#ead7b5", "#325f76"], pages: ["Sari"] },
  sikkim: { name: "Bakhu", style: "robe", colors: ["#495f8b", "#d2b46f", "#f2e2c6"], pages: ["Kho (garment)", "Bakhu"] },
  "west-bengal": { name: "Bengali Saree", style: "sari", colors: ["#d43f4d", "#f3efe4", "#caa54a"], pages: ["Tant sari", "Sari"] },
  odisha: { name: "Sambalpuri Saree", style: "sari", colors: ["#9a3046", "#f2d0a0", "#355f7c"], pages: ["Sambalpuri sari", "Sari"] },
  maharashtra: { name: "Nauvari Saree", style: "sari", colors: ["#267a53", "#e5b23a", "#b2443e"], pages: ["Nauvari"] },
  goa: { name: "Kunbi Saree", style: "sari", colors: ["#b64239", "#e79e41", "#2a6c7f"], pages: ["Kunbi"] },
  telangana: { name: "Pochampally Saree", style: "sari", colors: ["#8a2f58", "#e9c84a", "#44648c"], pages: ["Pochampally saree", "Sari"] },
  "andhra-pradesh": { name: "Langa Voni", style: "skirt", colors: ["#c9444f", "#efbf54", "#306d91"], pages: ["Langa voni", "Sari"] },
  karnataka: { name: "Ilkal Saree", style: "sari", colors: ["#bf3d2d", "#254b83", "#efcf68"], pages: ["Ilkal saree", "Sari"] },
  kerala: { name: "Kasavu Saree", style: "sari", colors: ["#f1ead8", "#c9a43c", "#7e9e8f"], pages: ["Kasavu saree", "Mundum Neriyathum"] },
  "tamil-nadu": { name: "Kanchipuram Saree", style: "sari", colors: ["#a02f4a", "#d7a53e", "#f0dbc4"], pages: ["Kanchipuram sari", "Sari"] },
  puducherry: { name: "Tamil-French Heritage Attire", style: "sari", colors: ["#456e98", "#f0d8b6", "#c85a42"], pages: ["Kanchipuram sari", "Sari"] },
  lakshadweep: { name: "Island Ceremonial Dress", style: "wrap", colors: ["#2b7d86", "#f0e0bc", "#4ea96d"], pages: ["Mundu", "Sari"] },
  "andaman-nicobar": { name: "Island Tribal Attire", style: "wrap", colors: ["#2e6e7d", "#d8b984", "#c15d42"], pages: ["Nicobarese people", "Sari"] },
  assam: { name: "Mekhela Sador", style: "sari", colors: ["#cf5346", "#f2e5c7", "#c89a43"], pages: ["Mekhela chador"] },
  "arunachal-pradesh": { name: "Gale Wrap", style: "wrap", colors: ["#4a6a91", "#d7a547", "#b1453b"], pages: ["Gale (garment)", "Arunachal Pradesh"] },
  nagaland: { name: "Naga Shawl Attire", style: "robe", colors: ["#c53d36", "#111111", "#f2efe8"], pages: ["Naga shawl", "Nagaland"] },
  manipur: { name: "Phanek and Innaphi", style: "skirt", colors: ["#a3487d", "#f0d6b7", "#446b91"], pages: ["Phanek"] },
  mizoram: { name: "Puan", style: "wrap", colors: ["#bd4a38", "#f2e7d0", "#2d6172"], pages: ["Puan"] },
  tripura: { name: "Rignai", style: "skirt", colors: ["#cf613f", "#f1d39c", "#486a74"], pages: ["Rignai"] },
  meghalaya: { name: "Jainsem", style: "robe", colors: ["#bf8d2d", "#f0e6cc", "#8c3f4b"], pages: ["Jainsem"] },
};

const scenicBackdropMap = {
  "jammu-kashmir": { label: "Dal Lake", pages: ["Dal Lake", "Jammu and Kashmir (union territory)"] },
  ladakh: { label: "Thiksey Monastery", pages: ["Thiksey Monastery", "Ladakh"] },
  "himachal-pradesh": { label: "Hadimba Devi Temple", pages: ["Hadimba Devi Temple", "Himachal Pradesh"] },
  punjab: { label: "Golden Temple", pages: ["Golden Temple", "Punjab, India"] },
  chandigarh: { label: "Rock Garden", pages: ["Rock Garden of Chandigarh", "Chandigarh"] },
  haryana: { label: "Brahma Sarovar", pages: ["Brahma Sarovar", "Haryana"] },
  delhi: { label: "Humayun's Tomb", pages: ["Humayun's Tomb", "Delhi"] },
  uttarakhand: { label: "Kedarnath Temple", pages: ["Kedarnath Temple", "Uttarakhand"] },
  "uttar-pradesh": { label: "Taj Mahal", pages: ["Taj Mahal", "Uttar Pradesh"] },
  rajasthan: { label: "Hawa Mahal", pages: ["Hawa Mahal", "Rajasthan"] },
  gujarat: { label: "Rani ki Vav", pages: ["Rani ki vav", "Gujarat"] },
  "dnh-dd": { label: "Diu Fort", pages: ["Diu Fort", "Dadra and Nagar Haveli and Daman and Diu"] },
  "madhya-pradesh": { label: "Khajuraho Temples", pages: ["Khajuraho Group of Monuments", "Madhya Pradesh"] },
  chhattisgarh: { label: "Bhoramdeo Temple", pages: ["Bhoramdeo Temple", "Chhattisgarh"] },
  bihar: { label: "Mahabodhi Temple", pages: ["Mahabodhi Temple", "Bihar"] },
  jharkhand: { label: "Baidyanath Temple", pages: ["Baidyanath Temple, Deoghar", "Jharkhand"] },
  sikkim: { label: "Rumtek Monastery", pages: ["Rumtek Monastery", "Sikkim"] },
  "west-bengal": { label: "Victoria Memorial", pages: ["Victoria Memorial, Kolkata", "West Bengal"] },
  odisha: { label: "Konark Sun Temple", pages: ["Konark Sun Temple", "Odisha"] },
  maharashtra: { label: "Gateway of India", pages: ["Gateway of India", "Maharashtra"] },
  goa: { label: "Basilica of Bom Jesus", pages: ["Basilica of Bom Jesus", "Goa"] },
  telangana: { label: "Charminar", pages: ["Charminar", "Telangana"] },
  "andhra-pradesh": { label: "Tirumala Temple", pages: ["Tirumala Venkateswara Temple", "Andhra Pradesh"] },
  karnataka: { label: "Mysore Palace", pages: ["Mysore Palace", "Karnataka"] },
  kerala: { label: "Padmanabhaswamy Temple", pages: ["Padmanabhaswamy Temple", "Kerala"] },
  "tamil-nadu": { label: "Meenakshi Temple", pages: ["Meenakshi Temple", "Tamil Nadu"] },
  puducherry: { label: "Sri Aurobindo Ashram", pages: ["Sri Aurobindo Ashram", "Puducherry"] },
  lakshadweep: { label: "Kavaratti Lagoon", pages: ["Kavaratti", "Lakshadweep"] },
  "andaman-nicobar": { label: "Cellular Jail", pages: ["Cellular Jail", "Andaman and Nicobar Islands"] },
  assam: { label: "Kamakhya Temple", pages: ["Kamakhya Temple", "Assam"] },
  "arunachal-pradesh": { label: "Tawang Monastery", pages: ["Tawang Monastery", "Arunachal Pradesh"] },
  nagaland: { label: "Kisama Heritage Village", pages: ["Kisama Heritage Village", "Nagaland"] },
  manipur: { label: "Loktak Lake", pages: ["Loktak Lake", "Manipur"] },
  mizoram: { label: "Solomon's Temple", pages: ["Solomon's Temple, Aizawl", "Mizoram"] },
  tripura: { label: "Neermahal", pages: ["Neermahal", "Tripura"] },
  meghalaya: { label: "Living Root Bridge", pages: ["Living root bridge", "Meghalaya"] },
};

function factCard(label, value) {
  return `
    <article class="fact-card">
      <span class="fact-label">${label}</span>
      <span class="fact-value">${value}</span>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function wikiUrl(title) {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`;
}

function searchUrl(query) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function getScenicReference(place) {
  return scenicBackdropMap[place.id] || {
    label: place.name,
    pages: [getWikiPage(place)],
  };
}

function getDressReference(place) {
  return traditionalDressMap[place.id] || {
    name: "Traditional Dress",
    style: "sari",
    colors: ["#b44943", "#f1d8b5", "#406b92"],
    pages: [place.name],
  };
}

async function fetchWikiSummary(pageTitle, cacheMap) {
  if (!pageTitle) return null;
  if (cacheMap.has(pageTitle)) {
    return cacheMap.get(pageTitle);
  }

  const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`);
  if (!response.ok) {
    throw new Error(`Image request failed: ${response.status}`);
  }

  const data = await response.json();
  const imageInfo = {
    src: data.originalimage?.source || data.thumbnail?.source || "",
    description: data.description || "",
    title: data.title || pageTitle,
  };

  cacheMap.set(pageTitle, imageInfo);
  return imageInfo;
}

async function loadWikiImageFromCandidates(candidates, cacheMap) {
  for (const candidate of candidates) {
    try {
      const imageInfo = await fetchWikiSummary(candidate, cacheMap);
      if (imageInfo?.src) {
        return imageInfo;
      }
    } catch (error) {
      continue;
    }
  }

  return null;
}

function hashString(value) {
  return Array.from(value).reduce((accumulator, character) => {
    return ((accumulator << 5) - accumulator + character.charCodeAt(0)) >>> 0;
  }, 0);
}

function getPrimaryGiItem(place, preferredTypes = ["textile", "craft", "art", "agri", "food"]) {
  const items = giProductsMap[place.id] || [];

  for (const type of preferredTypes) {
    const match = items.find((item) => item.type === type);
    if (match) return match;
  }

  return items[0] || null;
}

function buildStyleGalleryEntries(place) {
  const dress = getDressReference(place);
  const scenic = getScenicReference(place);
  const signature = getDiscoverySignature(place);
  const defaults = getDiscoveryDefault(place);
  const giItem = getPrimaryGiItem(place);

  return [
    {
      kicker: "Attire",
      title: dress.name,
      text: `${dress.name} is one of the signature clothing styles associated with ${place.name}.`,
      summary: `${dress.name} helps describe how people in ${place.name} express identity through drape, fabric and silhouette.`,
      candidates: dress.pages?.length ? dress.pages : [getWikiPage(place)],
      knowledge: {
        label: dress.name,
        meta: "Attire story",
        kicker: "Style Gallery",
        viewerTitle: `${dress.name} - ${place.name}`,
        wikiTitle: dress.pages?.[0] || getWikiPage(place),
        placeId: place.id,
      },
    },
    {
      kicker: "Jewelry and Craft",
      title: giItem?.name || `${place.name} craft accents`,
      text: giItem
        ? `${giItem.name} adds texture to the region's styling story through material, craft or ceremonial detail.`
        : `${place.name} mixes local craft traditions into its ceremonial styling.`,
      summary: giItem
        ? `${giItem.name} connects adornment, textiles and visual identity in ${place.name}.`
        : `${place.name} carries strong visual identity through local craft and ornament traditions.`,
      candidates: [giItem?.name, ...(dress.pages || []), getWikiPage(place)].filter(Boolean),
      knowledge: {
        label: giItem?.name || `${place.name} craft accents`,
        meta: "Jewelry and craft",
        kicker: "Style Gallery",
        viewerTitle: `${place.name} adornment story`,
        wikiTitle: giItem?.name || getWikiPage(place),
        placeId: place.id,
      },
    },
    {
      kicker: "Styling Scene",
      title: scenic.label,
      text: `Festive styling in ${place.name} often comes alive during ${String(signature.festival || defaults.festivals).toLowerCase()}.`,
      summary: `${scenic.label} is a visual anchor for how attire, celebration and place come together in ${place.name}.`,
      candidates: scenic.pages?.length ? scenic.pages : [getWikiPage(place)],
      knowledge: {
        label: scenic.label,
        meta: "Styling scene",
        kicker: "Style Gallery",
        viewerTitle: `${scenic.label} - ${place.name}`,
        wikiTitle: scenic.pages?.[0] || getWikiPage(place),
        placeId: place.id,
      },
    },
  ];
}

function renderStyleGallery(place) {
  if (!styleGallery) return;

  const requestId = ++activeStyleGalleryRequest;
  const entries = buildStyleGalleryEntries(place);

  styleGallery.innerHTML = entries
    .map((entry, index) => `
      <button class="style-card" type="button" data-style-index="${index}">
        <div class="style-card-media">
          <img class="style-card-img" data-style-image="${index}" alt="${escapeHtml(entry.title)}">
          <div class="style-card-overlay">
            <span class="style-card-kicker">${escapeHtml(entry.kicker)}</span>
            <span class="style-card-status" data-style-status="${index}">Loading a visual for ${escapeHtml(entry.title)}...</span>
          </div>
        </div>
        <div class="style-card-copy">
          <h4 class="style-card-title">${escapeHtml(entry.title)}</h4>
          <p class="style-card-text">${escapeHtml(entry.text)}</p>
        </div>
      </button>
    `)
    .join("");

  styleGallery.querySelectorAll(".style-card").forEach((card, index) => {
    const entry = entries[index];
    bindKnowledgeEntryToElement(card, {
      ...entry.knowledge,
      summary: entry.summary,
      points: [
        ["State", place.name],
        ["Focus", entry.title],
        ["Culture", place.famousFor],
        ["Capital", place.capital],
      ],
      imagePage: entry.candidates[0],
    });
  });

  entries.forEach(async (entry, index) => {
    const imageElement = styleGallery.querySelector(`[data-style-image="${index}"]`);
    const statusElement = styleGallery.querySelector(`[data-style-status="${index}"]`);
    try {
      const imageInfo = await loadWikiImageFromCandidates(entry.candidates, styleGalleryCache);
      if (requestId !== activeStyleGalleryRequest || !imageElement || !statusElement) return;

      if (imageInfo?.src) {
        imageElement.onload = () => {
          if (requestId === activeStyleGalleryRequest) {
            imageElement.classList.add("is-ready");
          }
        };
        imageElement.src = imageInfo.src;
        imageElement.alt = `${entry.title} visual for ${place.name}`;
        statusElement.textContent = imageInfo.description || `${entry.title} visual ready`;
        return;
      }

      statusElement.textContent = `${entry.title} styling story`;
    } catch (error) {
      if (requestId !== activeStyleGalleryRequest || !statusElement) return;
      statusElement.textContent = `${entry.title} styling story`;
    }
  });
}

function midiToFrequency(midiNote) {
  return 440 * (2 ** ((midiNote - 69) / 12));
}

function ensureAudioEngine() {
  if (audioContextRef) return Promise.resolve(audioContextRef);

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return Promise.reject(new Error("AudioContext is not supported in this browser."));
  }

  audioContextRef = new AudioContextClass();
  audioMasterGain = audioContextRef.createGain();
  audioMasterGain.gain.value = 0.06;
  audioMasterGain.connect(audioContextRef.destination);
  return Promise.resolve(audioContextRef);
}

function getStateMusicProfile(place) {
  const regionalProfile = regionalMusicProfiles[place.region] || regionalMusicProfiles.union;
  const hash = hashString(place.id);
  return {
    ...regionalProfile,
    tonic: regionalProfile.tonic + (hash % 3),
    accentOffset: hash % regionalProfile.scale.length,
    note: `${place.name} uses ${regionalProfile.label}. Tap play to hear a gentle loop.`,
  };
}

function triggerTone(audioContext, profile, step) {
  if (!audioMasterGain) return;

  const now = audioContext.currentTime;
  const noteIndex = (step + profile.accentOffset) % profile.scale.length;
  const melodyFrequency = midiToFrequency(profile.tonic + profile.scale[noteIndex]);
  const bassFrequency = midiToFrequency(profile.tonic - 12 + profile.scale[step % profile.scale.length]);

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.type = profile.wave;
  oscillator.frequency.setValueAtTime(melodyFrequency, now);
  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(0.055, now + 0.05);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
  oscillator.connect(gainNode);
  gainNode.connect(audioMasterGain);
  oscillator.start(now);
  oscillator.stop(now + 0.45);

  if (step % 2 === 0) {
    const droneOscillator = audioContext.createOscillator();
    const droneGain = audioContext.createGain();
    droneOscillator.type = "sine";
    droneOscillator.frequency.setValueAtTime(bassFrequency, now);
    droneGain.gain.setValueAtTime(0.0001, now);
    droneGain.gain.exponentialRampToValueAtTime(0.03, now + 0.03);
    droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.52);
    droneOscillator.connect(droneGain);
    droneGain.connect(audioMasterGain);
    droneOscillator.start(now);
    droneOscillator.stop(now + 0.55);
  }

  const drumOscillator = audioContext.createOscillator();
  const drumGain = audioContext.createGain();
  drumOscillator.type = "triangle";
  drumOscillator.frequency.setValueAtTime(profile.drum, now);
  drumOscillator.frequency.exponentialRampToValueAtTime(profile.drum * 0.72, now + 0.09);
  drumGain.gain.setValueAtTime(0.0001, now);
  drumGain.gain.exponentialRampToValueAtTime(0.04, now + 0.01);
  drumGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
  drumOscillator.connect(drumGain);
  drumGain.connect(audioMasterGain);
  drumOscillator.start(now);
  drumOscillator.stop(now + 0.14);
}

function stopStateMusic() {
  if (stateMusicTimer) {
    window.clearInterval(stateMusicTimer);
    stateMusicTimer = null;
  }

  musicIsPlaying = false;
  currentMusicPlaceId = null;
}

async function startStateMusic(place) {
  stopStateMusic();
  const audioContext = await ensureAudioEngine();
  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  const profile = getStateMusicProfile(place);
  const stepDuration = Math.max(280, Math.round((60000 / profile.tempo) / 2));
  musicIsPlaying = true;
  currentMusicPlaceId = place.id;
  currentMusicStep = 0;

  triggerTone(audioContext, profile, currentMusicStep);
  currentMusicStep += 1;

  stateMusicTimer = window.setInterval(() => {
    triggerTone(audioContext, profile, currentMusicStep);
    currentMusicStep += 1;
  }, stepDuration);
}

function updateSoundscapePanel(place) {
  if (!soundCard || !soundStateTitle || !soundDescription || !soundToggle || !soundNote) return;

  const profile = getStateMusicProfile(place);
  const isCurrent = musicIsPlaying && currentMusicPlaceId === place.id;

  soundCard.dataset.playing = isCurrent ? "true" : "false";
  soundStateTitle.textContent = `${place.name} soundscape`;
  soundDescription.textContent = `A folk-inspired background loop for ${place.name}: ${profile.label}.`;
  soundToggle.textContent = isCurrent ? "Pause soundtrack" : "Play soundtrack";
  soundNote.textContent = isCurrent
    ? `Now playing. The soundtrack will adapt when you switch to another state.`
    : `Ready to play. Audio stays off until you tap the button.`;
}

async function fetchWikiTopic(pageTitle) {
  if (!pageTitle) return null;
  if (knowledgeTopicCache.has(pageTitle)) {
    return knowledgeTopicCache.get(pageTitle);
  }

  const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`);
  if (!response.ok) {
    throw new Error(`Topic request failed: ${response.status}`);
  }

  const data = await response.json();
  const topic = {
    title: data.title || pageTitle,
    description: data.description || "",
    extract: data.extract || "",
    src: data.originalimage?.source || data.thumbnail?.source || "",
    canonicalUrl: data.content_urls?.desktop?.page || wikiUrl(pageTitle),
  };

  knowledgeTopicCache.set(pageTitle, topic);
  return topic;
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

function registerKnowledgeEntry(entry) {
  const entryId = `knowledge-${++knowledgeEntrySequence}`;
  knowledgeEntryRegistry.set(entryId, entry);
  return entryId;
}

function bindKnowledgeEntryToElement(element, entry) {
  if (!element) return;
  const entryId = registerKnowledgeEntry(entry);
  element.dataset.knowledgeId = entryId;
}

function renderKnowledgeLink(entry) {
  const entryId = registerKnowledgeEntry(entry);
  return `
    <button class="knowledge-link" type="button" data-knowledge-id="${entryId}">
      <span class="knowledge-link-label">${escapeHtml(entry.label)}</span>
      <span class="knowledge-link-meta">${escapeHtml(entry.meta)}</span>
    </button>
  `;
}

function renderDiscoveryPoint(label, value, index) {
  return `
    <article class="discovery-point" style="animation-delay:${index * 60}ms">
      <span class="discovery-point-label">${label}</span>
      <span class="discovery-point-value">${value}</span>
    </article>
  `;
}

function capitalizeWords(text) {
  return text.replace(/\b\w/g, (character) => character.toUpperCase());
}

function getDiscoverySignature(place) {
  return stateSignatureMap[place.id] || {};
}

function getDiscoveryDefault(place) {
  return regionalDiscoveryDefaults[place.region] || regionalDiscoveryDefaults.union;
}

function renderKnowledgePoint(label, value, index) {
  return `
    <article class="knowledge-point" style="animation-delay:${index * 60}ms">
      <span class="knowledge-point-label">${escapeHtml(label)}</span>
      <span class="knowledge-point-value">${escapeHtml(value)}</span>
    </article>
  `;
}

function findPlaceById(placeId) {
  return locations.find((entry) => entry.id === placeId) || null;
}

function getKnowledgeFallbackSummary(entry, place) {
  if (entry.summary) return entry.summary;
  if (place) {
    return `${entry.label} connects back to ${place.name}, which is known for ${place.famousFor.toLowerCase()}. Explore this panel to keep learning without leaving the page.`;
  }

  return "This topic opens inside the page so the experience stays immersive and interactive.";
}

function getKnowledgeFallbackPoints(entry, place) {
  if (Array.isArray(entry.points) && entry.points.length > 0) {
    return entry.points;
  }

  if (!place) {
    return [
      ["Topic", entry.label],
      ["Mode", "Same-page explorer"],
    ];
  }

  return [
    ["State", place.name],
    ["Capital", place.capital],
    ["Known for", place.famousFor],
    ["Highlights", place.highlights.slice(0, 2).join(", ")],
  ];
}

async function applyKnowledgeImage(entry, place, topic, requestId) {
  if (!knowledgeImage || !knowledgeImageStatus) return;

  const imageCandidates = [
    entry.imagePage,
    entry.wikiTitle,
    topic?.title,
    getScenicReference(place || currentDiscoveryPlace || locations[0]).pages?.[0],
    place ? getWikiPage(place) : null,
  ].filter(Boolean);

  let imageInfo = null;

  if (topic?.src) {
    imageInfo = {
      src: topic.src,
      title: topic.title,
      description: topic.description || "",
    };
  } else {
    imageInfo = await loadWikiImageFromCandidates(imageCandidates, stateImageCache);
  }

  if (requestId !== activeKnowledgeRequest) return;

  knowledgeImage.classList.remove("is-ready");

  if (imageInfo?.src) {
    knowledgeImage.onload = () => {
      if (requestId === activeKnowledgeRequest) {
        knowledgeImage.classList.add("is-ready");
      }
    };
    knowledgeImage.src = imageInfo.src;
    knowledgeImage.alt = `${entry.label} visual`;
    knowledgeImageStatus.textContent = imageInfo.description
      ? `${entry.label} - ${imageInfo.description}`
      : `${entry.label} visual loaded`;
    if (imageInfo.description) {
      knowledgeImageStatus.textContent = `${entry.label} - ${imageInfo.description}`;
    }
    return;
  }

  knowledgeImage.removeAttribute("src");
  knowledgeImage.alt = `${entry.label} visual`;
  knowledgeImageStatus.textContent = `${entry.label} is open in the studio.`;
}

async function openKnowledgeEntry(entry, options = {}) {
  if (!knowledgeStudio || !knowledgeKicker || !knowledgeMeta || !knowledgeTitle || !knowledgeSummary || !knowledgePoints || !knowledgeSource) {
    return;
  }

  const { scroll = true } = options;
  const requestId = ++activeKnowledgeRequest;
  const place = findPlaceById(entry.placeId) || currentDiscoveryPlace;

  knowledgeStudio.classList.remove("is-refreshing");
  void knowledgeStudio.offsetWidth;
  knowledgeStudio.classList.add("is-refreshing");

  knowledgeKicker.textContent = entry.kicker || "Same-page explorer";
  knowledgeMeta.textContent = entry.meta || "Interactive topic";
  knowledgeTitle.textContent = entry.viewerTitle || entry.label;
  knowledgeSummary.textContent = "Loading this topic inside the page...";
  knowledgePoints.innerHTML = [
    ["Region", place?.name || "India Explorer"],
    ["Topic", entry.label],
  ]
    .map(([label, value], index) => renderKnowledgePoint(label, value, index))
    .join("");
  knowledgeSource.textContent = "Collecting summary and image details...";
  knowledgeImageStatus.textContent = `Opening ${entry.label} here...`;
  if (knowledgeImage) {
    knowledgeImage.classList.remove("is-ready");
    knowledgeImage.removeAttribute("src");
  }

  let topic = null;

  if (entry.wikiTitle) {
    try {
      topic = await fetchWikiTopic(entry.wikiTitle);
    } catch (error) {
      topic = null;
    }
  }

  if (requestId !== activeKnowledgeRequest) return;

  knowledgeMeta.textContent = topic?.description
    ? `${entry.meta} - ${topic.description}`
    : entry.meta || "Interactive topic";
  knowledgeTitle.textContent = entry.viewerTitle || topic?.title || entry.label;
  knowledgeSummary.textContent = topic?.extract || getKnowledgeFallbackSummary(entry, place);
  knowledgePoints.innerHTML = getKnowledgeFallbackPoints(entry, place)
    .map(([label, value], index) => renderKnowledgePoint(label, value, index))
    .join("");
  knowledgeSource.textContent = topic?.title
    ? `Source mode: Wikipedia summary for ${topic.title}. The topic is shown inside this page instead of redirecting you away.`
    : "Source mode: Curated explorer content shown directly inside this page.";

  applyKnowledgeImage(entry, place, topic, requestId);

  if (scroll && knowledgeStudioSection) {
    window.requestAnimationFrame(() => {
      knowledgeStudioSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
}

/* ── Rendering Helpers for Rich Category Boards ──────────── */

function renderGiTagsHtml(stateId, fallbackItems) {
  const tags = giProductsMap[stateId] || fallbackItems.map((item) => ({ name: item, type: "craft" }));
  const legend = [
    { type: "textile", label: "Textile" },
    { type: "craft", label: "Craft" },
    { type: "art", label: "Art" },
    { type: "food", label: "Food" },
    { type: "agri", label: "Agri" },
  ];
  const legendHtml = legend
    .map((l) => `<span class="gi-tag gi-tag--${l.type}">${l.label}</span>`)
    .join("");
  const tagsHtml = tags
    .map((t) => `<span class="gi-tag gi-tag--${t.type || "craft"}">${escapeHtml(t.name)}</span>`)
    .join("");
  return `
    <div class="gi-tags-wrap">
      <p class="gi-tags-intro">Legend</p>
      <div class="gi-tags-grid" style="margin-bottom:14px">${legendHtml}</div>
      <p class="gi-tags-intro">Certified &amp; Signature Products</p>
      <div class="gi-tags-grid">${tagsHtml}</div>
    </div>
  `;
}

function renderFilmBannerHtml(stateId, place) {
  const film = filmIndustryMap[stateId];
  if (film) {
    const facts = [
      { label: "Industry Name", value: film.industry },
      { label: "Primary Language", value: film.language },
      { label: "Studios / Hubs", value: film.studios },
      { label: "Notable", value: film.notable },
    ];
    return `
      <div class="film-banner">
        <span class="film-banner-reel">${film.icon || "🎬"}</span>
        <div class="film-banner-copy">
          <span class="film-banner-name">${escapeHtml(film.industry)}</span>
          <span class="film-banner-lang">${escapeHtml(film.language)} Cinema</span>
        </div>
      </div>
      <div class="film-facts-row">
        ${facts.map((f, i) => `
          <div class="film-fact" style="animation-delay:${i * 70}ms">
            <span class="film-fact-label">${escapeHtml(f.label)}</span>
            <span class="film-fact-value">${escapeHtml(f.value)}</span>
          </div>
        `).join("")}
      </div>
      <p style="line-height:1.7;color:#607080;margin:0">${escapeHtml(film.notes)}</p>
    `;
  }
  const scenic = getScenicReference(place);
  const signature = getDiscoverySignature(place);
  const defaults = getDiscoveryDefault(place);
  const screenNote = signature.cinema || defaults.cinema || `${place.name} offers distinctive visual landscapes used in Indian film and media.`;
  return `
    <div class="film-banner">
      <span class="film-banner-reel">🎬</span>
      <div class="film-banner-copy">
        <span class="film-banner-name">${escapeHtml(place.name)} on Screen</span>
        <span class="film-banner-lang">Shoot Destination &amp; Story Setting</span>
      </div>
    </div>
    <div class="film-facts-row">
      <div class="film-fact" style="animation-delay:0ms">
        <span class="film-fact-label">Iconic Setting</span>
        <span class="film-fact-value">${escapeHtml(scenic.label)}</span>
      </div>
      <div class="film-fact" style="animation-delay:70ms">
        <span class="film-fact-label">Story Texture</span>
        <span class="film-fact-value">${escapeHtml(place.famousFor.split(",")[0])}</span>
      </div>
    </div>
    <p style="line-height:1.7;color:#607080;margin:0">${escapeHtml(screenNote)}</p>
  `;
}

function renderVirtualStepsHtml(place) {
  const scenic = getScenicReference(place);
  const dress = getDressReference(place);
  const signature = getDiscoverySignature(place);
  const defaults = getDiscoveryDefault(place);
  const giItems = (giProductsMap[place.id] || []).slice(0, 2).map((t) => t.name);
  const foodItems = signature.food || [`${place.majorCity} street food`];
  const festival = signature.festival || defaults.festivals || "local festivals";
  const steps = [
    {
      label: "Open the Map",
      desc: `Click ${place.name} on the India map — watch its region light up and every layer of this explorer attach to that single state.`,
    },
    {
      label: "Set the Visual Anchor",
      desc: `${scenic.label} is your visual gateway. It anchors the heritage and tourism layer and connects to the image panel above.`,
    },
    {
      label: "Explore Attire & Craft",
      desc: `${dress.name} is the state's traditional style signature. Pair it with ${giItems.length > 0 ? giItems.join(" and ") : "GI-tagged local products"} from the craft tradition.`,
    },
    {
      label: "Taste the Cuisine",
      desc: `${foodItems.slice(0, 2).join(", ")} represent the food identity of ${place.name}. The food tab reveals the full culinary map.`,
    },
    {
      label: "Join the Festival",
      desc: `${festival} — this is how ${place.name} performs its identity in public. The Festivals tab fills in the calendar and community detail.`,
    },
    {
      label: "Read Innovation & Industry",
      desc: `Switch to Innovation and Industry tabs to see how tradition meets the modern economy in ${place.name}.`,
    },
  ];
  return `
    <div class="vr-steps">
      ${steps.map((step, i) => `
        <div class="vr-step" style="animation-delay:${i * 80}ms">
          <div class="vr-step-num">${i + 1}</div>
          <div class="vr-step-body">
            <span class="vr-step-label">${escapeHtml(step.label)}</span>
            <span class="vr-step-desc">${escapeHtml(step.desc)}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderEduListHtml(stateId, place) {
  const institutes = educationMap[stateId] || [
    { name: `${place.capital} University`, type: "State University" },
    { name: `NIT ${place.majorCity}`, type: "National Institute of Technology" },
  ];
  const icons = ["🏛️", "🔬", "📚", "⚗️", "🖥️"];
  return `
    <div class="edu-list">
      ${institutes.map((inst, i) => `
        <div class="edu-item" style="animation-delay:${i * 65}ms">
          <span class="edu-icon">${icons[i % icons.length]}</span>
          <div class="edu-body">
            <span class="edu-name">${escapeHtml(inst.name)}</span>
            <span class="edu-type">${escapeHtml(inst.type)}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function buildDiscoveryPayload(place, categoryId) {
  const defaults = getDiscoveryDefault(place);
  const signature = getDiscoverySignature(place);
  const scenic = getScenicReference(place);
  const dress = getDressReference(place);
  const cultureLink = wikiUrl(getWikiPage(place));
  const foodItems = signature.food || [
    `${capitalizeWords(place.region)} regional staples`,
    `${place.majorCity} food streets`,
    `${place.famousFor.split(",")[0]}`,
  ];
  const giItems = signature.gi || [dress.name, place.highlights[0], place.famousFor.split(",")[0]];

  switch (categoryId) {
    case "geography":
      return {
        kicker: "Interactive Digital Interface",
        title: `Discover India: ${place.name} geography and state profile`,
        subtitle: `${place.type} | ${place.capital} | code ${place.code}`,
        copy: `${place.overview} This view turns the map into an atlas layer, so the state sits inside a larger India story through borders, waterways, routes and neighbours.`,
        points: [
          ["Capital", place.capital],
          ["Neighbourhood", place.neighbors],
          ["Current status", `In its present form since ${place.formed}`],
          ["Highlights", place.highlights.join(", ")],
        ],
        links: [
          { label: `${place.name} Atlas`, meta: "State overview", url: cultureLink },
          { label: "Map context", meta: "Geography search", url: searchUrl(`${place.name} geography and map`) },
        ],
      };
    case "culture":
      return {
        kicker: "Languages, Art and Culture",
        title: `${place.name}: language, art and living culture`,
        subtitle: `Voices, heritage memory and performance traditions`,
        copy: `${defaults.culture} In ${place.name}, language identity flows through ${place.languages.toLowerCase()}, while places like ${place.highlights.slice(0, 2).join(" and ")} keep public culture visible.`,
        points: [
          ["Languages", place.languages],
          ["Cultural pulse", `${place.name} is especially known for ${place.famousFor.toLowerCase()}.`],
          ["Scene setter", `${place.highlights[0]} and ${place.highlights[1]} act like cultural anchors.`],
          ["Identity", `${place.type} stories connect local tradition with the wider ${regionPalette[place.region].name.toLowerCase()} region.`],
        ],
        links: [
          { label: `${place.name} Culture`, meta: "Explore more", url: searchUrl(`${place.name} art and culture`) },
          { label: place.languages.split(",")[0].trim(), meta: "Lead language", url: wikiUrl(languageWikiMap[place.languages.split(",")[0].trim()] || place.languages.split(",")[0].trim()) },
        ],
      };
    case "food":
      return {
        kicker: "Food and Cuisine",
        title: `${place.name}: signature tastes and food trails`,
        subtitle: `From home-style staples to destination dishes`,
        copy: `${place.name} can be explored through food just as much as through geography. The strongest entry points are its local staples, festive plates and the food lanes around ${place.majorCity}.`,
        points: foodItems.map((item, index) => [`Food ${index + 1}`, item]),
        links: [
          { label: `${place.name} Food`, meta: "Cuisine search", url: searchUrl(`${place.name} traditional food`) },
          { label: place.majorCity, meta: "Food in the major city", url: searchUrl(`${place.majorCity} best local food`) },
        ],
      };
    case "heritage":
      return {
        kicker: "Heritage and Tourism",
        title: `${place.name}: heritage routes and travel icons`,
        subtitle: `Monuments, sacred sites, landscapes and city memory`,
        copy: `${place.name} is best experienced as a layered travel circuit. ${scenic.label} is one anchor, while ${place.highlights.join(", ")} create a fuller tourism map around it.`,
        points: [
          ["Scenic anchor", scenic.label],
          ["Must-see trail", place.highlights.join(", ")],
          ["Travel identity", place.famousFor],
          ["Suggested mode", `Use ${place.majorCity} as a gateway and build outward.`],
        ],
        links: [
          { label: scenic.label, meta: "Landmark page", url: scenic.pages?.[0] ? wikiUrl(scenic.pages[0]) : cultureLink },
          { label: `${place.name} Tourism`, meta: "Trip ideas", url: searchUrl(`${place.name} tourism places`) },
        ],
      };
    case "climate":
      return {
        kicker: "Climate and Lifestyle",
        title: `${place.name}: climate, seasons and lifestyle rhythm`,
        subtitle: `How weather shapes food, housing, clothing and movement`,
        copy: `${defaults.climate} In ${place.name}, that climate pattern shows up in dress, food timing, travel seasons and the everyday rhythm of work, festivals and tourism.`,
        points: [
          ["Climate lens", defaults.climate],
          ["Lifestyle note", defaults.lifestyle],
          ["Everyday setting", `${place.majorCity} and ${place.capital} reflect how local routines adapt to place.`],
          ["Travel mood", `${scenic.label} is one of the clearest seasonal windows into the state.`],
        ],
        links: [
          { label: `${place.name} Seasons`, meta: "Climate search", url: searchUrl(`${place.name} climate and weather`) },
          { label: scenic.label, meta: "Landscape anchor", url: scenic.pages?.[0] ? wikiUrl(scenic.pages[0]) : cultureLink },
        ],
      };
    case "attire":
      return {
        kicker: "Traditional Jewelry and Attire",
        title: `${place.name}: attire, jewelry and ceremonial style`,
        subtitle: `What people wear for festivals, memory and identity`,
        copy: `${defaults.jewelry} In ${place.name}, ${dress.name} is the strongest visual marker in this interface, paired with festive styling that changes with season, ceremony and region.`,
        points: [
          ["Attire spotlight", dress.name],
          ["Jewelry lens", defaults.jewelry],
          ["Style mood", `${place.name} attire often pairs with ${signature.gi?.[0] || "regional textile traditions"}.`],
          ["Visual cue", `Open the dress card above to keep this layer attached to the state profile.`],
        ],
        links: [
          { label: dress.name, meta: "Traditional attire", url: dress.pages?.[0] ? wikiUrl(dress.pages[0]) : searchUrl(`${dress.name} ${place.name}`) },
          { label: `${place.name} Jewelry`, meta: "Jewelry search", url: searchUrl(`${place.name} traditional jewelry`) },
        ],
      };
    case "festivals":
      return {
        kicker: "Festivals",
        title: `${place.name}: celebration calendar and public culture`,
        subtitle: `How festivals animate streets, shrines, homes and stages`,
        copy: `${signature.festival || defaults.festivals} Festivals are one of the quickest ways to understand how ${place.name} performs identity in public spaces.`,
        points: [
          ["Festival spotlight", signature.festival || defaults.festivals],
          ["Public spaces", `${place.highlights[0]} and ${place.majorCity} often become cultural stages.`],
          ["Cultural rhythm", `${place.languages.split(",")[0]} language spaces strongly shape festival expression.`],
          ["Experience mode", `Best explored through music, dress, food and craft together.`],
        ],
        links: [
          { label: `${place.name} Festivals`, meta: "Festival search", url: searchUrl(`${place.name} festivals`) },
          { label: place.majorCity, meta: "Events in the major city", url: searchUrl(`${place.majorCity} cultural festival`) },
        ],
      };
    case "crafts":
      return {
        kicker: "Handicrafts & Textiles",
        title: `${place.name}: handloom, craft and textile identity`,
        subtitle: `What the state makes by hand and wears with pride`,
        copy: `${defaults.crafts} In this state, craft also overlaps with tourism, gifting, weddings and state branding.`,
        points: [
          ["Craft spotlight", giItems[0]],
          ["Textile trail", giItems.slice(1).join(", ")],
          ["Attire link", `${dress.name} connects this category back to living fashion.`],
          ["Market note", `${place.majorCity} and ${place.capital} often act as retail gateways for these traditions.`],
        ],
        links: [
          { label: `${place.name} Handicrafts`, meta: "Craft search", url: searchUrl(`${place.name} handicrafts and textiles`) },
          { label: giItems[0], meta: "Signature textile or craft", url: searchUrl(`${place.name} ${giItems[0]}`) },
        ],
      };
    case "education": {
      const eduInstCount = (educationMap[place.id] || []).length;
      return {
        kicker: "Education Institutes",
        title: `${place.name}: campuses, talent routes and learning hubs`,
        subtitle: `${eduInstCount > 0 ? `${eduInstCount} featured institutes` : "Regional education hubs"} — where students, research and professional education cluster`,
        copy: `${defaults.education} In ${place.name}, education energy concentrates around ${place.capital} and ${place.majorCity}, feeding both local aspirations and national talent pipelines.`,
        customHtml: renderEduListHtml(place.id, place),
        points: [],
        links: [
          { label: `${place.name} Universities`, meta: "Institute search", url: searchUrl(`${place.name} universities and institutes`) },
          { label: place.capital, meta: "Capital campuses", url: searchUrl(`${place.capital} colleges and universities`) },
        ],
      };
    }
    case "innovation":
      return {
        kicker: "Innovation & Technology",
        title: `${place.name}: innovation, startup and technology pulse`,
        subtitle: `How the state connects tradition with future-facing sectors`,
        copy: `${defaults.innovation} In ${place.name}, the future-facing story often builds through ${place.majorCity}, state policy, logistics, tourism or niche manufacturing.`,
        points: [
          ["Innovation lens", defaults.innovation],
          ["Tech anchor", `${place.majorCity} is the strongest city-level innovation reference in this state profile.`],
          ["Digital bridge", `${place.type} governance and services help frame the modern interface layer.`],
          ["Emerging story", `Watch how ${place.famousFor.toLowerCase()} meets digital platforms and new markets.`],
        ],
        links: [
          { label: `${place.name} Technology`, meta: "Innovation search", url: searchUrl(`${place.name} innovation and technology`) },
          { label: place.majorCity, meta: "Startup city lens", url: searchUrl(`${place.majorCity} startup ecosystem`) },
        ],
      };
    case "industries":
      return {
        kicker: "Major Industries",
        title: `${place.name}: economic engines and major industries`,
        subtitle: `The sectors that keep goods, jobs and services moving`,
        copy: `${defaults.industries} ${place.name} also stands out for ${place.famousFor.toLowerCase()}, making this category a bridge between economy, identity and livelihood.`,
        points: [
          ["Industry lens", defaults.industries],
          ["Known for", place.famousFor],
          ["City connector", `${place.majorCity} helps concentrate trade, labour and market movement.`],
          ["State role", `${regionPalette[place.region].name} India relies on this state for visible sector strength.`],
        ],
        links: [
          { label: `${place.name} Industry`, meta: "Industry search", url: searchUrl(`${place.name} major industries`) },
          { label: place.majorCity, meta: "Business hub", url: searchUrl(`${place.majorCity} industry and economy`) },
        ],
      };
    case "agri":
      return {
        kicker: "Agri Products",
        title: `${place.name}: farm, orchard and field products`,
        subtitle: `What grows here and how agriculture shapes the state story`,
        copy: `${defaults.agri} Agriculture in ${place.name} also feeds festivals, cuisine, exports and regional identity.`,
        points: [
          ["Regional produce", defaults.agri],
          ["Food connection", foodItems.join(", ")],
          ["Landscape tie", `${scenic.label} and nearby landscapes help explain water, terrain and seasonal output.`],
          ["Market route", `${place.capital} and ${place.majorCity} connect farm belts to wider trade networks.`],
        ],
        links: [
          { label: `${place.name} Agriculture`, meta: "Agri search", url: searchUrl(`${place.name} agriculture products`) },
          { label: foodItems[0], meta: "Product trail", url: searchUrl(`${place.name} ${foodItems[0]}`) },
        ],
      };
    case "gi": {
      const giTagCount = (giProductsMap[place.id] || []).length;
      const firstGiName = (giProductsMap[place.id] || [])[0]?.name || giItems[0];
      return {
        kicker: "GI & Famous Products of India",
        title: `${place.name}: GI-tagged & signature products`,
        subtitle: `${giTagCount > 0 ? `${giTagCount} products listed` : "Signature items"} — certified identity, craft, food and heritage`,
        copy: `India's Geographical Indication (GI) system protects products uniquely tied to their place of origin. This board shows ${place.name}'s certified and signature products — each tag represents a living tradition of craft, agriculture or cuisine.`,
        customHtml: renderGiTagsHtml(place.id, giItems),
        points: [],
        links: [
          { label: `${place.name} GI Products`, meta: "Official GI registry search", url: searchUrl(`${place.name} GI tagged products India`) },
          { label: firstGiName || place.name, meta: "Signature product", url: searchUrl(`${place.name} ${firstGiName || "GI product"} origin`) },
        ],
      };
    }
    case "film": {
      const filmData = filmIndustryMap[place.id];
      return {
        kicker: "Film Industry",
        title: filmData
          ? `${filmData.industry} — ${place.name}'s screen universe`
          : `${place.name}: screen culture and visual storytelling`,
        subtitle: filmData
          ? `${filmData.language} cinema | ${filmData.studios.split(",")[0]}`
          : `Cinema, streaming, music videos and shoot locations`,
        copy: filmData
          ? filmData.notes
          : `${signature.cinema || defaults.cinema} This tab brings the state to life as a cinematic world — from heritage locations to living cultural energy.`,
        customHtml: renderFilmBannerHtml(place.id, place),
        points: [],
        links: [
          { label: filmData ? `${filmData.industry}` : `${place.name} Film`, meta: "Film industry search", url: searchUrl(filmData ? `${filmData.industry} film industry` : `${place.name} film industry and shooting locations`) },
          { label: scenic.label, meta: "Iconic shoot location", url: scenic.pages?.[0] ? wikiUrl(scenic.pages[0]) : cultureLink },
        ],
      };
    }
    case "virtual":
      return {
        kicker: "Virtual Experience",
        title: `${place.name}: your guided interactive journey`,
        subtitle: `A step-by-step route through map, image, attire, food, craft and festival`,
        copy: `This is the full Discover India experience — where the map, image panel, dress card, GI tags, food and festival layers all work together to simulate a virtual exhibition of ${place.name}. Follow these steps in order.`,
        customHtml: renderVirtualStepsHtml(place),
        points: [],
        links: [
          { label: `${place.name} Virtual Tour`, meta: "Virtual travel search", url: searchUrl(`${place.name} virtual tour`) },
          { label: `${place.name} Travel Guide`, meta: "State journey search", url: searchUrl(`${place.name} culture food tourism itinerary`) },
        ],
      };
    default:
      return buildDiscoveryPayload(place, "geography");
  }
}

function renderDiscoveryTabs() {
  if (!discoveryTabs) return;

  discoveryTabs.innerHTML = discoveryCategories
    .map((category) => `
      <button class="discovery-tab${category.id === activeDiscoveryCategory ? " is-active" : ""}" type="button" data-discovery-id="${category.id}">
        <span class="discovery-tab-icon">${category.icon || "📌"}</span>
        <span class="discovery-tab-label">${category.label}</span>
      </button>
    `)
    .join("");

  discoveryTabs.querySelectorAll(".discovery-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeDiscoveryCategory = button.dataset.discoveryId;
      renderDiscoveryTabs();
      if (currentDiscoveryPlace) {
        renderDiscoveryBoardForPlace(currentDiscoveryPlace);
      }
    });
  });
}

function renderDiscoveryBoardForPlace(place) {
  if (!discoveryBoard || !discoveryKicker || !discoveryTitle || !discoverySubtitle || !discoveryCopy || !discoveryPoints || !discoveryLinks) return;

  const payload = buildDiscoveryPayload(place, activeDiscoveryCategory);
  discoveryBoard.classList.remove("is-refreshing");
  void discoveryBoard.offsetWidth;
  discoveryBoard.classList.add("is-refreshing");
  discoveryBoard.dataset.category = activeDiscoveryCategory;
  discoveryKicker.textContent = payload.kicker;
  discoveryTitle.textContent = payload.title;
  discoverySubtitle.textContent = payload.subtitle;
  discoveryCopy.textContent = payload.copy;
  if (payload.customHtml) {
    discoveryPoints.innerHTML = payload.customHtml;
  } else {
    discoveryPoints.innerHTML = payload.points
      .map(([label, value], index) => renderDiscoveryPoint(label, value, index))
      .join("");
  }
  discoveryLinks.innerHTML = payload.links
    .map((entry) =>
      renderKnowledgeLink({
        ...entry,
        kicker: payload.kicker,
        placeId: place.id,
        viewerTitle: `${entry.label} - ${place.name}`,
        summary: entry.summary || `${payload.copy} Focus topic: ${entry.label}.`,
        points: entry.points || payload.points,
        imagePage: entry.wikiTitle || getScenicReference(place).pages?.[0],
      }),
    )
    .join("");
}

function renderDiscoveryStudio(place) {
  currentDiscoveryPlace = place;
  renderDiscoveryTabs();
  renderDiscoveryBoardForPlace(place);
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
  const scenic = getScenicReference(place);
  const candidates = scenic.pages?.length ? scenic.pages : [getWikiPage(place)];
  detailImage.classList.remove("is-ready");
  detailImage.removeAttribute("src");
  detailImage.alt = `${place.name} representative image`;
  detailImageStatus.textContent = `Loading a beautiful ${place.name} backdrop...`;
  detailImageCredit.textContent = "";

  try {
    const imageInfo = await loadWikiImageFromCandidates(candidates, stateImageCache);
    if (requestId !== activeImageRequest) return;
    applyStateImage(place, imageInfo, scenic);
  } catch (error) {
    if (requestId !== activeImageRequest) return;
    detailImageStatus.textContent = `${place.name} selected. Image preview is not available right now.`;
    detailImageCredit.textContent = "State details are still available below.";
  }
}

function applyStateImage(place, imageInfo, scenic) {
  if (!detailImage || !detailImageStatus || !detailImageCredit) return;

  if (!imageInfo || !imageInfo.src) {
    detailImageStatus.textContent = `${place.name} selected. Image preview is not available right now.`;
    detailImageCredit.textContent = "State details are still available below.";
    return;
  }

  detailImage.onload = () => {
    detailImage.classList.add("is-ready");
  };
  detailImage.src = imageInfo.src;
  detailImage.alt = `${place.name} scenic backdrop`;
  detailImageStatus.textContent = scenic?.label
    ? `${place.name} backdrop: ${scenic.label}`
    : imageInfo.description
      ? `${place.name} - ${imageInfo.description}`
      : `${place.name} image loaded`;
  detailImageCredit.textContent = `Backdrop image via Wikipedia for ${imageInfo.title}.`;
}

function renderLegend() {
  const samples = locations.slice(0, 8);

  legend.innerHTML = [
    '<span class="legend-chip">Each state and UT has its own color</span>',
    ...samples.map((place) => `
      <span class="legend-chip">
        <span class="legend-swatch" style="background:${getLocationMapColor(place.id)}"></span>
        ${place.code}
      </span>
    `),
    '<span class="legend-chip"><span class="legend-swatch" style="background:#ffffff"></span>Selected border</span>',
  ].join("");
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
        meta: "Language story",
        kicker: "Language Rabbit Hole",
        viewerTitle: `${entry.name} in ${place.name}`,
        wikiTitle: entry.title,
        placeId: place.id,
        summary: `${entry.name} is part of the language story of ${place.name}. Use this on-page panel to connect language, place, and culture without leaving the explorer.`,
        points: [
          ["Seen in", place.name],
          ["State languages", place.languages],
          ["Capital anchor", place.capital],
          ["Culture tie", place.famousFor],
        ],
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
      wikiTitle: stateTitle,
    },
    {
      label: `${capitalTitle}`,
      meta: "Capital details",
      url: wikiUrl(capitalTitle),
      wikiTitle: capitalTitle,
    },
    {
      label: `${place.majorCity}`,
      meta: "Major city page",
      url: wikiUrl(place.majorCity),
      wikiTitle: place.majorCity,
    },
  ];

  detailLinks.innerHTML = links
    .map((entry) =>
      renderKnowledgeLink({
        ...entry,
        kicker: "Deep Dive Topic",
        viewerTitle: `${entry.label} - ${place.name}`,
        wikiTitle: entry.wikiTitle,
        placeId: place.id,
        summary: `${entry.label} helps explain the wider story of ${place.name}, from geography and city life to culture, heritage, and daily rhythms.`,
        points: [
          ["Region", place.name],
          ["Capital", place.capital],
          ["Major city", place.majorCity],
          ["Highlights", place.highlights.slice(0, 2).join(", ")],
        ],
      }),
    )
    .join("");
}

function renderDressSpotlight(place) {
  if (!dressImage || !dressName || !dressLink || !dressState || !dressCard) return;

  const dress = getDressReference(place);
  const scenic = getScenicReference(place);

  dressCard.style.setProperty("--dress-primary", dress.colors[0]);
  dressCard.style.setProperty("--dress-secondary", dress.colors[1]);
  dressCard.style.setProperty("--dress-accent", dress.colors[2]);
  dressCard.classList.remove("is-refreshing");
  void dressCard.offsetWidth;
  dressCard.classList.add("is-refreshing");
  dressImage.classList.remove("is-photo");
  dressImage.src = dressSvgUrl(dress);
  dressImage.alt = `${dress.name} inspired illustration for ${place.name}`;
  dressName.textContent = dress.name;
  dressState.textContent = scenic?.label
    ? `${place.name} style with ${scenic.label} in the backdrop.`
    : `${place.name} traditional style in a playful spotlight.`;
  bindKnowledgeEntryToElement(dressLink, {
    label: dress.name,
    meta: "Traditional attire",
    kicker: "Dress Spotlight",
    viewerTitle: `${dress.name} - ${place.name}`,
    wikiTitle: dress.pages?.[0] || null,
    placeId: place.id,
    summary: `${dress.name} is part of the traditional attire story of ${place.name}. This corner card now opens the outfit story inside the same page.`,
    points: [
      ["State", place.name],
      ["Style note", dress.name],
      ["Backdrop", scenic.label],
      ["Culture tie", place.famousFor],
    ],
    imagePage: dress.pages?.[0] || scenic.pages?.[0] || getWikiPage(place),
  });
  dressLink.textContent = `About ${dress.name}`;
  loadDressImage(place, dress);
}

async function loadDressImage(place, dress) {
  if (!dressImage) return;

  const requestId = ++activeDressRequest;
  const candidates = dress.pages?.length ? dress.pages : [dress.name];

  try {
    const imageInfo = await loadWikiImageFromCandidates(candidates, dressImageCache);
    if (requestId !== activeDressRequest || !imageInfo?.src) return;
    dressImage.src = imageInfo.src;
    dressImage.alt = `${dress.name} traditional dress from ${place.name}`;
    dressImage.classList.add("is-photo");
  } catch (error) {
    if (requestId !== activeDressRequest) return;
  }
}

function getMapElementsForPlace(place) {
  if (!svgRootRef) return [];

  const aliases = svgAliasMap[place.id] || [];
  const geometryTags = new Set(["path", "polygon", "rect", "ellipse", "circle"]);
  const matched = [];

  function collectGeometry(node) {
    if (!node) return;

    const tagName = node.tagName?.toLowerCase?.();
    if (tagName && geometryTags.has(tagName) && !matched.includes(node)) {
      matched.push(node);
    }

    if (typeof node.querySelectorAll === "function") {
      node.querySelectorAll("path, polygon, rect, ellipse, circle").forEach((child) => {
        if (!matched.includes(child)) {
          matched.push(child);
        }
      });
    }
  }

  aliases.forEach((alias) => {
    collectGeometry(svgRootRef.querySelector(`[id="${alias}"]`));
    svgRootRef
      .querySelectorAll(`[id="${alias}"], [id^="${alias}."], [id*="${alias}."]`)
      .forEach((node) => collectGeometry(node));
  });

  return matched;
}

function refreshSvgStyles(filterIds = null) {
  if (!svgDocumentRef) return;

  locations.forEach((place) => {
    const isActive = place.id === activeId;
    const isMuted = filterIds && !filterIds.has(place.id);
    const nodes = svgElementMap.get(place.id) || [];
    const baseColor = getLocationMapColor(place.id);
    const activeColor = shiftHexColor(baseColor, MAP_ACTIVE_BOOST);

    nodes.forEach((node) => {
      node.style.fill = isActive ? activeColor : baseColor;
      node.style.stroke = isActive ? MAP_SELECTED_BORDER_COLOR : MAP_BORDER_COLOR;
      node.style.strokeWidth = isActive ? "2.8" : "1.25";
      node.style.opacity = isMuted ? "0.22" : "1";
      node.style.cursor = "pointer";
      node.style.pointerEvents = "visiblePainted";
      node.style.transition = "fill 180ms ease, opacity 180ms ease, stroke 180ms ease, stroke-width 180ms ease, filter 180ms ease";
      node.style.filter = isActive ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.22))" : "";
    });
  });
}

function setupSvgMap() {
  if (!mapShell) return;

  svgDocumentRef = mapShell;
  svgRootRef = mapShell.querySelector("svg");
  if (!svgRootRef) return;

  svgElementMap.clear();

  locations.forEach((place) => {
    const nodes = getMapElementsForPlace(place);
    svgElementMap.set(place.id, nodes);

    nodes.forEach((node) => {
      node.addEventListener("click", () => selectLocation(place.id));
      node.addEventListener("mouseenter", () => {
        if (place.id !== activeId) {
          node.style.fill = shiftHexColor(getLocationMapColor(place.id), MAP_HOVER_BOOST);
        }
      });
      node.addEventListener("mouseleave", () => {
        if (place.id !== activeId) {
          node.style.fill = getLocationMapColor(place.id);
        }
      });
    });
  });

  refreshSvgStyles();
}

async function loadInlineMap() {
  if (!mapShell) return;

  const response = await fetch("india-location-map.svg");
  if (!response.ok) {
    throw new Error(`Unable to load map SVG: ${response.status}`);
  }

  mapShell.innerHTML = await response.text();
  const injectedSvg = mapShell.querySelector("svg");
  if (!injectedSvg) {
    throw new Error("Inline SVG markup was not found in the map asset.");
  }

  injectedSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
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
  renderStyleGallery(place);
  renderDiscoveryStudio(place);
  updateSoundscapePanel(place);
  if (musicIsPlaying) {
    startStateMusic(place)
      .then(() => updateSoundscapePanel(place))
      .catch(() => {
        stopStateMusic();
        updateSoundscapePanel(place);
      });
  }
  openKnowledgeEntry({
    label: place.name,
    meta: "State spotlight",
    kicker: "Discover India",
    viewerTitle: `${place.name} at a glance`,
    wikiTitle: getWikiPage(place),
    placeId: place.id,
    summary: `${place.overview} ${place.name} is especially known for ${place.famousFor.toLowerCase()}.`,
    points: [
      ["Capital", place.capital],
      ["Languages", place.languages],
      ["Known for", place.famousFor],
      ["Highlights", place.highlights.slice(0, 2).join(", ")],
    ],
    imagePage: getScenicReference(place).pages?.[0],
  }, { scroll: false });

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

  searchInput.addEventListener("input", (event) => {
    applyFilter(event.target.value);
  });

  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      const place = findPlaceById(activeId) || currentDiscoveryPlace;
      if (!place) return;

      if (musicIsPlaying && currentMusicPlaceId === place.id) {
        stopStateMusic();
        updateSoundscapePanel(place);
        return;
      }

      startStateMusic(place)
        .then(() => updateSoundscapePanel(place))
        .catch(() => {
          stopStateMusic();
          if (soundNote) {
            soundNote.textContent = "Audio could not start in this browser right now.";
          }
          updateSoundscapePanel(place);
        });
    });
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-knowledge-id]");
    if (!trigger) return;
    event.preventDefault();

    const entry = knowledgeEntryRegistry.get(trigger.dataset.knowledgeId);
    if (!entry) return;

    openKnowledgeEntry(entry);
  });

  loadInlineMap()
    .then(() => {
      setupSvgMap();
      applyFilter(searchInput.value);
      selectLocation(activeId);
    })
    .catch(() => {
      if (mapShell) {
        mapShell.textContent = "The India map could not be loaded right now.";
      }
    });
}

init();
