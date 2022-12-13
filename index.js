function newImage(path, left, bottom) {
  let img = document.createElement("img");
  img.src = path;
  img.style.position = "fixed";
  img.style.left = left;
  img.style.bottom = bottom;
  document.body.append(img);
}
function newItem(my, clown, shoes) {
  let item = document.createElement("img");
  item.src = my;
  item.style.position = "fixed";
  item.style.left = clown;
  item.style.bottom = shoes;
  document.body.append(item);

  item.addEventListener("dblclick", function () {
    item.remove();
  });
}

// new image function

// green character
newImage("assets/green-character.gif", "100px", "100px");

// pine tree
newImage("assets/pine-tree.png", "450px", "200px");

// tree
newImage("assets/tree.png", "200px", "300px");

// pillar
newImage("assets/pillar.png", "350px", "100px");

// crate
newImage("assets/crate.png", "150px", "200px");

// well
newImage("assets/well.png", "500px", "425px");

//  invoking new item function

//  sword
newItem("assets/sword.png", "500px", "405px");

//  shield
newItem("assets/sheild.png", "165px", "185px");

//  staff
newItem("assets/staff.png", "600px", "100px");
