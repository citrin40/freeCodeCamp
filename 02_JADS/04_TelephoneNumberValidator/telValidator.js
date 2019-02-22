function telephoneCheck(str) {
    // Good luck!
    return /^[1]? ?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/.test(str);

}

telephoneCheck("555-555-5555");