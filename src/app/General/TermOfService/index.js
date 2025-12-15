// src/components/TermsOfService.js

import React, { useState, useEffect } from "react";
import "./index.css"; // File CSS để tạo kiểu

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h1 className="terms-title">ĐIỀU KHOẢN SỬ DỤNG WEBSITE</h1>
      <p className="terms-intro">
        Xin vui lòng đọc kỹ các điều khoản dưới đây trước khi sử dụng website
        của chúng tôi. Việc truy cập và sử dụng website đồng nghĩa với việc bạn
        đã đọc, hiểu và đồng ý bị ràng buộc bởi các điều khoản này. Nếu bạn
        không đồng ý với bất kỳ điều khoản nào, vui lòng không tiếp tục sử dụng
        website.
      </p>

      {/* 1. Quyền sở hữu và sử dụng nội dung */}
      <div className="terms-section">
        <h2 className="section-title">1. Quyền sở hữu và sử dụng nội dung</h2>
        <p>
          Tất cả nội dung được đăng tải trên website, bao gồm nhưng không giới
          hạn: văn bản, hình ảnh, video, thiết kế đồ họa, biểu tượng, mã lập
          trình và các tài sản trí tuệ khác, đều thuộc quyền sở hữu của chúng
          tôi hoặc bên thứ ba được cấp phép. Việc sử dụng lại, sao chép, phân
          phối hoặc chỉnh sửa nội dung trên website với bất kỳ mục đích nào mà
          không có sự đồng ý bằng văn bản của chúng tôi là hành vi vi phạm bản
          quyền và sẽ bị xử lý theo quy định pháp luật.
        </p>
      </div>

      {/* 2. Quy định về hành vi người dùng */}
      <div className="terms-section">
        <h2 className="section-title">2. Quy định về hành vi người dùng</h2>
        <p>Khi sử dụng website, bạn cam kết:</p>
        <ul className="terms-list">
          <li>
            Không thực hiện các hành vi gây ảnh hưởng đến hoạt động và bảo mật
            của website.
          </li>
          <li>
            Không sử dụng website vào các mục đích lừa đảo, phát tán mã độc,
            virus, hoặc thực hiện các hành vi trái pháp luật.
          </li>
          <li>
            Không thu thập hoặc sử dụng thông tin người dùng khác mà không được
            phép.
          </li>
          <li>
            Cung cấp thông tin cá nhân chính xác khi thực hiện các hành động như
            đăng ký, đặt hàng hoặc liên hệ.
          </li>
        </ul>
        <p>
          Chúng tôi có quyền tạm ngừng hoặc chấm dứt quyền truy cập của bạn nếu
          phát hiện bất kỳ hành vi vi phạm nào.
        </p>
      </div>

      {/* 3. Bảo mật thông tin cá nhân */}
      <div className="terms-section">
        <h2 className="section-title">3. Bảo mật thông tin cá nhân</h2>
        <p>
          Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng theo đúng
          quy định của pháp luật hiện hành. Thông tin bạn cung cấp sẽ chỉ được
          sử dụng nhằm mục đích giao dịch, chăm sóc khách hàng và nâng cao chất
          lượng dịch vụ. Trong một số trường hợp cần thiết (ví dụ: theo yêu cầu
          của cơ quan chức năng), chúng tôi có thể chia sẻ thông tin theo quy
          định của pháp luật.
        </p>
        <p>
          Vui lòng tham khảo{" "}
          <a href="/chinh-sach-bao-mat">Chính sách bảo mật</a> để hiểu rõ hơn
          cách chúng tôi thu thập, sử dụng và bảo vệ thông tin người dùng.
        </p>
      </div>

      {/* 4. Liên kết đến website bên thứ ba */}
      <div className="terms-section">
        <h2 className="section-title">4. Liên kết đến website bên thứ ba</h2>
        <p>
          Website có thể chứa các liên kết dẫn đến các trang web hoặc dịch vụ
          của bên thứ ba. Những liên kết này chỉ mang tính chất tham khảo. Chúng
          tôi không chịu trách nhiệm về nội dung, chính sách bảo mật hoặc bất kỳ
          tổn thất nào phát sinh từ việc bạn truy cập vào các website bên ngoài
          đó.
        </p>
      </div>

      {/* 5. Trách nhiệm giới hạn */}
      <div className="terms-section">
        <h2 className="section-title">5. Trách nhiệm giới hạn</h2>
        <p>
          Chúng tôi nỗ lực để đảm bảo mọi thông tin trên website là chính xác và
          được cập nhật đầy đủ. Tuy nhiên, chúng tôi không cam kết website sẽ
          luôn không có lỗi hoặc gián đoạn dịch vụ. Chúng tôi không chịu trách
          nhiệm đối với bất kỳ thiệt hại nào phát sinh do việc sử dụng hoặc
          không thể sử dụng website, bao gồm cả lỗi kỹ thuật, gián đoạn hệ thống
          hoặc dữ liệu bị mất.
        </p>
      </div>

      {/* 6. Thay đổi điều khoản */}
      <div className="terms-section">
        <h2 className="section-title">6. Thay đổi điều khoản</h2>
        <p>
          Chúng tôi có quyền cập nhật, chỉnh sửa hoặc thay đổi Điều khoản sử
          dụng này bất kỳ lúc nào mà không cần thông báo trước. Việc tiếp tục sử
          dụng website sau khi có sự thay đổi đồng nghĩa với việc bạn đồng ý với
          các điều khoản đã được điều chỉnh.
        </p>
      </div>

      {/* 7. Luật áp dụng */}
      <div className="terms-section">
        <h2 className="section-title">7. Luật áp dụng</h2>
        <p>
          Các điều khoản này được điều chỉnh và giải thích theo pháp luật Việt
          Nam. Mọi tranh chấp phát sinh từ việc sử dụng website sẽ được giải
          quyết tại cơ quan có thẩm quyền của Việt Nam.
        </p>
      </div>

      {/* 8. Thông tin liên hệ */}
      <div className="terms-section">
        <h2 className="section-title">8. Thông tin liên hệ</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi nào liên quan đến Điều khoản sử dụng, vui
          lòng liên hệ với chúng tôi qua:
        </p>
        <ul className="terms-list">
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

export default TermsOfService;
