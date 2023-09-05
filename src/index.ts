import { default as expectPatched } from '@storybook/expect';
import { instrument } from '@storybook/instrumenter';
import * as matchers from '@testing-library/jest-dom/matchers';
import * as mock from 'jest-mock';
import { expect as jestExpect } from '@jest/globals';

type JestExpect = typeof jestExpect;

const { jest } = instrument({ jest: mock });

const expect = instrument(
	{ expect: expectPatched },
	{ intercept: (_method, path) => path[0] !== 'expect' }
).expect as unknown as JestExpect;

expect.extend(matchers);

export { expect, jest };
