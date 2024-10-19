window.addEventListener('load', () => {
    loadWindow();
})

let loadWindow = () => {
    let load = document.querySelector('#loading-page');
    load.classList.add('loaded');
    window.setTimeout(() => {
        load.remove();
    }, 5000);
}