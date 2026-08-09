/**
 * LearnSphere Premium JS Engine
 * Core interactions, animations, and states
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarAuth();
  initRouteGuards();
  initLoadingScreen();
  initMouseGlow();
  initStickyNavbar();
  initMobileMenu();
  initCounters();
  initCourseHoverGlow();
  initWhyChooseUsConsole();
  initTestimonialCarousel();
  initPricingToggle();
  initScrollReveal();
  initNewsletterForm();
  initEnrollButtons();
});

/* --- 1. Loading Screen --- */
function initLoadingScreen() {
  const loader = document.querySelector('.loading-screen');
  if (loader) {
    // Let the loading animations run, then hide gracefully
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1500);
  }
}

/* --- 2. Mouse Glow Tracking --- */
function initMouseGlow() {
  const glow = document.createElement('div');
  glow.className = 'mouse-glow';
  document.body.appendChild(glow);

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth out glow tracking using requestAnimationFrame (ease)
  function updateGlow() {
    const dx = mouseX - glowX;
    const dy = mouseY - glowY;
    
    glowX += dx * 0.1;
    glowY += dy * 0.1;

    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;

    requestAnimationFrame(updateGlow);
  }
  updateGlow();

  // Subtle hover feedback for premium feel
  const interactables = document.querySelectorAll('a, button, .glass-card, .course-card');
  interactables.forEach(item => {
    item.addEventListener('mouseenter', () => {
      glow.style.width = '550px';
      glow.style.height = '550px';
    });
    item.addEventListener('mouseleave', () => {
      glow.style.width = '400px';
      glow.style.height = '400px';
    });
  });
}

/* --- 3. Sticky Navbar --- */
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

/* --- 4. Mobile Menu --- */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const menu = document.querySelector('.mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('active')) {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  }
}

/* --- 5. Animated Counter Stats --- */
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const endValue = parseInt(target.getAttribute('data-target'), 10);
        const suffix = target.getAttribute('data-suffix') || '';
        let startValue = 0;
        const duration = 1500; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsedTime = currentTime - startTime;
          if (elapsedTime < duration) {
            const progress = elapsedTime / duration;
            // Ease-out quad formula
            const easeProgress = progress * (2 - progress);
            const currentValue = Math.floor(easeProgress * endValue);
            target.textContent = currentValue + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = endValue + suffix;
          }
        }
        requestAnimationFrame(updateCounter);
        observer.unobserve(target); // Only count once
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* --- 6. Course Card Glow Effects --- */
function initCourseHoverGlow() {
  const cards = document.querySelectorAll('.course-card, .glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update dynamic border-glow gradients on hover
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* --- 7. Why Choose Us Console Simulation --- */
function initWhyChooseUsConsole() {
  const consoleLines = document.querySelectorAll('.console-line');
  if (consoleLines.length === 0) return;

  let currentLine = 0;

  function typeNextLine() {
    if (currentLine < consoleLines.length) {
      consoleLines[currentLine].classList.add('active');
      currentLine++;
      setTimeout(typeNextLine, 1200);
    } else {
      // Loop simulator - reset after 6 seconds
      setTimeout(() => {
        consoleLines.forEach(line => line.classList.remove('active'));
        currentLine = 0;
        typeNextLine();
      }, 6000);
    }
  }

  // Trigger console animation when scrolling into view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      typeNextLine();
      observer.unobserve(entries[0].target);
    }
  }, { threshold: 0.3 });

  const consoleContainer = document.querySelector('.showcase-console');
  if (consoleContainer) {
    observer.observe(consoleContainer);
  }
}

