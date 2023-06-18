import mountApp from "./bootstrap";

mountApp({
  standalone: true,
  mountPoint: document.getElementById("_dashboardApp_root"),
  initialPathname: "/",
  routingStrategy: "browser",
});
