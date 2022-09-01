import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.4";

import lgZoom from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.4/plugins/zoom";

import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.4/plugins/thumbnail";

const $lgContainer = document.getElementById("gallery-container");

const lg = lightGallery($lgContainer, {
    speed: 500,
    container: $lgContainer,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    plugins: [lgZoom, lgThumbnail]
});
lg.openGallery(0);