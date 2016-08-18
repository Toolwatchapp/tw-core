"use strict";
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = (function () {
    function OverlayRef(_portalHost, _pane, _state) {
        this._portalHost = _portalHost;
        this._pane = _pane;
        this._state = _state;
    }
    OverlayRef.prototype.attach = function (portal) {
        var _this = this;
        var attachPromise = this._portalHost.attach(portal);
        // Don't chain the .then() call in the return because we want the result of portalHost.attach
        // to be returned from this method.
        attachPromise.then(function () {
            _this.updatePosition();
        });
        return attachPromise;
    };
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    OverlayRef.prototype.dispose = function () {
        this._portalHost.dispose();
    };
    OverlayRef.prototype.hasAttached = function () {
        return this._portalHost.hasAttached();
    };
    /** Gets the current state config of the overlay. */
    OverlayRef.prototype.getState = function () {
        return this._state;
    };
    /** Updates the position of the overlay based on the position strategy. */
    OverlayRef.prototype.updatePosition = function () {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.apply(this._pane);
        }
    };
    return OverlayRef;
}());
exports.OverlayRef = OverlayRef;
//# sourceMappingURL=overlay-ref.js.map