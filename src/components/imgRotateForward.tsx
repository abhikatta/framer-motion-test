// import React, { useEffect } from "react";
// import { motion, useAnimate } from "framer-motion";

// const ImgRotateForward = () => {
//   const [ref, animate] = useAnimate();

//   const Img1RotateForward = async () => {
//     // first imaage animation
//     await animate(
//       ref.current.children[0],
//       {
//         top: "5%",
//         width: "65vw",
//         zIndex: 1,
//         position: "absolute",
//       },
//       { duration: DURATION }
//     );
//     await animate(
//       ref.current.children[0],
//       {
//         top: "10%",
//         width: "70vw",
//         zIndex: 2,
//         position: "absolute",
//       },
//       { duration: DURATION }
//     );
//     await animate(
//       ref.current.children[0],
//       {
//         top: "15%",
//         width: "75vw",
//         zIndex: 3,
//         position: "absolute",
//         opacity: 0,
//         y: "100%",
//       },
//       { duration: DURATION }
//     );
//     await animate(
//       ref.current.children[0],
//       {
//         top: 0,
//         width: "65vw",
//         zIndex: 0,
//         opacity: 1,
//         position: "absolute",
//       },
//       { duration: DURATION }
//     );
//   };
//   const Img2RotateForward = async () => {
//     // second image animation

//     await animate(
//       ref.current.children[1],
//       {
//         top: "10%",
//         width: "70vw",
//         zIndex: 2,
//         position: "absolute",
//       },
//       { duration: DURATION }
//     );
//     await animate(
//       ref.current.children[1],
//       {
//         top: "15%",
//         width: "75vw",
//         zIndex: 3,
//         position: "absolute",
//         opacity: 0,
//         y: "100%",
//       },
//       { duration: DURATION }
//     );

//     await animate(
//       ref.current.children[1],
//       {
//         top: "5%",
//         width: "65vw",
//         opacity: 0,
//         zIndex: 0,
//         position: "absolute",
//       },
//       { duration: DURATION }
//     );
//   };

//   useEffect(() => {
//     Img1RotateForward();
//     Img2RotateForward();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className="flex justify-center items-center w-full max-w-screen h-auto min-h-screen relative"
//     >
//       <motion.img
//         src="/dashboard.png"
//         initial={{
//           width: "60vw",
//           zIndex: 0,
//           position: "absolute",
//           top: 0,
//         }}
//         // whileInView={{
//         //   top: "5%",
//         //   width: "65vw",
//         //   zIndex: 1,
//         // }}
//         // transition={{
//         //   delay: 1,
//         //   repeatDelay: 1,
//         //   repeat: Infinity,
//         //   duration: 1,
//         // }}
//       />
//       <motion.img
//         src="/profile.png"
//         initial={{
//           width: "65vw",
//           zIndex: 1,
//           position: "absolute",
//           top: "5%",
//         }}
//         // whileInView={{
//         //   width: "70vw",
//         //   position: "absolute",
//         //   zIndex: 2,
//         //   top: "4rem",
//         //   opacity: 1,
//         // }}
//         // transition={{
//         //   delay: 1,
//         //   repeatDelay: 1,
//         //   repeat: Infinity,
//         //   duration: 1,
//         // }}
//       />
//       {/* <motion.img
//         src="/performance.png"
//         initial={{
//           width: "70vw",
//           position: "absolute",
//           zIndex: 2,
//           top: "4rem",
//           opacity: 1,
//         }}
//         whileInView={{
//           width: "60vw",
//           zIndex: 0,
//           position: "absolute",
//           top: "2rem",
//           opacity: 0,
//           y: 100,
//         }}
//         transition={{
//           delay: 1,
//           repeatDelay: 1,
//           repeat: Infinity,
//           duration: 1,
//         }}
//       /> */}
//     </div>
//   );
// };

// export default ImgRotateForward;

import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

