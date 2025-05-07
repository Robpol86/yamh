/**
 * WXT storage items for the extension.
 */

/**
 * Store a list of user-whitelisted websites.
 */
type EnabledWebsitesV1 = string;
export const enabledWebsites = storage.defineItem<EnabledWebsitesV1[]>("sync:enabledWebsites", {
    fallback: [],
    version: 1,
});
