// Gộp tất cả logic vào MỘT sự kiện DOMContentLoaded duy nhất
document.addEventListener('DOMContentLoaded', () => {

    // ======================================================
    // --- 1. LOGIC CHUNG & HEADER/PROGRESS BAR ---
    // ======================================================
    const header = document.querySelector('.main-header');
    const progressBar = document.querySelector('.scroll-progress-bar');
    const yearSpan = document.getElementById('currentYear');

    // Cập nhật năm hiện tại trong footer
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Cập nhật ngày cập nhật cuối cùng
    const lastUpdatedSpan = document.getElementById('lastUpdated');
    if (lastUpdatedSpan) {
        const now = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
        const day = now.getDate();
        const suffix = (day === 1 || day === 21 || day === 31) ? 'st' : 
                       (day === 2 || day === 22) ? 'nd' : 
                       (day === 3 || day === 23) ? 'rd' : 'th';
        lastUpdatedSpan.textContent = `${months[now.getMonth()]} ${day}${suffix} ${now.getFullYear()}`;
    }

    // Theo dõi sự kiện cuộn trang
    window.addEventListener('scroll', () => {
        // Hiển thị header khi cuộn xuống
        if (window.scrollY > 100) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }

        // Cập nhật thanh tiến trình
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    });


    // ======================================================
    // --- 2. LOGIC ANIMATION KHI CUỘN TỚI ---
    // ======================================================
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // NÂNG CẤP OBSERVER NÀY
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Nếu phần tử đang ở trong màn hình (isIntersecting là true)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
            // Nếu phần tử KHÔNG còn ở trong màn hình (isIntersecting là false)
            else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Kích hoạt khi 10% của phần tử đi vào hoặc đi ra
    });

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });


    // ======================================================
    // --- 3. LOGIC CHO THANH SKILL BAR (PHIÊN BẢN HYBRID) ---
    // ======================================================

    const skillsGrid = document.querySelector('.skills-grid');

    // Cập nhật lại toàn bộ hàm này
    function initializeSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');

        // Logic của Observer sẽ được thay đổi
        const skillObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const element = entry.target;
                const level = element.getAttribute('data-level');

                // Nếu phần tử đang ở trong màn hình (isIntersecting là true)
                if (entry.isIntersecting) {
                    // Thì chạy animation đến mức % của nó
                    element.style.width = level;
                } else {
                    // Ngược lại, nếu nó đã ra ngoài màn hình, RESET nó về 0%
                    element.style.width = '0%';
                }
            });
        }, {
            threshold: 0.5 // Kích hoạt khi 50% của thanh skill hiện ra
        });

        skillLevels.forEach(level => {
            skillObserver.observe(level);
        });
    }

    // Hàm hiển thị kỹ năng phiên bản nâng cao
    async function fetchAndDisplayHybridSkills() {
        if (!skillsGrid) return;

        // --- BƯỚC 1: ĐỊNH NGHĨA KỸ NĂNG CỐT LÕI VÀ ICON ---
        // Sử dụng Font Awesome icons thay vì hình ảnh
        const skillsMap = new Map([
            ['Lightroom', { name: 'Lightroom', percentage: 90, iconClass: 'fas fa-camera-retro' }],
            ['FreeFem++', { name: 'FreeFem++', percentage: 80, iconClass: 'fas fa-calculator' }],
            ['Final Cut Pro', { name: 'Final Cut Pro', percentage: 70, iconClass: 'fas fa-film' }],
            ['Matlab', { name: 'Matlab', percentage: 50, iconClass: 'fas fa-chart-line' }],
            ['Fenics', { name: 'Fenics', percentage: 50, iconClass: 'fas fa-cube' }],
            ['ParaView', { name: 'ParaView', percentage: 40, iconClass: 'fas fa-cube' }],
            ['Python', { name: 'Python', percentage: 40, iconClass: 'fab fa-python' }],
            ['C++', { name: 'C++', percentage: 40, iconClass: 'fas fa-code' }],
            ['HTML', { name: 'HTML', percentage: 30, iconClass: 'fab fa-html5' }],
            ['CSS', { name: 'CSS', percentage: 30, iconClass: 'fab fa-css3-alt' }],
            ['Jupyter Notebook', { name: 'Jupyter Notebook', percentage: 20, iconClass: 'fas fa-book-open' }],
            ['LaTeX', { name: 'LaTeX', percentage: 70, iconClass: 'fas fa-file-alt' }],
        ]);

        try {
            // --- BƯỚC 2: HIỂN THỊ KẾT QUẢ ---
            // Chuyển Map thành Array và sắp xếp theo % giảm dần
            const finalSkills = Array.from(skillsMap.values())
                .sort((a, b) => b.percentage - a.percentage);

            skillsGrid.innerHTML = ''; // Xóa thông báo loading

            finalSkills.forEach(skill => {
                const skillCardHTML = `
                <div class="skill-card glass-card animate-on-scroll">
                    <div class="skill-header">
                        <div class="skill-info">
                            <i class="${skill.iconClass} skill-icon-header"></i>
                            <span class="skill-name">${skill.name}</span>
                        </div>
                        <span class="skill-percentage">${skill.percentage}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-level" data-level="${skill.percentage}%"></div>
                    </div>
                </div>
            `;
                skillsGrid.innerHTML += skillCardHTML;
            });

            // Kích hoạt lại animation cho các card và thanh skill vừa tạo
            const newAnimatedElements = skillsGrid.querySelectorAll('.animate-on-scroll');
            newAnimatedElements.forEach(el => animationObserver.observe(el));
            initializeSkillBars();

        } catch (error) {
            console.error("Failed to fetch skills:", error);
            skillsGrid.innerHTML = '<p class="skills-loading">Could not load skills from GitHub. Displaying default skills.</p>';
            // Có thể gọi một hàm hiển thị danh sách mặc định ở đây nếu muốn
        }
    }

    // Gọi hàm chính để bắt đầu
    fetchAndDisplayHybridSkills();


    // ======================================================
    // --- 4. LOGIC CHO MUSIC PLAYER ---
    // ======================================================
    const audio = document.getElementById('audio-source');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const songCover = document.getElementById('song-cover');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');


    let currentSongIndex = 0;
    let isPlaying = false;

    function loadSong(song) {
        if (song) {
            songTitle.textContent = song.title;
            songArtist.textContent = song.artist;
            songCover.src = song.coverPath;
            audio.src = song.audioPath;
        }
    }

    function playSong() {
        isPlaying = true;
        playPauseBtn.classList.replace('fa-play', 'fa-pause');
        audio.play();
    }

    function pauseSong() {
        isPlaying = false;
        playPauseBtn.classList.replace('fa-pause', 'fa-play');
        audio.pause();
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(playlist[currentSongIndex]);
        playSong();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(playlist[currentSongIndex]);
        playSong();
    }


    // Gắn sự kiện cho các nút điều khiển nhạc
    if (playPauseBtn) playPauseBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
    if (nextBtn) nextBtn.addEventListener('click', nextSong);
    if (prevBtn) prevBtn.addEventListener('click', prevSong);
    if (audio) audio.addEventListener('ended', nextSong);

    // Tải bài hát đầu tiên
    loadSong(playlist[currentSongIndex]);


    // ======================================================
    // --- 5. LOGIC CHO ACTIVE NAV INDICATOR ---
    // ======================================================
    const navLinks = document.querySelectorAll('.main-nav a');
    const navIndicator = document.querySelector('.nav-indicator');
    const sections = document.querySelectorAll('main section');

    function moveIndicator(targetLink) {
    // Kiểm tra an toàn, nếu không có vạch chỉ báo thì không làm gì cả
    if (!navIndicator) return;

    // Nếu không có link mục tiêu (ví dụ: cuộn ra khỏi vùng các section), ẩn vạch chỉ báo đi
    if (!targetLink) {
        navIndicator.style.opacity = '0';
        return;
    }

    // === PHẦN LOGIC BỊ THIẾU ĐÂY ===
    // Lấy thông tin vị trí và kích thước của link mục tiêu
    const linkRect = targetLink.getBoundingClientRect();
    // Lấy thông tin vị trí của thanh điều hướng (để tính toán vị trí tương đối)
    const navRect = targetLink.parentElement.getBoundingClientRect();

    // Di chuyển và thay đổi kích thước của vạch chỉ báo
    navIndicator.style.width = `${linkRect.width}px`;
    navIndicator.style.left = `${linkRect.left - navRect.left}px`;
    navIndicator.style.opacity = '1';

    // Cập nhật class 'is-active' cho các link
    navLinks.forEach(link => link.classList.remove('is-active'));
    targetLink.classList.add('is-active');
}

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => moveIndicator(e.currentTarget));
    });

    const navObserverOptions = {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    };

    const navSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const correspondingLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
                moveIndicator(correspondingLink);
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navSectionObserver.observe(section);
    });

    // Xử lý khi tải lại trang, di chuyển indicator đến vị trí đúng
    setTimeout(() => {
        let activeSectionVisible = false;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                const correspondingLink = document.querySelector(`.main-nav a[href="#${section.id}"]`);
                moveIndicator(correspondingLink);
                activeSectionVisible = true;
            }
        });

        // Nếu không có section nào active (ví dụ đang ở đầu trang), active #hero
        if (!activeSectionVisible && window.scrollY < window.innerHeight / 2) {
            const initialLink = document.querySelector('.main-nav a[href="#hero"]');
            moveIndicator(initialLink);
        }
    }, 200);

    // ======================================================
    // --- BỔ SUNG: LOGIC CHO LIGHT/DARK THEME ---
    // ======================================================
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        // Function to set the theme
        function setTheme(theme) {
            if (theme === 'light-mode') {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
            } else {
                document.body.classList.remove('light-mode');
                localStorage.removeItem('theme');
            }
        }

        // Event listener for the button
        themeToggleBtn.addEventListener('click', () => {
            const isLight = document.body.classList.contains('light-mode');
            setTheme(isLight ? 'dark-mode' : 'light-mode');
        });

        // Apply initial theme on load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }

    // ======================================================
    // --- 7. FLOATING SHARE BUTTON ---
    // ======================================================
    initShareLinks();

}); // <-- Dấu ngoặc đóng của sự kiện DOMContentLoaded duy nhất

