// exports.onPreRouteUpdate = () => {
//   document.querySelector("body").classList.add("fade");
// };

exports.onRouteUpdate = () => {
  setTimeout(() => {
    document.querySelector("body").classList.remove("loading");
    document.querySelector("body").classList.add("loaded");
    document.querySelector("html").classList.remove("loading");
  }, 250);
};