let instagram, home, search, explore, messages, notifications, create, profile;

function setup() {
    createCanvas(windowWidth, windowHeight+1275);
    background(20);
    noStroke()

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
  
    home2 = createElement('h2', 'Home');
    home2.position(690, 17)
    home2.style('color', "white")
  
    square = createElement('h3', 'square');
    square.position(500, 75)
    square.style('color', "white")
  
    itsjustvica = createElement('h3', 'itsjustvica');
    itsjustvica.position(500, 550);
    itsjustvica.style('color', "white");
  
    pialovesyourbiz = createElement('h3', 'pialovesyourbiz');
    pialovesyourbiz.position(500,1025);
    pialovesyourbiz.style('color', "white");
  
    shop = createElement('h3', 'shopgirlscrew');
    shop.position(500,1495);
    shop.style('color', "white");
  
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
  
    let squaread = createImg("assets/square ad.png");
    squaread.position(510, 130);
    squaread.size([400], [400])
  
    let vica = createImg("assets/itsjustvica.png");
    vica.position(510, 605)
    vica.size([400], [400])
  
    let retainer = createImg("assets/retainer ad.png");
    retainer.position(510, 1080);
    retainer.size([400],[400])
  
    let shopgirls = createImg("assets/shopgirlscrew.png");
    shopgirls.position(510, 1550);
    shopgirls.size([400],[400])
  
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
  
    fill (35)
    rect(7, 7, 300, windowHeight+1261)
  
    fill (35)
    rect(314, 7, 811, windowHeight+1261)
  
    rect(1132,7,301, windowHeight+1261)

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