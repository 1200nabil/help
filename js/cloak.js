
var tab = localStorage.getItem("tab");

if (tab) {
  try {
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}
if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

var settingsDefaultTab = {
  title: "settings | nabilgames",
  icon: "/favicon.ico",
};

function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (icon) {
    tabData.icon = icon;
  } else {
    delete tabData.icon;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}
  
function setCloak() {
  var cloak = document.getElementById("presets").value;
  switch (cloak) {
    case "nabilgames":
      setTitle("nabilgames");
      setFavicon("/favicon.ico");
      location.reload();
      break;
    case "drive":
      setTitle("My Drive - Google Drive");
      setFavicon("/img/favicons/drive.ico");
      location.reload();
      break;
    case "classroom":
      setTitle("Classes");
      setFavicon("/img/favicons/classroom.png");
      location.reload();
      break;
    case "meet":
      setTitle("Google Meet");
      setFavicon("/img/favicons/meet.ico");
      location.reload();
      break;
    case "gmail":
      setTitle("Inbox (32)");
      setFavicon("/img/favicons/gmail.ico");
      location.reload();
      break;
    case "edpuzzle":
      setTitle("Edpuzzle");
      setFavicon("/img/favicons/edpuzzle.ico");
      location.reload();
      break;
    case "khan":
      setTitle("* Dashboard | Khan Academy"); 
      setFavicon("/img/favicons/khan.ico");
      location.reload();
      break;
  }
}

function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}