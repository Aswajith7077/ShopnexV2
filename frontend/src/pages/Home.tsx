import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AuthContextProvider } from "@/context/auth.context";
import { HomeContext } from "@/context/home.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const client = new QueryClient();
const Home = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [productName, setProductName] = useState<string | undefined>(undefined);

  return (
    <QueryClientProvider client={client}>
      <AuthContextProvider>
        <HomeContext.Provider
          value={{
            searchText: searchText,
            setSearchText: setSearchText,
            product_name: productName,
            setContext: ({ product_name }) => setProductName(product_name),
          }}
        >
          <SidebarProvider>
            <div className="flex flex-row w-screen h-screen">
              <AppSidebar />
              <div className="flex flex-col w-full h-screen">
                <Navbar />
                <Outlet context={{ searchText }} />
              </div>
            </div>
          </SidebarProvider>
        </HomeContext.Provider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default Home;
