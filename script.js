const button = document.getElementById("play-button");
const vishnuDice = document.getElementById("player-1-dice");
const tulsiDice = document.getElementById("player-2-dice");
const resultHeading = document.getElementById("result");
const oneHtml = `<div class="dice-dot"></div>`;
const twoHtml = `<div class="dice-two">
                    <div class="dice-dot"></div>
                    <div class="dice-dot"></div>
                </div>`;

const threeHtml = `<div class="dice-three">
                    <div class="first-child">
                        <div class="dice-dot"></div>
                    </div>
                    <div class="second-child">
                        <div class="dice-dot"></div>
                    </div>
                    <div class="third-child">
                        <div class="dice-dot"></div>
                    </div>
                </div>`;
const fourHtml = `<div class="dice-four">
                    <div>
                        <div class="dice-dot"></div>
                        <div class="dice-dot"></div>
                    </div>
                    <div>
                        <div class="dice-dot"></div>
                        <div class="dice-dot"></div>
                    </div>
                </div>`;
const fiveHtml = `<div class="dice-five">
                    <div>
                        <div class="dice-dot"></div>
                        <div class="dice-dot"></div>
                    </div>
                    <div class="center">
                        <div class="dice-dot"></div>
                    </div>
                    <div>
                        <div class="dice-dot"></div>
                        <div class="dice-dot"></div>
                    </div>
                </div>`;
const sixHtml = `<div class="dice-six">
            <div>
                <div class="dice-dot"></div>
                <div class="dice-dot"></div>
            </div>
            <div>
                <div class="dice-dot"></div>
                <div class="dice-dot"></div>
            </div>
            <div>
                <div class="dice-dot"></div>
                <div class="dice-dot"></div>
            </div>
        </div>`;

const numberMap = [oneHtml,twoHtml,threeHtml,fourHtml,fiveHtml,sixHtml]
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollDice(){
    const vishnuScore = getRandomNumber()- 1;
    const tulsiScore = getRandomNumber()- 1;
    vishnuDice.innerHTML = numberMap[vishnuScore];
    tulsiDice.innerHTML = numberMap[tulsiScore];
    if (vishnuScore > tulsiScore){
        resultHeading.innerHTML = "Vishnu Won 🔥🔥";
    }
    else if (tulsiScore > vishnuScore){
        resultHeading.innerHTML = "Tulsi Won 🎀🎀";
    }
    else{
        resultHeading.innerHTML = "Game Tied 🏳️🏳️"
    }
};
button.addEventListener('click',rollDice);