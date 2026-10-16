export interface Product { id:number; name:string; category:string; unit:string; price:number; original:number; emoji:string; color:string; }
export const CATEGORIES = [
 {name:'Fruits & Veggies',icon:'🥑',color:'#e8f5e9'}, {name:'Dairy & Eggs',icon:'🥛',color:'#e8f2ff'}, {name:'Snacks',icon:'🍿',color:'#fff1dc'}, {name:'Beverages',icon:'🧃',color:'#e9e8ff'},
 {name:'Bakery',icon:'🍞',color:'#fff3e6'}, {name:'Instant Food',icon:'🍜',color:'#ffe8e8'}, {name:'Personal Care',icon:'🧴',color:'#f9eaff'}, {name:'Household',icon:'🧹',color:'#e4f6f0'}
];
export const PRODUCTS: Product[] = [
 {id:1,name:'Amul Taaza Toned Milk',category:'Dairy & Eggs',unit:'500 ml',price:27,original:29,emoji:'🥛',color:'#eef5ff'},
 {id:2,name:'Amul Butter',category:'Dairy & Eggs',unit:'100 g',price:56,original:60,emoji:'🧈',color:'#fff4dd'},
 {id:3,name:'Farm Fresh Bananas',category:'Fruits & Veggies',unit:'6 pcs',price:42,original:50,emoji:'🍌',color:'#fff8d8'},
 {id:4,name:'Shimla Apples',category:'Fruits & Veggies',unit:'4 pcs',price:119,original:150,emoji:'🍎',color:'#ffeded'},
 {id:5,name:'Fresh Red Tomatoes',category:'Fruits & Veggies',unit:'500 g',price:24,original:35,emoji:'🍅',color:'#fff0e9'},
 {id:6,name:'Aashirvaad Atta',category:'Household',unit:'5 kg',price:269,original:299,emoji:'🌾',color:'#fff4df'},
 {id:7,name:'Harvest Whole Wheat Bread',category:'Bakery',unit:'400 g',price:45,original:50,emoji:'🍞',color:'#fff3e7'},
 {id:8,name:'Farm Fresh Eggs',category:'Dairy & Eggs',unit:'6 pcs',price:54,original:65,emoji:'🥚',color:'#fff6df'},
 {id:9,name:'Lay’s Classic Salted',category:'Snacks',unit:'52 g',price:20,original:20,emoji:'🥔',color:'#fff2df'},
 {id:10,name:'Coca-Cola',category:'Beverages',unit:'750 ml',price:40,original:45,emoji:'🥤',color:'#ffe9e9'},
 {id:11,name:'Maggi 2-Minute Noodles',category:'Instant Food',unit:'Pack of 4',price:56,original:60,emoji:'🍜',color:'#fff1d9'},
 {id:12,name:'Parle-G Biscuits',category:'Snacks',unit:'800 g',price:88,original:100,emoji:'🍪',color:'#fff2e0'},
 {id:13,name:'Fortune Sunflower Oil',category:'Household',unit:'1 L',price:145,original:165,emoji:'🫗',color:'#fff7dc'},
 {id:14,name:'Amul Cheese Slices',category:'Dairy & Eggs',unit:'200 g',price:129,original:145,emoji:'🧀',color:'#fff3cd'},
 {id:15,name:'Fresh Spinach',category:'Fruits & Veggies',unit:'1 bunch',price:25,original:30,emoji:'🥬',color:'#e9f6e7'},
 {id:16,name:'Paper Boat Aamras',category:'Beverages',unit:'200 ml',price:30,original:35,emoji:'🥭',color:'#fff1d9'},
 {id:17,name:'Britannia Croissant',category:'Bakery',unit:'Pack of 2',price:40,original:45,emoji:'🥐',color:'#fff0de'},
 {id:18,name:'Dove Cream Beauty Bar',category:'Personal Care',unit:'100 g',price:65,original:72,emoji:'🧼',color:'#f3edff'},
 {id:19,name:'Surf Excel Easy Wash',category:'Household',unit:'1 kg',price:115,original:130,emoji:'🫧',color:'#eaf2ff'},
 {id:20,name:'Haldiram Aloo Bhujia',category:'Snacks',unit:'200 g',price:58,original:65,emoji:'🥨',color:'#fff0dc'},
 {id:21,name:'Chicken Masala Cup Noodles',category:'Instant Food',unit:'70 g',price:45,original:50,emoji:'🍲',color:'#fff0df'},
 {id:22,name:'Real Fruit Power Orange',category:'Beverages',unit:'1 L',price:99,original:120,emoji:'🍊',color:'#fff1de'},
 {id:23,name:'Colgate Strong Teeth',category:'Personal Care',unit:'150 g',price:98,original:110,emoji:'🪥',color:'#eaf1ff'},
 {id:24,name:'Fresh Green Capsicum',category:'Fruits & Veggies',unit:'500 g',price:36,original:45,emoji:'🫑',color:'#e8f6e9'}
];
