import React from 'react';

interface PushToTalkButtonProps {
  onMouseDown: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseUp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onTouchStart: (e: React.TouchEvent<HTMLButtonElement>) => void;
  onTouchEnd: (e: React.TouchEvent<HTMLButtonElement>) => void;
}

const PushToTalkButton: React.FC<PushToTalkButtonProps> = ({
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  onTouchStart,
  onTouchEnd,
}) => {
  return (
    <button
      className="px-6 py-3 w-40 bg-blue-600 text-white font-bold hover:opacity-80 rounded-3xl border-none focus:ring-1 ring-brand-100 outline-none"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      Push to Talk
    </button>
  );
};

export default PushToTalkButton;

