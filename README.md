# Redirect to App Store - Next.js

This Next.js application provides a simple function for redirecting users to the appropriate app store or a generic landing page based on their device's operating system. It is customized for the "MST Supply" app.

## Usage

To use the `redirectToAppStore` function in your Next.js project for "MST Supply," follow these steps:

1. Copy the `redirectToAppStore` function into your project.

2. Import the function where you need it in your code:

   ```javascript
   import { redirectToAppStore } from './path/to/redirectToAppStore';
   ```

3. Call the function when you want to redirect users:

   ```javascript
   useEffect(() => {
     redirectToAppStore();
   }, []);
   ```

## Function Details

The `redirectToAppStore` function detects the user's device operating system using the `navigator.userAgent` property. It then redirects the user to one of the following destinations:

- If the device is running Android, it redirects to the Google Play Store for "MST Supply."
- If the device is running iOS (iPad, iPhone, or iPod), it redirects to the Apple App Store for "MST Supply."
- For all other devices, it redirects to the [MST Supply website](https://agrosupplytrade.mn/).

Please note that this code is specifically configured for the "MST Supply" app. Make sure to replace the placeholders with the correct app store URLs.

## License

This project is licensed under the [MIT License](LICENSE).

---
