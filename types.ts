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