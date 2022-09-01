import lightGallery from "https://cdn.skypack.dev/lightgallery@2.4.0";

import lgZoom from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/zoom";
import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.4.0/plugins/thumbnail";

console.log("here");

const $lgContainer = document.getElementById("inline-gallery-container");

console.log("here");

const inlineGallery = lightGallery($lgContainer, {
    container: $lgContainer,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: false,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: ".lg-item",
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 400,
    plugins: [lgZoom, lgThumbnail],
    licenseKey: "330606F9-008A4857-9C672CF4-0A9A0DE0",
    dynamicEl: [{
            src: "../assets/canyon.jpg",
            responsive: "../assets/canyon.jpg 480, ../assets/canyon.jpg 800",
            thumb: "../assets/canyon.jpg",
            subHtml: `<div class="lightGallery-captions">
                    <h4>Canyon</h4>
                    <p>Palouse Falls, WA</p>
                </div>`
        },
        {
            src: "../assets/astro1.jpg",
            responsive: "../assets/astro1.jpg 480, ../assets/astro1.jpg 800",
            thumb: "../assets/astro1.jpg",
            subHtml: `<div class="lightGallery-captions">
                    <h4>Starry Night</h4>
                    <p>Fishtrap,WA</p>
                </div>`
        },
        {
            src: "../assets/sunflower.jpg",
            responsive: "../assets/sunflower.jpg 480, ../assets/sunflower.jpg 800",
            thumb: "../assets/sunflower.jpg",
            subHtml: `<div class="lightGallery-captions">
                    <h4>Sunflower</h4>
                    <p>Palouse Falls,WA</p>
                </div>`
        },
        {
            src: "../assets/gopher.jpg",
            responsive: "../assets/gopher.jpg 480, ../assets/gopher.jpg 800",
            thumb: "../assets/gopher.jpg",
            subHtml: `<div class="lightGallery-captions">
                    <h4>Gophers</h4>
                    <p>Palouse Falls,WA</p>
                </div>`
        }

    ],


});

setTimeout(() => {
    inlineGallery.openGallery();
}, 200);

console.log("success")