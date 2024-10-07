chrome.runtime.onInstalled.addListener(() => {
  chrome.scripting.registerContentScripts([
    {
      id: "d577273ff885c3f84dadb8578bb41399",
      matches: ["<all_urls>"],
      js: ["content.js"]
    }
  ]);
});