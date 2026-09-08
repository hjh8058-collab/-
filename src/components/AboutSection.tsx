import React from 'react';
import { UserProfile } from '../types';
import { GraduationCap, Building2, Code2, Cpu, Brain, Wrench, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  profile: UserProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const defaultSkillCategories = [
    {
      title: 'AI & Computer Vision (AI & CV)',
      icon: <Brain className="w-4 h-4 text-emerald-600" />,
      skills: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Matplotlib', 'pandas', 'scikit-learn', 'LLM', 'Generative AI'],
      color: 'border-l-emerald-600'
    },
    {
      title: '하드웨어 & 임베디드 (HW & Embedded)',
      icon: <Cpu className="w-4 h-4 text-indigo-600" />,
      skills: ['KiCad (PCB 설계)', 'Vivado (FPGA)', 'STM32 (FreeRTOS)', '오실로스코프 디버깅'],
      color: 'border-l-indigo-600'
    },
    {
      title: '개발 도구 (Tools & Environment)',
      icon: <Wrench className="w-4 h-4 text-amber-600" />,
      skills: ['Git / GitHub', 'Linux (Ubuntu)', 'VS Code', 'Jupyter Lab'],
      color: 'border-l-amber-600'
    }
  ];

  const skillCategories = profile.skillCategories && profile.skillCategories.length > 0
    ? profile.skillCategories.map((cat, idx) => {
        const isAI = cat.title.includes('AI') || cat.title.includes('비전') || cat.title.includes('CV');
        const isLang = cat.title.includes('언어') || cat.title.includes('Language') || cat.title.includes('Code');
        const isHW = cat.title.includes('하드웨어') || cat.title.includes('임베디드') || cat.title.includes('HW');
        const isTool = cat.title.includes('도구') || cat.title.includes('Tool') || cat.title.includes('환경');

        const icon = isAI ? <Brain key={idx} className="w-4 h-4 text-emerald-600" /> :
                     isLang ? <Code2 key={idx} className="w-4 h-4 text-[#0055ff]" /> :
                     isHW ? <Cpu key={idx} className="w-4 h-4 text-indigo-600" /> :
                     isTool ? <Wrench key={idx} className="w-4 h-4 text-amber-600" /> :
                     <Code2 key={idx} className="w-4 h-4 text-[#0055ff]" />;

        const defaultColor = isAI ? 'border-l-emerald-600' :
                             isLang ? 'border-l-[#0055ff]' :
                             isHW ? 'border-l-indigo-600' :
                             isTool ? 'border-l-amber-600' :
                             'border-l-[#0055ff]';

        return {
          title: cat.title,
          icon,
          skills: cat.skills,
          color: cat.color || defaultColor
        };
      })
    : defaultSkillCategories;

  return (
    <section id="about" className="py-16 bg-[#fbfbfb] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-end border-b border-gray-200 pb-3">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#0055ff] tracking-widest uppercase block mb-1">
              {profile.aboutTag || 'PROFILE & CORE SKILLS'}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight italic">
              {profile.aboutTitle || '01. ABOUT ME & TECH STACK (학력 및 보유 기술)'}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-slate-400 hidden sm:block">
            REF: GRADUATE_PROFILE_2026
          </span>
        </div>

        {/* Academic & Lab Info (Top Two-Column Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Academic Card */}
          <div className="bg-white p-5 rounded-none border border-gray-200 shadow-2xs flex items-start gap-4 relative">
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#0055ff]" />
            <div className="p-2.5 bg-[#0055ff]/10 text-[#0055ff] shrink-0 rounded-none mt-0.5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                {profile.academicTitle || '학력 사항 (Academic Background)'}
              </div>
              <div className="font-bold text-slate-900 text-sm">{profile.university}</div>
              <div className="text-xs text-slate-600">{profile.major}</div>
            </div>
          </div>

          {/* Lab Card */}
          <div className="bg-white p-5 rounded-none border border-gray-200 shadow-2xs flex items-start gap-4 relative">
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-indigo-600" />
            <div className="p-2.5 bg-indigo-50 text-indigo-600 shrink-0 rounded-none mt-0.5">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                {profile.labTitle || '학부연구생 활동 (Lab Activity)'}
              </div>
              <div className="font-bold text-slate-900 text-sm">{profile.labName}</div>
              <div className="text-xs text-slate-600">{profile.labRole || '컴퓨터비전 랩 (1년)'}</div>
              <div className="text-xs font-mono text-indigo-600 font-bold pt-0.5">{profile.labSubject || '반도체 Wafermap AI 연구'}</div>
            </div>
          </div>

        </div>

        {/* Tech Stack Clean Grid */}
        <div className="bg-white p-6 sm:p-8 rounded-none border border-gray-200 shadow-2xs space-y-6 relative">
          <div className="flex flex-wrap justify-between items-center border-b border-gray-100 pb-3 gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0055ff]" />
              <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                {profile.techStackTitle || '보유 기술 스택 (Tech Stack)'}
              </h3>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">
              {profile.techStackSubtag || 'CORE CAPABILITIES & TOOLS'}
            </span>
          </div>

          {/* Categories Grid (2 Columns on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className={`p-4 bg-[#fcfcfc] border border-gray-200 border-l-4 ${cat.color} space-y-2.5 transition-all hover:bg-white`}
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 font-mono">
                  {cat.icon}
                  <span>{cat.title}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 bg-white text-slate-800 text-[11px] font-mono font-bold border border-gray-200 rounded-none shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
