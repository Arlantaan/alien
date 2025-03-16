window.onload = function () {
    let preloader = document.getElementById("preloader");

    // ✅ Check if the preloader has already been shown in this session
    if (sessionStorage.getItem("preloaderShown")) {
        preloader.style.display = "none"; // Hide preloader immediately
        return; // Exit function
    }

    let loaderBar = document.getElementById("loader-bar");
    let loaderMouse = document.getElementById("loader-mouse");

    let progress = 0;
    let interval = setInterval(() => {
        progress += 5;
        loaderBar.style.width = progress + "%";
        loaderMouse.style.left = `calc(${progress}% - 15px)`; // Adjust mouse position

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = "0";
                setTimeout(() => {
                    preloader.style.display = "none";
                    sessionStorage.setItem("preloaderShown", "true"); // ✅ Save session flag
                }, 500);
            }, 500);
        }
    }, 150);
};
