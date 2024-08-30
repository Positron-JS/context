import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

function run(name) {

    const text = spawnSync("dotnet",[
        "run",
        "--project",
        "./maui/SourceGenerator/SourceGenerator.csproj",
        name
    ]).output.filter((x) => x).map((x) => x.toString("utf8")).join("");

    writeFileSync(`./src/clr/${name}.ts`, text);
}

run("Microsoft.Maui.Essentials");
run("Microsoft.Maui.Graphics");
