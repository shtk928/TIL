// 1
let isShow1: boolean = true;
let isEnding: boolean = false;

// 2
let count1: number = 15;
let num: number = 2;
let float: number = 2.33;

// 3
let firstName1: string = 'tarou';
let lastName1: string = 'Yamada';
let englishName: string = 'mad';

// 4
let isShow2: boolean = true;
let count2: number = 15;
let firstName2: string = 'tarou';

// 5
let x1: null = null;

// 6
let y1: undefined = undefined;

// 7
let x2: any = 'hello';
x2 = 1;
x2 = undefined;
x2 = [];

// 8
let y2: never

// 9
type Count = number;
let count3: Count = 15;

type FirstName = string;
let firstName3: FirstName = 'taro';

type LastName = string;
let lastName2: LastName = 'suzuki';

// 10
let isShow3 = true;
let count4 = 15;
let firstName4 = 'taro';

isShow3 = false;
count4 = 100;
firstName4 = 'honda';

// 11
type Person = { name: string, age: number }
const taro: Person = { name: 'taro', age: 30 }
const jiro: Person = { name: 'jiro', age: 22 }

// 12 オブジェクトに型注釈をつけてみよう
