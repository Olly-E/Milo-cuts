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
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        // delay: 1,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  export const itemImg = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1
    }
  };

  export const imagesAnim = {
    hidden: {
      display:'none',
      opacity: 0
    },
    show: {
      display: 'grid',
      opacity: 1,
      transition: {
        delay: 1
      }
    }
  }


  // second screen animation

  const feautreHead1Anim = {
    hidden: {
      y: '10px',
      opacity: 0
    }
  }

  export const featureCardConatinerAnim = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  export const feautreCardAnim = {
    hidden: {scale: 1.2, opacity: 0},
    show:  {scale: 1, opacity: 1}
  }

  

  export const navAnim = {
    hidden: {opacity: 0, y: '80px'},
    visible:  {y:'0px', opacity: 1, transition:{
      duration: 1, ease: 'easeInOut', delay: 4
    }}
  }


  export  const containerVariant = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.12, delayChildren:0.04 * i},
    }) 
  }
  export const containerChild = {
   visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping:12,
      stiffness: 100
    }
   },
   hidden: {
    opacity: 0,
    x: 50,
    
    transition: {
      delay: 1,
      type: "spring",
      damping: 12,
      stifness: 100,
    },
   }
  }

  export const containerVariant2 = {
    hidden: {opacity: 0, transition: {when: "afterChildren",}},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.12, delayChildren:0.04 * i, delay: i * 0.3, when: "beforeChildren"},
    }) 
  }
    export const containerChild2 = {
   visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      // type: "spring",
      damping:12,
      stiffness: 100,
      when: 'beforeChildren'
    }
   },
   hidden: {
    opacity: 0,
    x: 50,
    scale: 0.5,
    
    transition: {
      damping: 12,
      stifness: 100,
      
    },
   }
  }

  export const description1 = {
    hidden: {
      opacity: 0,
      x: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {delay: 1.8, ease: 'easeInOut' }
    }
  }
  export const description2 = {
    hidden: {
      opacity: 0,
      x: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {delay: 1.9,ease: 'easeInOut'}
    }
  }
  export const description3 = {
    hidden: {
      opacity: 0,
      x: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {delay: 2.0, ease: 'easeInOut'}
    }
  }

  export const fabButtons = {
    hidden: {
      opacity: 0,
      x: -230
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {delay: 2.1, duration:0.9, ease: 'easeInOut'}
    }
  }
  export const fabButtons2 = {
    hidden: {
      opacity: 0,
      x: -230,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {delay: 2.2, duration:0.9, ease: 'easeInOut'}
    }
  }

   export const fabButtons3 = {
    hidden: {
      opacity: 0,
      x: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {delay: 2.9, duration:1, ease: 'easeInOut'}
    }
  }

  export const acheive1 = {
    hidden: {
      opacity: 0,
      y: -35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {delay: 3.9, duration:0.4, ease: 'easeInOut'}
    }
  }
  export const acheive2 = {
    hidden: {
      opacity: 0,
      y: -35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {delay: 4.0, duration:0.4, ease: 'easeInOut'}
    }
  }
  export const acheive3 = {
    hidden: {
      opacity: 0,
      y: -35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {delay: 4.1, duration:0.4, ease: 'easeInOut'}
    }
  }

  export const BigContainerAnim = {
    hidden: {
      opacity: 0,
      x: -200
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {delay: 4, duration:1, ease: 'easeInOut'}
    }
  }
  
  export const firstDivAnim = {
    hidden: {
      x: '40%'
    },
    visible: {
      x: '0%',
      transition: {delay: 4, duration:1, ease: 'easeInOut'}
    }
  }

  