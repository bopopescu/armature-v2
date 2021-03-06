"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ByLine - Optimize for Articles Page on mobile
var react_1 = __importDefault(require("react"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        // Optimize for insta screenshot
        root: (_a = { fontWeight: 100 }, _a[theme.breakpoints.only('xs')] = { fontSize: theme.typography.pxToRem(13) }, _a),
    });
});
//
var ByLine = function (props) {
    var classes = useStyles();
    return (react_1.default.createElement(Typography_1.default, __assign({ component: "p", variant: "body1", gutterBottom: true, color: "inherit" }, props, { className: classes.root })));
};
exports.default = react_1.default.memo(ByLine);
