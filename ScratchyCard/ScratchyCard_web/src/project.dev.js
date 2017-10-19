require = function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) {
                    return a(o, !0);
                }
                if (i) {
                    return i(o, !0);
                }
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n || e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = "function" == typeof require && require;
    for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }
    return s;
}({
    ScratchyHd: [ function(require, module, exports) {
        "use strict";
        cc._RF.push(module, "2ab94dSq0ZNaKUPPoWw5zJ3", "ScratchyHd");
        "use strict";
        cc.Class({
            extends: cc.Component,
            properties: {
                rsultLabel: cc.Label,
                mask: cc.Mask,
                promptLabel: cc.Label
            },
            onLoad: function onLoad() {
                this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
                this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
            },
            onDestroy: function onDestroy() {
                this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
                this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
                this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
                this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
            },
            start: function start() {},
            _onTouchBegin: function _onTouchBegin(event) {
                cc.log("touchBegin");
                var point = event.touch.getLocation();
                point = this.node.convertToNodeSpaceAR(point);
                this._addCircle(point);
            },
            _onTouchMoved: function _onTouchMoved(event) {
                var point = event.touch.getLocation();
                point = this.node.convertToNodeSpaceAR(point);
                this._addCircle(point);
            },
            _onTouchEnd: function _onTouchEnd(event) {
                var point = event.touch.getLocation();
                point = this.node.convertToNodeSpaceAR(point);
                this._addCircle(point);
            },
            _onTouchCancel: function _onTouchCancel(event) {},
            _addCircle: function _addCircle(point) {
                var stencil = this.mask._clippingStencil;
                var color = cc.color(255, 255, 255, 0);
                stencil.drawPoly(this.mask._calculateCircle(point, cc.p(50, 50), 40), color, 0, color);
                cc.renderer.childrenOrderDirty = true;
            }
        });
        cc._RF.pop();
    }, {} ]
}, {}, [ "ScratchyHd" ]);