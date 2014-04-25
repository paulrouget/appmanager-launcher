const {Cc, Ci, Cu, Cr} = require("chrome");
Cu.import("resource:///modules/devtools/gDevTools.jsm");

var ui = require("sdk/ui");
var action_button = ui.ActionButton({
  id: "app-manager-icon",
  label: "App Manager",
  icon: "./icon.png",
  onClick: function() {
    gDevToolsBrowser.openAppManager(null)
  }
});
