console.log("Rabbio website loaded");

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const revealElements = document.querySelectorAll("[data-reveal]");
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  revealElements.forEach(el => revealObserver.observe(el));

  const dateButtons = document.querySelectorAll('.booking-calendar .date');
  const selectedDateDisplay = document.getElementById('selected-date-display');

  dateButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dateButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      if (selectedDateDisplay) {
        selectedDateDisplay.innerText = `Selected: May ${btn.innerText}, 2026`;
      }
    });
  });

  const timeButtons = document.querySelectorAll('.time-btn');
  timeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isConfirmed = btn.classList.contains('confirm');
      
      timeButtons.forEach(b => b.classList.remove('confirm'));
      
      if (!isConfirmed) {
        btn.classList.add('confirm');
      } else {
        alert("Meeting confirmed for " + (selectedDateDisplay ? selectedDateDisplay.innerText : "selected date"));
      }
    });
  });
});