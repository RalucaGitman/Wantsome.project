/*in clasa*/

function isAnagram(word1 = "", word2 = "") {
    if (word1.length !== word2.length) {
        return false;
    } else {
        
    }
    const processedWord1 = word1
    .split("")
    .sort()
    .join("");
    const processedWord2 = word2
    .split("")
    .sort()
    .join("");

    return processedWord1 === processedWord2;
}

console.log(isAnagram("costel", "celot"));