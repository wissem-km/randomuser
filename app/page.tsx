import {getUsersList} from "@/lib/usersAPI";
import {UsersGrid} from "@/components/UsersGrid";

export default async function Home() {
  const usersList = await getUsersList()

  return (
      <UsersGrid userLists={usersList}/>
  );
}
