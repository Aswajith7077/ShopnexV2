import { Card } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { API_ENDPOINTS } from '@/constants/api.enpoints';
import { useApiQuery } from '@/hooks/useApiService';
import {
  BannerResponseType,
  ContentAlignmentEnum,
} from '@/types/products/banner.type';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const getTextColor = (color: string) => {
  return `text-${color}`;
};

const getTextAlignment = (alignment: ContentAlignmentEnum) => {
  return alignment === ContentAlignmentEnum.left ? 'items-start' : 'items-end';
};

const Banner = () => {
  const { data } = useApiQuery<BannerResponseType[]>(
    API_ENDPOINTS.LIST_BANNERS_ENDPOINT
  );

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
      className="mx-15 w-[125vh]"
    >
      {/* ${getTextAlignment(banner_record.content_alignment)} */}
      <CarouselContent>
        {data &&
          data.map((banner_record, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card
                  className={`flex flex-col ${getTextAlignment(
                    banner_record.content_alignment
                  )} justify-center p-15  border-none min-h-[500px]`}
                  style={{
                    backgroundImage: `url(${banner_record.file_url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', // set the height you want
                  }}
                >
                  <div
                    className={`flex flex-col w-[45%] h-full justify-left gap-5 `}
                  >
                    <h1
                      className={`font-bold text-italic w-full leading-20.5 text-5xl font-open-sans text-${banner_record.text_color}`}
                    >
                      {banner_record.title}
                    </h1>
                    <p
                      className={`w-full font-semibold ${getTextColor(
                        banner_record.text_color
                      )}`}
                    >
                      {banner_record.description}
                    </p>
                    <Link
                      to={banner_record.deal_page}
                      className="w-fit my-5 rounded-full h-fit"
                    >
                      <Button className="rounded-full cursor-pointer py-6  text-md font-semibold px-8 w-fit">
                        Deal now
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Banner;
