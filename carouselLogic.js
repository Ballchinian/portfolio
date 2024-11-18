document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(document.querySelectorAll('.hobby-container li'));
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    const itemWidth = items[0].offsetWidth;  // Get the width of one item
    let visibleItems = Math.floor(track.offsetWidth / itemWidth); // Calculate number of items visible based on screen width
    const totalItems = items.length; // Total number of items in the list
    let currentIndex = 0; // Tracks the start index of visible items

    // Function to update the carousel view
    const updateCarousel = (direction) => {
        if (direction === 'right') {
            // Only move right if we are not at the last set of items
            if (currentIndex < totalItems - visibleItems) {
                currentIndex++;
            }
        } else if (direction === 'left') {
            // Only move left if we are not at the first set of items
            if (currentIndex > 0) {
                currentIndex--;
            }
        }

        // Calculate the transform offset based on the currentIndex and visibleItems
        const offset = (currentIndex * 100) / visibleItems; // Offset in percentages
        track.style.transform = `translateX(-${offset}%)`;
    };

    // Event listeners for arrows
    leftArrow.addEventListener('click', () => updateCarousel('left'));
    rightArrow.addEventListener('click', () => updateCarousel('right'));

    // Recalculate the number of visible items when the window is resized
    window.addEventListener('resize', () => {
        visibleItems = Math.floor(track.offsetWidth / itemWidth); // Recalculate based on new width
        // Ensure currentIndex does not exceed the new limits
        if (currentIndex > totalItems - visibleItems + 2) {
            currentIndex = totalItems - visibleItems + 2;
        }
        const offset = (currentIndex * 100) / visibleItems; // Recalculate offset
        track.style.transform = `translateX(-${offset}%)`;
    });
});
