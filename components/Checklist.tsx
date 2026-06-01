'use client';

interface ChecklistProps {
  title: string;
  items: string[];
  numbered?: boolean;
}

export default function Checklist({ title, items, numbered = false }: ChecklistProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
        <span className="w-6 h-6 bg-[#1A6B4A] text-white rounded-full flex items-center justify-center text-xs">✓</span>
        {title}
      </h3>
      <ol className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5
              ${numbered ? 'bg-[#1A6B4A] text-white' : 'border-2 border-[#1A6B4A] text-[#1A6B4A]'}`}>
              {numbered ? i + 1 : '✓'}
            </span>
            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
