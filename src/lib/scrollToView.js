function scrollToView({ setIsSection }) {
  // Scroll to the section 2
  const section2 = (isSection = false) => {
    if (!isSection) {
      document.querySelector('.section2').scrollIntoView({ behavior: 'smooth' })
      setIsSection = true
    }
  }

  // Scroll to the section 3
  const section3 = (isSection = false) => {
    if (!isSection) {
      document.querySelector('.section3').scrollIntoView({ behavior: 'smooth' })
      setIsSection = true
    }
  }
  // Scroll to the section 4
  const section4 = (isSection = false) => {
    if (!isSection) {
      document.querySelector('.section4').scrollIntoView({ behavior: 'smooth' })
      setIsSection = true
    }
  }

  return {
    section2,
    section3,
    section4,
  }
}

export default scrollToView