/* --- 8. Student Testimonial Carousel --- */
function initTestimonialCarousel() {
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.carousel-nav-btn.prev');
  const nextBtn = document.querySelector('.carousel-nav-btn.next');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (!track || slides.length === 0) return;

  let slideIndex = 0;
  const slideCount = slides.length;

  // Create carousel dots dynamically
  slides.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      goToSlide(idx);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.carousel-dot');

  function updateSlidePosition() {
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach((dot, idx) => {
      if (idx === slideIndex) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }

  function goToSlide(index) {
    slideIndex = index;
    updateSlidePosition();
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlidePosition();
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Auto scroll testimonials
  let autoplay = setInterval(nextSlide, 8000);

  const container = document.querySelector('.testimonial-carousel-container');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(autoplay));
    container.addEventListener('mouseleave', () => autoplay = setInterval(nextSlide, 8000));
  }
}

/* --- 9. Pricing Plan Billing Switcher --- */
function initPricingToggle() {
  const switchBox = document.querySelector('.switch-box');
  const labels = document.querySelectorAll('.pricing-label');
  const amounts = document.querySelectorAll('.pricing-amount');

  if (!switchBox) return;

  switchBox.addEventListener('click', () => {
    const isYearly = switchBox.classList.toggle('active');
    
    labels.forEach(lbl => lbl.classList.toggle('active'));

    amounts.forEach(amt => {
      const monthlyPrice = parseInt(amt.getAttribute('data-monthly'), 10);
      const yearlyPrice = parseInt(amt.getAttribute('data-yearly'), 10);
      const suffix = amt.querySelector('span');

      let targetVal = isYearly ? yearlyPrice : monthlyPrice;
      
      // Animated count transition on pricing change
      let currentVal = isYearly ? monthlyPrice : yearlyPrice;
      const step = isYearly ? Math.ceil((yearlyPrice - monthlyPrice) / 10) : Math.floor((monthlyPrice - yearlyPrice) / 10);
      
      let steps = 0;
      const interval = setInterval(() => {
        currentVal += step;
        steps++;
        if (steps >= 10 || (isYearly && currentVal >= targetVal) || (!isYearly && currentVal <= targetVal)) {
          amt.innerHTML = `$${targetVal}<span>${isYearly ? '/yr' : '/mo'}</span>`;
          clearInterval(interval);
        } else {
          amt.innerHTML = `$${currentVal}<span>${isYearly ? '/yr' : '/mo'}</span>`;
        }
      }, 30);
    });
  });
}

/* --- 10. Scroll Reveals --- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  // Set initial invisible styles via JS to support non-JS graceful degradations
  reveals.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, entry.target.getAttribute('data-delay') || 0);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(reveal => observer.observe(reveal));
}

/* --- 11. Interactive Enroll Buttons & Simulated Modals --- */
function initEnrollButtons() {
  const enrollButtons = document.querySelectorAll('.enroll-trigger');
  
  // Dynamic modular modal creator
  enrollButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-course-title') || 'Enterprise Course';
      const price = btn.getAttribute('data-course-price') || '$49.00';
      
      createCheckoutModal(title, price);
    });
  });
}

function createCheckoutModal(title, price) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3 style="font-family: var(--font-display); font-weight: 700; font-size: 1.5rem;">Secure Course Checkout</h3>
        <button class="modal-close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="modal-body">
        <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-color);">
          <div>
            <h4 style="font-weight: 600; font-size: 1.1rem; color: #FFF; margin-bottom: 0.25rem;">${title}</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">LearnSphere Certified Syllabus • Lifetime Access</p>
          </div>
          <span style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--secondary-light);">${price}</span>
        </div>

        <form id="checkout-form">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <label style="font-size: 0.85rem; font-weight: 500; color: var(--text-secondary);">Full Name</label>
              <input type="text" required style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem 1rem; color: #FFF;" placeholder="Jane Doe">
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <label style="font-size: 0.85rem; font-weight: 500; color: var(--text-secondary);">Email Address</label>
              <input type="email" required style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem 1rem; color: #FFF;" placeholder="jane@example.com">
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem;">
            <label style="font-size: 0.85rem; font-weight: 500; color: var(--text-secondary);">Card Details (Demo - Safe)</label>
            <div style="position: relative; display: flex; align-items: center;">
              <input type="text" required maxlength="19" style="width: 100%; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem 1rem 0.85rem 3rem; color: #FFF;" placeholder="4111 2222 3333 4444">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position: absolute; left: 1rem; color: var(--text-secondary);"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1rem;">
            <span>Unlock Lifetime Access Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  
  // Open with nice timing
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);

  // Close handler
  const closeBtn = modal.querySelector('.modal-close');
  const close = () => {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 400);
  };
  
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  // Submission handler
  const form = modal.querySelector('#checkout-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = `<span>Processing Secure Vault Payment...</span>`;

    setTimeout(() => {
      btn.style.background = '#10B981';
      btn.innerHTML = `<span>Welcome Aboard! redirecting...</span>`;
      
      setTimeout(() => {
        close();
        window.location.href = '/pages/dashboard.html';
      }, 1500);
    }, 2000);
  });
}

