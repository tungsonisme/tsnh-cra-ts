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
exports.SKIP_FILES = exports.QUESTIONS = exports.CURR_DIR = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
exports.CURR_DIR = process.cwd();
const CHOICES = fs.readdirSync(path.join(__dirname, "templates"));
exports.QUESTIONS = [
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
];
exports.SKIP_FILES = ["node_modules", ".template.json"];
//# sourceMappingURL=constants.js.map