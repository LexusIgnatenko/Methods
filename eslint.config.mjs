import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import jest from "eslint-plugin-jest";



export default [
  {
  files: ["**/*.{js,mjs,cjs,jsx}"]
  },
  {
    languageOptions: { 
      parserOptions: {
        globals: globals.browser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      } 
  },
  plugins: {
    jest: jest
  }
},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];