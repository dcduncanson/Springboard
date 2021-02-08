// Timer Exercise: countdown

function countDown(count) {
    let startCount = count;
    let time = setInterval(timer, 1000);

    let timer = function () {
        if (startCount <= 0) {
            console.log("DONE!");
            clearInterval(time);
        } else {
            console.log(startCount);
        }
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////

// Timer Exercise: randomGame

function randomGame() {
    let counter = 0;
    let timer = setInterval(game, 1000);

    let game = function () {
        let randomNum = Math.random();
        counter++;
        if (randomNum > .75) {
            console.log("It took " + counter + " tries to find a number greater than .75")
            clearInterval(timer);
        }
    }

}