// عناصر DOM
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const navbar = document.getElementById('navbar');
const stageModal = document.getElementById('stageModal');
const semesterModal = document.getElementById('semesterModal');
const modalClose = document.getElementById('modalClose');
const semesterModalClose = document.getElementById('semesterModalClose');

// عناصر الفلترة
const filterStage = document.getElementById('filterStage');
const filterSemester = document.getElementById('filterSemester');
const filterLesson = document.getElementById('filterLesson');
const goToLessonBtn = document.getElementById('goToLesson');

// متغير لتخزين رابط الدرس المختار
let selectedLessonLink = '';

// فتح وإغلاق القائمة المحمولة
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});

// إغلاق القائمة عند النقر على الروابط
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// تأثير التمرير للـ Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('open') && 
        !mobileMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('open');
    }
});

// === نظام الفلترة السريعة ===

// تحميل المراحل في قائمة الفلترة
function loadFilterStages() {
    filterStage.innerHTML = '<option value="">-- اختر المرحلة --</option>';
    stagesData.forEach(stage => {
        const option = document.createElement('option');
        option.value = stage.id;
        option.textContent = stage.name;
        filterStage.appendChild(option);
    });
}

// عند اختيار مرحلة
filterStage.addEventListener('change', function() {
    const stageId = parseInt(this.value);
    
    if (stageId) {
        const selectedStage = stagesData.find(s => s.id === stageId);
        
        // تحميل الفصول
        filterSemester.innerHTML = '<option value="">-- اختر الفصل --</option>';
        selectedStage.semesters.forEach(semester => {
            const option = document.createElement('option');
            option.value = `${stageId}-${semester.id}`;
            option.textContent = semester.name;
            filterSemester.appendChild(option);
        });
        
        filterSemester.disabled = false;
        filterLesson.disabled = true;
        filterLesson.innerHTML = '<option value="">-- اختر الدرس --</option>';
        goToLessonBtn.disabled = true;
    } else {
        filterSemester.disabled = true;
        filterLesson.disabled = true;
        filterSemester.innerHTML = '<option value="">-- اختر الفصل --</option>';
        filterLesson.innerHTML = '<option value="">-- اختر الدرس --</option>';
        goToLessonBtn.disabled = true;
    }
});

// عند اختيار فصل
filterSemester.addEventListener('change', function() {
    const value = this.value;
    
    if (value) {
        const [stageId, semesterId] = value.split('-').map(Number);
        const selectedStage = stagesData.find(s => s.id === stageId);
        const selectedSemester = selectedStage.semesters.find(sem => sem.id === semesterId);
        
        // تحميل الدروس
        filterLesson.innerHTML = '<option value="">-- اختر الدرس --</option>';
        selectedSemester.lessons.forEach(lesson => {
            const option = document.createElement('option');
            option.value = lesson.videoLink;
            option.textContent = lesson.name;
            filterLesson.appendChild(option);
        });
        
        filterLesson.disabled = false;
        goToLessonBtn.disabled = true;
    } else {
        filterLesson.disabled = true;
        filterLesson.innerHTML = '<option value="">-- اختر الدرس --</option>';
        goToLessonBtn.disabled = true;
    }
});

// عند اختيار درس
filterLesson.addEventListener('change', function() {
    selectedLessonLink = this.value;
    
    if (selectedLessonLink) {
        goToLessonBtn.disabled = false;
    } else {
        goToLessonBtn.disabled = true;
    }
});

// عند الضغط على زر الذهاب للمحاضرة
goToLessonBtn.addEventListener('click', function() {
    if (selectedLessonLink) {
        window.open(selectedLessonLink, '_blank');
    }
});

// === عرض المراحل الدراسية ===

function displayStages() {
    const stagesGrid = document.getElementById('stagesGrid');
    stagesGrid.innerHTML = '';

    stagesData.forEach(stage => {
        const stageCard = document.createElement('div');
        stageCard.className = 'stage-card shine-effect';
        stageCard.innerHTML = `
            <div class="stage-icon">${stage.icon}</div>
            <h3>${stage.name}</h3>
            <p>${stage.semesters.length} فصول دراسية</p>
            <div class="stage-info">
                <i class="fas fa-chevron-left"></i>
                <span>عرض التفاصيل</span>
            </div>
        `;
        
        stageCard.addEventListener('click', () => {
            openStageModal(stage);
        });

        stagesGrid.appendChild(stageCard);
    });
}

// فتح نافذة تفاصيل المرحلة
function openStageModal(stage) {
    const modalTitle = document.getElementById('modalTitle');
    const semestersGrid = document.getElementById('semestersGrid');
    
    modalTitle.textContent = stage.name;
    semestersGrid.innerHTML = '';

    stage.semesters.forEach(semester => {
        const semesterCard = document.createElement('div');
        semesterCard.className = 'semester-card shine-effect';
        semesterCard.innerHTML = `
            <div class="semester-number">${semester.name}</div>
            <h3>${semester.name}</h3>
            <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--color-accent);">
                    <i class="fas fa-video"></i>
                    <span>دروس فيديو (${semester.lessons.length})</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--color-accent);">
                    <i class="fas fa-file-alt"></i>
                    <span>ملازم</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--color-accent);">
                    <i class="fas fa-book-open"></i>
                    <span>امتحانات</span>
                </div>
            </div>
        `;
        
        semesterCard.addEventListener('click', () => {
            stageModal.classList.remove('active');
            openSemesterModal(stage, semester);
        });

        semestersGrid.appendChild(semesterCard);
    });

    stageModal.classList.add('active');
}

