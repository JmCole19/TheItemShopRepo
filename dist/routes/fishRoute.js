"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _fishData = _interopRequireDefault(require("../../theitemshopfrontend/src/components/fishData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

router.get("/:id", async (req, res) => {
  const fish = await _fishData.default.findOne({
    _id: req.params.id
  });

  if (fish) {
    res.send(fish);
  } else {
    res.status(404).send({
      message: "Fish not found"
    });
  }
});
var _default = router;
exports.default = _default;