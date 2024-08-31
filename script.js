document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const teamBoxes = document.querySelectorAll('.team-content .box');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        teamBoxes.forEach(box => {
            const name = box.querySelector('h3').textContent.toLowerCase();
            const role = box.querySelector('h5').textContent.toLowerCase();
            if (name.includes(query) || role.includes(query)) {
                box.style.display = '';
            } else {
                box.style.display = 'none';
            }
        });
    });
});