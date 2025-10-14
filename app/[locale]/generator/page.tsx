'use client';

import Sidebar from './sidebar';
import Content from './content';
import { useState } from 'react';

export default function GeneratorPage() {
  const [activeMenu, setActiveMenu] = useState('adjustments');

  return (
    <div className="flex size-full ">
      {/* 左侧菜单 */}
      <Sidebar activeMenu={activeMenu} changeActiveMenu={setActiveMenu} />

      {/* 右侧内容 */}
      <div className="flex-1 bg-gray-50 overflow-auto">
        <Content activeMenu={activeMenu} />
      </div>
    </div>
  );
}
