class User {
  #firstName;
  #secondName; // приватные поля
  #age;

  constructor(firstName, secondName, age){
    if(typeof firstName !== 'string' || typeof secondName !== 'string' ){ //проверки на типы данных
      throw new Error('First and second name is required');
    }
    if(typeof age !== 'number'){
      throw new Error('Age must be a number');
    }
    this.#firstName = firstName;
    this.#secondName = secondName; // конструктор с инициализацией полей
    this.#age = age;
  }
// сеттер для имени
  set firstName(firstName){
    this.#firstName = firstName;
  }
// сеттер  для фамилии
  set secondName(secondName){
    return this.#secondName =  secondName;
  }
// сеттер и геттер для возроста
  set age(age){
    this.#age = age;
  }
  get age(){
    return this.#age;
  }
// фул нейм
  get name(){
    return `${this.#firstName} ${this.#secondName}`;
  }
// и 2 функции, достаточно простые
  introduce(){
    return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`
  }

  celebrateBirthday(){
    this.#age++;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  let array = [];

  for (let i = 0; i < data.length; i++) { // в масиве даты перебираю обьекты и присваиваю его ключи как параметры конструктора класса обьекста, а после обьект закидываю в массив
    array.push(
      new User(
        data[i].firstName,
        data[i].secondName,
        data[i].age
      )
    );
  }

  return array;
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  let array = [];

  for (let i = 0; i < users.length; i++) { // перебираю юзеров и сравниваю их поле age
    if (users[i].age === age) {
      array.push(users[i]);
    }
  }

  return array;
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) { // тут сортирую при помощи компоратора тест утилс
  return function (usersArray){
    return usersArray.sort(TestUtils.sortComparatorByAge);
  }
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) { // перебираю юзеров возрост и сравниваю на не чётность
  let array = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i] % 2 !== 0) {
      array.push(users[i]);
    }
  }

  return array;
};
