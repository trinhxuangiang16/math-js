/**
 - input: chiều dài, chiều rộng HCN
 - Xử lý: Chu vi = (dài + rộng) * 2. Diện tích = dài * rộng
 - Kết quả: Chu vi và diện tích HCN
 */

let tinhToan = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;

  let chieuRong = document.getElementById("chieuRong").value * 1;

  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;

  document.getElementById(
    "ketQua"
  ).innerText = `Chu vi hình chữ nhật là ${chuVi} (m) và diện tích hình chữ nhật là ${dienTich} (m2)`;
};
