// import { writeFile } from 'node:fs/promise'
const { writeFile } = require('node:fs/promise')
const readme = require("./readme");

const generateNewReadme = () => {
    const readmeRow = readme.split('\n');

    const updateIdentifier = (identifier, reaplaceText) => {
        const identifierIndex = findIdentifierIndex
    }
}


const findIdentifierIndex = (rows, identifier) => {
    return rows.findIndex(row => Boolean(row.match(new RegExp(`<#${framework_php}>`, 'i'))));
}

const updateReadme = text => writeFile('./lisezmoi.md', text);

const main = () => {
    const newReadme = generateNewReadme();
    console.log(newReadme);
    updateReadme(newReadme);
}

main()