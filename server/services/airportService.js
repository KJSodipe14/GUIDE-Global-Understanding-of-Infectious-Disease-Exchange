const cityToIATA = {
  // North America - USA
  'new york': 'JFK', 'nyc': 'JFK', 'manhattan': 'JFK',
  'los angeles': 'LAX', 'la': 'LAX',
  'chicago': 'ORD',
  'houston': 'IAH',
  'dallas': 'DFW',
  'miami': 'MIA',
  'atlanta': 'ATL',
  'san francisco': 'SFO',
  'seattle': 'SEA',
  'boston': 'BOS',
  'washington': 'IAD', 'dc': 'IAD',
  'denver': 'DEN',
  'phoenix': 'PHX',
  'las vegas': 'LAS',
  'orlando': 'MCO',
  'minneapolis': 'MSP',
  'detroit': 'DTW',
  'philadelphia': 'PHL',
  'charlotte': 'CLT',
  'portland': 'PDX',
  'salt lake city': 'SLC',
  'san diego, ca': 'SAN',
  'tampa': 'TPA',
  'nashville': 'BNA',
  'austin': 'AUS',
  'new orleans': 'MSY',
  'baltimore': 'BWI',
  'cleveland': 'CLE',
  'pittsburgh': 'PIT',
  'memphis': 'MEM',
  'kansas city': 'MCI',
  'indianapolis': 'IND',
  'columbus': 'CMH',
  'san jose, ca': 'SJC',
  'oakland': 'OAK',
  'sacramento': 'SMF',
  'raleigh': 'RDU',
  'richmond': 'RIC',
  'norfolk': 'ORF',
  'buffalo': 'BUF',
  'albany': 'ALB',
  'hartford': 'BDL',
  'providence': 'PVD',
  'milwaukee': 'MKE',
  'st louis': 'STL',
  'omaha': 'OMA',
  'tulsa': 'TUL',
  'oklahoma city': 'OKC',
  'albuquerque': 'ABQ',
  'tucson': 'TUS',
  'el paso': 'ELP',
  'san antonio': 'SAT',
  'fort worth': 'DFW',
  'jacksonville': 'JAX',
  'louisville': 'SDF',
  'birmingham': 'BHM',
  'little rock': 'LIT',
  'jackson': 'JAN',
  'baton rouge': 'BTR',
  'shreveport': 'SHV',
  'united states': 'JFK', 'usa': 'JFK', 'us': 'JFK', 'america': 'JFK',
  'state of california': 'LAX', 'california': 'LAX',

  // North America - Canada
  'toronto': 'YYZ',
  'vancouver': 'YVR',
  'montreal': 'YUL',
  'calgary': 'YYC',
  'edmonton': 'YEG',
  'ottawa': 'YOW',
  'winnipeg': 'YWG',
  'quebec': 'YQB',
  'halifax': 'YHZ',
  'canada': 'YYZ',

  // North America - Mexico
  'mexico city': 'MEX', 'cdmx': 'MEX',
  'cancun': 'CUN',
  'guadalajara': 'GDL',
  'monterrey': 'MTY',
  'tijuana': 'TIJ',
  'mexico': 'MEX',

  // Central America & Caribbean
  'san jose costa rica': 'SJO',
  'costa rica': 'SJO',
  'panama city': 'PTY',
  'panama': 'PTY',
  'havana': 'HAV',
  'cuba': 'HAV',
  'santo domingo': 'SDQ',
  'dominican republic': 'SDQ',
  'san juan': 'SJU',
  'puerto rico': 'SJU',
  'kingston': 'KIN',
  'jamaica': 'KIN',
  'port au prince': 'PAP',
  'haiti': 'PAP',
  'guatemala city': 'GUA',
  'guatemala': 'GUA',
  'tegucigalpa': 'TGU',
  'honduras': 'TGU',
  'managua': 'MGA',
  'nicaragua': 'MGA',
  'san salvador': 'SAL',
  'el salvador': 'SAL',

  // South America
  'sao paulo': 'GRU', 'são paulo': 'GRU',
  'rio de janeiro': 'GIG',
  'brasilia': 'BSB',
  'buenos aires': 'EZE',
  'lima': 'LIM',
  'bogota': 'BOG', 'bogotá': 'BOG',
  'santiago': 'SCL',
  'caracas': 'CCS',
  'quito': 'UIO',
  'la paz': 'LPB',
  'asuncion': 'ASU',
  'montevideo': 'MVD',
  'guayaquil': 'GYE',
  'medellin': 'MDE', 'medellín': 'MDE',
  'cali': 'CLO',
  'brazil': 'GRU',
  'argentina': 'EZE',
  'colombia': 'BOG',
  'peru': 'LIM',
  'chile': 'SCL',
  'venezuela': 'CCS',
  'ecuador': 'UIO',
  'bolivia': 'LPB',
  'paraguay': 'ASU',
  'uruguay': 'MVD',

  // Europe - UK
  'london': 'LHR',
  'heathrow': 'LHR',
  'gatwick': 'LGW',
  'manchester': 'MAN',
  'birmingham uk': 'BHX',
  'edinburgh': 'EDI',
  'glasgow': 'GLA',
  'bristol': 'BRS',
  'leeds': 'LBA',
  'united kingdom': 'LHR', 'uk': 'LHR', 'england': 'LHR',
  'scotland': 'EDI',

  // Europe - Western
  'paris': 'CDG',
  'france': 'CDG',
  'amsterdam': 'AMS',
  'netherlands': 'AMS', 'holland': 'AMS',
  'frankfurt': 'FRA',
  'berlin': 'BER',
  'munich': 'MUC',
  'germany': 'FRA',
  'madrid': 'MAD',
  'barcelona': 'BCN',
  'spain': 'MAD',
  'rome': 'FCO',
  'milan': 'MXP',
  'venice': 'VCE',
  'naples': 'NAP',
  'italy': 'FCO',
  'lisbon': 'LIS',
  'portugal': 'LIS',
  'zurich': 'ZRH',
  'geneva': 'GVA',
  'switzerland': 'ZRH',
  'vienna': 'VIE',
  'austria': 'VIE',
  'brussels': 'BRU',
  'belgium': 'BRU',
  'copenhagen': 'CPH',
  'denmark': 'CPH',
  'stockholm': 'ARN',
  'sweden': 'ARN',
  'oslo': 'OSL',
  'norway': 'OSL',
  'helsinki': 'HEL',
  'finland': 'HEL',
  'dublin': 'DUB',
  'ireland': 'DUB',
  'athens': 'ATH',
  'greece': 'ATH',

  // Europe - Eastern
  'moscow': 'SVO',
  'st petersburg': 'LED',
  'russia': 'SVO',
  'warsaw': 'WAW',
  'poland': 'WAW',
  'prague': 'PRG',
  'czech republic': 'PRG', 'czechia': 'PRG',
  'budapest': 'BUD',
  'hungary': 'BUD',
  'bucharest': 'OTP',
  'romania': 'OTP',
  'sofia': 'SOF',
  'bulgaria': 'SOF',
  'zagreb': 'ZAG',
  'croatia': 'ZAG',
  'belgrade': 'BEG',
  'serbia': 'BEG',
  'kiev': 'KBP', 'kyiv': 'KBP',
  'ukraine': 'KBP',
  'minsk': 'MSQ',
  'belarus': 'MSQ',
  'riga': 'RIX',
  'latvia': 'RIX',
  'vilnius': 'VNO',
  'lithuania': 'VNO',
  'tallinn': 'TLL',
  'estonia': 'TLL',
  'bratislava': 'BTS',
  'slovakia': 'BTS',
  'ljubljana': 'LJU',
  'slovenia': 'LJU',
  'tirana': 'TIA',
  'albania': 'TIA',
  'chisinau': 'KIV',
  'moldova': 'KIV',

  // Middle East
  'dubai': 'DXB',
  'abu dhabi': 'AUH',
  'uae': 'DXB', 'united arab emirates': 'DXB',
  'doha': 'DOH',
  'qatar': 'DOH',
  'riyadh': 'RUH',
  'jeddah': 'JED',
  'saudi arabia': 'RUH',
  'kuwait city': 'KWI',
  'kuwait': 'KWI',
  'muscat': 'MCT',
  'oman': 'MCT',
  'manama': 'BAH',
  'bahrain': 'BAH',
  'beirut': 'BEY',
  'lebanon': 'BEY',
  'amman': 'AMM',
  'jordan': 'AMM',
  'tel aviv': 'TLV',
  'israel': 'TLV',
  'ankara': 'ESB',
  'istanbul': 'IST',
  'turkey': 'IST',
  'tehran': 'IKA',
  'iran': 'IKA',
  'baghdad': 'BGW',
  'iraq': 'BGW',
  'damascus': 'DAM',
  'syria': 'DAM',
  'sanaa': 'SAH',
  'yemen': 'SAH',

  // Africa
  'cairo': 'CAI',
  'egypt': 'CAI',
  'nairobi': 'NBO',
  'kenya': 'NBO',
  'addis ababa': 'ADD',
  'ethiopia': 'ADD',
  'lagos': 'LOS',
  'abuja': 'ABV',
  'nigeria': 'LOS',
  'johannesburg': 'JNB',
  'cape town': 'CPT',
  'south africa': 'JNB',
  'casablanca': 'CMN',
  'morocco': 'CMN',
  'tunis': 'TUN',
  'tunisia': 'TUN',
  'algiers': 'ALG',
  'algeria': 'ALG',
  'tripoli': 'TIP',
  'libya': 'TIP',
  'khartoum': 'KRT',
  'sudan': 'KRT',
  'dakar': 'DSS',
  'senegal': 'DSS',
  'accra': 'ACC',
  'ghana': 'ACC',
  'abidjan': 'ABJ',
  'ivory coast': 'ABJ', 'cote divoire': 'ABJ',
  'dar es salaam': 'DAR',
  'tanzania': 'DAR',
  'kampala': 'EBB',
  'uganda': 'EBB',
  'kinshasa': 'FIH',
  'drc': 'FIH', 'democratic republic of the congo': 'FIH', 'congo': 'FIH',
  'brazzaville': 'BZV',
  'republic of congo': 'BZV',
  'luanda': 'LAD',
  'angola': 'LAD',
  'lusaka': 'LUN',
  'zambia': 'LUN',
  'harare': 'HRE',
  'zimbabwe': 'HRE',
  'maputo': 'MPM',
  'mozambique': 'MPM',
  'antananarivo': 'TNR',
  'madagascar': 'TNR',
  'lilongwe': 'LLW',
  'malawi': 'LLW',
  'kigali': 'KGL',
  'rwanda': 'KGL',
  'bujumbura': 'BJM',
  'burundi': 'BJM',
  'mogadishu': 'MGQ',
  'somalia': 'MGQ',
  'djibouti': 'JIB',
  'asmara': 'ASM',
  'eritrea': 'ASM',
  'monrovia': 'ROB',
  'liberia': 'ROB',
  'freetown': 'FNA',
  'sierra leone': 'FNA',
  'conakry': 'CKY',
  'guinea': 'CKY',
  'bamako': 'BKO',
  'mali': 'BKO',
  'ouagadougou': 'OUA',
  'burkina faso': 'OUA',
  'niamey': 'NIM',
  'niger': 'NIM',
  'ndjamena': 'NDJ',
  'chad': 'NDJ',
  'yaounde': 'NSI',
  'cameroon': 'NSI',
  'libreville': 'LBV',
  'gabon': 'LBV',
  'malabo': 'SSG',
  'equatorial guinea': 'SSG',
  'bangui': 'BGF',
  'central african republic': 'BGF',
  'windhoek': 'WDH',
  'namibia': 'WDH',
  'gaborone': 'GBE',
  'botswana': 'GBE',
  'maseru': 'MSU',
  'lesotho': 'MSU',
  'mbabane': 'SHO',
  'eswatini': 'SHO', 'swaziland': 'SHO',
  'port louis': 'MRU',
  'mauritius': 'MRU',

  // South Asia
  'delhi': 'DEL', 'new delhi': 'DEL',
  'mumbai': 'BOM', 'bombay': 'BOM',
  'bangalore': 'BLR', 'bengaluru': 'BLR',
  'hyderabad': 'HYD',
  'chennai': 'MAA', 'madras': 'MAA',
  'kolkata': 'CCU', 'calcutta': 'CCU',
  'barasat': 'CCU',
  'ahmedabad': 'AMD',
  'pune': 'PNQ',
  'kozhikode': 'CCJ', 'calicut': 'CCJ',
  'kochi': 'COK', 'cochin': 'COK',
  'india': 'DEL',
  'dhaka': 'DAC',
  'chittagong': 'CGP',
  'bangladesh': 'DAC',
  'karachi': 'KHI',
  'lahore': 'LHE',
  'islamabad': 'ISB',
  'pakistan': 'KHI',
  'colombo': 'CMB',
  'sri lanka': 'CMB',
  'kathmandu': 'KTM',
  'nepal': 'KTM',
  'thimphu': 'PBH',
  'bhutan': 'PBH',
  'male': 'MLE',
  'maldives': 'MLE',

  // Southeast Asia
  'bangkok': 'BKK',
  'thailand': 'BKK',
  'jakarta': 'CGK',
  'bali': 'DPS',
  'indonesia': 'CGK',
  'kuala lumpur': 'KUL',
  'malaysia': 'KUL',
  'singapore': 'SIN',
  'manila': 'MNL',
  'philippines': 'MNL',
  'hanoi': 'HAN',
  'ho chi minh': 'SGN', 'saigon': 'SGN',
  'vietnam': 'HAN',
  'phnom penh': 'PNH',
  'cambodia': 'PNH',
  'vientiane': 'VTE',
  'laos': 'VTE',
  'yangon': 'RGN', 'rangoon': 'RGN',
  'myanmar': 'RGN', 'burma': 'RGN',
  'naypyidaw': 'NYT',
  'bandar seri begawan': 'BWN',
  'brunei': 'BWN',
  'dili': 'DIL',
  'east timor': 'DIL', 'timor leste': 'DIL',

  // East Asia
  'beijing': 'PEK',
  'shanghai': 'PVG',
  'guangzhou': 'CAN',
  'shenzhen': 'SZX',
  'chengdu': 'CTU',
  'hong kong': 'HKG',
  'china': 'PEK',
  'tokyo': 'NRT',
  'osaka': 'KIX',
  'japan': 'NRT',
  'seoul': 'ICN',
  'busan': 'PUS',
  'south korea': 'ICN', 'korea': 'ICN',
  'taipei': 'TPE',
  'taiwan': 'TPE',
  'ulaanbaatar': 'ULN',
  'mongolia': 'ULN',
  'pyongyang': 'FNJ',
  'north korea': 'FNJ',

  // Central Asia
  'almaty': 'ALA',
  'astana': 'NQZ',
  'kazakhstan': 'ALA',
  'tashkent': 'TAS',
  'uzbekistan': 'TAS',
  'bishkek': 'FRU',
  'kyrgyzstan': 'FRU',
  'dushanbe': 'DYU',
  'tajikistan': 'DYU',
  'ashgabat': 'ASB',
  'turkmenistan': 'ASB',

  // Caucasus
  'baku': 'GYD',
  'azerbaijan': 'GYD',
  'yerevan': 'EVN',
  'armenia': 'EVN',
  'tbilisi': 'TBS',
  'georgia': 'TBS',

  // South Asia - Afghanistan
  'kabul': 'KBL',
  'afghanistan': 'KBL',

  // Oceania
  'sydney': 'SYD',
  'melbourne': 'MEL',
  'brisbane': 'BNE',
  'perth': 'PER',
  'adelaide': 'ADL',
  'australia': 'SYD',
  'auckland': 'AKL',
  'wellington': 'WLG',
  'new zealand': 'AKL',
  'suva': 'SUV',
  'fiji': 'NAN',
  'port moresby': 'POM',
  'papua new guinea': 'POM',
  'honiara': 'HIR',
  'solomon islands': 'HIR',
  'nuku alofa': 'TBU',
  'tonga': 'TBU',
  'apia': 'APW',
  'samoa': 'APW',
  'upolu island': 'APW',
  'vanuatu': 'VLI',
  'port vila': 'VLI',
  'new caledonia': 'NOU',
  'noumea': 'NOU', 'nouméa': 'NOU',
  'wallis and futuna': 'WLS',
  'wallis island': 'WLS',
  'futuna island': 'FUT',
}

