// 1. Create an Express server.
import express from "express"

const app=express();
const port=3000;

// 2. Implement a route GET /products/:productId that captures the product ID from the URL using req.params.
app.get("/products/:productId", (req, res) => {

    console.log("Route accessed!");
const id = req.params.productId;
// 3. The route should respond with a message like
//  "Fetching data for product with the required ID: <productId>".
res.send(`Fetching data for product with the required ID: ${id}`)
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

// 4. Test your route with different product IDs in the browser.
// http://localhost:3000/products/1
// Fetching data for product with the required ID: 1
// Fetching data for product with the required ID: 123