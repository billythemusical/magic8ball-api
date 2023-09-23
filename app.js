const express = require('express');
const helmet = require('helmet');
const cors = require('cors');  // We'll need the 'cors' package for handling CORS.
const validator = require('validator');
const app = express();

const dotenv = require('dotenv')
dotenv.config()

const responses = [
    'It is Certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
];

// Middleware to use Helmet for security
app.use(helmet({
    contentSecurityPolicy: false, // Disable CSP if it interferes w no-cors
}));

// Middleware to use CORS for all routes
app.use(cors());

// Endpoint for /magic8ball that returns a random response
app.get('/', (req, res) => {

    if (req.query.question) {
        console.log('Got a question!')

        // Sanitize the question
        let question = req.query.question
        question = validator.escape(question)
        console.log(question)

        // Generate a random response
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        res.json({ answer: randomResponse }, () => {
            console.log(`Sent a answer: \n${randomResponse}`)
        });
    }

});

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server on the port gotten from .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
