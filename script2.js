
const accelerationXSlider = document.getElementById("accelerationXSlider");
const accelerationYSlider = document.getElementById("accelerationYSlider");
const accelerationZSlider = document.getElementById("accelerationZSlider");
const distanceSlider = document.getElementById("distanceSlider");
const resultElement = document.getElementById("result");

function calculateAngleChange() {
    const accelerationX = parseFloat(accelerationXSlider.value);
    const accelerationY = parseFloat(accelerationYSlider.value);
    const accelerationZ = parseFloat(accelerationZSlider.value);
    const distance = parseFloat(distanceSlider.value);

    // Calculate angle change (assuming simple physics)
    const accelerationMagnitude = Math.sqrt(
        accelerationX * accelerationX +
        accelerationY * accelerationY +
        accelerationZ * accelerationZ
    );

    const angleChangeRad = Math.atan(accelerationMagnitude / 9.81); // Acceleration due to gravity (adjust as needed)
    const angleChangeDegrees = (angleChangeRad * 180) / Math.PI;

    // Calculate horizontal angle change based on distance
    const horizontalAngleChangeRad = Math.atan(distance * 1000 / distance);
    const horizontalAngleChangeDegrees = (horizontalAngleChangeRad * 180) / Math.PI;

    // Total angle change
    const totalAngleChangeDegrees = angleChangeDegrees + horizontalAngleChangeDegrees;

    resultElement.textContent = `Angle Change: ${totalAngleChangeDegrees.toFixed(2)} degrees`;
}

// Add event listeners to update the calculation on slider change
accelerationXSlider.addEventListener("input", calculateAngleChange);
accelerationYSlider.addEventListener("input", calculateAngleChange);
accelerationZSlider.addEventListener("input", calculateAngleChange);
distanceSlider.addEventListener("input", calculateAngleChange);

// Initial calculation
calculateAngleChange();
