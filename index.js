const start = (userChoice) => {

    let imgElement          = document.getElementById('playerChoiceImg')
    imgElement.src          = `/Hand Sign Images/${userChoice}.png`
    let computersChoice     = generateComputersChoice()
    let winStatus           = document.getElementById("winStatus")

    if(userChoice === computersChoice){
        winStatus.innerHTML = "It's a tie😁"
    }else if(
        (userChoice === "rock" && computersChoice === "scissor") ||
        (userChoice === "paper" && computersChoice === "rock") ||
        (userChoice === "scissor" && computersChoice === "paper")
    ){
        winStatus.innerHTML = "Player Wins😎"
    }else{
        winStatus.innerHTML = "Computer Wins😢"
    }
}

const generateComputersChoice = () =>{

    let choiceArray             = ["rock", "paper", "scissor"]
    let computersChoiceIndex    = Math.floor(Math.random() * choiceArray.length)
    let computersChoice         = choiceArray[computersChoiceIndex] 
    let imgElement              = document.getElementById('computerChoiceImg')
    imgElement.src              = `/Hand Sign Images/${computersChoice}.png`

    return computersChoice
}