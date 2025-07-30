/**
 - input: 1 số có 2 chữ số
 - Xử lý: số đơn vị % 10, sô số hàng chục / 10
 - Kết quả: Tổng 2 ký số của số vừa nhập.
 */

let tongHaiKySoVuaNhap = function () {
  let soNhapVao = document.getElementById("soDuocNhap").value * 1;

  let soHangDv = soNhapVao % 10;
  let soHangChuc = Math.floor(soNhapVao / 10);

  let tongHaiKySo = soHangChuc + soHangDv;

  document.getElementById(
    "ketQua"
  ).innerText = `Tổng hai ký số vừa nhập là ${tongHaiKySo}`;
};
