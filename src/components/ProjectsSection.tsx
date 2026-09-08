import React, { useState } from 'react';
import { Project, ProjectSectionItem, UserProfile } from '../types';
import { Github, FileText, ChevronDown, ChevronUp, ExternalLink, BookOpen, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { normalizeImageUrl } from '../utils/imageUrl';

interface ProjectsSectionProps {
  projects: Project[];
  profile?: UserProfile;
  onOpenAdminProjects?: () => void;
  selectedSkillFilter?: string | null;
  onClearSkillFilter?: () => void;
}

const formatProjectContent = (text: string) => {
  if (!text) return '';
  let formatted = text;

  // 1. Markdown Headers (e.g. ### Header, ## Header, # Header)
  formatted = formatted.replace(/^### (.*$)/gim, '<span class="block text-sm sm:text-base font-bold text-slate-900 mt-2.5 mb-1 font-mono">$1</span>');
  formatted = formatted.replace(/^## (.*$)/gim, '<span class="block text-base sm:text-lg font-bold text-slate-900 mt-3 mb-1.5 font-mono">$1</span>');
  formatted = formatted.replace(/^# (.*$)/gim, '<span class="block text-lg sm:text-xl font-bold text-slate-900 mt-3.5 mb-2 font-mono">$1</span>');

  // 2. Custom Size Tags
  formatted = formatted.replace(/\[xl\](.*?)\[\/xl\]/gi, '<span class="text-lg sm:text-xl font-bold text-slate-900 leading-snug">$1</span>');
  formatted = formatted.replace(/\[lg\](.*?)\[\/lg\]/gi, '<span class="text-base sm:text-lg font-bold text-slate-900 leading-snug">$1</span>');
  formatted = formatted.replace(/\[md\](.*?)\[\/md\]/gi, '<span class="text-sm sm:text-base font-semibold text-slate-800">$1</span>');
  formatted = formatted.replace(/\[big\](.*?)\[\/big\]/gi, '<span class="text-base sm:text-lg font-bold text-slate-900 leading-snug">$1</span>');
  formatted = formatted.replace(/<big>(.*?)<\/big>/gi, '<span class="text-base sm:text-lg font-bold text-slate-900 leading-snug">$1</span>');

  // 3. Custom Color / Highlight Tags
  formatted = formatted.replace(/\[blue\](.*?)\[\/blue\]/gi, '<span class="text-[#0055ff] font-bold">$1</span>');
  formatted = formatted.replace(/\[red\](.*?)\[\/red\]/gi, '<span class="text-rose-600 font-bold">$1</span>');
  formatted = formatted.replace(/\[green\](.*?)\[\/green\]/gi, '<span class="text-emerald-600 font-bold">$1</span>');
  formatted = formatted.replace(/\[highlight\](.*?)\[\/highlight\]/gi, '<mark class="bg-yellow-100 text-slate-900 px-1 py-0.5 rounded font-semibold">$1</mark>');

  // 4. Markdown Bold & Italic
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  formatted = formatted.replace(/__(.*?)__/g, '<strong class="font-bold text-slate-900">$1</strong>');
  formatted = formatted.replace(/(?<!\w)\*(?!\s)(.*?)(?<!\s)\*(?!\w)/g, '<em class="italic">$1</em>');

  // 5. Markdown Image format: ![alt](url)
  formatted = formatted.replace(/!\[(.*?)\]\((.*?)\)/g, '<div class="my-2 text-center"><img src="$2" alt="$1" class="w-full max-w-[560px] mx-auto h-auto object-cover inline-block" referrerpolicy="no-referrer" /></div>');

  // 6. Inline Code: `code`
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-[#0055ff] font-mono text-xs sm:text-[13px] border border-slate-200">$1</code>');

  return formatted;
};

// Reusable Section Content & Image Renderer
const renderSectionContent = (sec: ProjectSectionItem) => {
  const rawImages = (sec.images && sec.images.length > 0)
    ? sec.images
    : (sec.imageUrl ? [{ id: 'legacy', url: sec.imageUrl, imageSize: sec.imageSize || 'full', imageAlign: sec.imageAlign || 'center', imagePosition: sec.imagePosition || 'bottom' }] : []);
  
  const imagesList = rawImages.filter(img => img && typeof img.url === 'string' && img.url.trim().length > 0);

  const renderImageItem = (imgItem: any, idx: number) => {
    if (!imgItem || !imgItem.url) return null;
    const directUrl = normalizeImageUrl(imgItem.url);
    const sizeClass = 
      imgItem.imageSize === 'sm' ? 'max-w-[220px]' :
      imgItem.imageSize === 'md' ? 'max-w-[380px]' :
      imgItem.imageSize === 'lg' ? 'max-w-[560px]' : 'w-full';

    const alignClass = 
      imgItem.imageAlign === 'left' ? 'text-left' :
      imgItem.imageAlign === 'right' ? 'text-right' : 'text-center';

    return (
      <div key={imgItem.id || idx} className={`my-1 inline-block ${sizeClass} ${alignClass === 'text-left' ? 'mr-auto' : alignClass === 'text-right' ? 'ml-auto' : 'mx-auto'}`}>
        <img 
          src={directUrl} 
          alt={sec.title || 'Project image'} 
          className="w-full h-auto object-cover max-h-[500px] block" 
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            target.classList.add('opacity-40');
          }}
        />
      </div>
    );
  };

  const contentText = sec.content || '';

  if (imagesList.length > 0) {
    const tagRegex = /\[(?:image|img|사진)(?:\s*:\s*(\d+))?\]/gi;
    const hasAnyTags = /\[(?:image|img|사진)(?:\s*:\s*\d+)?\]/i.test(contentText);

    if (hasAnyTags) {
      let match;
      let lastIndex = 0;
      const elements: React.ReactNode[] = [];
      const usedImageIndices = new Set<number>();
      let autoIndex = 0;

      while ((match = tagRegex.exec(contentText)) !== null) {
        const matchIndex = match.index;
        let imgIdx: number;

        if (match[1] !== undefined) {
          imgIdx = parseInt(match[1], 10);
        } else {
          while (usedImageIndices.has(autoIndex) && autoIndex < imagesList.length) {
            autoIndex++;
          }
          imgIdx = autoIndex++;
        }

        usedImageIndices.add(imgIdx);

        if (matchIndex > lastIndex) {
          let textSegment = contentText.substring(lastIndex, matchIndex);
          textSegment = textSegment.replace(/\s+$/, '');
          if (textSegment.trim()) {
            elements.push(
              <div
                key={`text-${lastIndex}`}
                className="text-slate-700 whitespace-pre-line leading-relaxed text-sm sm:text-[15px]"
                dangerouslySetInnerHTML={{ __html: formatProjectContent(textSegment) }}
              />
            );
          }
        }

        const targetImg = rawImages[imgIdx] || imagesList[imgIdx];
        if (targetImg && targetImg.url) {
          const alignClass = targetImg.imageAlign === 'left' ? 'text-left' : targetImg.imageAlign === 'right' ? 'text-right' : 'text-center';
          elements.push(
            <div key={`img-${imgIdx}-${matchIndex}`} className={`${alignClass} my-0.5 leading-none`}>
              {renderImageItem(targetImg, imgIdx)}
            </div>
          );
        }

        lastIndex = tagRegex.lastIndex;
      }

      if (lastIndex < contentText.length) {
        let textSegment = contentText.substring(lastIndex);
        textSegment = textSegment.replace(/^\s+/, '');
        if (textSegment.trim()) {
          elements.push(
            <div
              key={`text-${lastIndex}`}
              className="text-slate-700 whitespace-pre-line leading-relaxed text-sm sm:text-[15px]"
              dangerouslySetInnerHTML={{ __html: formatProjectContent(textSegment) }}
            />
          );
        }
      }

      imagesList.forEach((img, idx) => {
        if (!usedImageIndices.has(idx) && img && img.url) {
          const alignClass = img.imageAlign === 'left' ? 'text-left' : img.imageAlign === 'right' ? 'text-right' : 'text-center';
          elements.push(
            <div key={`img-remaining-${idx}`} className={`${alignClass} my-0.5 leading-none`}>
              {renderImageItem(img, idx)}
            </div>
          );
        }
      });

      return <div className="space-y-1">{elements}</div>;
    } else {
      const pos = imagesList[0]?.imagePosition || sec.imagePosition || 'bottom';
      if (pos === 'top') {
        return (
          <div className="space-y-1">
            {imagesList.map((img, idx) => (
              <div key={idx} className={`${img.imageAlign === 'left' ? 'text-left' : img.imageAlign === 'right' ? 'text-right' : 'text-center'} my-0.5 leading-none`}>
                {renderImageItem(img, idx)}
              </div>
            ))}
            {sec.content && (
              <div
                className="text-slate-700 whitespace-pre-line leading-relaxed text-sm sm:text-[15px]"
                dangerouslySetInnerHTML={{ __html: formatProjectContent(sec.content.replace(/^\s+/, '')) }}
              />
            )}
          </div>
        );
      } else if (pos === 'middle') {
        const lines = sec.content ? sec.content.split('\n') : [];
        const mid = Math.ceil(lines.length / 2);
        const topC = lines.slice(0, mid).join('\n').replace(/\s+$/, '');
        const botC = lines.slice(mid).join('\n').replace(/^\s+/, '');
        return (
          <div className="space-y-1">
            {topC && (
              <div
                className="text-slate-700 whitespace-pre-line leading-relaxed text-sm sm:text-[15px]"
                dangerouslySetInnerHTML={{ __html: formatProjectContent(topC) }}
              />
            )}
            {imagesList.map((img, idx) => (
              <div key={idx} className={`${img.imageAlign === 'left' ? 'text-left' : img.imageAlign === 'right' ? 'text-right' : 'text-center'} my-0.5 leading-none`}>
                {renderImageItem(img, idx)}
              </div>
            ))}
            {botC && (
              <div
                className="text-slate-700 whitespace-pre-line leading-relaxed text-sm sm:text-[15px]"
                dangerouslySetInnerHTML={{ __html: formatProjectContent(botC) }}
              />
            )}
          </div>
        );
      } else {
        return (
          <div className="space-y-1">
            {sec.content && (
              <div
                className="text-slate-700 whitespace-pre-line leading-relaxed text-sm sm:text-[15px]"
                dangerouslySetInnerHTML={{ __html: formatProjectContent(sec.content.replace(/\s+$/, '')) }}
              />
            )}
            {imagesList.map((img, idx) => (
              <div key={idx} className={`${img.imageAlign === 'left' ? 'text-left' : img.imageAlign === 'right' ? 'text-right' : 'text-center'} my-0.5 leading-none`}>
                {renderImageItem(img, idx)}
              </div>
            ))}
          </div>
        );
      }
    }
  } else {
    return (
      <div className="space-y-1">
        {sec.content && (
          <div
            className="text-slate-700 whitespace-pre-line leading-relaxed text-sm sm:text-[15px]"
            dangerouslySetInnerHTML={{ __html: formatProjectContent(sec.content) }}
          />
        )}
      </div>
    );
  }
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  profile,
  selectedSkillFilter,
  onClearSkillFilter,
}) => {
  // Track open state for sub-project sections in Side/Other projects
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  
  // Track open state for Main projects (default: false = collapsed)
  const [expandedMainProjects, setExpandedMainProjects] = useState<Record<string, boolean>>({});

  // Filter projects if skill filter is active
  const filteredProjects = selectedSkillFilter
    ? projects.filter(p => 
        p.tags.some(t => t.toLowerCase().includes(selectedSkillFilter.toLowerCase())) ||
        p.category.toLowerCase().includes(selectedSkillFilter.toLowerCase()) ||
        p.title.toLowerCase().includes(selectedSkillFilter.toLowerCase())
      )
    : projects;

  const isMainProject = (project: Project) => {
    return Boolean(
      project.isMain ||
      project.id === 'proj-wafermap-ai' ||
      project.title.toLowerCase().includes('wafermap') ||
      project.title.toLowerCase().includes('waferclip') ||
      (project.subtitle && project.subtitle.toLowerCase().includes('wafermap'))
    );
  };

  const mainProjects = filteredProjects.filter(p => isMainProject(p));
  const subProjects = filteredProjects.filter(p => !isMainProject(p));

  const toggleSection = (sectionKeyId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKeyId]: !prev[sectionKeyId]
    }));
  };

  const toggleMainProject = (projectId: string) => {
    setExpandedMainProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section id="projects" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-200 pb-3 gap-3">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#0055ff] tracking-widest uppercase block mb-1">
              {profile?.projectsTag || 'UNDERGRADUATE PROJECTS'}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight italic">
              {profile?.projectsTitle || '02. 프로젝트 (Lab Work & Projects)'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {selectedSkillFilter && (
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 border border-blue-200 text-xs font-mono text-[#0055ff]">
                <span>Filter: #{selectedSkillFilter}</span>
                {onClearSkillFilter && (
                  <button onClick={onClearSkillFilter} className="hover:font-bold">×</button>
                )}
              </div>
            )}
            <span className="text-[10px] font-mono text-slate-400 hidden sm:block">
              TOTAL: {filteredProjects.length} PROJECTS
            </span>
          </div>
        </div>

        {/* 1. MAIN PROJECTS (메인 프로젝트: WaferCLIP - 사이드 프로젝트와 동일한 톤앤매너) */}
        {mainProjects.map((project) => {
          const isOpen = Boolean(expandedMainProjects[project.id]);
          const pdfDocs = (project.pdfDocuments && project.pdfDocuments.length > 0)
            ? project.pdfDocuments.filter(doc => !!doc.url)
            : ((project.pdfReportFileUrl || project.pdfReportUrl) ? [{
                id: 'legacy-pdf',
                title: project.pdfReportLabel || 'PDF 보고서',
                url: (project.pdfReportFileUrl || project.pdfReportUrl)!,
                fileName: project.pdfReportFileName || `${project.title}_보고서.pdf`
              }] : []);

          return (
            <div 
              key={project.id}
              className="bg-white border border-gray-300 shadow-2xs overflow-hidden transition-all"
            >
              {/* Project Header (Side Projects와 동일한 bg-[#f8f9fa] 및 패딩) */}
              <div className={`p-6 bg-[#f8f9fa] ${isOpen ? 'border-b border-gray-200' : ''} space-y-3`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="px-2.5 py-0.5 bg-[#0055ff] text-white font-bold uppercase tracking-wider text-[11px]">
                      MAIN PROJECT
                    </span>
                    <span className="px-2.5 py-0.5 bg-white text-slate-600 border border-gray-200 text-[10px] font-bold uppercase">
                      {project.category}
                    </span>
                    {project.date && (
                      <span className="text-slate-400 font-mono text-xs">[{project.date}]</span>
                    )}
                  </div>

                  {/* GitHub & PDF Links & Collapse Toggle */}
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1 px-2.5 bg-slate-900 hover:bg-[#0055ff] text-white font-bold flex items-center gap-1.5 transition-colors text-[11px]"
                      >
                        <Github className="w-3.5 h-3.5 text-white" />
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    )}
                    {pdfDocs.map((doc, docIdx) => (
                      <a
                        key={doc.id || docIdx}
                        href={doc.url}
                        download={doc.fileName || `${project.title}_${doc.title || '보고서'}.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1 px-2.5 bg-white hover:bg-blue-50 text-[#0055ff] border border-blue-200 font-bold flex items-center gap-1.5 transition-colors text-[11px]"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#0055ff]" />
                        <span>{doc.title || '논문 PDF'}</span>
                      </a>
                    ))}

                    {/* Main Project Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleMainProject(project.id)}
                      className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 border transition-all ${
                        isOpen
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-[#0055ff] border-[#0055ff] hover:bg-[#0055ff] hover:text-white'
                      }`}
                    >
                      <span>{isOpen ? '접기' : '상세 내용 보기'}</span>
                      {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div 
                  onClick={() => toggleMainProject(project.id)}
                  className="cursor-pointer group select-none"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-sans group-hover:text-[#0055ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans font-medium mt-0.5 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-mono bg-white text-slate-600 border border-gray-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Sections (펼쳤을 때 상세 본문 출력) */}
              {isOpen && (
                <div className="p-6 space-y-8 animate-fadeIn bg-white border-t border-gray-200">
                  {project.sections ? (
                    <div className="space-y-8 max-w-4xl mx-auto">
                      {Object.entries(project.sections as Record<string, ProjectSectionItem>).map(([key, sec]) => {
                        if (!sec || (!sec.title && !sec.content && !sec.imageUrl && (!sec.images || sec.images.length === 0))) return null;

                        return (
                          <div key={key} className="space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2 border-l-4 border-[#0055ff] pl-3">
                              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-mono tracking-wide">
                                {sec.title}
                              </h4>
                              {sec.date && (
                                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 border border-slate-200">
                                  {sec.date}
                                </span>
                              )}
                            </div>

                            {sec.tags && sec.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pl-3">
                                <div className="flex flex-wrap gap-1.5">
                                  {sec.tags.map((t, idx) => (
                                    <span key={idx} className="px-2 py-0.5 bg-blue-50 text-[#0055ff] text-[10px] font-mono font-bold border border-blue-200">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="bg-white p-6 sm:p-8 border border-gray-200 text-sm sm:text-[15px] leading-relaxed font-sans shadow-2xs">
                              {renderSectionContent(sec)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-white p-6 sm:p-8 border border-gray-200 text-sm sm:text-[15px] leading-relaxed font-sans text-slate-700 max-w-4xl mx-auto shadow-2xs">
                      {project.overview}
                    </div>
                  )}

                  {/* Bottom Collapse Button for Main Project (Only triangle arrow) */}
                  <div className="flex justify-end pt-2 border-t border-gray-100 max-w-4xl mx-auto">
                    <button
                      type="button"
                      onClick={() => toggleMainProject(project.id)}
                      className="w-8 h-8 flex items-center justify-center bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#0055ff] border border-slate-200 transition-colors rounded-none"
                      title="본문 접기"
                      aria-label="본문 접기"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* 2. SUB PROJECTS: SIDE & OTHER (목차 레이아웃 -> 소제목 클릭 시 세부 본문 열림) */}
        {subProjects.length > 0 && (
          <div className="space-y-10">
            {subProjects.map((project) => {
              const sectionsEntries = project.sections 
                ? Object.entries(project.sections as Record<string, ProjectSectionItem>).filter(([_, s]) => s && (s.title || s.content))
                : [];

              return (
                <div 
                  key={project.id}
                  className="bg-white border border-gray-300 shadow-2xs overflow-hidden"
                >
                  {/* Group Header (목차 상단 분류) */}
                  <div className="p-6 bg-[#f8f9fa] border-b border-gray-200 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-[#0055ff] text-white text-xs font-mono font-bold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-500 font-bold">
                          {sectionsEntries.length} PROJECTS
                        </span>
                      </div>
                      
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-2 py-0.5 bg-white text-slate-600 text-[10px] font-mono border border-gray-200">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#0055ff]" />
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-sans">
                          {project.title}
                        </h3>
                      </div>
                      {project.subtitle && (
                        <p className="text-slate-600 text-xs sm:text-sm font-sans font-medium mt-0.5 pl-7">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Table of Contents List (소제목 목차 목록) */}
                  {sectionsEntries.length > 0 ? (
                    <div className="divide-y divide-gray-200">
                      {sectionsEntries.map(([secKey, sec], index) => {
                        const uniqueKey = `${project.id}-${secKey}`;
                        const isOpen = Boolean(expandedSections[uniqueKey]);

                        return (
                          <div 
                            key={secKey}
                            className={`transition-colors ${isOpen ? 'bg-white' : 'bg-white hover:bg-[#fafafa]'}`}
                          >
                            {/* Table of Contents Item Header (소제목 줄 클릭 트리거) */}
                            <div
                              onClick={() => toggleSection(uniqueKey)}
                              className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4 select-none"
                            >
                              <div className="space-y-1.5 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-sans tracking-tight hover:text-[#0055ff] transition-colors">
                                    {sec.title}
                                  </h4>
                                  {sec.date && (
                                    <span className="text-[11px] font-mono text-slate-400">
                                      [{sec.date}]
                                    </span>
                                  )}
                                </div>

                                {sec.summary && (
                                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
                                    {sec.summary}
                                  </p>
                                )}

                                {sec.tags && sec.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5 pt-1">
                                    {sec.tags.map((t, tIdx) => (
                                      <span key={tIdx} className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] font-mono border border-slate-200">
                                        #{t}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Toggle Button */}
                              <div className="shrink-0 pt-1 flex items-center gap-1.5">
                                <button
                                  type="button"
                                  className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 border transition-all ${
                                    isOpen 
                                      ? 'bg-slate-900 text-white border-slate-900' 
                                      : 'bg-white text-[#0055ff] border-[#0055ff] hover:bg-[#0055ff] hover:text-white'
                                  }`}
                                >
                                  <span>{isOpen ? '접기' : '상세 내용 보기'}</span>
                                  {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                </button>
                              </div>
                            </div>

                            {/* Collapsible Detail Content (세부 본문) */}
                            {isOpen && (
                              <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-dashed border-gray-200 space-y-4 animate-fadeIn">
                                
                                {/* Sub-project Action Links (GitHub Repository 등) */}
                                {sec.githubUrl && (
                                  <div className="pt-4 flex items-center justify-between border-b border-gray-100 pb-3 max-w-4xl mx-auto">
                                    <a
                                      href={sec.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-[#0055ff] text-white text-xs font-mono font-bold transition-colors shadow-2xs"
                                    >
                                      <Github className="w-3.5 h-3.5 text-white" />
                                      <span>GitHub Repository 바로가기</span>
                                      <ExternalLink className="w-3 h-3 opacity-70" />
                                    </a>
                                  </div>
                                )}

                                {/* Main Body & Images */}
                                <div className="bg-white p-6 sm:p-8 border border-gray-200 text-sm sm:text-[15px] leading-relaxed font-sans max-w-4xl mx-auto shadow-2xs">
                                  {renderSectionContent(sec)}
                                </div>

                                {/* Bottom Collapse Trigger */}
                                <div className="flex justify-end pt-2 max-w-4xl mx-auto">
                                  <button
                                    type="button"
                                    onClick={() => toggleSection(uniqueKey)}
                                    className="w-8 h-8 flex items-center justify-center bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#0055ff] border border-slate-200 transition-colors rounded-none"
                                    title="본문 접기"
                                    aria-label="본문 접기"
                                  >
                                    <ChevronUp className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Fallback for single overview without subsections */
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                        {project.overview}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
