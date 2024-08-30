const { spawnSync } = require('node:child_process');
const { writeFileSync } = require('node:fs');

function run(name) {

    const text = spawnSync("dotnet",[
        "run",
        "--project",
        "./maui/SourceGenerator/SourceGenerator.csproj",
        "Microsoft.Maui.Essentials"
    ]).output.filter((x) => x).map((x) => x.toString("utf8")).join("");

    writeFileSync(`./src/clr/${name}.ts`, text);
}

run("Microsoft.Maui.Essentials");
