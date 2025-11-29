'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn) sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables (optional feature)
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

// add click event to all modal items if modal exists
if (testimonialsItem.length && modalContainer && modalImg && modalTitle && modalText) {
  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      const avatar = this.querySelector("[data-testimonials-avatar]");
      const title = this.querySelector("[data-testimonials-title]");
      const text = this.querySelector("[data-testimonials-text]");
      if (avatar && modalImg) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt || "avatar";
      }
      if (title && modalTitle) modalTitle.innerHTML = title.innerHTML;
      if (text && modalText) modalText.innerHTML = text.innerHTML;
      testimonialsModalFunc();
    });
  });
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
if (selectItems.length && select && selectValue) {
  selectItems.forEach(item => item.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  }));
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
if (filterBtn.length) {
  let lastClickedBtn = filterBtn[0];
  filterBtn.forEach(btn => btn.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  }));
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (form && formInputs.length && formBtn) {
  formInputs.forEach(input => input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  }));
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link — use data-target when present, otherwise fallback to inner text
if (navigationLinks.length && pages.length) {
  navigationLinks.forEach(link => link.addEventListener('click', function () {
    const targetPage = this.dataset.target || this.innerHTML.toLowerCase();
    // activate matching page
    pages.forEach(page => {
      if (page.dataset.page === targetPage) page.classList.add('active'); else page.classList.remove('active');
    });
    // update nav active states
    navigationLinks.forEach(l => {
      const pageForLink = l.dataset.target || l.innerHTML.toLowerCase();
      if (pageForLink === targetPage) l.classList.add('active'); else l.classList.remove('active');
    });
    window.scrollTo(0, 0);
  }));
}

// CV handling removed (CV nav/page deleted)

// --------------------
// Blog (markdown) loader
// --------------------
const postsListEl = document.getElementById('posts-list');
const postContentEl = document.getElementById('post-content');

if (postsListEl && postContentEl) {
  fetch('./Files/blogs/posts.json')
    .then(resp => resp.json())
    .then(posts => {
      posts.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'post-link';
        btn.textContent = p.title;
        btn.dataset.file = p.file;
        btn.addEventListener('click', () => loadPost(p.file));
        postsListEl.appendChild(btn);
      });
    })
    .catch(err => console.error('Failed to load posts.json', err));

  function loadPost(file) {
    fetch(`./Files/blogs/${file}`)
      .then(r => r.text())
      .then(md => {
        if (window.marked) {
          postContentEl.innerHTML = marked.parse(md);
        } else {
          postContentEl.textContent = md;
        }
        window.scrollTo(0, 0);
        // enter full-page mode
        document.body.classList.add('full-post');
        // add back button if not exists
        if (!document.getElementById('post-back-btn')) {
          const back = document.createElement('button');
          back.id = 'post-back-btn';
          back.className = 'post-back-btn';
          back.innerHTML = '← 返回博客列表';
          back.addEventListener('click', exitFullPost);
          postContentEl.insertAdjacentElement('afterbegin', back);
        }
      })
      .catch(err => { postContentEl.textContent = '无法加载文章。'; console.error(err); });
  }
}

function exitFullPost() {
  // remove full page class
  document.body.classList.remove('full-post');
  // remove back button
  const back = document.getElementById('post-back-btn');
  if (back) back.remove();
  // clear post content (optional) and show blog list again
  if (postContentEl) postContentEl.innerHTML = '';
  // ensure blog page is active
  const pages = document.querySelectorAll('[data-page]');
  pages.forEach(p => { if (p.dataset.page === 'blog') p.classList.add('active'); else p.classList.remove('active'); });
  // scroll to blog section top
  window.scrollTo(0, 0);
}