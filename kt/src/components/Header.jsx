import React from 'react'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <a href="#" className="nav-icon">🏠</a>
          <a href="#" className="nav-item">GIỚI THIỆU</a>
          <a href="#" className="nav-item active">ĐÀO TẠO</a>
          <a href="#" className="nav-item">TUYỂN SINH</a>
          <a href="#" className="nav-item">NGHIÊN CỨU</a>
          <a href="#" className="nav-item">SINH VIÊN</a>
          <a href="#" className="nav-item">GIẢNG VIÊN</a>
          <a href="#" className="nav-item">VĂN BẰNG</a>
        </div>
        <div className="nav-right">
          <input type="text" placeholder="Tìm kiếm..." className="search-input" />
          <span className="search-icon">🔍</span>
        </div>
      </nav>
    </header>
  )
}

export default Header
