// import { HorizontalScrollContainer } from "./horizontalScrollCont";

// export function MyComponent() {
//     function handleScrollEnd() {
//       console.log('User has scrolled to the end!');
//     }
  
//     return (
//       <HorizontalScrollContainer onScrollEnd={handleScrollEnd}>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'red' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'green' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'red' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'green' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'red' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'green' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'red' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'green' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'red' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'green' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'red' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'green' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'red' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'green' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'red' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
//         <div style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'green' }}></div>
//       </HorizontalScrollContainer>
//     );
//   }

//   import React, { useEffect, useMemo, useRef, useState } from 'react'
// import { Cards } from '../atoms/cards'
// import { ArrowLeft, ArrowRight } from '../assets/svg'

// const MoviesAndCast = (props) => {
//     const [directionState, setDirectionState] = useState({
//         canGoRight: true,
//         canGoLeft: false
//     })
//     const containerRef = useRef(null);

//     const updateIcons = (action) => {
//         if (action === 'both') {
//             setDirectionState({
//                 canGoRight: true,
//                 canGoLeft: true
//             })
//         } else if (action === 'end') {
//             setDirectionState({
//                 canGoRight: false,
//                 canGoLeft: true
//             })
//         } else {
//             setDirectionState({
//                 canGoRight: true,
//                 canGoLeft: false
//             })
//         }
//     }

//     function detectHorizontalScrollEnd(callback) {
//         return function handleScroll() {
//             const container = containerRef.current;
//             console.log(container.scrollLeft)
//             if (Math.floor(container.scrollLeft) + Math.floor(container.clientWidth) === Math.floor(container.scrollWidth)) {
//                 setDirectionState({
//                     canGoRight: false,
//                     canGoLeft: true
//                 })
//                 callback();
//                 updateIcons('end');
//             } else if (container.scrollLeft > 0 && Math.floor(container.scrollLeft) + Math.floor(container.clientWidth) !== Math.floor(container.scrollWidth)) {
//                 updateIcons('both');
//             } else {
//                 updateIcons('start');
//             }
//         };
//     }

//     const handlePagination = (direction) => {
//         console.log(direction);
//     }

//     useEffect(() => {
//         const handleScroll = detectHorizontalScrollEnd(props.onScrollEnd);
//         containerRef.current.addEventListener('scroll', handleScroll);
//         return () => containerRef.current.removeEventListener('scroll', handleScroll);
//     });

//     return (
//         <div className='movies'>
//             <div className='controls d-flex justify-content-between mb-3'>
//                 <p className='mb-4'>Movies</p>
//                 <span>
//                     <ArrowLeft fill={directionState.canGoLeft ? '#72D7F0' : '#6E717D'} className='me-5' onClick={() => handlePagination('left')} />
//                     <ArrowRight fill={directionState.canGoRight ? '#72D7F0' : '#6E717D'} onClick={() => handlePagination('right')} />
//                 </span>
//             </div>
//             {/* <div className='cards-list ms-auto'> */}
//             <div className='card-container ms-auto' ref={containerRef}>
//                 {props.children}
//             </div>
//             {/* </div> */}
//         </div>
//     )
// }


// export const ContainerWrapper = () => {

//     function handleScrollEnd() {
//         console.log('User has scrolled to the end!');
//     }

//     return (
//         <MoviesAndCast onScrollEnd={handleScrollEnd}>
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//             <Cards />
//         </MoviesAndCast>
//     )
// }