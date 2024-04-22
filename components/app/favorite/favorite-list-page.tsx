"use client";

import { LinkCard } from "@/components/LinkCard";
import { FavoriteConnectionQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

export default function FavoriteListPageComponent(props: {
  data: FavoriteConnectionQuery;
  variables: {};
  query: string;
}) {
  const { data } = useTina(props);

  const favoriteList = data.favoriteConnection.edges;
  console.log(favoriteList);

  return (
    <>
      <h1>About Me</h1>

      <p>
        {" "}
        My name is Saifullah. you can call me Iful or ipul. I'm currently 23
        years old. Born and live in Indonesia. I'm currently a student at Teuku
        Umar University.I started learn about programmer since 2020 with c++
        language. But for now I spend more time to explore about web development
        using Next.js and Laravel.{" "}
      </p>
      <h2>My Favorite Things ♥️</h2>
      <div className="mx-auto grid grid-rows-3 gap-4 md:grid-rows-1 lg:mx-0">
        <div className="grid md:grid-cols-3 gap-4">
          {favoriteList?.map((project: any, i: number) => {
            return (
              <LinkCard
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
