// Worst Case

function worstframeStory(string) {
    const words = string.split(" ");
    const partsOfSpeech = words.slice();
 
    let result = "";
    for (let i = 0; i < words.length; i++) {
        result += partsOfSpeech[i] + " ";
    }
 
    return result.trim();
 }
 
 
 // Best Case
 
 function bestframeStory(string) {
    const words = string.split(" ");
    const partsOfSpeech = ["The", "dog", "chased", "the", "big", "cat."];
 
    let result = "";
    for (let i = 0; i < words.length; i++) {
        if (i < partsOfSpeech.length) {
            result += partsOfSpeech[i] + " ";
        }
    }
 
    return result.trim();
 }