import FavoriteListPageComponent from "@/components/app/favorite/favorite-list-page";
import client from "@/tina/__generated__/client";

export default async function ProjectListPage() {
  const result = await client.queries.favoriteConnection();

  return <FavoriteListPageComponent {...result} />;
}
