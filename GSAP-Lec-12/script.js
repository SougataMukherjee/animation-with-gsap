document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // Create super smooth scrolling with more momentum
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2, // More momentum
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true,
    smoothTouch: 0.1, // Smoother on touch devices
  });

  // Strong parallax effect with rotation
  document.querySelectorAll(".image-wrap").forEach((wrap) => {
    const img = wrap.querySelector("img");
    const speed = parseFloat(wrap.getAttribute("data-speed")) || 0.5;

    // Initial setup - images start slightly offset
    gsap.set(img, { yPercent: -30 * (1 - speed) });

    // Create the parallax animation with more movement
    gsap.to(img, {
      yPercent: 50 * (1 - speed), // More vertical movement
      rotation: 5 * (1 - speed), // Slight rotation
      scale: 1.2, // Zoom effect
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        scrub: 2, // More pronounced scrubbing
      },
    });

    // Container animation for depth
    gsap.to(wrap, {
      rotationY: 15 * (1 - speed),
      rotationX: 10 * (1 - speed),
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  // Add mouse move parallax for extra effect
  document.querySelectorAll(".image-wrap").forEach((wrap) => {
    wrap.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      gsap.to(wrap, {
        rotationY: x * 20,
        rotationX: y * -20,
        duration: 1,
        ease: "power2.out",
      });
    });

    wrap.addEventListener("mouseleave", () => {
      gsap.to(wrap, {
        rotationY: 0,
        rotationX: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });
});
