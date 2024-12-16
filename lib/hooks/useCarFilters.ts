import { useState, useMemo } from 'react';
import { DealerCar } from '@/types/dealerCar';

export type FilterType = 'all' | 'new' | 'used';

interface UseCarFiltersResult {
  typeFilter: FilterType;
  setTypeFilter: (filter: FilterType) => void;
  filteredCars: DealerCar[];
}

export function useCarFilters(cars: DealerCar[]): UseCarFiltersResult {
  const [typeFilter, setTypeFilter] = useState<FilterType>('all');

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      if (typeFilter === 'all') return true;
      return car.type === typeFilter;
    });
  }, [cars, typeFilter]);

  return {
    typeFilter,
    setTypeFilter,
    filteredCars,
  };
}