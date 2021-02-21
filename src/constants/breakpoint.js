const breakPoints = {
    mobile: "500px",
    smallMoble: "320px"
};

export const media = {
    mobileOnly: `@media(max-width: ${breakPoints.mobile})`,
    smallMobleOnly: `@media(max-width: ${breakPoints.smallMoble})`,
    largeMobile: `@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2)`,
    iphonePlus: `@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3)`,
    iphoneX: `@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3)`
};