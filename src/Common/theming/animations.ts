import { keyframes, style } from 'typestyle';


const getFromOpacity = (fadeType: string) => fadeType === 'fadeIn'
    ? { opacity: 0 }
    : fadeType === 'fadeOut'
        ? { opacity: 1 }
        : {};

const getToOpacity = (fadeType: string) => fadeType === 'fadeIn'
    ? { opacity: 1 }
    : fadeType === 'fadeOut'
        ? { opacity: 0 }
        : {};

const fromBottomAnimation = (fadeType?: string) => keyframes({
    from: {
        marginTop: '100%',
        ...getFromOpacity(fadeType)
    },
    to: {
        marginTop: '10px',
        ...getToOpacity(fadeType)
    }
});

const fromTopAnimation = (fadeType?: string) => keyframes({
    from: {
        marginTop: '-100%',
        ...getFromOpacity(fadeType)
    },
    to: {
        marginTop: '0px',
        ...getToOpacity(fadeType)
    }
});

const fromRightAnimation = (fadeType?: string) => keyframes({
    from: {
        marginLeft: '100%',
        ...getFromOpacity(fadeType),
    },

    to: {
        marginLeft: '0%',
        ...getToOpacity(fadeType)
    }
});



const fromLeftAnimation = (fadeType?: string) => keyframes({
    from: {
        marginLeft: '0%',
        ...getFromOpacity(fadeType),
    },

    to: {
        marginLeft: '-100%',
        ...getToOpacity(fadeType)
    }
});

const fadeInAnimation = keyframes({
    from: {
        opacity: 0
    },
    to: {
        opacity: 1
    }
});
const fadeOutAnimation = keyframes({
    from: {
        opacity: 1
    },
    to: {
        opacity: 0
    }
});

export const fadeIn = (
    duration: number = 1,
    mode: string = 'ease'
) => ({
    animation: `${fadeInAnimation} ${duration}s ${mode}`
});
export const fadeOut = (
    duration: number = 1,
    mode: string = 'ease'
) => ({
    animation: `${fadeOutAnimation} ${duration}s ${mode}`
});
export const animateFromBottom = (
    duration: number = 1,
    mode: string = 'ease',
    fadeType?: string
) => ({
    animation: `${fromBottomAnimation(
        fadeType
    )} ${duration}s ${mode}`
});
export const animateFromTop = (
    duration: number = 1,
    mode: string = 'ease',
    fadeType?: string
) => ({
    animation: `${fromTopAnimation(
        fadeType
    )} ${duration}s ${mode}`
});

export const animateFromRight = (duration: number = 1,
    mode: string = 'ease',
    fadeType?: string) => ({
        animation: `${fromRightAnimation(
            fadeType
        )} ${duration}s ${mode}`
    });
export const animateFromLeft = (duration: number = 1,
    mode: string = 'ease',
    fadeType?: string) => ({
        animation: `${fromLeftAnimation(
            fadeType
        )} ${duration}s ${mode}`
    });
