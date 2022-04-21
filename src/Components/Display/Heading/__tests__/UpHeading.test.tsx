import * as React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpHeading from '../UpHeading';

afterEach(cleanup);

describe('Tests for UpHeading', () => {
  it('should render title in h1 tag', () => {
    render(<UpHeading tag={'h1'}>H1 Title</UpHeading>);

    expect(screen.getByText('H1 Title').nodeName).toBe('H1');
  });

  it('should render title in h2 tag', () => {
    render(<UpHeading tag={'h2'}>H2 Title</UpHeading>);

    expect(screen.getByText('H2 Title').nodeName).toBe('H2');
  });

  it('should render title in h3 tag', () => {
    render(<UpHeading tag={'h3'}>H3 Title</UpHeading>);

    expect(screen.getByText('H3 Title').nodeName).toBe('H3');
  });

  it('should render title in h4 tag', () => {
    render(<UpHeading tag={'h4'}>H4 Title</UpHeading>);

    expect(screen.getByText('H4 Title').nodeName).toBe('H4');
  });

  it('should render title in h5 tag', () => {
    render(<UpHeading tag={'h5'}>H5 Title</UpHeading>);

    expect(screen.getByText('H5 Title').nodeName).toBe('H5');
  });

  it('should render title in h6 tag', () => {
    render(<UpHeading tag={'h6'}>H6 Title</UpHeading>);

    expect(screen.getByText('H6 Title').nodeName).toBe('H6');
  });
});
