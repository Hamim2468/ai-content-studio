const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const resultContent = document.getElementById("resultContent");

generateBtn.addEventListener("click", async () => {
    const data = {
        brandName: document.getElementById("brandName").value,
        niche: document.getElementById("niche").value,
        audience: document.getElementById("audience").value,
        platform: document.getElementById("platform").value,
        style: document.getElementById("style").value,
        language: document.getElementById("language").value,
        duration: document.getElementById("duration").value
    };

    if (!data.brandName || !data.niche) {
        alert("Please enter your brand name and niche.");
        return;
    }

    generateBtn.innerHTML = `
        <span>Connecting to AI Engine...</span>
        <span>✦</span>
    `;

    try {
        const response = await fetch("https://ai-content-studio-f008.onrender.com/api/strategy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Backend request failed.");
        }

        const strategy = await response.json();

        resultContent.innerHTML = `
            <div class="strategy-grid">

                <div class="strategy-box">
                    <h3>BRAND</h3>
                    <p>${strategy.brand}</p>
                </div>

                <div class="strategy-box">
                    <h3>NICHE</h3>
                    <p>${strategy.niche}</p>
                </div>

                <div class="strategy-box">
                    <h3>TARGET AUDIENCE</h3>
                    <p>${strategy.audience}</p>
                </div>

                <div class="strategy-box">
                    <h3>PLATFORM</h3>
                    <p>${strategy.platform}</p>
                </div>

                <div class="strategy-box">
                    <h3>CONTENT STYLE</h3>
                    <p>${strategy.style}</p>
                </div>

                <div class="strategy-box">
                    <h3>LANGUAGE</h3>
                    <p>${strategy.language}</p>
                </div>

                <div class="strategy-box">
                    <h3>VIDEO LENGTH</h3>
                    <p>${strategy.duration}</p>
                </div>

                <div class="strategy-box">
                    <h3>AI ENGINE</h3>
                    <p>${strategy.status}</p>
                </div>

            </div>
        `;

        result.classList.remove("hidden");

        result.scrollIntoView({
            behavior: "smooth"
        });

    } catch (error) {
        console.error(error);

        alert(
            "The AI backend is not running yet. " +
            "We'll connect the live backend in the next stage."
        );

    } finally {
        generateBtn.innerHTML = `
            <span>Generate Content Strategy</span>
            <span>→</span>
        `;
    }
});
                <div class="strategy-box">
                    <h3>PLATFORM</h3>
                    <p>${platform}</p>
                </div>

                <div class="strategy-box">
                    <h3>CONTENT STYLE</h3>
                    <p>${style}</p>
                </div>

                <div class="strategy-box">
                    <h3>LANGUAGE</h3>
                    <p>${language}</p>
                </div>

                <div class="strategy-box">
                    <h3>VIDEO LENGTH</h3>
                    <p>${duration}</p>
                </div>

                <div class="strategy-box">
                    <h3>AI STATUS</h3>
                    <p>Creative Engine ready for integration.</p>
                </div>

            </div>
        `;

        result.classList.remove("hidden");

        generateBtn.innerHTML = `
            <span>Generate Content Strategy</span>
            <span>→</span>
        `;

        result.scrollIntoView({
            behavior: "smooth"
        });

    }, 900);
});
