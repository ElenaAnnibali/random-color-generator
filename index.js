import chalk from 'chalk';
import uniqolor from 'uniqolor';

const hexColor = uniqolor.random().color;

const getColor = chalk.hex(uniqolor.random().color);

// console.log(getColor(hexColor));

const myBox = `###############################
###############################
###############################
#####                     #####
#####       ${hexColor}       #####
#####                     #####
###############################
###############################
###############################`;

console.log(getColor(myBox));
