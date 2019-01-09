const userButton = {
    // Don't use an integer for the rune object keys, it won't work.
    ulf: {
      draw: document
        .getElementById("ulf-button-draw")
        .addEventListener("click", function() {
          drawCard("Ulf");
        }),
      bet: document
        .getElementById("ulf-button-bet")
        .addEventListener("click", function() {
          console.log("Ulf bet clicked!");
        }),
      decline: document
        .getElementById("ulf-button-decline")
        .addEventListener("click", function() {
          console.log("Ulf decline clicked!");
        }),
      rune: {
        r2: document
          .getElementById("ulf-rune2")
          .addEventListener("click", function() {
            placeRune(2, "ulf");
          }),
        r5: document
          .getElementById("ulf-rune5")
          .addEventListener("click", function() {
            placeRune(5, "ulf");
          }),
        r6: document
          .getElementById("ulf-rune6")
          .addEventListener("click", function() {
            placeRune(6, "ulf");
          }),
        r9: document
          .getElementById("ulf-rune9")
          .addEventListener("click", function() {
            placeRune(9, "ulf");
          })
      }
    },
    sigrid: {
      draw: document
        .getElementById("sigrid-button-draw")
        .addEventListener("click", function() {
          drawCard("Sigrid");
        }),
      bet: document
        .getElementById("sigrid-button-bet")
        .addEventListener("click", function() {
          console.log("Sigrid bet clicked!");
        }),
      decline: document
        .getElementById("sigrid-button-decline")
        .addEventListener("click", function() {
          console.log("Sigrid decline clicked!");
        }),
      rune: {
        r3: document
          .getElementById("sigrid-rune3")
          .addEventListener("click", function() {
            placeRune(3, "sigrid");
          }),
        r4: document
          .getElementById("sigrid-rune4")
          .addEventListener("click", function() {
            placeRune(4, "sigrid");
          }),
        r7: document
          .getElementById("sigrid-rune7")
          .addEventListener("click", function() {
            placeRune(7, "sigrid");
          }),
        // r7: "You correctly linked to r7!",
        r8: document
          .getElementById("sigrid-rune8")
          .addEventListener("click", function() {
            placeRune(8, "sigrid");
          })
      }
    }
  };

module.exports = userButton