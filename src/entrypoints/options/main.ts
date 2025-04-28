import "./app.css";
import App from "./App.svelte";
import { mount } from "svelte";

const app = document.getElementById("app");

if (!app) throw new Error("Missing element with ID 'app'");

const svApp = mount(App, {
    target: app,
});

export default svApp;
