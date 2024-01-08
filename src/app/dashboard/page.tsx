import Heading from '@/components/ui/Heading';
import { FC } from 'react';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    <div className='min-h-screen p-3 m-3 '>
      <Heading title="Dashboard" />
    </div>
  );
};

export default page;