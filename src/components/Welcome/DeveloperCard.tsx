import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

interface DeveloperCardProps {
  name: string;
  descr: string;
  avatarUrl: string;
  position: string;
  githubName: string;
  githubLink: string;
}

const DeveloperCard = (props: DeveloperCardProps) => {
  return (
    <Card className="w-72 md:w-52 lg:w-64 xl:w-72">
      <CardBody className="text-center md:px-2 lg:px-6">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {props.name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {props.position}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {props.descr}
        </Typography>
      </CardBody>
      <CardFooter className="flex w-full gap-7 pt-2 mt-auto md:px-2 lg:px-6">
        <Link className="w-full" to={props.githubLink}>
          <div className="w-full transition rounded-lg hover:bg-peachFuzz-200">
            <Typography
              variant="lead"
              color="blue"
              textGradient
              className="flex items-center gap-5 md:gap-1 lg:gap-5"
            >
              <Avatar src={props.avatarUrl} alt="avatar" size="md" />
              {props.githubName}
            </Typography>
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DeveloperCard;
