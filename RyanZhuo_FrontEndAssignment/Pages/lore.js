// Animate navbar element
gsap.from(".navbar", {
    duration: 1, // Animation duration
    y: "-100%", // Initial y position (off-screen)
    ease: "power2.out" // Easing function
  });
  
  // Animate lore-section elements
  gsap.from(".lore-section", {
    duration: 1, // Animation duration
    opacity: 0, // Initial opacity (invisible)
    y: 50, // Initial y position (slightly off-screen)
    stagger: 0.6 // Stagger animation for each element
  });
  