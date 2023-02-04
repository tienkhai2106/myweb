function vonglap() {
    let N = prompt("nhập chuỗi số");
    let mgs = "";
    while (parseInt(N) > 0) {
        mgs += N % 10;
        N = Math.floor(N / 10)
    }
    document.write(`KET QUA:${mgs}`);
}