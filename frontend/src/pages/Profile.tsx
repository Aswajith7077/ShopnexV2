import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChartRadialStacked } from '@/components/charts/RadialStacked';
import Avatar from '@/components/profile/avatar';
import Details from '@/components/profile/details';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadialChartConfigType } from '@/types/charts/radial.stacked';

const angles = {
  start_angle: 210,
  end_angle: -30,
  inner_radius: 100,
  outer_radius: 150,
};

const card_config: RadialChartConfigType[] = [
  {
    dataKey: 'desktop',
    stackId: 'a',
    cornerRadius: 5,
    fill: 'var(--color-desktop)',
    className: 'stroke-transparent stroke-2',
  },
  {
    dataKey: 'mobile',
    fill: 'var(--color-mobile)',
    stackId: 'a',
    cornerRadius: 5,
    className: 'stroke-transparent stroke-2',
  },
];

const EditPracticeDialog = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="w-full py-6 rounded-xl">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

const Profile = () => {
  return (
    <section className="flex flex-row my-10 pr-20 pl-10 h-full">
      <ScrollArea className="w-3/4 h-[85vh] overflow-auto custom-scroll-hide">
        <div className="flex flex-col mr-5 gap-5 ">
          <div className="flex flex-row gap-5 w-full">
            <ChartRadialStacked
              {...angles}
              className="w-1/2"
              card_config={card_config}
            />
            <ChartRadialStacked
              {...angles}
              className="w-1/2"
              card_config={card_config}
            />
          </div>
        </div>
      </ScrollArea>
      <div className="flex flex-col w-1/4 ml-5 h-full gap-7">
        <Avatar />
        <EditPracticeDialog />
        <Details />
      </div>
    </section>
  );
};

export default Profile;
