import React from 'react';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Radial Gradient Aurora Mesh Blobs */}
      <div className="aurora-blob aurora-1"></div>
      <div className="aurora-blob aurora-2"></div>
      <div className="aurora-blob aurora-3"></div>

      {/* Top and Bottom Lighting Vignettes */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505] to-transparent z-1"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-1"></div>
    </div>
  );
};
