import {inputTypeEnum} from '../common/CommonEnum';
export const defaultUserImage =
  'https://t4.ftcdn.net/jpg/01/07/43/45/360_F_107434505_fRHwF9TpuagNggbH3Gn7FP972jsKI9Vn.jpg';
export const userDetailsData = {
  username: 'exampleUser',
  name: 'John Doe',
  profileImage:
    'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
  bio: 'Web Developer | React Native Enthusiast',
  posts: [
    'This is my first post!',
    'Just finished a new project.',
    'Exploring React Native features.',
  ],
};

// export const userFields = [
//   {label: 'Name', value: 'name'},
//   {label: 'Address', value: 'address'},
//   {label: 'Phone Number', value: 'phoneNumber'},
//   {label: 'Date of Birth', value: 'dob'},
//   {label: 'Blood Group', value: 'bloodGroup'},
//   {label: "Father's Name", value: 'fathersName'},
//   {label: "Mother's Name", value: 'mothersName'},
//   {label: 'Occupation', value: 'occupation'},
//   {label: 'Gender', value: 'gender'},
//   {label: 'Taluk', value: 'taluk'},
//   {label: 'District', value: 'district'},
//   {label: 'State', value: 'state'},
//   {label: 'Education', value: 'education'},
// ];

// Define arrays for all districts in Karnataka
export const karnataka_districts = [
  'Bagalkot',
  'Ballari',
  'Belagavi',
  'Bengaluru Urban',
  'Bengaluru Rural',
  'Bidar',
  'Chamarajanagar',
  'Chikballapur',
  'Chikkamagaluru',
  'Chitradurga',
  'Dakshina Kannada',
  'Davangere',
  'Dharwad',
  'Gadag',
  'Hassan',
  'Haveri',
  'Kalaburagi',
  'Kodagu',
  'Kolar',
  'Koppal',
  'Mandya',
  'Mysuru',
  'Raichur',
  'Ramanagara',
  'Shivamogga',
  'Tumakuru',
  'Udupi',
  'Uttara Kannada',
  'Vijayapura',
  'Yadgir',
];

//blood group list

