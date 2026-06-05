'use client';

interface EmergencyBoxProps {
  title: string;
  body: string;
  variant?: 'red' | 'orange';
}

export default function EmergencyBox({ title, body }: EmergencyBoxProps) {
  return (
    <div className="bg-[var(--forest)] text-white rounded-2xl px-6 py-5">
      <div className="font-bold text-base mb-1.5">{title}</div>
      <div className="text-white/70 text-sm leading-relaxed">{body}</div>
    </div>
  );
}
