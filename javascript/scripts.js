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
            const targetClass = link.dataset.target; // 使用 dataset 獲取值 
            scrollToSection(targetClass);
        });
    });
});

// 顯示回到頂端按鈕
window.onscroll = function() {
    const button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"; // 顯示按鈕
    } else {
        button.style.display = "none"; // 隱藏按鈕
    }
};

//點開評論
document.querySelectorAll('.exhibition-comment-box').forEach(box => {
    const content = box.querySelector('.exhibition-comment-content');
    const showMoreBtn = document.createElement('button');
    showMoreBtn.classList.add('show-more-btn');
    showMoreBtn.textContent = '查看更多';
    
    box.appendChild(showMoreBtn);

    showMoreBtn.addEventListener('click', () => {
        if (box.classList.contains('expanded')) {
            box.classList.remove('expanded');
            content.style.display = '-webkit-box'; // 回到多行限制模式
            content.style.webkitLineClamp = '2'; // 限制行數為兩行
            showMoreBtn.textContent = '查看更多';
        } else {
            box.classList.add('expanded');
            content.style.display = 'block'; // 設為 block 顯示所有內容
            content.style.webkitLineClamp = 'unset'; // 解除行數限制
            showMoreBtn.textContent = '查看更少';
        }
    });
});