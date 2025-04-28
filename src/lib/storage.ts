/**
 * TODO
 */

// TODO enabled websites.
type EnabledWebsitesV1 = string;
export const enabledWebsites = storage.defineItem<EnabledWebsitesV1[]>("sync:enabledWebsites", {
    fallback: [],
    version: 1,
});
