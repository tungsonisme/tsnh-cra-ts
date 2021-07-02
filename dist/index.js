#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const inquirer = __importStar(require("inquirer"));
const helpers_1 = require("./helpers");
const constants_1 = require("./constants");
inquirer.prompt(constants_1.QUESTIONS).then((answers) => {
    const projectChoice = answers["template"];
    const projectName = answers["name"];
    const templatePath = path.join(__dirname, "templates", projectChoice);
    const targetPath = path.join(constants_1.CURR_DIR, projectName);
    const options = {
        projectName,
        templateName: projectChoice,
        templatePath,
        targetPath,
    };
    if (!helpers_1.createProject(targetPath)) {
        return;
    }
    helpers_1.createDirectoryContents(templatePath, projectName);
});
//# sourceMappingURL=index.js.map