/**
 * Shared functions, variables, objects, etc.
 */

/**
 * Extracts the hostname from the tab url.
 *
 * @param tab - Tab object returned by chrome.tabs.query.
 * @returns - The hostname of the first tab's URL.
 */
export function getHostname(tab: Browser.tabs.Tab): string {
    if (!tab.url) throw new Error("Tab has no URL");
    const url = new URL(tab.url);
    return url.hostname;
}

/**
 * Checks if the website is supported by the extension.
 *
 * @param tab - Browser Tab object.
 * @returns - True if the website is supported by the extension.
 */
export function isWebsiteSupported(tab: Browser.tabs.Tab): boolean {
    if (!tab.url) throw new Error("Tab has no URL");
    const url = new URL(tab.url);
    if (url.protocol === "https:") return true;
    if (url.protocol === "http:") return true;
    return false;
}
