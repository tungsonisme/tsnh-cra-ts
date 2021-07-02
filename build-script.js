// eslint-disable-next-line @typescript-eslint/no-var-requires
const shell = require("shelljs")

shell.exec("tsc")
shell.cd("dist")
shell.exec("rm -rf templates")
shell.cd("..")
shell.exec("cp -r src/templates dist")
