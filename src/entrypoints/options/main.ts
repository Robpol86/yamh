import "./app.css";
import App from "./App.svelte";
import { mount } from "svelte";

const app = mount(App, {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    target: document.getElementById("app")!,
});

export default app;
