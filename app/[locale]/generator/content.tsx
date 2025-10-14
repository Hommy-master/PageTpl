'use client';
import React from 'react';
import { Card } from '@nextui-org/react';

const AdjustmentsPanel = () => {
    return <div>AdjustmentsPanel</div>
}

const CropPanel = () => {
    return <div>CropPanel</div>
}

const FiltersPanel = () => {
    return <div>FiltersPanel</div>
}

interface EditorContentProps {
  activeMenu: string;
}

// 图片预览区域（可替换为实际的图片编辑器）
const ImagePreview = () => (
  <Card className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
    <div className="text-white text-center">
      <p className="text-lg font-semibold">图片预览区域</p>
      <p className="text-sm opacity-80 mt-2">在这里显示编辑中的图片</p>
    </div>
  </Card>
);

export default function EditorContent({ activeMenu }: EditorContentProps) {
  const renderContent = () => {
    switch (activeMenu) {
      case 'adjustments':
        return <AdjustmentsPanel />;
      case 'crop':
        return <CropPanel />;
      case 'filters':
        return <FiltersPanel />;
      default:
        return <AdjustmentsPanel />;
    }
  };

  return (
    <div className="h-full p-6">
      <div className="max-w-6xl mx-auto">        
        {/* 工具面板 */}
        <Card className="p-6">          
          {renderContent()}
        </Card>
      </div>
    </div>
  );
}