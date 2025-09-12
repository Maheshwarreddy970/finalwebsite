// Paste your dummyUsers array here
export const dummyUsers = [
    {
        userId: "user-abc123456789",
        deviceInfo: {
            browser: "Chrome",
            deviceType: "Desktop",
            os: "Windows",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
        },
        location: {
            city: "New York",
            region: "New York",
            country: "USA"
        },
        contactInfo: {
            phone: "+1-212-555-1234",
            email: "john.doe@example.com"
        },
        messages: [
            { createdAt: 1755171483002, isBot: true, text: "Welcome to Elite Motors! Are you looking for a sedan, SUV, or something else today?", referralSource: "direct", summary: "Initial greeting" },
            { createdAt: 1755171600000, isBot: false, text: "Hi! I'm interested in a compact SUV. What 2023 models do you have?", referralSource: "direct", summary: "Inquired about compact SUVs" },
            { createdAt: 1755171650000, isBot: true, text: "Great choice! We have the 2023 Toyota RAV4 and Honda CR-V in stock. Would you like to know about features or pricing?", referralSource: "direct", summary: "Provided SUV options" },
            { createdAt: 1755171700000, isBot: false, text: "Can you tell me the price range for the RAV4?", referralSource: "direct", summary: "Asked about RAV4 pricing" },
            { createdAt: 1755171750000, isBot: true, text: "The 2023 Toyota RAV4 ranges from $28,000 to $38,000 depending on the trim. Would you like to schedule a test drive?", referralSource: "direct", summary: "Shared RAV4 price range" },
            { createdAt: 1755171800000, isBot: false, text: "That sounds good. Can I trade in my 2018 Ford Escape?", referralSource: "direct", summary: "Inquired about trade-in" },
            { createdAt: 1755171850000, isBot: true, text: "Absolutely, we accept trade-ins! Can you share the mileage and condition of your Ford Escape for a quick estimate?", referralSource: "direct", summary: "Requested trade-in details" }
        ],
        lastVisit: 1755171850000,
        totalVisits: 150,
        visitCount: 150,
        referralSource: "direct",
        summary: "Customer interested in 2023 compact SUVs, specifically Toyota RAV4, and exploring trade-in options for a 2018 Ford Escape."
    },
    {
        userId: "user-def987654321",
        deviceInfo: {
            browser: "Twitter",
            deviceType: "Mobile",
            os: "Android",
            userAgent: "Mozilla/5.0 (Android 13; Mobile; rv:109.0) Gecko/109.0 Firefox/109.0"
        },
        location: {
            city: "Los Angeles",
            region: "California",
            country: "USA"
        },
        contactInfo: {
            phone: "+1-310-555-5678",
            email: "jane.smith@example.com"
        },
        messages: [
            { createdAt: 1754996250758, isBot: true, text: "Hi! Thanks for visiting Speedy Autos. Are you looking for a specific car today?", referralSource: "social", summary: "Initial greeting" },
            { createdAt: 1754996350758, isBot: false, text: "I'm looking for a used Tesla Model 3. Do you have any in stock?", referralSource: "social", summary: "Inquired about Tesla Model 3" },
            { createdAt: 1754996400758, isBot: true, text: "We have a 2021 Tesla Model 3 with 20,000 miles. Would you like details on its features or condition?", referralSource: "social", summary: "Offered Tesla details" },
            { createdAt: 1754996450758, isBot: false, text: "What’s the price, and is financing available?", referralSource: "social", summary: "Asked about price and financing" },
            { createdAt: 1754996500758, isBot: true, text: "The 2021 Tesla Model 3 is $35,000. We offer financing with rates starting at 3.9%. Want to explore loan options?", referralSource: "social", summary: "Shared price and financing" },
            { createdAt: 1754996550758, isBot: false, text: "Can I schedule a test drive for this weekend?", referralSource: "social", summary: "Requested test drive" },
            { createdAt: 1754996600758, isBot: true, text: "Sure! We have openings Saturday at 10 AM or 2 PM. Which works for you? I’ll need your name to book it.", referralSource: "social", summary: "Offered test drive slots" }
        ],
        lastVisit: 1754996600758,
        totalVisits: 80,
        visitCount: 80,
        referralSource: "Instagram",
        summary: "Customer seeking a used Tesla Model 3, interested in financing and scheduling a test drive."
    },
    {
        userId: "user-ghi123789456",
        deviceInfo: {
            browser: "Safari",
            deviceType: "Tablet",
            os: "iOS",
            userAgent: "Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15"
        },
        location: {
            city: "Hyderabad",
            region: "Telangana",
            country: "IN"
        },
        contactInfo: {
            phone: "+91-40-5555-1234",
            email: "rahul.kumar@example.com"
        },
        messages: [
            { createdAt: 1755000000000, isBot: true, text: "Welcome to Premier Cars! Are you interested in financing options for a new vehicle?", referralSource: "email", summary: "Offered financing options" },
            { createdAt: 1755000120000, isBot: false, text: "Yes, what are the loan terms for a new hatchback?", referralSource: "email", summary: "Asked about loan terms" },
            { createdAt: 1755000170000, isBot: true, text: "For a new hatchback like the Maruti Swift, we offer 5-year loans at 7% interest. Want to see specific models?", referralSource: "email", summary: "Shared loan terms" },
            { createdAt: 1755000220000, isBot: false, text: "What colors are available for the Swift?", referralSource: "email", summary: "Inquired about colors" },
            { createdAt: 1755000270000, isBot: true, text: "The Maruti Swift comes in red, blue, and white. We can show you all at our showroom. Want to visit?", referralSource: "email", summary: "Listed color options" },
            { createdAt: 1755000320000, isBot: false, text: "Can I get a quote for the blue Swift with full insurance?", referralSource: "email", summary: "Requested quote" },
            { createdAt: 1755000370000, isBot: true, text: "The blue Maruti Swift with full insurance is $8,50,000. Shall I email you a detailed quote?", referralSource: "email", summary: "Provided quote" }
        ],
        lastVisit: 1755000370000,
        totalVisits: 200,
        visitCount: 200,
        referralSource: "Twitter",
        summary: "Customer inquiring about financing and details for a new Maruti Swift, including colors and insurance."
    },
    {
        userId: "user-jkl456123789",
        deviceInfo: {
            browser: "Edge",
            deviceType: "Desktop",
            os: "Windows",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0"
        },
        location: {
            city: "Chicago",
            region: "Illinois",
            country: "USA"
        },
        contactInfo: {
            phone: "+1-312-555-9876",
            email: "mike.brown@example.com"
        },
        messages: [
            { createdAt: 1755180000000, isBot: true, text: "Hello! Welcome to City Auto. Are you looking for a new or used car today?", referralSource: "search_engine", summary: "Initial greeting" },
            { createdAt: 1755180100000, isBot: false, text: "I'm looking for a used pickup truck under $25,000. Any options?", referralSource: "search_engine", summary: "Inquired about pickup trucks" },
            { createdAt: 1755180150000, isBot: true, text: "We have a 2019 Ford F-150 with 30,000 miles for $23,500. Interested in more details?", referralSource: "search_engine", summary: "Offered truck details" },
            { createdAt: 1755180200000, isBot: false, text: "What’s the condition of the F-150? Any accidents?", referralSource: "search_engine", summary: "Asked about truck condition" },
            { createdAt: 1755180250000, isBot: true, text: "It’s a clean-title vehicle, no accidents, with a full service history. Want a Carfax report?", referralSource: "search_engine", summary: "Confirmed condition" },
            { createdAt: 1755180300000, isBot: false, text: "Yes, please send the Carfax. Also, can I test drive it tomorrow?", referralSource: "search_engine", summary: "Requested Carfax and test drive" },
            { createdAt: 1755180350000, isBot: true, text: "I’ll email you the Carfax report. Tomorrow at 11 AM works for a test drive. Can you confirm?", referralSource: "search_engine", summary: "Arranged test drive" }
        ],
        lastVisit: 1755180350000,
        totalVisits: 120,
        visitCount: 120,
        referralSource: "Facebook",
        summary: "Customer seeking a used Ford F-150, inquiring about condition and scheduling a test drive."
    },
    {
        userId: "user-mno789456123",
        deviceInfo: {
            browser: "Chrome",
            deviceType: "Mobile",
            os: "Android",
            userAgent: "Mozilla/5.0 (Linux; Android 12; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36"
        },
        location: {
            city: "Miami",
            region: "Florida",
            country: "USA"
        },
        contactInfo: {
            phone: "+1-305-555-4321",
            email: "sarah.wilson@example.com"
        },
        messages: [
            { createdAt: 1755200000000, isBot: true, text: "Hi! Welcome to Sunshine Autos. Interested in electric vehicles or hybrids?", referralSource: "advertisement", summary: "Initial greeting" },
            { createdAt: 1755200100000, isBot: false, text: "I’m looking for a hybrid sedan. What do you recommend?", referralSource: "advertisement", summary: "Inquired about hybrid sedans" },
            { createdAt: 1755200150000, isBot: true, text: "The 2023 Toyota Camry Hybrid is a great option. Starts at $30,000. Want to know about fuel efficiency?", referralSource: "advertisement", summary: "Recommended Camry Hybrid" },
            { createdAt: 1755200200000, isBot: false, text: "Yes, what’s the MPG for the Camry Hybrid?", referralSource: "advertisement", summary: "Asked about fuel efficiency" },
            { createdAt: 1755200250000, isBot: true, text: "It gets 51 MPG city and 53 MPG highway. Would you like to see it in person?", referralSource: "advertisement", summary: "Shared MPG details" },
            { createdAt: 1755200300000, isBot: false, text: "Can I book a test drive for next week?", referralSource: "advertisement", summary: "Requested test drive" },
            { createdAt: 1755200350000, isBot: true, text: "Sure! How about Tuesday at 3 PM? I’ll need your full name to confirm the booking.", referralSource: "advertisement", summary: "Offered test drive slot" }
        ],
        lastVisit: 1755200350000,
        totalVisits: 90,
        visitCount: 90,
        referralSource: "Instagram",
        summary: "Customer interested in a 2023 Toyota Camry Hybrid, inquiring about fuel efficiency and test drive."
    },
    {
        userId: "user-pqr123789456",
        deviceInfo: {
            browser: "Safari",
            deviceType: "Mobile",
            os: "iOS",
            userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
        },
        location: {
            city: "Mumbai",
            region: "Maharashtra",
            country: "IN"
        },
        contactInfo: {
            phone: "+91-22-5555-6789",
            email: "priya.sharma@example.com"
        },
        messages: [
            { createdAt: 1755210000000, isBot: true, text: "Hello! Welcome to Urban Wheels. Looking for a new car or a trade-in?", referralSource: "direct", summary: "Initial greeting" },
            { createdAt: 1755210100000, isBot: false, text: "I want to trade in my 2017 Honda City. What’s the process?", referralSource: "direct", summary: "Inquired about trade-in" },
            { createdAt: 1755210150000, isBot: true, text: "We’ll need details like mileage and condition. Can you share those for your Honda City?", referralSource: "direct", summary: "Requested trade-in details" },
            { createdAt: 1755210200000, isBot: false, text: "It has 60,000 km and is in good condition. What’s the estimated value?", referralSource: "direct", summary: "Provided trade-in details" },
            { createdAt: 1755210250000, isBot: true, text: "Based on your details, we estimate $5,00,000. Want to pair it with a new car purchase?", referralSource: "direct", summary: "Shared trade-in estimate" },
            { createdAt: 1755210300000, isBot: false, text: "Yes, any compact sedans under $10,00,000?", referralSource: "direct", summary: "Inquired about compact sedans" },
            { createdAt: 1755210350000, isBot: true, text: "We have the Hyundai Verna at $9,50,000. Interested in a test drive?", referralSource: "direct", summary: "Suggested Verna" }
        ],
        lastVisit: 1755210350000,
        totalVisits: 110,
        visitCount: 110,
        referralSource: "direct",
        summary: "Customer looking to trade in a 2017 Honda City and interested in compact sedans under $10,00,000."
    },
    {
        userId: "user-stu456789123",
        deviceInfo: {
            browser: "Chrome",
            deviceType: "Desktop",
            os: "MacOS",
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
        },
        location: {
            city: "Houston",
            region: "Texas",
            country: "USA"
        },
        contactInfo: {
            phone: "+1-713-555-2345",
            email: "emily.jones@example.com"
        },
        messages: [
            { createdAt: 1755220000000, isBot: true, text: "Hi! Welcome to Texas Motors. Are you shopping for a new truck or SUV?", referralSource: "social", summary: "Initial greeting" },
            { createdAt: 1755220100000, isBot: false, text: "I’m looking for a new truck. What’s the best deal you have?", referralSource: "social", summary: "Inquired about trucks" },
            { createdAt: 1755220150000, isBot: true, text: "We have a 2023 Ram 1500 with a $5,000 discount, starting at $40,000. Want more details?", referralSource: "social", summary: "Offered Ram 1500 deal" },
            { createdAt: 1755220200000, isBot: false, text: "What are the financing options for the Ram 1500?", referralSource: "social", summary: "Asked about financing" },
            { createdAt: 1755220250000, isBot: true, text: "We offer 0% APR for 36 months on the Ram 1500. Would you like a payment breakdown?", referralSource: "social", summary: "Shared financing terms" },
            { createdAt: 1755220300000, isBot: false, text: "Yes, please send me the payment details. Also, any towing capacity info?", referralSource: "social", summary: "Requested payment and towing info" },
            { createdAt: 1755220350000, isBot: true, text: "The Ram 1500 tows up to 12,750 lbs. I’ll email you the payment details. Need anything else?", referralSource: "social", summary: "Provided towing and payment info" }
        ],
        lastVisit: 1755220350000,
        totalVisits: 130,
        visitCount: 130,
        referralSource: "Linkedin",
        summary: "Customer interested in a 2023 Ram 1500, seeking financing and towing capacity details."
    },
    {
        userId: "user-vwx789123456",
        deviceInfo: {
            browser: "Firefox",
            deviceType: "Tablet",
            os: "Android",
            userAgent: "Mozilla/5.0 (Android 11; Tablet; rv:109.0) Gecko/109.0 Firefox/109.0"
        },
        location: {
            city: "London",
            region: "England",
            country: "UK"
        },
        contactInfo: {
            phone: "+44-20-5555-7890",
            email: "oliver.white@example.com"
        },
        messages: [
            { createdAt: 1755230000000, isBot: true, text: "Welcome to London Autos! Are you looking for a luxury vehicle or something practical?", referralSource: "email", summary: "Initial greeting" },
            { createdAt: 1755230100000, isBot: false, text: "I’m interested in a luxury SUV. Do you have any BMW X5 models?", referralSource: "email", summary: "Inquired about BMW X5" },
            { createdAt: 1755230150000, isBot: true, text: "We have a 2022 BMW X5 with 15,000 miles for £50,000. Want to know about its features?", referralSource: "email", summary: "Offered BMW X5 details" },
            { createdAt: 1755230200000, isBot: false, text: "What’s the interior like? Any premium packages?", referralSource: "email", summary: "Asked about interior" },
            { createdAt: 1755230250000, isBot: true, text: "It has a leather interior with the M Sport package. Want to see photos or book a test drive?", referralSource: "email", summary: "Described interior" },
            { createdAt: 1755230300000, isBot: false, text: "Please send photos. Also, is it certified pre-owned?", referralSource: "email", summary: "Requested photos and certification" },
            { createdAt: 1755230350000, isBot: true, text: "Yes, it’s certified pre-owned with a 1-year warranty. I’ll email the photos. Anything else?", referralSource: "email", summary: "Confirmed certification" }
        ],
        lastVisit: 1755230350000,
        totalVisits: 100,
        visitCount: 100,
        referralSource: "Instagram",
        summary: "Customer seeking a 2022 BMW X5, interested in interior and certification details."
    },
    {
        userId: "user-yza123456789",
        deviceInfo: {
            browser: "Chrome",
            deviceType: "Mobile",
            os: "Android",
            userAgent: "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36"
        },
        location: {
            city: "Toronto",
            region: "Ontario",
            country: "CA"
        },
        contactInfo: {
            phone: "+1-416-555-3456",
            email: "lucas.martin@example.com"
        },
        messages: [
            { createdAt: 1755240000000, isBot: true, text: "Hi! Welcome to Maple Autos. Are you looking for a new or used vehicle today?", referralSource: "direct", summary: "Initial greeting" },
            { createdAt: 1755240100000, isBot: false, text: "I need a family van. Any minivans in stock?", referralSource: "direct", summary: "Inquired about minivans" },
            { createdAt: 1755240150000, isBot: true, text: "We have a 2022 Honda Odyssey for $38,000. Want to know about its features?", referralSource: "direct", summary: "Offered Odyssey details" },
            { createdAt: 1755240200000, isBot: false, text: "Does it have a rear entertainment system?", referralSource: "direct", summary: "Asked about entertainment" },
            { createdAt: 1755240250000, isBot: true, text: "Yes, it includes a rear DVD entertainment system. Want to schedule a test drive?", referralSource: "direct", summary: "Confirmed entertainment system" },
            { createdAt: 1755240300000, isBot: false, text: "What’s the warranty like for this van?", referralSource: "direct", summary: "Inquired about warranty" },
            { createdAt: 1755240350000, isBot: true, text: "It comes with a 3-year/36,000-mile warranty. Shall I book that test drive?", referralSource: "direct", summary: "Shared warranty details" }
        ],
        lastVisit: 1755240350000,
        totalVisits: 95,
        visitCount: 95,
        referralSource: "direct",
        summary: "Customer seeking a 2022 Honda Odyssey, interested in entertainment system and warranty."
    },
    {
        userId: "user-bcd456789123",
        deviceInfo: {
            browser: "Safari",
            deviceType: "Desktop",
            os: "MacOS",
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15"
        },
        location: {
            city: "Sydney",
            region: "New South Wales",
            country: "AU"
        },
        contactInfo: {
            phone: "+61-2-5555-4567",
            email: "emma.davis@example.com"
        },
        messages: [
            { createdAt: 1755250000000, isBot: true, text: "Welcome to Aussie Autos! Looking for a new car or a trade-in?", referralSource: "search_engine", summary: "Initial greeting" },
            { createdAt: 1755250100000, isBot: false, text: "I’m looking for a new ute. Any Toyota Hilux models?", referralSource: "search_engine", summary: "Inquired about Toyota Hilux" },
            { createdAt: 1755250150000, isBot: true, text: "We have the 2023 Toyota Hilux SR5 for $45,000. Want to know about its specs?", referralSource: "search_engine", summary: "Offered Hilux details" },
            { createdAt: 1755250200000, isBot: false, text: "What’s the towing capacity and fuel type?", referralSource: "search_engine", summary: "Asked about specs" },
            { createdAt: 1755250250000, isBot: true, text: "It tows up to 3,500 kg and runs on diesel. Interested in a test drive?", referralSource: "search_engine", summary: "Shared towing and fuel info" },
            { createdAt: 1755250300000, isBot: false, text: "Can I get a quote with financing options?", referralSource: "search_engine", summary: "Requested quote" },
            { createdAt: 1755250350000, isBot: true, text: "Sure, I’ll email a quote with 5-year finance options at 6.5%. Anything else?", referralSource: "search_engine", summary: "Offered quote" }
        ],
        lastVisit: 1755250350000,
        totalVisits: 85,
        visitCount: 85,
        referralSource: "Linkedin",
        summary: "Customer interested in a 2023 Toyota Hilux, seeking towing capacity and financing options."
    },
    {
        userId: "user-efg789123456",
        deviceInfo: {
            browser: "Edge",
            deviceType: "Mobile",
            os: "Windows",
            userAgent: "Mozilla/5.0 (Windows Phone 10.0; ARM; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36 Edge/40.0"
        },
        location: {
            city: "Phoenix",
            region: "Arizona",
            country: "USA"
        },
        contactInfo: {
            phone: "+1-602-555-6789",
            email: "david.lee@example.com"
        },
        messages: [
            { createdAt: 1755260000000, isBot: true, text: "Hi! Welcome to Desert Autos. Are you looking for a sedan or something bigger?", referralSource: "advertisement", summary: "Initial greeting" },
            { createdAt: 1755260100000, isBot: false, text: "I need a family SUV. Any deals on 2023 models?", referralSource: "advertisement", summary: "Inquired about SUVs" },
            { createdAt: 1755260150000, isBot: true, text: "We have a 2023 Jeep Grand Cherokee for $42,000. Want to know about its features?", referralSource: "advertisement", summary: "Offered Jeep details" },
            { createdAt: 1755260200000, isBot: false, text: "Does it have four-wheel drive?", referralSource: "advertisement", summary: "Asked about four-wheel drive" },
            { createdAt: 1755260250000, isBot: true, text: "Yes, it’s equipped with four-wheel drive. Interested in a test drive?", referralSource: "advertisement", summary: "Confirmed four-wheel drive" },
            { createdAt: 1755260300000, isBot: false, text: "What’s the warranty like? Also, any discounts?", referralSource: "advertisement", summary: "Inquired about warranty and discounts" },
            { createdAt: 1755260350000, isBot: true, text: "It comes with a 5-year/60,000-mile warranty. We can offer a $2,000 discount. Shall I book a test drive?", referralSource: "advertisement", summary: "Shared warranty and discount" }
        ],
        lastVisit: 1755260350000,
        totalVisits: 70,
        visitCount: 70,
        referralSource: "Facebook",
        summary: "Customer seeking a 2023 Jeep Grand Cherokee, interested in four-wheel drive and discounts."
    },
    {
        userId: "user-hij123456789",
        deviceInfo: {
            browser: "Chrome",
            deviceType: "Desktop",
            os: "Windows",
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
        },
        location: {
            city: "Delhi",
            region: "Delhi",
            country: "IN"
        },
        contactInfo: {
            phone: "+91-11-5555-2345",
            email: "arjun.singh@example.com"
        },
        messages: [
            { createdAt: 1755270000000, isBot: true, text: "Welcome to Capital Cars! Are you looking for a new or used vehicle?", referralSource: "direct", summary: "Initial greeting" },
            { createdAt: 1755270100000, isBot: false, text: "I’m looking for a used sedan under $8,00,000. Any options?", referralSource: "direct", summary: "Inquired about used sedans" },
            { createdAt: 1755270150000, isBot: true, text: "We have a 2019 Maruti Ciaz for $7,50,000. Want to know about its condition?", referralSource: "direct", summary: "Offered Ciaz details" },
            { createdAt: 1755270200000, isBot: false, text: "Is it single-owner? Any service history?", referralSource: "direct", summary: "Asked about ownership" },
            { createdAt: 1755270250000, isBot: true, text: "Single-owner with full service history. Want a Carfax report?", referralSource: "direct", summary: "Confirmed ownership" },
            { createdAt: 1755270300000, isBot: false, text: "Yes, send the report. Can I test drive it tomorrow?", referralSource: "direct", summary: "Requested report and test drive" },
            { createdAt: 1755270350000, isBot: true, text: "I’ll email the report. Tomorrow at 10 AM works. Can you confirm your name?", referralSource: "direct", summary: "Arranged test drive" }
        ],
        lastVisit: 1755270350000,
        totalVisits: 140,
        visitCount: 140,
        referralSource: "direct",
        summary: "Customer seeking a used Maruti Ciaz, inquiring about ownership and test drive."
    },
    {
        userId: "user-klm789123456",
        deviceInfo: {
            browser: "Safari",
            deviceType: "Mobile",
            os: "iOS",
            userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
        },
        location: {
            city: "San Francisco",
            region: "California",
            country: "USA"
        },
        contactInfo: {
            phone: "+1-415-555-5678",
            email: "lily.chen@example.com"
        },
        messages: [
            { createdAt: 1755280000000, isBot: true, text: "Hi! Welcome to Bay Area Autos. Interested in electric or hybrid cars?", referralSource: "social", summary: "Initial greeting" },
            { createdAt: 1755280100000, isBot: false, text: "I’m looking for an electric car. Any Nissan Leaf models?", referralSource: "social", summary: "Inquired about Nissan Leaf" },
            { createdAt: 1755280150000, isBot: true, text: "We have a 2022 Nissan Leaf for $25,000. Want to know about its range?", referralSource: "social", summary: "Offered Leaf details" },
            { createdAt: 1755280200000, isBot: false, text: "What’s the battery range and charging time?", referralSource: "social", summary: "Asked about battery" },
            { createdAt: 1755280250000, isBot: true, text: "It has a 226-mile range and charges in 7 hours on a Level 2 charger. Want to test drive it?", referralSource: "social", summary: "Shared battery details" },
            { createdAt: 1755280300000, isBot: false, text: "Can I get a home charger installed?", referralSource: "social", summary: "Inquired about charger" },
            { createdAt: 1755280350000, isBot: true, text: "We partner with installers for home chargers. I can connect you. Shall I book a test drive?", referralSource: "social", summary: "Offered charger support" }
        ],
        lastVisit: 1755280350000,
        totalVisits: 115,
        visitCount: 115,
        referralSource: "Instagram",
        summary: "Customer interested in a 2022 Nissan Leaf, asking about battery range and home charger."
    },
    {
        userId: "user-nop123456789",
        deviceInfo: {
            browser: "Chrome",
            deviceType: "Tablet",
            os: "Android",
            userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
        },
        location: {
            city: "Bangalore",
            region: "Karnataka",
            country: "IN"
        },
        contactInfo: {
            phone: "+91-80-5555-7890",
            email: "vikram.reddy@example.com"
        },
        messages: [
            { createdAt: 1755290000000, isBot: true, text: "Welcome to Silicon Autos! Looking for a new or used car today?", referralSource: "email", summary: "Initial greeting" },
            { createdAt: 1755290100000, isBot: false, text: "I’m interested in a new SUV. Any Tata Harrier models?", referralSource: "email", summary: "Inquired about Tata Harrier" },
            { createdAt: 1755290150000, isBot: true, text: "We have the 2023 Tata Harrier for $20,00,000. Want to know about its features?", referralSource: "email", summary: "Offered Harrier details" },
            { createdAt: 1755290200000, isBot: false, text: "Does it have a panoramic sunroof?", referralSource: "email", summary: "Asked about sunroof" },
            { createdAt: 1755290250000, isBot: true, text: "Yes, the XZ+ variant has a panoramic sunroof. Interested in a test drive?", referralSource: "email", summary: "Confirmed sunroof" },
            { createdAt: 1755290300000, isBot: false, text: "What’s the on-road price in Bangalore?", referralSource: "email", summary: "Inquired about price" },
            { createdAt: 1755290350000, isBot: true, text: "The on-road price is $22,50,000. Shall I email you a detailed quote?", referralSource: "email", summary: "Provided price" }
        ],
        lastVisit: 1755290350000,
        totalVisits: 105,
        visitCount: 105,
        referralSource: "Facebook",
        summary: "Customer seeking a 2023 Tata Harrier, asking about sunroof and on-road price."
    },
    {
        userId: "user-qrs789123456",
        deviceInfo: {
            browser: "Firefox",
            deviceType: "Desktop",
            os: "Linux",
            userAgent: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0"
        },
        location: {
            city: "Seattle",
            region: "Washington",
            country: "USA"
        },
        contactInfo: {
            phone: "+1-206-555-1234",
            email: "chris.evans@example.com"
        },
        messages: [
            { createdAt: 1755300000000, isBot: true, text: "Hi! Welcome to Evergreen Autos. Are you looking for a new or used car?", referralSource: "search_engine", summary: "Initial greeting" },
            { createdAt: 1755300100000, isBot: false, text: "I’m looking for a used Subaru Outback. Any available?", referralSource: "search_engine", summary: "Inquired about Subaru Outback" },
            { createdAt: 1755300150000, isBot: true, text: "We have a 2020 Subaru Outback for $28,000. Want to know about its condition?", referralSource: "search_engine", summary: "Offered Outback details" },
            { createdAt: 1755300200000, isBot: false, text: "Is it all-wheel drive? Any accidents?", referralSource: "search_engine", summary: "Asked about features" },
            { createdAt: 1755300250000, isBot: true, text: "Yes, it’s all-wheel drive with no accidents. Want a Carfax report?", referralSource: "search_engine", summary: "Confirmed features" },
            { createdAt: 1755300300000, isBot: false, text: "Please send the Carfax. Can I test drive this weekend?", referralSource: "search_engine", summary: "Requested report and test drive" },
            { createdAt: 1755300350000, isBot: true, text: "I’ll email the Carfax. Saturday at 1 PM works for a test drive. Can you confirm?", referralSource: "search_engine", summary: "Arranged test drive" }
        ],
        lastVisit: 1755300350000,
        totalVisits: 125,
        visitCount: 125,
        referralSource: "Linkedin",
        summary: "Customer seeking a 2020 Subaru Outback, asking about all-wheel drive and test drive."
    },
    {
        userId: "user-tuv123456789",
        deviceInfo: {
            browser: "Chrome",
            deviceType: "Mobile",
            os: "Android",
            userAgent: "Mozilla/5.0 (Linux; Android 12; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36"
        },
        location: {
            city: "Chennai",
            region: "Tamil Nadu",
            country: "IN"
        },
        contactInfo: {
            phone: "+91-44-5555-5678",
            email: "anita.verma@example.com"
        },
        messages: [
            { createdAt: 1755310000000, isBot: true, text: "Welcome to Coastal Autos! Are you looking for a new car or a trade-in?", referralSource: "direct", summary: "Initial greeting" },
            { createdAt: 1755310100000, isBot: false, text: "I want to trade in my 2016 Hyundai Creta. What’s the value?", referralSource: "direct", summary: "Inquired about trade-in" },
            { createdAt: 1755310150000, isBot: true, text: "Please share the mileage and condition of your Creta for an estimate.", referralSource: "direct", summary: "Requested trade-in details" },
            { createdAt: 1755310200000, isBot: false, text: "It has 70,000 km, good condition. What’s the estimate?", referralSource: "direct", summary: "Provided trade-in details" },
            { createdAt: 1755310250000, isBot: true, text: "We estimate $6,00,000 for your Creta. Interested in a new SUV?", referralSource: "direct", summary: "Shared trade-in estimate" },
            { createdAt: 1755310300000, isBot: false, text: "Yes, any deals on the Kia Seltos?", referralSource: "direct", summary: "Inquired about Kia Seltos" },
            { createdAt: 1755310350000, isBot: true, text: "The 2023 Kia Seltos starts at $12,00,000. Want to book a test drive?", referralSource: "direct", summary: "Offered Seltos details" }
        ],
        lastVisit: 1755310350000,
        totalVisits: 80,
        visitCount: 80,
        referralSource: "direct",
        summary: "Customer looking to trade in a 2016 Hyundai Creta and interested in a 2023 Kia Seltos."
    },
    {
        userId: "user-vwx456789123",
        deviceInfo: {
            browser: "Safari",
            deviceType: "Desktop",
            os: "MacOS",
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15"
        },
        location: {
            city: "Boston",
            region: "Massachusetts",
            country: "USA"
        },
        contactInfo: {
            phone: "+1-617-555-2345",
            email: "sophia.martin@example.com"
        },
        messages: [
            { createdAt: 1755320000000, isBot: true, text: "Hi! Welcome to Harbor Autos. Are you looking for a new or used car?", referralSource: "social", summary: "Initial greeting" },
            { createdAt: 1755320100000, isBot: false, text: "I’m looking for a used Mazda CX-5. Any in stock?", referralSource: "social", summary: "Inquired about Mazda CX-5" },
            { createdAt: 1755320150000, isBot: true, text: "We have a 2021 Mazda CX-5 for $26,000. Want to know about its features?", referralSource: "social", summary: "Offered CX-5 details" },
            { createdAt: 1755320200000, isBot: false, text: "Does it have a sunroof and navigation?", referralSource: "social", summary: "Asked about features" },
            { createdAt: 1755320250000, isBot: true, text: "Yes, it has a sunroof and built-in navigation. Want to see photos?", referralSource: "social", summary: "Confirmed features" },
            { createdAt: 1755320300000, isBot: false, text: "Please send photos. Can I test drive it tomorrow?", referralSource: "social", summary: "Requested photos and test drive" },
            { createdAt: 1755320350000, isBot: true, text: "I’ll email the photos. Tomorrow at 2 PM works. Can you confirm your name?", referralSource: "social", summary: "Arranged test drive" }
        ],
        lastVisit: 1755320350000,
        totalVisits: 100,
        visitCount: 100,
        referralSource: "Instagram",
        summary: "Customer seeking a 2021 Mazda CX-5, asking about sunroof and test drive."
    },
    {
        userId: "user-yza789123456",
        deviceInfo: {
            browser: "Chrome",
            deviceType: "Mobile",
            os: "Android",
            userAgent: "Mozilla/5.0 (Linux; Android 12; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36"
        },
        location: {
            city: "Vancouver",
            region: "British Columbia",
            country: "CA"
        },
        contactInfo: {
            phone: "+1-604-555-3456",
            email: "ethan.white@example.com"
        },
        messages: [
            { createdAt: 1755330000000, isBot: true, text: "Welcome to Pacific Autos! Are you looking for a new or used vehicle?", referralSource: "advertisement", summary: "Initial greeting" },
            { createdAt: 1755330100000, isBot: false, text: "I’m looking for a used hybrid. Any Toyota Prius models?", referralSource: "advertisement", summary: "Inquired about Toyota Prius" },
            { createdAt: 1755330150000, isBot: true, text: "We have a 2020 Toyota Prius for $22,000. Want to know about its fuel efficiency?", referralSource: "advertisement", summary: "Offered Prius details" },
            { createdAt: 1755330200000, isBot: false, text: "What’s the MPG and battery condition?", referralSource: "advertisement", summary: "Asked about efficiency" },
            { createdAt: 1755330250000, isBot: true, text: "It gets 58 MPG city and the battery is in excellent condition. Want a test drive?", referralSource: "advertisement", summary: "Shared efficiency details" },
            { createdAt: 1755330300000, isBot: false, text: "Can I get financing options for this Prius?", referralSource: "advertisement", summary: "Inquired about financing" },
            { createdAt: 1755330350000, isBot: true, text: "We offer financing at 4.5% for 60 months. Shall I send you a payment plan?", referralSource: "advertisement", summary: "Offered financing details" }
        ],
        lastVisit: 1755330350000,
        totalVisits: 90,
        visitCount: 90,
        referralSource: "Facebook",
        summary: "Customer seeking a 2020 Toyota Prius, asking about fuel efficiency and financing options."
    }
];