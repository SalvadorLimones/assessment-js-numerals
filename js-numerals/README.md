# ARABIC NUMBERS CONVERSION TOOL

This repository contains a simple react app that converts arabic numbers into English phrase of the respective number.

It can cope with positive numbers up to the value of the maximum safe integer in JavaScript, equal to 2 to the 53rd power. Whenever the user tries to input a number which falls out of this range, a validation process changes the value to the maximum safe integer (in case of a higher value) or 0 (if the input is a negative number).

It also supports British English counting where numbers between 1000 and 2000 are said out using "hundreds". E.g. 1999 === nineteen hundred and ninety-nine. In case the value of the input number is between 1000 and 1999, an extra button appears, which can be used to toggle the British English counting option.

The below image is a shapshot of the app on mobile use with an output coresponding to the the British English counting:

<p align="center">
  <<img src="./public/snapshots/appPic.JPG " width="200">
</p>

The app was created with the use of Vite and the test cases use Vitest.

### Starting the app

The app can be fired up using these commands:

- npm i
- npm run dev

### Run tests

- npm test
