var wrongGuesses = 0
var correctGuesses = 0
var words = [{ name: "pen", clue: "Used for writing" }, { name: "note", clue: "The process of storing something for later use / an object used for writing" }, { name: "chair", clue: "used for sitting" }, { name: "table", clue: "used for writing, working and is an essential furniture" }, { name: "shirt", clue: "a clothe used for wearing" }, { name: "bed", clue: "a furniture used for sleeping" }, { name: "india", clue: "A popular country in Asia best know for its culture" }, { name: "tea", clue: "A popular beverage" }, { name: "donut", clue: "a snack that is often sweet and has a hole in between" }, { name: "cube", clue: "A mathematical shape that has 6 faces" }, { name: "dice", clue: "a cubic object that is used for playing various board games" }, { name: "eye", clue: "A part of your body that is used for seeing" }, { name: "cupboard", clue: "Used for storing things" }]
var choosenWordNumber = Math.floor(Math.random() * words.length);
var choosenWord = words[choosenWordNumber].name
var dash = "_"
var lettersKeyboard = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var selectedLetter;
var dashesWordGlobal;
var choosenWordsArr;
var guessedWordGlobal;
var guessedletterArr = []
var choosenString
var globalStoredStr = choosenWord.replace(choosenWord, dash.repeat(choosenWord.length))//dashesWordGlobal

document.getElementById("wordContainer").innerHTML = globalStoredStr
document.getElementById("clue").innerHTML = words[choosenWordNumber].clue

function createVirtualKeyboard() {
    for (var i = 0; i < lettersKeyboard.length; i++) {
        $("#keyboard").append(`
            <button id="${lettersKeyboard[i]}" onclick="checkWhetherElementExists(this.id)" class="button">
            ${lettersKeyboard[i]}
            </button>
        `);
    }
}



function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}


function ReplaceWordsWithDashes() {
    console.log(choosenWord.length)
    var dashesWord = choosenWord.replace(choosenWord, dash.repeat(choosenWord.length))
    var charecterArr = choosenWord.split('');
    console.log(dashesWord)
    console.log(charecterArr)
    choosenWordsArr = charecterArr;
    dashesWordGlobal = dashesWord

}

function loadImage() {
    var img = document.createElement("img");
    img.src = `assets/${wrongGuesses}.jpg`;
    img.style = "display: block; margin-left: auto; margin-right: auto; width: auto;"
    var src = document.getElementById("image-container");
    src.innerHTML = "";
    src.append(img);
}

loadImage()
ReplaceWordsWithDashes()
createVirtualKeyboard()

var a = choosenWordsArr.indexOf("o");

function checkVictory(){
    if(correctGuesses == choosenWord.length){
        alert("You Won!! Congratulations!!")
        location.reload();
    }
}

function checkWhetherElementExists(ClickedElementId) {
    console.log(ClickedElementId)
    selectedLetter = ClickedElementId

    var letterStatus = choosenWordsArr.indexOf(ClickedElementId)
    if (letterStatus >= 0) {
        console.log("word Exists!")
        String.prototype.replaceAt = function (index, replacement) {
            if (index >= this.length) {
                return this.valueOf();
            }

            return this.substring(0, index) + replacement + this.substring(index + 1);
        }



        var str = globalStoredStr;
        str = globalStoredStr.replaceAt(letterStatus, ClickedElementId);
        var storedStr = str
        globalStoredStr = storedStr

        console.log(globalStoredStr);
        appendWordToContainer()

        correctGuesses = correctGuesses + 1;
        checkVictory()

    } else {
        if (wrongGuesses < 6) {
            console.log("Word Doesn't Exist! You lose A point")
            wrongGuesses = wrongGuesses + 1;
            console.log(wrongGuesses)
        } else {
            alert("You lost!! Game over, Try Again!!")
            location.reload()
        }

    }
    loadImage()
}

function appendWordToContainer() {
    document.getElementById("wordContainer").innerHTML = globalStoredStr
}
console.log(a)
console.log(choosenWordNumber)
console.log(choosenWord)