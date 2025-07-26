# Privacy Policy for NoShorts - Hide YouTube Shorts Extension

**Effective Date:** December 2024

## Overview

NoShorts - Hide YouTube Shorts Extension ("we", "our", or "the extension") is committed to protecting your privacy. This Privacy Policy explains how our Chrome extension handles information when you use our service.

## Information We Collect

### Data Collection
- **No Personal Data**: We do not collect, store, or transmit any personal information about our users.
- **No Analytics**: We do not use any analytics services or tracking mechanisms.
- **No User Accounts**: Our extension does not require user registration or account creation.

### Local Storage
- **Extension Settings**: We store your extension preferences (enabled/disabled state) locally in your browser using Chrome's storage API.
- **Local Only**: These settings are stored locally on your device and are not transmitted to any external servers.

## How We Use Information

### Settings Storage
- Extension preferences are stored locally to remember your settings between browser sessions
- These settings control whether YouTube Shorts are hidden or visible
- Settings sync across your Chrome browsers if you have Chrome sync enabled (this is controlled by Google, not us)

### No External Communication
- Our extension does not communicate with any external servers
- No data is sent to third parties
- No network requests are made by our extension

## Data Sharing

We do not share any data with third parties because we do not collect any data to share.

## Data Security

- All extension settings are stored locally using Chrome's secure storage APIs
- No data transmission means no risk of data interception
- Your privacy is protected by design

## Third-Party Services

Our extension:
- Does not use any third-party analytics services
- Does not integrate with social media platforms
- Does not use advertising networks
- Only interacts with YouTube pages to hide Shorts elements locally

## Children's Privacy

Our extension does not collect any information from anyone, including children under 13. The extension is safe for users of all ages.

## Changes to Privacy Policy

We may update this Privacy Policy from time to time. Any changes will be posted with a new effective date. Your continued use of the extension after any changes indicates your acceptance of the new Privacy Policy.

## Permissions Explanation

Our extension requests the following permissions for specific functionality:

### activeTab Permission
**Purpose**: To interact with the currently active YouTube tab to hide Shorts elements.
**Justification**: This permission allows our extension to:
- Detect when you're on a YouTube page
- Apply Shorts-hiding CSS rules to the page
- Toggle functionality on/off without requiring page reload
- Only access the tab when you explicitly interact with our extension
**Data Handling**: No data is collected, stored, or transmitted. We only modify the visual display of YouTube pages locally.

### storage Permission  
**Purpose**: To save your extension preferences (enabled/disabled state) locally in your browser.
**Justification**: This permission allows our extension to:
- Remember your Shorts hiding preference between browser sessions
- Sync settings across your Chrome browsers (if Chrome sync is enabled)
- Provide a seamless user experience without requiring reconfiguration
**Data Handling**: Only a single boolean value (true/false) indicating if Shorts hiding is enabled. This data never leaves your device.

### Host Permission for youtube.com
**Purpose**: To function specifically on YouTube website pages.
**Justification**: This permission allows our extension to:
- Detect YouTube Shorts elements on YouTube pages
- Apply hiding functionality to Shorts content
- Redirect Shorts URLs to regular video format
- Monitor DOM changes for dynamically loaded Shorts content
**Data Handling**: No data is extracted from YouTube pages. We only modify the visual presentation locally.

### No Remote Code
**Clarification**: Our extension does not load, execute, or use any remote code. All functionality is contained within the extension package and executes locally in your browser.

## Single Purpose Statement

This extension serves a single, clearly defined purpose: **Hide YouTube Shorts content to help users focus on regular YouTube videos**. All features and permissions directly support this core functionality:

- Hiding Shorts shelves and thumbnails
- Converting Shorts to regular video format
- Removing Shorts navigation elements
- Providing user control via toggle interface

## Contact Information

If you have any questions about this Privacy Policy or the extension, please contact us through:
- GitHub Issues: https://github.com/AraiRyusei/NOSHORTS/issues
- Email: takanari.gun@gmail.com

## Compliance

This extension complies with:
- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Google's Limited Use Policy

By using NoShorts extension, you acknowledge that you have read and understood this Privacy Policy. 