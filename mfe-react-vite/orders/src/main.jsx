import mountApp from "./bootstrap";

mountApp({
  standalone: true,
  mountPoint: document.getElementById("_orderApp_root"),
  initialPathname: "/",
  routingStrategy: "browser",
  user: null,
});
