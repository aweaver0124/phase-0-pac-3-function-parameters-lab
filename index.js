function introduction(name) {
    return `Hi, my name is ${name}.`;
}
introduction("Alexandra");

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Alexandra", "JavaScript");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional("Alexandra");

