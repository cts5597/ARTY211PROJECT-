const images = {
  childhood: "https://live.staticflickr.com/65535/55220927164_306345c6d0_w.jpg",
  nyc: "https://live.staticflickr.com/65535/55220833828_951b0d3e94.jpg",
  reading: "https://live.staticflickr.com/65535/55220927124_5076869ee3_w.jpg",
  military: "https://live.staticflickr.com/65535/55221077620_1b42de1d58_n.jpg",
  jail: "YOUR_JAIL_IMAGE_URL"
};

function chooseStay() {
  const screen = document.getElementById("screen");
  screen.className = "screen split-layout-1";
  screen.innerHTML = `
    <div class="frame small-image-frame childhood-tone">
      <img src="${images.childhood}" alt="childhood image">
    </div>

    <div class="frame small-text-frame flash">
      <p>you stay</p>
      <p>the shelter becomes routine</p>
      <p>school feels far away</p>
      <p>the city keeps asking</p>
    </div>

    <div class="frame small-image-frame nyc-tone">
      <img src="${images.nyc}" alt="new york city image">
    </div>

    <div class="frame small-choice-frame" onclick="staySplitTwo()">
      <p>go outside</p>
    </div>
  `;
}

function staySplitTwo() {
  const screen = document.getElementById("screen");
  screen.className = "screen split-layout-2";
  screen.innerHTML = `
    <div class="frame small-image-frame nyc-tone">
      <img src="${images.nyc}" alt="new york street image">
    </div>

    <div class="frame small-text-frame">
      <p>you miss class</p>
      <p>then miss more</p>
      <p>nobody stops you</p>
    </div>

    <div class="frame small-choice-frame" onclick="staySplitThree()">
      <p>keep moving</p>
    </div>

    <div class="frame small-text-frame faint">
      <p>the nights get louder</p>
      <p>wrong people feel familiar</p>
    </div>

    <div class="frame small-image-frame nyc-tone">
      <img src="${images.nyc}" alt="new york image 2">
    </div>

    <div class="frame small-choice-frame" onclick="startStory()">
      <p>go back</p>
    </div>
  `;
}

function staySplitThree() {
  const screen = document.getElementById("screen");
  screen.className = "screen split-layout-3";
  screen.innerHTML = `
    <div class="frame small-image-frame nyc-tone">
      <img src="${images.nyc}" alt="city image">
    </div>

    <div class="frame small-text-frame">
      <p>one choice became many choices</p>
    </div>

    <div class="frame small-choice-frame" onclick="finalStay()">
      <p>fall deeper</p>
    </div>

    <div class="frame small-text-frame faint">
      <p>drugs fill the empty hours</p>
    </div>

    <div class="frame small-image-frame jail-tone">
      <img src="${images.jail}" alt="jail image">
    </div>

    <div class="frame small-text-frame">
      <p>sirens</p>
      <p>running</p>
      <p>caught</p>
    </div>

    <div class="frame small-choice-frame" onclick="finalStay()">
      <p>open door</p>
    </div>

    <div class="frame small-text-frame faint">
      <p>the room never left you</p>
      <p>time keeps moving</p>
    </div>

    <div class="frame small-choice-frame" onclick="startStory()">
      <p>restart</p>
    </div>
  `;
}

function finalStay() {
  const screen = document.getElementById("screen");
  screen.className = "screen split-layout-1";
  screen.innerHTML = `
    <div class="frame small-image-frame jail-tone">
      <img src="${images.jail}" alt="jail cell image">
    </div>

    <div class="frame small-text-frame flash">
      <p>the cell is cold</p>
      <p>the room is smaller than the shelter</p>
      <p>the ending was already beginning</p>
    </div>

    <div class="frame small-choice-frame" onclick="startStory()">
      <p>start again</p>
    </div>

    <div class="frame small-choice-frame" onclick="startStory()">
      <p>start again</p>
    </div>
  `;
}

