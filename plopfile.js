const newFileInfo = {
  userName: require("os").userInfo().username,
  created: new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, ""),
};

const checkForFile = filepath => require("fs").existsSync(filepath);

module.exports = plop => {
  plop.setGenerator("ui", {
    description: "Create a component",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "What kind of component?",
        choices: [
          { name: "atom", value: "Atoms" },
          { name: "molecule", value: "Molecules" },
          { name: "organism", value: "Organisms" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is your component's name?",
      },
    ],
    actions: [
      {
        type: "add",
        path:
          "./src/ui/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./config/plop-templates/Component.tsx.hbs",
        data: newFileInfo,
      },
      {
        type: "add",
        path:
          "./src/ui/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "./config/plop-templates/Component.stories.tsx.hbs",
        data: newFileInfo,
      },
      {
        type: "add",
        path: "./src/ui/{{pascalCase type}}/{{pascalCase name}}/index.ts",
        templateFile: "./config/plop-templates/index.ts.hbs",
      },
      {
        type: "append",
        path: "./src/ui/{{pascalCase type}}/index.ts",
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  });
};
