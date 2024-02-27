const pickBtn = document.querySelectorAll(".btn");
const choice = document.querySelector(".play");
const computerChoice = document.querySelectorAll(".icon");
const elementForPc = document.querySelector(".pc");

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

        console.log(computerChoice[randomIndex]);

        // Create a new button element
        var newButton = document.createElement('button');
        newButton.classList.add('new-btn');

        // Create an image element and append it to the button
        var newImage = document.createElement('img');
        newImage.src = randomComputerChoice.src; // Assuming src is the attribute you want to copy
        newImage.classList.add('icon')
        newButton.appendChild(newImage);

        var pcOldElem = elementForPc;
        var pcNewElem = newButton;

        if (pcOldElem) {
            var newElem = pcOldElem.parentNode.replaceChild(pcNewElem, pcOldElem)
            newElem.classList.add('button');
            
        }
    });
});