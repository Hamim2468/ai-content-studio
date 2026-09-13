const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3000;

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "online",
        name: "AI Content Studio Backend",
        version: "0.2.0"
    });
});

app.post("/api/strategy", async (req, res) => {
    try {
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

        const prompt = `
You are the strategic AI brain of an advanced social-media content studio.

Create a practical short-form content strategy for this brand.

BRAND:
${brandName}

NICHE:
${niche}

TARGET AUDIENCE:
${audience || "General audience"}

PLATFORM:
${platform || "All Platforms"}

BRAND STYLE:
${style || "Modern"}

LANGUAGE:
${language || "English"}

VIDEO LENGTH:
${duration || "15–30 seconds"}

Return ONLY valid JSON using exactly these keys:

{
  "brand": "",
  "niche": "",
  "audience": "",
  "platform": "",
  "style": "",
  "language": "",
  "duration": "",
  "contentPillars": [],
  "hookStrategy": "",
  "videoIdeas": [],
  "editingStrategy": "",
  "musicStrategy": "",
  "captionStrategy": "",
  "hashtagStrategy": "",
  "postingStrategy": "",
  "testingStrategy": ""
}

Make the strategy specific to the brand, niche, audience and platform.
Avoid generic advice.
Give 5 strong video ideas.
Give 4 content pillars.
Focus on attention, retention, shareability and realistic execution.
`;

        const response = await client.responses.create({
            model: "gpt-5.6",
            input: prompt
        });

        const text = response.output_text;

        let strategy;

        try {
            strategy = JSON.parse(text);
        } catch (parseError) {
            return res.status(500).json({
                error: "AI returned invalid JSON.",
                raw: text
            });
        }

        strategy.status = "Live AI strategy generated";

        res.json(strategy);

    } catch (error) {
        console.error("AI ERROR:", error);

        res.status(500).json({
            error: "AI strategy generation failed."
        });
    }
});

app.listen(PORT, () => {
    console.log(`AI Content Studio backend running on port ${PORT}`);
});
