import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalFaq extends Struct.ComponentSchema {
  collectionName: 'components_global_faqs';
  info: {
    displayName: 'faq';
    icon: 'check';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.faq': GlobalFaq;
    }
  }
}
