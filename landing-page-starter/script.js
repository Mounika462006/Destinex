let destination = document.querySelector('.destination')
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let BgImgs = [
    "https://tripandtales.com/wp-content/uploads/2025/08/Miramar-Beach-1024x576.jpg",
    "https://aazhimalasivatemple.in/wp-content/uploads/2024/11/cropped-tea-banner-1536x922-1.jpg",
    "https://api.trekpanda.in/uploads/river%20mountains%20meghalaya.jpg",
    "https://amazemytrip.com/wp-content/uploads/2019/02/Pamban-Bridge.jpg"
]

let currentBgImgIndex=0;

function addBg() {
    destination.style.backgroundImage = `url(${BgImgs[currentBgImgIndex]})`;
    
}

nextBtn.addEventListener('click' , function() {
    currentBgImgIndex++;
    if (currentBgImgIndex == BgImgs.length){
        currentBgImgIndex = 0
    }
    console.log(currentBgImgIndex);
    addBg()
})

prevBtn.addEventListener('click', function() {
    if (currentBgImgIndex == 0) {
        currentBgImgIndex = BgImgs.length
    }
    currentBgImgIndex--;
    addBg()
})
