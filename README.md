# Expo Linking.addEventListener Callback Not Firing

This repository demonstrates a bug where the `Linking.addEventListener` function in Expo fails to trigger its callback function when a deep link is opened. The issue is inconsistent, appearing on some devices and not others. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on a physical device or emulator.
4. Try opening a deep link (e.g., from a web browser). The callback in `bug.js` should fire, but it may not.

## Potential Causes

* **App Lifecycle:** The issue might relate to how the event listener is managed during the app's different states (background, foreground, etc.).
* **Expo Version:** Different versions of Expo might exhibit the bug differently.
* **Device Variations:** The bug may manifest differently on various devices.

## Solution (See bugSolution.js)
The solution involves carefully managing the event listener and ensuring that it's correctly registered and removed, considering app lifecycle changes.  This may involve using `useEffect` hooks in React.