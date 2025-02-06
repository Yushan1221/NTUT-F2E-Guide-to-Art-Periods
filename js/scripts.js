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
            const targetClass = link.getAttribute("data-target"); // 使用 dataset 獲取值 
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


// 選取漢堡按鈕與選單容器
const hamburgerBtn = document.getElementById("hamburger-btn");
const menuContainer = document.getElementById("menu-container");

// 點擊漢堡按鈕時切換選單的顯示與隱藏
hamburgerBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("active"); // 切換滑出或收回
});

// 點擊其他地方時關閉選單
document.addEventListener("click", (event) => {
  if (!searchContainer.contains(event.target) && !hamburgerBtn.contains(event.target)) {
    menuContainer.classList.remove("active");
  }
});


// 更多新聞滑動
document.addEventListener("DOMContentLoaded", () => {
    const linkBox = document.querySelector(".home-news-link-box");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    linkBox.classList.add("show"); // 添加滑入效果
                } else {
                    linkBox.classList.remove("show"); // 滑出或重置狀態
                }
            });
        },
        { threshold: 0.1 } // box超過畫面的占比0.1時觸發
    );

    observer.observe(linkBox);
});


// slider
$(document).ready(function () {
    $('.home-artist-container').slick({
        slidesToShow: 3, // 同時顯示三個卡片
        slidesToScroll: 1,
        arrows: true, // 顯示左右箭頭
        dots: true, // 顯示下方圓點
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>', // 自定義左箭頭
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>', // 自定義右箭頭
        responsive: [
            {
                breakpoint: 768, // 螢幕寬度小於768px
                settings: {
                    slidesToShow: 2, 
                    arrows: false // 隱藏箭頭
                }
            },

            {
                breakpoint: 576, 
                settings: {
                    slidesToShow: 1, // 顯示一個卡片
                    arrows: false // 隱藏箭頭
                }
            }
        ]
    });
});


// 為 .home-exhibition-container 設置 Slick
$('.home-exhibition-container').slick({
    slidesToShow: 3, // 同時顯示三個卡片
    slidesToScroll: 1,
    arrows: false, // 顯示左右箭頭
    dots: true, // 顯示下方圓點
    // centerMode: true,
    // centerPadding: '',
    // initialSlide: 2,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>', // 自定義左箭頭
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>', // 自定義右箭頭
    responsive: [
        {
            breakpoint: 920, // 螢幕寬度小於768px
            settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
                arrows: false // 隱藏箭頭
            }
        },

        {
            breakpoint: 768, 
            settings: {
                slidesToShow: 1, // 顯示一個卡片
                slidesToScroll: 1,
                arrows: false // 隱藏箭頭
            }
        }
    ]
});