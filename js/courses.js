/**
 * LearnSphere Course Catalog Engine
 * Interactive filtering, searching, sorting, duration filter, and pagination
 */

export const COURSES_DATA = [
  {
    id: 1,
    title: "Advanced Generative AI & Prompt Architectures",
    category: "Artificial Intelligence",
    level: "intermediate",
    durationHours: 18,
    duration: "18.5 hours",
    rating: 4.9,
    ratingCount: 1420,
    students: "12.4k",
    authorName: "Dr. Evelyn Thorne",
    authorTitle: "Senior AI Research Scientist",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    price: 89,
    oldPrice: 249,
    img: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop",
    description: "Master modern Large Language Model architectures, zero-shot and few-shot prompt design, LoRA fine-tuning, and RAG retrieval pipelines.",
    updatedDate: "July 2026",
    lessonsCount: 42
  },
  {
    id: 2,
    title: "Full-Stack Cloud Architecture Masterclass",
    category: "Cloud Engineering",
    level: "advanced",
    durationHours: 24,
    duration: "24.0 hours",
    rating: 4.8,
    ratingCount: 980,
    students: "8.2k",
    authorName: "Liam Sterling",
    authorTitle: "Principal Cloud Systems Architect",
    authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    price: 129,
    oldPrice: 349,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    description: "Architect high-availability Kubernetes clusters, serverless microservices, CI/CD auto-scaling pipelines, and multi-cloud security boundaries.",
    updatedDate: "June 2026",
    lessonsCount: 56
  },
  {
    id: 3,
    title: "UI/UX Design Systems & Micro-Interactions",
    category: "Interface Design",
    level: "beginner",
    durationHours: 4,
    duration: "4.5 hours",
    rating: 4.9,
    ratingCount: 2150,
    students: "15.1k",
    authorName: "Clara Fontaine",
    authorTitle: "Lead Product Designer at Voxel Studio",
    authorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    price: 49,
    oldPrice: 149,
    img: "https://images.unsplash.com/photo-1541462608141-27b2864e40c7?q=80&w=600&auto=format&fit=crop",
    description: "Design modular visual tokens, accessible high-contrast UI components, spring physics micro-animations, and responsive Figma tokens.",
    updatedDate: "August 2026",
    lessonsCount: 28
  },
  {
    id: 4,
    title: "Cyber Security & Cloud Vulnerability Analysis",
    category: "Cyber Security",
    level: "advanced",
    durationHours: 16,
    duration: "16.0 hours",
    rating: 4.9,
    ratingCount: 1120,
    students: "9.4k",
    authorName: "Marcus Vance",
    authorTitle: "Chief Information Security Officer",
    authorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    price: 99,
    oldPrice: 289,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    description: "Conduct ethical penetration testing, identify buffer overflows, audit IAM permission policies, and deploy zero-trust security postures.",
    updatedDate: "July 2026",
    lessonsCount: 38
  },
  {
    id: 5,
    title: "Practical Machine Learning & Deep Neural Networks",
    category: "Artificial Intelligence",
    level: "intermediate",
    durationHours: 12,
    duration: "12.0 hours",
    rating: 4.7,
    ratingCount: 890,
    students: "10.1k",
    authorName: "Dr. Evelyn Thorne",
    authorTitle: "Senior AI Research Scientist",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    price: 79,
    oldPrice: 199,
    img: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop",
    description: "Train PyTorch models, optimize gradient descent hyper-parameters, construct convolutional neural networks, and deploy real-time inference endpoints.",
    updatedDate: "May 2026",
    lessonsCount: 34
  },
  {
    id: 6,
    title: "Vite, React, & Modern Frontend Bundling",
    category: "Interface Design",
    level: "beginner",
    durationHours: 3,
    duration: "3.5 hours",
    rating: 4.6,
    ratingCount: 1340,
    students: "11.5k",
    authorName: "Clara Fontaine",
    authorTitle: "Lead Product Designer at Voxel Studio",
    authorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    price: 39,
    oldPrice: 99,
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    description: "Accelerate frontend workflows with Vite ESM dev servers, tree-shaking bundling strategies, React 18 concurrency, and CSS module optimization.",
    updatedDate: "June 2026",
    lessonsCount: 22
  },
  {
    id: 7,
    title: "Autonomous Agent Systems & LangChain Workflows",
    category: "Artificial Intelligence",
    level: "advanced",
    durationHours: 14,
    duration: "14.2 hours",
    rating: 4.9,
    ratingCount: 760,
    students: "7.8k",
    authorName: "Dr. Evelyn Thorne",
    authorTitle: "Senior AI Research Scientist",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    price: 109,
    oldPrice: 279,
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    description: "Build stateful multi-agent orchestrations, function calling tools, autonomous feedback loops, and persistent vector memory banks.",
    updatedDate: "August 2026",
    lessonsCount: 36
  },
  {
    id: 8,
    title: "DevOps Pipeline Automation & Infrastructure as Code",
    category: "Cloud Engineering",
    level: "intermediate",
    durationHours: 10,
    duration: "10.0 hours",
    rating: 4.8,
    ratingCount: 840,
    students: "6.9k",
    authorName: "Liam Sterling",
    authorTitle: "Principal Cloud Systems Architect",
    authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    price: 85,
    oldPrice: 219,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    description: "Automate cloud deployment with Terraform HCL, Ansible configuration modules, GitHub Actions matrix builds, and Prometheus monitoring.",
    updatedDate: "July 2026",
    lessonsCount: 30
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('catalog-course-grid');
  const searchInput = document.getElementById('catalog-search');
  const sortSelect = document.getElementById('catalog-sort');
  const displayedCount = document.getElementById('displayed-count');
  const totalCount = document.getElementById('total-count');
  const paginationContainer = document.getElementById('catalog-pagination');

  if (!grid) return;

  const ITEMS_PER_PAGE = 4;
  let currentPage = 1;
  let activeFilteredCourses = [...COURSES_DATA];

  totalCount.textContent = COURSES_DATA.length;

  function resetAllFilters() {
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.category-filter, .level-filter, .duration-filter').forEach(cb => {
      cb.checked = false;
    });
    if (sortSelect) sortSelect.value = 'popular';
    filterAndSortCourses();
  }

  function renderCourses(courses, page = 1) {
    grid.innerHTML = '';
    
    if (courses.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--surface-glass); border: 1px solid var(--border-color); border-radius: var(--radius-lg); backdrop-filter: blur(12px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.25); display: flex; align-items: center; justify-content: center; color: var(--secondary-color); margin-bottom: 0.25rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </div>
          <h3 style="font-family: var(--font-display); font-weight: 700; font-size: 1.35rem; color: #FFF; margin: 0;">No courses found matching your criteria</h3>
          <p style="color: var(--text-secondary); max-width: 440px; margin: 0; font-size: 0.95rem; line-height: 1.5;">
            We couldn't find any learning programs matching your active search query or filter selection. Try adjusting your parameters.
          </p>
          <button id="reset-filters-btn" class="btn btn-secondary" style="margin-top: 0.5rem; padding: 0.6rem 1.25rem; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            <span>Reset Filters</span>
          </button>
        </div>
      `;
      displayedCount.textContent = '0';
      if (paginationContainer) paginationContainer.innerHTML = '';

      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
      }
      return;
    }

    const totalPages = Math.ceil(courses.length / ITEMS_PER_PAGE);
    if (page > totalPages) page = totalPages;
    if (page < 1) page = 1;
    currentPage = page;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = courses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    paginatedItems.forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card';
      
      const levelClass = course.level === 'beginner' ? 'beginner' : course.level === 'intermediate' ? 'intermediate' : 'advanced';
      const levelLabel = course.level.charAt(0).toUpperCase() + course.level.slice(1);

      card.innerHTML = `
        <div class="course-thumbnail-container" onclick="window.location.href='/pages/course-details.html?id=${course.id}'" style="cursor: pointer;">
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
                <span style="font-size: 0.75rem; color: var(--text-secondary);">(${course.ratingCount})</span>
              </div>
            </div>
            <a href="/pages/course-details.html?id=${course.id}" class="course-title" style="font-size: 1.15rem; text-decoration: none; display: block;">${course.title}</a>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem; display: flex; align-items: center; gap: 1rem;">
              <span>⏱ ${course.duration}</span>
              <span>📚 ${course.lessonsCount} lessons</span>
            </div>
          </div>
          <div style="margin-top: 1.25rem;">
            <div class="course-author">
              <img src="${course.authorImg}" alt="${course.authorName}" class="author-img" />
              <div>
                <span class="author-name">${course.authorName}</span>
                <span style="display: block; font-size: 0.7rem; color: var(--text-secondary);">${course.students} scholars</span>
              </div>
            </div>
            <div class="course-footer">
              <div class="course-price">$${course.price}.00 <span>$${course.oldPrice}.00</span></div>
              <div style="display: flex; gap: 0.5rem;">
                <a href="/pages/course-details.html?id=${course.id}" class="btn btn-secondary" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">Details</a>
                <button class="course-enroll-btn enroll-trigger" data-course-title="${course.title}" data-course-price="$${course.price}.00">
                  <span>Enroll</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
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
        e.stopPropagation();
        const title = btn.getAttribute('data-course-title');
        const price = btn.getAttribute('data-course-price');
        if (typeof window.createCheckoutModal === 'function') {
          window.createCheckoutModal(title, price);
        } else {
          document.dispatchEvent(new CustomEvent('triggerCheckout', { detail: { title, price } }));
        }
      });
    });

    renderPagination(totalPages, currentPage);
  }

  function renderPagination(totalPages, page) {
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';

    if (totalPages <= 1) return;

    // Prev Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'btn btn-secondary';
    prevBtn.style.padding = '0.5rem 0.85rem';
    prevBtn.style.fontSize = '0.85rem';
    prevBtn.disabled = page === 1;
    prevBtn.innerHTML = `&larr; Prev`;
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        renderCourses(activeFilteredCourses, currentPage - 1);
        window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
      }
    });
    paginationContainer.appendChild(prevBtn);

    // Page Number Buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.style.width = '38px';
      pageBtn.style.height = '38px';
      pageBtn.style.borderRadius = 'var(--radius-sm)';
      pageBtn.style.fontFamily = 'var(--font-main)';
      pageBtn.style.fontSize = '0.85rem';
      pageBtn.style.fontWeight = '600';
      pageBtn.style.cursor = 'pointer';
      pageBtn.style.transition = 'var(--transition-fast)';

      if (i === page) {
        pageBtn.style.background = 'var(--secondary-color)';
        pageBtn.style.color = 'var(--bg-color)';
        pageBtn.style.border = '1px solid var(--secondary-color)';
      } else {
        pageBtn.style.background = 'var(--surface-glass)';
        pageBtn.style.color = 'var(--text-secondary)';
        pageBtn.style.border = '1px solid var(--border-color)';
      }

      pageBtn.textContent = i;
      pageBtn.addEventListener('click', () => {
        renderCourses(activeFilteredCourses, i);
        window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
      });
      paginationContainer.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-secondary';
    nextBtn.style.padding = '0.5rem 0.85rem';
    nextBtn.style.fontSize = '0.85rem';
    nextBtn.disabled = page === totalPages;
    nextBtn.innerHTML = `Next &rarr;`;
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        renderCourses(activeFilteredCourses, currentPage + 1);
        window.scrollTo({ top: grid.offsetTop - 120, behavior: 'smooth' });
      }
    });
    paginationContainer.appendChild(nextBtn);
  }

  // Live filter calculation
  function filterAndSortCourses() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    // Checked Categories
    const checkedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
      .map(cb => cb.value);

    // Checked Levels
    const checkedLevels = Array.from(document.querySelectorAll('.level-filter:checked'))
      .map(cb => cb.value);

    // Checked Duration
    const checkedDurations = Array.from(document.querySelectorAll('.duration-filter:checked'))
      .map(cb => cb.value);

    let filtered = COURSES_DATA.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(query) || 
                            course.category.toLowerCase().includes(query) ||
                            course.authorName.toLowerCase().includes(query);

      const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(course.category);
      const matchesLevel = checkedLevels.length === 0 || checkedLevels.includes(course.level);

      let matchesDuration = true;
      if (checkedDurations.length > 0) {
        matchesDuration = checkedDurations.some(dur => {
          if (dur === 'short') return course.durationHours < 5;
          if (dur === 'medium') return course.durationHours >= 5 && course.durationHours <= 15;
          if (dur === 'long') return course.durationHours > 15;
          return true;
        });
      }

      return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
    });

    // Sorting
    const sortBy = sortSelect ? sortSelect.value : 'popular';
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      // Popular
      filtered.sort((a, b) => parseFloat(b.students) - parseFloat(a.students));
    }

    activeFilteredCourses = filtered;
    renderCourses(activeFilteredCourses, 1);
  }

  const sidebarResetBtn = document.getElementById('sidebar-reset-filters');
  if (sidebarResetBtn) {
    sidebarResetBtn.addEventListener('click', resetAllFilters);
  }

  // Attach event listeners
  if (searchInput) searchInput.addEventListener('input', filterAndSortCourses);
  if (sortSelect) sortSelect.addEventListener('change', filterAndSortCourses);
  
  document.querySelectorAll('.category-filter').forEach(cb => {
    cb.addEventListener('change', filterAndSortCourses);
  });
  
  document.querySelectorAll('.level-filter').forEach(cb => {
    cb.addEventListener('change', filterAndSortCourses);
  });

  document.querySelectorAll('.duration-filter').forEach(cb => {
    cb.addEventListener('change', filterAndSortCourses);
  });

  // Initial render
  activeFilteredCourses = [...COURSES_DATA];
  renderCourses(activeFilteredCourses, 1);

  // Custom event listener for inter-module communication
  document.addEventListener('triggerCheckout', (e) => {
    const { title, price } = e.detail;
    if (typeof window.createCheckoutModal === 'function') {
      window.createCheckoutModal(title, price);
    }
  });
});
