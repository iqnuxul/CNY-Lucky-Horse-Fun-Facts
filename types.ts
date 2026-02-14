import React from 'react';

export interface FactItem {
  id: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

export interface ComparisonPoint {
  category: string;
  cny: string;
  lny: string;
}

export enum GenerationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface HorseGenerationState {
  status: GenerationStatus;
  imageUrl: string | null;
  error: string | null;
}