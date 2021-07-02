import * as fs from "fs"
import * as path from "path"

export const CURR_DIR = process.cwd()

const CHOICES = fs.readdirSync(path.join(__dirname, "templates"))

export const QUESTIONS = [
  {
    name: "template",
    type: "list",
    message: "What project template would you like to use?",
    choices: CHOICES,
  },
  {
    name: "name",
    type: "input",
    message: "New project name?",
  },
]

export const SKIP_FILES = ["node_modules", ".template.json"]
