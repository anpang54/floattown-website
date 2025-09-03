

// functions

function id(name) {
    return document.getElementById(name);
}


// page colors

const colors = {
    "home": 204,
    "key": 130,
    "friends": 60,
    "pictures": 277,
    "history": 305,
    "other-stuff": 10
};


// switch page

let currentPage = "home";

function go(page) {

    // get start/end values for animation
    const start = parseFloat(window.getComputedStyle(id(currentPage)).getPropertyValue("left").slice(0, -2));
    const end = parseFloat(window.getComputedStyle(id(page)).getPropertyValue("left").slice(0, -2));
    let value = start;

    // keep button pressed
    id(`button-${currentPage}`).classList.remove("pressed");
    id(`button-${page}`).classList.add("pressed");

    // do animation
    let i = 0;
    let interval = setInterval(() => {
        value += (end - start) / 100;
        id("mainscroll").style.transform = `translateX(-${value}px)`;
        if(i === 100) {
            clearInterval(interval);
            id("mainscroll").style.transform = `translateX(-${end}px)`;
            
            // set color
            document.body.style.backgroundColor = `hsla(${colors[page]}deg, 100%, 95%, 0.75)`;
        
        } else {
            ++i;
        }
    }, 1);

    // set page
    currentPage = page;

}

go("home");