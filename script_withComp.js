alert("You are starting a new Rock paper Scissors 10 pointer match with the computer.. BEST LUCK !")

let rock = document.querySelector("#rock_img");
let paper = document.querySelector("#paper_img");
let scissors = document.querySelector("#scissors_img");

let comment = document.querySelector("#commentary");

let yourScore = document.querySelector("#yourScore");
let compScore = document.querySelector("#compScore");

userScore = 0;
devScore = 0;

rock.onclick = () => {
    console.log("Rock image was clicked..")
    compChoice = Math.floor(Math.random() * 3);
    console.log(compChoice)

    if (compChoice == 0) {
        comment.innerText = "It is a tie."
    } else if (compChoice == 1) {
        devScore += 1
        if (devScore == userScore) {
            comment.innerText = `Oops you lost a point. It is ${devScore} all.`
        } else {
            comment.innerText = "Oops you lost a point."
        }
        compScore.innerText = `${devScore}`
    } else if (compChoice == 2) {
        userScore += 1
        if (devScore == userScore) {
            comment.innerText = `Great.. You have won a point. It is ${devScore} all.`
        } else {
            comment.innerText = "Great.. You have won a point."
        }
        yourScore.innerText = `${userScore}`
    }
    
    if (userScore == 10 || devScore == 10) {
        if (userScore == 10) {
            comment.innerText = " 🥳 Congratulations.. You have won the game.. 🎉🎊 "
        } else if (devScore == 10) {
            comment.innerText = "Oops! You lost the game.. You may give another try. All the BEST"
        }
        if (rock.onclick || paper.onclick || scissors.onclick) {
            setTimeout(() => {
                location.reload("You are starting with a new 10 points ROCK PAPER SCISSORS Game..!");
            }, 2000)
        }
    }
    
    // console.log(`Your score - ${userScore}, Comp Score - ${devScore}`);
}

paper.onclick = () => {
    console.log("Paper image was clicked..")
    compChoice = Math.floor(Math.random() * 3);
    console.log(compChoice)

    if (compChoice == 1) {
        comment.innerText = "It is a tie."
    } else if (compChoice == 2) {
        devScore += 1
        if (devScore == userScore) {
            comment.innerText = `Oops you lost a point. It is ${devScore} all.`
        } else {
            comment.innerText = "Oops you lost a point."
        }
        compScore.innerText = `${devScore}`
    } else if (compChoice == 0) {
        userScore += 1
        if (devScore == userScore) {
            comment.innerText = `Great.. You have won a point. It is ${devScore} all.`
        } else {
            comment.innerText = "Great.. You have won a point."
        }
        yourScore.innerText = `${userScore}`
    }

    if (userScore == 10 || devScore == 10) {
        if (userScore == 10) {
            comment.innerText = " 🥳 Congratulations.. You have won the game.. 🎉🎊 "
        } else if (devScore == 10) {
            comment.innerText = "Oops! You lost the game.. You may give another try. All the BEST"
        }
        if (rock.onclick || paper.onclick || scissors.onclick) {
            setTimeout(() => {
                location.reload("You are starting with a new 10 points ROCK PAPER SCISSORS Game..!");
            }, 2000)
        }
    }

    // console.log(`Your score - ${userScore}, Comp Score - ${devScore}`);
}

scissors.onclick = () => {
    console.log("Scissors image was clicked..")
    compChoice = Math.floor(Math.random() * 3);
    console.log(compChoice)

    if (compChoice == 2) {
        comment.innerText = "It is a tie."
    } else if (compChoice == 0) {
        devScore += 1
        if (devScore == userScore) {
            comment.innerText = `Oops you lost a point. It is ${devScore} all.`
        } else {
            comment.innerText = "Oops you lost a point."
        }
        compScore.innerText = `${devScore}`
    } else if (compChoice == 1) {
        userScore += 1
        if (devScore == userScore) {
            comment.innerText = `Great.. You have won a point. It is ${devScore} all.`
        } else {
            comment.innerText = "Great.. You have won a point."
        }
        yourScore.innerText = `${userScore}`
    }

    if (userScore == 10 || devScore == 10) {
        if (userScore == 10) {
            comment.innerText = " 🥳 Congratulations.. You have won the game.. 🎉🎊 "
        } else if (devScore == 10) {
            comment.innerText = "Oops! You lost the game.. You may give another try. All the BEST"
        }
        if (rock.onclick || paper.onclick || scissors.onclick) {
            setTimeout(() => {
                location.reload("You are starting with a new 10 points ROCK PAPER SCISSORS Game..!");
            }, 2000)
        }
    }

    // console.log(`Your score - ${userScore}, Comp Score - ${devScore}`);
}