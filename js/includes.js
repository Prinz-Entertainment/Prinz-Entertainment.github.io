async function loadPartials() {
    const slots = document.querySelectorAll("[data-partial]");

    await Promise.all(
        [...slots].map(async (slot) => {
            const url = slot.dataset.partial;
            if (!url) return;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load partial: ${url}`);
            }

            slot.outerHTML = await response.text();
        })
    );

    document.dispatchEvent(new Event("partials:loaded"));
}

loadPartials().catch((error) => {
    console.error(error);
});
