import { API_ENDPOINTS } from '@/constants/api.enpoints';
import { REQUEST_METHODS } from '@/constants/api.enum';
import { useApiMutation } from '@/hooks/useApiService';
import { SearchProductRequestType, SearchProductResponseType } from '@/types/search.type';
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
// import SearchCard from '@/components/search/SearchCard';
import { ProductCard }  from '@/components/dashboard/PopularItems';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';





const Search = () => {
    
  const context = useOutletContext<Record<string,string>>();
  const [isSortByPrice,setIsSortByPrice] = useState<boolean>(false);
  const [response,setResponse] = useState<Record<string,any>>();
  const {mutate} = useApiMutation<SearchProductRequestType,SearchProductResponseType[]>(API_ENDPOINTS.SEARCH_PRODUCTS_ENDPOINT,REQUEST_METHODS.POST);   

  
  
  useEffect(() => {
    console.log("Search Text: ", context.searchText);
    const request:SearchProductRequestType = {
        searchText:context.searchText ?? '',
        isFilterApplied:false,
        FINAL_PRICE:[],
        CURRENCY:"",
        RATING:0,
        STOCK:0
    }
    mutate(request,{
        onSuccess:(response) => setResponse(response)
    })
  },[])
return (
  <div className="flex flex-row h-full gap-5 p-5">
    <div className='flex flex-col w-[70%]'>
        <div className='flex w-full px-5 gap-5'>
                <Button variant={isSortByPrice ? 'default' : 'outline'} onClick={() => setIsSortByPrice(true)}>Sort by Price</Button>
                <Button variant={!isSortByPrice ? 'default' : 'outline'} onClick={() => setIsSortByPrice(false)}>Sort by Rating</Button>
            
        </div>
        <ScrollArea className="flex flex-col p-5  ">
            <div className='grid grid-cols-3 gap-5 h-[calc(100vh-200px)]'>
                {response && response.length > 0 &&
            response.map((value:SearchProductResponseType, key:number) => (
              <ProductCard key={key} content={value} />
            ))}
            </div>
          
        </ScrollArea>
    </div>
    <div className="w-[30%] rounded-2xl bg-slate-900 border p-7">
      Filters
    </div>
  </div>

);


}

export default Search