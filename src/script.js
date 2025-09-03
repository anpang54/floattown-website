

// functions

function id(name) {
    return document.getElementById(name);
}


// switch page

let currentPage = "home";

function go(page) {

    const start = parseFloat(window.getComputedStyle(id(currentPage)).getPropertyValue("left").slice(0, -2));
    const end = parseFloat(window.getComputedStyle(id(page)).getPropertyValue("left").slice(0, -2));
    let value = start;

    id(`button-${currentPage}`).classList.remove("pressed");
    id(`button-${page}`).classList.add("pressed");

    let i = 0;
    let interval = setInterval(() => {
        value += (end - start) / 100;
        id("mainscroll").style.transform = `translateX(-${value}px)`;
        if(i === 100) {
            clearInterval(interval);
            id("mainscroll").style.transform = `translateX(-${end}px)`;
        } else {
            ++i;
        }
    }, 1);

    currentPage = page;

}

go("home");