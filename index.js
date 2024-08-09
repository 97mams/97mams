import { writeFileSync } from 'node:fs'
// const { fs } = require('node:fs')
import { readme } from "./readme.js"

const today = new Date()

const getFramwork = (framework) => {
    return today.getDay() % 2 === 0 ? "Laravel" : "Symfony";
}

const generateNewReadme = () => {
    return readme.replace("<#framwork_php>", getFramwork())
}

console.log(generateNewReadme());



const updateReadme = text => writeFileSync('./README.md', text);

const main = () => {
    const newReadme = generateNewReadme();
    console.log(newReadme);
    updateReadme(newReadme);
}

main()