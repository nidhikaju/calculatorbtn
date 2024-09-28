// Select display and buttons
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));

let displayValue = ''; // The value to be shown in the display

// Event listener for button clicks
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        // Clear the display
        if (value === 'C') {
            displayValue = '';
        }
        // Delete the last digit
        else if (value === 'DEL') {
            displayValue = displayValue.slice(0, -1);
        }
        // Perform the calculation
        else if (value === '=') {
            try {
                displayValue = eval(displayValue);
            } catch (error) {
                displayValue = 'Error';
            }
        }
        // Append numbers and operators to display
        else {
            displayValue += value;
        }

        // Update the display
        display.innerText = displayValue || '0';
    });
});