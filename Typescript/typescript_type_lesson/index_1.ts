// 1-1
function isPositive1(num: number): boolean {
  return num >= 0;
}


// 1-2
type User = {
  name: string;
  age: number;
  private: boolean;
}

function showUserInfo(user: User) {
  //省略
}

// 使用例
showUserInfo(
  { name: 'John Smith', age: 16, private: false }
);


// 1-3 わからん
type IsPositiveFunc = {
  (num: number): boolean => 
}

const isPositive2: IsPositiveFunc = num => num >= 0;

// 使用例
isPositive2(5);


// 1-4
function sumOfPos(arr: number[]): number {
  return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);