import React from "react";

// 초깃값을 설정하지않고,
const ThemeContext = React.createContext();

// 개발자 도구에서 이름을 확인하기 위함
ThemeContext.displayName = "콘텍스트입니다";

export default ThemeContext;
