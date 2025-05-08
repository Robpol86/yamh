/**
 * Shared functions, variables, objects, etc.
 */

/**
 * Extracts the hostname from the url.
 *
 * @param url - URL to parse.
 * @returns - The hostname portion of the URL.
 */
export function getHostname(url: string): string {
    return new URL(url).hostname;
}

/**
 * Checks if the website is supported by the extension.
 *
 * @param url - URL to check.
 * @returns - True if the website is supported by the extension.
 */
export function isWebsiteSupported(url: string): boolean {
    const protocol = new URL(url).protocol;
    if (protocol === "https:") return true;
    if (protocol === "http:") return true;
    return false;
}
