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

    res.set("X-Content-Type-Options", "nosniff");

    res.cookie('testing', '12345678', {
        // "expires" - The cookie expires in 24 hours
        expires: new Date(Date.now() + 86400000), 
        // "path" - The cookie is accessible for APIs under the '/api' route
        path: '/', 
        // "domain" - The cookie belongs to the 'example.com' domain
        domain: 'onrender.com', 
        // "secure" - The cookie will be sent over HTTPS only
        secure: true, 
        // "HttpOnly" - The cookie cannot be accessed by client-side scripts
        httpOnly: true
      });
    res.json({
        message: "Connected Successfully" 
    })
})

app.get("/register", async(req,res)=>{
    console.log("Hello ",req.cookies);
})

app.get("/logout", async(req,res)=>{
    console.log("Hello ",req.cookies);
    res.clearCookie('testing');
})

app.use(router);

app.listen(3000, async(req,res)=>{
    console.log("Server listening on PORT: 3000");
})