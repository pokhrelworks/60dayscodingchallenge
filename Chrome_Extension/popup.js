const btn = document.querySelector(".button-71");

btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },

    function: pickColor,
  });
});

async function pickColor() {
  try {
    const eyeDropper = new EyeDropper();
    const selectedColor = await eyeDropper.open();
    console.log("Selected color:", selectedColor);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Color picking was canceled by the user.");
    } else {
      console.error("An error occurred:", err);
    }
  }
}