// فتح نافذة تفاصيل الفصل
function openSemesterModal(stage, semester) {
    const modalTitle = document.getElementById('semesterModalTitle');
    const modalSubtitle = document.getElementById('semesterModalSubtitle');
    const contentCards = document.getElementById('contentCards');
    
    modalTitle.textContent = semester.name;
    modalSubtitle.textContent = stage.name;
    contentCards.innerHTML = '';

    // بطاقة الدروس
    const videoCard = document.createElement('div');
    videoCard.className = 'content-card shine-effect';
    videoCard.innerHTML = `
        <div class="card-icon">
            <i class="fas fa-video"></i>
        </div>
        <h3>دروس الفصل</h3>
        <p>جميع محاضرات الفصل الدراسي بجودة عالية (${semester.lessons.length} محاضرة)</p>
        <a href="${semester.playlist}" target="_blank" class="btn btn-primary">
            <i class="fab fa-youtube"></i>
            <span>مشاهدة الدروس</span>
        </a>
    `;
    contentCards.appendChild(videoCard);

    // بطاقة الملازم
    // const notesCard = document.createElement('div');
    // notesCard.className = 'content-card shine-effect';
    // notesCard.innerHTML = `
    //     <div class="card-icon">
    //         <i class="fas fa-file-alt"></i>
    //     </div>
    //     <h3>ملزمة الفصل</h3>
    //     <p>ملزمة شاملة لجميع مواضيع الفصل</p>
    //     <a href="./files/${semester.file}" class="btn btn-secondary"  target="_blank">
    //     <i class="fa-solid fa-file-arrow-down"></i>
    //         <span>تحميل الملزمة</span>
    //     </a>
    // `;
    // contentCards.appendChild(notesCard);
    const notesCard = document.createElement('div');
        notesCard.className = 'content-card shine-effect';

        notesCard.innerHTML = `
            <div class="card-icon">
                <i class="fas fa-file-alt"></i>
            </div>
            <h3>ملزمة الفصل</h3>
            <p>ملزمة شاملة لجميع مواضيع الفصل</p>
            <button class="btn btn-secondary download-btn" >
                <i class="fa-solid fa-file-arrow-down"></i>
                <span>تحميل الملزمة</span>
            </button>
        `;

        contentCards.appendChild(notesCard);

        // فتح الملف بطريقة مضمونة للموبايل
        notesCard.querySelector('.download-btn').addEventListener('click', () => {
            const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

                if (isMobile) {
                    window.location.href = `/files/${semester.file}`;
                } else {
                    window.open(`/files/${semester.file}`, '_blank');
                };
        });


    // بطاقة الامتحانات
    const examCard = document.createElement('div');
    examCard.className = 'content-card shine-effect';
    // examCard.innerHTML = `
    //     <div class="card-icon">
    //         <i class="fas fa-book-open"></i>
    //     </div>
    //     <h3>امتحانات الفصل</h3>
    //     <p>نماذج امتحانات وحلول شاملة</p>
    //     <a href="${semester.examLink}" target="_blank" class="btn btn-accent">
    //         <i class="fas fa-video"></i>
    //         <span>مشاهدة الامتحانات</span>
    //     </a>
    // `;
    // contentCards.appendChild(examCard);

       semesterModal.classList.add('active');

       examCard.innerHTML = `
            <div class="card-icon">
                <i class="fas fa-file-alt"></i>
            </div>
            <h3>امتحانات الفصل</h3>
            <p>نماذج امتحانات وحلول شاملة</p>
            <button class="btn btn-accent" >
                <i class="fa-solid fa-file-arrow-down"></i>
                <span>تحميل الامتحانات</span>
            </button>
        `;

        contentCards.appendChild(examCard);

        // فتح الملف بطريقة مضمونة للموبايل
        examCard.querySelector('.btn-accent').addEventListener('click', () => {
            const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

                if (isMobile) {
                    window.location.href = `/files/${semester.examLink}`;
                } else {
                    window.open(`/files/${semester.examLink}`, '_blank');
                };
        });

}

// إغلاق النوافذ المنبثقة
modalClose.addEventListener('click', () => {
    stageModal.classList.remove('active');
});

semesterModalClose.addEventListener('click', () => {
    semesterModal.classList.remove('active');
});

// إغلاق النافذة عند النقر خارجها
stageModal.addEventListener('click', (e) => {
    if (e.target === stageModal) {
        stageModal.classList.remove('active');
    }
});

semesterModal.addEventListener('click', (e) => {
    if (e.target === semesterModal) {
        semesterModal.classList.remove('active');
    }
});

// إغلاق النوافذ بزر ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        stageModal.classList.remove('active');
        semesterModal.classList.remove('active');
    }
});

// تمرير سلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// تحميل البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayStages();
    loadFilterStages();
    
    // إضافة تأثيرات الظهور عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // مراقبة العناصر
    const cards = document.querySelectorAll('.feature-card, .stage-card, .about-card, .contact-card, .filter-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});