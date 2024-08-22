// Elements
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const gradientType = document.getElementById("gradientType");
const backgroundPreview = document.getElementById("backgroundPreview");

// Function to update background
function updateBackground() {
    const c1 = color1.value;
    const c2 = color2.value;
    const c3 = color3.value || c2; // Default to color2 if color3 is not selected
    let gradientStyle = '';

    switch (gradientType.value) {
        case "linear":
            gradientStyle = `linear-gradient(to right, ${c1}, ${c2})`;
            break;
        case "radial":
            gradientStyle = `radial-gradient(circle, ${c1}, ${c2})`;
            break;
        case "conic":
            gradientStyle = `conic-gradient(from 0deg, ${c1}, ${c2}, ${c3})`;
            break;
        case "repeating-linear":
            gradientStyle = `repeating-linear-gradient(45deg, ${c1}, ${c2} 10%, ${c3} 20%)`;
            break;
        case "repeating-radial":
            gradientStyle = `repeating-radial-gradient(circle, ${c1}, ${c2} 10%, ${c3} 20%)`;
            break;
    }

    backgroundPreview.style.background = gradientStyle;
}

// Event Listeners for real-time update
color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
color3.addEventListener("input", updateBackground);
gradientType.addEventListener("change", updateBackground);

// Copy CSS to clipboard
document.getElementById("copyCssBtn").addEventListener("click", function() {
    const cssCode = backgroundPreview.style.background;
    navigator.clipboard.writeText(`background: ${cssCode};`);
    alert("CSS copied to clipboard!");
});

// Initial update
updateBackground();
