// ======================================================
// 多语言支持 (i18n - Internationalization)
// ======================================================

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.education': 'Education',
        'nav.experiences': 'Experiences',
        'nav.projects': 'Projects',
        'nav.awards': 'Awards',
        'nav.publications': 'Publications',
        'nav.ongoing': 'Ongoing',
        'nav.blog': 'Blog',
        'nav.photography': 'Photography',
        'nav.resume': 'Resume',

        // Hero Section
        'hero.welcome': 'Welcome to my Portfolio',
        'hero.intro': 'I am a Ph.D. student in Computational Mathematics at the School of Mathematical Sciences, East China Normal University. My research focuses on numerical methods for partial differential equations, particularly the finite element method and its applications to coupled multi-physics problems. In addition to my academic pursuits, I have a strong interest in photography. Photography allows me to observe the world from different perspectives and fuels my creativity in both science and life.',
        'hero.job': 'PhD Student',

        // Profile Card
        'profile.location': 'Shanghai, China',
        'profile.birthday': '04.Oct.1999',
        'profile.university': 'East China Normal University',
        'profile.blog': 'Blog',
        'profile.photography': 'Photography',

        // About Section
        'about.badge': 'My personal story',
        'about.title': 'About Me',
        'about.status': 'Available for work',
        'about.research1': '<strong>Primary Research Areas:</strong> Computational fluid dynamics, Numerical solution of partial differential equations (PDEs), Finite element methods, Stabilized mixed finite element methods.',
        'about.research2': '<strong>Analysis of Coupled Systems:</strong> Numerical analysis and simulation of the time-dependent coupling model including Navier-Stokes equation, Stokes-Darcy System, Natural Convection Model, Magnetohydrodynamics (MHD) System, Chemotaxis–Navier-Stokes System.',
        'about.research3': '<strong>Models with Variable Density:</strong> The time-dependent coupling model with variable density including Navier-Stokes Equation with variable density, Natural Convection Model with variable density, Magnetohydrodynamics System with variable density, Ericksen-Leslie system with variable density.',
        'about.name': 'Name',
        'about.email': 'Email',
        'about.location': 'Location',
        'about.download': 'Download Resume',

        // Skills Section
        'skills.badge': 'Tools I Use',
        'skills.title': 'My Skills',
        'skills.programming': 'Programming',
        'skills.tools': 'Tools',
        'skills.languages': 'Languages',

        // Education Section
        'education.badge': 'My Academic Journey',
        'education.title': 'Education',

        // Experience Section
        'experiences.badge': 'Work & Research',
        'experiences.title': 'Experiences',

        // Projects Section
        'projects.badge': 'My Work',
        'projects.title': 'Projects',

        // Awards Section
        'awards.badge': 'Recognition',
        'awards.title': 'Honors & Awards',

        // Publications Section
        'publications.badge': 'Research Output',
        'publications.title': 'Publications',

        // Ongoing Section
        'ongoing.badge': 'In Progress',
        'ongoing.title': 'Ongoing Works',

        // Blog Section
        'blog.badge': 'Latest Articles',
        'blog.title': 'My Blog',
        'blog.viewall': 'View All 70+ Posts',
        'blog.read': 'Read More',

        // Photography Section
        'photography.badge': 'Capturing Moments',
        'photography.title': 'Photography',
        'photography.viewall': 'View All Albums',
        'photography.view': 'View Album',

        // Visitor Stats
        'visitor.title': 'Visitor Statistics',
        
        'visitor.stats': 'Statistics',
        'visitor.visitors': 'Visitors',
        'visitor.pageviews': 'Page Views',
        'visitor.map': 'Visitor Map',
        'visitor.note': '📊 Statistics will be available after deployment',

        // Footer
        'footer.quicklinks': 'Quick Links',
        'footer.connect': 'Connect with Me',
        'footer.copyright': 'All rights reserved.',
        'footer.updated': 'Last updated:',

        // Share
        'share.title': 'Share',
        'share.wechat': 'WeChat Share',
        'share.wechat.desc': 'Copy the link and share it with friends on WeChat',
        'share.copy': 'Copy Link & Close',
    },

    zh: {
        // Navigation
        'nav.home': '首页',
        'nav.about': '关于',
        'nav.skills': '技能',
        'nav.education': '教育',
        'nav.experiences': '经历',
        'nav.projects': '项目',
        'nav.awards': '荣誉',
        'nav.publications': '论文',
        'nav.ongoing': '进行中',
        'nav.blog': '博客',
        'nav.photography': '摄影',
        'nav.resume': '简历',

        // Hero Section
        'hero.welcome': '欢迎来到我的主页',
        'hero.intro': '我是华东师范大学数学科学学院计算数学专业的博士研究生。我的研究聚焦于流体动力学和多物理场系统中偏微分方程的数值分析，尤其强调有限元方法。在学术研究之外，我热爱摄影，摄影让我以不同视角观察世界，也激发了我在科学与生活中的创造力。',
        'hero.job': '博士研究生',

        // Profile Card
        'profile.location': '上海，中国',
        'profile.birthday': '1999年10月4日',
        'profile.university': '华东师范大学',
        'profile.blog': '博客',
        'profile.photography': '摄影',

        // About Section
        'about.badge': '我的故事',
        'about.title': '关于我',
        'about.status': '可接受工作机会',
        'about.research1': '<span style="color: #8e44ad; font-weight: bold;">数值方法与有限元分析。</span> 我的研究以流体动力学和多物理场系统中偏微分方程的数值分析为核心，重点关注有限元方法，尤其是不可压流的稳定化混合有限元格式。我的工作聚焦于数值稳定性、适定性与最优误差估计，特别关注时间相关问题。',
        'about.research2': '<span style="color: #8e44ad; font-weight: bold;">变密度与复杂流体模型。</span> 我也致力于变密度耦合模型的数值分析与模拟，这类模型因失去反对称性和引入额外的非线性输运效应而带来显著的理论与计算挑战。研究对象包括变密度Navier–Stokes方程、变密度自然对流模型、变密度磁流体动力学系统以及变密度Ericksen–Leslie液晶系统。',
        'about.research3': '<span style="color: #8e44ad; font-weight: bold;">时间相关多物理场耦合系统。</span> 我的研究还包括时间相关多物理场耦合系统的有限元格式设计与分析，如Navier–Stokes方程、Stokes–Darcy系统、自然对流模型、磁流体动力学（MHD）系统和趋化–Navier–Stokes模型。这些系统具有强非线性耦合和多场相互作用的特点。',
        'about.name': '姓名',
        'about.email': '邮箱',
        'about.location': '所在地',
        'about.download': '下载简历',

        // Skills Section
        'skills.badge': '我使用的工具',
        'skills.title': '专业技能',
        'skills.programming': '编程语言',
        'skills.tools': '工具',
        'skills.languages': '语言',

        // Education Section
        'education.badge': '我的学术之旅',
        'education.title': '教育背景',

        // Experience Section
        'experiences.badge': '工作与研究',
        'experiences.title': '工作经历',

        // Projects Section
        'projects.badge': '我的项目',
        'projects.title': '项目展示',

        // Awards Section
        'awards.badge': '荣誉认可',
        'awards.title': '荣誉与奖项',

        // Publications Section
        'publications.badge': '学术成果',
        'publications.title': '发表论文',

        // Ongoing Section
        'ongoing.badge': '进行中',
        'ongoing.title': '在投论文',

        // Blog Section
        'blog.badge': '最新文章',
        'blog.title': '我的博客',
        'blog.viewall': '查看全部 70+ 篇文章',
        'blog.read': '阅读更多',

        // Photography Section
        'photography.badge': '记录瞬间',
        'photography.title': '摄影作品',
        'photography.viewall': '查看全部相册',
        'photography.view': '查看相册',

        // Visitor Stats
        'visitor.title': '访客统计',
        
        'visitor.stats': '访问统计',
        'visitor.visitors': '访客数',
        'visitor.pageviews': '浏览量',
        'visitor.map': '访客地图',
        'visitor.note': '📊 统计数据在网站部署后自动生效',

        // Footer
        'footer.quicklinks': '快速链接',
        'footer.connect': '联系我',
        'footer.copyright': '保留所有权利。',
        'footer.updated': '最后更新：',

        // Share
        'share.title': '分享',
        'share.wechat': '微信分享',
        'share.wechat.desc': '请复制链接后，在微信中分享给好友',
        'share.copy': '复制链接并关闭',
    }
};

// 当前语言
let currentLang = localStorage.getItem('language') || 'en';

// 获取翻译
function t(key) {
    return translations[currentLang][key] || key;
}

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    applyTranslations();
    updateLangToggleButton();
}

// 切换语言（在中英文之间切换）
function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    switchLanguage(newLang);
}

// 更新语言切换按钮
function updateLangToggleButton() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.innerHTML = currentLang === 'en' 
            ? '<span class="lang-text">中</span>' 
            : '<span class="lang-text">EN</span>';
        langToggle.title = currentLang === 'en' ? '切换到中文' : 'Switch to English';
    }
}

// 应用翻译到页面
function applyTranslations() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        
        // 检查是否包含HTML标签
        if (translation.includes('<')) {
            el.innerHTML = translation;
        } else {
            el.textContent = translation;
        }
    });

    // 更新 placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // 更新 title 属性
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });

    // 更新 HTML lang 属性
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
}

// 初始化多语言
function initI18n() {
    applyTranslations();
    updateLangToggleButton();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initI18n);
