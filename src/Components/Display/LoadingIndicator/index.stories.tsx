import * as React from 'react';
import UpLoadingIndicator, {LoadingIndicator as UpLoadingIndicatorComponent} from './UpLoadingIndicator';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
    title: 'Components/Display/UpLoadingIndicator',
    decorators: [withKnobs, getRootContainer('UpLoadingIndicator')],
    component: UpLoadingIndicatorComponent
};

const styles: { [key: string]: React.CSSProperties } = {
    main: {
        margin: 15,
        maxWidth: 600,
        lineHeight: 1.4,
        fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
    },
    logo: {
        width: 200,
    },
    link: {
        color: '#1474f3',
        textDecoration: 'none',
        borderBottom: '1px solid #1474f3',
        paddingBottom: 2,
    },
    code: {
        fontSize: 15,
        fontWeight: 600,
        padding: '2px 5px',
        border: '1px solid #eae9e9',
        borderRadius: 4,
        backgroundColor: '#f3f2f2',
        color: '#3a3a3a',
    },
    note: {
        opacity: 0.5,
    },
};

export const General =
    () => (
        <UpLoadingIndicator
            isLoading={true}
            message="Chargement en cours">
        </UpLoadingIndicator>
    );

export const Modal =
    () => (
        <div style={styles.main}>
            <UpLoadingIndicator isLoading={true} displayMode={"modal"} message="Chargement en cours"></UpLoadingIndicator>
            <h1>Welcome to STORYBOOK</h1>
            <p>This is a UI component dev environment for your app.</p>
            <p>
                We've added some basic stories inside the
                {' '}
                <code style={styles.code}>src/stories</code>
                {' '}
                directory.
                <br />
                A story is a single state of one or more UI components. You can have as many stories as you want.
                <br />
                (Basically a story is like a visual test case.)
            </p>
            <p>
                See these sample
                {' '}
                <a style={styles.link} href="#">stories</a>
                {' '}
                for a component called
                {' '}
                <code style={styles.code}>Button</code>
            </p>
            <p>
                Just like that, you can add your own components as stories.
                <br />
                You can also edit those components and see changes right away.
                <br />
                (Try editing the <code style={styles.code}>Button</code> component
                located at <code style={styles.code}>src/stories/Button.js</code>.)
            </p>
            <p>
                This is just one thing you can do with Storybook.
                <br />
                Have a look at the
                {' '}
                <a style={styles.link} href="https://github.com/storybooks/storybook" target="_blank">Storybook</a>
                {' '}
                repo for more information.
            </p>
            <p style={styles.note}>
                <b>NOTE:</b>
                <br />
                Have a look at the
                {' '}
                <code style={styles.code}>.storybook/webpack.config.js</code>
                {' '}
                to add webpack
                loaders and plugins you are using in this project.
            </p>
        </div>
    );

export const Layer =
    () => (
        <div style={styles.main}>
            <UpLoadingIndicator isLoading={true} displayMode={"layer"} message="Chargement en cours"></UpLoadingIndicator>
            <h1>Welcome to STORYBOOK</h1>
            <p>This is a UI component dev environment for your app.</p>
            <p>
                We've added some basic stories inside the
                {' '}
                <code style={styles.code}>src/stories</code>
                {' '}
                directory.
                <br />
                A story is a single state of one or more UI components. You can have as many stories as you want.
                <br />
                (Basically a story is like a visual test case.)
            </p>
            <p>
                See these sample
                {' '}
                <a style={styles.link} href="#">stories</a>
                {' '}
                for a component called
                {' '}
                <code style={styles.code}>Button</code>
            </p>
            <p>
                Just like that, you can add your own components as stories.
                <br />
                You can also edit those components and see changes right away.
                <br />
                (Try editing the <code style={styles.code}>Button</code> component
                located at <code style={styles.code}>src/stories/Button.js</code>.)
            </p>
            <p>
                This is just one thing you can do with Storybook.
                <br />
                Have a look at the
                {' '}
                <a style={styles.link} href="https://github.com/storybooks/storybook" target="_blank">Storybook</a>
                {' '}
                repo for more information.
                </p>
            <p style={styles.note}>
                <b>NOTE:</b>
                <br />
                Have a look at the
                {' '}
                <code style={styles.code}>.storybook/webpack.config.js</code>
                {' '}
                to add webpack
                loaders and plugins you are using in this project.
            </p>
        </div>
    );

export const Zone =
    () => (
        <div style={styles.main}>
            <h1>Welcome to STORYBOOK</h1>
            <p>This is a UI component dev environment for your app.</p>
            <p>We've added some basic stories inside the
                {' '}
                <code style={styles.code}>src/stories</code>
                {' '} directory.
                <br />
                A story is a single state of one or more UI components. You can have as many stories as you want.
                <br />
                (Basically a story is like a visual test case.)
            </p>
            <p>See these sample
                {' '}
                <a style={styles.link} href="#">stories</a>
                {' '}
                for a component called
                {' '}
                <code style={styles.code}>Button</code>
         .  </p>
            <p>
                Just like that, you can add your own components as stories.
                <br />
                You can also edit those components and see changes right away.
                <br />
                (Try editing the <code style={styles.code}>Button</code> component
                located at <code style={styles.code}>src/stories/Button.js</code>.)
            </p>
            <div style={{ position: "relative" }}>
                <UpLoadingIndicator
                    isLoading={true}
                    displayMode={"modal"}
                    message="Chargement en cours">
                </UpLoadingIndicator>
                <p>This is just one thing you can do with Storybook.
                    <br />
                    Have a look at the
                    {' '}
                    <a style={styles.link} href="https://github.com/storybooks/storybook" target="_blank">Storybook</a>
                    {' '}
                    repo for more information.
                </p>
                <p style={styles.note}>
                    <b>NOTE:</b>
                    <br />
                    Have a look at the
                    {' '}
                    <code style={styles.code}>.storybook/webpack.config.js</code>
                    {' '}
                    to add webpack
                    loaders and plugins you are using in this project.
                </p>
            </div>
        </div>
    );