const { get } = require("axios");
const { writeFile } = require("fs");

function getSlug(slug) {
  const pos = slug.lastIndexOf("-");

  return slug.substring(0, pos);
}

function composeArticle({ pubdate, body, slug, title }) {
  if (body[0] === "-") {
    return body.replace("---", `---\npubdate: ${pubdate}\nslug: ${getSlug(slug)}`);
  }

  return `---
title: ${title}
pubdate: ${pubdate}
slug: ${getSlug(slug)} 
---
${body}
`;
}

async function main() {
  const { data } = await get("https://dev.to/api/articles?username=tomekbuszewski");
  data.forEach(async item => {
    const { id } = item;
    const { data: article } = await get(`https://dev.to/api/articles/${id}`);
    const { title, slug, published_at, body_markdown } = article;
    const date = published_at.split("T")[0];
    const articleContent = composeArticle({ title, slug, pubdate: date, body: body_markdown });

    writeFile(`${__dirname}/../content/writings/${date} - ${title}.md`, articleContent, err => {
      if (err) {
        throw new Error(`Cannot create article with ID ${id} (${title})`);
      }

      console.log(`Article with ID ${id} (${title}) created!`);
    });
  });
}

if (require.main === module) {
  (async () => {
    await main();
  })();
}
