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
  
    explore2 = createElement('h2', 'Explore');
    explore2.position(675, 17)
    explore2.style('color', "white")
  
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

    let spoon = createVideo(['assets/spoon.mp4']);
    spoon.position(355, 56);
    spoon.size([235]);

    let email = createImg("assets/email.png");
    email.position(860, 114)
    email.size(225, 243)

    let luigi = createVideo("assets/luigi.mp4");
    luigi.position(613, 114)
    luigi.size(225, 225)

    let dog = createVideo("assets/dog.mp4");
    dog.position(613, 359)
    dog.size(225, 225)

    let cucumber = createVideo(['assets/cucumber.mp4']);
    cucumber.position(860, 309);
    cucumber.size([225]);

    let corndog = createImg("assets/corndog.png");
    corndog.position(355, 605)
    corndog.size(235, 225)

    let kitkat = createVideo("assets/kitkat.mp4");
    kitkat.position(613, 605)
    kitkat.size(225, 225)
  
    fill (35)
    rect(7, 7, 300, windowHeight+1261)
  
    fill (35)
    rect(314, 7, 811, windowHeight+1261)
  
    rect(1132,7,301, windowHeight+1261)
  }

  function spoonLoad () {
    spoon.loop();
  }