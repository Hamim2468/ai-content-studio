const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const resultContent = document.getElementById("resultContent");

generateBtn.addEventListener("click", async () => {

    const data = {
        brandName: document.getElementById("brandName").value.trim(),
        niche: document.getElementById("niche").value.trim(),
        audience: document.getElementById("audience").value.trim(),
        platform: document.getElementById("platform").value,
        style: document.getElementById("style").value.trim(),
        language: document.getElementById("language").value,
        duration: document.getElementById("duration").value
    };

    if (!data.brandName || !data.niche) {
        alert("Please enter your brand name and niche.");
        return;
    }

    generateBtn.disabled = true;

    generateBtn.innerHTML = `
        <span>AI IS THINKING...</span>
        <span>✦</span>
    `;

    try {

        const response = await fetch(
            "https://ai-content-studio-f008.onrender.com/api/strategy",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const responseText = await response.text();

        if (!response.ok) {
            throw new Error(responseText || "Backend request failed.");
        }

        const strategy = JSON.parse(responseText);

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
                    <h3>CONTENT PILLARS</h3>
                    <p>${strategy.contentPillars.join("<br>")}</p>
                </div>

                <div class="strategy-box">
                    <h3>HOOK STRATEGY</h3>
                    <p>${strategy.hookStrategy}</p>
                </div>

                <div class="strategy-box">
                    <h3>VIDEO IDEAS</h3>
                    <p>${strategy.videoIdeas.join("<br><br>")}</p>
                </div>

                <div class="strategy-box">
                    <h3>EDITING STRATEGY</h3>
                    <p>${strategy.editingStrategy}</p>
                </div>

                <div class="strategy-box">
                    <h3>MUSIC STRATEGY</h3>
                    <p>${strategy.musicStrategy}</p>
                </div>

                <div class="strategy-box">
                    <h3>CAPTION STRATEGY</h3>
                    <p>${strategy.captionStrategy}</p>
                </div>

                <div class="strategy-box">
                    <h3>HASHTAG STRATEGY</h3>
                    <p>${strategy.hashtagStrategy}</p>
                </div>

                <div class="strategy-box">
                    <h3>POSTING STRATEGY</h3>
                    <p>${strategy.postingStrategy}</p>
                </div>

                <div class="strategy-box">
                    <h3>TESTING STRATEGY</h3>
                    <p>${strategy.testingStrategy}</p>
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
            "AI Engine Error:\n\n" +
            error.message
        );

    } finally {

        generateBtn.disabled = false;

        generateBtn.innerHTML = `
            <span>Generate Content Strategy</span>
            <span>→</span>
        `;
    }
});        }

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
