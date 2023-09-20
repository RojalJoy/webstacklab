document.addEventListener("DOMContentLoaded",function(){
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sort");
    const pList = document.getElementById("productList");
    
    async function fetchAndDisplayProducts() {
            try {
                const response = await fetch("https://cynthiaesthermetilda.github.io/Xhrdemo/products.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const responseJson = await response.json();
                displayProducts(responseJson);

                searchInput.addEventListener("input", () => filterProducts(responseJson));
                sortSelect.addEventListener("change", () => sortProducts(responseJson));
            } catch (error) {
                console.error(error.message);
            }
        }

        function displayProducts(responseJson) {
            pList.innerHTML = "";

            responseJson.forEach((product) => {
                const pDiv = document.createElement("div");
                pDiv.classList.add("product");

                const pName = document.createElement("h2");
                pName.textContent = product.name;

                const pDescription = document.createElement("p");
                pDescription.textContent = product.description;

                const pPrice = document.createElement("p");
                pPrice.textContent = "Price: $" + product.price;

                pDiv.appendChild(pName);
                pDiv.appendChild(pDescription);
                pDiv.appendChild(pPrice);
                pList.appendChild(pDiv);
            });
        }

        function filterProducts(responseJson) {
            const searchKeyword = searchInput.value.toLowerCase();

            const filteredProducts = responseJson.filter((product) =>
                product.name.toLowerCase().includes(searchKeyword)
            );

            displayProducts(filteredProducts);
        }

        function sortProducts(responseJson) {
            const sortBy = sortSelect.value;

            const sortedProducts = [...responseJson];

            if (sortBy === "name") {
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortBy === "price") {
                sortedProducts.sort((a, b) => a.price - b.price);
            }

            displayProducts(sortedProducts);
        }

        window.onload = fetchAndDisplayProducts;
    });