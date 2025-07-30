/**
 - input: 5 số thực
 - Xử lý: tổng 5 số chia cho 5
 - Kết quả: giá trị trung bình 5 số
 */

let trungBinh = function () {
  let so1 = document.getElementById("so1").value * 1;
  let so2 = document.getElementById("so2").value * 1;
  let so3 = document.getElementById("so3").value * 1;
  let so4 = document.getElementById("so4").value * 1;
  let so5 = document.getElementById("so5").value * 1;

  let trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;

  document.getElementById(
    "ketQua"
  ).innerText = `Số trung bình là: ${trungBinh}`;
};
