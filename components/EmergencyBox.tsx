'use client';

interface EmergencyBoxProps {
  title: string;
  body: string;
  variant?: 'red' | 'orange';
}

export default function EmergencyBox({ title, body, variant = 'red' }: EmergencyBoxProps) {
  const styles = variant === 'red'
    ? 'bg-red-50 border-red-400 text-red-900'
    : 'bg-orange-50 border-orange-400 text-orange-900';

  return (
    <div className="bg-[var(--green)] text-white rounded-2xl px-6 py-5">
      <div className="font-bold text-base mb-1.5">{title}</div>
      <div className="text-white/70 text-sm leading-relaxed">{body}</div>
    </div>
  );
}