function chooseLeave() {
  const screen = document.getElementById("screen");
  screen.className = "screen split-layout-1";
  screen.innerHTML = `
    <div class="frame small-image-frame childhood-tone">
      <img src="${images.childhood}" alt="childhood image">
    </div>

    <div class="frame small-text-frame flash">
      <p>you leave the city</p>
      <p>the noise fades behind you</p>
      <p>reading, pennsylvania</p>
      <p class="faint">it feels slower here</p>
      <p class="faint">almost unfamiliar</p>
    </div>

    <div class="frame small-image-frame reading-tone">
      <img src="${images.reading}" alt="reading pennsylvania image">
    </div>

    <div class="frame small-choice-frame" onclick="leaveSplitTwo()">
      <p>arrive in reading</p>
    </div>
  `;
}

function leaveSplitTwo() {
  const screen = document.getElementById("screen");
  screen.className = "screen split-layout-2";
  screen.innerHTML = `
    <div class="frame small-image-frame reading-tone">
      <img src="${images.reading}" alt="reading pa city image">
    </div>

    <div class="frame small-text-frame">
      <p>reading senior high school</p>
      <p>you keep showing up</p>
      <p>you stay in class</p>
    </div>

    <div class="frame small-choice-frame" onclick="leaveSplitThree()">
      <p>keep going</p>
    </div>

    <div class="frame small-text-frame faint">
      <p>graduation stops feeling impossible</p>
      <p>you begin again</p>
    </div>

    <div class="frame small-image-frame reading-tone">
      <img src="${images.reading}" alt="reading pa second image">
    </div>

    <div class="frame small-choice-frame" onclick="startStory()">
      <p>go back</p>
    </div>
  `;
}

function leaveSplitThree() {
  const screen = document.getElementById("screen");
  screen.className = "screen split-layout-3";
  screen.innerHTML = `
    <div class="frame small-image-frame reading-tone">
      <img src="${images.reading}" alt="reading pa image">
    </div>

    <div class="frame small-text-frame">
      <p>you graduate</p>
    </div>

    <div class="frame small-choice-frame" onclick="finalLeave()">
      <p>sign papers</p>
    </div>

    <div class="frame small-text-frame faint">
      <p>discipline becomes a language</p>
    </div>

    <div class="frame small-image-frame military-tone">
      <img src="${images.military}" alt="military image">
    </div>

    <div class="frame small-text-frame">
      <p>uniform</p>
      <p>structure</p>
      <p>movement</p>
    </div>

    <div class="frame small-choice-frame" onclick="finalLeave()">
      <p>continue</p>
    </div>

    <div class="frame small-text-frame faint">
      <p>you made it out</p>
      <p>but you still remember the room</p>
    </div>

    <div class="frame small-choice-frame" onclick="startStory()">
      <p>restart</p>
    </div>
  `;
}

function finalLeave() {
  const screen = document.getElementById("screen");
  screen.className = "screen split-layout-1";
  screen.innerHTML = `
    <div class="frame small-image-frame military-tone">
      <img src="${images.military}" alt="military portrait image">
    </div>

    <div class="frame small-text-frame flash">
      <p>you graduate</p>
      <p>you sign the papers</p>
      <p>you put on the uniform</p>
      <p class="faint">discipline replaces chaos</p>
      <p class="faint">but you still remember the room</p>
    </div>

    <div class="frame small-choice-frame" onclick="startStory()">
      <p>start again</p>
    </div>

    <div class="frame small-choice-frame" onclick="startStory()">
      <p>start again</p>
    </div>
  `;
}

function startStory() {
  const screen = document.getElementById("screen");
  screen.className = "screen start-layout";
  screen.innerHTML = `
    <div class="frame image-frame childhood-tone">
      <img src="${images.childhood}" alt="childhood image">
    </div>

    <div class="frame text-frame flash">
      <p>you are 16</p>
      <p>new york city</p>
      <p>your family is in a shelter</p>
      <p>the night waits</p>
    </div>

    <div class="frame choice-frame" onclick="chooseStay()">
      <p>stay in new york</p>
    </div>

    <div class="frame choice-frame" onclick="chooseLeave()">
      <p>leave for pennsylvania</p>
    </div>
  `;
}

startStory();
