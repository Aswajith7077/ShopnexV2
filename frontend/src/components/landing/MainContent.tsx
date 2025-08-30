import TextType from '@/blocks/TextAnimations/TextType/TextType';
import { Button } from '../ui/button';

const MainContent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-20 py-30">
      <div className="flex flex-col justify-start items-start w-full">
        <h1 className="text-5xl text-left font-bold mb-4 ">
          Manage credit, trade
        </h1>
        <div className="flex flex-row">
          <h1 className="text-5xl text-left font-bold mb-4 mr-2">goods</h1>
          <TextType
            text={[' easily.', ' at all in one place.']}
            typingSpeed={90}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="|"
            className="text-5xl text-left font-bold mb-4 "
          />
        </div>
        <p className="text-md py-10 w-2/5">
          {
            'An online platform to buy or sell everyday goods, manage your credit score, and receive AI-driven recommendations. Features include payment history tracking and connections with top dealers .'
          }
        </p>
        <Button className="text-md py-6 px-8 rounded-full font-semibold">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default MainContent;
