// 獲取切換按鈕和 body 元素
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 檢查本地存儲中是否有主題偏好
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.textContent = '☀️';
} else {
    themeToggle.textContent = '🌙';
}

// 添加點擊事件監聽器
themeToggle.addEventListener('click', () => {
    // 切換 dark-mode class
    body.classList.toggle('dark-mode');
    
    // 保存當前主題到本地存儲
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.removeItem('theme');
        themeToggle.textContent = '🌙';
    }
});

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

// 導覽列連結的平滑滾動
document.addEventListener('DOMContentLoaded', function() {
    // 為所有導覽連結添加平滑滾動
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // 電子報訂閱功能
    const subscribeBtn = document.querySelector('.subscribe-btn');
    const emailInput = document.getElementById('email-input');
    
    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', function() {
            const email = emailInput.value.trim();
            
            if (email === '') {
                alert('請輸入您的電子郵件地址');
                return;
            }
            
            // 簡單的電子郵件格式驗證
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('請輸入有效的電子郵件地址');
                return;
            }
            
            // 模擬訂閱成功
            alert('感謝您的訂閱！我們會將最新的活動資訊寄送到您的信箱。');
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
            alert(`「${eventTitle}」的詳細資訊頁面即將推出，敬請期待！`);
        });
    });
});