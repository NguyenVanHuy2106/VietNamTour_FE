export const toSlug = (str) => {
  str = str
    .toLowerCase()
    .normalize("NFD") // tách các dấu khỏi ký tự
    .replace(/[\u0300-\u036f]/g, "") // xoá các dấu
    .replace(/đ/g, "d") // chuyển đ
    .replace(/Đ/g, "d") // chuyển Đ luôn (trường hợp viết hoa)
    .replace(/[^a-z0-9\s-]/g, "") // loại bỏ ký tự đặc biệt
    .replace(/\s+/g, "-") // thay khoảng trắng bằng -
    .replace(/-+/g, "-") // bỏ trùng dấu -
    .replace(/^-+|-+$/g, ""); // bỏ dấu - ở đầu/cuối
  return str;
};
