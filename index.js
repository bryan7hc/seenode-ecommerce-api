import express from 'express'

const app = express()

const port = process.env.PORT || 3000;

app.get('/products', (req, res) => {
    res.json([
        {
        id: '1',
        name: "Laptop gaming",
        price: 1000,
        description: "laptop gamin lenovo",
        imageURL:   "https://rimage.ripley.com.pe/home.ripley/Attachment/WOP/1/2004261418923/full_image-2004261418923.jpg"
        }
    ])
})  

app.listen(port, () => {
    console.log('server on port ', port)
})

