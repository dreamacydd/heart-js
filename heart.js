let MOBILE_P = false;
let MENU_HIDDEN = false;
let MENU_HEIGHT_MOBILE = undefined;
let MENU_HEIGHT = 0;
const hamburgerMenuElem = document.getElementById("menuToggler");
const topLevelNavMenu = document.getElementById("topLevelNavMenu");
const navMenuElements = document.getElementsByClassName("navLink");

const hideMenu = () => {
    topLevelNavMenu.style.height = "0";
}

const showMenu = () => {
    if(MOBILE_P) {
        topLevelNavMenu.style.height = `${MENU_HEIGHT}px`;
    } else {
        topLevelNavMenu.style.height = "auto";
    }
}

const menuRenderer = () => {
    let viewportSize = window.innerWidth;
    let menuCurrentHeight = topLevelNavMenu.clientHeight;

    if(menuCurrentHeight !== 0) {
        MENU_HEIGHT = menuCurrentHeight;
    }

    topLevelNavMenu.style.height = MENU_HEIGHT;

    if(viewportSize <= 640) {
        MOBILE_P = true;
        MENU_HIDDEN = true;
        hideMenu();
    } else {
        MOBILE_P = false;
        MENU_HIDDEN = false;
        showMenu();
    }
};

const menuIniter = () => {
    menuRenderer();
}

const hamburgerMenu = (e) => {
    e.preventDefault();

    if(MENU_HIDDEN) {
        showMenu();
        MENU_HIDDEN = false;
    } else {
        hideMenu();
        MENU_HIDDEN = true;
    }
}

window.onload = menuIniter;
window.onresize = menuRenderer;
hamburgerMenuElem.onclick = hamburgerMenu;
