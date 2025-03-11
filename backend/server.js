const fs = require("fs");
if (fs.existsSync(".env")) {
    require("dotenv").config(); 
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productsRouter = require("./routes/productsRoutes");
const feedbacksRouter = require("./routes/feedbacksRoutes");

const app = express();


app.use(express.json());
app.use(cors());


const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/shopco-dev";
console.log("🔗 Подключение к MongoDB:", MONGO_URI);


mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ База данных подключена"))
    .catch(err => {
        console.error("❌ Ошибка подключения к БД:", err);
        process.exit(1);
    });


process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("🔌 Отключено от MongoDB");
    process.exit(0);
});


app.get("/", (req, res) => {
    res.send("🚀 Сервер работает!");
});


app.use("/api", productsRouter);
app.use("/api", feedbacksRouter);


app.use((req, res) => {
    res.status(404).json({ message: "❌ Ресурс не найден" });
});


app.use((err, req, res, next) => {
    console.error("❌ Ошибка сервера:", err.stack);
    res.status(500).json({ message: "Что-то пошло не так!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Сервер запущен на порту ${PORT}`));

