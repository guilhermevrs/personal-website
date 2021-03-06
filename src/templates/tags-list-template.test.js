import React from 'react';
import renderer from 'react-test-renderer';
import TagsListTemplate from './tags-list-template';

describe('TagsListTemplate', () => {
  const props = {
    data: {
      allMdx: {
        group: [
          {
            fieldValue: 'test_0',
            totalCount: 1
          },
          {
            fieldValue: 'test_1',
            totalCount: 2
          }
        ]
      },
      site: {
        siteMetadata: {
          title: 'test',
          subtitle: 'test'
        }
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<TagsListTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
