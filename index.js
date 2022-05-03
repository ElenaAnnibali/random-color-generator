import boxen from 'boxen';
import chalk from 'chalk';
import uniqolor from 'uniqolor';

const hexColor = uniqolor.random().color;

const getColor = chalk.hex(uniqolor.random().color);

//const box = boxen(getColor);

console.log(getColor(hexColor));
