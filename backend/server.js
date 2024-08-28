const express = require('express');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 

app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Dog Food', price: 20 },
        { id: 2, name: 'Cat Toy', price: 10 },
    ];
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
