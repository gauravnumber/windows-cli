// import { parse } from "https://deno.land/std@0.101.0/flags/mod.ts";

// const args = parse(Deno.args)
const args = Deno.args
Deno.mkdir(args[0])
console.log(`${args[0]} directory created.`)