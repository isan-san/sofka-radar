export interface Radar {
  radarId: string;
  descriptorList: Descriptor[];
}

interface Descriptor {
  knowledgeArea: string;
  description: string;
  factual: number;
  conceptual: number;
  procedural: number;
  metacognitive: number;
  approvalLevel: number;
}

export const defaultRadar: Radar = {
  radarId: '',
  descriptorList: [],
};
