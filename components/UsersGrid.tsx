'use client'
import {ChangeEvent, useEffect, useState} from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {UserCard} from "@/components/User-card";

type usersPropsType = {
    userLists:any
};
export const UsersGrid = ({userLists}: usersPropsType) => {
    const [searchText, setSearchText] = useState<string>("")

    const searchFilter = (users:any) => {
        return users.filter((user:any) =>
            user.name.first.toLowerCase().includes(searchText.toLowerCase()) ||
            user.name.last.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    const filteredUserList = searchFilter(userLists);
    return (
        <>
            <div className="flex min-h-screen flex-col items-center p-24">
                <h3 className={'text-2xl py-6 text-center'}>Recherche :</h3>
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label htmlFor={'name'}>  nom : </Label>
                    <Input type={'text'}
                           value={searchText}
                           id={'nom'}
                           placeholder={'john doe ...'}
                           onChange={(event:ChangeEvent<HTMLInputElement>)=>setSearchText(event.target.value)}
                    />
                </div>
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-2">
                    {userLists && filteredUserList.map((item:any, index: number)=><UserCard key={index} user={item} />)}
                </div>

            </div>
        </>
    );
};