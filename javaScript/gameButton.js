// // let gameButton = document.querySelector('.header__nav--game-room');

// // console.log(gameButton);

// // let style = gameButton['style'];

// // console.log(style);

// // let bg_img = style['background-image'];

// // console.log(bg_img);

// // let color;
// // function changeColor () {
// //   return color = 'radial-gradient(rgb(0, 0, 255) 25%, transparent 70%)';
// // }

// // changeColor();

// // console.log(color);





// // setTimeout (colorTiming, 10) 
// // function colorTiming() {

// // // }
// // // let i = 1;
// // // while (i < 10) {
// // // console.log('hi');
// // // i++
// // // };
// document.getElementById("hi").style.backgroundImage = `radial-gradient(rgb(0, 0, 255) 25%, transparent 70%)`;

// const sleep = (milliseconds) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }

// const changeColor = async () => {
//   for (let i = 0; i < 1; i++) {

//     for(let g = 0; g < 256; g++) {
//       await sleep(1)
//       let r = 0;
//       let b = 255 - g;
//       document.getElementById("hi").style.backgroundImage.replace(`${255-g}`, `${b}`);
//     }
//     for(let r = 0; r < 256; r++) {
//       await sleep(1)
//       let b = 0;
//       let g = 255 - r;
//       document.getElementById("hi").style.backgroundImage = `radial-gradient(rgb(${r}, ${g}, ${b}) 25%, transparent 70%)`;
//     }    
//     for(let b = 0; b < 256; b++) {
//       await sleep(1)
//       let g = 0;
//       let r = 255 - b;
//     document.getElementById("hi").style.backgroundImage = `radial-gradient(rgb(${r}, ${g}, ${b}) 25%, transparent 70%)`;
//     }
//   }

// }


// document.getElementById("hi").style.backgroundImage.replace(`255`, `100`);
