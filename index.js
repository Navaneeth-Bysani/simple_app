const app = require('./app');

app.listen(3000, () => {
    console.log('Running on port 4000...')
})
app.set('views', 'html')
app.use('/', async (req,res,next)=> {
    try {
        res.send('Hi');
    } catch(err) {
        console.log(err);
    }
})