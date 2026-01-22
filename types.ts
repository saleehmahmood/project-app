
export interface SensorData {
  pm25: number;
  voc: number;
  no2: number;
  so2: number;
  o3: number;
  co: number;
  co2: number;
  temp: number;
  timestamp: string;
}

export interface Incentive {
  id: string;
  country: string;
  type: 'Grant' | 'Tax Credit' | 'Subsidy' | 'Waiver' | 'Loan' | 'Tariff' | 'R&D';
  name: string;
  amount: string;
  eligibility: string;
  link: string;
}

export interface RoadmapStep {
  id: string;
  category: 'ISO' | 'DOE' | 'ESG';
  title: string;
  description: string;
  completed: boolean;
  targetDate: string;
}

export interface CarbonMarketData {
  pricePerTon: number;
  captureTons: number;
  operatingCost: number;
  subsidies: number;
}
