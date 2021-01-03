import topEnglishWords from './topEnglishWords';

const wordPacks = {
    topEnglishWords : topEnglishWords,
};

const getRandomText = (wordPack, letterCount) => {
    const shuffled = wordPacks[wordPack].sort((a,b) => 0.5 - Math.random());
    return shuffled.join(' ').slice(0, letterCount);
}

export default getRandomText;