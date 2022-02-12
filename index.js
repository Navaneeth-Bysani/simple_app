const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`);
})

app.use('/', async (req,res,next)=> {
    try {
        res.send('Hi');
    } catch(err) {
        console.log(err);
    }
})