<script lang="ts">
    import { i18n } from "#i18n";

    let count = $state(0);
    const increment = () => {
        count += 1;
    };
</script>

<button onclick={increment}>
    {i18n.t("countIs", [count])}
</button>
