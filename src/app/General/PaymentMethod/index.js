// src/components/PaymentMethods.js
import React, { useState, useEffect } from "react";
import "./index.css"; // File CSS để tạo kiểu

const PaymentMethods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h1 className="payment-title">THÔNG TIN VỀ CÁC PHƯƠNG THỨC THANH TOÁN</h1>
      <p className="payment-intro">
        Chúng tôi cung cấp các hình thức thanh toán linh hoạt, an toàn và minh
        bạch nhằm tạo điều kiện thuận lợi tối đa cho khách hàng trong quá trình
        đặt tour du lịch và các dịch vụ liên quan. Tất cả giao dịch đều được
        thực hiện trên nguyên tắc tự nguyện, rõ ràng và có xác nhận bằng văn bản
        hoặc qua hệ thống email.
      </p>

      {/* 1. Thanh toán tiền mặt tại văn phòng */}
      <div className="payment-section">
        <h2 className="section-title">1. Thanh toán tiền mặt tại văn phòng</h2>
        <p>
          Đây là hình thức thanh toán truyền thống, phù hợp với khách hàng ở gần
          văn phòng công ty hoặc có nhu cầu được tư vấn trực tiếp.
        </p>
        <p>
          <strong>Quy trình thực hiện:</strong>
        </p>
        <ul className="payment-list">
          <li>
            Sau khi lựa chọn dịch vụ du lịch, khách hàng đến trực tiếp văn phòng
            công ty để thanh toán.
          </li>
          <li>
            Nhân viên tư vấn sẽ in hoặc gửi phiếu xác nhận dịch vụ, hóa đơn tạm
            thu (nếu cần), và cung cấp thông tin lịch trình, dịch vụ chi tiết.
          </li>
          <li>Công ty sẽ lập phiếu thu và ký xác nhận việc thanh toán.</li>
        </ul>
        <p>
          <strong>Thông tin văn phòng:</strong>
        </p>
        <ul className="payment-contact-list">
          <li>
            <strong>Tên công ty:</strong> CÔNG TY TNHH THƯƠNG MẠI DU LỊCH VÀ SỰ
            KIỆN VIỆT NAM
          </li>
          <li>
            <strong>Địa chỉ:</strong> 57 Đường N12, Khu nhà ở thấp tầng Ba Son,
            KP.10, P.Long Phước, TP.Hồ Chí Minh
          </li>
          <li>
            <strong>Thời gian làm việc:</strong> Từ 08h00 đến 17h00 (Thứ 2 – Thứ
            7)
          </li>
        </ul>
        <p>
          <strong>Lưu ý:</strong>
        </p>
        <ul className="payment-list">
          <li>
            Quý khách vui lòng mang theo giấy tờ tùy thân hoặc thông tin đặt
            tour (nếu đã đặt online) khi đến thanh toán.
          </li>
          <li>
            Trong trường hợp khách thanh toán thay, vui lòng cung cấp đầy đủ
            thông tin người đặt để đối chiếu.
          </li>
        </ul>
      </div>

      {/* 2. Thanh toán chuyển khoản ngân hàng */}
      <div className="payment-section">
        <h2 className="section-title">2. Thanh toán chuyển khoản ngân hàng</h2>
        <p>
          Đây là phương thức thanh toán phổ biến, an toàn, phù hợp với khách
          hàng ở xa hoặc đặt dịch vụ online. Tất cả giao dịch được xác nhận
          thông qua hệ thống ngân hàng.
        </p>
        <p>
          <strong>Thông tin chuyển khoản:</strong>
        </p>
        <ul className="payment-contact-list">
          <li>
            <strong>Tên tài khoản:</strong> CTY TNHH TM DL VA SU KIEN VIET NAM
          </li>
          <li>
            <strong>Số tài khoản:</strong> 1102649999
          </li>
          <li>
            <strong>Ngân hàng:</strong> VIETCOMBANK - VCB TAN DINH - TRU SO CN
          </li>
        </ul>
        <p>
          <strong>Hướng dẫn:</strong>
        </p>
        <p>
          Khi thực hiện chuyển khoản, khách hàng cần ghi rõ nội dung thanh toán
          như sau:
          <br />
          <strong>Họ tên – Tên tour – Ngày khởi hành</strong>
        </p>
        <p>
          Ví dụ: <strong>Nguyen Van A – Tour Da Lat 3N2D – 12/10</strong>
        </p>
        <p>
          Sau khi chuyển khoản, vui lòng gửi thông báo đã thanh toán qua email
          hoặc số hotline/zalo của công ty để được xác nhận kịp thời.
          <br />
          Trong vòng tối đa 24 giờ làm việc kể từ khi nhận được thanh toán, nhân
          viên của chúng tôi sẽ liên hệ xác nhận thông tin và gửi phiếu xác nhận
          dịch vụ/tour.
        </p>
        <p>
          <strong>Lưu ý quan trọng:</strong>
        </p>
        <ul className="payment-list">
          <li>
            Chúng tôi không chịu trách nhiệm đối với các khoản tiền chuyển vào
            sai tài khoản hoặc chuyển đến tài khoản không được công bố trên
            website chính thức.
          </li>
          <li>
            Để đảm bảo an toàn, khách hàng chỉ nên chuyển khoản vào đúng số tài
            khoản được niêm yết công khai tại mục “Phương thức thanh toán” của
            website hoặc được nhân viên có email công ty xác nhận.
          </li>
        </ul>
      </div>

      {/* 3. Xác nhận thanh toán và hoàn tất đặt dịch vụ */}
      <div className="payment-section">
        <h2 className="section-title">
          3. Xác nhận thanh toán và hoàn tất đặt dịch vụ
        </h2>
        <p>
          Sau khi thanh toán thành công, khách hàng sẽ nhận được email xác nhận
          đặt tour kèm theo thông tin dịch vụ chi tiết và biên nhận điện tử.
          <br />
          Trong trường hợp không nhận được xác nhận sau 24 giờ, vui lòng liên hệ
          với bộ phận chăm sóc khách hàng để được hỗ trợ ngay.
        </p>
        <p>
          <strong>Bộ phận hỗ trợ:</strong>
        </p>
        <ul className="payment-contact-list">
          <li>
            <strong>Hotline:</strong> 0373.954.963
          </li>
          <li>
            <strong>Email:</strong> dulichvasukienvietnam@gmail.com
          </li>
          <li>
            <strong>Zalo:</strong> 0373.954.963
          </li>
        </ul>
      </div>

      {/* 4. Trách nhiệm và bảo mật thông tin thanh toán */}
      <div className="payment-section">
        <h2 className="section-title">
          4. Trách nhiệm và bảo mật thông tin thanh toán
        </h2>
        <p>
          Tất cả thông tin giao dịch của khách hàng được chúng tôi cam kết bảo
          mật tuyệt đối, không chia sẻ cho bên thứ ba trừ khi có sự đồng ý hoặc
          theo yêu cầu của cơ quan chức năng có thẩm quyền.
          <br />
          Chúng tôi sử dụng các biện pháp bảo mật dữ liệu nội bộ và quy trình
          xác thực thủ công nhằm giảm thiểu tối đa rủi ro trong quá trình xác
          nhận giao dịch.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethods;
