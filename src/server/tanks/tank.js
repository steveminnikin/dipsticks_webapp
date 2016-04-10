var Tank = (function () {
    function Tank() {
    }
    Tank.prototype.getSWC = function (fullVolume) {
        this.swc = Math.round(fullVolume * 0.97);
    };
    return Tank;
})();
exports.Tank = Tank;
//# sourceMappingURL=tank.js.map