import { Link } from 'react-router-dom';

export const TurningBack = ({ to }) => {
  // console.log(to);
  return (
    <Link to={to}>
      <button>&#129144; TurningBack</button>
    </Link>
  );
};

export default TurningBack;
