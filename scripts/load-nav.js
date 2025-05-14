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
});