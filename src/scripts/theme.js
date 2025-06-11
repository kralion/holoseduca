// Function to initialize theme from localStorage
function initializeTheme() {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    const themeToggles = document.querySelectorAll('.theme-controller');
    
    if (savedTheme) {
        // If there's a saved theme, set all toggles state accordingly
        themeToggles.forEach(toggle => {
            toggle.checked = savedTheme === 'dracula';
        });
    }
}

// Function to save theme preference and sync all toggles
function handleThemeChange(event) {
    const theme = event.target.checked ? 'dracula' : 'light';
    localStorage.setItem('theme', theme);
    
    // Sync all other toggles to match the changed one
    const themeToggles = document.querySelectorAll('.theme-controller');
    themeToggles.forEach(toggle => {
        toggle.checked = event.target.checked;
    });
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeToggles = document.querySelectorAll('.theme-controller');
    
    // Initialize theme
    initializeTheme();
    
    // Listen for theme changes on all toggles
    themeToggles.forEach(toggle => {
        toggle.addEventListener('change', handleThemeChange);
    });
}); 