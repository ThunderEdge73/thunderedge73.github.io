const nav_element = document.createElement("nav")

fetch("./site_tree.json").then((response) => {
    if (!response.ok) {
        throw Error("Error: " + response.status);
    }
    return response.json();
}).then((data) => { // If the json loaded correctly
    console.log(data)
}).catch((err) => {
    throw Error("Failed to get page data.")
});