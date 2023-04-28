import { Descriptor, Radar } from './Radar';

export interface Training {
  trainingId: string;
  trainingName: string;
  trainingCycle: string;
  trainingRadar: Radar;
  apprenticesList: ApprenticesList[];
}

export interface ApprenticesList {
  apprenticeId: string;
  name: string;
  email?: string;
  descriptorList: Descriptor[];
}
export const defaultTraining: Training = {
  trainingId: '',
  trainingName: '',
  trainingCycle: '',
  trainingRadar: {
    radarId: '',
    descriptorList: [],
  },
  apprenticesList: [],
};
