import { Button } from "@/components/ui/button";


const EndCard = () => {
    return (
        <section className="mx-20 my-20 p-20 border bg-gradient-to-b from-slate-900 to-black border-gray-900 rounded-3xl">
            <div className="flex flex-col gap-10 ">
                <h1 className="font-semibold text-4xl  ">Try our Sales Sections</h1>
                <p className="w-1/2">List your products with ease, connect with the right buyers, and grow your reach.
Your marketplace, your rules — start selling smarter today.</p>
                <Button className="text-md py-6 px-8 w-fit rounded-full font-semibold">
                    Sell a product 
                </Button>
            </div>

        </section>
    )
}

export default EndCard;