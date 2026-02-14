import React, { useState } from 'react';
import { GANZHI_STEMS, GANZHI_BRANCHES } from '../constants';

// Dictionary of Chinese New Year dates (MM-DD) for 1920-2030
// Used to precisely determine if a Jan/Feb birthday belongs to the previous lunar year.
const CNY_DATES: Record<number, string> = {
  1920:'02-20',1921:'02-08',1922:'01-28',1923:'02-16',1924:'02-05',
  1925:'01-24',1926:'02-13',1927:'02-02',1928:'01-23',1929:'02-10',
  1930:'01-30',1931:'02-17',1932:'02-06',1933:'01-26',1934:'02-14',
  1935:'02-04',1936:'01-24',1937:'02-11',1938:'01-31',1939:'02-19',
  1940:'02-08',1941:'01-27',1942:'02-15',1943:'02-05',1944:'01-25',
  1945:'02-13',1946:'02-02',1947:'01-22',1948:'02-10',1949:'01-29',
  1950:'02-17',1951:'02-06',1952:'01-27',1953:'02-14',1954:'02-03',
  1955:'01-24',1956:'02-12',1957:'01-31',1958:'02-18',1959:'02-08',
  1960:'01-28',1961:'02-15',1962:'02-05',1963:'01-25',1964:'02-13',
  1965:'02-02',1966:'01-21',1967:'02-09',1968:'01-30',1969:'02-17',
  1970:'02-06',1971:'01-27',1972:'02-15',1973:'02-03',1974:'01-23',
  1975:'02-11',1976:'01-31',1977:'02-18',1978:'02-07',1979:'01-28',
  1980:'02-16',1981:'02-05',1982:'01-25',1983:'02-13',1984:'02-02',
  1985:'02-20',1986:'02-09',1987:'01-29',1988:'02-17',1989:'02-06',
  1990:'01-27',1991:'02-15',1992:'02-04',1993:'01-23',1994:'02-10',
  1995:'01-31',1996:'02-19',1997:'02-07',1998:'01-28',1999:'02-16',
  2000:'02-05',2001:'01-24',2002:'02-12',2003:'02-01',2004:'01-22',
  2005:'02-09',2006:'01-29',2007:'02-18',2008:'02-07',2009:'01-26',
  2010:'02-14',2011:'02-03',2012:'01-23',2013:'02-10',2014:'01-31',
  2015:'02-19',2016:'02-08',2017:'01-28',2018:'02-16',2019:'02-05',
  2020:'01-25',2021:'02-12',2022:'02-01',2023:'01-22',2024:'02-10',
  2025:'01-29',2026:'02-17',2027:'02-06',2028:'01-26',2029:'02-13',
  2030:'02-03'
};

export const GanzhiCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState('');

  // Calculates the Stem and Branch for a given year
  const getGanzhi = (year: number) => {
    // 4 AD is the start of a cycle (Jia-Zi)
    const stemIndex = (year - 4) % 10;
    const branchIndex = (year - 4) % 12;
    
    // Handle negative results for BC years if needed
    const stem = GANZHI_STEMS[stemIndex >= 0 ? stemIndex : stemIndex + 10];
    const branch = GANZHI_BRANCHES[branchIndex >= 0 ? branchIndex : branchIndex + 12];
    
    return { stem, branch };
  };

  const getBirthResult = () => {
    if (!birthDate) return null;
    
    // Parse manually to avoid timezone issues ensuring we operate on calendar dates
    const [yStr, mStr, dStr] = birthDate.split('-');
    const year = parseInt(yStr, 10);
    const month = parseInt(mStr, 10);
    const day = parseInt(dStr, 10);

    let displayYear = year;
    let adjusted = false;
    let cnyDate = '';

    // Check against lookup table if available
    if (CNY_DATES[year]) {
        const [cnyM, cnyD] = CNY_DATES[year].split('-').map(Number);
        cnyDate = `${year}-${CNY_DATES[year]}`;
        
        // If birthday is before CNY, it belongs to previous lunar year
        if (month < cnyM || (month === cnyM && day < cnyD)) {
            displayYear = year - 1;
            adjusted = true;
        }
    } else {
        // Fallback for years outside map: Simple approximation
        // If before Feb 4 (Start of Spring / Li Chun), likely previous year
        if (month === 1 || (month === 2 && day < 4)) {
            displayYear = year - 1;
            adjusted = true;
        }
    }

    const { stem, branch } = getGanzhi(displayYear);
    return { year: displayYear, stem, branch, adjusted, originalYear: year, cnyDate };
  };

  const birthResult = getBirthResult();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        
        {/* BIRTHDAY CHECKER */}
        <div>
            <h3 className="text-xl font-bold text-cny-darkRed font-serif mb-4 flex items-center">
                <span className="bg-cny-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">1</span>
                Discover Your "Nongli" Animal
            </h3>
            <p className="text-gray-600 text-sm mb-4">
                Enter your Gregorian birthday. We'll check the exact Chinese New Year date to find your true animal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="w-full sm:w-auto">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Your Birthday</label>
                    <input 
                        type="date" 
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-cny-gold outline-none w-full"
                    />
                </div>
            </div>

            {birthResult && (
                <div className="mt-6 bg-orange-50 p-6 rounded-xl border border-orange-100 flex flex-col md:flex-row items-center gap-6 animate-flip-in">
                    <div className="w-24 h-24 bg-cny-red rounded-full flex items-center justify-center text-4xl shadow-lg text-white font-bold border-4 border-cny-gold shrink-0">
                        {birthResult.branch.char}
                    </div>
                    <div>
                        <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">You are a</div>
                        <div className="text-3xl font-serif font-bold text-cny-darkRed">
                            {birthResult.stem.element} {birthResult.branch.name}
                        </div>
                        <div className="text-lg text-gray-700 font-serif">
                             Year of {birthResult.stem.name}-{birthResult.branch.name}
                        </div>
                        <div className="text-xs text-gray-400 mt-2">
                             Calculated Year: {birthResult.year} 
                             {birthResult.adjusted && ` (Gregorian: ${birthResult.originalYear})`}
                        </div>
                        {birthResult.adjusted && birthResult.cnyDate && (
                           <div className="text-xs text-cny-darkRed mt-1 font-bold bg-white/50 inline-block px-2 py-1 rounded">
                              * Born before CNY ({birthResult.cnyDate}), so you belong to the previous year.
                           </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};
