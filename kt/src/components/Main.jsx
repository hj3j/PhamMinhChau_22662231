import React from 'react'


function Main() {
  return (
    <main>
        <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-900 text-white p-4">
        <h2 className="font-bold mb-4">CƠ CẤU TỔ CHỨC</h2>
        <ul className="space-y-2">
          <li className="hover:underline cursor-pointer">LÃNH ĐẠO</li>
          <li className="hover:underline cursor-pointer">CÁC PHÒNG BAN</li>
          <li className="hover:underline cursor-pointer">CÁC KHOA</li>
          <li className="hover:underline cursor-pointer">CÁC VIỆN</li>
          <li className="hover:underline cursor-pointer">CÁC TRUNG TÂM</li>
          <li className="hover:underline cursor-pointer">CÁC PHÂN HIỆU</li>
          <li className="hover:underline cursor-pointer">ĐOÀN THỂ</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 grid grid-cols-2 gap-4 p-4">
        {/* Thông báo */}
        <div>
          <div className="flex justify-between items-center border-b-2 pb-1 mb-2">
            <h3 className="text-lg font-bold text-blue-800">THÔNG BÁO</h3>
            <span className="text-xs text-blue-600 hover:underline cursor-pointer">xem tất cả</span>
          </div>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Thông báo về kế hoạch nghỉ hè đối với sinh viên năm 2025 - 24-01-2025</li>
            <li>Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội - 21-01-2025</li>
          </ul>
        </div>

        {/* Tuyển sinh */}
        <div>
          <div className="flex justify-between items-center border-b-2 pb-1 mb-2">
            <h3 className="text-lg font-bold text-blue-800">TUYỂN SINH</h3>
            <span className="text-xs text-blue-600 hover:underline cursor-pointer">xem tất cả</span>
          </div>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên đại học – 29-03-2025</li>
            <li>Thông báo về tuyển sinh văn bằng hai đại học, đợt 1 năm 2025 – 20-03-2025</li>
          </ul>
        </div>

        {/* Tin tức - Sự kiện */}
        <div>
          <div className="flex justify-between items-center border-b-2 pb-1 mb-2">
            <h3 className="text-lg font-bold text-blue-800">TIN TỨC - SỰ KIỆN</h3>
            <span className="text-xs text-blue-600 hover:underline cursor-pointer">xem tất cả</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <img src="https://via.placeholder.com/100x70" alt="Tin 1" className="rounded"/>
              <p>AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp</p>
            </div>
          </div>
        </div> {/* Đóng div Tin tức - Sự kiện */}

      </div> {/* Đóng div Main Content */}
    </div> 
        
    </main>
  )
}

export default Main
