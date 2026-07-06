// OwnerOnboarding.js
import React, { useState } from "react";
import OnboardingStepper from "../components/OnboardingStepper";
import StepBasicInfo from "../components/StepBasicInfo";
import StepPhotos from "../components/StepPhotos";
import StepPricingRules from "../components/StepPricingRules";
import StepSubmit from "../components/StepSubmit";

export default function OwnerOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    hallName: "",
    ownerName: "",
    address: "",
    capacity: "",
    hallType: "",
    contact: "",
    photos: [],
    baseRent: "",
    catering: "",
    advance: "",
    cancellation: ""
  });

  const steps = [
    <StepBasicInfo formData={formData} setFormData={setFormData} />,
    <StepPhotos formData={formData} setFormData={setFormData} />,
    <StepPricingRules formData={formData} setFormData={setFormData} />,
    <StepSubmit formData={formData} />
  ];

  return (
    <div className="onboarding">
      <OnboardingStepper currentStep={currentStep} />
      <div className="step-content">{steps[currentStep]}</div>
      <div className="actions">
        {currentStep > 0 && (
          <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
        )}
        {currentStep < steps.length - 1 && (
          <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}


