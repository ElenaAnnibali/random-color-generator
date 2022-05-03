import chalk from 'chalk';
import randomColor from 'randomcolor';

// import uniqolor from 'uniqolor';

// const hexColor = uniqolor.random().color;

// const getColor = chalk.hex(uniqolor.random().color);

// console.log(getColor(hexColor));

const rColor = randomColor();

const myBox = `###############################
###############################
###############################
#####                     #####
#####       ${rColor}       #####
#####                     #####
###############################
###############################
###############################`;

// console.log(getColor(myBox));

randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

if (process.argv.length < 3) {
  console.log(chalk.hex(rColor)(myBox));
} else {
  console.log(
    chalk.hex(
      randomColor({
        hue: process.argv[2],
        luminosity: process.argv[3],
      }),
    )(myBox),
  );
}
