# Debugscript-MTA-SA

JavaScript Debugging Utility is a web-based tool that allows developers to display, filter, search, and save debug messages generated during script execution. The utility provides a user-friendly interface to toggle debugging, filter messages by type, clear the output, save logs, and search for specific debug messages.

# Usage:

1. Include the provided main.js script in your HTML file, where you want to use the debugging utility.
2. Create a ```<div>``` element with the ID "debug-output" to display the debug messages.
3. Use the following functions to interact with the debugging utility:
   * ```toggleDebugging():``` This function toggles the debugging feature on or off, which controls whether debug messages are displayed based on the selected filters.
   * ```updateDebugOutput():``` This function updates the displayed debug messages based on the selected filters and the debuggingEnabled variable.
   * ```clearDebugMessages():``` This function clears the debug messages displayed in the output area.
   * ```saveDebugLog():``` This function allows users to save the debug log as a text file.
   * ```searchDebugMessages():``` This function searches for debug messages containing a specific text provided in the search input field.

# HTML Structure:
* A ```<div>``` element with ID "debug-output" to display the debug messages.
* A "Toggle Debugging" button to enable or disable the debugging feature.
* Three checkboxes with the name "debug-filter" and values "error," "warning," and "info" to filter debug messages by type (all checkboxes are checked by default).
* A "Clear" button to clear the debug messages from the output area.
* An anchor (```<a>```) element with the ID "download-link" to provide a link for downloading the debug log as a text file.
* An ```<input>``` element with ID "search-input" to enter text for searching specific debug messages.
* An inline JavaScript code that interacts with the debugging utility.

# Additional Notes:
* Make sure you have a web server set up to serve the HTML file and the JavaScript code correctly.
* Ensure that the JavaScript file main.js is properly linked in the HTML file using the <script> tag.









