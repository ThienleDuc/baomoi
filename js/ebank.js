const hopChua = document.querySelector(".box-right .eBank .swiper-container");
const iconMuiTen = document.querySelectorAll(".wrap-butn i");
const subBoxWidth = document.querySelector(".box-right .eBank .swiper-wrapper .swiper-slide").clientWidth;
let isDragging = false, isDragStart = false, diemBatDau, batDauCuon, viTriLech;
let chieuRongThanhCuon = hopChua.scrollWidth - hopChua.clientWidth;

const autoSlide = ()=>{
    if(hopChua.scrollLeft - chieuRongThanhCuon > -1 || hopChua.scrollLeft <= 0) return;
    viTriLech = math.abs(viTriLech);
    let ketQuaLech = subBoxWidth - viTriLech;
    if(hopChua.scrollLeft > batDauCuon){
        return hopChua.scrollLeft += viTriLech > subBoxWidth ? ketQuaLech : -viTriLech;
    }
}

const xuLyIcon = (ketQuaThanhTruot) =>{
    isDragging = true;
    iconMuiTen[0].parentElement.style.opacity = hopChua.scrollLeft == 0 ? "0.4" : "1";
    iconMuiTen[1].parentElement.style.opacity = chieuRongThanhCuon - ketQuaThanhTruot <= 1 ? "0.4" : "1";
}

iconMuiTen.forEach(btn =>{
    btn.addEventListener("click", () =>{
        hopChua.scrollLeft += btn.id === "left" ? -subBoxWidth : subBoxWidth;
        xuLyIcon(hopChua.scrollLeft);

    })
})

const batDau = (e) => {
    isDragStart = true;
    diemBatDau = (e.pageX || e.touchs[0].pageX);
    batDauCuon = hopChua.scrollLeft;
}

const xuLyKeo = (e) => {
    if(!isDragStart) return; // neu isDragging la sai thi tra lai nhu ban dau nguoc lai thuc hien cau lenh tiep theo
    e.preventDefault();
    isDragging = true;
    hopChua.classList.add("dragging");
    viTriLech = (e.pageX || e.touchs[0].pageX) - diemBatDau;
    hopChua.scrollLeft = batDauCuon - viTriLech;
    xuLyIcon(hopChua.scrollLeft);
    
}

const ketThuc = () => {
    isDragStart = false;
    hopChua.classList.remove("dragging");

    if(!isDragging) return;
    isDragStart = false;
    autoSlide();
}



hopChua.addEventListener("mousedown", batDau);
hopChua.addEventListener("touchstart", batDau);


document.addEventListener("mousemove", xuLyKeo);
hopChua.addEventListener("touchmove", xuLyKeo);


document.addEventListener("mouseup", ketThuc);
hopChua.addEventListener("touchend", ketThuc);

const eBank = (hopChuaEvent)=>{
    let hopChuaEvent = document.querySelector("event .swiper-container");
    xuLyIcon(iconMuiTen);
    batDau(hopChuaEvent);
    xuLyKeo(hopChuaEvent);
    ketThuc();
}