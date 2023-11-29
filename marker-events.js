const sceneEl = document.querySelector('scene');

sceneEl.addEventListener("markerFound", (e) => {
    isMarkerVisible = true;
});

sceneEl.addEventListener("markerLost", (e) => {
    isMarkerVisible = false;
});