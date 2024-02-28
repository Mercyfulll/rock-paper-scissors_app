const pickBtn = document.querySelectorAll(".btn");
const choice = document.querySelector(".play");
const computerChoice = document.querySelectorAll(".icon");
const elementForPc = document.querySelector(".pc");
const showPcScore = document.querySelector(".c-score");
const showPlayerScore = document.querySelector(".p-score")

var computerScore = 0;
var playerScore = 0;

showPcScore.innerHTML = computerScore
showPlayerScore.innerHTML = playerScore

pickBtn.forEach(function (buttonPicked) {
    buttonPicked.addEventListener('click', function () {
        var oldElement = choice;
        var newElement = buttonPicked;

        if (choice) {
            oldElement.parentNode.replaceChild(newElement, oldElement);
        }

        // Randomly select a computer choice
        var randomIndex = Math.floor(Math.random() * computerChoice.length);
        var randomComputerChoice = computerChoice[randomIndex].cloneNode(true);

        // Create a new button element
        var newButton = document.createElement('button');
        newButton.classList.add('new-btn');

        // Create an image element and append it to the button
        var newImage = document.createElement('img');
        newImage.src = randomComputerChoice.src; // Assuming src is the attribute you want to copy
        newImage.classList.add('icon')
        newButton.appendChild(newImage);

        // Extract the value from the imageAttribute source name
        function extractValueFromSource(source) {
            const fileName = source.split('/').pop();
            const value = fileName.split('.')[0].toLowerCase();
            return value;
        }

        const imageValue = extractValueFromSource(newImage.src);
        var pcOldElem = elementForPc;
        var pcNewElem = newButton;

        if (pcOldElem) {
            var newElem = pcOldElem.parentNode.replaceChild(pcNewElem, pcOldElem)
            newElem.classList.add('btn');
        }

        var imageAttribute = imageValue;
        var buttonValue = buttonPicked.value;

        function createSweetAlert(title, icon) {
            Swal.fire({
                title: title,
                icon: icon,
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'btn btn-custom',
                    title: 'custom-title-class',
                    popup: 'pop-messages'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    if (title.includes('draw')) {
                        // No score change for a draw
                    } else if (title.includes('Computer wins')) {
                        // computerScore++;
                        // Update computer score DOM element here if needed
                    } else {
                        // playerScore++;
                        // Update player score DOM element here if needed
                    }
                }
            });
        }

       
        if (imageAttribute === buttonValue) {
            createSweetAlert('It\'s a draw', 'info');
        } else {
            if ((imageAttribute === 'rock' && buttonValue === 'scissors') ||
                (imageAttribute === 'scissors' && buttonValue === 'paper') ||
                (imageAttribute === 'paper' && buttonValue === 'rock')) {
                createSweetAlert('Computer wins! ' + capitalizeFirstLetter(imageAttribute) + ' beats ' + capitalizeFirstLetter(buttonValue), 'warning');
                computerScore++ 
                showPcScore.innerHTML = computerScore
            } else {
                createSweetAlert('You win! ' + capitalizeFirstLetter(buttonValue) + ' beats ' + capitalizeFirstLetter(imageAttribute), 'success');
                playerScore++
                showPlayerScore.innerHTML = playerScore
                console.log(playerScore)
                console.log(computerScore)
            }
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    });
});
