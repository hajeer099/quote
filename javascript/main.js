
        // Variables pointing to HTML elements
        let quote = document.querySelector('.quote');
        let person = document.querySelector('.person');
        let newQuoteBtn = document.querySelector('#new-quote');

        // Array of quotes
        const quotes = [
            {
                quote: "Be yourself; everyone else is already taken.",
                person: "Oscar Wilde"
            },
            {
                quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
                person: "Marilyn Monroe"
            },
            {
                quote: "So many books, so little time.",
                person: "Frank Zappa"
            },
            {
                quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
                person: "Albert Einstein"
            },
            {
                quote: "A room without books is like a body without a soul.",
                person: "Marcus Tullius Cicero"
            },
            {
                quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
                person: "Bernard M. Baruch"
            },
            {
                quote: "You only live once, but if you do it right, once is enough.",
                person: "Mae West"
            },
            {
                quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
                person: "Maya Angelou"
            },
            {
                quote: "If you tell the truth, you don't have to remember anything.",
                person: "Mark Twain"
            },
            {
                quote: "Be the change that you wish to see in the world.",
                person: "Mahatma Gandhi"
            }
        ];

        // Add event listener to the button
        newQuoteBtn.addEventListener('click', function () {
            let random = Math.floor(Math.random() * quotes.length);
            quote.innerText = quotes[random].quote;
            person.innerText = '--' + quotes[random].person; 
        });

        // Display a random quote when the page loads for the first time
        document.addEventListener('DOMContentLoaded', function () {
            let random = Math.floor(Math.random() * quotes.length);
            quote.innerText = quotes[random].quote;
            person.innerText = '--' + quotes[random].person;
        });