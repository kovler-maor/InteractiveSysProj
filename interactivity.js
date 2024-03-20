function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}

// Repeat toggleSubmenu function or make it generic for other buttons
document.addEventListener('DOMContentLoaded', function() {
    fetchButtons();
});

function fetchButtons() {
    fetch('yourApiEndpoint')
        .then(response => response.json())
        .then(data => createButtons(data))
        .catch(error => console.error('Error fetching data:', error));
}

function createButtons(data) {
    const container = document.getElementById('interactivity-container');

    // Assuming data is an array of objects with a title and subItems
    data.forEach(item => {
        const button = document.createElement('div');
        button.className = 'button';
        button.textContent = item.title;
        button.onclick = () => toggleSubmenu(item.title);
        container.appendChild(button);

        const submenu = document.createElement('div');
        submenu.className = 'submenu';
        submenu.id = item.title;

        item.subItems.forEach(subItem => {
            const subButton = document.createElement('div');
            subButton.className = 'sub-button';
            subButton.textContent = subItem;
            // Add your own logic for sub-button click event
            submenu.appendChild(subButton);
        });

        container.appendChild(submenu);
    });
}

function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}
