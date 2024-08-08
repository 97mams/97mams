import { writeFileSync } from 'node:fs'
// const { fs } = require('node:fs')
import { readme } from "./readme.js"

const generateNewReadme = () => {
    const readmeRow = readme.split('\n');

    const updateIdentifier = (identifier, reaplaceText) => {
        const identifierIndex = findIdentifierIndex
    }
}


const findIdentifierIndex = (rows, identifier) => {
    return rows.findIndex(row => Boolean(row.match(new RegExp(`<#${framework_php}>`, 'i'))));
}


const updateReadme = text => writeFileSync('./README.md', text);

const main = () => {
    const newReadme = generateNewReadme();
    console.log(newReadme);
    updateReadme(newReadme);
}

main()