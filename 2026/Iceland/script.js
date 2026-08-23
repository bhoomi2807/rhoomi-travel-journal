window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });

  const tabs = document.querySelectorAll(".day-tab");
  const sections = document.querySelectorAll(".day-section");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      sections.forEach((section) => {
        section.hidden = filter !== "all" && section.dataset.day !== filter;
      });

      if (filter !== "all") {
        document.querySelector(`[data-day="${filter}"]`).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  document.getElementById("printBtn")?.addEventListener("click", () => window.print());
});
