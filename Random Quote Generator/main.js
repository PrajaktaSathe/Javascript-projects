var quotes = [
    "\"Be yourself; everybody else is already taken!\" - Oscar Wilde",
    "\"Be the change that you wish to see in the world.\" - Mahatma Gandhi",
    "\"Mistakes are proof that you are trying.\"",
    "\"If opportunity doesn\'t knock, build a door.\" - Milton Berle",
    "\"Do not stop until you are proud.\"",
    "\"Happiness can be found in the darkest of times, only if one remembers to turn on the light.\" - Albus Dumbledore",
    "\"If you can dream it, you can do it!\" - Walt Disney",
    "\"Simplicity is the ultimate sophistication.\" - Leonardo da Vinci", 
    "\"It always seems impossible until it is done!\" - Nelson Mandela",
    "\"Strive not to be a success, but rather to be of value.\" - Albert Einstein"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}