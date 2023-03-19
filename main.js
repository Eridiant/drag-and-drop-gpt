document.addEventListener("DOMContentLoaded", () => {
    // Get all the columns and cards
    const columns = document.querySelectorAll('.column');
    const cards = document.querySelectorAll('.card');

    // Loop through the cards and add the dragstart and dragend event listeners
    cards.forEach(card => {
        card.addEventListener('dragstart', dragstart);
        card.addEventListener('dragend', dragend);
    });

    // Loop through the columns and add the dragover and drop event listeners
    columns.forEach(column => {
        column.addEventListener('dragover', dragover);
        column.addEventListener('drop', drop);
    });

    // Functions for the drag and drop events
    function dragstart() {
        this.classList.add('dragging');
    }

    function dragend() {
        this.classList.remove('dragging');
    }

    function dragover(e) {
        e.preventDefault();
        this.classList.add('over');
    }

    function drop() {
        this.classList.remove('over');
        const card = document.querySelector('.dragging');
        this.appendChild(card);
    }

})