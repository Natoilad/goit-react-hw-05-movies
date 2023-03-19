import { FiArrowLeftCircle } from 'react-icons/fi';
import { Button, LinkGoBack } from './TurningBack.styled';

export const TurningBack = ({ to }) => {
  return (
    <LinkGoBack to={to}>
      <Button>
        <FiArrowLeftCircle /> Turning Back
      </Button>
    </LinkGoBack>
  );
};

export default TurningBack;