const ImgRotateForward = () => {
  const DURATION = 1.5;
  const [ref, animate] = useAnimate();

  const Img1RotateForward = async () => {
    // first image animation
    await animate(
      ref.current.children[0],
      {
        top: "5%",
        width: "70vw",
        zIndex: 1,
        position: "absolute",
      },
      { duration: DURATION }
    );
    await animate(
      ref.current.children[0],
      {
        top: "10%",
        width: "75vw",
        zIndex: 2,
        position: "absolute",
      },
      { duration: DURATION }
    );
    await animate(
      ref.current.children[0],
      {
        top: "15%",
        width: "75vw",
        zIndex: 3,
        position: "absolute",
        opacity: 0,
        y: 100,
      },
      { duration: DURATION / 2 }
    );
    await animate(
      ref.current.children[0],
      {
        top: 0,
        y: 0,
        width: "65vw",
        zIndex: 0,
        opacity: 1,
        position: "absolute",
      },
      { duration: DURATION / 2 }
    );
    Img1RotateForward();
  };

  const Img2RotateForward = async () => {
    // second image animation
    await animate(
      ref.current.children[1],
      {
        top: "10%",
        width: "75vw",
        zIndex: 1,
        position: "absolute",
      },
      { duration: DURATION }
    );
    await animate(
      ref.current.children[1],
      {
        top: "15%",
        width: "75vw",
        zIndex: 2,
        position: "absolute",
        opacity: 0,
        y: 100,
      },
      { duration: DURATION / 2 }
    );
    await animate(
      ref.current.children[1],
      {
        top: "0",
        width: "65vw",
        y: 0,
        opacity: 1,
        zIndex: 0,
        position: "absolute",
      },
      { duration: DURATION / 2 }
    );
    await animate(
      ref.current.children[1],
      {
        top: "5%",
        width: "70vw",
        zIndex: 1,
        position: "absolute",
      },
      { duration: DURATION }
    );
    Img2RotateForward();
  };

  const Img3RotateForward = async () => {
    // third image animation
    await animate(
      ref.current.children[2],
      {
        top: "15%",
        width: "75vw",
        zIndex: 2,
        position: "absolute",
        opacity: 0,
        y: 100,
      },
      { duration: DURATION / 2 }
    );
    await animate(
      ref.current.children[2],
      {
        top: 0,
        width: "65vw",
        zIndex: 0,
        position: "absolute",
        opacity: 1,
        y: 0,
      },
      { duration: DURATION / 2 }
    );

    await animate(
      ref.current.children[2],
      {
        top: "5%",
        width: "70vw",
        zIndex: 1,
        position: "absolute",
      },
      { duration: DURATION }
    );
    await animate(
      ref.current.children[2],
      {
        top: "10%",
        width: "75vw",
        zIndex: 2,
        position: "absolute",
      },
      { duration: DURATION }
    );
    Img3RotateForward();
  };

  useEffect(() => {
    Img1RotateForward();
    Img2RotateForward();
    Img3RotateForward();
  }, []);

  return (
    <div className="min-h-screen  overflow-hidden h-auto  bg-custom-gradient  pt-auto w-full max-w-screen  flex-col flex justify-center items-center  pt-[10rem]">
      <div
        ref={ref}
        className="overflow-hidden  flex justify-center items-end bg-transparent w-full max-w-screen min-h-screen h-full  relative"
      >
        <motion.img
          src="/performance.png"
          initial={{
            width: "65vw",
            zIndex: 0,
            position: "absolute",
            top: 0,
          }}
        />
        <motion.img
          src="/profile.png"
          initial={{
            width: "70vw",
            zIndex: 1,
            position: "absolute",
            top: "5%",
          }}
        />
        <motion.img
          src="/dashboard.png"
          initial={{
            width: "75vw",
            zIndex: 2,
            position: "absolute",
            top: "10%",
          }}
        />
      </div>
    </div>
  );
};

export default ImgRotateForward;
