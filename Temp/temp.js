var switchOnOff = document.getElementById("switch");
var bulb = document.querySelector(".light");
var arrows = document.getElementsByClassName("arrow");

console.log(arrows);
var flag = true;


function light() {
    bulb.classList.remove("light");
    bulb.classList.add("on-light");
}

function switched( btn ) {
    if( flag ) {
        switchOnOff.style.color = "green";

        for (var i=0; i<arrows.length; i+=1){
            arrows[i].style.display = 'flex';
        }

        light();

        flag = false;
    }
    else {
        switchOnOff.style.color = "red";

        for (var i=0; i<arrows.length; i+=1){
            arrows[i].style.display = 'none';
        }

        bulb.classList.remove("on-light");
        bulb.classList.add("light");
        flag = true;
    }
}








// window.allowDrop = function(event) {
//   event.preventDefault();
// };

// window.drag = function(event) {
//   var img1 = document.createElement('img');
//   img1.src = '../south_north.jpg';
//   event.dataTransfer.setDragImage(img1, 100, 100);
//   event.dataTransfer.setData('real', event.target.id);
// };

// window.drop = function(event) {
//   event.preventDefault();

//   if(event.target.id === event.dataTransfer.getData('real')) {
//     return;
//   }

//   var img = document.createElement('img');
//   img.id = 'targetId_' + Math.random();
//   img.draggable = true;
//   img.addEventListener('dragstart', drag);

//   if(event.target.id === 'img2_container'){
//     img.src = 'south_north.jpg';
//   }
//   else if(event.target.id === 'img1_container') {
//     img.src = 'east_west.png';
//   }

//   var realElement = document.getElementById(event.dataTransfer.getData('real'));
//   realElement.outerHTML = '';
//   delete realElement;
//   event.target.appendChild(img);
// }

