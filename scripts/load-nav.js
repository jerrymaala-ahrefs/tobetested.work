function loadNavigation(navPath) {
    fetch(navPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navigation:", error);
            document.getElementById("nav-placeholder").innerHTML = "<p>Navigation failed to load.</p>";
        });
}

// Automatically load navigation when the script is included
document.addEventListener("DOMContentLoaded", () => {
    loadNavigation("../nav.html");

    // Dynamically add the analytics script if not already present
    if (!document.querySelector('script[src="https://analytics-staging.ahrefs.dev/analytics.js"]')) {
        const analyticsScript = document.createElement("script");
        analyticsScript.src = "https://analytics-staging.ahrefs.dev/analytics.js";
        analyticsScript.setAttribute("data-key", "ZZZpusAb5gpRzffR2VjP9A");
        analyticsScript.async = true;
        document.head.appendChild(analyticsScript);
    }
});