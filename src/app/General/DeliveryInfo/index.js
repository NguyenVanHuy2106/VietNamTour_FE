// src/components/DeliveryInfo.js

import React, { useState, useEffect } from "react";
import "./index.css";

const DeliveryInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h1 className="delivery-title">
        THÔNG TIN VỀ VẬN CHUYỂN VÀ GIAO NHẬN DỊCH VỤ
      </h1>
      <p className="delivery-intro">
        Website của chúng tôi cung cấp các dịch vụ liên quan đến du lịch như
        tour trọn gói, vé tham quan, phiếu trải nghiệm, đặt phòng, dịch vụ vận
        chuyển du lịch,... Tùy theo tính chất từng dịch vụ, phương thức giao
        nhận sẽ khác nhau. Chúng tôi cam kết cung cấp thông tin rõ ràng, hỗ trợ
        nhanh chóng và đảm bảo quyền lợi tối đa cho khách hàng trong quá trình
        giao nhận.
      </p>

      {/* 1. Hình thức giao nhận dịch vụ */}
      <div className="delivery-section">
        <h2 className="section-title">1. Hình thức giao nhận dịch vụ</h2>
        <p>
          Vì đặc thù dịch vụ du lịch không phải là hàng hóa hữu hình nên các
          phương thức giao nhận chủ yếu bao gồm:
        </p>

        <div className="sub-section">
          <h3>a) Giao nhận điện tử</h3>
          <p>
            Sau khi khách hàng hoàn tất quá trình đặt dịch vụ và thanh toán,
            chúng tôi sẽ gửi thông tin xác nhận dịch vụ qua email, tin nhắn
            SMS/Zalo, hoặc trực tiếp trên hệ thống quản lý đặt chỗ (nếu có).
          </p>
          <p>
            Thông tin xác nhận bao gồm: tên tour, mã đặt chỗ, ngày khởi hành,
            thông tin liên hệ hướng dẫn viên (nếu có), voucher điện tử hoặc file
            vé điện tử.
          </p>
          <p>
            Hình thức này áp dụng cho hầu hết các tour trong và ngoài nước,
            voucher trải nghiệm, vé máy bay, vé tàu, vé tham quan.
          </p>
        </div>

        <div className="sub-section">
          <h3>b) Giao nhận trực tiếp</h3>
          <p>
            Đối với khách hàng không sử dụng email hoặc yêu cầu cung cấp giấy
            xác nhận cứng, nhân viên sẽ hỗ trợ in phiếu xác nhận và giao trực
            tiếp tại:
          </p>
          <ul className="delivery-list">
            <li>Văn phòng giao dịch của công ty</li>
            <li>
              Địa chỉ khách hàng yêu cầu (chỉ áp dụng trong phạm vi nhất định và
              có thể thu thêm phí vận chuyển)
            </li>
          </ul>
          <p>
            Thời gian giao tài liệu giấy thường trong vòng 1–3 ngày làm việc,
            tùy vào khu vực và thỏa thuận trước giữa hai bên.
          </p>
        </div>
      </div>

      {/* 2. Quy trình xử lý và thời gian giao nhận */}
      <div className="delivery-section">
        <h2 className="section-title">
          2. Quy trình xử lý và thời gian giao nhận
        </h2>
        <p>
          Chúng tôi luôn nỗ lực xử lý nhanh nhất các đơn đặt dịch vụ. Cụ thể như
          sau:
        </p>
        <ul className="delivery-list">
          <li>
            Ngay sau khi khách hàng hoàn tất thanh toán, hệ thống sẽ tự động ghi
            nhận đơn đặt.
          </li>
          <li>
            Trong vòng 24 giờ làm việc, nhân viên sẽ kiểm tra thông tin, liên hệ
            xác nhận và tiến hành gửi thông tin dịch vụ đến khách hàng.
          </li>
          <li>
            Trong các thời điểm cao điểm (mùa du lịch, lễ Tết), thời gian xử lý
            có thể kéo dài đến 48 giờ, tuy nhiên sẽ luôn có thông báo cụ thể đến
            khách hàng.
          </li>
          <li>
            Đối với các tour yêu cầu xác nhận từ phía nhà cung cấp thứ ba (ví
            dụ: đối tác khách sạn, đối tác quốc tế), thời gian giao nhận có thể
            thay đổi linh hoạt và sẽ được thông báo rõ cho khách hàng.
          </li>
        </ul>
      </div>

      {/* 3. Phí giao nhận dịch vụ */}
      <div className="delivery-section">
        <h2 className="section-title">3. Phí giao nhận dịch vụ</h2>
        <p>
          Tùy theo phương thức giao nhận, chúng tôi áp dụng chính sách phí như
          sau:
        </p>
        <table className="delivery-table">
          <thead>
            <tr>
              <th>Hình thức giao nhận</th>
              <th>Phạm vi áp dụng</th>
              <th>Phí giao nhận</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email, SMS, Zalo</td>
              <td>Toàn quốc, quốc tế</td>
              <td>Miễn phí 100%</td>
            </tr>
            <tr>
              <td>Tại văn phòng công ty</td>
              <td>Khách hàng đến trực tiếp</td>
              <td>Miễn phí</td>
            </tr>
            <tr>
              <td>Giao tài liệu tận nơi</td>
              <td>Trong nội thành (nếu có yêu cầu)</td>
              <td>Có tính phí theo khoảng cách (thỏa thuận trước)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 4. Trách nhiệm của các bên */}
      <div className="delivery-section">
        <h2 className="section-title">
          4. Trách nhiệm của các bên trong quá trình giao nhận
        </h2>
        <div className="sub-section">
          <h3>a) Trách nhiệm của chúng tôi:</h3>
          <ul className="delivery-list">
            <li>
              Cung cấp đúng và đầy đủ thông tin dịch vụ theo nội dung đã cam kết
              trên website hoặc qua trao đổi với khách hàng.
            </li>
            <li>Đảm bảo thời gian giao nhận theo đúng tiến độ đã thông báo.</li>
            <li>
              Bảo mật thông tin khách hàng trong suốt quá trình giao nhận.
            </li>
            <li>
              Chịu trách nhiệm hỗ trợ, chỉnh sửa hoặc cấp lại thông tin nếu có
              sai sót từ phía hệ thống hoặc nhân viên công ty.
            </li>
          </ul>
        </div>
        <div className="sub-section">
          <h3>b) Trách nhiệm của khách hàng:</h3>
          <ul className="delivery-list">
            <li>
              Cung cấp chính xác các thông tin cần thiết khi đặt dịch vụ (email,
              số điện thoại, địa chỉ nhận tài liệu nếu có).
            </li>
            <li>Kiểm tra kỹ thông tin xác nhận sau khi nhận được.</li>
            <li>
              Chủ động phản hồi nếu không nhận được thông báo trong vòng 24–48
              giờ sau thanh toán.
            </li>
            <li>
              Bảo quản thông tin xác nhận (email, tin nhắn, mã đặt chỗ...) để sử
              dụng trong ngày khởi hành hoặc khi cần làm thủ tục.
            </li>
          </ul>
        </div>
      </div>

      {/* 5. Các trường hợp đặc biệt */}
      <div className="delivery-section">
        <h2 className="section-title">5. Các trường hợp đặc biệt</h2>
        <ul className="delivery-list">
          <li>
            Trường hợp khách hàng cần thay đổi thông tin giao nhận sau khi đã
            gửi, vui lòng liên hệ sớm nhất với bộ phận CSKH để được hỗ trợ chỉnh
            sửa.
          </li>
          <li>
            Trường hợp gửi sai thông tin do lỗi khách hàng cung cấp nhầm
            email/số điện thoại, chúng tôi không chịu trách nhiệm nhưng vẫn sẽ
            hỗ trợ chỉnh sửa trong khả năng cho phép.
          </li>
          <li>
            Nếu xảy ra lỗi hệ thống hoặc lỗi ngoài ý muốn khiến việc giao nhận
            chậm trễ, chúng tôi sẽ thông báo ngay lập tức và chủ động đề xuất
            giải pháp thay thế.
          </li>
        </ul>
      </div>

      {/* 6. Liên hệ hỗ trợ */}
      <div className="delivery-section">
        <h2 className="section-title">6. Liên hệ hỗ trợ</h2>
        <p>
          Mọi thông tin liên quan đến giao nhận, quý khách vui lòng liên hệ:
        </p>
        <ul className="delivery-contact-list">
          <li>
            <strong>CÔNG TY TNHH THƯƠNG MẠI DU LỊCH VÀ SỰ KIỆN VIỆT NAM</strong>
          </li>
          <li>
            <strong>Email:</strong> dulichvasukienvietnam@gmail.com
          </li>
          <li>
            <strong>Hotline:</strong> 0373.954.963
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
      </div>
    </div>
  );
};

export default DeliveryInfo;
