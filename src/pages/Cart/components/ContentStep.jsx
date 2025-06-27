import React, { useContext } from 'react';
import { StepperContext } from '@/contexts/StepperProvider';
import Contents from '@/pages/Cart/components/contents/Contents';

function ContentStep() {
  const { currentStep } = useContext(StepperContext);
  const handleRenderContent = () => {
    switch (currentStep) {
      case 1:
        return <Contents />;
      case 2:
        return <h2>2</h2>;
      case 3:
        return <h1>3</h1>;
    }
  };
  return <>{handleRenderContent()}</>;
}

export default ContentStep;
