const hopChuaEvent = document.querySelector(".event .swiper-container");
const iconMuiTen = document.querySelectorAll(".wrap-butn i");
const subBoxWidthEvent = document.querySelector(".box-right .eBank .swiper-wrapper .swiper-slide").clientWidth;
let isDragging = false, isDragStart = false, diemBatDau, batDauCuon, viTriLech;
let chieuRongThanhCuon = hopChuaEvent.scrollWidth - hopChuaEvent.clientWidth;

const autoSlide = ()=>{
    if(hopChuaEvent.scrollLeft - chieuRongThanhCuon > -1 || hopChuaEvent.scrollLeft <= 0) return;
    viTriLech = math.abs(viTriLech);
    let ketQuaLech = subBoxWidthEvent - viTriLech;
    if(hopChuaEvent.scrollLeft > batDauCuon){
        return hopChuaEvent.scrollLeft += viTriLech > subBoxWidthEvent ? ketQuaLech : -viTriLech;
    }
}

const xuLyIcon = (ketQuaThanhTruot) =>{
    isDragging = true;
    iconMuiTen[0].parentElement.style.opacity = hopChuaEvent.scrollLeft == 0 ? "0.4" : "1";
    iconMuiTen[1].parentElement.style.opacity = chieuRongThanhCuon - ketQuaThanhTruot <= 1 ? "0.4" : "1";
}

iconMuiTen.forEach(btn =>{
    btn.addEventListener("click", () =>{
        hopChuaEvent.scrollLeft += btn.id === "left" ? -subBoxWidthEvent : subBoxWidthEvent;
        xuLyIcon(hopChuaEvent.scrollLeft);

    })
})

const batDau = (e) => {
    isDragStart = true;
    diemBatDau = (e.pageX || e.touchs[0].pageX);
    batDauCuon = hopChuaEvent.scrollLeft;
}

const xuLyKeo = (e) => {
    if(!isDragStart) return; // neu isDragging la sai thi tra lai nhu ban dau nguoc lai thuc hien cau lenh tiep theo
    e.preventDefault();
    isDragging = true;
    hopChuaEvent.classList.add("dragging");
    viTriLech = (e.pageX || e.touchs[0].pageX) - diemBatDau;
    hopChuaEvent.scrollLeft = batDauCuon - viTriLech;
    xuLyIcon(hopChuaEvent.scrollLeft);
    
}

const ketThuc = () => {
    isDragStart = false;
    hopChuaEvent.classList.remove("dragging");

    if(!isDragging) return;
    isDragStart = false;
    autoSlide();
}



hopChuaEvent.addEventListener("mousedown", batDau);
hopChuaEvent.addEventListener("touchstart", batDau);


document.addEventListener("mousemove", xuLyKeo);
hopChuaEvent.addEventListener("touchmove", xuLyKeo);


document.addEventListener("mouseup", ketThuc);
hopChuaEvent.addEventListener("touchend", ketThuc);

