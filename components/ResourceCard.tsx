/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ReactNode } from 'react';

interface ResourceCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  href?: string;
  badge?: string;
  tags?: string[];
  phone?: string;
  accent?: string;
  visitLabel?: string;
}

export default function ResourceCard({ icon, title, desc, href, badge, tags, phone, accent = '#1A6B4A', visitLabel = 'Visit →' }: ResourceCardProps) {
  const Wrapper = href ? 'a' : 'div';
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Wrapper
      {...(props as any)}
      className={`group bg-white border border-[var(--rule)] rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 ${href ? 'cursor-pointer hover:bg-[var(--cream)]' : ''}`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-xl" style={{ backgroundColor: `${accent}18` }}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          {badge && (
            <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-1" style={{ backgroundColor: `${accent}15`, color: accent }}>
              {badge}
            </span>
          )}
          <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-[#1A6B4A] transition-colors">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      {phone && (
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-xs">📞</span>
          <span className="font-mono text-sm font-bold text-[#1A6B4A]">{phone}</span>
        </div>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">{tag}</span>
          ))}
        </div>
      )}
      {href && (
        <div className="flex items-center gap-1 text-xs font-medium mt-auto" style={{ color: accent }}>
          <span>{visitLabel}</span>
        </div>
      )}
    </Wrapper>
  );
}
