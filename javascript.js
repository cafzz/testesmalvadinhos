document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    let itemsLoaded = 0;
    const itemsToLoad = 10; // Number of items to load on each scroll

    // Function to create new content items
    function createNewItem() {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.textContent = `Item ${++itemsLoaded}`;
        contentDiv.appendChild(itemDiv);
    }

    // Load initial content
    for (let i = 0; i < itemsToLoad; i++) {
        createNewItem();
    }

    // Function to check if more content needs to be loaded
    function checkScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            // Load more content if near the bottom
            for (let i = 0; i < itemsToLoad; i++) {
                createNewItem();
            }
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
});