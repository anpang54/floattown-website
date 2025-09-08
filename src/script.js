

// functions

function id(name) {
    return document.getElementById(name);
}


// page colors

const colors = {
    "home": 204,
    "key": 130,
    "buildings": 60,
    "pictures": 277,
    "history": 305,
    "statistics": 10
};
const pages = Object.keys(colors);


// switch page

let currentPage = "home";

function go(page) {

    // get start/end values for animation
    const start = parseFloat(window.getComputedStyle(id(currentPage)).getPropertyValue("left").slice(0, -2));
    const end = parseFloat(window.getComputedStyle(id(page)).getPropertyValue("left").slice(0, -2));
    let value = start;

    // get start/end values for color
    const colorStart = colors[currentPage];
    const colorEnd = colors[page];
    let colorValue = colorStart;

    // keep button pressed
    id(`button-${currentPage}`).classList.remove("pressed");
    id(`button-${page}`).classList.add("pressed");

    // do animation
    let i = 0;
    let interval = setInterval(() => {

        // set values
        if(pages.indexOf(start) < pages.indexOf(end)) {
            value -= (end - start) / 100;
        } else {
            value += (end - start) / 100;
        }
        colorValue += (colorEnd - colorStart) / 100;

        // update
        id("mainscroll").style.transform = `translateX(-${value}px)`;
        document.body.style.backgroundColor = `hsla(${colorValue}deg, 100%, 95%, 0.75)`;
        if(i === 100) {
            clearInterval(interval);

            // set final distance and color
            id("mainscroll").style.transform = `translateX(-${end}px)`;
            document.body.style.backgroundColor = `hsla(${colorEnd}deg, 100%, 95%, 0.75)`;
        
        } else {
            ++i;
        }

    }, 1);

    // set scroll
    id("main").scrollTop = 0;

    // set page
    currentPage = page;

}

go("home");


// key filter

const allFilters = ["buildings", "canals", "transversals", "friends", "relationships"];
let currentFilters = {
    "buildings": true,
    "canals": true,
    "transversals": true,
    "friends": true,
    "relationships": true
}

function filter(page) {

    // toggle button
    if(page === "all") {
        for(const filter of allFilters) {
            currentFilters[filter] = true;
        }
    } else {
        currentFilters[page] = !currentFilters[page];
    }

    // update buttons
    for(const filter of allFilters) {
        if(currentFilters[filter]) {
            id(`filter-${filter}`).classList.add("pressed");
        } else {
            id(`filter-${filter}`).classList.remove("pressed");
        }
    }

}

filter("all");

