/**
 - input: số tiền USD muốn đổi
 - Xử lý: đổi từ USD sang VND 1 USD = 23.500 VND
 - Kết quả: Sô tiền VND sau quy đổi
 */

let doiTien = function () {
  let giaTriUsd = document.getElementById("usd").value * 23500;

  document.getElementById(
    "ketQua"
  ).innerText = `Bạn đổi được: ${giaTriUsd.toLocaleString()} VNĐ`;
};
