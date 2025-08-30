import { useAuthContext } from '@/context/auth.context';
import { Badge } from '../ui/badge';

const role = 'dealer';
const Avatar = () => {
  const auth = useAuthContext();
  return (
    <div className="flex flex-row px-3 gap-7">
      <img
        src="https://placehold.co/400x400"
        className="aspect-square rounded-full w-25 "
      />
      <div className="flex flex-col py-2 gap-2">
        <div className="flex flex-col">
          <h2 className="font-open-sans text-2xl font-semibold">
            {auth.fullname}
          </h2>

          <h3 className="font-open-sans text-sm text-gray-300">
            {auth.username}
          </h3>
        </div>
        <h3 className="font-open-sans text-sm text-gray-300">
          {role === 'dealer' ? (
            <Badge variant="secondary" className="bg-cyan-700">
              Dealer
            </Badge>
          ) : (
            <Badge variant="outline">Consumer</Badge>
          )}
        </h3>
      </div>
    </div>
  );
};

export default Avatar;
