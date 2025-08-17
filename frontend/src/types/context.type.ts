export interface HomeContextType {
    searchText: string;
    setSearchText: (text: string) => void;
    product_name?: string;
    setContext: (context: { product_name: string }) => void;
}
