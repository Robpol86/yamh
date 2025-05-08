import { describe, expect, test } from "vitest";
import { getHostname, isWebsiteSupported } from "../lib";

describe("getHostname", () => {
    test("returns the hostname part of the URL", () => {
        expect(getHostname("https://google.com")).toEqual("google.com");
    });
});

describe("isWebsiteSupported", () => {
    test("supported https website", () => {
        expect(isWebsiteSupported("https://google.com")).toBe(true);
    });
    test("supported http website", () => {
        expect(isWebsiteSupported("http://lycos.com")).toBe(true);
    });
    test("unsupported website", () => {
        expect(isWebsiteSupported("chrome://extensions")).toBe(false);
    });
});
