import React from 'react'

const Chip = () => {
  return (
    <div className="relative border-2 max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-1 h-7 text-small rounded-full bg-warning/20 text-warning-600 dark:text-warning">
      <span className="flex-1 text-inherit font-normal px-2">Flat</span>
    </div>
  );
}

export default Chip