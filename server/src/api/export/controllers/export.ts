/**
 * A set of functions called "actions" for `export`
 */

import { QueryParamsType } from '../interface';

export default {
  exportData: async (ctx) => {
    try {
      const query = ctx.request.query as QueryParamsType;

      const exportEntities = {
        games: strapi.service('api::export.export').exportGames(query.format),
      };

      const bufferData = await exportEntities[query.entity];

      ctx.body = bufferData;
    } catch (err) {
      console.error(err);

      ctx.badRequest('Games export error', { moreDetails: err });
    }
  },
};
