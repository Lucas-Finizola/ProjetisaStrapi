import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_benefit_items';
  info: {
    displayName: 'Benefit Item';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsChecklistItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_checklist_items';
  info: {
    displayName: 'Checklist Item';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SectionsBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits_sections';
  info: {
    displayName: 'Benefits Section';
    icon: 'apps';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'elements.benefit-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'layout';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    formButtonText: Schema.Attribute.String;
    formTitle: Schema.Attribute.String;
    primaryButtonLink: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLocationGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_location_grids';
  info: {
    displayName: ' Location Grid';
  };
  attributes: {
    description: Schema.Attribute.String;
    location: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Nossas Localiza\u00E7\u00F5es'>;
  };
}

export interface SectionsTeamGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_grids';
  info: {
    displayName: 'Team Grid';
  };
  attributes: {
    description: Schema.Attribute.String;
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Nossa Equipe'>;
  };
}

export interface SectionsUrgencyBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_urgency_banners';
  info: {
    displayName: 'Urgency Banner';
    icon: 'bell';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.benefit-item': ElementsBenefitItem;
      'elements.checklist-item': ElementsChecklistItem;
      'sections.benefits-section': SectionsBenefitsSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.location-grid': SectionsLocationGrid;
      'sections.team-grid': SectionsTeamGrid;
      'sections.urgency-banner': SectionsUrgencyBanner;
    }
  }
}
