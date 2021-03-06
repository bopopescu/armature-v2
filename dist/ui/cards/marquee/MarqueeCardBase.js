"use strict";
// Base Marquee Card
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
var react_1 = __importDefault(require("react"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var typography_1 = require("../../../typography");
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        root: {
            position: 'relative',
            '&:hover': {
                '& a': {
                    textDecoration: 'none',
                },
                '& .image': {
                    transform: 'scale(1.1)',
                },
                '& .primaryTitle': {
                    color: theme.palette.primary.main,
                },
            },
        },
        imageWrapper: {
            overflow: 'hidden',
        },
        image: (_a = {
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: 0,
                display: 'block',
                padding: '52.42% 0 0 0',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#eeeeee',
                transition: '0.6s ease'
            },
            _a[theme.breakpoints.only('xs')] = {
                padding: '80% 0 0 0',
            },
            _a[theme.breakpoints.only('md')] = {
                padding: '60% 0 0 0',
            },
            _a),
        imageLink: {
            display: 'block',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            color: 'transparent',
        },
        contentContainer: {
            // An anchor tag potentially
            width: '100%',
            color: 'inherit',
            textDecoration: 'inherit',
            position: 'absolute',
            bottom: 0,
            height: '100%',
        },
        contentContainerContent: (_b = {
                bottom: 0,
                width: '100%'
            },
            _b[theme.breakpoints.only('xs')] = {
                // Phones in portrait
                padding: 16,
            },
            _b.position = 'absolute',
            _b.color = theme.palette.common.white,
            _b.padding = '32px',
            _b.background = 'linear-gradient(transparent, black)',
            _b),
        primaryTitle: __assign(__assign({}, theme.typography.h1), (_c = { fontFamily: theme.fontFamily.accent, marginTop: '0.35em', fontSize: theme.typography.pxToRem(30), lineHeight: theme.typography.pxToRem(32), letterSpacing: '-0.00833em', fontWeight: 400, marginBottom: 0 }, _c[theme.breakpoints.only('xs')] = {
            // Phones in portrait
            marginTop: '0',
            fontSize: theme.typography.pxToRem(24),
            lineHeight: theme.typography.pxToRem(26),
            fontWeight: 400,
            marginBottom: 0,
            color: '#fafafa',
        }, _c[theme.breakpoints.only('sm')] = {
            // Ipad in portrait and phones in landscape
            fontSize: theme.typography.pxToRem(28),
            lineHeight: theme.typography.pxToRem(30),
            marginTop: 0,
            fontWeight: 400,
            marginBottom: 0,
            color: '#fafafa',
        }, _c)),
        byline: (_d = {
                display: 'inline-block',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1000,
                backgroundColor: '#fafafa',
                fontWeight: 100,
                fontSize: theme.typography.pxToRem(14),
                padding: '8px 16px 8px 8px'
            },
            _d[theme.breakpoints.only('xs')] = {
                // Phones in portrait
                fontSize: theme.typography.pxToRem(12),
                padding: '4px 8px 4px 0px',
            },
            _d),
        byLineIcon: {
            fontSize: 'inherit',
            marginLeft: '2px',
            marginRight: '8px',
            height: 'inherit',
        },
        overline: (_e = {
                paddingTop: 8,
                fontWeight: 100,
                color: theme.palette.common.white,
                fontSize: theme.typography.pxToRem(12)
            },
            _e[theme.breakpoints.down('sm')] = {
                fontSize: theme.typography.pxToRem(10),
                paddingBottom: 4,
            },
            _e),
    });
});
var StandardCardBase = function (props) {
    var byLineText = props.byLineText, title = props.title, overlineText = props.overlineText, linkClassProps = props.linkClassProps, imageResource = props.imageResource;
    var classes = useStyles();
    var LinkClass = props.linkClass;
    var ByLineIcon = props.byLineIcon;
    // TODO: This allows default card image...
    var image_url = '';
    if (imageResource && imageResource.versions) {
        if (imageResource.versions.CARD_LARGE) {
            image_url = imageResource.versions.CARD_LARGE.url;
        }
        else if (imageResource.versions.CARD_SMALL) {
            image_url = imageResource.versions.CARD_SMALL.url;
        }
    } //  else ??
    var imageAttrs = { style: {} };
    if (image_url) {
        imageAttrs.style = { backgroundImage: 'url(' + image_url + ')' };
    }
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement("div", { className: classes.byline },
            react_1.default.createElement(ByLineIcon, { className: classes.byLineIcon }),
            byLineText),
        react_1.default.createElement("div", { className: classes.imageWrapper },
            react_1.default.createElement("div", __assign({ className: clsx_1.default('image', classes.image) }, imageAttrs),
                react_1.default.createElement(LinkClass, __assign({ title: title }, linkClassProps, { className: classes.imageLink }), title))),
        react_1.default.createElement(LinkClass, __assign({ title: title }, linkClassProps, { className: classes.contentContainer }),
            react_1.default.createElement("div", { className: classes.contentContainerContent },
                react_1.default.createElement(typography_1.Overline, { className: classes.overline }, overlineText),
                react_1.default.createElement(Typography_1.default, { className: clsx_1.default('primaryTitle', classes.primaryTitle) }, title)))));
};
exports.default = StandardCardBase;
