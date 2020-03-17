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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Marquee Event Card
var react_1 = __importDefault(require("react"));
var moment_timezone_1 = __importDefault(require("moment-timezone"));
var MarqueeCardBase_1 = __importDefault(require("./MarqueeCardBase"));
var Calendar_1 = __importDefault(require("../../../icons/Calendar"));
var dates_1 = require("../../../utils/dates");
var MarqueeCardEvent = function (props) {
    var resource = props.resource, startingDateFilter = props.startingDateFilter, rest = __rest(props, ["resource", "startingDateFilter"]);
    // Event Date
    var eventResource = resource;
    var target_event_date = dates_1.getBestEventDate(resource.event_dates, startingDateFilter);
    var byLineText;
    // If it is ongoing - worst case scenario
    if (!target_event_date) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    if (target_event_date.category == 'ongoing') {
        byLineText =
            moment_timezone_1.default(new Date(target_event_date.start)).format('MMM D') +
                ' - ' +
                moment_timezone_1.default(new Date(target_event_date.end)).format('MMM D');
    }
    else {
        // Else show the start
        byLineText = moment_timezone_1.default(new Date(target_event_date.start)).format('ddd MMM D');
    }
    // Venue
    //console.log(target_event_date);
    var venue_name;
    var venue_resource = target_event_date.venue;
    if (venue_resource) {
        venue_name = venue_resource.nickname || venue_resource.name;
        if (venue_resource.multiple_locations_label) {
            venue_name = venue_resource.multiple_locations_label;
        }
    }
    // Overline
    var overlineText = target_event_date.label + ' @ ' + venue_name;
    return (react_1.default.createElement(MarqueeCardBase_1.default, __assign({ overlineText: overlineText, title: eventResource.name, byLineText: byLineText, byLineIcon: Calendar_1.default, imageResource: eventResource.primary_image_resource }, rest)));
};
exports.default = MarqueeCardEvent;