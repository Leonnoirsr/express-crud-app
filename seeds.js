const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    });

    // const p = new Product({
    //     name: 'Polo shirt',
    //     price: 200,
    //     category: 'clothing'
    // })

    // p.save().then(p => {
    //     console.log(p)
    // })
    // .catch(err => {
    //     console.log(err)
    // })


    const seedProducts = [
        {
            name: 'Polo Boots',
            price: 400,
            category: 'shoes'
        },
        {
            name: 'Cuban Link',
            price: 20000,
            category: 'accessory'
        },
        {
            name: 'Yankee Hat',
            price: 34.99,
            category: 'clothing'
        }

    ]

    Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })