import { API_ENDPOINTS } from '@/constants/api.enpoints';
import { useApiQuery } from '@/hooks/useApiService';
import { ListProductsResponseType } from '@/types/api/dashboard.type';
import { motion } from 'framer-motion';
import { useHomeContext } from '@/context/home.context';
import { useNavigate } from 'react-router-dom';

type ProductCardPropType = {
  content: ListProductsResponseType;
};

export const ProductCard = ({ content }: ProductCardPropType) => {
  const navigate = useNavigate();
  const context_handler = useHomeContext();
  return (
    <motion.div
      onClick={() => {
        context_handler.setContext({ product_name: content.NAME });
        navigate('/home/products_view');
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="flex flex-col rounded-2xl border   justify-between"
    >
      <div className="w-full rounded-t-2xl p-10 bg-white">
        <img src={content.IMAGES} alt={content.BRAND} className="w-50 h-50" />
      </div>
      <h1 className="font-semibold px-5 pt-5">{content.BRAND}</h1>
      <h2 className="text-sm px-5 py-3">{content.NAME.slice(0, 70)}</h2>
      <div className="flex flex-row justify-between p-5">
        <h1 className="bg-[#e6007655] border-rose-700 border rounded-full px-5 py-2 w-fit text-sm">
          {content.STOCK === 0 ? 'Out of Stock' : 'InStock'}
        </h1>
        <h2 className="bg-clip-text text-xl  bg-gradient-to-br from-blue-500 to-cyan-300 ">
          {content.FINAL_PRICE + ' ' + content.CURRENCY}
        </h2>
      </div>
    </motion.div>
  );
};

const PopularItems = () => {
  const { data } = useApiQuery<ListProductsResponseType[]>(
    API_ENDPOINTS.GET_PRODUCTS_ENDPOINT,
    { limit: 12 }
  );

  return (
    <div className="flex flex-col mx-15">
      <h1 className="font-semibold text-3xl py-10">Popular Items</h1>
      <div className="grid grid-cols-4 gap-5">
        {data &&
          data.length &&
          data.map((value, key) => {
            return <ProductCard key={key} content={value} />;
          })}
      </div>
    </div>
  );
};

export default PopularItems;
