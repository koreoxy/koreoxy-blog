import client from "@/tina/__generated__/client";

export default async function Home() {
  const result = await client.queries.page({ relativePath: "home.mdx" });

  return <h1 className="text-3xl ">Montserrat</h1>;
}
