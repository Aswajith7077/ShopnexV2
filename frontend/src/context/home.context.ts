import { createContext, useContext } from "react";
import { HomeContextType } from "@/types/context.type";


const HomeContext = createContext<HomeContextType | undefined>(undefined);

const useHomeContext = () => {

    const home = useContext(HomeContext);
    if(!home){
        throw new Error("Context Error : home is UNDEFINED! Set it before use.")
    }
    return home;
}

export{
    useHomeContext,
    HomeContext
}