const mouseEvents = document.getElementById("mouse-elements");
const mousePosition = document.querySelector("#mouse-position");
const mouseClick = document.querySelector("#mouse-click");
const mouseDblClick = document.querySelector("#mouse-dblclick");
const mouseDown = document.querySelector("#mouse-down");
const mouseUp = document.querySelector("#mouse-up");
const mouseOver = document.querySelector("#mouse-over");
const mouseOut = document.querySelector("#mouse-out");
const mouseMove = document.querySelector("#mouse-move");
const mouseWheel = document.querySelector("#mouse-wheel");

mouseEvents.addEventListener("mousemove", (event) => {
    mousePosition.textContent = `Mouse Position: ${event.clientX}, Mouse Y: ${event.clientY}`
});

mouseEvents.addEventListener("click", () => {
    mouseClick.textContent = "Mouse Click: Mouse Clicked!";
});
mouseEvents.addEventListener("dblclick", () => {
    mouseDblClick.textContent = "Mouse Double Click: Mouse Double Clicked!";
});

mouseEvents.addEventListener("mousedown", () => {
    mouseDown.textContent = "Mouse Down: Mouse Down!";
});

mouseEvents.addEventListener("mouseup", () => {
    mouseUp.textContent = "Mouse Up: Mouse Up!";
});

mouseEvents.addEventListener("mouseover", () => {
    mouseOver.textContent = "Mouse Over: Mouse Over!";
});

mouseEvents.addEventListener("mouseout", () => {
    mouseOut.textContent = "Mouse Out: Mouse Out!";
});

mouseEvents.addEventListener("mousemove", () => {
    mouseMove.textContent = "Mouse Move: Mouse Move!";
});

mouseEvents.addEventListener("wheel", () => {
    mouseWheel.textContent = "Mouse Wheel: Mouse Wheel!";
});
