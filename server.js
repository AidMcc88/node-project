const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/karts", (req, res) => {
    const karts = [];
    karts[0] = {
        name:"Super Mario Kart",
        date:"September 1, 1992",
        console:"Console: Super Nintendo",
        tracks:"Tracks: 20",
        characters:"Characters: 8",
        info:"Kickstarted the franchise",
        img:"images/img1.jpg",
    };
    karts[1] = {
        name:"Mario Kart 64",
        date:"February 10, 1997",
        console:"Console: Nintendo 64",
        tracks:"Tracks: 16",
        characters:"Characters: 8",
        info:"Introduced 3D models",
        img:"images/img2.jpg",
    };
    karts[2] = {
        name:"Mario Kart: Super Circuit",
        date:"August 27, 2001",
        console:"Console: Gameboy Advance",
        tracks:"Tracks: 20",
        characters:"Characters: 8",
        info:"Brought franchise to handheld devices",
        img:"images/img3.jpg",
    };
    karts[3] = {
        name:"Mario Kart: Double Dash!!",
        date:"November 7, 2003",
        console:"Console: GameCube Nintendo",
        tracks:"Tracks: 20",
        characters:"Characters: 20",
        info:"Introduced double character mechanics",
        img:"images/img4.jpg",
    };
    karts[4] = {
        name:"Mario Kart DS",
        date:"November 14, 2005",
        console:"Console: DS",
        tracks:"Tracks: 32",
        characters:"Characters: 13",
        info:"Added mission mode and custom emblems",
        img:"images/img5.jpg",
    };
    karts[5] = {
        name:"Mario Kart Wii",
        date:"April 27, 2008",
        console:"Console: Wii",
        tracks:"Tracks: 32",
        characters:"Characters: 24",
        info:"Introduced trick system and bikes",
        img:"images/img6.jpg",
    };

    res.json(karts);
});

app.listen(3000, () => {
    console.log("I'm listening");
});