// Background script
chrome.runtime.onInstalled.addListener(() => {
  console.log('NoShorts extension has been installed');
  
  // Initialize default settings
  chrome.storage.sync.set({
    noshorts_enabled: true
  });
});

// Handle tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes('youtube.com')) {
    // Notify content script when YouTube page is loaded
    chrome.tabs.sendMessage(tabId, { action: 'pageLoaded' }).catch(() => {
      // Ignore if message sending fails (content script might not be ready yet)
    });
  }
});

// Handle messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getSettings') {
    chrome.storage.sync.get(['noshorts_enabled']).then(result => {
      sendResponse({ enabled: result.noshorts_enabled !== false });
    });
    return true; // Indicates asynchronous response
  }
}); 