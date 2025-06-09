# dnpx

A Deno version of `npx`

## Usage

```bash
deno install -Ag -n dnpx jsr:@taptap/dnpx/cli
```

Then you can

1. use `dnpx` just like `npx`:

```bash
dnpx prettier@latest --write .
dnpx create-next-app myapp
```

2. use it in project's tasks:

```json
{
  "tasks": {
    "x": "deno run -A jsr:@taptap/dnpx cli $*"
  }
}
```

3. use it in scripts:

```ts
import { run } from "@taptap/dnpx";
```
