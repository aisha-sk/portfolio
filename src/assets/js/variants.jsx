export const variants = {
  springPhysics: {
    stiffness: 100,
    damping: 30,
  },

  containerVariants: {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5 * i,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  },

  textVariants: {
    hidden: {
      opacity: 0,
      y: `50px`,
      rotate: 4,
    },
    visible: {
      opacity: 1,
      y: `0px`,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  },

  delayedVariants: {
    hidden: {
      opacity: 0,
      y: `50px`,
      rotate: 4,
    },
    visible: {
      opacity: 1,
      y: `0px`,
      rotate: 0,
      transition: {
        delay: 1.8,
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  },

  imageVariants: {
    hidden: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },

  headerVariants: {
    hidden: {
      top: '-100px',
      transition: { duration: 0.5 },
      ease: [0.2, 0.65, 0.3, 0.9],
    },
    scrolled: {
      top: '0px',
      backdropFilter: 'blur(5px)',
      transition: { duration: 0.5 },
      ease: [0.2, 0.65, 0.3, 0.9],
    },
    top: {
      top: '0px',
      backdropFilter: 'blur(0px)',
      transition: { duration: 0.5 },
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};
