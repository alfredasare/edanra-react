import styled, {css} from 'styled-components';

const KeyFrameAnimation = css`
@-webkit-keyframes loading {
    0% {
      background-color: #d7d7d7;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #d7d7d7;
    }
  }

  @-moz-keyframes loading {
    0% {
      background-color: #d7d7d7;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #d7d7d7;
    }
  }

  @-o-keyframes loading {
    0% {
      background-color: #d7d7d7;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #d7d7d7;
    }
  }

  @keyframes loading {
    0% {
      background-color: #d7d7d7;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #d7d7d7;
    }
  }
`;

const AnimationProperties = css`
    -webkit-animation: loading 1.5s infinite;
    -moz-animation: loading 1.5s infinite;
    -o-animation: loading 1.5s infinite;
    animation: loading 1.5s infinite;
`;

const LoaderProperties = css`
    height: 15px;
    background-color: #d7d7d7;
    border-radius: 8px;
    margin-top: 10px;
`;

export const Loader = styled.div`
    width: 95%;
    
    ${KeyFrameAnimation}
`;

export const ImageLoader = styled.div`
    width: 100%;
    height: 180px;
    background-color: #d7d7d7;
    border-radius: 8px;
    ${AnimationProperties}
`;

export const ContentLoader = styled.div`
    margin-top: 15px;
`;

export const RegionLoader = styled.div`
    width: 40%;
    ${LoaderProperties}
    ${AnimationProperties}
`;

export const PropertyTypeLoader = styled.div`
    width: 100%;
    ${LoaderProperties}
    ${AnimationProperties}
`;

export const PriceLoader = styled.div`
    width: 100%;
    ${LoaderProperties}
    ${AnimationProperties}
`;