const bloodGroupList = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
// # Define taluks for each district in Karnataka
export const karnataka_taluks = {
  Bagalkot: [
    'Bagalkot',
    'Badami',
    'Bilagi',
    'Hungund',
    'Jamkhandi',
    'Mudhol',
    'Rabkavi Banhatti',
  ],
  Ballari: ['Ballari', 'Hadagalli', 'Hospet', 'Kudligi', 'Sandur', 'Siruguppa'],
  Belagavi: [
    'Athani',
    'Belagavi',
    'Chikkodi',
    'Gokak',
    'Hukkeri',
    'Khanapur',
    'Raibag',
    'Ramdurg',
    'Savadatti',
  ],
  'Bengaluru Urban': ['Bengaluru East', 'Bengaluru West', 'Anekal'],
  'Bengaluru Rural': [
    'Devanahalli',
    'Doddaballapura',
    'Hosakote',
    'Nelamangala',
  ],
  Bidar: ['Aurad', 'Basavakalyan', 'Bhalki', 'Bidar', 'Homnabad'],
  Chamarajanagar: ['Chamarajanagar', 'Gundlupet', 'Kollegal'],
  Chikballapur: [
    'Bagepalli',
    'Chikballapur',
    'Chintamani',
    'Gauribidanur',
    'Gudibande',
    'Sidlaghatta',
  ],
  Chikkamagaluru: [
    'Chikkamagaluru',
    'Kadur',
    'Koppa',
    'Mudigere',
    'Narasimharajapura',
    'Tarikere',
  ],
  Chitradurga: [
    'Challakere',
    'Chitradurga',
    'Holalkere',
    'Hosadurga',
    'Molakalmuru',
  ],
  'Dakshina Kannada': [
    'Bantwal',
    'Belthangady',
    'Mangaluru',
    'Puttur',
    'Sulya',
  ],
  Davangere: [
    'Channarayapatna',
    'Davangere',
    'Harpanahalli',
    'Honnali',
    'Jagalur',
  ],
  Dharwad: [
    'Annigeri',
    'Dharwad',
    'Hubballi',
    'Kalghatgi',
    'Kundgol',
    'Navalgund',
  ],
  Gadag: ['Gadag-Betageri', 'Lakshmeshwar', 'Mundargi', 'Nargund', 'Ron'],
  Hassan: [
    'Alur',
    'Arakalagudu',
    'Arkalgud',
    'Belur',
    'Channarayapatna',
    'Hassan',
    'Hole Narsipur',
    'Sakleshpur',
  ],
  Haveri: ['Byadgi', 'Hangal', 'Haveri', 'Ranebennur', 'Savanur', 'Shiggaon'],
  Kalaburagi: [
    'Afzalpur',
    'Aland',
    'Chincholi',
    'Chitapur',
    'Kalaburagi',
    'Jevargi',
  ],
  Kodagu: ['Madikeri', 'Somwarpet', 'Virajpet'],
  Kolar: ['Bangarapet', 'Kolar', 'Malur', 'Mulbagal', 'Srinivaspur'],
  Koppal: ['Gangawati', 'Koppal', 'Kushtagi', 'Yelbarga'],
  Mandya: [
    'Maddur',
    'Malavalli',
    'Mandya',
    'Nagamangala',
    'Pandavapura',
    'Srirangapatna',
  ],
  Mysuru: [
    'Heggadadevana Kote',
    'Krishnarajanagara',
    'Mysuru',
    'Nanjangud',
    'Piriyapatna',
    'T.Narasipura',
  ],
  Raichur: ['Devadurga', 'Lingsugur', 'Manvi', 'Raichur', 'Sindhanur'],
  Ramanagara: ['Channarayapatna', 'Kanakapura', 'Magadi', 'Ramanagara'],
  Shivamogga: [
    'Bhadravati',
    'Hosanagara',
    'Shikaripura',
    'Shivamogga',
    'Sorab',
    'Thirthahalli',
  ],
  Tumakuru: [
    'Chiknayakanhalli',
    'Gubbi',
    'Koratagere',
    'Madhugiri',
    'Pavagada',
    'Sira',
    'Tiptur',
    'Tumakuru',
  ],
  Udupi: ['Karkala', 'Kundapura', 'Udupi'],
  'Uttara Kannada': [
    'Bhatkal',
    'Haliyal',
    'Honnavar',
    'Karwar',
    'Kumta',
    'Mundgod',
    'Siddapur',
    'Sirsi',
    'Yellapur',
  ],
  Vijayapura: [
    'Babaleshwar',
    'Basavana Bagevadi',
    'Bijapur',
    'Indi',
    'Muddebihal',
    'Sindgi',
  ],
  Yadgir: ['Shahapur', 'Shorapur', 'Yadgir'],
};

export const userFields = [
  {
    label: 'Name',
    value: 'name',
    icon: 'user-circle-o',
    type: inputTypeEnum.TEXT,
  },
  {
    label: 'Address',
    value: 'address',
    icon: 'map-marker',
    type: inputTypeEnum.TEXT_AREA,
  },
  {
    label: 'Phone Number',
    value: 'phoneNumber',
    icon: 'phone',
    type: inputTypeEnum.NUMBER,
  },
  {
    label: 'Email Address',
    value: 'email',
    icon: 'envelope-o',
    type: inputTypeEnum.TEXT,
  },

  {
    label: 'Date of Birth',
    value: 'dob',
    icon: 'calendar',
    type: inputTypeEnum.DATE,
  },
  {
    label: 'Blood Group',
    value: 'bloodGroup',
    icon: 'tint',
    type: inputTypeEnum.DROP_DOWN,
    list: bloodGroupList,
  },
  {
    label: "Father's Name",
    value: 'fathersName',
    icon: 'user',
    type: inputTypeEnum.TEXT,
  },
  {
    label: "Mother's Name",
    value: 'mothersName',
    icon: 'user',
    type: inputTypeEnum.TEXT,
  },
  {
    label: 'Occupation',
    value: 'occupation',
    icon: 'briefcase',
    type: inputTypeEnum.TEXT,
  },
  {
    label: 'Gender',
    value: 'gender',
    icon: 'venus-mars',
    type: inputTypeEnum.TEXT,
  },
  {
    label: 'Taluk',
    value: 'taluk',
    icon: 'fort-awesome',
    type: inputTypeEnum.TEXT,
  },
  {
    label: 'District',
    value: 'district',
    icon: 'building-o',
    type: inputTypeEnum.TEXT,
  },
  {
    label: 'State',
    value: 'state',
    icon: 'hospital-o',
    type: inputTypeEnum.TEXT,
  },
  {
    label: 'Education',
    value: 'education',
    icon: 'mortar-board',
    type: inputTypeEnum.TEXT,
  },
];
