// Write your code here!
let mainNode = document.querySelector("main#main")
mainNode.remove()

const newHeader = document.createElement('h1')
newHeader.id = "victory"

newHeader.innerHTML = "YOUR-NAME is the champion"