'use client';
import React from 'react';
import { Card } from '@nextui-org/react';
import ThemeSwitch from '@/components/features/ThemeTest';

const AdjustmentsPanel = () => {
    return <div>AdjustmentsPanel</div>
}

const CropPanel = () => {
    return <div>CropPanel</div>
}

const FiltersPanel = () => {
    return <div>FiltersPanel</div>
}

interface ContentProps {
  activeMenu: string;
}

export default function Content({ activeMenu }: ContentProps) {
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
        <ThemeSwitch />       
        {/* 工具面板 */}
        <Card className="p-6">          
          {renderContent()}
        </Card>
      </div>
    </div>
  );
}