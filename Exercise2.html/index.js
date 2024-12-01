const heights = [160, 170, 155, 180, 165];

const heightList = document.getElementById('height-list');
const addHeightButton = document.getElementById('add-height');
const filterHeightButton = document.getElementById('filter-height');


function displayHeights(filteredHeights = heights) {
    heightList.innerHTML = '';
    filteredHeights.forEach(height => {
        const li = document.createElement('li');
        li.textContent = `${height} см`;
        heightList.appendChild(li);
    });
}

addHeightButton.addEventListener('click', () => {
    const newHeight = prompt("Введите рост ученика (в сантиметрах):");
    if (!newHeight) {
        alert("Рост не введён!");
        return;
    }
    const parsedHeight = parseInt(newHeight, 10);
    if (isNaN(parsedHeight) || parsedHeight <= 0) {
        alert("Введите корректное число!");
        return;
    }
    heights.push(parsedHeight);
    displayHeights();
});

filterHeightButton.addEventListener('click', () => {
    const minHeight = prompt("Введите минимальный рост для фильтрации:");
    if (!minHeight) {
        displayHeights(); // Показать весь список
        return;
    }
    const parsedMinHeight = parseInt(minHeight, 10);
    if (isNaN(parsedMinHeight)) {
        alert("Введите корректное число!");
        return;
    }
    const filteredHeights = heights.filter(height => height >= parsedMinHeight);
    displayHeights(filteredHeights);
});
displayHeights();
