import * as React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpBadge from '../UpBadge';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import { style } from 'typestyle';

const whithTheme = component => <UpThemeProvider theme={UpDefaultTheme}>{component}</UpThemeProvider>;
const renderComponent = component => render(whithTheme(component));

afterEach(cleanup);

describe('Tests for UpBadge', () => {
  it('should render text', () => {
    renderComponent(<UpBadge text="1" />);

    expect(screen.getByText('1')).toHaveClass('up-badge');
  });

  it('should add class to container', () => {
    renderComponent(<UpBadge text="1" />);

    const badgeClasses = screen.getByText('1').className;
    expect(badgeClasses.replace('up-badge', '').length).toBeGreaterThan(0);
  });

  it('should pass class as props', () => {
    renderComponent(<UpBadge text="1" className={style({ margin: 10 })} />);

    const badgeClasses = screen.getByText('1').className.split(' ');
    expect(badgeClasses.length).toBe(3);
  });

  it('should call onClick callback', () => {
    const onClick = jest.fn();
    renderComponent(<UpBadge text="1" onClick={onClick} />);

    fireEvent.click(screen.getByText('1'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should call onMouseEnter callback', () => {
    const onMouseEnter = jest.fn();
    renderComponent(<UpBadge text="1" onMouseEnter={onMouseEnter} />);

    fireEvent.mouseEnter(screen.getByText('1'));
    expect(onMouseEnter).toHaveBeenCalled();
  });

  it('should call onMouseEnter callback', () => {
    const onMouseLeave = jest.fn();
    renderComponent(<UpBadge text="1" onMouseLeave={onMouseLeave} />);

    fireEvent.mouseLeave(screen.getByText('1'));
    expect(onMouseLeave).toHaveBeenCalled();
  });
});
