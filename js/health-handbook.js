function healthhandBook(){
    const hopChua = document.querySelector(".health-handbook .swiper-container"),
    iconMuiTen = document.querySelectorAll(".health-handbook .wrap-butn .icon i");
    let dangKeo = false;
    const xuLyIcon = (ketQuaThanhTruot) => {
        let chieuRongCuonToiDa = hopChua.scrollWidth - hopChua.clientWidth;
        iconMuiTen[0].parentElement.style.opacity = ketQuaThanhTruot <= 0 ? "0.4" : "1";
        iconMuiTen[1].parentElement.style.opacity = chieuRongCuonToiDa - ketQuaThanhTruot <= 1 ? "0.4" : "1";
    }
    iconMuiTen.forEach(icon => {
        icon.addEventListener("click", () => {
            let chieuRongThanhCuon = hopChua.scrollLeft += icon.id === "left" ? -300 : 300;
            xuLyIcon(chieuRongThanhCuon);
        });
    });
    const xuLyKeo = (e) => {
        if(!dangKeo) return;
        hopChua.classList.add("dragging");
        hopChua.scrollLeft -= (e.movementX || e.touchs[0].movementX);
        xuLyIcon(hopChua.scrollLeft)
    }
    const dungKeo = () => {
        dangKeo = false;
        hopChua.classList.remove("dragging");
    }
    hopChua.addEventListener("mousedown", () => dangKeo = true);
    hopChua.addEventListener("touchstart", () => dangKeo = true);

    document.addEventListener("mousemove", xuLyKeo);
    hopChua.addEventListener("touchmove", xuLyKeo);

    document.addEventListener("mouseup", dungKeo);
    hopChua.addEventListener("touchend", dungKeo);

}

healthhandBook();