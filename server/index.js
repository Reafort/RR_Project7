const express = require('express')
const app = express ()


app.get ('/', (req, res) => {
   res.send('HELLO');
});

app.listen(3001, () => {
    console.log('testing port 3001');
});