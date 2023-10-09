let instagram, home, search, explore, messages, notifications, create, profile;

function setup() {
    createCanvas(windowWidth, windowHeight+150);
    noStroke()

    background(20);
    instagram = createElement('h1', 'Instagram');
    instagram.position(35, 15);
    instagram.style('color', "white");
  
    home = createElement('h2', 'Home');
    home.position(50,85)
    home.style('color', "white")

    home.mouseClicked(gotohome)
  
    search = createElement('h2', 'Search');
    search.position(50,140)
    search.style('color', "white")

    search.mouseClicked(gotosearch)
  
    explore = createElement('h2', 'Explore');
    explore.position(50,195)
    explore.style('color', "white")

    explore.mouseClicked(gotoexplore)
  
    messages = createElement('h2', 'Messages');
    messages.position(50,250)
    messages.style('color', "white")

    messages.mouseClicked(gotomessages)
  
    notifications = createElement('h2', 'Notifications');
    notifications.position(50,305)
    notifications.style('color', "white")

    notifications.mouseClicked(gotonotifications)
  
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

    let spoon = createImg(['assets/spoon.gif']);
    spoon.position(355, 114);
    spoon.size([235], [470]);

    let email = createImg("assets/email.png");
    email.position(860, 114)
    email.size(225, 243)

    let luigi = createImg("assets/luigi.gif");
    luigi.position(613, 114)
    luigi.size(225, 225)

    let dog = createImg("assets/dog.gif");
    dog.position(613, 359)
    dog.size(225, 225)

    let cucumber = createImg(['assets/cucumber.gif']);
    cucumber.position(860, 377);
    cucumber.size([225], [452]);

    let corndog = createImg("assets/corndog.png");
    corndog.position(355, 605)
    corndog.size(235, 225)

    let kitkat = createImg("assets/kitkat.gif");
    kitkat.position(613, 605)
    kitkat.size(225, 225)
  
    fill (35)
    rect(7, 7, 300, windowHeight+136)
  
    fill (35)
    rect(314, 7, 811, windowHeight+136)
  
    rect(1132,7,301, windowHeight+136)
  }
  

function gotohome() {
  location.href = "index.html"
}

function gotosearch() {
  console.log("clicked")
  location.href = "searchindex.html"
}

function gotoexplore() {
  location.href = "exploreindex.html"
}

function gotomessages() {
  location.href = "messagesindex.html"
}

function gotonotifications() {
  location.href = "notificationsindex.html"
}

  function draw() {
   
  }

  function spoonLoad () {
    spoon.loop();
  }