// Fallback for when name-based lookup fails entirely — e.g. small towns like
// "Mongbwalu" that will never be in a hand-maintained city dictionary. Finds
// the geographically nearest major airport using the outbreak's own
// lat/lng, which is already known regardless of how its city name is spelled.
// Not exhaustive — a broad global spread, not every regional airport — but
// good enough for a straight-line travel-risk approximation.
const MAJOR_AIRPORTS = [
  // North America
  { iata: 'JFK', lat: 40.6413, lng: -73.7781 }, { iata: 'LAX', lat: 33.9416, lng: -118.4085 },
  { iata: 'ORD', lat: 41.9742, lng: -87.9073 }, { iata: 'ATL', lat: 33.6407, lng: -84.4277 },
  { iata: 'DFW', lat: 32.8998, lng: -97.0403 }, { iata: 'SFO', lat: 37.6213, lng: -122.3790 },
  { iata: 'SEA', lat: 47.4502, lng: -122.3088 }, { iata: 'MIA', lat: 25.7959, lng: -80.2870 },
  { iata: 'IAH', lat: 29.9902, lng: -95.3368 }, { iata: 'DEN', lat: 39.8561, lng: -104.6737 },
  { iata: 'YYZ', lat: 43.6777, lng: -79.6248 }, { iata: 'YVR', lat: 49.1947, lng: -123.1792 },
  { iata: 'MEX', lat: 19.4363, lng: -99.0721 },
  // South America
  { iata: 'GRU', lat: -23.4356, lng: -46.4731 }, { iata: 'EZE', lat: -34.8222, lng: -58.5358 },
  { iata: 'BOG', lat: 4.7016, lng: -74.1469 }, { iata: 'LIM', lat: -12.0219, lng: -77.1143 },
  { iata: 'SCL', lat: -33.3930, lng: -70.7858 }, { iata: 'CCS', lat: 10.6013, lng: -66.9911 },
  // Europe
  { iata: 'LHR', lat: 51.4700, lng: -0.4543 }, { iata: 'CDG', lat: 49.0097, lng: 2.5479 },
  { iata: 'FRA', lat: 50.0379, lng: 8.5622 }, { iata: 'AMS', lat: 52.3105, lng: 4.7683 },
  { iata: 'MAD', lat: 40.4983, lng: -3.5676 }, { iata: 'FCO', lat: 41.8003, lng: 12.2389 },
  { iata: 'IST', lat: 41.2753, lng: 28.7519 }, { iata: 'SVO', lat: 55.9736, lng: 37.4125 },
  { iata: 'WAW', lat: 52.1657, lng: 20.9671 }, { iata: 'ARN', lat: 59.6519, lng: 17.9186 },
  { iata: 'ATH', lat: 37.9364, lng: 23.9445 }, { iata: 'DUB', lat: 53.4264, lng: -6.2499 },
  // Middle East
  { iata: 'DXB', lat: 25.2532, lng: 55.3657 }, { iata: 'DOH', lat: 25.2731, lng: 51.6081 },
  { iata: 'TLV', lat: 32.0114, lng: 34.8867 }, { iata: 'RUH', lat: 24.9576, lng: 46.6988 },
  { iata: 'AMM', lat: 31.7226, lng: 35.9932 }, { iata: 'IKA', lat: 35.4161, lng: 51.1522 },
  // Africa
  { iata: 'CAI', lat: 30.1219, lng: 31.4056 }, { iata: 'NBO', lat: -1.3192, lng: 36.9278 },
  { iata: 'ADD', lat: 8.9779, lng: 38.7993 }, { iata: 'LOS', lat: 6.5774, lng: 3.3212 },
  { iata: 'JNB', lat: -26.1367, lng: 28.2411 }, { iata: 'CPT', lat: -33.9648, lng: 18.6017 },
  { iata: 'ACC', lat: 5.6052, lng: -0.1668 }, { iata: 'DAR', lat: -6.8781, lng: 39.2026 },
  { iata: 'FIH', lat: -4.3857, lng: 15.4446 }, { iata: 'EBB', lat: 0.0424, lng: 32.4435 },
  { iata: 'KGL', lat: -1.9686, lng: 30.1395 }, { iata: 'CMN', lat: 33.3675, lng: -7.5900 },
  { iata: 'TUN', lat: 36.8510, lng: 10.2272 }, { iata: 'KRT', lat: 15.5895, lng: 32.5532 },
  { iata: 'DSS', lat: 14.6708, lng: -17.0731 }, { iata: 'ABJ', lat: 5.2614, lng: -3.9264 },
  { iata: 'LUN', lat: -15.3308, lng: 28.4526 }, { iata: 'HRE', lat: -17.9318, lng: 31.0928 },
  { iata: 'MPM', lat: -25.9208, lng: 32.5726 }, { iata: 'WDH', lat: -22.4799, lng: 17.4709 },
  // South Asia
  { iata: 'DEL', lat: 28.5562, lng: 77.1000 }, { iata: 'BOM', lat: 19.0896, lng: 72.8656 },
  { iata: 'CCU', lat: 22.6547, lng: 88.4467 }, { iata: 'MAA', lat: 12.9941, lng: 80.1709 },
  { iata: 'BLR', lat: 13.1986, lng: 77.7066 }, { iata: 'DAC', lat: 23.8433, lng: 90.3978 },
  { iata: 'KHI', lat: 24.9065, lng: 67.1608 }, { iata: 'CMB', lat: 7.1808, lng: 79.8842 },
  { iata: 'KTM', lat: 27.6966, lng: 85.3591 },
  // Southeast & East Asia
  { iata: 'BKK', lat: 13.6900, lng: 100.7501 }, { iata: 'SIN', lat: 1.3644, lng: 103.9915 },
  { iata: 'KUL', lat: 2.7456, lng: 101.7099 }, { iata: 'CGK', lat: -6.1256, lng: 106.6559 },
  { iata: 'MNL', lat: 14.5086, lng: 121.0194 }, { iata: 'HAN', lat: 21.2212, lng: 105.8072 },
  { iata: 'SGN', lat: 10.8188, lng: 106.6520 }, { iata: 'RGN', lat: 16.9073, lng: 96.1332 },
  { iata: 'PEK', lat: 40.0799, lng: 116.6031 }, { iata: 'PVG', lat: 31.1443, lng: 121.8083 },
  { iata: 'HKG', lat: 22.3080, lng: 113.9185 }, { iata: 'NRT', lat: 35.7719, lng: 140.3928 },
  { iata: 'ICN', lat: 37.4602, lng: 126.4407 }, { iata: 'TPE', lat: 25.0797, lng: 121.2342 },
  // Central Asia / Caucasus
  { iata: 'ALA', lat: 43.3521, lng: 77.0405 }, { iata: 'TAS', lat: 41.2579, lng: 69.2812 },
  { iata: 'GYD', lat: 40.4675, lng: 50.0467 }, { iata: 'TBS', lat: 41.6693, lng: 44.9547 },
  // Oceania / Pacific
  { iata: 'SYD', lat: -33.9399, lng: 151.1753 }, { iata: 'MEL', lat: -37.6690, lng: 144.8410 },
  { iata: 'AKL', lat: -37.0082, lng: 174.7850 }, { iata: 'NAN', lat: -17.7554, lng: 177.4433 },
  { iata: 'POM', lat: -9.4434, lng: 147.2200 }, { iata: 'VLI', lat: -17.6993, lng: 168.3197 },
  { iata: 'NOU', lat: -22.0146, lng: 166.2129 },
];

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getNearestIATA(lat, lng) {
  if (lat == null || lng == null || Number.isNaN(lat) || Number.isNaN(lng)) return null;
  let closest = null;
  let closestDist = Infinity;
  for (const airport of MAJOR_AIRPORTS) {
    const dist = haversineKm(lat, lng, airport.lat, airport.lng);
    if (dist < closestDist) {
      closestDist = dist;
      closest = airport.iata;
    }
  }
  return closest;
}

