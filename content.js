// YouTube Shorts hiding extension
class NoShorts {
  constructor() {
    this.isEnabled = true;
    this.observer = null;
    this.init();
  }

  async init() {
    // Load settings from storage
    const result = await chrome.storage.sync.get(['noshorts_enabled']);
    this.isEnabled = result.noshorts_enabled !== false; // Default is true

    // Initial execution
    this.hideShortsElements();

    // Monitor DOM changes
    this.startObserver();

    // Monitor storage changes
    chrome.storage.onChanged.addListener((changes) => {
      if (changes.noshorts_enabled) {
        this.isEnabled = changes.noshorts_enabled.newValue;
        if (this.isEnabled) {
          this.hideShortsElements();
        } else {
          this.showShortsElements();
        }
      }
    });
  }

  startObserver() {
    this.observer = new MutationObserver((mutations) => {
      if (this.isEnabled) {
        this.hideShortsElements();
      }
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false
    });
  }

  hideShortsElements() {
    // Hide Shorts shelf (homepage)
    const shortsShelf = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');
    shortsShelf.forEach(element => {
      element.style.display = 'none';
    });

    // Hide Shorts sections (homepage)
    const shortsSections = document.querySelectorAll('ytd-reel-shelf-renderer');
    shortsSections.forEach(element => {
      element.style.display = 'none';
    });

    // Hide Shorts video thumbnails
    const shortsVideos = document.querySelectorAll('ytd-video-renderer[is-shorts]');
    shortsVideos.forEach(element => {
      element.style.display = 'none';
    });

    // Hide Shorts tab (individual channel pages) - support both English and Japanese
    const shortsTab = document.querySelectorAll('yt-tab-shape[tab-title="ショート動画"], yt-tab-shape[tab-title="Shorts"], yt-tab-shape[tab-title="短片"]');
    shortsTab.forEach(element => {
      element.style.display = 'none';
    });

    // Hide Shorts links (sidebar etc.)
    const shortsLinks = document.querySelectorAll('a[href*="/shorts/"]');
    shortsLinks.forEach(element => {
      const videoElement = element.closest('ytd-video-renderer, ytd-compact-video-renderer, ytd-grid-video-renderer');
      if (videoElement) {
        videoElement.style.display = 'none';
      }
    });

    // Hide videos with Shorts badge
    const shortsBadge = document.querySelectorAll('span[class*="shorts"], .ytd-thumbnail-overlay-time-status-renderer[aria-label*="ショート"], .ytd-thumbnail-overlay-time-status-renderer[aria-label*="Short"]');
    shortsBadge.forEach(element => {
      const videoElement = element.closest('ytd-video-renderer, ytd-compact-video-renderer, ytd-grid-video-renderer, ytd-rich-item-renderer');
      if (videoElement) {
        videoElement.style.display = 'none';
      }
    });

    // Redirect Shorts page itself
    if (window.location.pathname.includes('/shorts/')) {
      const videoId = window.location.pathname.split('/shorts/')[1];
      window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
    }

    // Hide mobile Shorts player
    const shortsPlayer = document.querySelectorAll('ytd-shorts, ytm-shorts-lockup-view-model');
    shortsPlayer.forEach(element => {
      element.style.display = 'none';
    });

    // Hide Shorts navigation link - support multiple languages
    const shortsNavLink = document.querySelectorAll('a[title="ショート"], a[title="Shorts"], a[title="短片"], a[title="短视频"]');
    shortsNavLink.forEach(element => {
      element.style.display = 'none';
    });
  }

  showShortsElements() {
    // Show previously hidden elements
    const hiddenElements = document.querySelectorAll('[style*="display: none"]');
    hiddenElements.forEach(element => {
      // Only target YouTube Shorts related elements
      if (this.isShortsElement(element)) {
        element.style.display = '';
      }
    });
  }

  isShortsElement(element) {
    // Determine if element is Shorts related
    const shortsSelectors = [
      'ytd-rich-shelf-renderer[is-shorts]',
      'ytd-reel-shelf-renderer',
      'ytd-video-renderer[is-shorts]',
      'yt-tab-shape[tab-title="ショート動画"]',
      'yt-tab-shape[tab-title="Shorts"]',
      'ytd-shorts',
      'ytm-shorts-lockup-view-model'
    ];

    return shortsSelectors.some(selector => {
      return element.matches(selector) || element.querySelector(selector);
    });
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Initialize extension
let noShorts;

function initNoShorts() {
  if (!noShorts) {
    noShorts = new NoShorts();
  }
}

// Initialize when page loading is complete
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNoShorts);
} else {
  initNoShorts();
}

// Handle SPA navigation
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    setTimeout(() => {
      if (noShorts && noShorts.isEnabled) {
        noShorts.hideShortsElements();
      }
    }, 1000);
  }
}).observe(document, { subtree: true, childList: true }); 