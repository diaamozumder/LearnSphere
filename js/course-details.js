/**
 * LearnSphere Course Details Interactivity Engine
 * Dynamic course parameter resolution, accordion handlers, modal triggers
 */

import { COURSES_DATA } from './courses.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Resolve Course ID from URL search params
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = parseInt(urlParams.get('id') || '1', 10);

  const course = COURSES_DATA.find(c => c.id === courseId) || COURSES_DATA[0];

  // Populate dynamic DOM fields
  document.title = `${course.title} • LearnSphere`;
  
  const breadcrumbTitle = document.getElementById('breadcrumb-course-title');
  if (breadcrumbTitle) breadcrumbTitle.textContent = course.title;

  const categoryBadge = document.getElementById('course-category-badge');
  if (categoryBadge) categoryBadge.textContent = course.category;

  const levelBadge = document.getElementById('course-level-badge');
  if (levelBadge) {
    const levelLabel = course.level.charAt(0).toUpperCase() + course.level.slice(1) + ' Track';
    levelBadge.textContent = levelLabel;
    levelBadge.className = `course-level ${course.level}`;
  }

  const mainTitle = document.getElementById('course-main-title');
  if (mainTitle) mainTitle.textContent = course.title;

  const mainDesc = document.getElementById('course-main-desc');
  if (mainDesc) mainDesc.textContent = course.description;

  const ratingVal = document.getElementById('course-rating-val');
  if (ratingVal) ratingVal.textContent = course.rating;

  const ratingCount = document.getElementById('course-rating-count');
  if (ratingCount) ratingCount.textContent = `(${course.ratingCount.toLocaleString()} ratings)`;

  const studentsCount = document.getElementById('course-students-count');
  if (studentsCount) studentsCount.textContent = `${course.students} Scholars Enrolled`;

  const durationVal = document.getElementById('course-duration-val');
  if (durationVal) durationVal.textContent = `${course.duration} Total Duration`;

  const instructorImg = document.getElementById('instructor-img');
  if (instructorImg) instructorImg.src = course.authorImg;

  const instructorName = document.getElementById('instructor-name');
  if (instructorName) instructorName.textContent = course.authorName;

  // Instructor section
  const instructorBioImg = document.getElementById('instructor-bio-img');
  if (instructorBioImg) instructorBioImg.src = course.authorImg;

  const instructorBioName = document.getElementById('instructor-bio-name');
  if (instructorBioName) instructorBioName.textContent = course.authorName;

  const instructorBioTitle = document.getElementById('instructor-bio-title');
  if (instructorBioTitle) instructorBioTitle.textContent = course.authorTitle || 'Senior Technical Specialist';

  // Preview Image
  const previewThumb = document.getElementById('course-preview-thumb');
  if (previewThumb) previewThumb.src = course.img;

  // Sticky Card Details
  const stickyImg = document.getElementById('sticky-course-img');
  if (stickyImg) stickyImg.src = course.img;

  const stickyPriceMain = document.getElementById('sticky-price-main');
  if (stickyPriceMain) stickyPriceMain.textContent = `$${course.price}.00`;

  const stickyPriceOld = document.getElementById('sticky-price-old');
  if (stickyPriceOld) stickyPriceOld.textContent = `$${course.oldPrice}.00`;

  const stickyHoursFeature = document.getElementById('sticky-hours-feature');
  if (stickyHoursFeature) stickyHoursFeature.textContent = `${course.duration} on-demand video`;

  // 2. Accordions interactivity
  const setupAccordionGroup = (containerId) => {
    const items = document.querySelectorAll(`#${containerId} .accordion-item`);
    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      if (header) {
        header.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          item.classList.toggle('active', !isActive);
        });
      }
    });
  };

  setupAccordionGroup('curriculum-accordion-list');
  setupAccordionGroup('faq-accordion-list');

  // Toggle All Accordion button
  const toggleAllBtn = document.getElementById('toggle-all-accordion');
  if (toggleAllBtn) {
    let isAllExpanded = false;
    toggleAllBtn.addEventListener('click', () => {
      isAllExpanded = !isAllExpanded;
      const items = document.querySelectorAll('#curriculum-accordion-list .accordion-item');
      items.forEach(item => {
        if (isAllExpanded) item.classList.add('active');
        else item.classList.remove('active');
      });
      toggleAllBtn.textContent = isAllExpanded ? 'Collapse All' : 'Expand All';
    });
  }

  // 3. Preview Video Modal
  const videoModal = document.getElementById('preview-video-modal');
  const videoElement = document.getElementById('modal-video-element');
  const playPreviewBtn = document.getElementById('play-preview-btn');
  const stickyPlayBtn = document.getElementById('sticky-play-btn');
  const previewClose = document.getElementById('preview-modal-close');

  const openVideoModal = () => {
    if (videoModal && videoElement) {
      videoModal.classList.add('active');
      videoElement.play().catch(e => console.log('Autoplay deferred'));
    }
  };

  const closeVideoModal = () => {
    if (videoModal && videoElement) {
      videoElement.pause();
      videoModal.classList.remove('active');
    }
  };

  if (playPreviewBtn) playPreviewBtn.addEventListener('click', openVideoModal);
  if (stickyPlayBtn) stickyPlayBtn.addEventListener('click', openVideoModal);
  if (previewClose) previewClose.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // 4. Enroll Button Trigger (Connects to Checkout Modal from main.js)
  const enrollBtn = document.getElementById('main-enroll-now-btn');
  if (enrollBtn) {
    enrollBtn.addEventListener('click', () => {
      if (typeof window.createCheckoutModal === 'function') {
        window.createCheckoutModal(course.title, `$${course.price}.00`);
      } else {
        document.dispatchEvent(new CustomEvent('triggerCheckout', {
          detail: { title: course.title, price: `$${course.price}.00` }
        }));
      }
    });
  }

  // Wishlist bookmark feedback
  const wishlistBtn = document.getElementById('add-wishlist-btn');
  if (wishlistBtn) {
    let bookmarked = false;
    wishlistBtn.addEventListener('click', () => {
      bookmarked = !bookmarked;
      if (bookmarked) {
        wishlistBtn.innerHTML = `<span>✓ Saved to Wishlist</span>`;
        wishlistBtn.style.color = '#34D399';
        wishlistBtn.style.borderColor = 'rgba(52, 211, 153, 0.4)';
      } else {
        wishlistBtn.innerHTML = `<span>Bookmark to Wishlist</span>`;
        wishlistBtn.style.color = '';
        wishlistBtn.style.borderColor = '';
      }
    });
  }

  // 5. Render Related Courses
  const relatedGrid = document.getElementById('related-courses-grid');
  if (relatedGrid) {
    const relatedCourses = COURSES_DATA.filter(c => c.id !== course.id).slice(0, 2);
    relatedGrid.innerHTML = '';

    relatedCourses.forEach(rel => {
      const card = document.createElement('div');
      card.className = 'course-card';
      const levelClass = rel.level === 'beginner' ? 'beginner' : rel.level === 'intermediate' ? 'intermediate' : 'advanced';

      card.innerHTML = `
        <div class="course-thumbnail-container" onclick="window.location.href='/pages/course-details.html?id=${rel.id}'" style="cursor: pointer;">
          <img src="${rel.img}" alt="${rel.title}" class="course-thumbnail" />
          <div class="course-thumb-overlay">
            <span class="course-level ${levelClass}">${rel.level}</span>
          </div>
        </div>
        <div class="course-body">
          <div>
            <div class="course-meta">
              <span class="course-tag">${rel.category}</span>
              <div class="course-rating">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>${rel.rating}</span>
              </div>
            </div>
            <a href="/pages/course-details.html?id=${rel.id}" class="course-title" style="font-size: 1.05rem; text-decoration: none;">${rel.title}</a>
          </div>
          <div style="margin-top: 1rem;">
            <div class="course-footer">
              <div class="course-price">$${rel.price}.00 <span>$${rel.oldPrice}.00</span></div>
              <a href="/pages/course-details.html?id=${rel.id}" class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;">View</a>
            </div>
          </div>
        </div>
      `;

      relatedGrid.appendChild(card);
    });
  }
});
