import { getJoke } from "./axios"
import "./style/index.scss"
console.log("hello world")
const joke = document.getElementById("joke")
const jokeButton = document.getElementById("jokeButton")

injectJoke()

jokeButton.onclick = async ()=>{
    injectJoke()
}
async function injectJoke() {

    joke.innerText = (await getJoke())?.data.joke
}