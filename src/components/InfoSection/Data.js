import mySvg1 from './raport.svg'
import mySvg2 from './disable.svg'
import mySvg3 from './learn.svg'
import mySvg4 from './support.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Missing!',
    headline: 'Report missing!',
    description: 'We will ask you some questions',
    imgStart: true,
    buttonLabel: 'Report now',
    img: mySvg1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}; 

export const homeObjTwo = {

    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'ComeFind.Me',
    headline: 'Do not be indifferent.',
    description: 'Help us right now!',
    imgStart: true,
    buttonLabel: 'Find more',
    img: mySvg2,
    alt: 'Find more',
    dark: true,
    primary: true,
    darkText: false
}; 
//aaa
export const homeObjThree = {
    id: 'service',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'ComeFind.Me',
    headline: 'Learn how you can help.',
    description:'',
    buttonLabel: 'Find more',
    imgStart: true,
    img: mySvg3,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const obj4 = {
    id: 'signup',
    lightBg: true,
    lightText: true ,
    lightTextDesc: false,
    topLine: 'Support',
    headline: 'Sign up to support us!',
    description: '',
    buttonLabel: 'Sign up now',
    imgStart: true,
    img: mySvg4,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: true
};