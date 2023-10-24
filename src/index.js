import { getJoke } from "./axios"
import "./style/index.scss"
import imgSmil  from "./asset/download.jpeg"
console.log("hello world")
const joke = document.getElementById("joke")
const jokeButton = document.getElementById("jokeButton")
const smiley = document.getElementById("smiley")
console.log(smiley)
smiley.src = imgSmil
injectJoke()

jokeButton.onclick = async ()=>{
    injectJoke()
}
async function injectJoke() {

    joke.innerText = (await getJoke())?.data.joke||"Not found joke"
}