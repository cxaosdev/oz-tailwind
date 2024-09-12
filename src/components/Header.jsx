export default function Header() {
  return (
    <header className="header-container flex justify-between items-center px-2.5 py-5 bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="menu-container flex justify-center items-center gap-5">
        <li className="list-none font-normal text-[13px] text-white">로그인</li>
        <li className="list-none font-normal text-[13px] text-white">
          회원가입
        </li>
        <li className="list-none font-normal text-[13px] text-white">
          내클래스
        </li>
      </ul>
    </header>
  );
}
