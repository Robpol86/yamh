<script lang="ts">
    import { getHostname, isWebsiteSupported } from "./lib";
    import { enabledWebsites } from "@/lib/storage";
    import { i18n } from "#i18n";
    import { onMount } from "svelte";

    let initialized = $state(false);
    let websiteSupported = $state(false);
    let website = $state("");
    let disabled = $derived(!(initialized && websiteSupported));
    let checked = $state(false); // TODO

    onMount(async () => {
        // Enable on supported websites
        const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
        if (!isWebsiteSupported(tab)) {
            initialized = true;
            return;
        }
        websiteSupported = true;
        website = getHostname(tab);

        // Hook up state to browser storage.
        enabledWebsites.watch((newValue) => (checked = newValue.includes(website)));
        const websiteList = await enabledWebsites.getValue();
        checked = websiteList.includes(website);

        initialized = true;
    });

    async function onchange(event: Event) {
        if (!website) return;
        const checkbox = event.target as HTMLInputElement;
        let websiteList = await enabledWebsites.getValue();

        if (checkbox.checked) websiteList.push(website);
        else websiteList = websiteList.filter((item) => item !== website);

        await enabledWebsites.setValue(websiteList);
    }
</script>

<label>
    <input type="checkbox" role="switch" {disabled} bind:checked {onchange} />
    {#if initialized && websiteSupported}
        {i18n.t("enableHighlightingOn", [website])}
    {:else if initialized}
        {i18n.t("websiteNotSupported")}
    {:else}
        {i18n.t("initializing")}
    {/if}
</label>
