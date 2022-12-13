// background function
function background(url, left, bottom, width, height) {
  for (let i = 0; i < height; i++) {
    for (let x = 0; x < width; x++) {
      newImage(url, left + x * 100, bottom + i * 100);
    }
  }
}

// newImage function
function newImage(path, left, bottom) {
  let img = document.createElement("img");
  img.src = path;
  img.style.position = "fixed";
  img.style.left = left + "px";
  img.style.bottom = bottom + "px";
  document.body.append(img);
  return img;
}

// newItem/eventListener function
function newItem(path, left, bottom) {
  let item = newImage(path, left, bottom);

  item.addEventListener("dblclick", () => {
    item.remove();
  });
}

// invoking background function
let height = window.innerHeight / 1.75;
let Sky = window.innerHeight - height;
let Grass = height;
background("assets/sky.png", 0, height, window.innerWidth, Sky / 100);
background("assets/grass.png", 0, 0, window.innerWidth, Grass / 100);

// invoking newImage function
newImage("assets/green-character.gif", "100", "100");
newImage("assets/pine-tree.png", "450", "200");
newImage("assets/tree.png", "200", "300");
newImage("assets/pillar.png", "350", "100");
newImage("assets/crate.png", "150", "200");
newImage("assets/well.png", "500", "425");

// invoking newItem funciton
newItem("assets/sword.png", "500", "405");
newItem("assets/sheild.png", "165", "185");
newItem("assets/staff.png", "600", "100");
