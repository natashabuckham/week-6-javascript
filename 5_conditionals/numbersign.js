const getNumberSign = (a) => {
    if (a === 0) {
        return 'zero';
    } else if (a > 0) {
        return 'positive';
    } else {return 'negative';}
};
