const express = require("express");
const {MongoClient, ObjectId} = require("mongodb");
const cors = require("cors");

const app = express();
const port = 8888;
const db_uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(db_uri);

// подключение к БД
async function connectToMongo() {
    try {
        await client.connect();
        console.log("Connected to Mongo");
    } catch (error) {
        console.error("Error connecting to MongoDb: ", error);
    }
}

connectToMongo();

app.use(express.json());
app.use(cors());

const db = client.db("redux-toolkit-market");

//**************************************_товары_**************************************

// получение всех товаров
app.get("/products", async(req, res) => {
    const products = await db.collection("products").find().toArray();
    res.json(products);
});

// // получение товара по id
// app.get("/products/:id", async(req, res) => {
//     const product = await db.collection("products").findOne({_id: new ObjectId(req.params.id)});
//     res.json(product);
// });

// добавление товара
app.post("/products", async(req, res) => {
    req.body._id = new ObjectId();
    await db.collection("products").insertOne(req.body);
    // var response = await db.collection("products").insertOne(req.body);
    // res.json({message: "Товар успешно добавлен"});
    // var obj = await db.collection("products").findOne(response.insertedId);
    // res.json(obj);
    res.json(req.body);
});

// // изменение товара
// app.put("/products/:id", async(req, res) => {
//     await db.collection("products").updateOne(
//         {_id: new ObjectId(req.params.id)},
//         {$set: req.body}
//     );
//     res.json({message: "Товар успешно обновлён"});
// });

// изменение товара
app.put("/products/:id", async(req, res) => {
    // console.log("req.params.id = " + req.params.id);
    // console.log("req.body = " + req.body);
    const {name, description, price, image, quantity} = req.body.data;
    // const bodyName = req.body.data.name;
    // const bodyDescription = req.body.data.description;
    // const bodyPrice = req.body.data.price;
    // const bodyImage = req.body.data.image;
    // const bodyQuantity = req.body.data.quantity;
    // console.log("1 = " + bodyName + " 2 = " + bodyDescription + " 3 = " + bodyPrice + " 4 = " + bodyImage + " 5 = " + bodyQuantity)
    // const id = new ObjectId(req.body._id);
    // console.log("id = " + id);
    // const id = new ObjectId(req.body._id);
    var response = await db.collection("products").findOneAndUpdate(
        {_id: new ObjectId(req.params.id)},
        {$set: {name: name, description: description, price: price, image: image, quantity: quantity}},
        { returnDocument: "after" }
    );
    // var response = await db.collection("products").findOneAndUpdate(
    //     {_id: id},
    //     {$set: {name: bodyName, description: bodyDescription, price: bodyPrice, image: bodyImage, quantity: bodyQuantity}},
    //     { returnDocument: "after" }
    // );
    // console.log("response = " + response);
    res.json(response);
});

// удаление товара
app.delete("/products/:id", async(req, res) => {
    await db.collection("products").deleteOne({_id: new ObjectId(req.params.id)});
    res.json({message: "Товар успешно удалён"});
});

// запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})