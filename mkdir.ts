import { parse } from "https://deno.land/std@0.101.0/flags/mod.ts";

const args = parse(Deno.args);

if (args.p) {
  Deno.mkdir(args.p, { recursive: true });
} else {
  const path = String(args._[0]);
  Deno.mkdir(path);
}
