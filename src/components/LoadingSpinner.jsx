import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <Loader2 className="h-8 w-8 text-[#8f55ff] animate-spin" />
    </div>
  );
};

export default LoadingSpinner;