import styled from 'styled-components'
// source: https://tobiasahlin.com/spinkit/

const Spinner = styled.div<{ inline?: boolean }>`
  margin: ${props => props.inline ? '5px' : '100px auto'};
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;

  > div {
    background-color: ${props => props.theme.yellow};
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 0 3px 0 0;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
`

const Loader = ({ inline }: { inline?: boolean }) => (
  <Spinner inline={inline}>
    <div className="rect1"></div>
    <div className="rect2"></div>
    <div className="rect3"></div>
    <div className="rect4"></div>
    <div className="rect5"></div>
  </Spinner>
)

export default Loader
