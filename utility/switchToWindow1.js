module.exports =  class switchToWindow1 {
    async command() {
    // wait until window handle for the new window is available
    await browser.waitUntil(async function () {
        const windowHandles = await browser.window.getAllHandles();

        return windowHandles.length === 2;
    });

    const originalWindow = await browser.window.getHandle();
    const allWindows = await browser.window.getAllHandles();

    // loop through available windows to find the new window handle
    for (const windowHandle of allWindows) {
        if (windowHandle !== originalWindow) {
            await browser.window.switchTo(windowHandle);
            break;
        }
    }
}};