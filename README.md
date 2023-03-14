Các chức năng và thư viện quan trọng sử dụng trong Project:
+FE

- Đăng nhập , đăng kí (đăng nhập bằng google)
- Sử dụng session storage để lưu token của user
- CURD địa chỉ,đặt địa chỉ mắc định, hiển thị danh sách
- CRUD sản phẩm (admin và manage mới đc sử dụng, chỉ amdin mới đc reStorage)
- Đặt hàng sản phẩm (chỉ sử dụng đc khi đăng nhập)
- Hiển thị mặt hàng theo yêu cầu(Chưa hoàn thiện)
- Chat nhau giữa các user (Chưa hoàn thiện :socketIO)
- Trạng thái giao hàng và lịch sử đặt hàng (Chưa hoàn thiện)
  và nhiều các thao tác nhỏ khác.
- Responsive các màn hình khác nhau

+BE

- Sử dụng middlewares để check role theo các API cần thiết
- Sử dụng thư viện "bcrypt" để mã hóa mật khẩu
- Sử dụng thư viện "jsonwebtoken" để mã hóa dữ liệu thành mã token
- Sử dụng thư viện socketIO để giao tiếp giữa server và client
- Mô hình MVC
