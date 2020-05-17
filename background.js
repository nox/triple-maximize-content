function toggle(tab) {
  browser.tabs.executeScript(tab.id, {file: "toggle.js"});
}

browser.browserAction.onClicked.addListener(toggle);
browser.contextMenus.create({
  "title": "Triple Maximize Magic",
  "onclick": (info, tab) => toggle(tab),
  "contexts": ["page"]
});
