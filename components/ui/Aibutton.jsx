import React from "react";

const AiButton = ({ isImageSearchActive, setIsImageSearchActive }) => {
    return (
        <div>
            <style>{`
        .button {
  width:44px;
          --round: 0.75rem;
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.25s ease;
          background: radial-gradient(
              65.28% 65.28% at 50% 100%,
              rgba(223, 113, 255, 0.8) 0%,
              rgba(223, 113, 255, 0) 100%
            ),
            linear-gradient(0deg, #7a5af8, #7a5af8);
          border-radius: var(--round);
          border: none;
          outline: none;
        }
        .button::before,
        .button::after {
          content: "";
          position: absolute;
          inset: var(--space);
          transition: all 0.5s ease-in-out;
          border-radius: calc(var(--round) - var(--space));
          z-index: 0;
        }
        .button::before {
          --space: 1px;
          background: linear-gradient(
            177.95deg,
            rgba(255, 255, 255, 0.19) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        .button::after {
          --space: 2px;
          background: radial-gradient(
              65.28% 65.28% at 50% 100%,
              rgba(223, 113, 255, 0.8) 0%,
              rgba(223, 113, 255, 0) 100%
            ),
            linear-gradient(0deg, #7a5af8, #7a5af8);
        }
        .button:active {
          transform: scale(0.95);
        }

        .fold {
          z-index: 1;
          position: absolute;
          top: 0;
          right: 0;
          height: 1rem;
          width: 1rem;
          display: inline-block;
          transition: all 0.5s ease-in-out;
          background: radial-gradient(
            100% 75% at 55%,
            rgba(223, 113, 255, 0.8) 0%,
            rgba(223, 113, 255, 0) 100%
          );
          box-shadow: 0 0 3px black;
          border-bottom-left-radius: 0.5rem;
          border-top-right-radius: var(--round);
        }
        .fold::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 150%;
          height: 150%;
          transform: rotate(45deg) translateX(0%) translateY(-18px);
          background-color: #e8e8e8;
          pointer-events: none;
        }
        .button:hover .fold {
          margin-top: -1rem;
          margin-right: -1rem;
        }

        .points_wrapper {
          overflow: hidden;
          width: 100%;
          height: 100%;
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }
        .points_wrapper .point {
          bottom: -10px;
          position: absolute;
          animation: floating-points infinite ease-in-out;
          pointer-events: none;
          width: 2px;
          height: 2px;
          background-color: #fff;
          border-radius: 9999px;
        }
        @keyframes floating-points {
          0% {
            transform: translateY(0);
          }
          85% {
            opacity: 0;
          }
          100% {
            transform: translateY(-55px);
            opacity: 0;
          }
        }
        .points_wrapper .point:nth-child(1) {
          left: 10%;
          opacity: 1;
          animation-duration: 2.35s;
          animation-delay: 0.2s;
        }
        .points_wrapper .point:nth-child(2) {
          left: 30%;
          opacity: 0.7;
          animation-duration: 2.5s;
          animation-delay: 0.5s;
        }
        .points_wrapper .point:nth-child(3) {
          left: 25%;
          opacity: 0.8;
          animation-duration: 2.2s;
          animation-delay: 0.1s;
        }
        .points_wrapper .point:nth-child(4) {
          left: 44%;
          opacity: 0.6;
          animation-duration: 2.05s;
        }
        .points_wrapper .point:nth-child(5) {
          left: 50%;
          opacity: 1;
          animation-duration: 1.9s;
        }
        .points_wrapper .point:nth-child(6) {
          left: 75%;
          opacity: 0.5;
          animation-duration: 1.5s;
          animation-delay: 1.5s;
        }
        .points_wrapper .point:nth-child(7) {
          left: 88%;
          opacity: 0.9;
          animation-duration: 2.2s;
          animation-delay: 0.2s;
        }
        .points_wrapper .point:nth-child(8) {
          left: 58%;
          opacity: 0.8;
          animation-duration: 2.25s;
          animation-delay: 0.2s;
        }
        .points_wrapper .point:nth-child(9) {
          left: 98%;
          opacity: 0.6;
          animation-duration: 2.6s;
          animation-delay: 0.1s;
        }
        .points_wrapper .point:nth-child(10) {
          left: 65%;
          opacity: 1;
          animation-duration: 2.5s;
          animation-delay: 0.2s;
        }

        .inner {
          z-index: 2;
          gap: 6px;
          position: relative;
          width: 100%;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          transition: color 0.2s ease-in-out;
        }

        .inner svg.icon {
    
          transition: fill 0.1s linear;
        }
      `}</style>

            <button
                onClick={() => setIsImageSearchActive(!isImageSearchActive)}
                aria-pressed={isImageSearchActive}
                type="button" className="button shadow-md h-11 w-10 z-10  ">
                <span className="fold"></span>

                <div className="points_wrapper">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <i key={i} className="point"></i>
                    ))}
                </div>

                <span className="inner">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15 0C15.4304 0 15.8126 0.27543 15.9487 0.683772L17.0406 3.95943L20.3162 5.05132C20.7246 5.18743 21 5.56957 21 6C21 6.43043 20.7246 6.81257 20.3162 6.94868L17.0406 8.04057L15.9487 11.3162C15.8126 11.7246 15.4304 12 15 12C14.5696 12 14.1874 11.7246 14.0513 11.3162L12.9594 8.04057L9.68377 6.94868C9.27543 6.81257 9 6.43043 9 6C9 5.56957 9.27543 5.18743 9.68377 5.05132L12.9594 3.95943L14.0513 0.683772C14.1874 0.27543 14.5696 0 15 0ZM15 4.16228L14.6987 5.06623C14.5991 5.36483 14.3648 5.59915 14.0662 5.69868L13.1623 6L14.0662 6.30132C14.3648 6.40085 14.5991 6.63517 14.6987 6.93377L15 7.83772L15.3013 6.93377C15.4009 6.63517 15.6352 6.40085 15.9338 6.30132L16.8377 6L15.9338 5.69868C15.6352 5.59915 15.4009 5.36483 15.3013 5.06623L15 4.16228ZM5.7587 3L7 3C7.55229 3 8 3.44772 8 4C8 4.55228 7.55229 5 7 5H5.8C4.94342 5 4.36113 5.00078 3.91104 5.03755C3.47262 5.07337 3.24842 5.1383 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2.1383 6.24842 2.07337 6.47262 2.03755 6.91104C2.00078 7.36113 2 7.94342 2 8.8V13.8194L3.37531 12.7191C3.74052 12.427 4.25948 12.427 4.6247 12.7191L6.42579 14.16L9.29289 11.2929C9.68342 10.9024 10.3166 10.9024 10.7071 11.2929C11.0976 11.6834 11.0976 12.3166 10.7071 12.7071L7.20711 16.2071C6.8468 16.5674 6.2732 16.5992 5.87531 16.2809L4 14.7806L2.1247 16.2809C2.0866 16.3113 2.04695 16.3386 2.00609 16.3626C2.01117 16.6427 2.02048 16.8801 2.03755 17.089C2.07337 17.5274 2.1383 17.7516 2.21799 17.908C2.40973 18.2843 2.7157 18.5903 3.09202 18.782C3.24842 18.8617 3.47262 18.9266 3.91104 18.9624C4.36113 18.9992 4.94342 19 5.8 19H12.2C13.0566 19 13.6389 18.9992 14.089 18.9624C14.5274 18.9266 14.7516 18.8617 14.908 18.782C15.2843 18.5903 15.5903 18.2843 15.782 17.908C15.8617 17.7516 15.9266 17.5274 15.9624 17.089C15.9992 16.6389 16 16.0566 16 15.2V14C16 13.4477 16.4477 13 17 13C17.5523 13 18 13.4477 18 14V15.2413C18 16.0463 18 16.7106 17.9558 17.2518C17.9099 17.8139 17.8113 18.3306 17.564 18.816C17.1805 19.5686 16.5686 20.1805 15.816 20.564C15.3306 20.8113 14.8139 20.9099 14.2518 20.9558C13.7106 21 13.0463 21 12.2413 21H5.75868C4.95372 21 4.28936 21 3.74817 20.9558C3.18608 20.9099 2.66937 20.8113 2.18404 20.564C1.43139 20.1805 0.819469 19.5686 0.435975 18.816C0.188684 18.3306 0.0901197 17.8139 0.0441945 17.2518C-2.28137e-05 16.7106 -1.23241e-05 16.0463 4.31292e-07 15.2413V8.7587C-1.23241e-05 7.95373 -2.28137e-05 7.28937 0.0441945 6.74817C0.0901197 6.18608 0.188684 5.66937 0.435975 5.18404C0.819468 4.43139 1.43139 3.81947 2.18404 3.43597C2.66937 3.18868 3.18608 3.09012 3.74818 3.04419C4.28937 2.99998 4.95373 2.99999 5.7587 3Z"
                            fill="white"
                        />
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default AiButton;
