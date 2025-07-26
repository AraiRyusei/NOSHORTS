# NoShorts - Hide YouTube Shorts Extension

A Google Chrome extension that hides YouTube Shorts to help you focus on regular videos.

## Features

- ✅ Hide Shorts shelf on homepage
- ✅ Convert Shorts videos to regular YouTube videos automatically
- ✅ Hide Shorts tab on channel pages
- ✅ Hide Shorts links in sidebar
- ✅ Hide Shorts menu in navigation
- ✅ Redirect from Shorts page to regular video page
- ✅ One-click toggle on/off functionality

## Installation

### Developer Mode (Manual Installation)

1. **Download Files**
   - Download all files from this repository

2. **Generate Icon Files (if needed)**
   ```bash
   # Open create_icons.html in browser and download PNG icons
   # Place generated icon16.png, icon32.png, icon48.png, icon128.png
   # in the icons folder
   ```

3. **Open Chrome Extensions Management**
   - Go to `chrome://extensions/` in Chrome
   - Enable "Developer mode" in the top right

4. **Load Extension**
   - Click "Load unpacked"
   - Select this project folder

5. **Installation Complete**
   - NoShorts will appear in your extensions list
   - Icon will be added to the toolbar

## Usage

### Basic Operation

1. **Enable Extension**
   - Click the NoShorts icon in the toolbar
   - Popup will open

2. **Toggle On/Off**
   - Click the toggle switch to enable/disable
   - Changes are applied immediately

3. **Verify on YouTube**
   - Reload YouTube page or open new tab
   - Verify that Shorts are hidden

### Supported Pages

- ✅ YouTube homepage
- ✅ Search results page
- ✅ Channel pages
- ✅ Shorts pages (redirected to regular videos)
- ✅ Sidebar and menus

## File Structure

```
noshorts/
├── manifest.json         # Extension configuration file
├── content.js           # YouTube Shorts hiding logic
├── background.js        # Background processing
├── popup.html          # Popup interface
├── popup.js            # Popup behavior control
├── create_icons.html   # Icon generation tool
├── icons/
│   ├── icon.svg        # Base icon (SVG)
│   ├── icon16.png      # 16x16 icon
│   ├── icon32.png      # 32x32 icon
│   ├── icon48.png      # 48x48 icon
│   └── icon128.png     # 128x128 icon
└── README.md           # This file
```

## Technical Specifications

- **Manifest Version**: 3
- **Target Browser**: Google Chrome, Chromium-based browsers
- **Permissions**: storage, activeTab, youtube.com
- **Languages**: JavaScript (ES6+), HTML5, CSS3

## Customization

### Changing Icons

1. Edit `icons/icon.svg`
2. Open `create_icons.html` in browser
3. Click "Download All" to generate PNG files
4. Place generated files in `icons/` folder

### Adding Features

You can add new selectors to the `hideShortsElements()` method in `content.js`:

```javascript
// Example of hiding new elements
const newElements = document.querySelectorAll('your-selector-here');
newElements.forEach(element => {
  element.style.display = 'none';
});
```

## Troubleshooting

### Shorts Still Appear

1. Check if extension is enabled
2. Reload YouTube page
3. Reload extension in Chrome extensions management

### Popup Won't Open

1. Check if extension icon is visible
2. Right-click icon → "Manage extension" for details
3. Restart browser

### Settings Not Saved

1. Check if Chrome sync is enabled
2. Verify browser storage is not restricted

## Known Limitations

- Some Shorts elements may not be detected due to YouTube specification changes
- Dynamically added elements may be hidden with slight delay
- Mobile YouTube is not supported

## Version History

### v1.0.0 (2024)
- Initial release
- YouTube Shorts hiding functionality implemented
- Popup UI implemented
- Toggle on/off functionality implemented

## License

MIT License - Free to use, modify, and distribute.

## Contributing

Please report bugs or feature requests through GitHub Issues.

---

**Note**: This extension is not an official YouTube product. It is a tool for temporarily hiding YouTube Shorts. 