const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const resultContent = document.getElementById("resultContent");

generateBtn.addEventListener("click", () => {
    const brand = document.getElementById("brandName").value || "Your Brand";
    const niche = document.getElementById("niche").value || "Your Niche";
    const audience = document.getElementById("audience").value || "Your Audience";
    const platform = document.getElementById("platform").value;
    const style = document.getElementById("style").value || "Modern and engaging";
    const language = document.getElementById("language").value;
    const duration = document.getElementById("duration").value;

    generateBtn.innerHTML = `
        <span>Building Strategy...</span>
        <span>✦</span>
    `;

    setTimeout(() => {
        resultContent.innerHTML = `
            <div class="strategy-grid">

                <div class="strategy-box">
                    <h3>BRAND</h3>
                    <p>${brand}</p>
                </div>

                <div class="strategy-box">
                    <h3>NICHE</h3>
                    <p>${niche}</p>
                </div>

                <div class="strategy-box">
                    <h3>TARGET AUDIENCE</h3>
                    <p>${audience}</p>
                </div>

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
