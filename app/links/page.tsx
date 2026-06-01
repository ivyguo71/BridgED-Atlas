/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useLanguage } from '@/components/LanguageContext';

const videos = [
  { key: 'v1', url: 'https://youtu.be/Ltn3qC66n-g', thumb: '▶️' },
  { key: 'v2', url: 'https://youtu.be/wTBvJxkOCH8', thumb: '▶️' },
];

const partners = [
  { key: 'p1', url: 'http://apfs-jp.blogspot.com/' },
  { key: 'p2', url: 'http://act-takashimadaira.tokyo/' },
  { key: 'p3', url: 'http://apfs-union.org/' },
  { key: 'p4', url: 'http://www.ngy.3web.ne.jp/~kyojukon/' },
  { key: 'p5', url: 'http://www6.ocn.ne.jp/~k13sin19/' },
  { key: 'p6', url: 'http://www.t-pblo.jp/fiss/j/' },
  { key: 'p7', url: 'http://www.refugee.or.jp/' },
  { key: 'p8', url: 'http://www.ficec.jp/index.html' },
  { key: 'p9', url: 'http://mrm.blogdehp.ne.jp/' },
  { key: 'p10', url: 'http://www.ccs-ngo.org/' },
  { key: 'p11', url: 'http://www.japanbangladesh.com/jp/' },
  { key: 'p12', url: 'http://www.jfcnet.org/' },
  { key: 'p13', url: 'http://mickanagawa.web.fc2.com/' },
  { key: 'p14', url: 'http://www12.ocn.ne.jp/~gqnet/' },
  { key: 'p15', url: 'http://rafiq.jp/' },
  { key: 'p16', url: 'http://migrants-refugees.com/' },
];

export default function LinksPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-[#1A6B4A]/10 text-[#1A6B4A] rounded-full px-3 py-1 text-xs font-semibold mb-3">
          {t('page.links.badge')}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{t('links.title')}</h1>
        <p className="text-gray-600 text-lg leading-relaxed">{t('links.subtitle')}</p>
      </div>

      {/* Videos */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#1A6B4A] rounded-full" />
          {t('links.videos.title')}
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {videos.map((v) => (
            <a
              key={v.key}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex gap-4 items-start"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                {v.thumb}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#1A6B4A] transition-colors">
                  {t(`links.${v.key}.title` as any)}
                </div>
                <div className="text-gray-500 text-xs leading-relaxed">
                  {t(`links.${v.key}.desc` as any)}
                </div>
                <div className="text-red-600 text-xs mt-2 font-medium">{t('ui.youtube')}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#1A6B4A] rounded-full" />
          {t('links.partners.title')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((p) => (
            <a
              key={p.key}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-2"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#1A6B4A]/10 rounded-lg flex items-center justify-center text-[#1A6B4A] text-xs font-bold shrink-0">
                  {(p.key.replace('p', ''))}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-[#1A6B4A] transition-colors">
                    {t(`links.${p.key}.title` as any)}
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-xs leading-relaxed">
                {t(`links.${p.key}.desc` as any)}
              </div>
              <div className="mt-auto">
                <span className="text-[10px] text-gray-400 truncate block">{p.url}</span>
                <span className="text-[#1A6B4A] text-xs font-medium">{t('ui.visit')}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
