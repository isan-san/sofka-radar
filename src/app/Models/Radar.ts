export interface Radar {
  radarId?: string;
  descriptorList: Descriptor[];
}

export interface Descriptor {
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

export const defaultDescriptio: Descriptor = {
  knowledgeArea: '',
  description: '',
  factual: 0,
  conceptual: 0,
  procedural: 0,
  metacognitive: 0,
  approvalLevel: 0,
};
