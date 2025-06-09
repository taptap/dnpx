/**
 * Programmatic API
 * run(["prettier@latest", "--write", "."])
 */
export async function run(args: string[]) {
  if (args.length === 0) {
    console.error("Usage: dnpx <pkg[@ver]> [...args]");
    Deno.exit(1);
  }
  const [pkg, ...rest] = args;
  await new Deno.Command(Deno.execPath(), {
    args: ["run", "-A", `npm:${pkg}`, ...rest],
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  }).spawn().status;
}
