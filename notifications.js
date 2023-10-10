let instagram, home, search, explore, messages, notifications, create, profile;

function setup() {
    createCanvas(windowWidth, windowHeight+37);
    noStroke()

    background(20);
    instagram = createElement('h1', 'Instagram');
    instagram.position(35, 15);
    instagram.style('color', "white");
  
    home = createElement('h2', 'Home');
    home.position(50,85)
    home.style('color', "white")
  
    home.mouseClicked(gotohome)
  
    create = createElement('h2', 'Create');
    create.position(50,140)
    create.style('color', "white")
  
    create.mouseClicked(warning)
  
    search = createElement('h2', 'Search');
    search.position(50,195)
    search.style('color', "white")
  
    search.mouseClicked(gotosearch)
  
    explore = createElement('h2', 'Explore');
    explore.position(50,250)
    explore.style('color', "white")
  
    explore.mouseClicked(gotoexplore)
  
    messages = createElement('h2', 'Messages');
    messages.position(50,305)
    messages.style('color', "white")
  
    messages.mouseClicked(gotomessages)
  
    notifications = createElement('h2', 'Notifications');
    notifications.position(50,360)
    notifications.style('color', "white")
  
    notifications.mouseClicked(gotonotifications)
  
    profile = createElement('h2', 'Profile');
    profile.position(50,415)
    profile.style('color', "white")

    profile.mouseClicked(terminate)
  
    notifications2 = createElement('h2', 'Notifications');
    notifications2.position(660, 17)
    notifications2.style('color', "white")
  
    suggested = createElement('h2', 'You may know:');
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

    txt5 = createElement('h3', '@marniejivyask6788dde started following you');
    txt5.position(400, 109);
    txt5.style('color', "white");

    txt6 = createElement('h3', '@marcogiessetjipe530t5 started following you');
    txt6.position(400, 189);
    txt6.style('color', "white");

    txt7 = createElement('h1', '!');
    txt7.position(355, 260);
    txt7.style('color', "white");

    txt8 = createElement('h3', 'We found that @lilycrocamo__ does not violate Instagram guidelines.');
    txt8.position(400, 270);
    txt8.style('color', "white");

    txt9 = createElement('h3', '@rosa.rig liked your post');
    txt9.position(400, 351);
    txt9.style('color', "white");

    txt10 = createElement('h3', '@vallerinjabejah754733f started following you');
    txt10.position(400, 432);
    txt10.style('color', "white");

    txt11 = createElement('h1', '!');
    txt11.position(355, 503);
    txt11.style('color', "white");

    txt12 = createElement('h3', 'Your report against @lilycrocamo__ was received.');
    txt12.position(400, 513);
    txt12.style('color', "white");

    txt13 = createElement('h3', 'You may know @lilycrocamo__');
    txt13.position(400, 594);
    txt13.style('color', "white");

    txt14 = createElement('h3', '@nadjiaannajivr223205t6 started following you');
    txt14.position(400, 676);
    txt14.style('color', "white");

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
    pfp5.position(335, 113)
    pfp5.size([50],[50])

    let pfp6 = createImg("assets/pfp.png");
    pfp6.position(335, 193)
    pfp6.size([50],[50])

    let cat = createImg("assets/cat.png");
    cat.position(334, 355)
    cat.size([52],[52])

    let pfp7 = createImg("assets/pfp.png");
    pfp7.position(335, 436)
    pfp7.size([50],[50])

    let pfp8 = createImg("assets/lily.png");
    pfp8.position(335, 598)
    pfp8.size([51],[51])

    let pfp9 = createImg("assets/pfp.png");
    pfp9.position(335, 679)
    pfp9.size([50],[50])

    fill (35)
    rect(7, 7, 300, windowHeight+23)
  
    fill (35)
    rect(314, 7, 811, windowHeight+23)
  
    fill (35)
    rect(1132,7,301, windowHeight+23)

    fill (20)
    rect(320, 100, 799, 75)

    fill (20)
    rect(320, 181, 799, 75)

    fill (20)
    rect(320, 262, 799, 75)

    fill (20)
    rect(320, 343, 799, 75)

    fill (20)
    rect(320, 424, 799, 75)

    fill (20)
    rect(320, 505, 799, 75)

    fill (20)
    rect(320, 586, 799, 75)

    fill (20)
    rect(320, 667, 799, 75)
  }
  
  function gotohome() {
    location.href = "index.html"
  }
  
  function warning () {
    window.alert('Warning: Your last post goes against community guidelines. This action will be unavailable for 24 hours. Tell us if you think we made a mistake.')
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

  function terminate () {
    location.href = "profile.html"
  }

  function draw() {
  }