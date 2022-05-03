import chalk from 'chalk';
import randomColor from 'randomcolor';

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
