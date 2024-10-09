# Overview

System Utilities for Compulty Inc.

This extension detects Minecraft activity based on statistical analysis of your keyboard usage. It works by recognizing common patterns of keystrokes associated with the game, such as WASD, arrow keys, and spacebar. If it detects these patterns, it will take action, such as reloading the webpage to stop any game activities. This extension works on all websites.

Note: No data is captured or sent anywhere outside of your browser.

## justify why need to apply this to all websites
- This extension needs to be applied to all websites to effectively prevent Minecraft activity, as the game can be played on any web page.
## justify when this extension need to run on active tab
- This extension needs to run on the active tab to accurately detect Minecraft activity, as the game is typically played in the foreground window.
## justify when this extension need to run a script
- This extension needs to run a script when the user is actively typing on a webpage to detect Minecraft-related keystroke patterns.

# How to self-host the extension (edge only)
- https://learn.microsoft.com/en-us/deployedge/microsoft-edge-manage-extensions-webstore#distribute-a-privately-hosted-extension
- package the CRX: Use edge + developer mode and the same PEM file to ensure the extension's ID remains consistent.
- release a Version: Upload both the CRX file and the associated XML manifest.