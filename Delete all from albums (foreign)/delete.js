a = document.getElementsByTagName("div");
for (i = 0; i < a.length; ++i) {
    if (a[i].innerHTML.indexOf("Удалить видеозапись из альбома") > -1 && a[i].getAttribute('class') === 'video_row_icon_delete fl_l') {
        a[i].click();
    }
}
