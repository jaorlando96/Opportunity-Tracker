/** Contract for opportunity discovery providers. Replace with a search/research API adapter. */
export class ResearchProvider {
  async discover(_profile) { throw new Error('A research provider has not been configured.'); }
  async enrich(_opportunity) { throw new Error('A research provider has not been configured.'); }
}

/** Normalizes provider records before scoring and persistence. */
export const normalizeOpportunity = record => ({
  ...record,
  discoveredAt: record.discoveredAt || new Date().toISOString(),
  sourceUrl: record.sourceUrl || '',
  status: record.status || 'new',
});
