import * as fs from "fs"
import * as path from "path"

export const CURR_DIR = process.cwd()

export const TEMPLATE_PATH = path.join(CURR_DIR, "templates")

const CHOICES = fs.readdirSync(TEMPLATE_PATH)

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
