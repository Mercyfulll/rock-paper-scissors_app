const pickBtn = document.querySelectorAll(".btn");
const choice = document.querySelector(".play");
const computerChoice = document.querySelectorAll(".icon");
const elementForPc = document.querySelector(".pc");

var computerScore = 0 
var playerScore = 0 

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

        var imgeAtrribute = newImage.src

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
            });
        }
        
        if (imgeAtrribute.includes(buttonPicked.value)) {
            createSweetAlert('It\'s a draw', 'info');
        } else {
            if ((imgeAtrribute.includes('rock') && buttonPicked.value === 'scissors') ||
                (imgeAtrribute.includes('scissors') && buttonPicked.value === 'paper') ||
                (imgeAtrribute.includes('paper') && buttonPicked.value === 'rock')) {
                    createSweetAlert('Computer wins! ' + capitalizeFirstLetter(imageValue) + ' beats ' + buttonPicked.value, 'warning');
                } else {
                    createSweetAlert('You win! ' + capitalizeFirstLetter(buttonPicked.value) + ' beats ' + capitalizeFirstLetter(imageValue), 'success');
                }
        }
        
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
     });
});