// ======== Social Share Functions (Global) ========
function initShareLinks() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    const weiboShare = document.getElementById('weibo-share');
    const twitterShare = document.getElementById('twitter-share');
    const facebookShare = document.getElementById('facebook-share');
    const linkedinShare = document.getElementById('linkedin-share');
    
    if (weiboShare) weiboShare.href = `https://service.weibo.com/share/share.php?url=${url}&title=${title}`;
    if (twitterShare) twitterShare.href = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    if (facebookShare) facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (linkedinShare) linkedinShare.href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}

function toggleShareMenu() {
    const floatingShare = document.querySelector('.floating-share');
    if (floatingShare) {
        floatingShare.classList.toggle('active');
    }
}

function shareToWechat() {
    const modal = document.getElementById('wechat-modal');
    if (modal) modal.classList.add('show');
}

function closeWechatModal() {
    copyLink();
    const modal = document.getElementById('wechat-modal');
    if (modal) modal.classList.remove('show');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const btn = document.querySelector('.share-btn.copy-link');
        if (btn) {
            btn.classList.add('copied');
            btn.innerHTML = '<i class="fas fa-check"></i>';
            
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = '<i class="fas fa-link"></i>';
            }, 2000);
        }
    });
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('wechat-modal');
    if (modal && e.target === modal) {
        modal.classList.remove('show');
    }
    
    // Close share menu when clicking outside
    const floatingShare = document.querySelector('.floating-share');
    if (floatingShare && !floatingShare.contains(e.target)) {
        floatingShare.classList.remove('active');
    }
});