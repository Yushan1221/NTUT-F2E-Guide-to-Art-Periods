 // 平滑滾動
 function scrollToSection(className) {
    const section = document.querySelector(`.${className}`);
    console.log(`Scrolling to section: ${className}`); // 調試信息
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`No section found for class: ${className}`); // 錯誤信息
    }
}

// 點擊按鈕滾動到事件位置
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("[data-target]").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // 防止鏈接的默認行為
            const targetClass = link.getAttribute("data-target");
            scrollToSection(targetClass);
        });
    });
});

// 回到頂端
window.onscroll = function() {
    const button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"; // 顯示按鈕
    } else {
        button.style.display = "none"; // 隱藏按鈕
    }
};