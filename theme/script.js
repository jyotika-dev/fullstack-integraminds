
    // Get the theme switch input and the body element
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Check for saved theme in local storage and apply it
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeSwitch.checked = true;
    } else {
        body.classList.add('light-theme');
    }

    // Add an event listener to the theme switch
    themeSwitch.addEventListener('change', function() {
        if (themeSwitch.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    });
