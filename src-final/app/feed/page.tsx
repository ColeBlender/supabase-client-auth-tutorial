import { getUser } from "@/supabase/auth/server";

async function FeedPage() {
  const user = await getUser();

  return <div>FeedPage</div>;
}

export default FeedPage;
