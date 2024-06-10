import {getQuote, getUser, getUsersList} from "@/lib/usersAPI";
import Image from "next/image";
const Page = async ({ params } : { params: { userId: string } }) => {
     const {userId} =params
     const user=await getUser(userId)

     const finalUser=user?.results[0]
     const firstLetter = finalUser.name.first.charAt(0).toUpperCase()
     const allUsers= await getUsersList()
     const friends = allUsers.filter((user:any)=>user?.name.first.charAt(0).toUpperCase() === firstLetter.toUpperCase())
     const quote=await getQuote()
     console.log('final user', finalUser)

     return (
        <div className={"flex flex-col p-20 items-center w-full h-full justify-center "}>
            <div className={'flex flex-col gap-6 bg-black/30 p-20 rounded-lg'}>
                <Image src={finalUser.picture.medium} alt={'profile picture'} width={200} height={200} className={'rounded-full self-center'}/>
                <div className={'flex gap-2 items-center justify-center '}>
                   <h2 className={'text-lg font-bold'}>{finalUser.name?.first}</h2>  <h2 className={'text-lg font-bold'}>{finalUser?.name?.last}</h2>
                </div>
                <div className={'flex gap-6 text-lg'}>
                    <p>ville :{finalUser?.location?.city}</p>
                    <p>pays :{finalUser?.location?.country}</p>
                </div>
<div>{quote[0]?.content}</div>
                <div className={'flex flex-col gap-2'}>
                    <h2 className={"font-bold"}>Liste des amies :</h2>
                    {friends &&  friends.map((item:any,index:number)=>(<div key={index} className={'flex p-2 bg-yellow-300/30 rounded-lg'}>
                        {item?.name?.first} {item?.name?.last}
                    </div>))}
                </div>
            </div>
        </div>
    );
};
 export default Page