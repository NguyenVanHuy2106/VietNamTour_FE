// src/components/PrivacyPolicy.js

import React, { useState, useEffect } from "react";
import "./index.css"; // File CSS để tạo kiểu

const TermPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h1 className="policy-title">CHÍNH SÁCH BẢO MẬT THÔNG TIN KHÁCH HÀNG</h1>
      <p className="policy-intro">
        Chúng tôi trân trọng sự tin tưởng của quý khách khi sử dụng các dịch vụ
        du lịch tại website của chúng tôi. Vì vậy, chúng tôi cam kết nỗ lực tối
        đa để bảo vệ thông tin cá nhân của khách hàng. Chính sách bảo mật dưới
        đây giải thích cách chúng tôi thu thập, lưu trữ và xử lý thông tin cá
        nhân của khách hàng nhằm đảm bảo tính bảo mật và quyền riêng tư theo
        đúng quy định của pháp luật.
      </p>

      {/* 1. Mục đích thu thập thông tin */}
      <div className="policy-section">
        <h2 className="section-title">1. Mục đích thu thập thông tin</h2>
        <p>
          Chúng tôi thu thập thông tin cá nhân của khách hàng để phục vụ các mục
          đích sau:
        </p>
        <ul className="policy-list">
          <li>
            Tiếp nhận và xử lý các yêu cầu tư vấn tour, đặt tour, đặt phòng
            khách sạn, vé máy bay và các dịch vụ du lịch liên quan.
          </li>
          <li>
            Gửi thông tin xác nhận giao dịch, hóa đơn điện tử, hoặc cập nhật
            thay đổi về hành trình.
          </li>
          <li>
            Cung cấp các thông tin về chương trình khuyến mãi, ưu đãi dành riêng
            cho khách hàng đã đăng ký.
          </li>
          <li>
            Cải thiện chất lượng dịch vụ, tối ưu trải nghiệm người dùng trên
            website.
          </li>
          <li>Ghi nhận các phản hồi, góp ý để nâng cao chất lượng phục vụ.</li>
          <li>
            Đáp ứng yêu cầu từ cơ quan chức năng nếu có yêu cầu hợp pháp liên
            quan đến thông tin khách hàng.
          </li>
        </ul>
      </div>

      {/* 2. Phạm vi thu thập thông tin */}
      <div className="policy-section">
        <h2 className="section-title">2. Phạm vi thu thập thông tin</h2>
        <p>
          Tùy vào từng dịch vụ cụ thể, chúng tôi có thể thu thập các thông tin
          sau:
        </p>
        <ul className="policy-list">
          <li>Họ và tên</li>
          <li>
            Giới tính, ngày sinh (nếu cần đặt vé máy bay hoặc tour cá nhân hóa)
          </li>
          <li>Địa chỉ email</li>
          <li>Số điện thoại liên hệ</li>
          <li>Địa chỉ cư trú</li>
          <li>
            Thông tin về hộ chiếu, CMND/CCCD (trong trường hợp cần đặt dịch vụ
            quốc tế)
          </li>
          <li>
            Thông tin thanh toán (sẽ được xử lý qua các cổng thanh toán bảo mật
            bên thứ ba, chúng tôi không lưu trữ trực tiếp thông tin thẻ tín
            dụng)
          </li>
          <li>Lịch sử đặt tour, tương tác với website, phản hồi khách hàng</li>
        </ul>
      </div>

      {/* 3. Thời gian lưu trữ thông tin */}
      <div className="policy-section">
        <h2 className="section-title">3. Thời gian lưu trữ thông tin</h2>
        <p>
          Thông tin cá nhân sẽ được lưu trữ trong hệ thống của chúng tôi cho đến
          khi:
        </p>
        <ul className="policy-list">
          <li>Mục đích sử dụng thông tin không còn cần thiết</li>
          <li>Khách hàng yêu cầu xóa thông tin cá nhân</li>
          <li>
            Chúng tôi quyết định không cần tiếp tục lưu giữ để phục vụ mục đích
            nội bộ
          </li>
        </ul>
        <p>
          Thông tin sẽ được lưu giữ tối đa 10 năm (trừ khi có quy định khác của
          pháp luật).
        </p>
      </div>

      {/* 4. Bảo mật và an toàn thông tin */}
      <div className="policy-section">
        <h2 className="section-title">4. Bảo mật và an toàn thông tin</h2>
        <p>
          Chúng tôi cam kết thực hiện mọi biện pháp cần thiết để đảm bảo rằng
          thông tin cá nhân của khách hàng:
        </p>
        <ul className="policy-list">
          <li>
            Được bảo mật tuyệt đối theo các tiêu chuẩn bảo mật của ngành du lịch
            – thương mại điện tử.
          </li>
          <li>
            Không bị tiết lộ, chia sẻ cho bên thứ ba trừ khi có sự đồng ý của
            khách hàng hoặc theo yêu cầu pháp lý.
          </li>
          <li>
            Được mã hóa và lưu trữ trên hệ thống máy chủ bảo mật với tường lửa,
            hệ thống kiểm soát truy cập, và chống tấn công mạng.
          </li>
        </ul>
        <p>
          Chúng tôi không bán hoặc trao đổi thông tin cá nhân của khách hàng cho
          bất kỳ bên thứ ba nào vì mục đích thương mại.
        </p>
      </div>

      {/* 5. Quyền của khách hàng đối với thông tin cá nhân */}
      <div className="policy-section">
        <h2 className="section-title">
          5. Quyền của khách hàng đối với thông tin cá nhân
        </h2>
        <p>Khách hàng có các quyền sau đối với thông tin của mình:</p>
        <ul className="policy-list">
          <li>
            Yêu cầu xem lại, chỉnh sửa hoặc cập nhật thông tin cá nhân đã cung
            cấp.
          </li>
          <li>
            Yêu cầu xóa thông tin hoặc rút lại sự đồng ý sử dụng thông tin (trừ
            các trường hợp bắt buộc theo quy định pháp luật).
          </li>
          <li>
            Khiếu nại nếu có bằng chứng rằng thông tin cá nhân bị sử dụng trái
            mục đích.
          </li>
        </ul>
        <p>
          Mọi yêu cầu sẽ được chúng tôi tiếp nhận, xử lý trong thời gian sớm
          nhất, không quá 7 ngày làm việc.
        </p>
      </div>

      {/* 6. Sử dụng Cookie và công nghệ theo dõi */}
      <div className="policy-section">
        <h2 className="section-title">
          6. Sử dụng Cookie và công nghệ theo dõi
        </h2>
        <p>
          Website của chúng tôi có thể sử dụng cookies hoặc các công nghệ theo
          dõi hành vi người dùng nhằm:
        </p>
        <ul className="policy-list">
          <li>Ghi nhớ thông tin đăng nhập và lựa chọn dịch vụ</li>
          <li>Phân tích hành vi sử dụng website để tối ưu trải nghiệm</li>
          <li>Đo lường hiệu quả của các chiến dịch tiếp thị</li>
        </ul>
        <p>
          Bạn có thể tùy chỉnh trình duyệt để từ chối cookie nếu không muốn
          chúng được sử dụng.
        </p>
      </div>

      {/* 7. Liên kết đến website bên thứ ba */}
      <div className="policy-section">
        <h2 className="section-title">7. Liên kết đến website bên thứ ba</h2>
        <p>
          Website có thể chứa các liên kết đến trang web của đối tác, nhà cung
          cấp dịch vụ du lịch khác. Chúng tôi không chịu trách nhiệm về nội
          dung, chính sách bảo mật của các website đó. Bạn nên xem kỹ chính sách
          riêng của từng bên trước khi cung cấp thông tin.
        </p>
      </div>

      {/* 8. Thay đổi chính sách bảo mật */}
      <div className="policy-section">
        <h2 className="section-title">8. Thay đổi chính sách bảo mật</h2>
        <p>
          Chúng tôi có quyền thay đổi nội dung chính sách bảo mật mà không cần
          thông báo trước. Khi có thay đổi, nội dung cập nhật sẽ được công bố rõ
          ràng trên website. Việc tiếp tục sử dụng website sau khi chính sách
          thay đổi đồng nghĩa với việc bạn đã đồng ý với nội dung sửa đổi.
        </p>
      </div>

      {/* 9. Thông tin liên hệ */}
      <div className="policy-section">
        <h2 className="section-title">9. Thông tin liên hệ</h2>
        <p>
          Mọi thắc mắc, yêu cầu hoặc phản hồi liên quan đến Chính sách bảo mật,
          vui lòng liên hệ:
        </p>
        <ul className="policy-contact-list">
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
        </ul>
      </div>
    </div>
  );
};

export default TermPolicy;
