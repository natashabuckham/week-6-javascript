const errorFunction = () => {
    throw new Error('there is an error!');
}

// errorFunction();


const secondLevel = () => {
    errorFunction();
}

secondLevel();
