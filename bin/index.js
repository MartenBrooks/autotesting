#!/usr/bin/env node
const capitalize = (word) => {
    if (word.length === 0) {
        return '';
    }
    const firstLetter = word[0].toUpperCase();
    const restWord = word.slice(1);
    return firstLetter + restWord;
}

export default capitalize;