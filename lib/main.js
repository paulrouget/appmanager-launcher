const {Cu} = require("chrome");
Cu.import("resource:///modules/devtools/gDevTools.jsm");
Cu.import("resource://gre/modules/Services.jsm");

var ui = require("sdk/ui");
var action_button = ui.ActionButton({
  id: "app-manager-icon",
  label: "App Manager",
  icon: "./icon.png",
  onClick: function() {
    gDevToolsBrowser.openWebIDE();
  }
});
