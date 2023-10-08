function setup() {
  createCanvas(windowWidth, windowHeight+1275);
  noStroke()
}

let instagram, home, search, explore, messages, notifications, create, profile;

function draw() {
  background(20);
  instagram = createElement('h1', 'Instagram');
  instagram.position(35, 15);
  instagram.style('color', "white");

  home = createElement('h2', 'Home');
  home.position(50,85)
  home.style('color', "white")

  search = createElement('h2', 'Search');
  search.position(50,140)
  search.style('color', "white")

  explore = createElement('h2', 'Explore');
  explore.position(50,195)
  explore.style('color', "white")

  messages = createElement('h2', 'Messages');
  messages.position(50,250)
  messages.style('color', "white")

  notifications = createElement('h2', 'Notifications');
  notifications.position(50,305)
  notifications.style('color', "white")

  create = createElement('h2', 'Create');
  create.position(50,360)
  create.style('color', "white")

  profile = createElement('h2', 'Profile');
  profile.position(50,415)
  profile.style('color', "white")

  search2 = createElement('h2', 'Search');
  search2.position(675, 17)
  search2.style('color', "white")

  suggested2 = createElement('h2', 'Suggested');
  suggested2.position(375,135)
  suggested2.style('color', "white")

  zola = createElement('h3', '@he__rschelxr5545_');
  zola.position(425, 183);
  zola.style('color', "white")

  hur = createElement('h3', '@huryanhenjjery93de');
  hur.position(425, 218);
  hur.style('color', "white")

  lily = createElement('h3', '@lilycrocamo__');
  lily.position(425, 253);
  lily.style('color', "white")

  suggested = createElement('h2', 'Suggested');
  suggested.position(1175, 50)
  suggested.style('color', "white")

  txt = createElement('h5', '@ezpadrinorlfu');
  txt.position(1215, 95);
  txt.style('color', "white");

  txt2 = createElement('h5', '@erltruonglo');
  txt2.position(1215, 133);
  txt2.style('color', "white");

  txt3 = createElement('h5', '@ovjanet_jefo');
  txt3.position(1215, 171);
  txt3.style('color', "white");

  txt4 = createElement('h5', '@totallynotabot');
  txt4.position(1215, 209);
  txt4.style('color', "white");

  let pfp = createImg("assets/pfp.png");
  pfp.position(1182, 112)
  pfp.size([25],[25])

  let pfp2 = createImg("assets/pfp.png");
  pfp2.position(1182, 150)
  pfp2.size([25],[25])

  let pfp3 = createImg("assets/pfp.png");
  pfp3.position(1182, 188)
  pfp3.size([25],[25])

  let pfp4 = createImg("assets/pfp.png");
  pfp4.position(1182, 226)
  pfp4.size([25],[25])

  let pfp5 = createImg("assets/pfp.png");
  pfp5.position(390, 200)
  pfp5.size([25],[25])

  let pfp6 = createImg("assets/pfp.png");
  pfp6.position(390, 235)
  pfp6.size([25],[25])

  let pfp7 = createImg("assets/lily.png");
  pfp7.position(390, 270)
  pfp7.size([25],[25])

  fill (35)
  rect(7, 7, 300, windowHeight+1261)

  fill (35)
  rect(314, 7, 811, windowHeight+1261)

  rect(1132,7,301, windowHeight+1261)

  let inp = createInput('');
  inp.position(350, 100);
  inp.size(725,25);
  inp.input(myInputEvent);
}