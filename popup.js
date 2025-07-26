// Control popup behavior
document.addEventListener('DOMContentLoaded', async () => {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const statusElement = document.getElementById('status');

  // Load current settings
  async function loadSettings() {
    try {
      const result = await chrome.storage.sync.get(['noshorts_enabled']);
      const isEnabled = result.noshorts_enabled !== false; // Default is true
      updateUI(isEnabled);
    } catch (error) {
      console.error('Failed to load settings:', error);
      updateUI(true); // Default value on error
    }
  }

  // Update UI
  function updateUI(isEnabled) {
    if (isEnabled) {
      toggleSwitch.classList.add('active');
      statusElement.textContent = 'Enabled - Shorts are hidden';
      statusElement.className = 'status enabled';
    } else {
      toggleSwitch.classList.remove('active');
      statusElement.textContent = 'Disabled - Shorts are visible';
      statusElement.className = 'status disabled';
    }
  }

  // Save settings
  async function saveSettings(isEnabled) {
    try {
      await chrome.storage.sync.set({ noshorts_enabled: isEnabled });
      
      // Send message to active tab for immediate effect
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tabs[0] && tabs[0].url.includes('youtube.com')) {
        chrome.tabs.sendMessage(tabs[0].id, { 
          action: 'toggleNoShorts', 
          enabled: isEnabled 
        }).catch(() => {
          // If message sending fails (page reload required)
          console.log('Please reload the page to apply settings');
        });
      }
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }

  // Toggle switch click event
  toggleSwitch.addEventListener('click', async () => {
    const isCurrentlyEnabled = toggleSwitch.classList.contains('active');
    const newState = !isCurrentlyEnabled;
    
    // Update UI immediately
    updateUI(newState);
    
    // Save settings
    await saveSettings(newState);
  });

  // Initialize
  await loadSettings();
});

// Message listener (receive messages from content script)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getSettings') {
    chrome.storage.sync.get(['noshorts_enabled']).then(result => {
      sendResponse({ enabled: result.noshorts_enabled !== false });
    });
    return true; // Indicates asynchronous response
  }
}); 