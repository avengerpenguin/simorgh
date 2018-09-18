import styled from 'styled-components';
import { number } from 'prop-types';
import { C_OAT, BBCBlocksSVG } from '../../../lib/constants/styles';

const ImageWrapper = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  background-color: ${C_OAT};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 30%;
  padding-bottom: ${props => props.ratio}%;
  width: 100%;

  /* placeholder BBC blocks SVG */
  background-image: url(data:image/svg+xml;base64,${BBCBlocksSVG});
`;

ImageWrapper.propTypes = {
  ratio: number.isRequired,
};

export default ImageWrapper;
