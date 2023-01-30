import { MultiTemplate, Template } from '../../storybook/helper.stories.templates';
import { DocumentationPage } from '../../storybook/helper.stories.docs';
import StyleDocs from '../../storybook/docs.stories.style.mdx';

import Reaction, { ReactionProps } from './';
import argTypes from './Reaction.stories.args';
import Documentation from './Reaction.stories.docs.mdx';
import { REACTION_NAMES } from './Reaction.constants';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Momentum UI/Reaction',
  component: Reaction,
  parameters: {
    expanded: true,
    docs: {
      page: DocumentationPage(Documentation, StyleDocs),
    },
  },
  args: {
    name: REACTION_NAMES.thumbUpYellow,
    loop: 1,
    autoPlay: true,
    onComplete: action('onComplete'),
  },
};

const Example = Template<ReactionProps>(Reaction).bind({});

Example.argTypes = { ...argTypes };

const Common = MultiTemplate<ReactionProps>(Reaction).bind({});

Common.argTypes = { ...argTypes };
delete Common.argTypes.children;

Common.parameters = {
  variants: [
    { name: REACTION_NAMES.popper },
    { name: REACTION_NAMES.heart },
    { name: REACTION_NAMES.thumbUpYellow },
    { name: REACTION_NAMES.smile },
    { name: REACTION_NAMES.haha },
    { name: REACTION_NAMES.wow },
    { name: REACTION_NAMES.sad },
    { name: REACTION_NAMES.popper, size: 16 },
    { name: REACTION_NAMES.heart, size: 16 },
    { name: REACTION_NAMES.thumbUpYellow, size: 16 },
    { name: REACTION_NAMES.smile, size: 16 },
    { name: REACTION_NAMES.haha, size: 16 },
    { name: REACTION_NAMES.wow, size: 16 },
    { name: REACTION_NAMES.sad, size: 16 },
  ],
};

export { Example, Common };
