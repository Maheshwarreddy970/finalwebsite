import React, { useState } from 'react';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(68);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const buttonStyle = {
    position: 'relative',
    display: 'inline-flex',
    height: '44px',
    width: '120px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#1d1d1d',
    overflow: 'hidden',
    boxShadow: `
      inset -2px -2px 5px rgba(255, 255, 255, 0.2),
      inset 2px 2px 5px rgba(0, 0, 0, 0.1),
      4px 4px 10px rgba(0, 0, 0, 0.4),
      -2px -2px 8px rgba(255, 255, 255, 0.1)
    `,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  };

  const hoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: `
      inset -2px -2px 5px rgba(255, 255, 255, 0.25),
      inset 2px 2px 5px rgba(0, 0, 0, 0.15),
      6px 6px 15px rgba(0, 0, 0, 0.5),
      -3px -3px 10px rgba(255, 255, 255, 0.15)
    `
  };

  const mobileStyle = {
    height: '40px',
    width: '100px',
    borderRadius: '10px'
  };

  const labelStyle = {
    width: '70%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    fill: isLiked ? '#fc4e4e' : '#505050',
    height: '24px',
    width: '24px',
    transition: 'all 0.3s ease-out',
    transform: isLiked ? 'scale(1.1)' : 'scale(1)',
    animation: isLiked ? 'enlarge 0.2s ease-out 1' : 'none'
  };

  const mobileIconStyle = {
    height: '20px',
    width: '20px'
  };

  const textStyle = {
    color: isLiked ? '#fc4e4e' : '#fcfcfc',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  };

  const mobileTextStyle = {
    fontSize: '12px'
  };

  const countStyle = {
    position: 'absolute',
    right: 0,
    width: '30%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: isLiked ? '#fcfcfc' : '#717070',
    fontSize: '14px',
    fontWeight: '600',
    borderLeft: '2px solid #4e4e4e',
    background: 'linear-gradient(145deg, #1d1d1d, #2a2a2a)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const mobileCountStyle = {
    fontSize: '12px'
  };

  return (
    <div>
      <style>{`
        @keyframes enlarge {
          0% { transform: scale(0.5); }
          100% { transform: scale(1.2); }
        }
        
        @media (max-width: 640px) {
          .like-button-mobile {
            height: 40px !important;
            width: 100px !important;
            border-radius: 10px !important;
          }
          
          .like-icon-mobile {
            height: 20px !important;
            width: 20px !important;
          }
          
          .like-text-mobile {
            font-size: 12px !important;
          }
          
          .like-count-mobile {
            font-size: 12px !important;
          }
        }
        
        @media (hover: hover) {
          .like-button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 
              inset -2px -2px 5px rgba(255, 255, 255, 0.25),
              inset 2px 2px 5px rgba(0, 0, 0, 0.15),
              6px 6px 15px rgba(0, 0, 0, 0.5),
              -3px -3px 10px rgba(255, 255, 255, 0.15) !important;
          }
        }
        
        .like-button:active {
          transform: scale(0.98) !important;
        }
      `}</style>
      
      <div 
        className="like-button"
        style={{
          ...buttonStyle,
          ...(!window.matchMedia('(max-width: 640px)').matches ? {} : mobileStyle)
        }}
        onClick={handleLikeToggle}
        onMouseEnter={() => window.matchMedia('(hover: hover)').matches && Object.assign(document.querySelector('.like-button').style, hoverStyle)}
        onMouseLeave={() => window.matchMedia('(hover: hover)').matches && Object.assign(document.querySelector('.like-button').style, buttonStyle)}
      >
        <input 
          style={{
            position: 'absolute',
            opacity: 0,
            width: 0,
            height: 0
          }} 
          id="heart" 
          type="checkbox" 
          checked={isLiked}
          onChange={() => {}} 
        />
        
        <label 
          htmlFor="heart"
          style={labelStyle}
        >
          <svg 
            className={!window.matchMedia('(max-width: 640px)').matches ? '' : 'like-icon-mobile'}
            style={{
              ...iconStyle,
              ...(!window.matchMedia('(max-width: 640px)').matches ? {} : mobileIconStyle)
            }}
            fillRule="nonzero" 
            viewBox="0 0 24 24"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          
          <span 
            className={!window.matchMedia('(max-width: 640px)').matches ? '' : 'like-text-mobile'}
            style={{
              ...textStyle,
              ...(!window.matchMedia('(max-width: 640px)').matches ? {} : mobileTextStyle)
            }}
          >
            {isLiked ? 'Liked' : 'Like'}
          </span>
        </label>
        
        {/* Active count */}
        <span 
          className={!window.matchMedia('(max-width: 640px)').matches ? '' : 'like-count-mobile'}
          style={{
            ...countStyle,
            transform: isLiked ? 'translateY(0)' : 'translateY(40px)',
            ...(!window.matchMedia('(max-width: 640px)').matches ? {} : mobileCountStyle)
          }}
        >
          {likeCount}
        </span>
        
        {/* Inactive count */}
        <span 
          className={!window.matchMedia('(max-width: 640px)').matches ? '' : 'like-count-mobile'}
          style={{
            ...countStyle,
            transform: isLiked ? 'translateY(-40px)' : 'translateY(0)',
            opacity: isLiked ? 0 : 1,
            ...(!window.matchMedia('(max-width: 640px)').matches ? {} : mobileCountStyle)
          }}
        >
          {likeCount}
        </span>
      </div>
    </div>
  );
};

export default LikeButton;