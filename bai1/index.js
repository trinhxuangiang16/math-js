/**
 - input: lương ngày, số ngày làm việc
 - Xử lý: Lấy lương ngày X số ngày làm việc
 - Kết quả: Tổng lương nhân viên
 */

let tongLuong = function () {
  let soNgayLam = document.getElementById("so-ngay-lam").value * 1;

  let luongNgay = document.getElementById("luong-ngay").value * 1;

  let tongLuong = soNgayLam * luongNgay;

  document.getElementById(
    "ketQua"
  ).innerText = `Tiền lương của bạn là: ${tongLuong.toLocaleString()} vnd`;
};
