import express from "express";
import cors from "cors";
import { getAllClothes ,addNewClothes, deleteItem, getOneClothingItem } from "./src/clothes.js";

const PORT = 3030;
const app = express();
app.use(cors());
app.use(express.json());


app.get("/clothes", getAllClothes)
app.post("/clothes", addNewClothes)
app.get("/clothes/delete/:objectId", deleteItem)
app.get("/clothes/search/:search", getOneClothingItem)



app.listen(3030, () => console.log(`Listening on http://localhost:${PORT} ...`))