import styled from 'styled-components';
import {
  C_EBON,
  C_STORM,
  FF_NEWS_SERIF_MDM,
  FF_NEWS_SANS_REG,
  GEL_SPACING_DBL,
  GEL_SPACING_QUAD,
} from '../../lib/constants/styles';
import mediaQuery from '../../helpers/mediaQueries';

export const Headline = styled.h1`
  color: ${C_EBON};
  font-family: ${FF_NEWS_SERIF_MDM};
  margin: 0; // Reset
  padding: ${GEL_SPACING_QUAD}px 0 ${GEL_SPACING_DBL}px 0;

  // Font styling below is a subset of BBC GEL Typography "Canon"
  font-size: 1.75em;
  line-height: 2em;
  ${mediaQuery.smartPhoneOnly} {
    font-size: 2em;
    line-height: 2.25em;
  }
  ${mediaQuery.laptopAndLarger} {
    font-size: 2.75em;
    line-height: 3em;
  }
`;

const regexPunctuationSymbols = /[^a-z0-9\s-]/gi;
const regexSpaces = /\s+/g;

export const SubHeading = styled.h2.attrs({
  id: ({ text }) =>
    text.replace(regexPunctuationSymbols, '').replace(regexSpaces, '-'),
  tabIndex: '-1',
})`
  color: ${C_STORM};
  font-family: ${FF_NEWS_SANS_REG};
  margin: 0; // Reset
  padding: ${GEL_SPACING_DBL}px 0;

  // Font styling below is a subset of BBC GEL Typography "Trafalgar"
  font-size: 1.25em;
  line-height: 1.5em;
  ${mediaQuery.smartPhoneOnly} {
    font-size: 1.5em;
    line-height: 1.75em;
  }
  ${mediaQuery.laptopAndLarger} {
    font-size: 2em;
    line-height: 2.25em;
  }
`;