/* --- 12. Newsletter Form Submission --- */
function initNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    const submitBtn = form.querySelector('.btn');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Securing...</span>`;

    setTimeout(() => {
      input.value = '';
      submitBtn.style.background = '#10B981';
      submitBtn.innerHTML = `<span>Subscribed! Check Inbox</span>`;
      
      setTimeout(() => {
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 3000);
    }, 1200);
  });
}

/* --- 13. Auth & Session State Engine --- */
const AUTH_KEY = 'learnsphere_user';

function getAuthUser() {
  try {
    const data = localStorage.getItem(AUTH_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Error reading auth state:', e);
    return null;
  }
}

function setAuthUser(user) {
  try {
    const userData = {
      name: user.name || 'Jane Doe',
      email: user.email || 'jane.doe@learnsphere.edu',
      isLoggedIn: true,
      loginTime: new Date().toISOString()
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
    return userData;
  } catch (e) {
    console.error('Error setting auth state:', e);
  }
}

function logoutUser() {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch (e) {
    console.error('Error clearing auth state:', e);
  }
  window.location.href = '/pages/login.html';
}

function getInitials(name) {
  if (!name) return 'JD';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function initNavbarAuth() {
  const user = getAuthUser();
  const isLoggedIn = user && user.isLoggedIn;

  // 1. Conditionally hide/show Dashboard navbar links in header/mobile menus
  const dashboardNavLinks = document.querySelectorAll('a[href*="dashboard.html"]');
  dashboardNavLinks.forEach(link => {
    // Exclude links inside .nav-actions or mobile action buttons which are handled separately
    if (link.closest('.nav-actions') || link.classList.contains('btn')) return;
    
    const parentLi = link.closest('li');
    if (isLoggedIn) {
      if (parentLi) parentLi.style.display = '';
      else link.style.display = '';
    } else {
      if (parentLi) parentLi.style.display = 'none';
      else link.style.display = 'none';
    }
  });

  // 2. Render desktop .nav-actions container
  const navActionsContainers = document.querySelectorAll('.nav-actions');
  navActionsContainers.forEach(container => {
    if (isLoggedIn) {
      const initials = getInitials(user.name);
      container.innerHTML = `
        <a href="/pages/dashboard.html" class="nav-link" id="user-profile-btn" style="padding: 0; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--secondary-color); color: var(--bg-color); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem;">${initials}</div>
          <span>${user.name}</span>
        </a>
        <button class="btn btn-secondary logout-trigger-btn" style="padding: 0.45rem 1rem; font-size: 0.85rem; cursor: pointer;">Sign Out</button>
      `;
    } else {
      container.innerHTML = `
        <a href="/pages/login.html" class="nav-link" style="padding: 0; font-weight: 600;">Log In</a>
        <a href="/pages/register.html" class="btn btn-primary"><span>Get Started</span></a>
      `;
    }
  });

  // 3. Render mobile menu action area
  const mobileMenus = document.querySelectorAll('.mobile-menu');
  mobileMenus.forEach(menu => {
    const actionBox = menu.querySelector('div[style*="flex-direction: column"]');
    if (actionBox) {
      if (isLoggedIn) {
        actionBox.innerHTML = `
          <a href="/pages/dashboard.html" class="btn btn-primary" style="width: 100%;">Dashboard (${user.name})</a>
          <button class="btn btn-secondary logout-trigger-btn" style="width: 100%; cursor: pointer;">Sign Out</button>
        `;
      } else {
        actionBox.innerHTML = `
          <a href="/pages/login.html" class="btn btn-secondary" style="width: 100%;">Log In</a>
          <a href="/pages/register.html" class="btn btn-primary" style="width: 100%;">Get Started</a>
        `;
      }
    }
  });

  // Attach logout listeners
  document.querySelectorAll('.logout-trigger-btn, .logout-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      logoutUser();
    });
  });
}

function updateDashboardUserDisplays(user) {
  if (!user || !user.name) return;
  const firstName = user.name.trim().split(' ')[0] || user.name;
  
  const welcomeEl = document.getElementById('dash-welcome-name');
  if (welcomeEl) welcomeEl.textContent = firstName;

  const certUserEl = document.getElementById('cert-modal-user-name');
  if (certUserEl) certUserEl.textContent = user.name;

  const userNameDisplays = document.querySelectorAll('.dash-user-name, #welcome-user-name');
  userNameDisplays.forEach(el => {
    el.textContent = user.name;
  });
}

function initRouteGuards() {
  const currentPath = window.location.pathname;
  const user = getAuthUser();
  const isLoggedIn = user && user.isLoggedIn;

  // Guard Dashboard: requires logged in user
  if (currentPath.includes('/pages/dashboard.html')) {
    if (!isLoggedIn) {
      window.location.href = '/pages/login.html';
      return;
    }

    // Update dashboard user name displays if present
    updateDashboardUserDisplays(user);
  }

  // Redirect logged in users away from login/register back to dashboard
  if (isLoggedIn && (currentPath.includes('/pages/login.html') || currentPath.includes('/pages/register.html'))) {
    window.location.href = '/pages/dashboard.html';
  }
}

// Global exposure for dynamic module calling
window.createCheckoutModal = createCheckoutModal;
window.getAuthUser = getAuthUser;
window.setAuthUser = setAuthUser;
window.logoutUser = logoutUser;
window.initNavbarAuth = initNavbarAuth;
window.updateDashboardUserDisplays = updateDashboardUserDisplays;

