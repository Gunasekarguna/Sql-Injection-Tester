document.getElementById("sqlForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from reloading the extension popup

    const targetUrl = document.getElementById("targetUrl").value.trim();
    const selectedPayload = document.getElementById("payloads").value;
    const responseOutput = document.getElementById("responseOutput");

    if (!targetUrl) {
        responseOutput.innerHTML = "❌ Please enter a target URL.";
        return;
    }

    // Construct the payload URL
    const testUrl = `${targetUrl}?username=admin&password=${encodeURIComponent(selectedPayload)}`;

    try {
        responseOutput.innerHTML = "⏳ Testing SQL Injection...";

        // Send request to target URL
        const response = await fetch(testUrl, { method: "GET" });
        const text = await response.text();

        if (response.ok) {
            responseOutput.innerHTML = "✅ Injection Sent! \n\n" + text.slice(0, 500); // Display first 500 chars
        } else {
            responseOutput.innerHTML = `⚠️ Request Failed: ${response.status} ${response.statusText}`;
        }
    } catch (error) {
        responseOutput.innerHTML = `❌ Error: ${error.message}`;
    }
});
