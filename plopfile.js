const newDate = new Date()
  .toISOString()
  .replace(/T/, " ")
  .replace(/\..+/, "");

const newFileInfo = {
  userName: require("os").userInfo().username,
  created: newDate,
};

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
  plop.setGenerator("blogpost", {
    description: "Generate a blog post",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Entry title",
      },
      {
        type: "input",
        name: "summary",
        message: "Article summary",
      },
      {
        type: "input",
        name: "photo",
        message: "This article contains a header photo?",
      }
    ],
    actions: [
      {
        type: "add",
        path: `./content/writings/${newDate.split(" ")[0]} - {{title}}/index.md`,
        templateFile: "./config/plop-templates/article.md.hbs",
        data: { pubdate: newDate.split(" ")[0] },
      },
    ],
  });
  plop.setGenerator("workplace", {
    description: "Generate work place in MD format",
    prompts: [
      {
        type: "input",
        name: "work",
        message: "Company name",
      },
      {
        type: "input",
        name: "position",
        message: "Position",
      },
      {
        type: "input",
        name: "from",
        message: "Start date",
      },
      {
        type: "input",
        name: "to",
        message: "End date",
      }
    ],
    actions: [
      {
        type: "add",
        path: "./content/sections/experience/{{pascalCase work}}.md",
        templateFile: "./config/plop-templates/workplace.md.hbs",
      }
    ]
  });
};
