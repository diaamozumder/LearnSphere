/**
 * LearnSphere Course Catalog Engine
 * Interactive filtering, searching, and sorting
 */

const COURSES_DATA = [
  {
    id: 1,
    title: "Advanced Generative AI & Prompt Architectures",
    category: "Artificial Intelligence",
    level: "intermediate",
    rating: 4.9,
    students: "12.4k",
    authorName: "Dr. Evelyn Thorne",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    price: 89,
    oldPrice: 249,
    img: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Full-Stack Cloud Architecture Masterclass",
    category: "Cloud Engineering",
    level: "advanced",
    rating: 4.8,
    students: "8.2k",
    authorName: "Liam Sterling",
    authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    price: 129,
    oldPrice: 349,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "UI/UX Design Systems & Micro-Interactions",
    category: "Interface Design",
    level: "beginner",
    rating: 4.9,
    students: "15.1k",
    authorName: "Clara Fontaine",
    authorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    price: 49,
    oldPrice: 149,
    img: "https://images.unsplash.com/photo-1541462608141-27b2864e40c7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Cyber Security & Cloud Vulnerability Analysis",
    category: "Cyber Security",
    level: "advanced",
    rating: 4.9,
    students: "9.4k",
    authorName: "Marcus Vance",
    authorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    price: 99,
    oldPrice: 289,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Practical Machine Learning & Deep Neural Networks",
    category: "Artificial Intelligence",
    level: "intermediate",
    rating: 4.7,
    students: "10.1k",
    authorName: "Dr. Evelyn Thorne",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    price: 79,
    oldPrice: 199,
    img: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Vite, React, & Modern Frontend Bundling",
    category: "Interface Design",
    level: "beginner",
    rating: 4.6,
    students: "11.5k",
    authorName: "Clara Fontaine",
    authorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    price: 39,
    oldPrice: 99,
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('catalog-course-grid');
  const searchInput = document.getElementById('catalog-search');
  const sortSelect = document.getElementById('catalog-sort');
  const displayedCount = document.getElementById('displayed-count');
  const totalCount = document.getElementById('total-count');

  if (!grid) return;

  totalCount.textContent = COURSES_DATA.length;

  function renderCourses(courses) {
    grid.innerHTML = '';
    
    if (courses.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: span 2; text-align: center; padding: 4rem; color: var(--text-secondary);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 1rem; color: var(--text-secondary);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <h3 style="font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; color: #FFF; margin-bottom: 0.5rem;">No matching programs found</h3>
          <p>Try refining your active filters or query parameters.</p>
        </div>
      `;
      displayedCount.textContent = '0';
      return;
    }

    courses.forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card';
      
      const levelClass = course.level === 'beginner' ? 'beginner' : course.level === 'intermediate' ? 'intermediate' : 'advanced';
      const levelLabel = course.level.charAt(0).toUpperCase() + course.level.slice(1);

      card.innerHTML = `
        <div class="course-thumbnail-container">
          <img src="${course.img}" alt="${course.title}" class="course-thumbnail" />
          <div class="course-thumb-overlay">
            <span class="course-level ${levelClass}">${levelLabel}</span>
          </div>
        </div>
        <div class="course-body">
          <div>
            <div class="course-meta">
              <span class="course-tag">${course.category}</span>
              <div class="course-rating">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>${course.rating}</span>
              </div>
            </div>
            <h3 class="course-title" style="font-size: 1.15rem;">${course.title}</h3>
          </div>
          <div>
            <div class="course-author">
              <img src="${course.authorImg}" alt="${course.authorName}" class="author-img" />
              <span class="author-name">${course.authorName}</span>
            </div>
            <div class="course-footer">
              <div class="course-price">$${course.price}.00 <span>$${course.oldPrice}.00</span></div>
              <button class="course-enroll-btn enroll-trigger" data-course-title="${course.title}" data-course-price="$${course.price}.00">
                <span>Enroll</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    displayedCount.textContent = courses.length;

    // Setup hover light tracks for new cards
    const hoverCards = grid.querySelectorAll('.course-card');
    hoverCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // Re-bind dynamically generated buttons to checkout modal injector (defined in main.js)
    const newTriggers = grid.querySelectorAll('.enroll-trigger');
    newTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = btn.getAttribute('data-course-title');
        const price = btn.getAttribute('data-course-price');
        if (typeof window.createCheckoutModal === 'function') {
          window.createCheckoutModal(title, price);
        } else {
          // Fallback if main.js is loading in separate module space
          const mainScript = document.createElement('script');
          import('/js/main.js').then((m) => {
            // Safe execution
            if (document.body.dispatchEvent) {
              const event = new CustomEvent('triggerCheckout', { detail: { title, price } });
              document.dispatchEvent(event);
            }
          });
        }
      });
    });
  }

  // Live filter calculation
  function filterAndSortCourses() {
    const query = searchInput.value.toLowerCase().trim();
    
    // Checked Categories
    const checkedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
      .map(cb => cb.value);

    // Checked Levels
    const checkedLevels = Array.from(document.querySelectorAll('.level-filter:checked'))
      .map(cb => cb.value);

    let filtered = COURSES_DATA.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(query) || 
                            course.category.toLowerCase().includes(query) ||
                            course.authorName.toLowerCase().includes(query);

      const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(course.category);
      const matchesLevel = checkedLevels.length === 0 || checkedLevels.includes(course.level);

      return matchesSearch && matchesCategory && matchesLevel;
    });

    // Sorting
    const sortBy = sortSelect.value;
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      // Popular (by ID or hardcoded student count logic)
      filtered.sort((a, b) => parseFloat(b.students) - parseFloat(a.students));
    }

    renderCourses(filtered);
  }

  // Attach event listeners
  searchInput.addEventListener('input', filterAndSortCourses);
  sortSelect.addEventListener('change', filterAndSortCourses);
  
  document.querySelectorAll('.category-filter').forEach(cb => {
    cb.addEventListener('change', filterAndSortCourses);
  });
  
  document.querySelectorAll('.level-filter').forEach(cb => {
    cb.addEventListener('change', filterAndSortCourses);
  });

  // Initial render
  renderCourses(COURSES_DATA);

  // Custom event listener for inter-module communication
  document.addEventListener('triggerCheckout', (e) => {
    const { title, price } = e.detail;
    if (window.createCheckoutModal) {
      window.createCheckoutModal(title, price);
    }
  });
});
