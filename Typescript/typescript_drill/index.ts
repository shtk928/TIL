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
type Person1 = { name: string, age: number }
const taro1: Person1 = { name: 'taro', age: 30 }
const jiro1: Person1 = { name: 'jiro', age: 22 }

// 12
type Person2 = { 
  name: string, 
  age: number, 
  email: string | undefined 
}

const taro2: Person2 = {
  name: 'taro',
  age: 30,
  email: undefined
}

const jiro2: Person2 = {
  name: 'jiro',
  age: 22,
  email: 'jiro@code-lesson.com'
}

// 13
type Person3 = { name: string, age: number, email?: string }

const taro3: Person3 = { 
  name: 'taro', 
  age: 30 
}

const jiro3: Person3 = { 
  name: 'jiro', 
  age: 22, 
  email: 'jiro@code-lesson.com' 
}

// 14
type BasicInfo = {
  name: string,
  age: number
}

type AdditionalInfo = {
  email: string
}

const person4: BasicInfo & AdditionalInfo = {
  name: 'taro',
  age: 20,
  email: 'taro@taro.com'
}

// 15
type Fruits = string[];
const fruits: Fruits = ['apple', 'orange', 'lemon'];

type Nums = number[];
const nums1: Nums = [1, 2, 3];

// 16
type Tuple = (number | null | string)[];
const nums2: Tuple = [1, null, 'Hello'];

// 17
const main = (num: number) => {
  return num + num;
}

console.log(main(15));

// 18
const func1 = (str1: string): string => 'hello' + str1;
// const func2 = (str2: string): string[] => ['hello'].push(str2);
// pushをしようするとnumber型になる
const func3 = (str3: string): void => console.log('hello' + str3);

// 19
const func4: (num3: number) => number = (num3: number) => num3 * 2;
const func5: (num4: number) => string = (num4: number) => num4 + 'px';

// 20
type Func = { (func6: () => void, second: number):string }

// 21
type Hello = 'hello';
const hello: Hello = 'hello';

// 22
type NumberOrString = number | string;
const num5: NumberOrString = 1;
const str4: NumberOrString = '1';

// 23
type Fruit = 'apple' | 'orange' | 'lemon' ;
const fruit1: Fruit = 'apple';
const fruit2: Fruit = 'orange';
const fruit3: Fruit = 'lemon';

// 24
const func7 = (): Promise<boolean> => {
  return new Promise((resolve) => {
    resolve(true);
  });
}

// 25
type Person5 = {
  readonly name: string;
  readonly age: number;
  readonly email: string;
}

// 26
const LANGUAGE = {
  ENGLISH: 'ENGLISH',
  JAPANESE: 'JAPANESE',
  CHINESE: 'CHINESE'
} as const

console.log(LANGUAGE.JAPANESE);

// 27
type User = {
  id: string;
  name: string;
}

type Post1 = {
  id: string;
  title: string;
  content: string;
}

type UserWithPosts = User & { posts:Post1[] };

const userWithPosts: UserWithPosts = {
  id: 'aaa',
  name: 'bob',
  posts: [
    {id: 'aaa', title: 'hoge1', content: 'fuga1'},
    {id: 'bbb', title: 'hoge2', content: 'fuga2'}
  ]
}

// 28
type Post2 = {
  id: string;
  title: string;
  index: number;
}

type Comments = {
  id: string;
  title: string;
  content: string;
  wordCount: number;
}

type PostWithComments = Post2 & { comments: Comments[] };

const postWithComments: PostWithComments = {
  id: 'aaa',
  title: 'testPost',
  index: 1,
  comments: [
    {id: 'aaa', title: 'hoge1', content: 'fuga1', wordCount: 4},
    {id: 'bbb', title: 'hoge2', content: 'fuga2', wordCount: 4}
  ]
}

//29
type TodoInput = {
  id: string;
  name: string;
  dueData: string | null;
  isDone: Readonly<boolean>;
}

// 30
let isShow4 = true;
let count5 = 15;
const firstName5 = 'taro';
const sports = ['tennis', 'soccer']
const user = {id: 1, name: 'jiro'}

type IsShow = typeof isShow4
type Count1 = typeof count5
type firstName1 = typeof firstName5
type Sports = typeof sports
type User1 = typeof user

// 31
const user2 = { id: 3, name: 'bob' }
type UserKey = keyof typeof user2

// 32