// Strips parenthetical qualifiers like "(Pacific region)" or "(Territory-wide)"
// that show up in dataset-sourced outbreak locations but never in a plain city name.
function stripParenthetical(str) {
  return str.replace(/\([^)]*\)/g, '').trim()
}

function getIATA(cityOrCountry) {
  if (!cityOrCountry) return null
  const raw = cityOrCountry.toLowerCase().trim()

  // 1. Exact match on the full raw string.
  if (cityToIATA[raw]) return cityToIATA[raw]

  // 2. Parenthetical content is often the more meaningful location for
  // "travel-acquired" cases — e.g. "(Fiji), New Zealand" means exposure
  // happened in Fiji even though it's reported via New Zealand. Try
  // matching what's inside the parens before falling back to the text
  // around them.
  const parenGroups = raw.match(/\(([^)]*)\)/g) || []
  for (const group of parenGroups) {
    const inner = group.slice(1, -1)
    const innerSegments = inner.split(',').map(s => s.trim()).filter(Boolean)
    for (const segment of innerSegments) {
      if (cityToIATA[segment]) return cityToIATA[segment]
    }
  }

  // 3. Exact match after stripping "(...)" entirely — e.g. "vanuatu (pacific region)" -> "vanuatu"
  const cleaned = stripParenthetical(raw)
  if (cityToIATA[cleaned]) return cityToIATA[cleaned]

  // 4. Try each comma-separated part of the cleaned string — e.g.
  // "futuna island, wallis and futuna" gets tried as two separate pieces.
  const segments = cleaned.split(',').map(s => s.trim()).filter(Boolean)
  for (const segment of segments) {
    if (cityToIATA[segment]) return cityToIATA[segment]
  }

  // 5. Last resort: substring match against every known place name, checked
  // against the full raw string (so parenthetical content is included),
  // longest key first so a specific match ("wallis and futuna") wins over a
  // shorter one that could coincidentally also appear in the string.
  const keys = Object.keys(cityToIATA).sort((a, b) => b.length - a.length)
  for (const key of keys) {
    if (raw.includes(key)) return cityToIATA[key]
  }

  return null
}

module.exports = { getIATA, getNearestIATA, cityToIATA }