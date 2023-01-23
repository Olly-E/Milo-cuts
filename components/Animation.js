export const modalAnimation = {
    hidden: {
        opacity: 0,
    }, 
    visible: {
        opacity: 1,
        transition: { delay: 0.8},
        left: 0,
        top: '-1.5rem'
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.3
      }
    }
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
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        // delay: 1,
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  }

  export const itemImg = {
    hidden: { y: 20, opacity: 0, },
    show: {
      y: 0,
      opacity: 1
    },
  };

  export const imagesAnim = {
    hidden: {
      display:'none',
      opacity: 0,
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

  export const aboutUsContainerAnim = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      originY: 0.5,
      transition: {delay:1.4, duration: 0.8, ease: 'easeOut'}
    }
  } 

 

  export const aboutImgContainer = {
    hidden: {
      height: 0,
      opacity: 0
    },
    visible : {
      height: 579.2,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: 'easeInOut'
    }
    }
  }

  export const aboutUsTextAnim = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible : {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        delay: 1.8,
        duration: 1
      }
    }
  } 

  export const feautreTextAnim1 = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition:{
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }
  export const feautreTextAnim2 = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition:{
        delay: 0.5,
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }
  export const feautreTextAnim3 = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition:{
        delay: 1,
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }
  export const feautreTextAnim4 = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition:{
        delay: 2.3,
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  }



  export const featureVariant= {
    hidden: {opacity: 0, transition: {when: "afterChildren",}},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.3, delayChildren:0.08 * i, delay: i * 1.2, when: "beforeChildren"},
    }) 
  }
    export const featureVariantChild = {
   visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      // type: "spring",
      damping:12,
      stiffness: 100,
      duration: 0.9,
      when: 'beforeChildren'
    }
   },
   hidden: {
    opacity: 0,
    x: 100,
    scale: 0.5,
    
    transition: {
      damping: 12,
      stifness: 100,
      
    },
   }
  }

  export const featureImage = {
    hidden: {
      opacity: 0,
      x: 100,
      style:{
        display: 'none'
      }
    }, 
    visible: {
      opacity: 1,
      x: 0,
      style:{
        display: 'content'
      },
      transition: {
        delay: 2.5,
        duration: 1
      }
    }
  }
  export const frameAnimation = {
    hidden: {
      opacity: 0,
      height: '5rem'
    }, 
    visible: {
      opacity: 1,
      originY: 0.5,
      height: '37rem', transition:{
        ease: 'easeInOut',
        duration: 0.8,
        delay: 3,
      }
    }
  }

  export const scheduleHeadingAnim = {
    hidden: {
      x: '-3rem',
      opacity: 0,
      
    }, 
    visible: {
      x: '0rem', opacity:1, transition:{
        ease: 'easeInOut',
        duration: 0.5,
      }
    }
  }

  
  export const scheduleImageAnim = {
    hidden: {
      x: -500,
      opacity: 0,
      scale: 1.5,
    }, 
    visible: {
      x: 0, opacity:1, scale:1, transition:{
        ease: 'easeInOut',
        duration: 1.2,
        delay: 0.3
      }
    }
  }

  export const scheduleTextAnim = {
    hidden: {
      x: -50,
      opacity: 0,
    }, 
    visible: {
      x: 0, opacity:1, transition:{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.8
      }
    }
  }

  export const scheduleTextAnim2 = {
    hidden: {
      x: -50,
      opacity: 0,
    }, 
    visible: {
      x: 0, opacity:1, transition:{
        ease: 'easeInOut',
        duration: 1,
        delay: 1.2
      }
    }
  }
  export const scheduleTextAnim3 = {
    hidden: {
      x: -50,
      opacity: 0,
    }, 
    visible: {
      x: 0, opacity:1, transition:{
        ease: 'easeInOut',
        duration: 1,
        delay: 1.6
      }
    }
  }
  export const scheduleTextAnim4 = {
    hidden: {
      x: -50,
      opacity: 0,
    }, 
    visible: {
      x: 0, opacity:1, transition:{
        ease: 'easeInOut',
        duration: 1,
        delay: 2
      }
    }
  }

  export const IconAnim = {
    hidden: {
      scale: 0,
    }, 
    visible: {
      scale: 1, opacity:1, transition:{
        type: 'spring',
        duration: 1,
        delay: 0.5,
      }
    }
  }
  export const newsText1 = {
    hidden: {
      y: 30,
      opacity: 0
    }, 
    visible: {
      y: 0, opacity:1, transition:{
        duration: 0.8,
        delay: 1.1,
      }
    }
  }
  export const newsText2 = {
    hidden: {
      y: 30,
      opacity: 0
    }, 
    visible: {
      y: 0, opacity:1, transition:{
        duration: 0.8,
        delay: 1.2,
      }
    }
  }
  export const newsText3 = {
    hidden: {
      y: 30,
      opacity: 0
    }, 
    visible: {
      y: 0, opacity:1, transition:{
        duration: 0.8,
        delay: 1.3,
      }
    }
  }

  export const newsLetterContainer = {
    hidden: {
      height: 0,
    },
    visible: {
      height: 320,
      transition: {
        delay: 0.7,
        ease: 'easeInOut',
        duration: 1.5,
      }
    }
  }

  export const newsletterElme1 = {
    hidden: {
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1, transition:{
        delay: 1.5,
        ease: 'easeInOut',
        duration: 0.8,
        type: 'tween'
      }
    }
  }
  export const newsletterElme2 = {
    hidden: {
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1, transition:{
        delay: 1.6,
        ease: 'easeInOut',
        duration: 0.8,
        type: 'tween'
      }
    }
  }

  
  export const miloAnim = {
    hidden: {
      x: -30,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1, transition:{
        delay: 1.5,
        ease: 'easeInOut',
        duration: 0.8,
        type: 'tween'
      }
    }
  }
  export const iconAnim1 = {
    hidden: {
      x: -30,
      scale: 0,
      opacity: 0
    },
    visible: {
      x: 0,
      scale: [1.5, 1],
      opacity: 1, transition:{
        delay: 1.7,
        ease: 'easeInOut',
        duration: 0.8,
        type: 'tween'
      }
    }
  }
  export const iconAnim2 = {
    hidden: {
      x: -30,
      scale: 0,
      opacity: 0
    },
    visible: {
      x: 0,
      scale: [1.5, 1],
      opacity: 1, transition:{
        delay: 1.9,
        ease: 'easeInOut',
        duration: 0.8,
        type: 'tween'
      }
    }
  }
  export const iconAnim3 = {
    hidden: {
      x: -30,
      scale: 0,
      opacity: 0
    },
    visible: {
      x: 0,
      scale: [1.5, 1],
      opacity: 1, transition:{
        delay: 2.1,
        ease: 'easeInOut',
        duration: 0.8,
        type: 'tween'
      }
    }
  }
  export const iconAnim4 = {
    hidden: {
      x: -30,
      scale: 0,
      opacity: 0
    },
    visible: {
      x: 0,
      scale: [1.5, 1],
      opacity: 1, transition:{
        delay: 2.3,
        ease: 'easeInOut',
        duration: 0.8,
        type: 'tween'
      }
    }
  }