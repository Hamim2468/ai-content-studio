const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "online",
        name: "AI Content Studio Backend",
        version: "0.1.0"
    });
});

app.post("/api/strategy", (req, res) => {
    const {
        brandName,
        niche,
        audience,
        platform,
        style,
        language,
        duration
    } = req.body;

    if (!brandName || !niche) {
        return res.status(400).json({
            error: "Brand name and niche are required."
        });
    }

    const strategy = {
        brand: brandName,
        niche,
        audience: audience || "General audience",
        platform: platform || "All Platforms",
        style: style || "Modern",
        language: language || "English",
        duration: duration || "15–30 seconds",

        contentDirection: [
            "Trend-based short-form videos",
            "Strong first-second hooks",
            "Fast visual storytelling",
            "Platform-native editing",
            "Clear calls to action"
        ],

        status: "Prototype strategy generated"
    };

    res.json(strategy);
});

app.listen(PORT, () => {
    console.log(`AI Content Studio backend running on port ${PORT}`);
});
