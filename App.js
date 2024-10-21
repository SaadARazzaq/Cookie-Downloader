// Function to convert cookies to an array of objects
function getCookies() {
    return document.cookie.split("; ").map(cookie => {
        const [name, value] = cookie.split("=");
        return { name, value };
    });
}

// Convert cookies to JSON format
const cookiesJSON = JSON.stringify(getCookies(), null, 2);

// Function to trigger download of a file
function downloadFile(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

// Trigger the download of cookies.json
downloadFile(cookiesJSON, 'cookies.json', 'application/json');
