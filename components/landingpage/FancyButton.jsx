import React from 'react';
import styled from 'styled-components';

const FancyFancyButton = () => {
  return (
    <FancyStyledWrapper>
      <div className="fancyButton">
        <div className="fancyBg" />
        <div className="fancyBorder" />
        <div className="fancyContent">
          <div className="fancySvgBox">
            <svg xmlns="https://www.w3.org/2000/svg" version="1.1" width={100} height={4} className="fancySvgLine">
              <line className="fancyLine" x1={0} y1={2} x2={100} y2={2} fill="none" strokeLinecap="round" strokeWidth={2} strokeDasharray={60} />
            </svg>
            <svg xmlns="https://www.w3.org/2000/svg" version="1.1" width={100} height={4} className="fancySvgLine">
              <line className="fancyLine" x1={0} y1={2} x2={100} y2={2} fill="none" strokeLinecap="round" strokeWidth={2} strokeDasharray={60} />
            </svg>
            <svg xmlns="https://www.w3.org/2000/svg" version="1.1" width={100} height={4} className="fancySvgLine">
              <line className="fancyLine" x1={0} y1={2} x2={100} y2={2} fill="none" strokeLinecap="round" strokeWidth={2} strokeDasharray={60} />
            </svg>
          </div>
          <div className="svgBox">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              version="1.1"
              width="100"
              height="4"
              className="svgLine"
            >
              <line
                className="line"
                x1="0"
                y1="2"
                x2="100"
                y2="2"
                fill="none"
                strokeLinecap="round"
                strokeWidth="2"
                strokeDasharray="60"
              ></line>
            </svg>
            <svg
              xmlns="https://www.w3.org/2000/svg"
              version="1.1"
              width="100"
              height="4"
              className="svgLine"
            >
              <line
                className="line"
                x1="0"
                y1="2"
                x2="100"
                y2="2"
                fill="none"
                strokeLinecap="round"
                strokeWidth="2"
                strokeDasharray="60"
              ></line>
            </svg>
            <svg
              xmlns="https://www.w3.org/2000/svg"
              version="1.1"
              width="100"
              height="4"
              className="svgLine"
            >
              <line
                className="line"
                x1="0"
                y1="2"
                x2="100"
                y2="2"
                fill="none"
                strokeLinecap="round"
                strokeWidth="2"
                strokeDasharray="60"
              ></line>
            </svg>
          </div>
          <span className="fancyText text-sm " data-text="GO">Search Cars</span>
        </div>
      </div>
    </FancyStyledWrapper>
  );
}

const FancyStyledWrapper = styled.div`
  .fancyButton {
    --card-w: 240px;
    --card-h: 48px;
    width: var(--card-w);
    height: var(--card-h);
    border: 2px solid #333;
    border-radius: 8px;
    display: grid;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background-color: #222;
    transition: transform 0.1s ease-in-out;
    user-select: none;
    &:active {
      transform: scale(0.95);
    }
    &:hover .fancyBorder {
      opacity: 1;
    }
    &:hover .fancyBg {
      animation-play-state: paused;
      filter: grayscale(0);
      &::before {
        animation-play-state: running;
        opacity: 0.6;
      }
    }
    &:hover .fancyText {
      transform: skewX(-15deg);
    }
    &:hover .fancySvgBox {
      opacity: 1;
      width: 50px;
    }
    &:hover .svgBox {
      opacity: 1;
      width: 50px;
    }
  }

  .fancyBg {
    --size: calc(max(var(--card-w), var(--card-h)) * 1.25);
    width: var(--size);
    height: var(--size);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: grayscale(1);
    animation: fancyRotateBg 14s linear infinite;
    animation-play-state: running;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: repeating-conic-gradient(
        from 0deg at 50% 50%,
        rgba(246, 194, 92, 0.75) 0deg,
        rgba(246, 194, 92, 0.75) 15deg,
        transparent 15deg,
        transparent 30deg
      );
      opacity: 0.2;
      transition: opacity 0.3s ease-in-out;
      animation: fancyRotateBgBefore 4s linear infinite;
      animation-play-state: paused;
    }
  }

  @keyframes fancyRotateBg {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes fancyRotateBgBefore {
    to {
      transform: rotate(360deg);
    }
  }
  .fancyBorder {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    box-shadow: inset 0 0 16px 0 rgba(194, 194, 194, 0.75);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .fancyContent {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    position: absolute;
    top: 0;
    left: 0;
    .fancyText {
      display: block;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      position: relative;
      transition: transform 0.3s ease-in —

System: out;
    }

    .fancySvgBox {
      width: 0px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 2px;
      transition: all 0.3s ease-in-out;
      opacity: 0;
      .fancySvgLine {
        position: relative;
      }
      .fancyLine {
        stroke: #fff;
        animation: fancyAnimLine 0.6s linear infinite;
      }
      .fancySvgLine:nth-child(1) {
        transform: translateX(4px);
      }
      .fancySvgLine:nth-child(3) {
        transform: translateX(-4px);
      }
      .fancySvgLine:nth-child(1) .fancyLine {
        animation-delay: 0.2s;
      }
      .fancySvgLine:nth-child(2) .fancyLine {
        animation-delay: 0.1s;
      }
    }
    .svgBox {
      width: 0px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 2px;
      transition: all 0.3s ease-in-out;
      opacity: 0;
      .svgLine {
        position: relative;
      }
      .line {
        stroke: #fff;
        animation: fancyAnimLine 0.6s linear infinite;
      }
      .svgLine:nth-child(1) {
        transform: translateX(4px);
      }
      .svgLine:nth-child(3) {
        transform: translateX(-4px);
      }
      .svgLine:nth-child(1) .line {
        animation-delay: 0.2s;
      }
      .svgLine:nth-child(2) .line {
        animation-delay: 0.1s;
      }
    }
  }
  @keyframes fancyAnimLine {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 120;
    }
  }`;

export default FancyFancyButton;