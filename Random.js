let quotesList = [{
        quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
        author: 'Oscar Wilde'
    },
    {
        quote: 'That it will never come again is what makes life so sweet.',
        author: 'Emily Dickinson'
    },
    {
        quote: 'It is never too late to be what you might have been.',
        author: 'George Eliot'
    },
    {
        quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',

        author: 'Haruki Murakami'
    },
    {
        quote: 'All the world and all the men and women merely players.',
        author: 'William Shakespeare'
    },
    {
        quote: 'Be kind, for everyone you meet is fighting a hard battle.',
        author: 'Plato'
    },
    {
        quote: 'Unable are the loved to die for love is immortality.',
        author: 'Emily Dickinson'
    }

]
let quoEle = document.getElementById('quote')
let authorEle = document.getElementById('author')

function getLocalQuotes() {
    let i = Math.floor(Math.random() * quotesList.length)
    quoEle.innerText = quotesList[i].quote
    authorEle.innerText = "--" + " " + quotesList[i].author
}
document.getElementById("getQuote").onclick = getLocalQuotes

async function quoteApi() {
    let response = await fetch('https://api.quotable.io/random')
    let quote = await response.json()
    quoEle.innerText = quote.content
    authorEle.innerText = "--" + " " + quotesList[i].author

}