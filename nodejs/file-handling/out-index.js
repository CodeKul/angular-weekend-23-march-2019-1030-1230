"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileHandling = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FileHandling =
/*#__PURE__*/
function () {
  function FileHandling() {
    _classCallCheck(this, FileHandling);
  }

  _createClass(FileHandling, [{
    key: "renameFile",
    value: function renameFile() {
      _fs["default"].rename('./my.txt', './our.txt', function (err) {
        if (err) {
          console.error(err);
        } else console.log("Operation completed successfully");
      });

      console.log("Async Opertaion in progress");
    }
  }, {
    key: "renameFileSync",
    value: function renameFileSync() {
      try {
        console.log("Sync Opertaion in progress");

        _fs["default"].renameSync("./our.txt", "./my.txt");

        console.log("Operation completed successfully");
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: "writeFile",
    value: function writeFile(data) {
      _fs["default"].writeFile('./write.txt', data, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("File Written Successfully");
        }
      });
    }
  }]);

  return FileHandling;
}();

exports.FileHandling = FileHandling;
var fh = new FileHandling();
fh.renameFile();
fh.renameFileSync();
fh.writeFile("I want to write the file");
