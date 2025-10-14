'use client';
import React, { useState } from 'react';
import { Button, Listbox, ListboxItem } from '@nextui-org/react';
import { Settings, Crop, Filter, ChevronRight, ChevronLeft } from 'lucide-react';

const menuItems = [
  { key: 'adjustments', icon: Settings, label: '基础调整' },
  { key: 'crop', icon: Crop, label: '裁剪旋转' },
  { key: 'filters', icon: Filter, label: '滤镜效果' },
];

export default function Sidebar({ activeMenu, changeActiveMenu }: any) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div
      className={`relative flex flex-col h-screen transition-all bg-content1  border-r border-gray-200 dark:bg-gray-950 dark:border-gray-800 duration-300 ${
        isSidebarCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      <div className="border-b border-gray-100 dark:border-gray-800 p-8">
        <div className="relative flex items-center">
          <div className="flex items-center gap-4 transition-all duration-300 flex-1">
            <div className="relative w-10 h-10">
              <img
                alt="Nano Banana"
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                data-nimg="1"
                className="rounded-lg"
                src="/logo.png"
                style={{ color: 'transparent' }}
              />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                Nano Banana
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">AI Generator</p>
            </div>
          </div>
          {/* 折叠/展开按钮 */}
          <Button
            variant="light"
            isIconOnly
            onPress={toggleSidebar}
            className="absolute -right-3 top-4 z-10 bg-white rounded-full w-6 h-6 min-w-6"
          >
            {isSidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </Button>
        </div>
      </div>
      <div className="flex-1 p-4">
        <Listbox
          aria-label="图片编辑菜单"
          selectedKeys={[activeMenu]}
          onAction={(key) => changeActiveMenu(key as string)}
          className="p-0 gap-2"
        >
          {menuItems.map((item) => (
            <ListboxItem
              key={item.key}
              startContent={<item.icon size={20} />}
              className={`px-3 py-3 rounded-medium transition-colors ${
                activeMenu === item.key ? 'bg-primary-100 text-primary-600' : 'hover:bg-gray-100'
              } ${isSidebarCollapsed && 'justify-center gap-0'}`}
            >
              {!isSidebarCollapsed && item.label}
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </div>
  );
}
