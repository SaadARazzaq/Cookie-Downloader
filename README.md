# Cookie-Downloader

This project allows you to download browser cookies in JSON format directly from the browser's console. It extracts cookies from the current webpage and downloads them as a `cookies.json` file.

<img src="https://github.com/user-attachments/assets/6bc44c3f-3039-496d-b91e-30335d15cdd0">

## How it Works

The script performs the following actions:
1. Retrieves all cookies from the current domain and converts them into an array of objects, where each cookie is represented as an object with `name` and `value`.
2. Converts this array into a JSON string.
3. Triggers a download of the cookies as a `cookies.json` file.

## Usage Instructions

### Step 1: Open Browser Console
1. Open the webpage from which you want to download cookies.
2. Right-click on the page and select **Inspect** (or press `Ctrl+Shift+I` on Windows or `Cmd+Option+I` on Mac).
3. Go to the **Console** tab in the Developer Tools.

### Step 2: Copy and Paste the Script
1. Copy the App.js code
2. Paste the script into the Console and press `Enter`.

### Step 3: Download the Cookies
After executing the script, a file named `cookies.json` will be automatically downloaded, containing the cookies from the current domain in JSON format.

## Notes:
- The script only extracts cookies that are accessible via `document.cookie`. Cookies marked as `HttpOnly` will not be included.
- If you need more detailed cookie information (such as `domain`, `path`, `httpOnly`, etc.), you might need to use more advanced methods, such as using browser extensions or APIs like the `chrome.cookies API`.

## Demo:
Check the Repo files for the Demo Video 💖
