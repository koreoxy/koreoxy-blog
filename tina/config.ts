import { title } from "process";
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/page",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return undefined;
          },
        },
      },
      {
        name: "blog",
        label: "Blogs",
        path: "content/blog",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "date",
            type: "datetime",
            label: "Date",
            required: true,
          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
          },
        ],
        defaultItem: () => {
          return {
            title: "New BLog Posts",
            date: new Date(),
          };
        },
        ui: {
          router: ({ document }) => {
            return `/blogs/${document._sys.filename}`;
          },
          filename: {
            slugify: (values) => {
              return `${(values.title || "")
                .toLowerCase()
                .replace(/ /gm, "-")}`.replace(/[^\w\.\/-\s]/gi, "");
            },
          },
        },
      },
      {
        name: "favorite",
        label: "Favorite",
        path: "content/favorite",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "description",
            type: "string",
            label: "Description",
            required: true,
          },
          // { label: "Image", name: "image", type: "image" },
          {
            name: "link",
            type: "string",
            label: "Link",
            required: true,
          },
        ],
        ui: {
          filename: {
            slugify: (values) => {
              return `${(values.title || "")
                .toLowerCase()
                .replace(/ /gm, "-")}`.replace(/[^\w\.\/-\s]/gi, "");
            },
          },
        },
      },
    ],
  },
});
