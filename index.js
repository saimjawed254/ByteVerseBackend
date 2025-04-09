import express from "express";
import cors from "cors";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
const router = express.Router();

config({ path: "config.env"});


app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cookieParser())

app.use(cors({
    origin: "https://byteversefrontend.onrender.com",
    methods: ["GET","POST"],
    credentials: true,
}));

app.get("/", async(req,res)=>{
    // console.log(req);
    console.log("Connected");

    res.cookie("testing","Hello",{
        httpOnly: true,
        secure: true,
        sameSite: "strict"
    });
    res.json({
        message: "Connected Successfully",
    })
})

app.get("/register", async(req,res)=>{
    console.log("Hello ",req.cookies);
})

app.use(router);

app.listen(3000, async(req,res)=>{
    console.log("Server listening on PORT: 3000");
})