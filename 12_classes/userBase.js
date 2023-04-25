const User = require('./user.js');

class UserBase {
    constructor(users) {
        this.users = users
    }

    countUsers() {
        return this.users.length;
    }

    getNames() {
        return this.users.map((user) => {
            return user.getName()
        });
    }

    getUsers() {
        return this.users;
    }

    getIntroductions() {
        return this.users.map((user) => {return user.getIntroduction()});
    }
}

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

const userTest = new User('Natasha');

const userBase = new UserBase(users);

const anotherUserBase = new UserBase(userTest);

console.log(userBase.getIntroductions());


module.exports = UserBase;
