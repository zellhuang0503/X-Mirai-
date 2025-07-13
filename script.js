// 平滑滾動到指定區塊的函數
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', function() {
    // 載入動畫
    const loadingScreen = document.getElementById('loading-screen');
    
    // 模擬載入時間
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // 載入完成後觸發淡入動畫
            observeFadeInElements();
        }, 500);
    }, 1500);
    
    // 滾動進度條
    const scrollProgress = document.getElementById('scroll-progress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
    
    // 淡入動畫觀察器
    function observeFadeInElements() {
        const fadeInElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        fadeInElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // 亮暗模式切換功能
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 檢查本地儲存的主題設定
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeIcon();
    }
    
    // 主題切換事件監聽器
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // 儲存主題設定到本地儲存
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
        
        updateThemeIcon();
    });
    
    // 更新主題圖示
    function updateThemeIcon() {
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
    }
    // 為所有導覽連結添加平滑滾動
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // 回到頂部按鈕
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', '回到頂部');
    document.body.appendChild(backToTopBtn);
    
    // 監聽滾動事件顯示/隱藏回到頂部按鈕
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // 回到頂部功能
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 鍵盤導航支援
    document.addEventListener('keydown', (e) => {
        // 按 Escape 鍵關閉任何開啟的模態框或回到頂部
        if (e.key === 'Escape') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // 按數字鍵快速導航到對應區塊
        const sections = ['home', 'universe', 'events', 'community'];
        const keyNum = parseInt(e.key);
        if (keyNum >= 1 && keyNum <= 4) {
            const targetSection = sections[keyNum - 1];
            scrollToSection(targetSection);
        }
    });
    
    // 電子報訂閱功能
    const subscribeBtn = document.querySelector('.subscribe-btn');
    const emailInput = document.getElementById('email-input');
    
    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', function() {
            const email = emailInput.value.trim();
            
            if (email === '') {
                showNotification('請輸入您的電子郵件地址', 'warning');
                return;
            }
            
            // 簡單的電子郵件格式驗證
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('請輸入有效的電子郵件地址', 'error');
                return;
            }
            
            // 模擬訂閱成功
            showNotification('感謝您的訂閱！我們會將最新的活動資訊寄送到您的信箱。', 'success');
            emailInput.value = '';
            
            // 在實際應用中，這裡會發送資料到後端伺服器
            console.log('訂閱電子郵件:', email);
        });
        
        // 按 Enter 鍵也可以訂閱
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeBtn.click();
            }
        });
    }
    
    // 活動卡片的「了解更多」按鈕功能
    const eventBtns = document.querySelectorAll('.event-btn');
    eventBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const eventCard = this.closest('.event-card');
            const eventTitle = eventCard.querySelector('h3').textContent;
            
            // 目前顯示提示訊息，未來可以連結到詳細頁面
            showNotification(`「${eventTitle}」的詳細資訊頁面即將推出，敬請期待！`, 'info');
        });
    });
    
    // 通知系統
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // 觸發動畫
        setTimeout(() => notification.classList.add('show'), 100);
        
        // 自動移除
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});