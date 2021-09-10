import {useEffect, useState} from "react";
import {MangaData} from "../database/manga_data";

const useMangaNames = ()=>{
    const [names, setNames] = useState(undefined as unknown as string[] || undefined);

    const arrNames:string[] =[];



    useEffect(()=>{
        MangaData.forEach( manga =>{
            arrNames.push(manga.name);
        });
        setNames([...arrNames]);
    },[]);

    return names;
}

export default useMangaNames;