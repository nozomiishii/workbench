"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n      <div>\n        <h1>Analysis Output</h1>\n        <div>" + report + "</div>\n      </div>\n    ";
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
