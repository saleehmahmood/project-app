import { Incentive, RoadmapStep } from './types';

export const POLLUTION_THRESHOLDS = {
  pm25: { low: 15, moderate: 35, high: 55, unit: 'µg/m³', label: 'PM2.5' },
  voc: { low: 200, moderate: 400, high: 600, unit: 'ppb', label: 'VOC' },
  no2: { low: 20, moderate: 40, high: 60, unit: 'ppb', label: 'NO₂' },
  co2: { low: 600, moderate: 1000, high: 1500, unit: 'ppm', label: 'CO₂' },
  so2: { low: 20, moderate: 50, high: 100, unit: 'µg/m³', label: 'SO₂' }
};

export const MOCK_INCENTIVES: Incentive[] = [
  { id: '1', country: 'USA', type: 'Tax Credit', name: 'Section 45Q Carbon Capture', amount: '$85 - $180/ton', eligibility: 'Carbon Capture & Storage Projects', link: 'https://energy.gov' },
  { id: '2', country: 'Germany', type: 'Grant', name: 'CCS Support Fund', amount: '€50M Available', eligibility: 'Industrial decarbonization', link: 'https://bmwi.de' },
  { id: '3', country: 'EU', type: 'Tariff', name: 'Renewable Feed-in Tariff', amount: 'Fixed Rate / 20yr', eligibility: 'Grid-connected green power plants', link: 'https://ec.europa.eu' },
  { id: '4', country: 'Japan', type: 'R&D', name: 'Green Innovation Fund', amount: '¥2 Trillion', eligibility: 'Next-gen hydrogen and capture tech', link: 'https://meti.go.jp' },
  { id: '5', country: 'Canada', type: 'Tax Credit', name: 'ITC for CCUS', amount: 'up to 60%', eligibility: 'CCUS equipment costs', link: 'https://canada.ca' },
  { id: '6', country: 'India', type: 'Loan', name: 'IREDA Green Energy Loan', amount: '2% Rate Discount', eligibility: 'Utility-scale solar and wind', link: 'https://ireda.in' },
  { id: '7', country: 'Norway', type: 'Subsidy', name: 'Enova Industrial Support', amount: 'up to 40% Capex', eligibility: 'Zero-emission maritime and industry', link: 'https://enova.no' }
];

export const MOCK_ROADMAP: RoadmapStep[] = [
  // ISO 14001:2015
  { id: 'r1', category: 'ISO', title: 'Context & Scope Definition', description: 'Analyze internal/external environmental issues and define boundaries for ISO 14001:2015 compliance.', completed: true, targetDate: '2024-01-05' },
  { id: 'r2', category: 'ISO', title: 'Environmental Policy & Leadership', description: 'Senior management must establish a formal environmental policy and commit to continuous improvement.', completed: true, targetDate: '2024-01-20' },
  
  // DOE / Energy Star - Benchmarking
  { id: 'r3', category: 'DOE', title: 'Energy Star Portfolio Manager Setup', description: 'Benchmark facility energy performance using at least 12 months of utility data. Required to establish a baseline Energy Use Intensity (EUI).', completed: true, targetDate: '2024-02-15' },
  
  // DOE / Energy Star - Audits (Specific Requirement)
  { id: 'r4', category: 'DOE', title: 'Energy Audit (ASHRAE Level II)', description: 'Mandatory technical assessment. Includes building walkthrough, energy billing analysis, and identification of low-cost/no-cost energy conservation measures (ECMs).', completed: true, targetDate: '2024-03-25' },
  
  // ISO Continued
  { id: 'r5', category: 'ISO', title: 'Environmental Aspects Mapping', description: 'Identify and evaluate significant environmental impacts for all operational processes.', completed: false, targetDate: '2024-04-10' },
  
  // DOE Efficiency - HVAC (Specific Requirement)
  { id: 'r6', category: 'DOE', title: 'HVAC Optimization & Control', description: 'Implement Demand Controlled Ventilation (DCV), optimize economizer operation, and seal building envelope leaks to ensure maximum thermal efficiency.', completed: false, targetDate: '2024-05-15' },
  
  // DOE Efficiency - Lighting (Specific Requirement)
  { id: 'r7', category: 'DOE', title: 'Smart LED Retrofit & Controls', description: 'Installation of high-efficacy LED lighting systems integrated with daylight harvesting and occupancy sensors to drastically reduce non-operational load.', completed: false, targetDate: '2024-06-20' },
  
  // ESG
  { id: 'r8', category: 'ESG', title: 'Stakeholder Engagement & Materiality', description: 'Define key ESG metrics (GRI/SASB) based on stakeholder impact and financial relevance.', completed: false, targetDate: '2024-07-30' },
  
  // DOE / Energy Star - Final Certification
  { id: 'r9', category: 'DOE', title: 'Energy Star Score Verification (75+)', description: 'Must achieve a score of 75 or higher on the 100-point scale. Verification of technical data by a Licensed Professional Engineer (PE) is strictly required.', completed: false, targetDate: '2024-09-15' },
  { id: 'r10', category: 'DOE', title: 'Final DOE Certification Submission', description: 'Finalize official application in Portfolio Manager and submit verified performance data to the EPA/DOE for certification award.', completed: false, targetDate: '2024-11-01' }
];

export const MOCK_HISTORICAL_DATA = [
  { time: 'Jan', pm25: 45, no2: 30, co2: 430, so2: 12, voc: 350 },
  { time: 'Feb', pm25: 42, no2: 28, co2: 425, so2: 10, voc: 340 },
  { time: 'Mar', pm25: 38, no2: 25, co2: 418, so2: 15, voc: 320 },
  { time: 'Apr', pm25: 35, no2: 22, co2: 415, so2: 8, voc: 310 },
  { time: 'May', pm25: 28, no2: 18, co2: 412, so2: 7, voc: 290 },
  { time: 'Jun', pm25: 25, no2: 15, co2: 410, so2: 5, voc: 280 },
];