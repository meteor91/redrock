import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

import * as packageJson from "./package.json" assert {type: "json"};

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            // terser(),
            postcss({
                plugins: []
            })
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts.default()],
        external: [/\.less$/],
    },
];