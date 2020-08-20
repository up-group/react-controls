import { keyframes } from 'typestyle';

export type fadeType = 'fadeIn' | 'fadeOut';
export type fadeDirection = 'fromTop' | 'fromRight' | 'fromBottom' | 'fromLeft';
export type fadeMode = 'ease';

const fadeInKeyframes = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
});

const fadeOutKeyframes = keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 }
});

const getFromOpacity = (fadeType: fadeType) => {
    return fadeType === 'fadeIn' ? { opacity: 0 } : fadeType === 'fadeOut' ? { opacity: 1 } : {};
}

const getToOpacity = (fadeType: fadeType) => {
    return fadeType === 'fadeIn' ? { opacity: 1 } : fadeType === 'fadeOut' ? { opacity: 0 } : {};
}

enum FadeDirection {
    fromTop = 'marginBottom',
    fromBottom = 'marginTop',
    fromLeft = 'marginRight',
    fromRight = 'marginLeft'
};

const animationKeyframes = (fadeType?: fadeType, fadeDirection?: fadeDirection) => keyframes({
    from: {
        [FadeDirection[fadeDirection]]: '100%',
        ...getFromOpacity(fadeType)
    },
    to: {
        [FadeDirection[fadeDirection]]: '0',
        ...getToOpacity(fadeType)
    }
});

export const fullAnimationProp = (
    duration: number = 1,
    fadeMode: fadeMode = 'ease',
    fadeType?: fadeType,
    fadeDirection?: fadeDirection) => ({
        animation: `${animationKeyframes(fadeType, fadeDirection)} ${duration}s ${fadeMode}`
    });

export const fadeInAnimation = (duration: number = 1, fadeMode: fadeMode = 'ease') => ({
    animation: `${fadeInKeyframes} ${duration}s ${fadeMode}`
});

export const fadeOutAnimation = (duration: number = 1, fadeMode: fadeMode = 'ease') => ({
    animation: `${fadeOutKeyframes} ${duration}s ${fadeMode}`
});