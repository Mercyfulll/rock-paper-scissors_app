const pickBtn = document.querySelectorAll(".btn")


pickBtn.forEach(function (buttonPicked){
    buttonPicked.addEventListener('click', function(){
        console.log(buttonPicked.value)
        var newElement = buttonPicked
        document.body.appendChild(newElement)
    })
})