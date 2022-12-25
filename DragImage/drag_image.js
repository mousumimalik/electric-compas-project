window.allowDrop = function(ev) {
    ev.preventDefault();
}

window.drag = function(ev) {
    var img = document.createElement("img");
    img.src = 'img.jpg';
    ev.dataTransfer.setDragImage(img, 10, 10);
    ev.dataTransfer.setData("ori", ev.target.id);
}

window.drop = function(ev) {
    ev.preventDefault();

    if (ev.target.id === ev.dataTransfer.getData("ori")) {
      return;
    }

    var img = document.createElement("img");
    img.id = 'targetId_' + Math.random();
    img.draggable = true;
    img.addEventListener('dragstart', drag);

    if (ev.target.id === 'div2') {
      img.src = 'img.jpg';
    } 
    else if (ev.target.id === 'div1') {
      img.src = 'img2.png';
    }
    
    var originEle = document.getElementById(ev.dataTransfer.getData("ori"));
    originEle.outerHTML = '';
    delete originEle;
    ev.target.appendChild(img);
}