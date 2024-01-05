import { beforeEach, describe, expect, test } from 'vitest';

import { GraphiQL } from '../index';
import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';
import { ENDPOINT } from '../../../constants';

describe('GrapiQL', () => {
  let wrapper: HTMLElement;
  beforeEach(async () => {
    const { container } = await renderWithRouterAndProvider(<GraphiQL />);
    wrapper = container;
  });

  test('has default value', () => {
    const input = wrapper.querySelector('#filled-size-small');
    expect(input?.getAttribute('value')).toEqual(ENDPOINT);
  });
});
