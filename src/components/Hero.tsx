import React, { useState } from 'react';
import { Download, Camera, User, Sliders, ZoomIn, ZoomOut, RotateCcw, Check, Trash2, Mail, Github, MapPin, Move, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { UserProfile } from '../types';
import { compressImage } from '../utils/imageCompressor';
import { uploadFileToServer } from '../utils/api';

interface HeroProps {
  profile: UserProfile;
  onNavigate: (sectionId: string) => void;
  onDownloadResume: () => void;
  onSaveProfile?: (updated: UserProfile) => void;
  onOpenAdminLogin?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onNavigate, onDownloadResume, onSaveProfile, onOpenAdminLogin }) => {
  const [showSizeControls, setShowSizeControls] = useState(false);
  const [activeTab, setActiveTab] = useState<'position' | 'size'>('position');

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressed = await compressImage(file, 1200, 1200, 0.88);
        if (compressed) {
          const uploadRes = await uploadFileToServer(compressed, file.name, file.type);
          const finalUrl = uploadRes.url || compressed;
          if (onSaveProfile) {
            onSaveProfile({ ...profile, photoUrl: finalUrl });
          }
        }
      } catch (err) {
        console.error('Profile photo upload error:', err);
      }
    }
  };

  const handleUpdateWidth = (newWidth: number) => {
    const clamped = Math.max(120, Math.min(500, Math.round(newWidth)));
    if (onSaveProfile) {
      onSaveProfile({ ...profile, photoWidth: clamped });
    }
  };

  const handleUpdateOffset = (offsetX: number, offsetY: number) => {
    const clampedX = Math.max(-200, Math.min(200, Math.round(offsetX)));
    const clampedY = Math.max(-100, Math.min(150, Math.round(offsetY)));
    if (onSaveProfile) {
      onSaveProfile({ ...profile, photoOffsetX: clampedX, photoOffsetY: clampedY });
    }
  };

  const handleUpdateAlign = (align: 'left' | 'center' | 'right') => {
    if (onSaveProfile) {
      onSaveProfile({ ...profile, photoAlign: align });
    }
  };

  const handleResetPositionAndSize = () => {
    if (onSaveProfile) {
      onSaveProfile({
        ...profile,
        photoWidth: 280,
        photoOffsetX: 0,
        photoOffsetY: 0,
        photoAlign: 'left',
      });
    }
  };

  const handleDeletePhoto = () => {
    if (window.confirm('프로필 사진을 삭제하시겠습니까?')) {
      if (onSaveProfile) {
        onSaveProfile({ ...profile, photoUrl: '' });
      }
    }
  };

  const activePhoto = profile.photoUrl;
  const currentWidth = profile.photoWidth || 280;
  const currentOffsetX = profile.photoOffsetX || 0;
  const currentOffsetY = profile.photoOffsetY || 0;
  const currentAlign = profile.photoAlign || 'left';

  const alignClass = currentAlign === 'left' 
    ? 'lg:items-start' 
    : currentAlign === 'right' 
      ? 'lg:items-end' 
      : 'lg:items-center';

  const catchphrase = profile.homeCatchphrase || "전자공학 기초 지식과 1년의 학부연구생 경험을 바탕으로 빠르게 배우고 성장하는 준비된 신입 개발자입니다.";
  const badges = profile.homeBadges && profile.homeBadges.length > 0 
    ? profile.homeBadges 
    : ['회로 이론/설계', 'C/C++', 'Verilog', 'Python/PyTorch', '컴퓨터비전 연구 1년', 'STM32 임베디드'];
  const ctaText = profile.homeCtaText || "이력서 (PDF) 바로 다운로드";
  const summaryTitle = profile.homeSummaryTitle || "[신입 포부] 빠른 학습 능력과 강한 정직함으로 기여하겠습니다.";
  const summaryDesc = profile.homeSummaryDesc || "숙명여대 전자공학과 전공(학점 3.92/4.5) 과정과 AI 랩 학부연구생 1년 경험으로 회로 및 컴퓨터비전 기초 프로젝트를 완수했습니다.";
  const homeLabRole = profile.homeLabRole || profile.labRole || '컴퓨터비전 랩 (1년)';

  return (
    <section id="home" className="pt-24 pb-16 md:pt-28 md:pb-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout: Full width utilization with Left Content & Right Photo/Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (Span 8): Name, Catchphrase, Badges, and Contact Info */}
          <div className="lg:col-span-8 space-y-5 sm:pl-2 lg:pl-4">
            
            {/* Text: Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {profile.name}{' '}
                {profile.engName && (
                  <span className="text-xl sm:text-2xl font-medium text-slate-400 block sm:inline mt-1 sm:mt-0 font-mono">
                    ({profile.engName})
                  </span>
                )}
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#0055ff] mt-1.5 font-mono uppercase tracking-wide">
                {profile.title}
              </p>
            </div>

            {/* Catchphrase / Intro */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed whitespace-pre-line pt-0.5 tracking-tight max-w-3xl">
              &quot;{catchphrase}&quot;
            </h2>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-2.5 font-mono pt-1">
              {badges.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 bg-[#eef4ff] text-[#004bd6] border border-[#cde0fd] hover:bg-[#e2edff] transition-colors rounded-none text-xs sm:text-[13px] font-bold shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Direct Contact Links Card (Placed on Left to eliminate bottom-left void) */}
            <div className="w-full bg-[#fbfbfb] p-3.5 border border-gray-200 shadow-2xs space-y-2 text-xs font-mono">
              <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                {profile.contactTitle || 'CONTACT INFORMATION'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-0.5">
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="w-3.5 h-3.5 text-[#0055ff] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-slate-400 text-[10px] block leading-tight">Email</span>
                    <a href={`mailto:${profile.email}`} className="text-slate-900 font-bold hover:text-[#0055ff] underline text-[11px] truncate block" title={profile.email}>
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 min-w-0">
                  <Github className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-slate-400 text-[10px] block leading-tight">GitHub</span>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-900 font-bold hover:text-[#0055ff] underline text-[11px] truncate block" title={profile.github}>
                      {profile.github.replace('https://github.com/', '')}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 min-w-0">
                  <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-slate-400 text-[10px] block leading-tight">Location</span>
                    <span className="text-slate-900 font-bold text-[11px] truncate block">{profile.location}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Span 4): Profile Photo cleanly aligned towards content */}
          <div className={`lg:col-span-4 flex flex-col items-center ${alignClass} justify-center pt-2 sm:pt-3 lg:pt-5`}>
            
            {/* Seamless Borderless Profile Photo */}
            <div className="shrink-0 relative group/photo">
              {activePhoto ? (
                <div 
                  className="relative inline-block transition-all duration-75"
                  style={{ 
                    width: `${currentWidth}px`, 
                    maxWidth: '100%',
                    transform: `translate(${currentOffsetX}px, ${currentOffsetY}px)`
                  }}
                >
                  {/* Borderless, Shadowless, Natural aspect ratio image with secret admin entry click */}
                  <img 
                    src={activePhoto} 
                    alt="프로필 사진" 
                    onClick={onOpenAdminLogin}
                    className="w-full h-auto object-contain block cursor-pointer select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div 
                  onClick={onOpenAdminLogin}
                  className="p-4 bg-slate-50 border border-dashed border-gray-300 rounded text-center space-y-1.5 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto text-slate-400">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-bold block">
                    프로필 사진
                  </span>
                </div>
              )}

              {/* Interactive Position & Size Controller Popup */}
              {activePhoto && showSizeControls && (
                <div className="absolute top-full right-0 mt-2 z-40 w-72 p-3.5 bg-white border border-slate-300 shadow-xl space-y-3 font-mono text-xs">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                      <Move className="w-3.5 h-3.5 text-[#0055ff]" />
                      <span>사진 위치 & 크기 조절</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleResetPositionAndSize}
                        className="text-[10px] text-slate-500 hover:text-slate-900 flex items-center gap-0.5"
                        title="기본값으로 초기화"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>초기화</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowSizeControls(false)}
                        className="text-[10px] font-bold text-blue-600 hover:text-blue-800"
                      >
                        닫기
                      </button>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex border-b border-slate-200">
                    <button
                      type="button"
                      onClick={() => setActiveTab('position')}
                      className={`flex-1 py-1 text-center text-[11px] font-bold border-b-2 transition-colors flex items-center justify-center gap-1 ${
                        activeTab === 'position' 
                          ? 'border-[#0055ff] text-[#0055ff]' 
                          : 'border-transparent text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Move className="w-3 h-3" />
                      <span>위치 이동</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('size')}
                      className={`flex-1 py-1 text-center text-[11px] font-bold border-b-2 transition-colors flex items-center justify-center gap-1 ${
                        activeTab === 'size' 
                          ? 'border-[#0055ff] text-[#0055ff]' 
                          : 'border-transparent text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Sliders className="w-3 h-3" />
                      <span>크기 조절</span>
                    </button>
                  </div>

                  {/* Tab 1: Position Controls */}
                  {activeTab === 'position' && (
                    <div className="space-y-3 pt-1">
                      {/* Alignment Presets */}
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-500 font-bold block">정렬 기준</span>
                        <div className="grid grid-cols-3 gap-1">
                          <button
                            type="button"
                            onClick={() => handleUpdateAlign('left')}
                            className={`py-1 text-[10px] font-bold border flex items-center justify-center gap-1 transition-colors ${
                              currentAlign === 'left' 
                                ? 'bg-[#0055ff] text-white border-[#0055ff]' 
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <AlignLeft className="w-3 h-3" />
                            <span>왼쪽</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleUpdateAlign('center')}
                            className={`py-1 text-[10px] font-bold border flex items-center justify-center gap-1 transition-colors ${
                              currentAlign === 'center' 
                                ? 'bg-[#0055ff] text-white border-[#0055ff]' 
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <AlignCenter className="w-3 h-3" />
                            <span>가운데</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleUpdateAlign('right')}
                            className={`py-1 text-[10px] font-bold border flex items-center justify-center gap-1 transition-colors ${
                              currentAlign === 'right' 
                                ? 'bg-[#0055ff] text-white border-[#0055ff]' 
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <AlignRight className="w-3 h-3" />
                            <span>오른쪽</span>
                          </button>
                        </div>
                      </div>

                      {/* Direction Pad & Quick Move */}
                      <div className="bg-slate-50 p-2.5 border border-slate-200 rounded-none space-y-2">
                        <span className="text-[10px] text-slate-500 font-bold block text-center">방향키 미세 조정 (5px 단위)</span>
                        <div className="flex flex-col items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleUpdateOffset(currentOffsetX, currentOffsetY - 5)}
                            className="p-1 bg-white border border-slate-300 hover:bg-blue-50 hover:border-blue-400 rounded text-slate-700 shadow-2xs"
                            title="위로 5px 이동"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleUpdateOffset(currentOffsetX - 5, currentOffsetY)}
                              className="p-1 bg-white border border-slate-300 hover:bg-blue-50 hover:border-blue-400 rounded text-slate-700 shadow-2xs"
                              title="왼쪽으로 5px 이동"
                            >
                              <ArrowLeft className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-[9px] text-slate-400 font-mono w-14 text-center">
                              {currentOffsetX},{currentOffsetY}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleUpdateOffset(currentOffsetX + 5, currentOffsetY)}
                              className="p-1 bg-white border border-slate-300 hover:bg-blue-50 hover:border-blue-400 rounded text-slate-700 shadow-2xs"
                              title="오른쪽으로 5px 이동"
                            >
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleUpdateOffset(currentOffsetX, currentOffsetY + 5)}
                            className="p-1 bg-white border border-slate-300 hover:bg-blue-50 hover:border-blue-400 rounded text-slate-700 shadow-2xs"
                            title="아래로 5px 이동"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* X and Y Sliders */}
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-[10px] text-slate-600 mb-0.5">
                            <span>좌/우 이동 (X축)</span>
                            <strong className="text-[#0055ff]">{currentOffsetX > 0 ? `+${currentOffsetX}` : currentOffsetX}px</strong>
                          </div>
                          <input 
                            type="range"
                            min="-150"
                            max="150"
                            step="2"
                            value={currentOffsetX}
                            onChange={(e) => handleUpdateOffset(Number(e.target.value), currentOffsetY)}
                            className="w-full h-1.5 bg-slate-200 rounded appearance-none cursor-pointer accent-[#0055ff]"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between text-[10px] text-slate-600 mb-0.5">
                            <span>상/하 이동 (Y축)</span>
                            <strong className="text-[#0055ff]">{currentOffsetY > 0 ? `+${currentOffsetY}` : currentOffsetY}px</strong>
                          </div>
                          <input 
                            type="range"
                            min="-80"
                            max="120"
                            step="2"
                            value={currentOffsetY}
                            onChange={(e) => handleUpdateOffset(currentOffsetX, Number(e.target.value))}
                            className="w-full h-1.5 bg-slate-200 rounded appearance-none cursor-pointer accent-[#0055ff]"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Size Controls */}
                  {activeTab === 'size' && (
                    <div className="space-y-3 pt-1">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-600">
                          <span>너비: <strong className="text-[#0055ff]">{currentWidth}px</strong></span>
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => handleUpdateWidth(currentWidth - 20)}
                              className="p-1 bg-white border border-slate-300 hover:bg-slate-100 rounded text-slate-700"
                              title="20px 축소"
                            >
                              <ZoomOut className="w-3 h-3" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleUpdateWidth(currentWidth + 20)}
                              className="p-1 bg-white border border-slate-300 hover:bg-slate-100 rounded text-slate-700"
                              title="20px 확대"
                            >
                              <ZoomIn className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <input 
                          type="range"
                          min="100"
                          max="450"
                          step="10"
                          value={currentWidth}
                          onChange={(e) => handleUpdateWidth(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-200 rounded appearance-none cursor-pointer accent-[#0055ff]"
                        />

                        {/* Preset Size Buttons */}
                        <div className="flex items-center gap-1 pt-1">
                          {[
                            { label: '160px', w: 160 },
                            { label: '220px', w: 220 },
                            { label: '280px', w: 280 },
                            { label: '340px', w: 340 },
                          ].map((preset) => (
                            <button
                              key={preset.w}
                              type="button"
                              onClick={() => handleUpdateWidth(preset.w)}
                              className={`flex-1 py-1 text-[10px] border transition-colors ${
                                currentWidth === preset.w 
                                  ? 'bg-[#0055ff] text-white border-[#0055ff] font-bold' 
                                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {preset.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Footer Action */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleResetPositionAndSize}
                      className="text-[10px] text-slate-500 hover:text-slate-800 flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>위치/크기 리셋</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleDeletePhoto}
                      className="text-[10px] text-rose-600 hover:text-rose-800 flex items-center gap-1 font-bold"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>사진 삭제</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


