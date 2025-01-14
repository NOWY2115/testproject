let zoomItems = document.querySelectorAll('[aria-label="zoom-image"]')

let zoomIn = (src) => {
    let parent = document.createElement("div")
    parent.classList.add('zoomed-parent')
    parent.id = "zoomedParent"
    let child = document.createElement("img")
    child.src = src;
    child.classList.add('zoomed-image')
    let leaveBtn = document.createElement("button")
    leaveBtn.id = "zoomoutBtn"
    leaveBtn.classList.add('zoomout-btn')
    leaveBtn.innerHTML = "X";
    document.body.appendChild(parent)
    parent.appendChild(child)
    parent.appendChild(leaveBtn)
}

let zoomOut = () => {
    let parent = document.querySelector("#zoomedParent")
    document.body.removeChild(parent)
}

zoomItems.forEach((item) => {
    item.addEventListener('click', ()=>{
        zoomIn(item.src);
        let leaveButton = document.querySelector("#zoomoutBtn")
        leaveButton.addEventListener('click', zoomOut)
    })
})