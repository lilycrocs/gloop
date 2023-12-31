let instagram, home, search, explore, messages, notifications, create, profile;

function setup() {
    createCanvas(windowWidth, windowHeight);
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
  
    messages2 = createElement('h2', 'Messages');
    messages2.position(675, 17)
    messages2.style('color', "white")
  
    suggested = createElement('h2', 'You may know:');
    suggested.position(1175, 50)
    suggested.style('color', "white")
  
    txt = createElement('h5', '@ajgambiaonou34lai');
    txt.position(1215, 95);
    txt.style('color', "white");
  
    txt2 = createElement('h5', '@ekjennighjane5r5');
    txt2.position(1215, 133);
    txt2.style('color', "white");
  
    txt3 = createElement('h5', '@alistaeurjaxi8088ags');
    txt3.position(1215, 171);
    txt3.style('color', "white");
  
    txt4 = createElement('h5', '@abbottghisseapp20345');
    txt4.position(1215, 209);
    txt4.style('color', "white");

    txt5 = createElement('h5', '@seflorencejir2503we');
    txt5.position(400, 92);
    txt5.style('color', "white");

    txt6 = createElement('h6', 'Hey! Im on the promoter team at ElysiumWorld and we think youd be perfect to wear our Products! <3 ElysiumWorld, a Vegan and Eco');
    txt6.position(400, 110);
    txt6.style('color', "white");

    txt7 = createElement('h6', 'Friendly Gothic/Alt label is offering 3-4 FREE High-Quality Items for individuals willing to review their products (Plenty more gifts and p...');
    txt7.position(400, 123);
    txt7.style('color', "white");

    txt8 = createElement('h5', '@faustosarlijuir955');
    txt8.position(400, 173);
    txt8.style('color', "white");

    txt9 = createElement('h6', 'Hey dear princess! We want you to be our model or brand ambassador! We will send you free products, just cover shipping and we will');
    txt9.position(400, 191);
    txt9.style('color', "white");

    txt10 = createElement('h6', 'take care of the rest. We will feature you on our website and the Instagram pages. We are legit, for the feedback of our customers. And...');
    txt10.position(400, 204);
    txt10.style('color', "white");

    txt11 = createElement('h5', '@ojlorirodmanrozji443');
    txt11.position(400, 254);
    txt11.style('color', "white");

    txt12 = createElement('h6', 'CONGRATULATIONS!!! You have been selected as winner for giveaway program! Please send shipping information so we can send your');
    txt12.position(400, 273);
    txt12.style('color', "white");

    txt13 = createElement('h6', 'prize. Offer expires soon.');
    txt13.position(400, 285);
    txt13.style('color', "white");

    txt14 = createElement('h5', 'Rosa');
    txt14.position(400, 335);
    txt14.style('color', "white");

    txt15 = createElement('h6', 'LMAO yeah');
    txt15.position(400, 353);
    txt15.style('color', "white");

    txt16 = createElement('h5', '@jazmiyanialosekjitr9987');
    txt16.position(400, 416);
    txt16.style('color', "white");

    txt17 = createElement('h6', 'Hello girl <3 Im a Brand Supervisor of Cuzette. I came across your account and I think you could be an awesome addition to our delegate');
    txt17.position(400, 435);
    txt17.style('color', "white");

    txt18 = createElement('h6', 'program! We are in search for a beautiful woman worldwide and you have what it takes to join the team. I am cordially inviting you to be...');
    txt18.position(400, 447);
    txt18.style('color', "white");

    txt19 = createElement('h5', 'Mary');
    txt19.position(400, 497);
    txt19.style('color', "white");

    txt19 = createElement('h6', 'Mary sent a photo');
    txt19.position(400, 516);
    txt19.style('color', "white");
  
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

    let pfp7 = createImg("assets/pfp.png");
    pfp7.position(335, 274)
    pfp7.size([50],[50])

    let cat = createImg("assets/cat.png");
    cat.position(334, 355)
    cat.size([52],[52])

    let pfp8 = createImg("assets/pfp.png");
    pfp8.position(335, 436)
    pfp8.size([50],[50])

    let mary = createImg("assets/mary.png")
    mary.position(335,517)
    mary.size([51], [51])
  
    fill (35)
    rect(7, 7, 300, windowHeight-14)
  
    fill (35)
    rect(314, 7, 811, windowHeight-14)
  
    fill (35)
    rect(1132,7,301, windowHeight-14)

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