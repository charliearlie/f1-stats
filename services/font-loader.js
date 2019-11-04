const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const titillium = new FontFaceObserver("Titillium");

  titillium.load().then(() => {
    document.documentElement.classList.add("titillium");
  });
};

export default Fonts;
