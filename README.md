 SQL Injection Tester - Chrome Extension

A lightweight Chrome extension designed to help security researchers test for common SQL injection vulnerabilities on input forms and URLs.

---

Features

- Injects common **SQL Injection payloads** into input fields
- Supports:
  - Authentication bypass
  - Union-based injection
  - Error-based and Blind SQL injection
  - Time-delay injections
- Manual and automated test modes
- Simple UI popup to select target and payload

---

## Files in This Extension

| File           | Purpose                                           |
|----------------|---------------------------------------------------|
| `manifest.json`| Chrome extension config (Manifest V3)            |
| `popup.html`   | The extension’s UI popup                         |
| `popup.js`     | Handles form interaction and fetch request       |
| `content.js`   | Injects selected payload into input fields       |
| `styles.css`   | Styles the popup UI                              |

---

 How to Install the Extension Locally

1. Clone or Download the repository:
   ```bash
   git clone https://github.com/Gunasekarguna/Sql-Injection-Tester.git
Open Chrome, and go to:

arduino
Copy
Edit
chrome://extensions
Enable “Developer Mode” (top right)

Click “Load unpacked” and select the folder where you saved/cloned the extension

The extension should now be active in your Chrome browser.

 Disclaimer
This tool is intended for educational and ethical testing purposes only.
Always obtain proper authorization before testing any website or application.

 License
This project is licensed under the MIT License.

 Author
Gunasekar Guna
🔗 GitHub Profile


If you want, I can generate this as a file and save it for you to download. Would you like me to do that
