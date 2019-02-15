AFRAME.registerComponent("scene-deleter", {
  schema: {
    tgt: { type: "string", default: "welcome" }
  },

  init: function() {
    var data = this.data;
    var el = this.el;
    console.log(this.data);
    this.clickHandler = function() {
      var tgt = "scene-" + data.tgt;
      var tgtScene = document.getElementById(tgt);
      
      tgtScene.parentNode.removeChild(tgtScene)

      el.removeEventListener("click", this.clickHandler);
      console.log("removing", tgt);
    };
    el.addEventListener("click", this.clickHandler);
  }
});