document.addEventListener("click", function (event) {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");

    document.body.appendChild(ripple);

    let x = event.clientX;
    let y = event.clientY;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
        ripple.remove();
    }, 600);
});
