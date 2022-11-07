export const modalAnimation = {
    hidden: {
        opacity: 0,
        borderRadius: '100%',
    }, 
    visible: {
        y: '20px',
        opacity: 1,
        transition: { duration: 0.3},
        borderRadius: '0%',
        minHeight: '200%',
        width: '100%',
        left: 0,
        top: '-1.5rem'
    },
}

export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  export const itemImg = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };