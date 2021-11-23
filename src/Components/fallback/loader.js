import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Fallback = () => (
  <FallbackContainer>
    <Loader
      type='ThreeDots'
      color='white'
      height={80}
      width={80}
      timeout={3000}
    />
  </FallbackContainer>
);

export default Fallback;

const FallbackContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0.5turn);
  background-image: linear-gradient(
    106.9deg,
    rgba(148, 14, 60, 1) 60.9%,
    rgba(3, 22, 27, 1) 122.3%
  );
  border-radius: 50px;
`;
