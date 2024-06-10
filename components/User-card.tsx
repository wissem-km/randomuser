import Link from "next/link";

type UserCardProps = {
    user:any

};
export const UserCard = ({user}: UserCardProps) => {
    return (
        <Link
            href={user?.login?.uuid}
            className="group rounded-lg border border-transparent px-5 m-2 py-4 transition-colors hover:border-gray-300 border-gray-500 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
        >
            <h2 className="mb-3 text-2xl font-semibold first-letter:uppercase bg-blue-300/20 p-2 rounded-lg">
                nom: {user?.name?.first}
            </h2>
            <h2 className="mb-3 text-2xl font-semibold first-letter:uppercase bg-blue-300/20 p-2 rounded-lg">
                prénom: {user?.name?.last}
            </h2>
            <h2 className="mb-3 text-2xl font-semibold first-letter:uppercase bg-blue-300/20 p-2 rounded-lg ">
                ville: {user?.location?.city}
            </h2>
            <h2 className="mb-3 text-2xl font-semibold first-letter:uppercase bg-blue-300/20 p-2 rounded-lg">
                Pays: {user?.location?.country}
            </h2>

        </Link>
    );
};