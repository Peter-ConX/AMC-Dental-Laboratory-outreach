import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setPosition(percent);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section id="before-after-section" className="w-full px-4 sm:px-8 py-16 sm:py-24 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sandstone text-stone-800 text-xs font-bold tracking-widest uppercase mb-3">
            <span>LABORATORY RESTORATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-charcoal tracking-tight">
            Repair. Restore. Ready Again.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
            Drag the interactive slider below to see how a cracked pink acrylic denture is seamlessly fused, reinforced, and polished back to pristine condition at our laboratory bench.
          </p>
        </div>

        {/* Slider Canvas */}
        <div className="max-w-4xl mx-auto bg-stone-900 rounded-2xl p-3 sm:p-5 shadow-2xl border border-stone-800">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-stone-950 cursor-ew-resize select-none touch-none"
          >
            {/* 1. BEFORE IMAGE (Full background) */}
            <img
              src="assets/images/repair-before.jpg"
              alt="Upper acrylic denture with clean vertical crack before repair"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 left-4 z-10 bg-brand-charcoal/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-white text-xs font-mono font-bold tracking-wider">
              BEFORE: FRACTURED
            </div>

            {/* 2. AFTER IMAGE (Clipped overlay) */}
            <div
              className="absolute inset-0 h-full overflow-hidden border-r-2 border-white pointer-events-none z-10"
              style={{ width: `${position}%` }}
            >
              <img
                src="assets/images/repair-after.jpg"
                alt="Upper acrylic denture fully restored, fused and polished after laboratory repair"
                className="absolute top-0 left-0 h-full max-w-none object-cover"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
                  height: '100%'
                }}
              />
              <div className="absolute top-4 right-4 z-10 bg-emerald-900/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-emerald-400/30 text-emerald-200 text-xs font-mono font-bold tracking-wider">
                AFTER: RESTORED
              </div>
            </div>

            {/* 3. SLIDER HANDLE */}
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-2 border-brand-teal text-brand-teal shadow-xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="mt-4 px-2 flex items-center justify-between gap-4 text-xs text-stone-400">
            <span className="font-medium">← Drag handle left/right to compare before and after</span>
            <span className="text-stone-500 font-mono text-[11px]">Laboratory Demonstration</span>
          </div>

          <div className="mt-4 pt-4 border-t border-stone-800/80 text-center">
            <p className="text-xs text-stone-400 italic max-w-2xl mx-auto">
              *Demonstration laboratory case study. Illustrates standard high-impact acrylic fusion and high-gloss bench finishing. Actual patient repair results may vary depending on base material integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
