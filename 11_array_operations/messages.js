const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const singleMessage = (person) => {
    return `Hi ${person}! 50% off our best candies for you today!`;
};

const generateMessages = (nameArray) => {
    return nameArray.map(singleMessage);
};

console.log(generateMessages(names));




