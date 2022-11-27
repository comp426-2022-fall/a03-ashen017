#!/usr/bin/env node

import minimist from "minimist";
import {roll} from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

const sides = args.sides || 6;
const dice = args.dice || 2;
const roll = args.roll || 1;

console.log(roll(sides, dice, roll))
