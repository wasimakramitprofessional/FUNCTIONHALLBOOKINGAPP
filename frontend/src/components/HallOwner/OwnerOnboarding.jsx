import React, { useState } from "react";

export default function OwnerOnboarding() {
  const [step, setStep] = useState(0);
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

  const steps = ["Basic Info", "Photos", "Pricing & Rules", "Submit"];

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    console.log("Submitting form:", formData);
    alert("Hall submitted for Admin Approval!");
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Owner Onboarding</h2>

      {/* Stepper */}
      <div className="flex space-x-2">
        {steps.map((label, i) => (
          <div
            key={label}
            className={`px-3 py-1 rounded text-sm 
              ${step === i ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            {i + 1}. {label}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="space-y-4">
        {step === 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Basic Info</h3>
            <input
              className="w-full border rounded p-2"
              placeholder="Hall name"
              value={formData.hallName}
              onChange={(e) => setFormData({ ...formData, hallName: e.target.value })}
            />
            <input
              className="w-full border rounded p-2"
              placeholder="Owner name / business"
              value={formData.ownerName}
              onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
            />
            <input
              className="w-full border rounded p-2"
              placeholder="Address / locality"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <input
              className="w-full border rounded p-2"
              placeholder="Capacity (min–max)"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
            />
            <select
              className="w-full border rounded p-2"
              value={formData.hallType}
              onChange={(e) => setFormData({ ...formData, hallType: e.target.value })}
            >
              <option value="">Select Hall Type</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
              <option value="Open Lawn">Open Lawn</option>
            </select>
            <input
              className="w-full border rounded p-2"
              placeholder="Contact number"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />
          </div>
        )}

        {step === 1 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Upload Photos</h3>
            <input
              type="file"
              multiple
              className="w-full border rounded p-2"
              onChange={(e) => setFormData({ ...formData, photos: [...e.target.files] })}
            />
            {formData.photos.length > 0 && (
              <ul className="list-disc pl-5 text-sm text-gray-600">
                {Array.from(formData.photos).map((file, i) => (
                  <li key={i}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Pricing & Rules</h3>
            <input
              className="w-full border rounded p-2"
              placeholder="Base rent (per day / slot)"
              value={formData.baseRent}
              onChange={(e) => setFormData({ ...formData, baseRent: e.target.value })}
            />
            <select
              className="w-full border rounded p-2"
              value={formData.catering}
              onChange={(e) => setFormData({ ...formData, catering: e.target.value })}
            >
              <option value="">Catering option</option>
              <option value="In-house">In-house</option>
              <option value="Outside allowed">Outside allowed</option>
            </select>
            <input
              type="number"
              className="w-full border rounded p-2"
              placeholder="Advance % required"
              value={formData.advance}
              onChange={(e) => setFormData({ ...formData, advance: e.target.value })}
            />
            <textarea
              className="w-full border rounded p-2"
              placeholder="Cancellation policy"
              value={formData.cancellation}
              onChange={(e) => setFormData({ ...formData, cancellation: e.target.value })}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Review & Submit</h3>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit for Admin Approval
            </button>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-2">
        {step > 0 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Back
          </button>
        )}
        {step < steps.length - 1 && (
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
