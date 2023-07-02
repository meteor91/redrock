import type {StorybookConfig} from "@storybook/react-webpack5";
import * as path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: '@storybook/addon-styling',
            options: {
                less: {
                    // Require your Less preprocessor here
                    implementation: require('less'),
                    lessOptions: {
                        paths: ['./src'],
                        importLoaders: 1,
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                },
            },
        },
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config, {configType}) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        // config.module.rules.push({
        //     test: /\.less$/,
        //     use: ['style-loader', 'css-loader', 'less-loader'],
        //     include: path.resolve(__dirname, '../'),
        // });
        return config;
    }
};
export default config;
